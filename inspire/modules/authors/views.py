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

from flask import abort, Blueprint, jsonify, render_template, request, url_for
from werkzeug.datastructures import MultiDict

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
@wash_arguments({'id': (int, 0)})
def update(id):
    """View for INSPIRE author update form."""
    data = {}
    if id:
        xml = requests.get("https://inspirehep.net/record/{}/export/xm".format(
            id))
        data = Record.create(xml.text.encode("utf-8"), 'marc',
                             model='author').produce("json_for_form")
        convert_for_form(data)
    form = AuthorUpdateForm(data=data)
    ctx = {
        "action": url_for('.submitupdate'),
        "name": "authorUpdateForm",
        "id": "authorUpdateForm",
    }

    return render_template('authors/update_form.html', form=form, **ctx)


@blueprint.route('/submitupdate', methods=['POST'])
@login_required
def submitupdate():
    """View for INSPIRE author update form."""
    from inspire.modules.forms.utils import DataExporter
    from invenio.modules.workflows.models import BibWorkflowObject
    from flask.ext.login import current_user
    import ipdb; ipdb.set_trace()
    form = AuthorUpdateForm(formdata=request.form)
    visitor = DataExporter()
    visitor.visit(form)

    myobj = BibWorkflowObject.create_object(id_user=current_user.get_id())
    myobj.set_data(visitor.data)
    # Start workflow. delayed=True will execute the workflow in the
    # background using, for example, Celery.
    myobj.start_workflow("demoworkflow", delayed=True)

    return render_template('authors/update_completed.html')


@blueprint.route('/validate', methods=['POST'])
def validate():
    """Validate form and return validation errors."""
    if request.method != 'POST':
        abort(400)

    data = request.json or MultiDict({})
    formdata = MultiDict(data or {})

    form = AuthorUpdateForm(formdata=formdata)
    form.validate()

    result = {}
    changed_msgs = dict(
        (name, messages) for name, messages in form.messages.items()
        if name in formdata.keys()
    )
    result['messages'] = changed_msgs
    return jsonify(result)
