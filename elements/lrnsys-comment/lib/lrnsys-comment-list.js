import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import { microTask } from "@polymer/polymer/lib/utils/async.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/iron-form-element-behavior/iron-form-element-behavior.js";
import "@polymer/app-layout/app-layout.js";
import "@polymer/app-layout/app-toolbar/app-toolbar.js";
import "@lrnwebcomponents/simple-toast/simple-toast.js";
import "@lrnwebcomponents/simple-modal/simple-modal.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
import "@polymer/paper-item/paper-item.js";
import "@polymer/paper-listbox/paper-listbox.js";
import "@lrnwebcomponents/lrnsys-button/lrnsys-button.js";
import "@lrnwebcomponents/grafitto-filter/grafitto-filter.js";
import "@lrnwebcomponents/dropdown-select/dropdown-select.js";
import "../lrnsys-comment.js";

/**
 * `lrnsys-comment-list`
 * `A listing and event handling for comments.`
 * @demo demo/index.html
 */
class LrnsysCommentList extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        app-toolbar {
          padding: 0;
        }
        app-toolbar > *:not(:last-child) {
          margin-right: 10px;
        }
        lrnsys-button {
          font-size: 12px;
        }
        .comment-button {
          min-width: 125px;
        }
      </style>
      <!-- Load all comments on load of element -->
      <iron-ajax
        auto
        url="[[sourcePath]]"
        handle-as="json"
        method="[[opsRequestMethod.list]]"
        last-response="{{comments}}"
      ></iron-ajax>
      <!-- Create stub-comment -->
      <iron-ajax
        id="ajaxcreatestub"
        url="[[createStubUrl]]"
        method="[[opsRequestMethod.create]]"
        body="[[activeComment.id]]"
        on-response="_updateReply"
        handle-as="json"
        last-response="{{newComment}}"
      ></iron-ajax>
      <!-- Update comment -->
      <iron-ajax
        id="ajaxupdaterequest"
        url="[[reqUrl]]"
        method="[[opsRequestMethod.update]]"
        body="[[activeComment]]"
        content-type="application/json"
        handle-as="json"
        on-response="_handleUpdateResponse"
      ></iron-ajax>
      <!-- Delete comment -->
      <iron-ajax
        id="ajaxdeleterequest"
        url="[[reqUrl]]"
        method="[[opsRequestMethod.delete]]"
        body="[[activeComment]]"
        content-type="application/json"
        handle-as="json"
        on-response="_handleDeleteResponse"
      ></iron-ajax>
      <!-- Like comment -->
      <iron-ajax
        id="ajaxlikerequest"
        url="[[reqUrl]]"
        method="[[opsRequestMethod.like]]"
        body="[[activeComment]]"
        content-type="application/json"
        handle-as="json"
        on-response="_handleLikeResponse"
      ></iron-ajax>
      <app-toolbar>
        <lrnsys-button
          class="comment-button"
          raised
          on-click="handleTopReply"
          id="leavecomment"
          hover-class="blue white-text"
          label="Add Comment"
        ></lrnsys-button>
        <dropdown-select
          id="filtertype"
          label="Filter Comments by"
          value="attributes.body"
        >
          <paper-item value="attributes.body">Body</paper-item>
          <paper-item value="relationships.author.data.name"
            >User Name</paper-item
          >
        </dropdown-select>
        <paper-input
          label="Filter Text"
          id="filtercomments"
          aria-controls="filteredcomments"
          value=""
          always-float-label=""
        ></paper-input>
      </app-toolbar>
      <grafitto-filter
        id="filteredcomments"
        items\$="[[_toArray(comments.data)]]"
        where=""
        as="filtered"
        like=""
      >
        <template>
          <template
            is="dom-repeat"
            id="commentlist"
            items="[[filtered]]"
            as="item"
          >
            <lrnsys-comment
              comment="{{item}}"
              hover-class="blue white-text"
            ></lrnsys-comment>
          </template>
        </template>
      </grafitto-filter>
    `;
  }

  static get tag() {
    return "lrnsys-comment-list";
  }

  static get properties() {
    return {
      /**
       * CSRF Token
       */
      csrfToken: {
        type: String
      },
      /**
       * Request methods
       */
      opsRequestMethod: {
        type: Object,
        value: {
          list: "GET",
          create: "POST",
          update: "PUT",
          delete: "DELETE",
          like: "PATCH"
        }
      },
      /**
       * Comment currently in scope
       */
      activeComment: {
        type: Object,
        notify: true
      },
      /**
       * New stub comment from backend.
       */
      newComment: {
        type: Object,
        notify: true
      },
      /**
       * An object containing all comments to render in the list
       */
      comments: {
        type: Object,
        notify: true
      },
      /**
       * Source to pull the comments from
       */
      sourcePath: {
        type: String,
        notify: true
      },
      /**
       * Base for ops calls
       */
      commentOpsBase: {
        type: String,
        notify: true
      },
      /**
       * Source to get stub comments from
       */
      createStubUrl: {
        type: String,
        notify: true
      },
      /**
       * Source for CRUD ops against individual comments.
       */
      reqUrl: {
        type: String,
        notify: true,
        computed:
          "_computeCommentOpsUrl(activeComment, commentOpsBase, csrfToken)"
      }
    };
  }

  /**
   * attached life cycle
   */
  connectedCallback() {
    super.connectedCallback();
    window.SimpleModal.requestAvailability();
    this.$.filtercomments.addEventListener("value-changed", e => {
      this.$.filteredcomments.like = e.target.value;
    });
    this.$.filtertype.addEventListener("change", e => {
      this.$.filtercomments.value = "";
      this.$.filteredcomments.where = e.detail.value;
      this.$.filteredcomments.like = "";
    });
    afterNextRender(this, function() {
      this.addEventListener("comment-save", this.handleSave.bind(this));
      this.addEventListener("comment-editing", this.handleEditing.bind(this));
      this.addEventListener("comment-reply", this.handleReply.bind(this));
      this.addEventListener("comment-like", this.handleLike.bind(this));
      this.addEventListener(
        "comment-delete-dialog",
        this.handleDeleteDialog.bind(this)
      );
    });
  }
  /**
   * detached life cycle
   */
  disconnectedCallback() {
    this.removeEventListener("comment-save", this.handleSave.bind(this));
    this.removeEventListener("comment-editing", this.handleEditing.bind(this));
    this.removeEventListener("comment-reply", this.handleReply.bind(this));
    this.removeEventListener("comment-like", this.handleLike.bind(this));
    this.removeEventListener(
      "comment-delete-dialog",
      this.handleDeleteDialog.bind(this)
    );
    this.$.filtercomments.removeEventListener("value-changed", e => {
      this.$.filteredcomments.like = e.target.value;
    });
    this.$.filtertype.removeEventListener("change", e => {
      this.$.filtercomments.value = "";
      this.$.filteredcomments.where = e.detail.value;
      this.$.filteredcomments.like = "";
    });
    super.disconnectedCallback();
  }
  /**
   * Generate the ops URL based on the active comment
   */
  _computeCommentOpsUrl(activeComment, commentOpsBase, csrfToken) {
    if (typeof activeComment !== typeof undefined) {
      return commentOpsBase + "/" + activeComment.id + "?token=" + csrfToken;
    }
  }
  /**
   * Handle liking a comment.
   */
  handleLike(e) {
    this.activeComment = e.detail.comment;
    this.$.ajaxlikerequest.generateRequest();
  }
  /**
   * @todo not sure we need to do anything post like button
   */
  _handleLikeResponse(e) {}
  /**
   * Handle a delete dialog to confirm.
   */
  handleDeleteDialog(e) {
    this.activeComment = e.detail.comment;
    // content of dialog
    let c = document.createElement("p");
    let t = document.createTextNode(
      "Are you sure you want to delete your comment?"
    );
    c.appendChild(t);
    // buttons
    let b = document.createElement("div");
    b.classList.add("buttons");
    // close button
    let pb = document.createElement("paper-button");
    pb.setAttribute("dialog-dismiss", "dialog-dismiss");
    t = document.createTextNode("Decline");
    pb.appendChild(t);
    b.appendChild(pb);
    // confirm button
    let pb2 = document.createElement("paper-button");
    pb2.setAttribute("dialog-confirm", "dialog-confirm");
    pb2.setAttribute("autofocus", "autofocus");
    pb2.addEventListener("click", this._handleDeleteConfirm.bind(this));
    t = document.createTextNode("Accept");
    pb2.appendChild(t);
    b.appendChild(pb2);
    const evt = new CustomEvent("simple-modal-show", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        title: "Delete comment",
        elements: {
          content: c,
          buttons: b
        },
        invokedBy: e.detail.target,
        clone: false
      }
    });
    this.dispatchEvent(evt);
  }
  /**
   * Handle editing response
   */
  handleEditing(e) {
    const evt = new CustomEvent("simple-toast-show", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        text: "Be awesome to each other",
        duration: 4000
      }
    });
    this.dispatchEvent(evt);
  }

  /**
   * Handle a reply event bubbling up from a comment we've printed
   * via our template in this element. This allows the higher element
   * to create new lower ones which can invoke more lower ones from
   * up above.
   */
  handleTopReply(e) {
    // ensure nothing is set as active for when this goes out the door
    this.set("newComment", []);
    this.set("activeComment", []);
    this.$.ajaxcreatestub.generateRequest();
  }

  /**
   * Handle a reply event bubbling up from a comment we've printed
   * via our template in this element. This allows the higher element
   * to create new lower ones which can invoke more lower ones from
   * up above.
   */
  handleReply(e) {
    this.set("newComment", []);
    this.activeComment = e.detail.comment;
    // shift where the response will go
    this.$.ajaxcreatestub.generateRequest();
  }

  /**
   * Update the UI to reflect the new comment based on returned data
   * added to the end since it's a new comment.
   */
  _updateReply(e) {
    var comment = this.activeComment;
    var comments = this.comments.data;
    // normalize response
    this.newComment = this.newComment.data;
    // see if we have any comments at all
    if (comments.length == 0) {
      // top level replys need to get added to the end of the array
      comments.push(this.newComment);
    }
    // see if this is top level
    else if (typeof comment.id == typeof undefined) {
      // top level replys need to get added to the end of the array
      comments.push(this.newComment);
    } else {
      for (var index = 0; index < comments.length; index++) {
        if (comments[index].id == comment.id) {
          comments.splice(index + 1, 0, this.newComment);
        }
      }
    }
    this.activeComment = this.newComment;
    // force tree to notice element updated
    this.set("comments.data", []);
    this.set("comments.data", comments);
    this.notifyPath("comments.data");
  }

  /**
   * Handle a delete event bubbling up from a comment we've printed.
   */
  _handleDeleteConfirm(e) {
    this.$.ajaxdeleterequest.generateRequest();
  }

  _handleDeleteResponse(e) {
    var comment = this.activeComment;
    var comments = this.comments.data;
    for (var index = 0; index < comments.length; index++) {
      if (comments[index].id == comment.id) {
        comments.splice(index, 1);
        // nulify the active comment since it's been removed
        this.set("activeComment", []);
        // force tree to notice element updated
        this.set("comments.data", []);
        this.set("comments.data", comments);
        this.notifyPath("comments.data");
        // force tree to notice element updated
        const evt = new CustomEvent("simple-toast-show", {
          bubbles: true,
          composed: true,
          cancelable: true,
          detail: {
            text: "Comment deleted",
            duration: 4000
          }
        });
        this.dispatchEvent(evt);
        // bail early
        return true;
      }
    }
  }

  /**
   * Handle saving a comment.
   */
  handleSave(e) {
    this.activeComment = e.detail.comment;
    this.$.ajaxupdaterequest.generateRequest();
  }

  _handleUpdateResponse(e) {
    const evt = new CustomEvent("simple-toast-show", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        text: "Comment saved!",
        duration: 4000
      }
    });
    this.dispatchEvent(evt);
  }

  /**
   * Simple way to convert from object to array.
   */
  _toArray(obj) {
    if (obj == null) {
      return [];
    }
    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  }
}
window.customElements.define(LrnsysCommentList.tag, LrnsysCommentList);
export { LrnsysCommentList };
