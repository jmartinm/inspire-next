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

from wtforms import validators
from wtforms.widgets import html_params, HTMLString

from invenio.base.i18n import _
from invenio.modules.deposit.field_widgets import ColumnInput, \
                                                  ExtendedListWidget, \
                                                  ItemWidget

from inspire.modules.forms.form import InspireForm
from inspire.modules.forms import fields
from inspire.modules.deposit.filters import clean_empty_list
from inspire.modules.deposit.forms import AuthorInlineForm


def date_widget(field, **kwargs):
    """Date widget."""
    field_id = kwargs.pop('id', field.id)
    html = [u'<div class="row"><div class="col-xs-5 col-sm-3">\
            <input class="datepicker form-control" %s type="text">\
            </div></div>'
            % (html_params(id=field_id,
                           name=field_id,
                           value=field.data or ''))]
    return HTMLString(u''.join(html))


class InstitutionInlineForm(InspireForm):

    """Institution inline form."""

    rank_options = [("senior", _("Senior (permanent)")),
                    ("junior", _("Junior (leads to Senior)")),
                    ("staff", _("Staff (non-research)")),
                    ("visitor", _("Visitor")),
                    ("postdoc", _("PostDoc")),
                    ("phd", _("PhD")),
                    ("masters", _("Masters")),
                    ("undergrad", _("Undergrad"))]

    name = fields.TextField(
        widget_classes='form-control',
        widget=ColumnInput(class_="col-xs-4"),
        autocomplete='affiliation',
        placeholder=_("Start typing for suggestions"),
    )

    rank = fields.SelectField(
        # label='Rank',
        choices=rank_options,
        default="senior",
        widget_classes='form-control col-xs-4 col-pad-0',
        validators=[validators.DataRequired()],
    )

    start_year = fields.Date(
        label=_('Start year'),
        description='Format: YYYY.',
        widget=date_widget,
    )

    end_year = fields.Date(
        label=_('End year'),
        description='Format: YYYY.',
        widget=date_widget,
    )


class AuthorUpdateForm(InspireForm):

    """Author update form."""

    full_name = fields.TextField(
        label=_('Full name'),
        description='e.g. Lampen, John Francis',
        validators=[validators.DataRequired()],
        widget_classes="form-control"
    )

    display_name = fields.TextField(
        label=_('Display name'),
        description='e.g. Lampen, John',
        validators=[validators.DataRequired()],
        widget_classes="form-control"
    )

    email = fields.TextField(
        label=_('Your Email'),
        description=_('Not displayed, contact only'),
        widget_classes="form-control",
        validators=[
            validators.DataRequired(),
            validators.Email()
        ],
    )

    public_email = fields.TextField(
        label=_('Email (public)'),
        widget_classes="form-control",
        validators=[validators.Email()],
    )

    orcid = fields.TextField(
        label=_('ORCID'),
        widget_classes="form-control",
        #validators=[validators.ORCIDValidator()],
    )

    status_options = [("active", _("Active")),
                      ("retired", _("Retired")),
                      ("departed", _("Departed")),
                      ("deceased", _("Deceased"))]

    status = fields.SelectField(
        label='Status',
        choices=status_options,
        default="active",
        widget_classes='form-control',
        validators=[validators.DataRequired()],
    )

    webpage = fields.TextField(
        label=_('Your webpage'),
        placeholder='http://www.example.com',
        export_key='webpage',
        widget_classes="form-control",
        validators=[validators.URL(), validators.Optional],
    )

    blog_url = fields.TextField(
        label=_('Your blog'),
        placeholder='http://www.example.com',
        export_key='blog',
        widget_classes="form-control",
        validators=[validators.URL(), validators.Optional],
    )

    twitter_username = fields.TextField(
        label=_('Twitter'),
        placeholder='e.g. @inspirehep',
        export_key='twitter',
        widget_classes="form-control",
        validators=[validators.URL(), validators.Optional],
    )

    research_field_options = [("ACC-PHYS", _("acc-phys")),
                              ("ASTRO-PH", _("astro-ph")),
                              ("ATOM-PH", _("atom-ph")),
                              ("CHAO-DYN", _("chao-dyn")),
                              ("CLIMATE", _("climate")),
                              ("COMP", _("comp")),
                              ("COND-MAT", _("cond-mat")),
                              ("GENL-TH", _("genl-th")),
                              ("GR-QC", _("gr-qc")),
                              ("HEP-EX", _("hep-ex")),
                              ("HEP-LAT", _("hep-lat")),
                              ("HEP-PH", _("hep-ph")),
                              ("HEP-TH", _("hep-th")),
                              ("INSTR", _("instr")),
                              ("LIBRARIAN", _("librarian")),
                              ("MATH", _("math")),
                              ("MATH-PH", _("math-ph")),
                              ("MED-PHYS", _("med-phys")),
                              ("NLIN", _("nlin")),
                              ("NUCL-EX", _("nucl-ex")),
                              ("NUCL-TH", _("nucl-th")),
                              ("PHYSICS", _("physics")),
                              ("PLASMA-PHYS", _("plasma-phys")),
                              ("Q-BIO", _("q-bio")),
                              ("QUANT-PH", _("quant-ph")),
                              ("SSRL", _("ssrl")),
                              ("OTHER", _("other"))]

    research_field = fields.SelectMultipleField(
        label=_('Field of research'),
        choices=research_field_options,
        widget_classes="form-control",
        export_key='research_field',
        filters=[clean_empty_list],
        validators=[validators.DataRequired()]
    )

    institution_history = fields.DynamicFieldList(
        fields.FormField(
            InstitutionInlineForm,
            widget=ExtendedListWidget(
                item_widget=ItemWidget(),
                html_tag='div',
            ),
        ),
        label='Institution History',
        add_label='Add another institution',
        min_entries=1,
        widget_classes='',
        export_key='institutions',
        #validators=[InstitutionValidation],
    )

    phd_advisor = fields.FormField(
        AuthorInlineForm,
        label=_('Ph.D. Advisor'),
        widget=ExtendedListWidget(
            item_widget=ItemWidget(),
            html_tag='div',
        ),
        export_key='phd_advisor',
    )

    second_phd_advisor = fields.FormField(
        AuthorInlineForm,
        label=_('2nd Ph.D. Advisor'),
        widget=ExtendedListWidget(
            item_widget=ItemWidget(),
            html_tag='div',
        ),
        export_key='second_phd_advisor',
    )

    # experiments = fields.SelectMultipleField(
    #     label=_('Subject'),
    #     widget_classes="form-control",
    #     export_key='experiments',
    #     filters=[clean_empty_list],
    #     #validators=[validators.DataRequired()]
    # )

    comments = fields.TextAreaField(
        label=_('Comments'),
        description='Not displayed',
        widget_classes="form-control"
    )

    # recaptcha = RecaptchaField()

    #
    # Form Configuration
    #
    _title = _("Update author details")

    # Group fields in categories

    groups = [
        ('Personal Information',
            ['full_name', 'display_name', 'email', 'public_email', 'orcid',
             'status', 'webpage', 'blog_url', 'twitter_username']),
        ('Work',
            ['research_field', 'institution_history', 'phd_advisor',
             'second_phd_advisor', 'experiments', 'comments']),
    ]
