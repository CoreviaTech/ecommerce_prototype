# HEDY ATELIER storefront prototype

A dependency-free responsive ecommerce prototype for a ceramics and gifting brand. The client-selected Quiet Ritual direction now defines the connected Vietnamese storefront journey.

## Preview

Open the selected storefront pages directly in a browser:

- `index.html` — Quiet Ritual home
- `shop.html` — Direction 01 category and ritual-led shop index
- `collection.html` — Direction 01 collection listing with filters and sorting
- `product.html` — Direction 01 product detail, variants, gifting, and cart actions
- `custom.html` — honest Phase 2 continuity shell for the primary Custom/Corporate route; Phase 3 supplies the complete service journey
- `contact.html` — canonical Contact route and deterministic channel/configuration states
- `policies.html` — pending-approval policy shell with stable delivery, payment, returns, privacy, and terms anchors

Directions 02–06 are preserved for reference at `archive/visual-directions/index.html`. They are not part of the active storefront design.

The custom-first expansion is being delivered through [`storefrontImplementationPlan.md`](storefrontImplementationPlan.md). Phases 0–2 are complete: sitemap/scope, fixture/content architecture, and the shared storefront foundation now have durable review evidence.

Phase 2 evidence and review notes are available at [`review/phase-2/README.md`](review/phase-2/README.md). Every active page now loads [`mock-data.js`](mock-data.js) before the shared controller. The controller renders the custom-first header/footer, accessible mobile menu, Search, Contact chooser, exact line-item bag, persistent feedback, and pending-but-complete Contact/policy destinations.

Or serve the folder with any static server.

For example:

```powershell
npx serve .
```

The selected storefront includes responsive desktop/mobile layouts, category storytelling, collection filtering and sorting, product gallery and variant selection, a schema-v2 fixture-line bag, gift-note entry, full-screen mobile navigation/Search/Contact patterns, focus containment, Escape and focus return, add-to-bag inline/toast feedback, pending Contact states, and newsletter confirmation.

Validate the fixture/foundation contracts and every JavaScript file with:

```powershell
node review/phase-1/validate-fixtures.js
node review/phase-2/validate-foundation.js
Get-ChildItem -Recurse -Filter "*.js" | ForEach-Object { node --check $_.FullName }
```

The optional browser evidence harness uses the installed Chrome executable, starts a loopback-only static server, tests real 360/390/768/1440 viewports and interaction contracts, writes six screenshots, and removes its temporary browser profile:

```powershell
node review/phase-2/browser-qa.js
```

All product names, prices, stock quantities, SKUs, dimensions, materials/care claims, packaging/gift behavior, delivery/policy wording, order/payment states, custom cases, and contact destinations in the prototype are illustrative or pending merchant approval. Supplied photography has no recorded production usage rights; several images visibly contain third-party identities and cannot substantiate HEDY products or completed custom work.
