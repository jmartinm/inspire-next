# -*- coding: utf-8 -*-
#
# This file is part of INSPIRE.
# Copyright (C) 2015 CERN.
#
# INSPIRE is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# INSPIRE is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with INSPIRE. If not, see <http://www.gnu.org/licenses/>.
#
# In applying this licence, CERN does not waive the privileges and immunities
# granted to it by virtue of its status as an Intergovernmental Organization
# or submit itself to any jurisdiction.

""" Parse dojson rules and generate Jinja2 macros for XML export. """

import glob
import pkg_resources
import os
import re


dict_key_regex = re.compile(r"[']\w+[']:")
dict_value = re.compile(r"'(?P<value>\w+)'")
def_regexp = re.compile(r"def (\w+)\s*\((.*?)\):")
return_regexp = re.compile(r"\s*return\s\w+\.get\(['\"](?P<value>\w+)['\"]\)")

filenames = [
            pkg_resources.resource_filename("inspire.dojson", x) for
            x in pkg_resources.resource_listdir("inspire", "dojson")
            ]
dirs = [filename for filename in filenames if os.path.isdir(filename)]

for dir in dirs:
    dirname = dir.split("/")[-1]
    outfilename = pkg_resources.resource_filename("inspire.base", "templates/export/macros") + "/" + dirname + ".xml"
    outfile = open(outfilename, "a")
    fieldfiles = glob.glob(dir + "/fields/bd*.py")
    for fieldfile in fieldfiles:
        infile = open(fieldfile)
        loop = False
        space = 0
        for line in infile.readlines():
            if "for_each_value" in line:
                loop = True
                space = 4
            if def_regexp.match(line):
                line_split = line.split()
                field_name = line_split[1][:line_split[1].index("(")]
                outfile.write("{{%- macro {0}(value) -%}}\n".format(field_name))
                if loop:
                    outfile.write("{}{{%- for {} in value %}}\n".format(" "*4, field_name))
                outfile.write("{}{{{{ datafield_open('') }}}}\n".format(" "*(4+space)))
            if dict_key_regex.match(line.strip()):
                match = dict_value.findall(line.strip())
                if match:
                    name, code = match
                    outfile.write("{}{{%- if {}.{} %}}\n".format(" "*(4+space), field_name, name))
                    outfile.write("{}{{{{ subfield('{}', {}.{}) }}}}\n".format(" "*(8+space), code, field_name, name))
                    outfile.write("{}{{% endif -%}}\n".format(" "*(4+space)))
            if return_regexp.match(line):
                subfield = return_regexp.match(line).groups()[0]
                outfile.write("{}{{{{ subfield('{}', value) }}}}\n".format(" "*(4+space), subfield))
                outfile.write("{}{{{{ datafield_close() }}}}\n".format(" "*(4+space)))
                if loop:
                    outfile.write("{}{{%- endfor -%}}\n".format(" "*4))
                outfile.write("{%- endmacro -%}\n\n")
                loop = False
                space = 0
            if "}" in line:
                outfile.write("{}{{{{ datafield_close() }}}}\n".format(" "*(4+space)))
                if loop:
                    outfile.write("{}{{%- endfor -%}}\n".format(" "*4))
                outfile.write("{%- endmacro -%}\n\n")
                loop = False
                space = 0
        infile.close()
    outfile.close()
