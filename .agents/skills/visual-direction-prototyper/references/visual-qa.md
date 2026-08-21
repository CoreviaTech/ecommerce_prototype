# Visual QA

Read this reference before presenting a direction as complete.

## Validate the Implementation

- Run syntax, lint, or build checks supported by the repository.
- Audit local asset references and meaningful image alternative text.
- Check the browser console for runtime, resource, and font-loading errors.
- Exercise representative interactions: navigation, mobile menu, search, filters, product actions, feedback states, forms, Escape behavior, and focus flow.
- Confirm reduced-motion behavior when motion is present.

## Inspect the Render

- Review at least one wide desktop viewport around 1440px and one mobile viewport around 390-500px. Add an intermediate width when layout behavior changes materially.
- Inspect the first viewport and important lower-page sections. Do not assume a tall single screenshot accurately represents layouts that depend on viewport height.
- Check typography wrapping, image focal points, contrast, alignment, spacing rhythm, horizontal overflow, touch target size, and sticky or overlay states.
- Compare with existing directions. Verify that the new concept remains recognizable as the same brand while differing in structure, pacing, and storytelling.

## Interpret Failures Carefully

Distinguish page defects from capture-environment problems such as browser minimum widths, GPU failures, delayed font loading, or scroll-trigger timing. Retry with a safe alternate preview path when evidence indicates a tooling issue. Do not dismiss a visible problem without verifying the cause.

Remove temporary screenshots, browser profiles, and servers created only for QA. Preserve useful deliverables and all pre-existing user files. Report checks completed, limitations, and any intentionally unimplemented production behavior.
