

## Add Google Analytics (GA4) to WINSO website

### What changes
Add the Google Analytics tracking snippet with Measurement ID `G-LLEXC8BBBP` to `index.html`.

### Technical detail
- Insert the `gtag.js` async script and configuration block into the `<head>` of `index.html`, right after the existing meta tags
- Measurement ID: `G-LLEXC8BBBP` (this is a public/publishable key, safe to include in code)

### File changed
- **`index.html`** — add 2 script tags in `<head>`

