# Active Storefront Page-Revision QA

Read this reference before presenting a revised or new Quiet Ritual page as complete.

## Establish the Review Surface

- For a substantial layout or interaction revision, inspect the current target page before editing so the handoff can distinguish intentional change from regression.
- Identify the target page, its immediate incoming and outgoing routes, the states affected, and the shared selectors, controllers, fixture fields, storage, or shell markup the work touches.
- Preserve accepted journey consequences and honest prototype boundaries unless the request explicitly changes them.

## Inspect Responsive Renders

- Review the target page at 360px, 390px, 500px, 768px, and 1440px. Screenshots are not required at every width, but each width must be checked for layout behavior and horizontal overflow.
- Inspect the first viewport and important lower-page sections. Include long Vietnamese copy, representative validation or feedback, and content extremes that could change wrapping or height.
- Check typography, image focal points and fallbacks, contrast, alignment, spacing rhythm, touch targets, safe areas, sticky elements, overlays, and zoomed or reduced-motion behavior where relevant.
- Compare the result with representative active Quiet Ritual sibling pages and shared component contracts, not with archived visual directions.

## Exercise Behavior and States

- Test the default state plus every loading, empty, validation, error, unavailable, pending, restored, or success state materially affected by the revision.
- Exercise relevant keyboard and touch behavior, including logical focus order, visible focus, Escape, focus containment and return, announcements, and controls that must work without hover.
- Verify that meaningful state and context survive the designed route transitions, reloads, or recovery paths when persistence is part of the page contract.
- Check local assets, alternative text, relative routes, fonts, browser console output, and JavaScript syntax using the repository-supported checks.

## Check Shared-System Regressions

- When shared HTML, CSS, JavaScript, fixture data, or storage changes, identify all consumers before delivery.
- Render representative dependent pages at mobile and desktop widths. For global shell or persistence changes, run the repository's available cross-route or scenario validation rather than relying on the target page alone.
- Follow at least one route into and out of the target page from the GitHub Pages project-path context.

## Hand Off the Revision

- Report the pages, states, widths, dependent consumers, and checks covered, plus limitations and intentionally illustrative behavior.
- Record strategy, route, assumption, state-contract, or design-system decisions in the appropriate repository document. Do not create durable records for routine spacing or cosmetic adjustments.
- Remove temporary screenshots, browser profiles, and preview servers created only for QA while preserving useful review evidence and all pre-existing user files.
