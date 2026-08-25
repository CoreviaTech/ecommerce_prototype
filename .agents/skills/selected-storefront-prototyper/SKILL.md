---
name: selected-storefront-prototyper
description: Extend the selected HEDY Quiet Ritual direction into connected responsive storefront pages and mock customer journeys. Use for new pages, shared UI, prototype commerce interactions, or consistency work in the active storefront; do not use to create a competing visual direction or production backend.
---

# Selected Storefront Prototyper

Extend the approved Quiet Ritual design as one coherent static storefront. Preserve its established visual character while making new page types useful, connected, and credible as UI/UX prototypes.

## Establish the Page and Journey

- Read `AGENTS.md` and the Direction 01 record in `styleIdeas.md` before changing files.
- Inspect the existing home, shop, collection, product, stylesheet, and shared script before adding a new pattern.
- Place the requested page in its customer journey: discovery, evaluation, gifting, purchase, trust, editorial, or support. Check its incoming route, primary action, next step, and empty or feedback states.
- Treat merchant catalog data, policies, inventory, delivery timing, payment behavior, maker provenance, and contact destinations as unverified unless the repository contains approved source data. Label consequential assumptions in the interface or design record.

## Extend the Selected System

- Keep Noto Serif Display and Be Vietnam Pro, the Direction 01 palette and color roles, generous editorial spacing, tactile geometry, image-led composition, fine structural rules, and restrained motion.
- Reuse established components and behavior before introducing variants. Keep the site header, mobile navigation, search, prototype bag, feedback, footer, focus return, Escape behavior, and stored mock state consistent across connected pages.
- Make new layouts feel native to Quiet Ritual without copying a previous page composition. Archived directions are evidence, not a component library; do not import their visual language into the selected storefront unless the user explicitly requests a reconsideration.
- Compose mobile intentionally. Reorder, crop, simplify, or change interaction presentation when needed instead of shrinking desktop arrangements.

## Keep the Prototype Static

- Default to the repository's HTML, CSS, and vanilla JavaScript. Do not add a framework, TypeScript build, dependency, server, real checkout, or external integration unless the user requests it or approves a documented material benefit.
- Use relative URLs that work when the repository is hosted beneath a GitHub Pages project path. Avoid client-side routing assumptions.
- Mock only the behavior needed to evaluate the journey. Make controls usable and states believable, but do not imply that payment, inventory, messaging, account, or fulfillment operations are real.
- If repeated markup or data becomes a demonstrated maintenance problem, explain the specific duplication and deployment tradeoff before proposing a build-time static-site generator.

## Maintain the Storefront Record

- Add new shared rules to `styles.css` and shared behavior to `script.js`; keep page-only code clearly scoped by `body[data-page]` or an equivalent page hook.
- Update navigation and footer routes when a placeholder becomes a real prototype page. Avoid leaving competing links for the same journey.
- Update `README.md` when previewable pages change and `styleIdeas.md` when page strategy, assumptions, or the selected design system changes.
- Preserve `materials/` and `archive/visual-directions/`. Do not overwrite source photography or alter archived concepts during routine storefront work.

## Validate Before Delivery

Read and follow [the shared visual QA checklist](../visual-direction-prototyper/references/visual-qa.md). In addition:

- Follow at least one complete route into and out of the new page.
- Check shared cart or bag state across pages when the work touches commerce actions.
- Verify local assets and relative links from the GitHub Pages project-path context.
- Report which content and commerce behavior remain illustrative rather than production-ready.
