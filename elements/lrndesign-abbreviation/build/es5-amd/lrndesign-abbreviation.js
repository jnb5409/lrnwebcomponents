define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js",
  "./node_modules/@polymer/paper-tooltip/paper-tooltip.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_b98ebba0ecf211e8b78e61cdfab8e8fa() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: inline-block;\n      }\n      abbr {\n        transition: .6s all ease;\n        padding: 2px 4px;\n        font-style: italic;\n        background-color: var(--abbreviation-bg, #F9F9F9);\n        text-underline-position: under;\n        text-decoration:underline double;\n        cursor: help;\n        outline: var(--abbreviation-selection, #FFFF33);\n        @apply --abbreviation-main;\n      }\n      abbr:focus,\n      abbr:active,\n      abbr:hover {\n        text-decoration: none;\n        background-color: var(--abbreviation-selection, #FFFF33);\n        @apply --abbreviation-hover;\n      }\n      abbr::-moz-selection,\n      abbr::selection {\n        text-decoration: none;\n        background-color: var(--abbreviation-selection, #FFFF33);\n        @apply --abbreviation-selection;\n      }\n    </style>\n    <abbr tabindex="0" title$="[[phrase]]" id="abbr">[[abbr]]</abbr>\n    <paper-tooltip for="abbr" position="top" offset="2" animation-delay="300">[[phrase]]</paper-tooltip>\n'
    ]);
    _templateObject_b98ebba0ecf211e8b78e61cdfab8e8fa = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_b98ebba0ecf211e8b78e61cdfab8e8fa()
    ),
    is: "lrndesign-abbreviation",
    behaviors: [HAXBehaviors.PropertiesBehaviors, SchemaBehaviors.Schema],
    properties: {
      abbr: { type: String, reflectToAttribute: !0, notify: !0 },
      phrase: { type: String, reflectToAttribute: !0, notify: !0 }
    },
    attached: function attached() {
      this.setHaxProperties({
        canScale: !1,
        canPosition: !1,
        canEditSource: !1,
        gizmo: {
          title: "Abbreviation",
          description: "Simple abbreviation with tooltip of full word",
          icon: "editor:title",
          color: "grey",
          groups: ["Instructional", "Term"],
          handles: [{ type: "inline", text: "text" }],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "abbr",
              title: "Abbreviation",
              description: "Abbreviation word",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "phrase",
              title: "Phrase",
              description: "The phrase / original words",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          configure: [
            {
              property: "abbr",
              title: "Abbreviation",
              description: "Abbreviation word",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "phrase",
              title: "Phrase",
              description: "The phrase / original words",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          advanced: []
        }
      });
    }
  });
});
