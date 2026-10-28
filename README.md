# Portfolio

Static site, no build step. Deploy directly with GitHub Pages (Settings → Pages → serve from the root of this branch).

## Structure

- `index.html`: home
- `about.html`: bio, experience, resume link
- `work/ask360.html`, `work/projects.html`, `work/lineleap.html`: case studies
- `work/prototypes/rack.html`: Rack, a self-contained equipment-aware workout prototype
- `work/prototypes/ask360-portal.html`: interactive prototype of the Ask 360 support portal (exported from a design tool; references an `Icons/` folder and `design-tokens.css` that weren't included, so some icons currently show broken. Drop the real asset export alongside this file to fix.)
- `css/style.css`: shared styles
- `assets/resume/`: resume PDF served for download
- `assets/images/`: case study screenshots

## To finish

No placeholders remain anywhere on the site. Both case studies open with a
`cs-tldr` skim block (the brief / what I did / where it stands) and are written
to be scanned: bold lead-ins, short blocks, bullets over prose. Keep that.

Still wanted: the competitive analysis of event and ticketing apps. Ask 360 would
take two or three design iterations side by side, and an affinity or journey map
from the interview round. `work/projects.html` has no screenshots at all yet, so
its home page card uses the `.is-text` single-column format; drop the two-column
format back in once there is a visual.

The two Ask 360 screenshots were widened by 77px on the right before export.
The portal has a left sidebar, so the content column's centre is not the
window's centre, and the ask-anything field read as off-centre in the frame.
Cropping the left to fix it clipped the Client360 logo, so the right edge
(flat per band: orange bar, white nav, grey body) was replicated instead. Rebuild
with the same offset if the source screenshot is ever replaced.

Figure conventions: `.cs-artifact` is a padded white card for flat exports,
`.cs-slide` is a bordered clip for deck slides that carry their own background,
`.cs-phones` is a wrapping row of phone screenshots (min 150px so they never
shrink to illegible), `.browser-frame` is for desktop product screenshots.

Assets are cache-busted with `?v=N`: `css/style.css`, `js/reveal.js` and every
image under `assets/images/`. Bump N across all HTML files whenever any of them
changes, images included. A replaced image at an unchanged URL is served from
cache indefinitely, so a re-crop that keeps its filename will not reach anyone
who has already loaded the page.
