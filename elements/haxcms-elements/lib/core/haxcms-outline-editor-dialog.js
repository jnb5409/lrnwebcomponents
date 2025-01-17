import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "@lrnwebcomponents/json-outline-schema/json-outline-schema.js";
import "@lrnwebcomponents/json-editor/json-editor.js";
import "@lrnwebcomponents/editable-outline/editable-outline.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-icons/iron-icons.js";
/**
 * `haxcms-outline-editor-dialog`
 * `Dialog for presenting an editable outline`
 *
 * @demo demo/index.html
 *
 * @microcopy - the mental model for this element
 */
class HAXCMSOutlineEditorDialog extends PolymerElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "haxcms-outline-editor-dialog";
  }
  // render function
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 60vh;
          min-width: 50vw;
        }
        .buttons {
          position: absolute;
          bottom: 0;
          z-index: 1000000;
          background-color: var(--simple-modal-titlebar-background, #000000);
          color: var(--simple-modal-titlebar-color, #ffffff);
          left: 0;
          right: 0;
        }
        .buttons paper-button {
          color: #ffffff;
          background-color: var(--simple-modal-button-background, #000000);
        }
        editable-outline:not(:defined),
        json-editor:not(:defined),
        paper-button:not(:defined) {
          display: none;
        }
        #toggle {
          float: right;
          text-transform: unset;
        }
        #savebtn {
          color: white;
          background-color: var(--simple-colors-default-theme-blue-7, #2196f3);
        }
        editable-outline,
        json-editor {
          margin-bottom: 32px;
        }
      </style>
      <editable-outline
        id="outline"
        edit-mode
        hidden$="[[viewMode]]"
        items="[[manifestItems]]"
      ></editable-outline>
      <json-editor
        id="editor"
        label="JSON Outline Schema items"
        value="[[manifestItemsStatic]]"
        hidden$="[[!viewMode]]"
      ></json-editor>
      <div class="buttons">
        <paper-button id="savebtn" dialog-confirm on-click="_saveTap"
          ><iron-icon icon="icons:save"></iron-icon>Save</paper-button
        >
        <paper-button dialog-dismiss
          ><iron-icon icon="icons:cancel"></iron-icon>Cancel</paper-button
        >
        <paper-button id="toggle" on-click="toggleView"
          ><iron-icon icon="[[_viewIcon]]"></iron-icon
          >[[viewLabel]]</paper-button
        >
      </div>
    `;
  }

  static get properties() {
    return {
      /**
       * opened state of the dialog inside here
       */
      opened: {
        type: Boolean,
        notify: true
      },
      /**
       * Outline of items in json outline schema format
       */
      manifestItems: {
        type: Array,
        observer: "_manifestItemsChanged"
      },
      /**
       * Stringify'ed representation of items
       */
      manifestItemsStatic: {
        type: String
      },
      /**
       * Display label, switch when hitting the toggle button
       */
      viewLabel: {
        type: String,
        computed: "_getViewLabel(viewMode)"
      },
      /**
       * Which edit mode to display
       */
      viewMode: {
        type: Boolean,
        value: false,
        observer: "_viewModeChanged"
      }
    };
  }
  _manifestItemsChanged(newValue) {
    if (newValue) {
      window.JSONOutlineSchema.requestAvailability().items = newValue;
      this.manifestItemsStatic = JSON.stringify(newValue, null, 2);
    }
  }
  ready() {
    super.ready();
    afterNextRender(this, function() {
      this.$.editor.addEventListener("current-data-changed", e => {
        if (e.detail.value) {
          this.set("manifestItems", e.detail.value);
          this.$.outline.importJsonOutlineSchemaItems();
        }
      });
    });
  }
  /**
   * attached life cycle
   */
  connectedCallback() {
    super.connectedCallback();
    this.__disposer = [];
    autorun(reaction => {
      setTimeout(() => {
        this.manifestItems = Object.assign([], toJS(store.manifest.items));
        this.__disposer.push(reaction);
      }, 500);
    });
  }
  /**
   * detached life cycle
   */
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    this.$.editor.removeEventListener("current-data-changed", e => {
      if (e.detail.value) {
        this.set("manifestItems", e.detail.value);
        this.$.outline.importJsonOutlineSchemaItems();
      }
    });
    super.disconnectedCallback();
  }
  /**
   * Switch view
   */
  toggleView(e) {
    this.viewMode = !this.viewMode;
  }
  /**
   * Get the active label
   */
  _getViewLabel(mode) {
    if (mode) {
      this._viewIcon = "icons:view-list";
      return "Outline mode";
    } else {
      this._viewIcon = "icons:code";
      return "Developer mode";
    }
  }
  /**
   * Ensure that data is correct between the outline and advanced view
   */
  _viewModeChanged(newValue, oldValue) {
    // odd I know, but this is the default outline view
    if (!newValue) {
      this.$.outline.importJsonOutlineSchemaItems();
    } else {
      const items = this.$.outline.exportJsonOutlineSchemaItems(true);
      this.set("manifestItems", items);
    }
  }

  /**
   * Save hit, send the message to push up the outline changes.
   */
  _saveTap(e) {
    window.dispatchEvent(
      new CustomEvent("haxcms-save-outline", {
        bubbles: true,
        composed: true,
        detail: this.$.outline.exportJsonOutlineSchemaItems(true)
      })
    );
  }
}
window.customElements.define(
  HAXCMSOutlineEditorDialog.tag,
  HAXCMSOutlineEditorDialog
);
export { HAXCMSOutlineEditorDialog };
