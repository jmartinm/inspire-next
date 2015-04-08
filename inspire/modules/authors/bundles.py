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

"""INSPIRE Author bundles."""

from invenio.base.bundles import invenio as _i, jquery as _j
from invenio.ext.assets import Bundle, RequireJSFilter

js_update_form = Bundle(
    "js/authors/authors-update-form-init.js",
    output="authors-update-form.js",
    filters=RequireJSFilter(exclude=[_j, _i]),
    weight=51,
)

# styles = Bundle(
#     "css/deposit/form.css",
#     "vendors/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css",
#     output="authors-update-form.css",
#     filters="less,cleancss",
#     weight=51
# )
