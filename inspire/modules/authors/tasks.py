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

def create_marcxml_record(is_dump=True):
    """Finalize the SIP by generating the MARC and storing it in the SIP."""
    @wraps(create_marcxml_record)
    def _create_marcxml_record(obj, dummy_eng):
        d = Deposition(obj)
        sip = d.get_latest_sip(sealed=False)
        sip.package = make_record(
            sip.metadata, is_dump=is_dump
        ).legacy_export_as_marc()
        d.update()
    return _create_marcxml_record