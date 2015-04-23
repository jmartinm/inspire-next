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

# import six

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
from invenio.modules.deposit import fields
from inspire.modules.deposit.filters import clean_empty_list

from .validators import DOIValidator


# def clean_orcid(value):
#     """Remove leading and trailing spaces from string."""
#     if isinstance(value, six.string_types):
#         return value.split("/")[-1]
#     else:
#         return value


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


class AdvisorsInlineForm(WebDepositForm):

    """Advisors inline form."""

    name = fields.TextField(
        widget_classes='form-control',
        widget=ColumnInput(class_="col-xs-6", description="Family name, First name"),
        export_key='full_name',
    )

    degree_type = fields.SelectField(
        label=_('Degree Type'),
        widget_classes="form-control",
        default="PhD",
        widget=ColumnSelect(class_="col-xs-4 col-pad-0", description="Degree Type"),
    )

    def __init__(self, *args, **kwargs):
        """Constructor."""
        super(AdvisorsInlineForm, self).__init__(*args, **kwargs)
        from invenio.modules.knowledge.api import get_kb_mappings
        self.degree_type.choices = [('', '')] + [(x['value'], x['value'])
            for x in get_kb_mappings(cfg["DEPOSIT_INSPIRE_DEGREE_KB"])]


class WebpageInlineForm(WebDepositForm):

    """URL inline form."""

    webpage = fields.StringField(
        label=_('Your webpage'),
        placeholder='http://www.example.com',
        widget=ColumnInput(class_="col-xs-10"),
        widget_classes="form-control",
    )


class DynamicUnsortedItemWidget(DynamicItemWidget):

    def _sort_button(self):
        return ""


class DynamicUnsortedWidget(DynamicListWidget):
    def __init__(self, **kwargs):
        """Initialize dynamic list widget."""
        self.item_widget = DynamicUnsortedItemWidget()
        super(DynamicUnsortedWidget, self).__init__(**kwargs)


# class DOIField(fields.StringField):
#     def process_formdata(self, valuelist):
#         self.data = "hello"

#     def _value(self):
#         return self.data


class AuthorUpdateForm(WebDepositForm):

    """Author update form."""

    # Hidden field to hold author id information
    author_id = fields.StringField(
        widget=HiddenInput()
    )

    # Hidden field to hold record id information
    recid = fields.IntegerField(
        widget=HiddenInput(),
        validators=[validators.Optional()],
    )

    given_names = fields.StringField(
        label=_('Given names'),
        description='e.g. John Francis',
        validators=[validators.DataRequired()],
        widget_classes="form-control"
    )

    family_name = fields.StringField(
        label=_('Family name'),
        description='e.g. Lampen',
        validators=[validators.DataRequired()],
        widget_classes="form-control"
    )

    display_name = fields.StringField(
        label=_('Display name'),
        description='How would you like to be addressed throughout the site? e.g. Lampen, John',
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
        label='ORCID <img src="/img/orcid_icon_24.png" style="height:20px">',
        widget_classes="form-control",
        description="""ORCID provides a persistent digital identifier that distinguishes you from other researchers. Learn more at <a href="http://orcid.org" target="_blank">orcid.org</a>""",
        # filters=[clean_orcid],
        validators=[DOIValidator]
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

    blog_url = fields.StringField(
        label=_('Blog'),
        placeholder='http://www.example.com',
        icon="fa fa-wordpress",
        widget_classes="form-control",
    )

    twitter_url = fields.StringField(
        label=_('Twitter'),
        placeholder='https://twitter.com/inspirehep',
        icon="fa fa-twitter",
        widget_classes="form-control",
    )

    linkedin_url = fields.StringField(
        label=_('Linkedin'),
        placeholder='https://www.linkedin.com/pub/john-francis-lampen/16/750/778',
        icon="fa fa-linkedin-square",
        widget_classes="form-control",
    )

    websites = fields.DynamicFieldList(
        fields.FormField(
            WebpageInlineForm,
            widget=ExtendedListWidget(
                item_widget=ItemWidget(),
                html_tag='div',
            ),
        ),
        add_label=_('Add another website'),
        min_entries=1,
        widget_classes='ui-disable-sort',
        icon="fa fa-globe",
        widget=DynamicUnsortedWidget()
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
        widget=DynamicUnsortedWidget(),
        widget_classes="ui-disable-sort"
    )

    advisors = fields.DynamicFieldList(
        fields.FormField(
            AdvisorsInlineForm,
            widget=ExtendedListWidget(
                item_widget=ItemWidget(),
                html_tag='div',
            ),
        ),
        label='Advisors',
        add_label='Add another advisor',
        min_entries=1,
        widget=DynamicUnsortedWidget(),
        widget_classes="ui-disable-sort"
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
            ['given_names', 'family_name', 'display_name', 'native_name', 'email',
             'public_email', 'status', 'orcid']),
        ('Personal Websites',
            ['blog_url', 'twitter_url', "twitter_hidden", 'linkedin_url', 'websites']),
        ('Career Information',
            ['research_field', 'institution_history', 'advisors',
             'experiments']),
        ('Comments',
            ['comments'])
    ]
