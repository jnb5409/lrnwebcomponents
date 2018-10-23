define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignImagecarousel = void 0;
  function _templateObject_5d52ac20d6f911e893a2e542dfb99352() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_5d52ac20d6f911e893a2e542dfb99352 = function() {
      return data;
    };
    return data;
  }
  var LrndesignImagecarousel = (function(_PolymerElement) {
    babelHelpers.inherits(LrndesignImagecarousel, _PolymerElement);
    function LrndesignImagecarousel() {
      babelHelpers.classCallCheck(this, LrndesignImagecarousel);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          LrndesignImagecarousel.__proto__ ||
          Object.getPrototypeOf(LrndesignImagecarousel)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrndesignImagecarousel,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrndesignImagecarousel.prototype.__proto__ ||
                  Object.getPrototypeOf(LrndesignImagecarousel.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrndesignImagecarousel.haxProperties,
              LrndesignImagecarousel.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_5d52ac20d6f911e893a2e542dfb99352()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrndesign imagecarousel",
                description: "Automated conversion of lrndesign-imagecarousel/",
                icon: "icons:android",
                color: "green",
                groups: ["Imagecarousel"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrndesign-imagecarousel";
          }
        }
      ]
    );
    return LrndesignImagecarousel;
  })(_polymerElement.PolymerElement);
  _exports.LrndesignImagecarousel = LrndesignImagecarousel;
  window.customElements.define(
    LrndesignImagecarousel.tag,
    LrndesignImagecarousel
  );
});