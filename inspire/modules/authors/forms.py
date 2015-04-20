# -*- coding: utf-8 -*-
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
from wtforms.widgets import html_params, HiddenInput, HTMLString, Select

from invenio.base.globals import cfg
from invenio.base.i18n import _
from invenio.modules.deposit.field_widgets import ColumnInput, \
                                                  ExtendedListWidget, \
                                                  ItemWidget, \
                                                  DynamicListWidget, \
                                                  DynamicItemWidget
from invenio.modules.deposit.form import WebDepositForm
# from inspire.modules.forms.form import InspireForm
from invenio.modules.deposit import fields
from inspire.modules.deposit.filters import clean_empty_list


def date_widget(field, **kwargs):
    """Date widget."""
    field_id = kwargs.pop('id', field.id)
    placeholder = kwargs.pop('placeholder', "")
    html = [u'<div class="col-md-6 col-margin-top">\
            <input class="datepicker form-control" %s type="text">\
            </div>'
            % (html_params(id=field_id,
                           name=field_id,
                           value=field.object_data or '',
                           placeholder=placeholder))]
    return HTMLString(u''.join(html))


def currentCheckboxWidget(field, **kwargs):
    """Current institution checkbox widget."""
    field_id = kwargs.pop('id', field.id)
    html = [u'<div class="col-md-10 col-margin-top pull-left">\
                <input %s %s type="checkbox">\
                <label for=%s>Current</label></div>'
            % (html_params(id=field_id,
                           name=field_id),
               field.data and "checked" or "",
               field_id)]
    return HTMLString(u''.join(html))


class WrappedSelect(Select):

    """Widget to wrap select input in further markup."""

    wrapper = '<div>%(field)s</div>'
    wrapped_widget = Select()

    def __init__(self, widget=None, wrapper=None, **kwargs):
        """Initialize wrapped input with widget and wrapper."""
        self.wrapped_widget = widget or self.wrapped_widget
        self.wrapper_args = kwargs
        if wrapper is not None:
            self.wrapper = wrapper

    def __call__(self, field, **kwargs):
        """Render wrapped input."""
        return HTMLString(self.wrapper % dict(
            field=self.wrapped_widget(field, **kwargs),
            **self.wrapper_args
        ))


class ColumnSelect(WrappedSelect):

    """Specialized column wrapped input."""

    @property
    def wrapper(self):
        """Wrapper template with description support."""
        if 'description' in self.wrapper_args:
            return ('<div class="%(class_)s">%(field)s'
                    '<p class="text-muted field-desc">'
                    '<small>%(description)s</small></p></div>')
        return '<div class="%(class_)s">%(field)s</div>'


class InstitutionInlineForm(WebDepositForm):

    """Institution inline form."""

    rank_options = [("rank", _("Rank")),
                    ("senior", _("Senior (permanent)")),
                    ("junior", _("Junior (leads to Senior)")),
                    ("staff", _("Staff (non-research)")),
                    ("visitor", _("Visitor")),
                    ("postdoc", _("PostDoc")),
                    ("phd", _("PhD")),
                    ("masters", _("Master")),
                    ("undergrad", _("Undergrad"))]

    name = fields.StringField(
        widget_classes='form-control',
        widget=ColumnInput(class_="col-md-6"),
        autocomplete='affiliation',
        placeholder=_("Institution. Start typing for suggestions"),
    )

    rank = fields.SelectField(
        choices=rank_options,
        default="rank",
        widget=ColumnSelect(class_="col-md-6"),
        widget_classes='form-control',
        validators=[validators.DataRequired()],
    )

    start_year = fields.StringField(
        placeholder=_('Start year'),
        description='Format: YYYY.',
        widget=date_widget,
    )

    end_year = fields.StringField(
        placeholder=_('End year'),
        description='Format: YYYY.',
        widget=date_widget,
    )

    current = fields.BooleanField(
        widget=currentCheckboxWidget
    )


class PHDAdvisorsInlineForm(WebDepositForm):

    """Phd Advisors inline form."""

    name = fields.TextField(
        widget_classes='form-control',
        widget=ColumnInput(class_="col-xs-6", description="Family name, First name"),
        export_key='full_name',
    )

    degree_type = fields.SelectField(
        label=_('Degree Type'),
        widget_classes="form-control",
        widget=ColumnSelect(class_="col-xs-4 col-pad-0", description="Degree Type"),
    )

    def __init__(self, *args, **kwargs):
        """Constructor."""
        super(PHDAdvisorsInlineForm, self).__init__(*args, **kwargs)
        from invenio.modules.knowledge.api import get_kb_mappings
        self.degree_type.choices = [('', '')] + [(x['value'], x['value'])
            for x in get_kb_mappings(cfg["DEPOSIT_INSPIRE_DEGREE_KB"])]


class DynamicUnsortedItemWidget(DynamicItemWidget):

    def _sort_button(self):
        return ""


class DynamicUnsortedWidget(DynamicListWidget):
    def __init__(self, **kwargs):
        """Initialize dynamic list widget."""
        self.item_widget = DynamicUnsortedItemWidget()
        super(DynamicUnsortedWidget, self).__init__(**kwargs)


class AuthorUpdateForm(WebDepositForm):

    """Author update form."""

    # Hidden field to hold author id information
    author_id = fields.StringField(
        widget=HiddenInput()
    )

    # Hidden field to hold record id information
    recid = fields.IntegerField(
        widget=HiddenInput()
    )

    full_name = fields.StringField(
        label=_('Full name'),
        description='e.g. Lampen, John Francis',
        validators=[validators.DataRequired()],
        widget_classes="form-control"
    )

    display_name = fields.StringField(
        label=_('Display name'),
        description='e.g. Lampen, John',
        widget_classes="form-control"
    )

    native_name = fields.StringField(
        label=_('Native name'),
        description=u'e.g. 麦迪娜',
        widget_classes="form-control"
    )

    public_email = fields.StringField(
        label=_('Email (public)'),
        description="This email will be displayed in your public profile.",
        widget_classes="form-control",
        validators=[validators.Optional(), validators.Email()],
    )

    orcid = fields.StringField(
        label=_('ORCID'),
        widget_classes="form-control",
    )

    status_options = [("", ""),
                      ("active", _("Active")),
                      ("retired", _("Retired")),
                      ("departed", _("Departed")),
                      ("deceased", _("Deceased"))]

    status = fields.SelectField(
        label='Status',
        choices=status_options,
        default="",
        widget_classes='form-control',
    )

    webpage = fields.StringField(
        label=_('Your webpage'),
        placeholder='http://www.example.com',
        widget_classes="form-control",
    )

    blog_url = fields.StringField(
        label=_('Your blog'),
        placeholder='http://www.example.com',
        widget_classes="form-control",
    )

    twitter_url = fields.StringField(
        label=_('Twitter'),
        placeholder='https://twitter.com/inspirehep',
        widget_classes="form-control",
    )

    research_field_options = [("acc-phys", _("acc-phys")),
                              ("astro-ph", _("astro-ph")),
                              ("atom-ph", _("atom-ph")),
                              ("chao-dyn", _("chao-dyn")),
                              ("climate", _("climate")),
                              ("comp", _("comp")),
                              ("cond-mat", _("cond-mat")),
                              ("genl-th", _("genl-th")),
                              ("gr-qc", _("gr-qc")),
                              ("hep-ex", _("hep-ex")),
                              ("hep-lat", _("hep-lat")),
                              ("hep-ph", _("hep-ph")),
                              ("hep-th", _("hep-th")),
                              ("instr", _("instr")),
                              ("librarian", _("librarian")),
                              ("math", _("math")),
                              ("math-ph", _("math-ph")),
                              ("med-phys", _("med-phys")),
                              ("nlin", _("nlin")),
                              ("nucl-ex", _("nucl-ex")),
                              ("nucl-th", _("nucl-th")),
                              ("physics", _("physics")),
                              ("plasma-phys", _("plasma-phys")),
                              ("q-bio", _("q-bio")),
                              ("quant-ph", _("quant-ph")),
                              ("ssrl", _("ssrl")),
                              ("other", _("other"))]

    research_field = fields.SelectMultipleField(
        label=_('Field of research'),
        choices=research_field_options,
        widget_classes="form-control",
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
            widget_classes="col-xs-10"
        ),
        label='Institution History',
        add_label='Add another institution',
        min_entries=1,
        widget=DynamicUnsortedWidget()
    )

    phd_advisors = fields.DynamicFieldList(
        fields.FormField(
            PHDAdvisorsInlineForm,
            widget=ExtendedListWidget(
                item_widget=ItemWidget(),
                html_tag='div',
            ),
        ),
        label='Ph.D. Advisors',
        add_label='Add another Ph.D. advisor',
        min_entries=1,
        widget=DynamicUnsortedWidget()
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
        description='Send us any comments you might have. They will not be visible.',
        widget_classes="form-control"
    )

    #
    # Form Configuration
    #
    _title = _("Update author details")

    # Group fields in categories

    groups = [
        ('Personal Information',
            ['full_name', 'display_name', 'native_name', 'email',
             'public_email', 'orcid', 'status', 'webpage', 'blog_url',
             'twitter_url', "twitter_hidden"]),
        ('Career information',
            ['research_field', 'institution_history', 'phd_advisors',
             'experiments']),
        ('Comments',
            ['comments'])
    ]
