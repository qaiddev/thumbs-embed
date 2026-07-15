function a(o) {
  const s = typeof o == "string" ? o : JSON.stringify(o);
  return s.length > 4096 ? s.slice(0, 4096) + "…[truncated]" : s;
}
function d(o, s) {
  o.length >= 20 && o.shift(), o.push(s);
}
async function h(o) {
  try {
    const s = await o.clone().text();
    return a(s);
  } catch {
    return;
  }
}
function y() {
  const o = [], s = window.fetch;
  window.fetch = async function(e, t) {
    const n = typeof e == "string" ? e : e instanceof URL ? e.toString() : e.url, u = t?.method ?? (typeof e == "object" && "method" in e ? e.method : "GET");
    let p;
    t?.body && (p = a(t.body));
    const r = await s.apply(window, [e, t]);
    if (r.status >= 400) {
      const f = await h(r);
      d(o, {
        url: n,
        method: u.toUpperCase(),
        status: r.status,
        statusText: r.statusText,
        requestBody: p,
        responseBody: f,
        timestamp: Date.now()
      });
    }
    return r;
  };
  const c = XMLHttpRequest.prototype.open, i = XMLHttpRequest.prototype.send;
  return XMLHttpRequest.prototype.open = function(e, t, ...n) {
    return this._qaid_method = e, this._qaid_url = typeof t == "string" ? t : t.toString(), c.apply(this, [e, t, ...n]);
  }, XMLHttpRequest.prototype.send = function(e) {
    const t = this, n = e ? a(e) : void 0;
    return t.addEventListener("load", function() {
      t.status >= 400 && d(o, {
        url: t._qaid_url,
        method: t._qaid_method.toUpperCase(),
        status: t.status,
        statusText: t.statusText,
        requestBody: n,
        responseBody: a(t.responseText),
        timestamp: Date.now()
      });
    }), i.apply(this, [e]);
  }, {
    errors: o,
    restore: () => {
      window.fetch = s, XMLHttpRequest.prototype.open = c, XMLHttpRequest.prototype.send = i;
    }
  };
}
export {
  y as c
};
//# sourceMappingURL=network-capture-DMbMwwwR.js.map
