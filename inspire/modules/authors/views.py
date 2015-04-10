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

import requests

from flask import Blueprint, render_template, url_for
from flask_login import login_required

from invenio.base.decorators import wash_arguments
from invenio.modules.records.api import Record

from .forms import AuthorUpdateForm


blueprint = Blueprint(
    'inspire_authors',
    __name__,
    url_prefix='/author',
    template_folder='templates',
    static_folder="static",
)


def convert_for_form(data):
    """Convert jsonalchemy keys to form field names."""
    if "urls" in data:
        for url in data["urls"]:
            if "description" not in url:
                data["webpage"] = url["value"]
            else:
                if url["description"].lower() == "twitter":
                    data["twitter_username"] = url["value"]
                elif url["description"].lower() == "blog":
                    data["blog_url"] = url["value"]
        del data["urls"]
    if "fields" in data:
        data["research_field"] = [field["name"].lower() for
                                  field in data["fields"]]
    if "positions" in data:
        data["institution_history"] = []
        for position in data["positions"]:
            pos = {}
            pos["name"] = position.get("institution", "")
            pos["rank"] = position.get("rank", "").lower()
            pos["start_year"] = position.get("start_date", "")
            pos["end_year"] = position.get("end_date", "")
            pos["current"] = True if position.get("status") else False
            data["institution_history"].append(pos)
        data["institution_history"].reverse()
    if "phd_advisors" in data:
        phd_advisors = data["phd_advisors"]
        data["phd_advisors"] = []
        for advisor in phd_advisors:
            adv = {}
            adv["name"] = advisor.get("name", "")
            data["phd_advisors"].append(adv)


@blueprint.route('/update', methods=['GET', 'POST'])
@login_required
@wash_arguments({'author_id': (int, 0)})
def update(author_id):
    """View for INSPIRE author update form."""
    # from inspire.modules.forms.utils import DataExporter
    data = {}
    if author_id:
        xml = requests.get("https://inspirehep.net/record/{}/export/xm".format(
            author_id))
        data = Record.create(xml.text.encode("utf-8"), 'marc',
                             model='author').produce("json_for_form")
        convert_for_form(data)
    form = AuthorUpdateForm(data=data)
    ctx = {
        "action": url_for('.update'),
        "name": "authorUpdateForm",
        "id": "authorUpdateForm",
    }
    # if form.validate_on_submit():
    #     # If it is needed to post process the form keys, for example to match
    #     # the names in the JSONAlchemy, one can use the DataExporter.
    #     # The keys will then be renamed using `export_key` parameter.
    #     # visitor = DataExporter()
    #     # visitor.visit(form)
    #     # visitor.data
    #     from invenio.modules.workflows.models import BibWorkflowObject
    #     from flask.ext.login import current_user
    #     myobj = BibWorkflowObject.create_object(id_user=current_user.get_id())
    #     myobj.set_data(form.data)
    #     # Start workflow. delayed=True will execute the workflow in the
    #     # background using, for example, Celery.
    #     myobj.start_workflow("demoworkflow", delayed=True)
    #     return render_template('forms/form_demo_success.html', form=form)
    return render_template('authors/update_form.html', form=form, **ctx)
