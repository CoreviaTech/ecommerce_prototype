# HEDY ATELIER storefront prototype

A dependency-free responsive ecommerce prototype for a ceramics and gifting brand. The client-selected Quiet Ritual direction now defines the connected Vietnamese storefront journey.

## Preview

Open the selected storefront pages directly in a browser:

- `index.html` — custom-first Quiet Ritual home with honest proof, service contexts, consultation branches, and secondary retail
- `shop.html` — use-led retail discovery with an explicit retail-versus-Custom boundary and deterministic sparse/media states
- `collection.html` — fixture-driven collections with current counts, modal filters, removable chips, sorting, progressive loading, recovery, and return context
- `search.html` — dedicated grouped Search with recent/suggested, typing, loading, mixed, zero, empty-query, error/retry, and restored-context states
- `product.html` — fixture-driven product decision page with synchronized variants, eligibility, gallery fallbacks, policy facts, retail action, and contextual Custom recovery
- `cart.html` — full exact-line cart with quantity recalculation, removal/undo, change warnings, deferred delivery treatment, and consultation recovery
- `checkout.html` — guest recipient/address form with draft recovery, accessible validation, nine delivery states, exact pending/final totals, policy continuity, and Phase 7 boundaries
- `custom.html` — complete Custom/Corporate service journey with selected context, limited cases, process, preparation, commercial fallback, FAQ, and consultation branches
- `contact.html` — canonical Contact route and deterministic channel/configuration states
- `policies.html` — pending-approval policy shell with stable delivery, payment, returns, privacy, and terms anchors

Directions 02–06 are preserved for reference at `archive/visual-directions/index.html`. They are not part of the active storefront design.

The custom-first expansion is being delivered through [`storefrontImplementationPlan.md`](storefrontImplementationPlan.md). Phases 0–3 are complete. Phase 4, Phase 5, and Phase 6 implementation and automated validation pass; all three phases are **Ready for approval** and their named unassisted reviewer gates remain pending.

Phase 6 evidence, Checkout/delivery state URLs, gate checklist, and screenshots are available at [`review/phase-6/README.md`](review/phase-6/README.md); Phase 5 Product/Cart evidence remains at [`review/phase-5/README.md`](review/phase-5/README.md). Every active page loads [`mock-data.js`](mock-data.js) before the shared controller. The controller renders the custom-first shell, accessible overlay surfaces, fixture-driven Shop/Collection/Search/Product/Cart/Checkout states, contextual Zalo/Instagram preview chooser, exact persistent cart lines, session-scoped Checkout recovery, and discovery return context.

Or serve the folder with any static server.

For example:

```powershell
npx serve .
```

The selected storefront includes responsive desktop/mobile layouts, a custom-first Home, the full Custom/Corporate service and preparation journey, honest limited-case and locked rich-case states, contextual Zalo/Instagram branch previews, use-based Shop discovery, fixture-driven Collection filtering/sorting/progressive recovery, dedicated grouped Search, discovery return context, four Product fixtures, synchronized variants and eligibility, keyboard gallery/lightbox behavior, media fallbacks, a schema-v2 exact-line bag, a full Cart with recalculation/removal/undo/change recovery, guest Checkout draft recovery, accessible validation, address invalidation, nine delivery states, exact pending/final totals, policy-return continuity, full-screen mobile Navigation/Search/Contact/Filter patterns, focus containment, Escape and focus return, accessible announcements, persistent add-to-cart confirmation, pending Contact states, and newsletter confirmation.

Validate the fixture/foundation contracts and every JavaScript file with:

```powershell
node review/phase-1/validate-fixtures.js
node review/phase-2/validate-foundation.js
node review/phase-3/validate-phase-3.js
node review/phase-4/validate-phase-4.js
node review/phase-5/validate-phase-5.js
node review/phase-6/validate-phase-6.js
Get-ChildItem -Recurse -Filter "*.js" | ForEach-Object { node --check $_.FullName }
```

The Phase 6 browser evidence harness uses the installed Chrome executable, starts a loopback-only static server, tests real 360/390/768/1440 viewports and Checkout interaction contracts, writes six screenshots, and removes its exact temporary profiles:

```powershell
node review/phase-6/browser-qa.js
```

All product names, prices, stock quantities, SKUs, dimensions, materials/care claims, packaging/gift behavior, address options, delivery methods/fees/estimates/coverage, tax/invoice language, policies, order/payment states, custom cases, and contact destinations in the prototype are illustrative or pending merchant approval. Checkout sends nothing and Phase 6 creates no order, quote request, bank instruction, reference code, or payment. Supplied photography has no recorded production usage rights; several images visibly contain third-party identities and cannot substantiate HEDY products or completed custom work.
