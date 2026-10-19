# Portfolio

Static site, no build step. Deploy directly with GitHub Pages (Settings → Pages → serve from the root of this branch).

## Structure

- `index.html`: home
- `about.html`: bio, experience, resume link
- `work/ask360.html`, `work/lineleap.html`: case studies
- `work/prototypes/rack.html`: Rack, a self-contained equipment-aware workout prototype
- `work/prototypes/ask360-portal.html`: interactive prototype of the Ask 360 support portal (exported from a design tool; references an `Icons/` folder and `design-tokens.css` that weren't included, so some icons currently show broken. Drop the real asset export alongside this file to fix.)
- `css/style.css`: shared styles
- `assets/resume/`: resume PDF served for download
- `assets/images/`: case study screenshots

## To finish

No placeholders remain anywhere on the site. Both case studies open with a
`cs-tldr` skim block (the brief / what I did / where it stands) and are written
to be scanned: bold lead-ins, short blocks, bullets over prose. Keep that.

Still wanted: screenshots of the LineLeap post flow and the competitive analysis
of event and ticketing apps (sent as chat images, never as files). Ask 360 would
take two or three design iterations side by side, and an affinity or journey map
from the interview round.

Figure conventions: `.cs-artifact` is a padded white card for flat exports,
`.cs-slide` is a bordered clip for deck slides that carry their own background,
`.browser-frame` is for product screenshots.

Asset versions are cache-busted with `?v=N` on `css/style.css` and `js/reveal.js`.
Bump N in every HTML file whenever either one changes, or returning visitors keep
the old copy.
