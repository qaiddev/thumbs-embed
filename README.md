# @qaiddev/thumbs-embed

[![npm version](https://img.shields.io/npm/v/@qaiddev/thumbs-embed)](https://www.npmjs.com/package/@qaiddev/thumbs-embed)
[![coverage](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fqaiddev%2Fthumbs-embed%2Fprod%2Fcoverage-badge.json)](https://github.com/qaiddev/thumbs-embed)

A zero-dependency, lightweight feedback embed that adds thumbs up/down buttons to any website. Users can optionally target specific page elements, leave messages, and capture screenshots — all submitted to your API endpoint or the [QAid.dev hosted dashboard](https://qaid.dev).

## Install

### npm

```bash
npm install @qaiddev/thumbs-embed
```

```typescript
import { QaidFeedback } from '@qaiddev/thumbs-embed';

const feedback = new QaidFeedback({
  endpoint: 'https://qaid.dev/api/feedback',
  apiKey: 'YOUR_API_KEY',
});
```

### CDN / Script Tag

```html
<script
  src="https://unpkg.com/@qaiddev/thumbs-embed/dist/embed.js"
  data-endpoint="https://qaid.dev/api/feedback"
  data-api-key="YOUR_API_KEY"
></script>
```

`embed.js` is a tiny classic loader that works in every browser: it feature-detects
ES-module support and pulls in the right build automatically — the **progressive
loader** (`loader.js`, a small core with screenshot/video/annotation/targeting loading
on demand) on modern browsers, or the all-in-one UMD bundle (`qaid.umd.cjs`) on older
ones. The injected build auto-initializes when it detects a `data-endpoint` attribute.

> Prefer to skip the loader's feature-detect hop? Point straight at
> `dist/loader.js` with `type="module"` (modern browsers only), or
> `dist/qaid.umd.cjs` as a classic script (works everywhere, no code-splitting).

### JSON Config (Script Tag)

For complex configurations, use a separate JSON config element:

```html
<script type="application/json" data-feedback-config>
{
  "endpoint": "https://qaid.dev/api/feedback",
  "apiKey": "YOUR_API_KEY",
  "position": "bottom-left",
  "colors": {
    "positive": "#22c55e",
    "negative": "#ef4444",
    "marker": "#8b5cf6"
  },
  "text": {
    "modalTitle": "How are we doing?",
    "placeholder": "Tell us what you think..."
  }
}
</script>
<script src="https://unpkg.com/@qaiddev/thumbs-embed/dist/embed.js"></script>
```

## How It Works

1. Thumbs up/down buttons appear on your page
2. User clicks a thumb button
3. A targeting overlay activates — the user clicks on any page element to attach their feedback to it
4. Optional permission to save a screenshot of the current tab.
4. A modal appears where the user can optionally leave a more detailed message
5. Feedback is submitted to your endpoint as a JSON POST.

If `skipTargeting` is `true`, step 3 is skipped and the modal opens immediately.

If `captureScreenshot` is `false`, we skip step 4. 

## Configuration

All are optional except `endpoint`.  

We offer a Free Plan for a compatible endpoint and a dashboard to manage your site's feedback.

### Core Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `endpoint` | `string` | **(required)** | API endpoint URL for submitting feedback data |
| `apiKey` | `string` | `""` | API key for authenticating with the feedback service |
| `skipTargeting` | `boolean` | `false` | Skip element targeting and go directly to the feedback modal |

### Positioning

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `position` | `string` | `"bottom-right"` | Button position: `"bottom-right"`, `"bottom-left"`, `"top-right"`, `"top-left"` |
| `offset` | `{ x?: number, y?: number }` | `{ x: 16, y: 16 }` | Distance from viewport edge in pixels |
| `container` | `string` | `""` | CSS selector for a custom container element. When set, `position`, `offset`, and `zIndex` are ignored |
| `zIndex` | `number` | `50` | z-index for the embed elements |

### Appearance

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `buttonSize` | `string` | `"medium"` | Button size: `"small"` (36px), `"medium"` (48px), `"large"` (64px) |
| `buttonClass` | `string` | `""` | Custom CSS class for buttons. When set, default button styles are not applied |
| `incognito` | `boolean` | `false` | Buttons are invisible until hovered |
| `modalWidth` | `number` | `400` | Width of the feedback modal in pixels |
| `backdropOpacity` | `number` | `0.3` | Opacity of the dark backdrop behind the modal (0-1) |
| `fontFamily` | `string` | `"system-ui, -apple-system, sans-serif"` | Font family for all text |
| `fontSize` | `number` | `16` | Base font size in pixels. Every text size in the modal, success screen, tooltip, recording and annotation screens is a multiple of it |

### Colors

Pass a `colors` object to customize the color scheme:

```typescript
new QaidFeedback({
  endpoint: '/api/feedback',
  colors: {
    positive: 'rgb(0, 200, 83)',  // Thumbs up color (default: green)
    negative: 'rgb(255, 0, 0)',   // Thumbs down color (default: red)
    marker: '#6365f1',            // Selected element outline & submit button (default: indigo)
  },
});
```

Colors accept hex (`#ABC`, `#AABBCC`) or `rgb(r, g, b)` format.

### Custom Icons

Replace the default thumb icons with SVG strings or emoji:

```typescript
new QaidFeedback({
  endpoint: '/api/feedback',
  positiveIcon: '<svg viewBox="0 0 24 24">...</svg>',
  negativeIcon: '<svg viewBox="0 0 24 24">...</svg>',
});
```

### Text Customization

The message box's strings can be overridden via the `text` object:

```typescript
new QaidFeedback({
  endpoint: '/api/feedback',
  text: {
    tooltip: 'Any feedback? Click to start, Esc to cancel',
    modalTitle: 'Thank you for your feedback!',
    modalSubtitle: 'Would you like to add a message to help us understand your feedback better?',
    placeholder: 'Optional: Tell us more about your experience...',
    submitButton: 'Submit',
    skipButton: 'Skip',
    confirmationTitle: 'Thank you!',
    confirmationMessage: 'Your feedback has been received.',
    confirmationClose: 'Close',
    // Shown instead of the success screen when the server refuses the message
    // (any non-2xx reply) or cannot be reached.
    errorTitle: 'Message not sent',
    errorMessage: 'Something went wrong, so we did not get your message. Please try again later.',
  },
});
```

Strings are inserted as plain text, so `<`, `&` and quotes show exactly as written. Only the icon options (`positiveIcon`, `negativeIcon`, `feedbackIcon`, `recordIcon`) take markup.

### Screenshots

Enable automatic screenshot capture with feedback submissions:

```typescript
new QaidFeedback({
  endpoint: '/api/feedback',
  captureScreenshot: true,
  screenshotOptions: {
    quality: 0.8,      // WebP compression quality (0-1, default 0.8)
    maxWidth: 1280,    // Max screenshot width in pixels
    maxHeight: 800,    // Max screenshot height in pixels
  },
});
```

Screenshots use the browser's Screen Capture API. The user will see a permission dialog. If they decline or the API is unavailable, the feedback is still submitted without a screenshot.

### Linking buttons to quests

Instead of the optional message box, a button can open a **quest** — a short questionnaire powered by [`@qaiddev/quests-embed`](https://www.npmjs.com/package/@qaiddev/quests-embed). You can ask one set of questions after a thumbs-up, a different set after a thumbs-down, and another after a video recording is sent. The quest widget is loaded on demand from a CDN the first time it's needed, so the thumbs bundle stays zero-dependency; if it can't load, the classic message box is shown instead.

```typescript
new QaidFeedback({
  endpoint: 'https://qaid.dev/api/feedback',
  apiKey: 'YOUR_API_KEY',
  captureVideo: true,
  quests: {
    // Base URL of the quest service. Required to enable the feature.
    base: 'https://qaid.dev/api/quests',
    up: 'QUEST_ID_FOR_THUMBS_UP',     // optional, per button
    down: 'QUEST_ID_FOR_THUMBS_DOWN',
    video: 'QUEST_ID_AFTER_VIDEO',
    // apiKey defaults to the top-level apiKey; override only if different.
    // moduleUrl overrides where the quests widget is loaded from.
  },
});
```

`base` is the only required field — omit a button's id to keep the normal message box for that button. The embed derives the quest definition URL (`{base}/{questId}/definition`) and the response endpoint (`{base}/responses`) from it, and passes the created feedback record's id to the quest so its answers are joined back to that feedback on the server.

## Script Tag Data Attributes

Every config option has a `data-*` attribute, so the script tag alone can set anything. If a JSON config block is also on the page, the block wins and the attributes are not read.

Boolean attributes turn on with `"true"`; any other value leaves the default. `data-annotate` is the exception: it is on by default, so only `"false"` changes it. Numbers are plain digits (`data-zindex="9001"`, `data-backdrop-opacity="0.5"`).

| Attribute | Maps To |
|-----------|---------|
| `data-endpoint` | `endpoint` (required) |
| `data-api-key` | `apiKey` |
| `data-container` | `container` |
| `data-button-class` | `buttonClass` |
| `data-direction` | `direction` |
| `data-position` | `position` |
| `data-offset-x` | `offset.x` |
| `data-offset-y` | `offset.y` |
| `data-zindex` | `zIndex` |
| `data-skip-targeting` | `skipTargeting` |
| `data-single-button` | `singleButton` |
| `data-feedback-mode` | `feedbackMode` |
| `data-positive-color` | `colors.positive` |
| `data-negative-color` | `colors.negative` |
| `data-marker-color` | `colors.marker` |
| `data-button-size` | `buttonSize` |
| `data-tooltip` | `text.tooltip` |
| `data-modal-title` | `text.modalTitle` |
| `data-modal-subtitle` | `text.modalSubtitle` |
| `data-placeholder` | `text.placeholder` |
| `data-submit-button` | `text.submitButton` |
| `data-skip-button` | `text.skipButton` |
| `data-positive-label` | `text.positiveLabel` |
| `data-negative-label` | `text.negativeLabel` |
| `data-record-label` | `text.recordLabel` |
| `data-dismiss-label` | `text.dismissLabel` |
| `data-feedback-label` | `text.feedbackLabel` |
| `data-confirmation-title` | `text.confirmationTitle` |
| `data-confirmation-message` | `text.confirmationMessage` |
| `data-confirmation-close` | `text.confirmationClose` |
| `data-error-title` | `text.errorTitle` |
| `data-error-message` | `text.errorMessage` |
| `data-hide-confirmation` | `hideConfirmation` |
| `data-modal-width` | `modalWidth` |
| `data-backdrop-opacity` | `backdropOpacity` |
| `data-font-family` | `fontFamily` |
| `data-font-size` | `fontSize` |
| `data-capture-screenshot` | `captureScreenshot` |
| `data-annotate` | `annotate` (`"false"` to turn off) |
| `data-annotation-color` | `annotationColor` |
| `data-annotation-palette` | `annotationPalette`: a JSON array (`'["#f00","#0f0"]'`) or a comma list (`"#f00, rgb(0, 128, 0), #00f"`) |
| `data-capture-video` | `captureVideo` |
| `data-video-max-duration` | `videoOptions.maxDuration` |
| `data-video-redaction` | `videoOptions.redaction` |
| `data-record-icon` | `recordIcon` |
| `data-incognito` | `incognito` |
| `data-hide-dismiss` | `hideDismiss` |
| `data-positive-icon` | `positiveIcon` |
| `data-negative-icon` | `negativeIcon` |
| `data-feedback-icon` | `feedbackIcon` |
| `data-hide-thumbs` | `hideThumbs` |
| `data-css` | `css` (wins over `data-css-selector`) |
| `data-css-selector` | `css`, taken from the `textContent` of the element this selector matches |
| `data-screenshot-method` | `screenshotMethod` |
| `data-screenshot-quality` | `screenshotOptions.quality` |
| `data-screenshot-max-width` | `screenshotOptions.maxWidth` |
| `data-screenshot-max-height` | `screenshotOptions.maxHeight` |
| `data-quest-base` | `quests.base` |
| `data-quest-up` | `quests.up` |
| `data-quest-down` | `quests.down` |
| `data-quest-video` | `quests.video` |
| `data-quest-api-key` | `quests.apiKey` |
| `data-quest-module-url` | `quests.moduleUrl` |

A value the embed can't use is ignored with one `console.warn` naming the attribute, and the default stays. That covers a malformed `data-annotation-palette` and an empty screen-reader label (`data-positive-label=""` would leave the button with no accessible name).

## Custom Button Container

By default, the embed creates a fixed-position container in the viewport corner. To place the buttons inside your own element:

```html
<div id="my-feedback-spot"></div>

<script type="module">
import { QaidFeedback } from 'https://unpkg.com/@qaiddev/thumbs-embed/dist/loader.js';

new QaidFeedback({
  endpoint: '/api/feedback',
  container: '#my-feedback-spot',
});
</script>
```

When `container` is set, the `position`, `offset`, and `zIndex` options are ignored. You control the layout.

## Custom Button Styling

Use `buttonClass` to apply your own CSS instead of the default button styles:

```typescript
new QaidFeedback({
  endpoint: '/api/feedback',
  buttonClass: 'my-feedback-btn',
});
```

When `buttonClass` is provided, default button colors, sizing, and shadows are not applied. Structural styles (display, alignment, cursor) are still applied via `.qaid-btn-structural`. Your class controls everything visual.

```css
.my-feedback-btn {
  width: 40px;
  height: 40px;
  background: #1a1a2e;
  border: 2px solid #e94560;
  border-radius: 8px;
}

.my-feedback-btn:hover {
  background: #e94560;
}
```

## API

### Constructor

```typescript
const feedback = new QaidFeedback(config: FeedbackConfig);
```

### Methods

| Method | Description |
|--------|-------------|
| `destroy()` | Remove all DOM elements, event listeners, and injected styles. Safe to call multiple times. |

### Payload

The embed submits feedback in two steps:

**1. Initial submission** — `POST` to your endpoint:

```json
{
  "feedbackType": "up",
  "pageUrl": "https://example.com/page",
  "apiKey": "YOUR_API_KEY",
  "elementSelector": "body > main:nth-child(2) > button:nth-child(3)",
  "elementText": "Submit Order",
  "consoleErrors": [
    { "message": "TypeError: Cannot read properties of undefined", "timestamp": 1704067200000, "level": "error" }
  ],
  "screenWidth": 1920,
  "screenHeight": 1080,
  "clickX": 450,
  "clickY": 320,
  "scrollX": 0,
  "scrollY": 150,
  "screenshot": "data:image/webp;base64,...",
  "visitorId": "a1b2c3d4-...",
  "elementBounds": { "x": 400, "y": 300, "width": 120, "height": 40 },
  "userAgent": "Mozilla/5.0 ..."
}
```

Your endpoint should return `{ "id": 123 }`.

**2. Message update** — `PATCH` to `{endpoint}/{id}`:

```json
{
  "message": "The submit button doesn't work on mobile"
}
```

## Console Capture

The embed automatically captures up to 20 recent `console.error`, `console.warn`, and `console.log` calls during the user's session. These are included in the feedback payload as `consoleErrors`, giving you context about what went wrong before the user submitted feedback.

Console methods are restored to their originals when `destroy()` is called.

## Element Targeting

When the user clicks on an element during targeting mode, the embed generates a stable CSS selector using this priority:

1. **Data attributes** — `data-comp`, `data-qa`, `data-testid`, `data-id` (checked on the element and its ancestors)
2. **Element ID** — e.g. `#submit-button`
3. **nth-child path** — e.g. `body > main:nth-child(2) > button:nth-child(3)` (always unique, always valid)

The first 100 characters of the element's text content are also captured.

## Responsive Behavior

- **Desktop**: The feedback modal is positioned near the selected element with an arrow pointing at the click location
- **Mobile** (viewport < 640px): The modal displays as a bottom sheet, sliding up from the bottom of the screen with safe-area inset support

## CSS Custom Properties

The embed injects CSS custom properties you can use or override:

```css
:root {
  --qaid-positive: rgb(0, 200, 83);
  --qaid-negative: rgb(255, 0, 0);
  --qaid-marker: #6365f1;
  --qaid-btn-size: 48px;
  --qaid-icon-size: 24px;
  --qaid-modal-width: 400px;
  --qaid-backdrop-opacity: 0.3;
  --qaid-font-family: system-ui, -apple-system, sans-serif;
  --qaid-font-size: 16px;
}
```

The embed also supports dark mode automatically via the `light-dark()` CSS function.

## Hosted Dashboard

[Qaid](https://qaid.dev) provides a hosted dashboard for managing feedback collected by this embed:

- **Feedback inbox** with archiving and admin notes
- **Project management** with multiple API keys
- **Team collaboration** with owners, members, and invitations
- **Browser context** — console errors, viewport info, user agent captured with each submission
- **Screenshot viewing** for visual bug reports
- **Analytics** and data retention

### Plans

| | Cadet (Free) | Commander ($9/mo) | Admiral (Enterprise) |
|---|---|---|---|
| Projects | 1 | Unlimited | Unlimited |
| Messages | 100/mo | Unlimited | Unlimited |
| Data retention | 7 days | 1 year | Unlimited |
| Screenshots | - | Yes | Yes |
| Notifications | - | Email/Text | Email/Text |
| Integrations | - | GitHub + more | Custom |

Sign up at [qaid.dev](https://qaid.dev). You can also self-host — the embed works with any endpoint that accepts the payload format described above.

## Self-Hosting

The embed is endpoint-agnostic. Point it at your own server:

```typescript
new QaidFeedback({
  endpoint: 'https://your-server.com/api/feedback',
});
```

Your server needs to handle:

1. `POST /api/feedback` — Accept the feedback payload, return `{ "id": number }`
2. `PATCH /api/feedback/:id` — Accept `{ "message": string | null }` or `{ "feedbackType": "up" | "down" }`

Answer the message `PATCH` with a 2xx status. Any other status shows the visitor the "Message not sent" screen instead of the success screen. Likewise, a non-2xx reply to the video upload (`POST {endpoint}/video`) keeps the recording preview open with an error.

## Project Badges

<a href="https://www.npmjs.com/package/@qaiddev/thumbs-embed">
<img alt="npm version" src="https://img.shields.io/npm/v/@qaiddev/thumbs-embed" />
</a> 

<a href="https://github.com/qaiddev/thumbs-embed/blob/prod/LICENSE">
  <img alt="license" src="https://img.shields.io/npm/l/@qaiddev/thumbs-embed"/>
</a>
