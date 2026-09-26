const f = document;
function c(l, t, ...i) {
  const n = f.createElement(l);
  if (t) {
    if (t.class && (n.className = t.class), t.style && (n.style.cssText = t.style), t.html != null && (n.innerHTML = t.html), t.text != null && (n.textContent = t.text), t.attrs)
      for (const e in t.attrs) n.setAttribute(e, t.attrs[e]);
    if (t.on)
      for (const e in t.on) n.addEventListener(e, t.on[e]);
  }
  for (const e of i)
    e != null && e !== !1 && n.append(e);
  return n;
}
export {
  c as h
};
//# sourceMappingURL=dom-DvdtcUS8.js.map
