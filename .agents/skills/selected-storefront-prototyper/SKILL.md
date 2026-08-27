---
name: selected-storefront-prototyper
description: Revise or extend the selected HEDY Quiet Ritual storefront as connected responsive pages and mock customer journeys. Use for page-by-page refinement, new active pages, shared UI, prototype commerce interactions, or consistency work; do not use to create a competing visual direction or production backend.
---

# Selected Storefront Prototyper

Refine the approved Quiet Ritual design as one coherent static storefront. Preserve its established visual character and customer-journey contracts while improving individual pages, shared patterns, and connected prototype behavior.

## Establish the Revision and Journey

- Read `AGENTS.md`, the Direction 01 record in `styleIdeas.md`, and relevant accepted decisions or handoffs in `storefrontImplementationPlan.md` before changing files.
- Translate the request into a concise working brief: the page's purpose, the user's expectations, required content and behavior, current invariants, important states, and responsive priorities. Ask for clarification only when an unresolved choice would materially change the result.
- Inspect the current target page, its immediate incoming and outgoing routes, and the shared CSS, JavaScript, mock data, and assets it actually uses. When introducing a pattern, inspect representative sibling pages rather than assuming the original Home/Shop/Collection/Product set is sufficient.
- Identify whether each intended change is page-local or system-wide. Search for every consumer of shared selectors, controllers, storage, fixture fields, and shell markup before editing them.
- Place the requested page in its customer journey: discovery, evaluation, gifting, purchase, trust, editorial, or support. Preserve its primary action, next step, recovery paths, and required state consequences unless the user explicitly changes the journey.
- Treat merchant catalog data, policies, inventory, delivery timing, payment behavior, maker provenance, and contact destinations as unverified unless the repository contains approved source data. Label consequential assumptions in the interface or design record.

## Extend the Selected System

- Keep Noto Serif Display and Be Vietnam Pro, the Direction 01 palette and color roles, generous editorial spacing, tactile geometry, image-led composition, fine structural rules, and restrained motion.
- Reuse established components and behavior when they still serve the page. Improve an existing pattern when the requested hierarchy, clarity, or usability requires it, and carry an intentional shared change through its affected consumers.
- Keep page-specific rules scoped by the page hook. Treat changes to the site header, mobile navigation, search, Contact, prototype bag, feedback, footer, focus behavior, Escape behavior, persistence, or fixture contracts as system changes that require regression review.
- Make revised and new layouts feel native to Quiet Ritual without copying a sibling page composition. Compare active storefront pages for consistency; archived directions are evidence, not a component library, and should not frame routine revision QA.
- Compose mobile intentionally. Reorder, crop, simplify, or change interaction presentation when needed instead of shrinking desktop arrangements.

## Keep the Prototype Static

- Default to the repository's HTML, CSS, and vanilla JavaScript. Do not add a framework, TypeScript build, dependency, server, real checkout, or external integration unless the user requests it or approves a documented material benefit.
- Use relative URLs that work when the repository is hosted beneath a GitHub Pages project path. Avoid client-side routing assumptions.
- Mock only the behavior needed to evaluate the journey. Make controls usable and states believable, but do not imply that payment, inventory, messaging, account, or fulfillment operations are real.
- If repeated markup or data becomes a demonstrated maintenance problem, explain the specific duplication and deployment tradeoff before proposing a build-time static-site generator.

## Maintain the Storefront Record

- Add genuinely shared rules to `styles.css` and shared behavior to `script.js`; keep page-only code clearly scoped by `body[data-page]` or an equivalent page hook.
- Update navigation and footer routes when a placeholder becomes a real prototype page. Avoid leaving competing links for the same journey.
- Update `README.md` when the preview inventory or review instructions change. Update `styleIdeas.md`, `storefrontImplementationPlan.md`, or repository guidance only when page strategy, approved assumptions, routes, state contracts, or the selected design system materially change; ordinary visual polish does not require a design-record entry.
- Preserve `materials/` and `archive/visual-directions/`. Do not overwrite source photography or alter archived concepts during routine storefront work.

## Validate Before Delivery

Read and follow [the active storefront page-revision QA checklist](references/page-revision-qa.md).

- Follow at least one complete route into and out of the revised or new page.
- Exercise the default state and every alternate state affected by the change.
- Check shared cart or bag state across pages when the work touches commerce actions.
- Verify local assets and relative links from the GitHub Pages project-path context.
- Report which content and commerce behavior remain illustrative rather than production-ready.
