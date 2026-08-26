# HEDY ATELIER storefront prototype

A dependency-free responsive ecommerce prototype for a ceramics and gifting brand. The client-selected Quiet Ritual direction now defines the connected Vietnamese storefront journey.

## Preview

Open the selected storefront pages directly in a browser:

- `index.html` — custom-first Quiet Ritual home with honest proof, service contexts, consultation branches, and secondary retail
- `shop.html` — Direction 01 category and ritual-led shop index
- `collection.html` — Direction 01 collection listing with filters and sorting
- `product.html` — Direction 01 product detail, variants, gifting, and cart actions
- `custom.html` — complete Custom/Corporate service journey with selected context, limited cases, process, preparation, commercial fallback, FAQ, and consultation branches
- `contact.html` — canonical Contact route and deterministic channel/configuration states
- `policies.html` — pending-approval policy shell with stable delivery, payment, returns, privacy, and terms anchors

Directions 02–06 are preserved for reference at `archive/visual-directions/index.html`. They are not part of the active storefront design.

The custom-first expansion is being delivered through [`storefrontImplementationPlan.md`](storefrontImplementationPlan.md). Phases 0–2 are complete. Phase 3 implementation and automated validation pass and the phase is **Ready for approval**; Gate 3 still requires the named unassisted reviewer approval.

Phase 3 evidence, state URLs, gate checklist, and screenshots are available at [`review/phase-3/README.md`](review/phase-3/README.md). Every active page loads [`mock-data.js`](mock-data.js) before the shared controller. The controller renders the custom-first header/footer, accessible mobile menu, Search, contextual Zalo/Instagram preview chooser, exact line-item bag, persistent feedback, Home/Custom review states, and pending-but-complete Contact/policy destinations.

Or serve the folder with any static server.

For example:

```powershell
npx serve .
```

The selected storefront includes responsive desktop/mobile layouts, a custom-first Home, the full Custom/Corporate service and preparation journey, honest limited-case and locked rich-case states, contextual Zalo/Instagram branch previews, category storytelling, collection filtering and sorting, product gallery and variant selection, a schema-v2 fixture-line bag, gift-note entry, full-screen mobile Navigation/Search/Contact patterns, focus containment, Escape and focus return, add-to-bag inline/toast feedback, pending Contact states, and newsletter confirmation.

Validate the fixture/foundation contracts and every JavaScript file with:

```powershell
node review/phase-1/validate-fixtures.js
node review/phase-2/validate-foundation.js
node review/phase-3/validate-phase-3.js
Get-ChildItem -Recurse -Filter "*.js" | ForEach-Object { node --check $_.FullName }
```

The Phase 3 browser evidence harness uses the installed Chrome executable, starts a loopback-only static server, tests real 360/390/768/1440 viewports and interaction contracts, writes six screenshots, and removes its exact temporary profiles:

```powershell
node review/phase-3/browser-qa.js
```

All product names, prices, stock quantities, SKUs, dimensions, materials/care claims, packaging/gift behavior, delivery/policy wording, order/payment states, custom cases, and contact destinations in the prototype are illustrative or pending merchant approval. Supplied photography has no recorded production usage rights; several images visibly contain third-party identities and cannot substantiate HEDY products or completed custom work.
