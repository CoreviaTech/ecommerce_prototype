# Repository Guidelines

## Purpose and Scope

This repository is a dependency-free UI/UX prototype for the HEDY ATELIER ceramics and gifting store. Direction 01, Quiet Ritual, is the client-selected design and the active storefront system. The repository remains a static design prototype, not a production storefront: do not add frameworks, backend services, real checkout logic, or dependencies unless requested.

Preserve the archived visual directions as design evidence. Extend the selected storefront without blending in the visual language of unselected concepts.

## Project Structure

- `index.html`: custom-first Quiet Ritual Home with honest proof, service contexts, consultation branches, and secondary retail.
- `shop.html`, `collection.html`, `search.html`, `product.html`: established retail discovery and product-decision pages in the selected Quiet Ritual storefront.
- `cart.html`: full exact-line prototype cart with recovery states and delivery treatment kept pending until Checkout.
- `custom.html`: complete Custom/Corporate service journey with selected context, limited-case and locked rich-case patterns, process, preparation, commercial fallback, FAQ, and consultation branches.
- `contact.html`, `policies.html`: canonical pending-configuration Contact and policy shells used by the shared storefront foundation.
- `styles.css`, `script.js`: shared visual system and prototype behavior for the selected storefront.
- `mock-data.js`: synchronous, dependency-free Phase 1 fixture/state contract for later storefront pages; keep consequential values visibly illustrative or pending until approved.
- `review/phase-*/`: durable phase handoffs, screenshots, traceability, manifests, and validation evidence for `storefrontImplementationPlan.md`.
- `archive/visual-directions/`: preserved Directions 02–06 and an archive index. Do not modify these during routine storefront work.
- `materials/`: source photography, logo, and palette references. Never overwrite these files.
- `.agents/skills/`: repository-scoped Codex workflows used for this project.
- `styleIdeas.md`: brand foundation, selection record, active direction, and page roadmap.
- `README.md`: preview instructions.

Keep new active storefront pages at the repository root unless a later build-system decision changes the structure. If the user requests a genuinely new visual exploration, keep it self-contained in `archive/visual-directions/` or another explicitly agreed exploration area.

## Required Workflow

1. Read `styleIdeas.md`, inspect the connected storefront pages, and inspect relevant assets before designing.
2. Confirm the requested page's place in the customer journey and which shared components or states it must preserve.
3. Extend Quiet Ritual responsively without altering archived directions or unrelated pages.
4. Review desktop and mobile renders; validate routes, behavior, state, and assets.
5. Update `styleIdeas.md`, `README.md`, or this guide when page strategy, decisions, or structure change.

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

Review at 1440px desktop and 390-500px mobile widths. Confirm navigation, search, relevant filters, cart feedback, forms, keyboard Escape behavior, focus return, reduced motion, and horizontal overflow. Follow representative links into and out of each affected page. Completion requires no missing assets, console errors, syntax failures, or unintended changes to archived directions or unrelated storefront pages.

## Commits and Pull Requests

No Git convention exists yet. Use concise imperative commits such as `feat: add gift finder journey`. Pull requests should name the affected storefront pages, explain design and behavior changes, list validation performed, and include desktop and mobile screenshots. Note new assets, dependencies, mock-data assumptions, and related design decisions.
