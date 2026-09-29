import { h as r } from "./dom-DvdtcUS8.js";
import { b as v } from "./annotate-D-o8xCV9.js";
const g = 20, u = 4096;
function l(d) {
  const t = typeof d == "string" ? d : JSON.stringify(d);
  return t.length > u ? t.slice(0, u) + "…[truncated]" : t;
}
function p(d, t) {
  d.length >= g && d.shift(), d.push(t);
}
async function b(d) {
  try {
    const t = await d.clone().text();
    return l(t);
  } catch {
    return;
  }
}
function R() {
  const d = [], t = window.fetch;
  window.fetch = async function(o, s) {
    const n = typeof o == "string" ? o : o instanceof URL ? o.toString() : o.url, c = s?.method ?? (typeof o == "object" && "method" in o ? o.method : "GET");
    let a;
    s?.body && (a = l(s.body));
    const h = await t.apply(window, [o, s]);
    if (h.status >= 400) {
      const f = await b(h);
      p(d, {
        url: n,
        method: c.toUpperCase(),
        status: h.status,
        statusText: h.statusText,
        requestBody: a,
        responseBody: f,
        timestamp: Date.now()
      });
    }
    return h;
  };
  const i = XMLHttpRequest.prototype.open, e = XMLHttpRequest.prototype.send;
  return XMLHttpRequest.prototype.open = function(o, s, ...n) {
    return this._qaid_method = o, this._qaid_url = typeof s == "string" ? s : s.toString(), i.apply(this, [o, s, ...n]);
  }, XMLHttpRequest.prototype.send = function(o) {
    const s = this, n = o ? l(o) : void 0;
    return s.addEventListener("load", function() {
      s.status >= 400 && p(d, {
        url: s._qaid_url,
        method: s._qaid_method.toUpperCase(),
        status: s.status,
        statusText: s.statusText,
        requestBody: n,
        responseBody: l(s.responseText),
        timestamp: Date.now()
      });
    }), e.apply(this, [o]);
  }, {
    errors: d,
    restore: () => {
      window.fetch = t, XMLHttpRequest.prototype.open = i, XMLHttpRequest.prototype.send = e;
    }
  };
}
class m {
  constructor(t) {
    this.host = t;
  }
  host;
  videoRecorder = null;
  networkCapture = null;
  recordedBlob = null;
  recordingIndicator = null;
  videoPreview = null;
  isRecording = !1;
  isSendingVideo = !1;
  // Pre-recording redaction picking.
  redactPicks = [];
  redactPickerRoot = null;
  redactRafId = 0;
  boundRedactClick = (t) => this.handleRedactPickClick(t);
  /** Escape-key handler; returns true when it consumed the key. */
  handleEscape() {
    return this.isRecording ? (this.stopRecording(), !0) : this.videoPreview ? (this.cancelRecordingPreview(), !0) : this.redactPickerRoot ? (this.finishRedactionPicking(!1), !0) : !1;
  }
  destroy() {
    this.redactRafId && cancelAnimationFrame(this.redactRafId), this.redactRafId = 0, document.removeEventListener("click", this.boundRedactClick, !0), this.redactPickerRoot && (this.redactPickerRoot.remove(), this.redactPickerRoot = null), this.redactPicks = [], this.cleanupRecording(), this.removeVideoPreview();
  }
  async startRecording(t = []) {
    if (!(this.isRecording || this.host.state !== "IDLE"))
      try {
        this.networkCapture = R();
        const { createVideoRecorder: i } = await import("./video-Bd_29-rK.js");
        this.videoRecorder = i({
          maxDuration: this.host.config.videoOptions.maxDuration,
          redactionElements: t
        }), this.videoRecorder.onTick((e) => {
          this.updateRecordingTimer(e);
        }), this.videoRecorder.onStop((e) => {
          this.isRecording && (this.recordedBlob = e, this.isRecording = !1, this.host.announceMsg("Recording stopped"), this.removeRecordingIndicator(), document.removeEventListener("keydown", this.host.boundKeyDown), this.host.setButtonsDisabled(!1), e && e.size > 0 ? this.showRecordingPreview() : this.cleanupRecording());
        }), await this.videoRecorder.start(), this.isRecording = !0, this.host.announceMsg("Recording started"), this.host.setButtonsDisabled(!0), this.showRecordingIndicator(), document.addEventListener("keydown", this.host.boundKeyDown);
      } catch (i) {
        i instanceof Error && /current tab|cannot blur/i.test(i.message) && this.host.announceMsg(i.message), this.cleanupRecording();
      }
  }
  async stopRecording() {
    try {
      this.recordedBlob = await this.videoRecorder.stop();
    } catch {
      this.recordedBlob = null;
    }
    this.isRecording = !1, this.host.announceMsg("Recording stopped"), this.removeRecordingIndicator(), document.removeEventListener("keydown", this.host.boundKeyDown), this.recordedBlob && this.recordedBlob.size > 0 ? this.showRecordingPreview() : this.cleanupRecording();
  }
  /**
   * Pre-recording redaction picker. The user clicks page areas to blur; each
   * gets an outline that tracks its position, then "Start recording" hands the
   * picks to the recorder, which blurs their live bounding boxes so the
   * redaction follows the content as the page scrolls. "Cancel"/Escape aborts.
   */
  startPicking() {
    if (this.isRecording || this.host.state !== "IDLE") return;
    this.host.setState("REDACT_PICKING"), this.redactPicks = [];
    const t = this.host.ensureOverlayHost(), i = r("div", { style: "position:absolute;inset:0;" }), e = r(
      "div",
      { class: "qaid-redact-picker", style: "position:fixed;inset:0;pointer-events:none;" },
      i,
      // Control bar — the only pointer-interactive part of the overlay.
      r(
        "div",
        {
          style: "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);display:flex;gap:12px;align-items:center;pointer-events:auto;background:#0b1220;color:#fff;border:1px solid #ff6b6b;border-radius:9999px;padding:10px 16px;font:600 13px system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.5);"
        },
        r("span", {
          text: "Click sensitive areas to blur",
          attrs: { "data-qaid-redact-label": "" }
        }),
        r("button", {
          text: "Start recording",
          attrs: { type: "button" },
          style: "cursor:pointer;border:0;border-radius:9999px;padding:8px 14px;background:#ff6b6b;color:#0b1220;font:inherit;",
          on: { click: () => this.finishRedactionPicking(!0) }
        }),
        r("button", {
          text: "Cancel",
          attrs: { type: "button" },
          style: "cursor:pointer;border:0;background:transparent;color:#9fb3c8;font:inherit;",
          on: { click: () => this.finishRedactionPicking(!1) }
        })
      )
    );
    t.appendChild(e), this.redactPickerRoot = e;
    const o = () => {
      this.renderRedactPicks(i), this.redactRafId = requestAnimationFrame(o);
    };
    o(), document.addEventListener("click", this.boundRedactClick, !0), document.addEventListener("keydown", this.host.boundKeyDown), this.host.announceMsg("Click sensitive areas to blur, then start recording");
  }
  handleRedactPickClick(t) {
    const i = t.target instanceof Element ? t.target : null;
    if (!i || v(i) || this.redactPickerRoot?.contains(i)) return;
    t.preventDefault(), t.stopPropagation();
    const e = this.redactPicks.indexOf(i);
    e >= 0 ? this.redactPicks.splice(e, 1) : this.redactPicks.push(i);
    const o = this.redactPickerRoot?.querySelector("[data-qaid-redact-label]");
    if (o) {
      const s = this.redactPicks.length;
      o.textContent = s === 0 ? "Click sensitive areas to blur" : `${s} area${s === 1 ? "" : "s"} will be blurred`;
    }
  }
  renderRedactPicks(t) {
    t.textContent = "";
    for (const i of this.redactPicks) {
      const e = i.getBoundingClientRect();
      e.width <= 0 || e.height <= 0 || t.appendChild(
        r("div", {
          style: `position:fixed;left:${e.left}px;top:${e.top}px;width:${e.width}px;height:${e.height}px;border:2px solid #ff6b6b;border-radius:4px;background:rgba(255,107,107,.18);pointer-events:none;`
        })
      );
    }
  }
  finishRedactionPicking(t) {
    this.redactRafId && cancelAnimationFrame(this.redactRafId), this.redactRafId = 0, document.removeEventListener("click", this.boundRedactClick, !0), document.removeEventListener("keydown", this.host.boundKeyDown), this.redactPickerRoot && (this.redactPickerRoot.remove(), this.redactPickerRoot = null);
    const i = this.redactPicks;
    this.redactPicks = [], this.host.setState("IDLE"), t && this.startRecording(i);
  }
  showRecordingIndicator() {
    const t = this.host.ensureOverlayHost();
    this.recordingIndicator = r(
      "div",
      { class: "qaid-recording-indicator", style: `z-index:${this.host.config.zIndex + 100}` },
      r("div", { class: "qaid-recording-dot" }),
      r("span", {
        class: "qaid-recording-time",
        text: this.formatTime(this.host.config.videoOptions.maxDuration)
      }),
      r("button", {
        class: "qaid-recording-stop",
        text: "Stop",
        attrs: { type: "button" },
        on: { click: () => this.stopRecording() }
      })
    ), this.host.applyVars(this.recordingIndicator), t.appendChild(this.recordingIndicator);
  }
  updateRecordingTimer(t) {
    if (!this.recordingIndicator) return;
    const i = this.recordingIndicator.querySelector(".qaid-recording-time");
    if (i) {
      const e = Math.max(0, this.host.config.videoOptions.maxDuration - t);
      i.textContent = this.formatTime(e), e > 0 && e <= 5 && this.host.announceMsg(`${e} second${e === 1 ? "" : "s"} remaining`);
    }
  }
  formatTime(t) {
    const i = Math.floor(t / 60), e = t % 60;
    return `${i}:${e.toString().padStart(2, "0")}`;
  }
  removeRecordingIndicator() {
    this.recordingIndicator && (this.recordingIndicator.remove(), this.recordingIndicator = null);
  }
  showRecordingPreview() {
    const t = this.host.ensureOverlayHost(), i = URL.createObjectURL(this.recordedBlob), e = `qaid-video-title-${this.host.uid}`, o = r("h3", { text: "Review your recording", attrs: { id: e } }), s = r("video");
    s.src = i, s.controls = !0, s.autoplay = !0, s.muted = !0;
    const n = r("textarea", {
      attrs: {
        placeholder: "Optional: Describe the issue you recorded...",
        "aria-label": "Describe the issue you recorded"
      }
    }), c = r("button", {
      class: "qaid-video-btn qaid-video-btn-send",
      text: "Send",
      attrs: { type: "button" },
      on: { click: () => this.submitVideoFeedback(n.value.trim() || null, c) }
    }), a = r(
      "div",
      { class: "qaid-video-preview-box" },
      o,
      s,
      n,
      r(
        "div",
        { class: "qaid-video-preview-actions" },
        r("button", {
          class: "qaid-video-btn qaid-video-btn-cancel",
          text: "Cancel",
          attrs: { type: "button" },
          on: { click: () => this.cancelRecordingPreview() }
        }),
        r("button", {
          class: "qaid-video-btn qaid-video-btn-rerecord",
          text: "Re-record",
          attrs: { type: "button" },
          on: {
            click: () => {
              this.cancelRecordingPreview(), this.startRecording();
            }
          }
        }),
        c
      )
    );
    this.videoPreview = r(
      "div",
      { class: "qaid-video-preview", style: `z-index:${this.host.config.zIndex + 100}` },
      a
    ), this.host.applyVars(this.videoPreview), this.host.overlayShadowHost && (this.host.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.videoPreview), this.host.openDialogA11y(a, { labelledbyId: o.id }), document.addEventListener("keydown", this.host.boundKeyDown);
  }
  cancelRecordingPreview() {
    this.removeVideoPreview(), this.cleanupRecording();
  }
  removeVideoPreview() {
    if (this.host.closeDialogA11y(), this.videoPreview) {
      const t = this.videoPreview.querySelector("video");
      t?.src && URL.revokeObjectURL(t.src), this.videoPreview.remove(), this.videoPreview = null;
    }
    document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  async submitVideoFeedback(t, i) {
    if (!this.recordedBlob || this.isSendingVideo) return;
    this.isSendingVideo = !0, i.disabled = !0, i.textContent = "Sending...";
    const e = new FormData();
    e.append("video", this.recordedBlob, `recording.${this.recordedBlob.type.includes("mp4") ? "mp4" : "webm"}`), e.append("pageUrl", window.location.href), e.append("visitorId", this.host.visitorId), this.host.config.apiKey && e.append("apiKey", this.host.config.apiKey), t && e.append("message", t), this.host.consoleCapture && e.append("consoleErrors", JSON.stringify(this.host.consoleCapture.errors)), this.networkCapture && e.append("networkErrors", JSON.stringify(this.networkCapture.errors));
    let o = null, s = null;
    try {
      const n = await fetch(`${this.host.config.endpoint}/video`, {
        method: "POST",
        body: e
      });
      if (n.ok) {
        this.host.announceMsg("Recording sent");
        try {
          o = (await n.json())?.id ?? null;
        } catch {
        }
      } else
        console.error("Failed to submit video feedback:", await n.text()), s = n.status === 413 ? "This recording is too large to send. Try a shorter one." : "Your recording could not be sent.";
    } catch (n) {
      console.error("Failed to submit video feedback:", n), s = "Your recording could not be sent. Check your connection and try again.";
    }
    if (this.isSendingVideo = !1, s) {
      this.showSendError(s, i);
      return;
    }
    this.removeVideoPreview(), this.cleanupRecording(), await this.host.tryLaunchQuest("video", o);
  }
  /**
   * Keep the preview open and say the upload failed. Closing it, as a success
   * does, told the visitor their recording had arrived when it had not. Send
   * is re-enabled for another try; Cancel and Re-record still work.
   */
  showSendError(t, i) {
    this.host.announceMsg(`Failed to send recording. ${t}`, !0), i.disabled = !1, i.textContent = "Send";
    const e = this.videoPreview?.querySelector(".qaid-video-preview-actions");
    if (e) {
      let o = this.videoPreview.querySelector(".qaid-video-error");
      o || (o = r("p", { class: "qaid-video-error" }), e.before(o)), o.textContent = t;
    }
  }
  cleanupRecording() {
    this.isRecording = !1, this.removeRecordingIndicator(), this.videoRecorder && (this.videoRecorder.destroy(), this.videoRecorder = null), this.networkCapture && (this.networkCapture.restore(), this.networkCapture = null), this.recordedBlob && (this.recordedBlob = null), this.host.setButtonsDisabled(!1), this.host.overlayShadowHost && this.host.state === "IDLE" && (this.host.overlayShadowHost.style.pointerEvents = "none");
  }
}
export {
  m as RecordingController
};
//# sourceMappingURL=recording-CcfOfIC7.js.map
