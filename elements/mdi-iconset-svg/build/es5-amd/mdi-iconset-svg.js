define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.MdiIconsetSvg = void 0;
  function _templateObject_1ee2ffc0d93411e895f1edd6fc243716() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_1ee2ffc0d93411e895f1edd6fc243716 = function() {
      return data;
    };
    return data;
  }
  var MdiIconsetSvg = (function(_PolymerElement) {
    babelHelpers.inherits(MdiIconsetSvg, _PolymerElement);
    function MdiIconsetSvg() {
      babelHelpers.classCallCheck(this, MdiIconsetSvg);
      return babelHelpers.possibleConstructorReturn(
        this,
        (MdiIconsetSvg.__proto__ || Object.getPrototypeOf(MdiIconsetSvg)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      MdiIconsetSvg,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                MdiIconsetSvg.prototype.__proto__ ||
                  Object.getPrototypeOf(MdiIconsetSvg.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              MdiIconsetSvg.haxProperties,
              MdiIconsetSvg.tag,
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
              _templateObject_1ee2ffc0d93411e895f1edd6fc243716()
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
                title: "Mdi iconset-svg",
                description: "Start of mdi-iconset-svg fork",
                icon: "icons:android",
                color: "green",
                groups: ["Iconset"],
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
            return "mdi-iconset-svg";
          }
        }
      ]
    );
    return MdiIconsetSvg;
  })(_polymerElement.PolymerElement);
  _exports.MdiIconsetSvg = MdiIconsetSvg;
  window.customElements.define(MdiIconsetSvg.tag, MdiIconsetSvg);
});