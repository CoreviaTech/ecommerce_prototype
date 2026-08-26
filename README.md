# HEDY ATELIER storefront prototype

A dependency-free responsive ecommerce prototype for a ceramics and gifting brand. The client-selected Quiet Ritual direction now defines the connected Vietnamese storefront journey.

## Preview

Open the selected storefront pages directly in a browser:

- `index.html` — Quiet Ritual home
- `shop.html` — Direction 01 category and ritual-led shop index
- `collection.html` — Direction 01 collection listing with filters and sorting
- `product.html` — Direction 01 product detail, variants, gifting, and cart actions

Directions 02–06 are preserved for reference at `archive/visual-directions/index.html`. They are not part of the active storefront design.

The custom-first expansion is being delivered through [`storefrontImplementationPlan.md`](storefrontImplementationPlan.md). Phase 0 (sitemap and working scope) and Phase 1 (fixtures, content, assets, states, and deterministic review URLs) are complete. The active four-page visual baseline remains unchanged until its owning implementation phases.

Phase 1 evidence and review notes are available at [`review/phase-1/README.md`](review/phase-1/README.md). [`mock-data.js`](mock-data.js) is the future synchronous fixture source; active pages do not load it yet.

Or serve the folder with any static server.

For example:

```powershell
npx serve .
```

The selected storefront includes responsive desktop/mobile layouts, category storytelling, collection filtering and sorting, product gallery and variant selection, a persistent prototype bag, gift-note entry, mobile navigation, search, Escape handling, add-to-bag feedback, and newsletter confirmation.

Validate the Phase 1 fixture contract and every JavaScript file with:

```powershell
node review/phase-1/validate-fixtures.js
Get-ChildItem -Recurse -Filter "*.js" | ForEach-Object { node --check $_.FullName }
```

All product names, prices, stock quantities, SKUs, dimensions, materials/care claims, packaging/gift behavior, delivery/policy wording, order/payment states, custom cases, and contact destinations in the prototype are illustrative or pending merchant approval. Supplied photography has no recorded production usage rights; several images visibly contain third-party identities and cannot substantiate HEDY products or completed custom work.
