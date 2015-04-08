/*
 * This file is part of INSPIRE.
 * Copyright (C) 2014, 2015 CERN.
 *
 * INSPIRE is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * INSPIRE is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with INSPIRE. If not, see <http://www.gnu.org/licenses/>.
 *
 * In applying this licence, CERN does not waive the privileges and immunities
 * granted to it by virtue of its status as an Intergovernmental Organization
 * or submit itself to any jurisdiction.
 */


define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");
  require("bootstrap-multiselect");

  function InspireForm(options) {
    this.options = options;
    this.init();
    this.connectEvents();
  }

  InspireForm.prototype = {

    /*
     * Here proper initialization
     */
    init: function init() {
      this.preventFormSubmit();

      // focus on the first element of the form
      this.$first_input_field = $('form:first *:input[type!=hidden]:first');
      this.$first_input_field.focus();


      $('#research_field').attr('multiple', 'multiple').multiselect({
        maxHeight: 400,
        enableCaseInsensitiveFiltering: true
      });
    },
    /*
     * here binding functions to events
     */
    connectEvents: function connectEvents() {
      $(document).on('click', '.panel div.clickable', function (e) {
        var $this = $(this);
        var $toggle_element = $this.find('.panel-toggle');
        if ( $(e.target).is($toggle_element) ) {
          return;
        }
        else {
          $toggle_element.click();
        }
      });
    },
    /**
     * Disable form submit on ENTER
     */
    preventFormSubmit: function preventFormSubmit() {
      $(this.options.formSelector).find("input").bind("keyup keypress", function(e) {
        var code = e.keyCode || e.which;
        if (code === 13) {
          e.preventDefault();
          return false;
        }
      });
    },
  }

  module.exports = InspireForm;
});
