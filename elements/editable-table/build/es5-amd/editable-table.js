define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-tooltip/paper-tooltip.js",
  "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js",
  "./lib/editable-table-behaviors.js",
  "./lib/editable-table-editor.js",
  "./lib/editable-table-display.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_90caad90ecf311e89cb22b61cebc916e() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n        width: 100%;\n      }\n    </style>\n    <paper-tooltip for="button" position="left">Edit this table.</paper-tooltip>\n    <template id="display" is="dom-if" if="[[!editMode]]" restamp="true">\n      <editable-table-display accent-color$="[[accentColor]]" bordered$="[[bordered]]" caption$="[[caption]]" column-header$="[[columnHeader]]" dark$="[[dark]]" data$="[[data]]" condensed$="[[condensed]]" filter$="[[filter]]" footer$="[[footer]]" row-header$="[[rowHeader]]" scroll$="[[scroll]]" sort$="[[sort]]" striped$="[[striped]]" summary$="[[summary]]">\n      </editable-table-display>\n    </template>\n    <template id="editor" is="dom-if" if="[[editMode]]" restamp="true">\n      <editable-table-editor accent-color$="[[accentColor]]" bordered$="[[bordered]]" caption$="[[caption]]" column-header$="[[columnHeader]]" condensed$="[[condensed]]" dark$="[[dark]]" data$="[[data]]" filter$="[[filter]]" footer$="[[footer]]" hide-accent-color$="[[hideAccentColor]]" hide-dark-theme$="[[hideDarkTheme]]" hide-bordered$="[[hideBordered]]" hide-condensed$="[[hideCondensed]]" hide-filter$="[[hideFilter]]" hide-sort$="[[hideSort]]" hide-scroll$="[[hideScroll]]" hide-striped$="[[hideStriped]]" row-header$="[[rowHeader]]" scroll$="[[scroll]]" sort$="[[sort]]" striped$="[[striped]]" summary$="[[summary]]">\n      </editable-table-editor>\n    </template>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n        width: 100%;\n      }\n    </style>\n    <paper-tooltip for="button" position="left">Edit this table.</paper-tooltip>\n    <template id="display" is="dom-if" if="[[!editMode]]" restamp="true">\n      <editable-table-display accent-color\\$="[[accentColor]]" bordered\\$="[[bordered]]" caption\\$="[[caption]]" column-header\\$="[[columnHeader]]" dark\\$="[[dark]]" data\\$="[[data]]" condensed\\$="[[condensed]]" filter\\$="[[filter]]" footer\\$="[[footer]]" row-header\\$="[[rowHeader]]" scroll\\$="[[scroll]]" sort\\$="[[sort]]" striped\\$="[[striped]]" summary\\$="[[summary]]">\n      </editable-table-display>\n    </template>\n    <template id="editor" is="dom-if" if="[[editMode]]" restamp="true">\n      <editable-table-editor accent-color\\$="[[accentColor]]" bordered\\$="[[bordered]]" caption\\$="[[caption]]" column-header\\$="[[columnHeader]]" condensed\\$="[[condensed]]" dark\\$="[[dark]]" data\\$="[[data]]" filter\\$="[[filter]]" footer\\$="[[footer]]" hide-accent-color\\$="[[hideAccentColor]]" hide-dark-theme\\$="[[hideDarkTheme]]" hide-bordered\\$="[[hideBordered]]" hide-condensed\\$="[[hideCondensed]]" hide-filter\\$="[[hideFilter]]" hide-sort\\$="[[hideSort]]" hide-scroll\\$="[[hideScroll]]" hide-striped\\$="[[hideStriped]]" row-header\\$="[[rowHeader]]" scroll\\$="[[scroll]]" sort\\$="[[sort]]" striped\\$="[[striped]]" summary\\$="[[summary]]">\n      </editable-table-editor>\n    </template>\n'
      ]
    );
    _templateObject_90caad90ecf311e89cb22b61cebc916e = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_90caad90ecf311e89cb22b61cebc916e()
    ),
    is: "editable-table",
    behaviors: [
      editableTableBehaviors.displayBehaviors,
      editableTableBehaviors.editBehaviors
    ],
    properties: { editMode: { type: Boolean, value: !1 } },
    toggleEditMode: function toggleEditMode(edit) {
      var temp;
      edit = edit !== void 0 ? edit : !this.editMode;
      if (edit) {
        this.querySelector("editable-table-display").toggleFilter();
        this.querySelector("editable-table-display").sortData(!1);
        temp = this.querySelector("editable-table-display").getData();
        console.log(temp);
      } else {
        temp = this.querySelector("editable-table-editor").getData();
      }
      for (prop in temp) {
        if ("data" !== prop) {
          this[prop] = temp[prop];
        } else {
          this.set("data", temp[prop]);
        }
      }
      this.editMode = edit;
    }
  });
});
