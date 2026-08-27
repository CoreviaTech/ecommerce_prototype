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
- `checkout.html` — guest recipient/address form with draft recovery, accessible validation, nine delivery states, COD/transfer choice, exact totals, and duplicate-safe mock submission
- `confirmation.html` — refresh-safe COD, transfer, manual-delivery, notification-failure, creation-failure, and uncertain-result confirmations
- `custom.html` — complete Custom/Corporate service journey with selected context, limited cases, process, preparation, commercial fallback, FAQ, and consultation branches
- `story.html` — evergreen Story/craft destination with four verification layers, limited-provenance and media-failure states, and Custom/Shop routes
- `contact.html` — canonical Contact route with deterministic channel/configuration states, preparation copy, and contextual journey return paths
- `policies.html` — public pending-approval policy reader with stable delivery, payment, returns/refund, privacy, terms, business/contact anchors, copy/print tools, and return context
- `404.html` — general recovery to Home, Custom, Shop, Story, Contact, and Search
- `unavailable.html` — known unavailable product/case/article/private recovery without implying Sold out or exposing private context

Directions 02–06 are preserved for reference at `archive/visual-directions/index.html`. They are not part of the active storefront design.

The custom-first expansion is delivered through [`storefrontImplementationPlan.md`](storefrontImplementationPlan.md). Phases 0–3 are complete. Phase 4 through Phase 9 implementation and automated validation pass; these phases are **Ready for approval** and their named unassisted reviewer, traceability, content, and shop-operator gates remain pending.

The final system audit, five-width route matrix, nine scenario record, remaining-production list, reviewer checklists, and 28 captures are available at [`review/phase-9/README.md`](review/phase-9/README.md). Supporting Story/policy/contact/recovery evidence remains at [`review/phase-8/README.md`](review/phase-8/README.md); payment/result, delivery, and Product/Cart evidence remains at [`review/phase-7/README.md`](review/phase-7/README.md), [`review/phase-6/README.md`](review/phase-6/README.md), and [`review/phase-5/README.md`](review/phase-5/README.md). Every active page loads [`mock-data.js`](mock-data.js) before the shared controller. The controller renders the custom-first shell, accessible overlay surfaces, fixture-driven Shop/Collection/Search/Product/Cart/Checkout/Confirmation states, Story truth states, policy/contact tools, contextual Zalo/Instagram preview chooser, exact persistent cart lines, session-scoped Checkout recovery and result durability, discovery return context, safe 404/unavailable recovery, and privacy-safe analytics intent annotations without collecting data.

Or serve the folder with any static server.

For example:

```powershell
npx serve .
```

The selected storefront includes responsive desktop/mobile layouts, a custom-first Home, the full Custom/Corporate service and preparation journey, honest limited-case and locked rich-case states, contextual Zalo/Instagram branch previews, use-based Shop discovery, fixture-driven Collection/Search/Product/Cart/Checkout/Confirmation journeys, exact commerce recovery, an evergreen limited-provenance Story, a stable pending-approval policy reader, contextual Contact support, general/known unavailable recovery, full-screen mobile Navigation/Search/Contact/Filter patterns, focus containment, Escape and focus return, reduced motion, accessible announcements, and persistent session-local mock state.

Validate the fixture/foundation contracts and every JavaScript file with:

```powershell
node review/phase-1/validate-fixtures.js
node review/phase-2/validate-foundation.js
node review/phase-3/validate-phase-3.js
node review/phase-4/validate-phase-4.js
node review/phase-5/validate-phase-5.js
node review/phase-6/validate-phase-6.js
node review/phase-7/validate-phase-7.js
node review/phase-8/validate-phase-8.js
node review/phase-9/validate-phase-9.js
Get-ChildItem -Recurse -Filter "*.js" | ForEach-Object { node --check $_.FullName }
```

The Phase 8 browser evidence harness uses the installed Chrome executable, starts a loopback-only static server, tests real 360/390/768/1440 CSS viewports and Story/policy/contact/recovery contracts, writes eleven screenshots, and removes its exact temporary profiles:

```powershell
node review/phase-8/browser-qa.js
```

The Phase 9 harness simulates a GitHub Pages project path, tests all 14 active P0 routes at 360/390/500/768/1440, exercises shared focus/Escape/reduced-motion behavior and all nine required functional scenarios, writes 28 first-viewport captures, and removes its exact temporary profiles:

```powershell
node review/phase-9/browser-qa.js
```

All active pages are `noindex, nofollow` while the domain, legal identity, catalog, policies, rights-cleared media, and social-share preview remain unapproved. Product names, prices, stock quantities, SKUs, dimensions, materials/care claims, packaging/gift behavior, address options, delivery methods/fees/estimates/coverage, tax/invoice language, policies, order/payment states, transfer instructions, custom cases, provenance/maker/process claims, business identity, and contact destinations are illustrative or pending approval. Checkout and Confirmation send nothing; they create only session-local mock results. Story uses no supplied photograph because the current assets cannot substantiate HEDY origin, makers, process, materials, or completed custom work.
