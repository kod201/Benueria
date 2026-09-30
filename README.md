# Benueria website

A cinematic introduction to the breadth of Benueria's world: geography, peoples, traditions, craft, and mysteries. The page draws from the World Bible and deliberately keeps episode events, character outcomes, hidden explanations, and future revelations out of the visitor experience.

## Open locally

Open `index.html` in a browser, or serve this directory with any static web server. There is no install or build step. The artwork viewer is the only feature that needs JavaScript; navigation, images, and expandable lore also work without it.

## Publish on GitHub Pages

1. Create a repository for the website.
2. Place the **contents** of this folder (or the prepared ZIP) at the repository root, so `index.html` sits beside `assets/`. Include `.nojekyll`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose your branch (usually `main`), and select **/(root)**. Save.
5. GitHub will display the published site URL when deployment completes.

All asset links are relative, so both a `username.github.io` site and a `/repository-name/` project site work without configuration. No custom domain is assumed.

Publish this website folder, not the surrounding production workspace. The prepared ZIP contains only the intended public site and this guide.

Source: [GitHub's publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Edit

- `index.html`: all public copy, expandable region/culture/relic entries, gallery captions, and metadata.
- `assets/styles.css`: colors, typography, spacing, motion, and responsive layouts.
- `assets/site.js`: mobile menu and accessible artwork dialog.
- `assets/analytics.js`: Google Analytics tag and local-preview exclusion.
- `assets/images/`: local WebP artwork, with smaller variants for thumbnails and responsive images.
- `assets/atlas.svg`: simplified public map based on canonical coordinates. It omits story-event sites and routes.
- `assets/favicon.svg`: a simple three-river brand mark.

The full-size PNG originals and exact generation prompts are kept separately in `output/website-art/` in the production workspace; they are not required for hosting. The optional atlas regeneration helper in `tools/` is for the original workspace and requires its geography source. Hosting never runs Python.

## Content and art

Content authority: `Benueria_V4/STORY/BIBLE_Benueria.md`, especially the public-facing geography, cultures, faiths, language, and relic descriptions. No episode excerpt is included. Ancient phenomena are presented as observations and local beliefs, without giving away their explanations.

Three original concept images were produced with built-in image generation: the Confluence panorama, Ukaru courtyard, and Ózara carving. The existing Archive Concept B artwork is reused. These illustrations are website interpretations, not changes to approved production canon. The displayed carving retains a more visible spiral than the Bible describes; the copy preserves the canonical worn condition.

The public map uses an explicit allowlist from `data/GEO_v4_Benueria.geojson`. It includes broad geography and selected settlements, with no episode routes, outcome markers, or restricted story annotations. It is a simplified locator map, not a new canonical geography source.

## Lightweight by design

Plain HTML, CSS, and small JavaScript files. No framework, build pipeline, external fonts, third-party image requests, video background, or service worker. Google Analytics is the only external script and loads asynchronously on the public site. Images below the opening view load lazily. Motion respects the visitor's reduced-motion preference. Native disclosures and the modal support keyboard navigation.

## Google Analytics

The site is configured for measurement ID **G-30EMHJ8E3Z**. The ID is public and contains no account credentials. The pasted tag has been normalized to real JavaScript and its actual Google URL, removing chat formatting escapes.

Publish the updated files to activate collection. Local files, localhost, loopback addresses, and private IPv4 previews do not load the Google tag or send data. No extra hosting configuration is needed. An ad blocker can prevent collection without affecting the site.

- GA4 collects standard page-view and engagement data. Enhanced measurement follows the settings in your GA4 web stream.
- `lore_open` records a visitor opening a region, culture, or relic panel, with `content_type` and `content_name` parameters. Panels already open at page load are excluded.
- `artwork_open` records successfully opening an image or the atlas in the viewer, with its `content_name`.
- Google signals and ad-personalization signals are disabled. Custom events contain public content labels, not visitor-entered information. Standard GA4 still uses analytics cookies; these settings are not a consent-management solution.

After publishing, open the public site and look in **Google Analytics → Reports → Realtime**. Open a lore panel or artwork to check its event. The localhost preview intentionally will not appear. The code is verified locally; receipt in your Analytics property can only be confirmed after the public site is visited.

For content breakdowns in reports, register **event-scoped custom dimensions** for `content_name` and `content_type` in **Admin → Custom definitions**. See [Google's event guide](https://developers.google.com/analytics/devguides/collection/ga4/events) and [event-parameter reporting instructions](https://developers.google.com/analytics/devguides/collection/ga4/event-parameters).
