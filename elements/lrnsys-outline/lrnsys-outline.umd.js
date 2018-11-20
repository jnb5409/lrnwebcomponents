!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@polymer/paper-dialog/paper-dialog.js"),require("@polymer/polymer/polymer-legacy.js"),require("@polymer/iron-list/iron-list.js"),require("@polymer/iron-a11y-keys/iron-a11y-keys.js"),require("@polymer/paper-input/paper-input.js"),require("@polymer/paper-icon-button/paper-icon-button.js"),require("@lrnwebcomponents/drawing-icons/drawing-icons.js")):"function"==typeof define&&define.amd?define(["@polymer/paper-dialog/paper-dialog.js","@polymer/polymer/polymer-legacy.js","@polymer/iron-list/iron-list.js","@polymer/iron-a11y-keys/iron-a11y-keys.js","@polymer/paper-input/paper-input.js","@polymer/paper-icon-button/paper-icon-button.js","@lrnwebcomponents/drawing-icons/drawing-icons.js"],e):e(null,t.polymerLegacy_js)}(this,function(t,e){"use strict";function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function o(){var t=i(['\n    <style>\n      :host {\n        display: block;\n        --indent-multiplier: 20px;\n      }\n      :host [data-indent="0"] #move {\n        margin-right: calc(var(--indent-multiplier) * 0);\n      }\n      :host [data-indent="1"] #move {\n        margin-right: calc(var(--indent-multiplier) * 1);\n      }\n      :host [data-indent="2"] #move {\n        margin-right: calc(var(--indent-multiplier) * 2);\n      }\n      :host [data-indent="3"] #move {\n        margin-right: calc(var(--indent-multiplier) * 3);\n      }\n      :host [data-indent="4"] #move {\n        margin-right: calc(var(--indent-multiplier) * 4);\n      }\n      :host [data-indent="5"] #move {\n        margin-right: calc(var(--indent-multiplier) * 5);\n      }\n      :host [data-indent="6"] #move {\n        margin-right: calc(var(--indent-multiplier) * 6);\n      }\n      :host #input {\n        flex-grow: 1;\n        margin-right: 10px;\n      }\n      :host #wrapper {\n        display: flex;\n        height: 40px;\n        border-radius: 0.16px;\n        background-color: white;\n      }\n      :host(:focus) #wrapper,\n      :host(:hover) #wrapper {\n        cursor: pointer;\n      }\n      :host #move {\n        font-size: 16px;\n        padding: 10px;\n        color: transparent;\n      }\n      :host(:focus) #move,\n      :host(:hover) #move {\n        color: var(--lrnsys-outline-move-icon-color, #aaaaaa);\n      }\n      :host paper-icon-button {\n        position: static;\n        font-size: 16px;\n        height: 36px;\n        padding: 10px;\n        margin: 4px;\n        display: none;\n        border-radius: 0.16px;\n      }\n      :host(:focus) paper-icon-button,\n      :host(:hover) paper-icon-button {\n        width: 36px;\n        display: block;\n      }\n      :host paper-icon-button#add {\n        width: 36px;\n        margin-right: 2px;\n        color: white;\n        background-color: var(--lrnsys-outline-add-button-color, #018dff);\n      }\n      :host paper-icon-button#delete {\n        color: white;\n        background-color: var(--lrnsys-outline-delete-button-color, #cc0000);\n      }\n    </style>\n    <div id="wrapper" data-indent$="[[indentLevel]]">\n      <iron-icon id="move" title="Move" icon="drawing:move" role="presentation"></iron-icon>\n      <paper-input id="input" label="Enter a page title" value$="[[title]]" no-label-float="">\n      </paper-input>\n      <paper-icon-button id="add" title="Add Item" icon="icons:add" on-tap="add"></paper-icon-button>\n      <paper-icon-button id="delete" title="Delete" icon="icons:delete" on-tap="delete"></paper-icon-button>\n    </div>\n    <div id="down-action" gesture-disabled$="[[disableDown]]">\n      <paper-icon-button id="down" title="Move downwards" icon="icons:arrow-downward" on-tap="move(1)"></paper-icon-button>\n    </div>\n    <div id="left-action" gesture-disabled$="[[disableLeft]]">\n      <paper-icon-button id="left" title="Outdent" icon="icons:arrow-backward" on-tap="setIndent(-1)"></paper-icon-button>\n    </div>\n    <div id="right-action" gesture-disabled$="[[disableRight]]">\n      <paper-icon-button id="right" title="Indent" icon="icons:arrow-forward" on-tap="setIndent(1)"></paper-icon-button>\n    </div>\n    <div id="up-action"gesture-disabled$="[[disableUp]]">\n      <paper-icon-button id="up" title="Move upwards" icon="icons:arrow-upward" on-tap="move(-1)"></paper-icon-button>\n    </div>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="enter" on-keys-pressed="_onEnter"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="backspace" on-keys-pressed="_onBackspace"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="up" on-keys-pressed="_onArrowUp"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="down" on-keys-pressed="_onArrowDown"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="tab" on-keys-pressed="_onTab"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+tab" on-keys-pressed="_onShiftTab"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+up" on-keys-pressed="_onShiftArrowUp"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+down" on-keys-pressed="_onShiftArrowDown"></iron-a11y-keys>\n'],['\n    <style>\n      :host {\n        display: block;\n        --indent-multiplier: 20px;\n      }\n      :host [data-indent="0"] #move {\n        margin-right: calc(var(--indent-multiplier) * 0);\n      }\n      :host [data-indent="1"] #move {\n        margin-right: calc(var(--indent-multiplier) * 1);\n      }\n      :host [data-indent="2"] #move {\n        margin-right: calc(var(--indent-multiplier) * 2);\n      }\n      :host [data-indent="3"] #move {\n        margin-right: calc(var(--indent-multiplier) * 3);\n      }\n      :host [data-indent="4"] #move {\n        margin-right: calc(var(--indent-multiplier) * 4);\n      }\n      :host [data-indent="5"] #move {\n        margin-right: calc(var(--indent-multiplier) * 5);\n      }\n      :host [data-indent="6"] #move {\n        margin-right: calc(var(--indent-multiplier) * 6);\n      }\n      :host #input {\n        flex-grow: 1;\n        margin-right: 10px;\n      }\n      :host #wrapper {\n        display: flex;\n        height: 40px;\n        border-radius: 0.16px;\n        background-color: white;\n      }\n      :host(:focus) #wrapper,\n      :host(:hover) #wrapper {\n        cursor: pointer;\n      }\n      :host #move {\n        font-size: 16px;\n        padding: 10px;\n        color: transparent;\n      }\n      :host(:focus) #move,\n      :host(:hover) #move {\n        color: var(--lrnsys-outline-move-icon-color, #aaaaaa);\n      }\n      :host paper-icon-button {\n        position: static;\n        font-size: 16px;\n        height: 36px;\n        padding: 10px;\n        margin: 4px;\n        display: none;\n        border-radius: 0.16px;\n      }\n      :host(:focus) paper-icon-button,\n      :host(:hover) paper-icon-button {\n        width: 36px;\n        display: block;\n      }\n      :host paper-icon-button#add {\n        width: 36px;\n        margin-right: 2px;\n        color: white;\n        background-color: var(--lrnsys-outline-add-button-color, #018dff);\n      }\n      :host paper-icon-button#delete {\n        color: white;\n        background-color: var(--lrnsys-outline-delete-button-color, #cc0000);\n      }\n    </style>\n    <div id="wrapper" data-indent\\$="[[indentLevel]]">\n      <iron-icon id="move" title="Move" icon="drawing:move" role="presentation"></iron-icon>\n      <paper-input id="input" label="Enter a page title" value\\$="[[title]]" no-label-float="">\n      </paper-input>\n      <paper-icon-button id="add" title="Add Item" icon="icons:add" on-tap="add"></paper-icon-button>\n      <paper-icon-button id="delete" title="Delete" icon="icons:delete" on-tap="delete"></paper-icon-button>\n    </div>\n    <div id="down-action" gesture-disabled\\$="[[disableDown]]">\n      <paper-icon-button id="down" title="Move downwards" icon="icons:arrow-downward" on-tap="move(1)"></paper-icon-button>\n    </div>\n    <div id="left-action" gesture-disabled\\$="[[disableLeft]]">\n      <paper-icon-button id="left" title="Outdent" icon="icons:arrow-backward" on-tap="setIndent(-1)"></paper-icon-button>\n    </div>\n    <div id="right-action" gesture-disabled\\$="[[disableRight]]">\n      <paper-icon-button id="right" title="Indent" icon="icons:arrow-forward" on-tap="setIndent(1)"></paper-icon-button>\n    </div>\n    <div id="up-action"gesture-disabled\\$="[[disableUp]]">\n      <paper-icon-button id="up" title="Move upwards" icon="icons:arrow-upward" on-tap="move(-1)"></paper-icon-button>\n    </div>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="enter" on-keys-pressed="_onEnter"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="backspace" on-keys-pressed="_onBackspace"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="up" on-keys-pressed="_onArrowUp"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="down" on-keys-pressed="_onArrowDown"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="tab" on-keys-pressed="_onTab"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+tab" on-keys-pressed="_onShiftTab"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+up" on-keys-pressed="_onShiftArrowUp"></iron-a11y-keys>\n    <iron-a11y-keys id="a11y" target="[[target]]" keys="shift+down" on-keys-pressed="_onShiftArrowDown"></iron-a11y-keys>\n']);return o=function(){return t},t}var a,r;function s(){var t=i(['\n    <style>\n      :host {\n        display: block;\n      }\n      :host kbd {\n        display: inline-block;\n        background: #333;\n        color: white;\n        border-radius: 4px;\n        margin: 4px 4px 4px 0;\n        padding: 8px;\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n        font-size:85%;\n      }\n    </style>\n    <h1>[[title]]<paper-icon-button title="Keyboard directions" id="dialogtrigger" icon="icons:help" on-tap="openDirections"></paper-icon-button></h1>\n    <paper-dialog id="modal" with-backdrop="">\n      <h2>Keyboard shortcuts</h2>\n      <div>\n        <paper-icon-button title="close directions" style="position: absolute;top: 0; right:0;" icon="icons:cancel" on-tap="closeDirections"></paper-icon-button>\n        <ul>\n          <li><kbd>Enter</kbd> to <strong>add</strong> an item</li>\n          <li><kbd>Backspace</kbd> <em>with entire item selected</em> to <strong>delete</strong> an item.</li>\n          <li><kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> to <strong>navigate</strong> through items</li>\n          <li><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> <em>at the beginning of a line</em> to <strong>indent/outdent</strong></li>\n          <li><kbd>Shift+↑</kbd> / <kbd>Shift+↓</kbd> to items up/down</li>\n        </ul>\n      </div>\n    </paper-dialog>\n    <div id="itemslist">\n      <template is="dom-repeat" items="{{items}}" as="item">\n        <lrnsys-outline-item disable-down$="[[item.disableDown]]" disable-left$="[[item.disableLeft]]" disable-right$="[[item.disableRight]]" disable-up$="[[item.disableUp]]" id$="[[item.id]]" index$="[[item.index]]" indent-level$="{{item.indent}}" parent$="{{item.parent}}" title$="{{item.title}}">\n        </lrnsys-outline-item>\n      </template>\n    </div>\n'],['\n    <style>\n      :host {\n        display: block;\n      }\n      :host kbd {\n        display: inline-block;\n        background: #333;\n        color: white;\n        border-radius: 4px;\n        margin: 4px 4px 4px 0;\n        padding: 8px;\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n        font-size:85%;\n      }\n    </style>\n    <h1>[[title]]<paper-icon-button title="Keyboard directions" id="dialogtrigger" icon="icons:help" on-tap="openDirections"></paper-icon-button></h1>\n    <paper-dialog id="modal" with-backdrop="">\n      <h2>Keyboard shortcuts</h2>\n      <div>\n        <paper-icon-button title="close directions" style="position: absolute;top: 0; right:0;" icon="icons:cancel" on-tap="closeDirections"></paper-icon-button>\n        <ul>\n          <li><kbd>Enter</kbd> to <strong>add</strong> an item</li>\n          <li><kbd>Backspace</kbd> <em>with entire item selected</em> to <strong>delete</strong> an item.</li>\n          <li><kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> to <strong>navigate</strong> through items</li>\n          <li><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> <em>at the beginning of a line</em> to <strong>indent/outdent</strong></li>\n          <li><kbd>Shift+↑</kbd> / <kbd>Shift+↓</kbd> to items up/down</li>\n        </ul>\n      </div>\n    </paper-dialog>\n    <div id="itemslist">\n      <template is="dom-repeat" items="{{items}}" as="item">\n        <lrnsys-outline-item disable-down$="[[item.disableDown]]" disable-left$="[[item.disableLeft]]" disable-right$="[[item.disableRight]]" disable-up$="[[item.disableUp]]" id$="[[item.id]]" index$="[[item.index]]" indent-level$="{{item.indent}}" parent\\$="{{item.parent}}" title\\$="{{item.title}}">\n        </lrnsys-outline-item>\n      </template>\n    </div>\n']);return s=function(){return t},t}e.Polymer({_template:e.html(o()),is:"lrnsys-outline-item",listeners:{change:"_onChange"},properties:{disableDown:{type:Boolean,value:!1},disableLeft:{type:Boolean,value:!1},disableRight:{type:Boolean,value:!1},disableUp:{type:Boolean,value:!1},id:{type:String,value:null},indentLevel:{type:Number,value:0},index:{type:Number,value:0},parent:{type:String,value:null},target:{type:Object,value:null},value:{type:String,value:null,reflectToAttribute:!0}},attached:function(){this.fire("attached-item",{item:this})},ready:function(){var t=this;this.target=this.$.input,t.fire("focus-item",t),t.addEventListener("focus",function(e){t.fire("focus-item",t)}),t.addEventListener("mouseover",function(e){t.fire("focus-item",t)}),t.addEventListener("blur",function(e){t.fire("blur-item",t)}),t.addEventListener("mouseout",function(e){t.fire("blur-item",t)})},focus:function(){return this.$.input.focus(),this},value:function(){return this.title=this.$.input.value,this.title},delete:function(){this.fire("delete-item",{item:this})},setIndent:function(t){this.fire("indent-item",{item:this,increase:t>0})},add:function(){var t=this.$.input.selectionStart,e=this.$.input.value;this.fire("add-item",{item:this,value:e.slice(0,t),new:e.slice(t,e.length)})},move:function(t){this.fire("move-item",{item:this,moveUp:t<0})},setSelection:function(t,e){var n=void 0!==t?t:0,i=void 0!==e?e:n;try{this.$.input.querySelector("input").setSelectionRange(n,i)}catch(t){console.log(t)}this.focus()},_onChange:function(){this.fire("change-item",{item:this,value:this.$.input.value})},_onEnter:function(){var t=this.$.input.selectionStart,e=this.$.input.value;this.fire("add-item",{item:this,value:e.slice(0,t),new:e.slice(t,e.length)})},_onBackspace:function(t){window.getSelection().toString()==this.$.input.value?(event.detail.keyboardEvent.preventDefault(),this.fire("delete-item",{item:this})):0==this.$.input.selectionStart&&this.fire("indent-item",{item:this,increase:!1})},_onArrowUp:function(){0==this.$.input.selectionStart&&this.fire("focus-item",{item:this,moveUp:!0})},_onArrowDown:function(){this.$.input.selectionStart==this.$.input.value.length&&this.fire("focus-item",{item:this,moveUp:!1})},_onShiftTab:function(){this.setIndent(-1)},_onTab:function(t){0==this.$.input.selectionStart&&(t.preventDefault(),this.setIndent(1))},_onShiftArrowUp:function(){this.move(-1)},_onShiftArrowDown:function(){this.move(1)}}),e.Polymer((r={_template:e.html(s()),is:"lrnsys-outline",listeners:(a={"delete-item":"_handleRemoveItem","indent-item":"_handleIndentItem","focus-item":"_handleFocusItem","add-item":"_handleAddItem","move-item":"_handleMoveItem","change-item":"_handleChangeItem"},n(a,"focus-item","_handleFocusItem"),n(a,"blur-item","_handleBlurItem"),a),properties:{title:{type:String,value:"Content Outline"},data:{type:Array,value:null},items:{type:Array,value:null,notify:!0}},openDirections:function(t){this.$.modal.opened=!0},closeDirections:function(t){this.$.modal.opened=!1,this.$.dialogtrigger.focus()},attached:function(){this.__modal=this.$.modal,document.body.addEventListener("iron-overlay-canceled",this._accessibleFocus.bind(this)),document.body.appendChild(this.$.modal)},_accessibleFocus:function(t){t.detail===this.__modal&&this.$.dialogtrigger.focus()},ready:function(){(null===this.data||this.data.length<1)&&(this.__tempid=void 0===this.__tempid?0:this.__tempid+1,this.data=[{id:"outline-item-"+this.__tempid,title:"",order:0,parent:null}]),this.setData(this.data)},setData:function(t){if(this.items=[],this.items=t,void 0!==t&&t.length>0){var e=-1;for(var n in t){var i=parseInt(this._getIndent(t,n));this.__tempid=void 0===this.__tempid?0:this.__tempid+1,t[n].index=parseInt(n),t[n].indent=i,t[n].prevSibling=this._getSibling(parseInt(n),i,!0),t[n].nextSibling=this._getSibling(parseInt(n),i,!1),t[n].disableUp=null===t[n].prevSibling,t[n].disableDown=null===t[n].nextSibling,t[n].disableLeft=0===i,t[n].disableRight=i>e,t[n].id=void 0===t[n].id?"outline-item-"+this.__tempid:t[n].id,e=i}}this.items=[],this.items=t},getData:function(){for(var t in this.items)this.items[t].order=this._getOrder(this.items[t]);return this.items},addItem:function(t){var e=this.items,n=t.index;this.__tempid=this.__tempid+1,e.splice(n+1,0,{id:"outline-item-"+this.__tempid,title:"",indent:t.indent,parent:t.parent}),this._refreshData(),this.__focusedItem=t.nextElementSibling,this.__focusedItem.focus()},removeItem:function(t){var e=t.index;if(confirm("Do you really want to delete "+this.items[e].title+"?")){for(k in this.__focusedItem=t.previousElementSibling,this.items)this.items[k].parent==this.items[e].id&&(this.items[k].parent=this.items[e].parent);this.items.splice(e,1),this._refreshData(),this.__focusedItem.focus()}},moveItem:function(t,e){var n=t.index,i=this._getLastChild(t),o=i-n+1,a=e?this.items[n].prevSibling:this._getLastChild(this.items[i+1])-o+1,r=this.items;a>-1&&a<this.items.length&&(e&&!t.disableUp||!e&&!t.disableDown)&&(r.splice(a,0,r.splice(n,o)),this.setData(r),this.__focusedItem=this.$.itemslist.querySelectorAll("lrnsys-outline-item")[a],this.__focusedItem.focus())},_refreshData:function(){var t=this.items;this.items=[],this.items=t,void 0!==this.__focusedItem&&null!==this.__focusedItem&&this.__focusedItem.focus()},_adjustIndent:function(t,e){if(e>0&&!t.disableRight||e<0&&!t.disableLeft){var n=parseInt(t.index),i=t.indent,o=t.indent+e,a=n+1,r=null!==t.prevSibling?t.prevSibling.id:null,s=this._getItemById(t.parent)&&this._getItemById(t.parent).parent?this._getItemById(t.parent).parent.id:null;for(t.indent=o,t.parent=e>0?r:s,t.prevSibling=this._getSibling(n,o,!0),t.nextSibling=this._getSibling(n,o,!1),t.disableUp=null===t.prevSibling,t.disableDown=null===t.nextSibling,t.disableLeft=0===o,t.disableRight=null===this.items[n-1]||o>this.items[n-1].indent;null!==this.items[a]&&void 0!==this.items[a]&&i<this.items[a].indent;)this.items[a].indent=this.items[a].indent+e,a++,next=this.items[a];this._refreshData()}},_getLastChild:function(t){var e=null!=t?this._getSibling(t.index,t.indent,!1):null;return null!=e?e-1:null!==t.parent&&null!==t.parent&&null!==this._getItemById(t.parent)?this._getLastChild(this._getItemById(t.parent)):this.items.length-1},_getIndent:function(t,e){if(void 0!==t[e].parent){var n=t.findIndex(function(n){return n.id===t[e].parent});if(void 0!==t[n]&&void 0!==t[n].indent)return t[n].indent+1}return 0},_getOrder:function(t){var e=0,n=0;for(var i in this.items)this.items[i].parent==t.parent&&this.items[i].id==t.id?n=e:this.items[i].parent==t.parent&&e++;return n},_getSibling:function(t,e,n){for(var i=n?-1:1,o=t+i,a=null;o<this.items.length&&o>-1;)null===a&&this.items[o].parent===this.items[t].parent&&(a=o),o+=i;return a},_getItemById:function(t,e){var n=this.items.findIndex(function(e){return e.id===t});return e=void 0===e?0:e,void 0!==this.items[n+e]?this.items[n+e]:null},_handleAddItem:function(t){this.addItem(t.detail.item)},_handleRemoveItem:function(t){this.removeItem(t.detail.item)},_handleMoveItem:function(t){this.moveItem(t.detail.item,t.detail.moveUp,t.detail.byGroup)},_handleFocusItem:function(t){(t.detail.moveUp?t.detail.item.previousElementSibling:t.detail.item.nextElementSibling).setSelection()},_handleIndentItem:function(t){var e=t.detail.increase?1:-1;this._adjustIndent(this._getItemById(t.detail.item.id),e)},_handleChangeItem:function(t){this._getItemById(t.detail.item.id).title=t.detail.value,this._refreshData()}},n(r,"_handleFocusItem",function(t){this.__focusedItem=t.srcElement}),n(r,"_handleBlurItem",function(t){}),r))});
//# sourceMappingURL=lrnsys-outline.umd.js.map
