import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@lrnwebcomponents/cms-hax/cms-hax.js";

/**
 * `wysiwyg-hax`
 * `Integration of wysiwyg edit form for a page with HAX.`
 */
class WysiwygHax extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <textarea
        class$="[[fieldClass]]"
        id\$="[[fieldId]]"
        name="[[fieldName]]"
        hidden=""
      >
[[bodyValue]]</textarea
      >
      <cms-hax
        open-default="[[openDefault]]"
        hide-message=""
        redirect-location="[[redirectLocation]]"
        update-page-data="[[updatePageData]]"
        end-point="[[endPoint]]"
        app-store-connection="[[appStoreConnection]]"
        hide-export-button="[[hideExportButton]]"
        align="[[align]]"
      >
      </cms-hax>
    `;
  }

  static get tag() {
    return "wysiwyg-hax";
  }

  static get properties() {
    return {
      /**
       * Default the panel to open
       */
      openDefault: {
        type: Boolean,
        value: false
      },
      redirectLocation: {
        type: String
      },
      /**
       * Hide the export button, not a common thing to show
       * in this mode but it's possible for debugging
       */
      hideExportButton: {
        type: Boolean,
        value: true
      },
      /**
       * Direction to align the hax edit panel
       */
      align: {
        type: String,
        value: "right"
      },
      /**
       * Data binding of a hidden text area with the value from the hax-body tag
       */
      bodyValue: {
        type: String
      },
      /**
       * Connection object for talking to an app store.
       */
      appStoreConnection: {
        type: Object
      },
      /**
       * class on the field
       */
      fieldClass: {
        type: String
      },
      /**
       * fieldId, id value on the input field.
       */
      fieldId: {
        type: String,
        value: "textarea-input-field"
      },
      /**
       * fieldName, internal to the form in whatever system it's in.
       */
      fieldName: {
        type: String,
        value: "data[content]"
      },
      /**
       * State of the panel
       */
      editMode: {
        type: Boolean,
        reflectToAttribute: true
      },
      /**
       * Location to save content to.
       */
      endPoint: {
        type: String
      },
      /**
       * Page data, body of text as a string.
       */
      updatePageData: {
        type: String
      },
      /**
       * Reference to activeBody.
       */
      activeHaxBody: {
        type: Object,
        observer: "_activeHaxBodyUpdated"
      },
      __imported: {
        type: Boolean,
        value: false
      }
    };
  }
  /**
   * highjack shadowDom
   */
  _attachDom(dom) {
    this.appendChild(dom);
  }

  /**
   * Ensure we've imported our content on initial setup
   */
  _activeHaxBodyUpdated(newValue, oldValue) {
    // ensure we import our content once we get an initial registration of active body
    if (newValue != null && !this.__imported) {
      this.__imported = true;
      // see what's inside of this, in a template tag
      let children = this.querySelector("template");
      // convert this template content into the real thing
      // this helps with correctly preserving everything on the way down
      if (children != null) {
        newValue.importContent(children.innerHTML);
        // need to dot his because of juggling unfortunately
        this.editMode = false;
        window.HaxStore.write("editMode", this.editMode, this);
        setTimeout(() => {
          this.editMode = true;
          window.HaxStore.write("editMode", this.editMode, this);
        }, 200);
      }
    }
  }
  connectedCallback() {
    super.connectedCallback();
    document.body.addEventListener(
      "hax-save",
      this._bodyContentUpdated.bind(this)
    );
    document.body.addEventListener(
      "hax-store-property-updated",
      this._haxStorePropertyUpdated.bind(this)
    );
  }
  disconnectedCallback() {
    document.body.removeEventListener(
      "hax-save",
      this._bodyContentUpdated.bind(this)
    );
    document.body.removeEventListener(
      "hax-store-property-updated",
      this._haxStorePropertyUpdated.bind(this)
    );
    super.disconnectedCallback();
  }
  /**
   * Store updated, sync.
   */
  _haxStorePropertyUpdated(e) {
    if (
      e.detail &&
      typeof e.detail.value !== typeof undefined &&
      e.detail.property
    ) {
      if (typeof e.detail.value === "object") {
        this.set(e.detail.property, null);
      }
      this.set(e.detail.property, e.detail.value);
    }
  }

  /**
   * Set the bubbled up event to the body value that just got changed
   */
  _bodyContentUpdated(e) {
    this.bodyValue = window.HaxStore.instance.activeHaxBody.haxToContent();
  }
}
window.customElements.define(WysiwygHax.tag, WysiwygHax);
export { WysiwygHax };
