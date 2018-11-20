define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@lrnwebcomponents/responsive-utility/responsive-utility.js",
  "./responsive-grid-col.js",
  "./responsive-grid-clear.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_58f0e330ecf311e8a604ede808d8717b() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n        width: 100%;\n        margin-right: auto;\n        margin-left: auto;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n      }\n      :host:before,\n      :host:after {\n        content: " ";\n        display: table;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n      }\n      #row-inner {\n        margin-left: -15px;\n        margin-right: -15px;\n        @apply --responsive-grid-row-inner;\n      }\n      :host #row-inner:before,\n      :host #row-inner:after {\n        content: " ";\n        display: table;\n      }\n      :host #row-inner:after {\n        clear: both;\n      }\n      :host #row-inner:before,\n      :host #row-inner:after {\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-clear[xs]), \n      #row-inner[screen="sm"] ::slotted(responsive-grid-clear[sm]), \n      #row-inner[screen="md"] ::slotted(responsive-grid-clear[md]), \n      #row-inner[screen="lg"] ::slotted(responsive-grid-clear[lg]), \n      #row-inner[screen="xl"] ::slotted(responsive-grid-clear[xl]){\n        display: block;\n      }\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[xs="0"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[sm="0"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[md="0"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[lg="0"]) {\n        display: inline-block;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="12"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="12"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="12"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="12"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="12"]) {\n        width: 100%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="11"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="11"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="11"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="11"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="11"]) {\n        width: 91.66666667%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="10"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="10"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="10"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="10"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="10"]) {\n        width: 83.33333333%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="9"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="9"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="9"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="9"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="9"]) {\n        width: 75%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="8"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="8"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="8"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="8"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="8"]) {\n        width: 66.66666667%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="7"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="7"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="7"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="7"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="7"]) {\n        width: 58.33333333%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="6"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="6"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="6"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="6"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="6"]) {\n        width: 50%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="5"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="5"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="5"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="5"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="5"]) {\n        width: 41.66666667%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="4"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="4"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="4"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="4"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="4"]) {\n        width: 33.33333333%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="3"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="3"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="3"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="3"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="3"]) {\n        width: 25%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="2"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="2"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="2"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="2"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="2"]) {\n        width: 16.66666667%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="1"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="1"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="1"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="1"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="1"]) {\n        width: 8.33333333%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="0"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="0"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="0"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="0"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="0"]) {\n        display: none;\n      }\n      :host #row-inner ::slotted(* > #col-inner) {\n        padding: 0px;\n      }\n      :host #row-inner[gutter="1"] ::slotted(* > #col-inner) {\n        padding: 5px;\n      }\n      :host #row-inner[gutter="2"] ::slotted(* > #col-inner) {\n        padding: 10px;\n      }\n      :host #row-inner[gutter="3"] ::slotted(* > #col-inner) {\n        padding: 15px;\n      }\n      :host #row-inner[gutter="4"] ::slotted(* > #col-inner) {\n        padding: 20px;\n      }\n    </style>\n    <responsive-utility sm$="[[sm]]" md$="[[sm]]" lg$="[[lg]]" xl$="[[xl]]" responsive-to-parent$="[[responsiveToParent]]">\n    </responsive-utility>\n    <div id="row-inner" screen$="[[screen]]" gutter$="[[gutter]]"><slot></slot></div>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n        width: 100%;\n        margin-right: auto;\n        margin-left: auto;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n      }\n      :host:before,\n      :host:after {\n        content: " ";\n        display: table;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n      }\n      #row-inner {\n        margin-left: -15px;\n        margin-right: -15px;\n        @apply --responsive-grid-row-inner;\n      }\n      :host #row-inner:before,\n      :host #row-inner:after {\n        content: " ";\n        display: table;\n      }\n      :host #row-inner:after {\n        clear: both;\n      }\n      :host #row-inner:before,\n      :host #row-inner:after {\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-clear[xs]), \n      #row-inner[screen="sm"] ::slotted(responsive-grid-clear[sm]), \n      #row-inner[screen="md"] ::slotted(responsive-grid-clear[md]), \n      #row-inner[screen="lg"] ::slotted(responsive-grid-clear[lg]), \n      #row-inner[screen="xl"] ::slotted(responsive-grid-clear[xl]){\n        display: block;\n      }\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[xs="0"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[sm="0"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[md="0"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[lg="0"]) {\n        display: inline-block;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="12"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="12"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="12"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="12"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="12"]) {\n        width: 100%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="11"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="11"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="11"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="11"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="11"]) {\n        width: 91.66666667%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="10"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="10"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="10"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="10"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="10"]) {\n        width: 83.33333333%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="9"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="9"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="9"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="9"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="9"]) {\n        width: 75%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="8"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="8"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="8"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="8"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="8"]) {\n        width: 66.66666667%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="7"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="7"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="7"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="7"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="7"]) {\n        width: 58.33333333%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="6"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="6"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="6"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="6"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="6"]) {\n        width: 50%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="5"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="5"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="5"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="5"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="5"]) {\n        width: 41.66666667%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="4"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="4"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="4"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="4"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="4"]) {\n        width: 33.33333333%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="3"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="3"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="3"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="3"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="3"]) {\n        width: 25%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="2"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="2"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="2"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="2"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="2"]) {\n        width: 16.66666667%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="1"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="1"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="1"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="1"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="1"]) {\n        width: 8.33333333%;\n      }\n      #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="0"]),\n      #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="0"]),\n      #row-inner[screen="md"] ::slotted(responsive-grid-col[md="0"]),\n      #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="0"]),\n      #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="0"]) {\n        display: none;\n      }\n      :host #row-inner ::slotted(* > #col-inner) {\n        padding: 0px;\n      }\n      :host #row-inner[gutter="1"] ::slotted(* > #col-inner) {\n        padding: 5px;\n      }\n      :host #row-inner[gutter="2"] ::slotted(* > #col-inner) {\n        padding: 10px;\n      }\n      :host #row-inner[gutter="3"] ::slotted(* > #col-inner) {\n        padding: 15px;\n      }\n      :host #row-inner[gutter="4"] ::slotted(* > #col-inner) {\n        padding: 20px;\n      }\n    </style>\n    <responsive-utility sm\\$="[[sm]]" md\\$="[[sm]]" lg\\$="[[lg]]" xl\\$="[[xl]]" responsive-to-parent\\$="[[responsiveToParent]]">\n    </responsive-utility>\n    <div id="row-inner" screen\\$="[[screen]]" gutter\\$="[[gutter]]"><slot></slot></div>\n'
      ]
    );
    _templateObject_58f0e330ecf311e8a604ede808d8717b = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_58f0e330ecf311e8a604ede808d8717b()
    ),
    is: "responsive-grid-row",
    properties: {
      sm: { type: Number, value: null },
      md: { type: Number, value: null },
      lg: { type: Number, value: null },
      xl: { type: Number, value: null },
      gutter: { type: Number, value: 0 },
      responsiveToParent: { type: Boolean, value: !1, reflectToAttribute: !0 },
      screen: { type: String, value: "xs", notify: !0, reflectToAttribute: !0 }
    },
    attached: function attached() {
      var root = this;
      window.ResponsiveUtility.requestAvailability();
      root.fire("responsive-element", {
        element: root,
        attribute: "screen",
        relativeToParent: root.responsiveToParent
      });
    }
  });
});
