define("ace/ext/static_highlight", [
  "require",
  "exports",
  "module",
  "ace/edit_session",
  "ace/layer/text",
  "ace/config",
  "ace/lib/dom"
], function(e, t, n) {
  "use strict";
  function a(e) {
    (this.type = e), (this.style = {}), (this.textContent = "");
  }
  var r = e("../edit_session").EditSession,
    i = e("../layer/text").Text,
    s =
      ".ace_static_highlight {font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'Droid Sans Mono', monospace;font-size: 12px;white-space: pre-wrap}.ace_static_highlight .ace_gutter {width: 32px;text-align: right;padding: 0 3px 0 0;margin-right: 3px;}.ace_static_highlight.ace_show_gutter .ace_line {padding-left: 41.6px;}.ace_static_highlight .ace_line { position: relative; }.ace_static_highlight .ace_gutter-cell {-moz-user-select: -moz-none;-khtml-user-select: none;-webkit-user-select: none;user-select: none;top: 0;bottom: 0;left: 0;position: absolute;}.ace_static_highlight .ace_gutter-cell:before {content: counter(ace_line, decimal);counter-increment: ace_line;}.ace_static_highlight {counter-reset: ace_line;}",
    o = e("../config"),
    u = e("../lib/dom");
  (a.prototype.cloneNode = function() {
    return this;
  }),
    (a.prototype.appendChild = function(e) {
      this.textContent += e.toString();
    }),
    (a.prototype.toString = function() {
      var e = [];
      if (this.type != "fragment") {
        e.push("<", this.type),
          this.className && e.push(" class='", this.className, "'");
        var t = [];
        for (var n in this.style) t.push(n, ":", this.style[n]);
        t.length && e.push(" style='", t.join(""), "'"), e.push(">");
      }
      return (
        this.textContent && e.push(this.textContent),
        this.type != "fragment" && e.push("</", this.type, ">"),
        e.join("")
      );
    });
  var f = {
      createTextNode: function(e, t) {
        return e;
      },
      createElement: function(e) {
        return new a(e);
      },
      createFragment: function() {
        return new a("fragment");
      }
    },
    l = function() {
      (this.config = {}), (this.dom = f);
    };
  l.prototype = i.prototype;
  var c = function(e, t, n) {
    var r = e.className.match(/lang-(\w+)/),
      i = t.mode || (r && "ace/mode/" + r[1]);
    if (!i) return !1;
    var s = t.theme || "ace/theme/textmate",
      o = "",
      a = [];
    if (e.firstElementChild) {
      var f = 0;
      for (var l = 0; l < e.childNodes.length; l++) {
        var h = e.childNodes[l];
        h.nodeType == 3 ? ((f += h.data.length), (o += h.data)) : a.push(f, h);
      }
    } else (o = e.textContent), t.trim && (o = o.trim());
    c.render(o, i, s, t.firstLineNumber, !t.showGutter, function(t) {
      u.importCssString(t.css, "ace_highlight"), (e.innerHTML = t.html);
      var r = e.firstChild.firstChild;
      for (var i = 0; i < a.length; i += 2) {
        var s = t.session.doc.indexToPosition(a[i]),
          o = a[i + 1],
          f = r.children[s.row];
        f && f.appendChild(o);
      }
      n && n();
    });
  };
  (c.render = function(e, t, n, i, s, u) {
    function h() {
      var r = c.renderSync(e, t, n, i, s);
      return u ? u(r) : r;
    }
    var a = 1,
      f = r.prototype.$modes;
    typeof n == "string" &&
      (a++,
      o.loadModule(["theme", n], function(e) {
        (n = e), --a || h();
      }));
    var l;
    return (
      t && typeof t == "object" && !t.getTokenizer && ((l = t), (t = l.path)),
      typeof t == "string" &&
        (a++,
        o.loadModule(["mode", t], function(e) {
          if (!f[t] || l) f[t] = new e.Mode(l);
          (t = f[t]), --a || h();
        })),
      --a || h()
    );
  }),
    (c.renderSync = function(e, t, n, i, o) {
      i = parseInt(i || 1, 10);
      var u = new r("");
      u.setUseWorker(!1), u.setMode(t);
      var a = new l();
      a.setSession(u),
        Object.keys(a.$tabStrings).forEach(function(e) {
          if (typeof a.$tabStrings[e] == "string") {
            var t = f.createFragment();
            (t.textContent = a.$tabStrings[e]), (a.$tabStrings[e] = t);
          }
        }),
        u.setValue(e);
      var c = u.getLength(),
        h = f.createElement("div");
      h.className = n.cssClass;
      var p = f.createElement("div");
      (p.className = "ace_static_highlight" + (o ? "" : " ace_show_gutter")),
        (p.style["counter-reset"] = "ace_line " + (i - 1));
      for (var d = 0; d < c; d++) {
        var v = f.createElement("div");
        v.className = "ace_line";
        if (!o) {
          var m = f.createElement("span");
          (m.className = "ace_gutter ace_gutter-cell"),
            (m.textContent = ""),
            v.appendChild(m);
        }
        a.$renderLine(v, d, !1), p.appendChild(v);
      }
      return (
        h.appendChild(p), { css: s + n.cssText, html: h.toString(), session: u }
      );
    }),
    (n.exports = c),
    (n.exports.highlight = c);
});
(function() {
  window.require(["ace/ext/static_highlight"], function(m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();