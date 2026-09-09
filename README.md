# Portfolio

Static site, no build step. Deploy directly with GitHub Pages (Settings → Pages → serve from the root of this branch).

## Structure

- `index.html` — home
- `about.html` — bio, experience, resume link
- `work/ask360.html`, `work/lineleap.html` — case studies
- `work/prototypes/ask360-portal.html` — interactive prototype of the Ask360 support portal (exported from a design tool; references an `Icons/` folder and `design-tokens.css` that weren't included, so some icons currently show broken — drop the real asset export alongside this file to fix)
- `css/style.css` — shared styles
- `assets/resume/` — resume PDF served for download
- `assets/images/` — empty, for case study screenshots

## To finish

Both case studies have inline placeholders (dashed boxes, marked "Add screenshot" / "Add detail") where a specific artifact or example would strengthen the story — search each `work/*.html` file for `media-placeholder` to find them.
