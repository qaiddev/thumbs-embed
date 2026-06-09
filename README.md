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
import { QaidEmbed } from '@qaiddev/thumbs-embed';

const feedback = new QaidEmbed({
  endpoint: 'https://qaid.dev/api/feedback',
  apiKey: 'YOUR_API_KEY',
});
```

### CDN / Script Tag

```html
<script
  src="https://unpkg.com/@qaiddev/thumbs-embed/dist/qaid.umd.cjs"
  data-endpoint="https://qaid.dev/api/feedback"
  data-api-key="YOUR_API_KEY"
></script>
```

The embed auto-initializes when it detects a `data-endpoint` attribute on its script tag.

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
<script src="https://unpkg.com/@qaiddev/thumbs-embed/dist/qaid.umd.cjs"></script>
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
| `fontSize` | `number` | `16` | Base font size in pixels |

### Colors

Pass a `colors` object to customize the color scheme:

```typescript
new QaidEmbed({
  endpoint: '/api/feedback',
  colors: {
    positive: 'rgb(0, 200, 83)',  // Thumbs up color (default: green)
    negative: 'rgb(255, 0, 0)',   // Thumbs down color (default: red)
    marker: '#6366f1',            // Selected element outline & submit button (default: indigo)
  },
});
```

Colors accept hex (`#ABC`, `#AABBCC`) or `rgb(r, g, b)` format.

### Custom Icons

Replace the default thumb icons with SVG strings or emoji:

```typescript
new QaidEmbed({
  endpoint: '/api/feedback',
  positiveIcon: '<svg viewBox="0 0 24 24">...</svg>',
  negativeIcon: '<svg viewBox="0 0 24 24">...</svg>',
});
```

### Text Customization

Every user-facing string can be overridden via the `text` object:

```typescript
new QaidEmbed({
  endpoint: '/api/feedback',
  text: {
    tooltip: 'Any feedback? Click to start, Esc to cancel',
    bannerText: 'Click on any element to target it with your feedback',
    bannerHint: '(Press Escape to cancel)',
    modalTitle: 'Thank you for your feedback!',
    modalSubtitle: 'Would you like to add a message to help us understand your feedback better?',
    placeholder: 'Optional: Tell us more about your experience...',
    submitButton: 'Submit',
    skipButton: 'Skip',
  },
});
```

### Screenshots

Enable automatic screenshot capture with feedback submissions:

```typescript
new QaidEmbed({
  endpoint: '/api/feedback',
  captureScreenshot: true,
  screenshotOptions: {
    quality: 0.8,      // WebP compression quality (0-1)
    maxWidth: 1280,    // Max screenshot width in pixels
    maxHeight: 800,    // Max screenshot height in pixels
  },
});
```

Screenshots use the browser's Screen Capture API. The user will see a permission dialog. If they decline or the API is unavailable, the feedback is still submitted without a screenshot.

## Script Tag Data Attributes

When using the script tag method, all config options are available as `data-*` attributes:

| Attribute | Maps To |
|-----------|---------|
| `data-endpoint` | `endpoint` |
| `data-api-key` | `apiKey` |
| `data-position` | `position` |
| `data-zindex` | `zIndex` |
| `data-button-size` | `buttonSize` |
| `data-button-class` | `buttonClass` |
| `data-modal-width` | `modalWidth` |
| `data-backdrop-opacity` | `backdropOpacity` |
| `data-offset-x` | `offset.x` |
| `data-offset-y` | `offset.y` |
| `data-positive-color` | `colors.positive` |
| `data-negative-color` | `colors.negative` |
| `data-marker-color` | `colors.marker` |
| `data-container` | `container` |
| `data-skip-targeting` | `skipTargeting` |
| `data-incognito` | `incognito` |
| `data-font-family` | `fontFamily` |
| `data-font-size` | `fontSize` |
| `data-tooltip` | `text.tooltip` |
| `data-banner-text` | `text.bannerText` |
| `data-banner-hint` | `text.bannerHint` |
| `data-modal-title` | `text.modalTitle` |
| `data-modal-subtitle` | `text.modalSubtitle` |
| `data-placeholder` | `text.placeholder` |
| `data-submit-button` | `text.submitButton` |
| `data-skip-button` | `text.skipButton` |
| `data-positive-icon` | `positiveIcon` |
| `data-negative-icon` | `negativeIcon` |

## Custom Button Container

By default, the embed creates a fixed-position container in the viewport corner. To place the buttons inside your own element:

```html
<div id="my-feedback-spot"></div>

<script>
new QaidEmbed({
  endpoint: '/api/feedback',
  container: '#my-feedback-spot',
});
</script>
```

When `container` is set, the `position`, `offset`, and `zIndex` options are ignored. You control the layout.

## Custom Button Styling

Use `buttonClass` to apply your own CSS instead of the default button styles:

```typescript
new QaidEmbed({
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
const feedback = new QaidEmbed(config: FeedbackConfig);
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
  --qaid-marker: #6366f1;
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
new QaidEmbed({
  endpoint: 'https://your-server.com/api/feedback',
});
```

Your server needs to handle:

1. `POST /api/feedback` — Accept the feedback payload, return `{ "id": number }`
2. `PATCH /api/feedback/:id` — Accept `{ "message": string | null }` or `{ "feedbackType": "up" | "down" }`

## Project Badges

<a href="https://www.npmjs.com/package/@qaiddev/thumbs-embed">
<img alt="npm version" src="https://img.shields.io/npm/v/@qaiddev/thumbs-embed" />
</a> 

<a href="https://github.com/qaiddev/thumbs-embed/blob/prod/LICENSE">
  <img alt="license" src="https://img.shields.io/npm/l/@qaiddev/thumbs-embed"/>
</a>
