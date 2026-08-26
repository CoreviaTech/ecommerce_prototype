# HEDY ATELIER storefront prototype

A dependency-free responsive ecommerce prototype for a ceramics and gifting brand. The client-selected Quiet Ritual direction now defines the connected Vietnamese storefront journey.

## Preview

Open the selected storefront pages directly in a browser:

- `index.html` — custom-first Quiet Ritual home with honest proof, service contexts, consultation branches, and secondary retail
- `shop.html` — use-led retail discovery with an explicit retail-versus-Custom boundary and deterministic sparse/media states
- `collection.html` — fixture-driven collections with current counts, modal filters, removable chips, sorting, progressive loading, recovery, and return context
- `search.html` — dedicated grouped Search with recent/suggested, typing, loading, mixed, zero, empty-query, error/retry, and restored-context states
- `product.html` — Direction 01 product detail, variants, gifting, and cart actions
- `custom.html` — complete Custom/Corporate service journey with selected context, limited cases, process, preparation, commercial fallback, FAQ, and consultation branches
- `contact.html` — canonical Contact route and deterministic channel/configuration states
- `policies.html` — pending-approval policy shell with stable delivery, payment, returns, privacy, and terms anchors

Directions 02–06 are preserved for reference at `archive/visual-directions/index.html`. They are not part of the active storefront design.

The custom-first expansion is being delivered through [`storefrontImplementationPlan.md`](storefrontImplementationPlan.md). Phases 0–3 are complete. Phase 4 implementation and automated validation pass and the phase is **Ready for approval**; Gate 4 still requires the named unassisted reviewer approval.

Phase 4 evidence, state URLs, gate checklist, and screenshots are available at [`review/phase-4/README.md`](review/phase-4/README.md). Every active page loads [`mock-data.js`](mock-data.js) before the shared controller. The controller renders the custom-first shell, accessible overlay surfaces, fixture-driven Shop/Collection/Search states, contextual Zalo/Instagram preview chooser, exact line-item bag, persistent feedback, and session-scoped discovery return context.

Or serve the folder with any static server.

For example:

```powershell
npx serve .
```

The selected storefront includes responsive desktop/mobile layouts, a custom-first Home, the full Custom/Corporate service and preparation journey, honest limited-case and locked rich-case states, contextual Zalo/Instagram branch previews, use-based Shop discovery, fixture-driven Collection filtering/sorting/progressive recovery, dedicated grouped Search, discovery return context, product gallery and variant selection, a schema-v2 fixture-line bag, gift-note entry, full-screen mobile Navigation/Search/Contact/Filter patterns, focus containment, Escape and focus return, accessible count updates, add-to-bag inline/toast feedback, pending Contact states, and newsletter confirmation.

Validate the fixture/foundation contracts and every JavaScript file with:

```powershell
node review/phase-1/validate-fixtures.js
node review/phase-2/validate-foundation.js
node review/phase-3/validate-phase-3.js
node review/phase-4/validate-phase-4.js
Get-ChildItem -Recurse -Filter "*.js" | ForEach-Object { node --check $_.FullName }
```

The Phase 4 browser evidence harness uses the installed Chrome executable, starts a loopback-only static server, tests real 360/390/768/1440 viewports and interaction contracts, writes six screenshots, and removes its exact temporary profiles:

```powershell
node review/phase-4/browser-qa.js
```

All product names, prices, stock quantities, SKUs, dimensions, materials/care claims, packaging/gift behavior, delivery/policy wording, order/payment states, custom cases, and contact destinations in the prototype are illustrative or pending merchant approval. Supplied photography has no recorded production usage rights; several images visibly contain third-party identities and cannot substantiate HEDY products or completed custom work.
