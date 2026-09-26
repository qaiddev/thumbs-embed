function D() {
  const e = navigator.userAgent || "";
  return /iP(hone|ad|od)/.test(e) || // iPadOS 13+ masquerades as "MacIntel" but is a multi-touch device.
  navigator.platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1;
}
function A(e, a, r, d, s) {
  const t = e >= a, o = r >= d;
  return t === o ? { width: e, height: a, rotate: 0 } : { width: a, height: e, rotate: s === 270 ? -90 : 90 };
}
function x(e, a, r) {
  if (r.rotate === 0) {
    e.drawImage(a, 0, 0, r.width, r.height);
    return;
  }
  e.save(), r.rotate === 90 ? (e.translate(r.width, 0), e.rotate(Math.PI / 2)) : (e.translate(0, r.height), e.rotate(-Math.PI / 2)), e.drawImage(a, 0, 0, r.height, r.width), e.restore();
}
function C() {
  const e = typeof screen < "u" ? screen.orientation : void 0;
  return e && typeof e.angle == "number" ? e.angle : 0;
}
function E(e) {
  return new Promise((a) => {
    if (e.videoWidth > 0) {
      a();
      return;
    }
    e.addEventListener("loadedmetadata", () => a(), { once: !0 });
  });
}
async function I(e) {
  try {
    await e.play();
  } catch {
  }
}
async function F(e, a = 15) {
  const r = document.createElement("canvas");
  if (typeof r.captureStream != "function") return null;
  const d = r.getContext("2d");
  if (!d) return null;
  const s = document.createElement("video");
  s.muted = !0, s.playsInline = !0, s.srcObject = e, await E(s);
  const t = A(
    s.videoWidth,
    s.videoHeight,
    window.innerWidth,
    window.innerHeight,
    C()
  );
  r.width = t.width, r.height = t.height, await I(s);
  let o = 0;
  const c = () => {
    x(d, s, t), o = requestAnimationFrame(c);
  };
  c();
  const n = r.captureStream(a);
  return {
    stream: n,
    stop: () => {
      o && cancelAnimationFrame(o), o = 0, n.getTracks().forEach((u) => u.stop()), s.pause(), s.srcObject = null;
    }
  };
}
function B(e, a, r, d, s) {
  const t = Math.max(0, Math.min(d, e.left * a)), o = Math.max(0, Math.min(s, e.top * r)), c = Math.max(0, Math.min(d, (e.left + e.width) * a)), n = Math.max(0, Math.min(s, (e.top + e.height) * r)), u = c - t, i = n - o;
  return u <= 0 || i <= 0 ? null : { x: t, y: o, w: u, h: i };
}
function O(e, a, r, d, s, t, o) {
  e.drawImage(a, 0, 0, d, s);
  const c = d / Math.max(1, window.innerWidth), n = s / Math.max(1, window.innerHeight);
  for (const u of r) {
    const i = B(
      u.getBoundingClientRect(),
      c,
      n,
      d,
      s
    );
    i && (e.save(), o ? (e.filter = `blur(${t}px)`, e.drawImage(a, i.x, i.y, i.w, i.h, i.x, i.y, i.w, i.h)) : (e.fillStyle = "#0b0b0b", e.fillRect(i.x, i.y, i.w, i.h)), e.restore());
  }
}
async function P(e, a, r = {}) {
  const d = r.frameRate ?? 15, s = r.blurRadius ?? 12, t = document.createElement("canvas");
  if (typeof t.captureStream != "function") return null;
  const o = t.getContext("2d");
  if (!o) return null;
  const c = "filter" in o, n = document.createElement("video");
  n.muted = !0, n.playsInline = !0, n.srcObject = e, await E(n), t.width = n.videoWidth, t.height = n.videoHeight, await I(n);
  let u = 0;
  const i = () => {
    O(
      o,
      n,
      a,
      t.width,
      t.height,
      s,
      c
    ), u = requestAnimationFrame(i);
  };
  i();
  const h = t.captureStream(d);
  return {
    stream: h,
    stop: () => {
      u && cancelAnimationFrame(u), u = 0, h.getTracks().forEach((p) => p.stop()), n.pause(), n.srcObject = null;
    }
  };
}
const L = "This browser cannot blur the areas you picked, so the recording was not started.";
function V() {
  return typeof navigator < "u" && !!navigator.mediaDevices && typeof navigator.mediaDevices.getDisplayMedia == "function" && typeof MediaRecorder < "u";
}
function j() {
  if (typeof MediaRecorder > "u") return "";
  const e = [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
    "video/mp4"
  ];
  for (const a of e)
    if (MediaRecorder.isTypeSupported(a))
      return a;
  return "";
}
function q(e = {}) {
  const a = e.maxDuration ?? 15, r = e.videoBitsPerSecond ?? 8e5, d = e.redactionElements ?? [], s = e.redactionBlurRadius;
  let t = null, o = null, c = null, n = null, u = [], i = null, h = null, p = null, R = 0, w = null, g = null, S = !1, v = null;
  function k() {
    p !== null && (clearInterval(p), p = null), v !== null && (clearTimeout(v), v = null), o && (o.stop(), o = null), c && (c.stop(), c = null), t && (t.getTracks().forEach((f) => f.stop()), t = null), n = null, u = [], i = null, h = null, w = null, g = null;
  }
  function y() {
    S || (S = !0, n && n.state !== "inactive" && n.stop());
  }
  return {
    async start() {
      S = !1, u = [];
      const f = j();
      if (!f)
        throw new Error("No supported video MIME type found");
      t = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: 15,
          displaySurface: "browser"
        },
        audio: !1,
        // @ts-expect-error preferCurrentTab is not in the TS types yet
        preferCurrentTab: !0,
        selfBrowserSurface: "include",
        monitorTypeSurfaces: "exclude",
        surfaceSwitching: "exclude"
      });
      const m = t.getVideoTracks()[0], T = m?.getSettings?.()?.displaySurface;
      if (T === "monitor" || T === "window")
        throw t.getTracks().forEach((l) => l.stop()), t = null, new Error(
          "qaid records only the current tab — please share this tab, not a window or your whole screen."
        );
      m && m.addEventListener("ended", () => {
        y();
      });
      let b = t;
      if (D()) {
        const l = await F(t);
        l && (o = l, b = l.stream);
      }
      if (d.length > 0) {
        const l = await P(b, d, {
          blurRadius: s
        });
        if (!l)
          throw o && (o.stop(), o = null), t.getTracks().forEach((M) => M.stop()), t = null, new Error(L);
        c = l, b = l.stream;
      }
      n = new MediaRecorder(b, {
        mimeType: f,
        videoBitsPerSecond: r
      }), n.ondataavailable = (l) => {
        l.data.size > 0 && u.push(l.data);
      }, n.onstop = () => {
        const l = new Blob(u, { type: f });
        w && w(l), h && h(l), o && (o.stop(), o = null), c && (c.stop(), c = null), t && t.getTracks().forEach((M) => M.stop());
      }, n.onerror = () => {
        g && g(new Error("MediaRecorder error"));
      }, n.start(1e3), R = Date.now(), p = setInterval(() => {
        const l = Math.floor((Date.now() - R) / 1e3);
        i && i(l);
      }, 1e3), v = setTimeout(() => {
        y();
      }, a * 1e3);
    },
    stop() {
      return new Promise((f, m) => {
        w = f, g = m, y();
      });
    },
    onTick(f) {
      i = f;
    },
    onStop(f) {
      h = f;
    },
    destroy() {
      y(), k();
    }
  };
}
export {
  L as REDACTION_UNAVAILABLE,
  q as createVideoRecorder,
  j as getSupportedMimeType,
  V as isVideoRecordingSupported
};
//# sourceMappingURL=video-Bd_29-rK.js.map
