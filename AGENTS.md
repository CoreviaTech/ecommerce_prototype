# Repository Guidelines

## Purpose and Scope

This repository is a dependency-free UI/UX prototype for the HEDY ATELIER ceramics and gifting store. Direction 01, Quiet Ritual, is the client-selected design and the active storefront system. The repository remains a static design prototype, not a production storefront: do not add frameworks, backend services, real checkout logic, or dependencies unless requested.

Preserve the archived visual directions as design evidence. Extend the selected storefront without blending in the visual language of unselected concepts.

## Project Structure

- `index.html`: custom-first Quiet Ritual Home with honest proof, service contexts, consultation branches, and secondary retail.
- `shop.html`, `collection.html`, `search.html`, `product.html`: established retail discovery and product-decision pages in the selected Quiet Ritual storefront.
- `cart.html`: full exact-line prototype cart with recovery states and delivery treatment kept pending until Checkout.
- `checkout.html`: guest recipient/address flow with session draft recovery, validation, delivery calculation, COD/transfer choice, and duplicate-safe mock submission.
- `confirmation.html`: refresh-safe COD, transfer, manual-delivery, notification-failure, creation-failure, and uncertain-result states.
- `custom.html`: complete Custom/Corporate service journey with selected context, limited-case and locked rich-case patterns, process, preparation, commercial fallback, FAQ, and consultation branches.
- `story.html`: evergreen limited-provenance Story/craft destination and the accepted alternative while Journal/Article remain deferred.
- `contact.html`, `policies.html`: canonical pending-configuration Contact and public policy reader with copy/print and contextual return behavior.
- `404.html`, `unavailable.html`: general and known-content recovery without false Sold out or private-content disclosure.
- `styles.css`, `script.js`: shared visual system and prototype behavior for the selected storefront.
- `mock-data.js`: synchronous, dependency-free fixture/state contract for the active storefront; keep consequential values visibly illustrative or pending until approved.
- `storefrontImplementationPlan.md`: accepted P0 journey, functional/state, phase-gate, and validation baseline. Preserve it as the delivery record; update it only when scope, an accepted contract, or gate status changes.
- `review/phase-*/`: durable phase handoffs, screenshots, traceability, manifests, and validation evidence for `storefrontImplementationPlan.md`.
- `archive/visual-directions/`: preserved Directions 02–06 and an archive index. Do not modify these during routine storefront work.
- `materials/`: source photography, logo, and palette references. Never overwrite these files.
- `.agents/skills/`: repository-scoped Codex workflows used for this project.
- `styleIdeas.md`: brand foundation, selection record, active direction, current storefront system, and refinement policy.
- `README.md`: preview instructions.

Keep new active storefront pages at the repository root unless a later build-system decision changes the structure. If the user requests a genuinely new visual exploration, keep it self-contained in `archive/visual-directions/` or another explicitly agreed exploration area.

## Required Workflow

1. Read the Direction 01 record in `styleIdeas.md` and the relevant accepted decisions or handoffs in `storefrontImplementationPlan.md`.
2. Define the revision brief: the page's journey role, the user's expectation, required content and behavior, invariants to preserve, affected states, and responsive priorities.
3. Inspect the current target page, its immediate incoming and outgoing routes, relevant assets, and the shared CSS, JavaScript, storage, and fixture fields it uses.
4. Separate page-local changes from system changes. Scope unique rules by the page hook; before changing shared markup, selectors, controllers, persistence, or data contracts, find their consumers and plan regression coverage.
5. Extend Quiet Ritual responsively without altering archived directions or unrelated pages. Preserve accepted business consequences and honest prototype boundaries unless the request explicitly changes them.
6. Review responsive renders and validate relevant routes, behavior, states, assets, accessibility, and affected shared consumers.
7. Update `styleIdeas.md`, `README.md`, `storefrontImplementationPlan.md`, or this guide only when strategy, preview inventory, approved assumptions, routes, shared contracts, structure, or gate status materially changes. Routine visual polish does not require a design-record update.

## Brand and Design Guardrails

Use **HEDY** in compact customer-facing contexts and **HEDY ATELIER** formally. The logo source is `materials/logo.jpg`; the palette reference is `materials/palatte.jpg`. Preserve the promise "Quiet Beauty, Lasting Meaning." Follow the colors and logo guidance in `styleIdeas.md`.

Product photography, storytelling, readable typography, intentional mobile composition, and gifting must remain central. Preserve Direction 01's Quiet Ritual system: warm tonal surfaces, editorial serif display type, clear Vietnamese interface type, tactile geometry, generous spacing, and restrained motion.

## Development and Coding Conventions

Open HTML files directly or run `npx serve .`. There is no build step. Validate every script with:

```powershell
Get-ChildItem -Recurse -Filter "*.js" | ForEach-Object { node --check $_.FullName }
```

Use two-space indentation, semantic HTML, descriptive kebab-case CSS classes, camelCase JavaScript names, CSS custom properties, and `const`/`let`. Every content image needs meaningful `alt` text; decorative images use `alt=""`.

## Definition of Done

Review every affected page at 360px, 390px, 500px, 768px, and 1440px; screenshots are optional at unchanged intermediate widths, but layout behavior and horizontal overflow must be checked. Exercise the default state and every alternate state affected by the change. Confirm the relevant navigation, search, Contact, filters, cart feedback, forms, persistence, keyboard Escape behavior, focus containment/return, reduced motion, touch targets, safe-area behavior, and failed-media treatment.

Follow representative links into and out of each affected page from the project-path context. When shared HTML, CSS, JavaScript, fixtures, or storage change, identify all consumers and render representative dependent pages at mobile and desktop widths; global shell or persistence changes require the available cross-route or scenario validation. For substantial layout or interaction revisions, inspect the current page before editing so intentional changes can be distinguished from regressions.

Completion requires no missing assets, console errors, syntax failures, or unintended changes to archived directions or unrelated storefront pages. Report the pages, states, widths, shared consumers, checks, limitations, and illustrative behavior covered.

## Commits and Pull Requests

No Git convention exists yet. Use concise imperative commits such as `feat: add gift finder journey`. Pull requests should name the affected storefront pages, explain design and behavior changes, list validation performed, and include desktop and mobile screenshots. Note new assets, dependencies, mock-data assumptions, and related design decisions.
