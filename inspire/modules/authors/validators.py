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

from wtforms.validators import StopValidation


def DOIValidator(form, field):
    """Validate that the given ORCID exists."""
    from requests import RequestException
    import orcid
    msg = u"The ORCID iD was not found in <a href='http://orcid.org' target='_blank'>orcid.org</a>. Please, make sure it is valid."
    import ipdb; ipdb.set_trace()
    orcid_id = field.data
    api = orcid.PublicAPI()
    try:
        result = api.search_public("orcid:" + orcid_id)
        if result['orcid-search-results']["num-found"] == 0:
            raise StopValidation(msg)
    except RequestException:
        return
