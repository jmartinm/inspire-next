#
## This file is part of INSPIRE.
## Copyright (C) 2015 CERN.
##
## INSPIRE is free software; you can redistribute it and/or
## modify it under the terms of the GNU General Public License as
## published by the Free Software Foundation; either version 2 of the
## License, or (at your option) any later version.
##
## INSPIRE is distributed in the hope that it will be useful, but
## WITHOUT ANY WARRANTY; without even the implied warranty of
## MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
## General Public License for more details.
##
## You should have received a copy of the GNU General Public License
## along with INSPIRE; if not, write to the Free Software Foundation, Inc.,
## 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
#

from functools import wraps

from inspire.modules.deposit.utils import filter_empty_helper


def filter_empty_elements(recjson):
    """Filter empty fields."""
    list_fields = [
        'institution_history', 'advisors', 'websites'
    ]
    for key in list_fields:
        recjson[key] = filter(
            filter_empty_helper(), recjson.get(key, [])
        )

    return recjson


def create_marcxml_record():
    """Finalize the SIP by generating the MARC and storing it in the SIP."""
    @wraps(create_marcxml_record)
    def _create_marcxml_record(obj, eng):
        from invenio.modules.records.api import Record
        obj.log.info("Creating marcxml record")
        x = Record.create(obj.data, 'json', model='author')
        obj.extra_data["marcxml"] = x.legacy_export_as_marc()
    return _create_marcxml_record


def convert_data_to_model():
    """Manipulate form data to match author model keys."""
    @wraps(create_marcxml_record)
    def _convert_data_to_model(obj, eng):
        import copy
        # Save original form data for later access
        obj.extra_data["formdata"] = copy.deepcopy(obj.data)

        data = obj.data
        filter_empty_elements(data)
        data["name"] = {}
        if "status" in data and data["status"]:
            data["name"]["status"] = data["status"]
        if "given_names" in data and data["given_names"]:
            data["name"]["first"] = data["given_names"].strip()
        if "family_name" in data and data["family_name"]:
            data["name"]["last"] = data["family_name"].strip()
        if "display_name" in data and data["display_name"]:
            data["name"]["preferred_name"] = data["display_name"]
        data["urls"] = []
        if "websites" in data and data["websites"]:
            for website in data["websites"]:
                data["urls"].append({
                    "value": website["webpage"],
                    "description": ""
                })
        if "twitter_url" in data and data["twitter_url"]:
            data["urls"].append({
                "value": data["twitter_url"],
                "description": "TWITTER"
            })
        if "blog_url" in data and data["blog_url"]:
            data["urls"].append({
                "value": data["blog_url"],
                "description": "BLOG"
            })
        if "linkedin_url" in data and data["linkedin_url"]:
            data["urls"].append({
                "value": data["linkedin_url"],
                "description": "LINKEDIN"
            })
        data["ids"] = []
        if "orcid" in data and data["orcid"]:
            data["ids"].append({
                "type": "ORCID",
                "value": data["orcid"]
            })
        if "author_id" in data and data["author_id"]:
            data["ids"].append({
                "type": "BAI",
                "value": data["author_id"]
            })
        data["_public_emails"] = []
        if "public_email" in data and data["public_email"]:
            data["_public_emails"].append({
                "value": data["public_email"],
                "current": "Current"
            })
        data["field_categories"] = []
        if "research_field" in data and data["research_field"]:
            for field in data["research_field"]:
                data["field_categories"].append({
                    "name": field,
                    "type": "arxiv"
                })
            del data["research_field"]
        data["positions"] = []
        if "institution_history" in data and data["institution_history"]:
            for position in data["institution_history"]:
                data["positions"].append({
                    "institution": position["name"],
                    "status": "current" if position["current"] else "",
                    "start_date": position["start_year"],
                    "end_date": position["end_year"],
                    "rank": position["rank"] if position["rank"] != "rank" else ""
                })
            del data["institution_history"]
        data["phd_advisors"] = []
        if "advisors" in data and data["advisors"]:
            for advisor in data["advisors"]:
                if advisor["degree_type"] == "PhD" and not advisor["full_name"]:
                    continue
                data["phd_advisors"].append({
                    "name": advisor["full_name"],
                    "degree_type": advisor["degree_type"]
                })


        # Add comments to extra data
        if "comments" in data and data["comments"]:
            obj.extra_data["comments"] = data["comments"]

        # Add HEPNAMES collection
        data["collections"] = {
            "primary": "HEPNAMES"
        }


    return _convert_data_to_model


def send_robotupload(mode="insert"):
    """Get the MARCXML from the deposit object and ships it."""
    @wraps(send_robotupload)
    def _send_robotupload(obj, eng):
        import os
        from invenio.base.globals import cfg
        from invenio.modules.workflows.errors import WorkflowError
        from inspire.utils.robotupload import make_robotupload_marcxml

        callback_url = os.path.join(cfg["CFG_SITE_URL"],
                                    "callback/workflows/robotupload")

        marcxml = obj.get_extra_data().get("marcxml")

        if not marcxml:
            obj.log.error("No MARCXML found in extra data.")

        result = make_robotupload_marcxml(
            url=None,
            marcxml=marcxml,
            callback_url=callback_url,
            mode=mode,
            nonce=obj.id
        )
        if "[INFO]" not in result.text:
            if "cannot use the service" in result.text:
                # IP not in the list
                obj.log.error("Your IP is not in "
                              "CFG_BATCHUPLOADER_WEB_ROBOT_RIGHTS "
                              "on host")
                obj.log.error(result.text)
            txt = "Error while submitting robotupload: {0}".format(result.text)
            raise WorkflowError(txt, eng.uuid, obj.id)
        else:
            obj.log.info("Robotupload sent!")
            obj.log.info(result.text)
            if mode != "holdingpen":
                eng.halt("Waiting for robotupload: {0}".format(result.text))
        obj.log.info("end of upload")

    return _send_robotupload


def create_ticket(template, queue="Test"):
    """Create a ticket."""

    @wraps(create_ticket)
    def _create_ticket(obj, eng):
        from invenio.base.globals import cfg
        from invenio.modules.access.control import acc_get_user_email
        from flask import render_template
        from inspire.utils.tickets import get_instance

        user_email = acc_get_user_email(obj.id_user)
        recid = obj.data.get("recid", "")

        subject = "New HepNames update from {}".format(user_email)
        body = render_template(
            template,
            email=user_email,
            url="http://inspirehep.net/record/{}".format(recid),
            bibedit_url="http://inspirehep.net/record/{}/edit".format(
                recid),
            user_comment=obj.extra_data.get("comments", ""),
        ).strip()

        rt = get_instance() if cfg.get("PRODUCTION_MODE") else None
        rt_queue = cfg.get("CFG_BIBCATALOG_QUEUES") or queue
        if not rt:
            obj.log.error("No RT instance available. Skipping!")
            obj.log.info("Ticket ignored.")
        else:
            body = "\n ".join([line.strip() for line in body.split("\n")])
            ticket_id = rt.create_ticket(
                Queue=rt_queue,
                Subject=subject,
                Text=body,
                Requestors=user_email,
                CF_RecordID=recid
            )
            obj.log.info("Ticket {0} created:\n{1}".format(
                ticket_id,
                body.encode("utf-8", "ignore")
            ))
    return _create_ticket
