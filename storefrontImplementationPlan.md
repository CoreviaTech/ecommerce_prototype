# HEDY ATELIER — Complete Storefront UI Implementation Plan

**Status:** Active sequential delivery plan — Phase 1 complete  
**Prepared:** 25 August 2026  
**Applies to:** The client-selected Direction 01, Quiet Ritual  
**Implementation target:** A dependency-free, responsive, high-fidelity storefront prototype with realistic Vietnamese mock data and deterministic UI states

## Phase progress tracker

This table is the durable handoff record. Update it only after the phase gate has been evaluated.

| Phase | Status | Gate status | Evidence | Last updated |
|---|---|---|---|---|
| 0 — Baseline, sitemap, approval contract | Complete | Gate 0 passed for prototype implementation by requester direction | [Phase 0 review](review/phase-0/README.md) | 25 Aug 2026 |
| 1 — Content, fixture, asset, state architecture | Complete | Gate 1 passed | [Phase 1 review](review/phase-1/README.md) | 26 Aug 2026 |
| 2 — Shared storefront foundation | Not started | Gate 2 not evaluated | — | — |
| 3 — Primary custom/corporate slice | Not started | Gate 3 not evaluated | — | — |
| 4 — Retail discovery and search | Not started | Gate 4 not evaluated | — | — |
| 5 — Product decision and cart | Not started | Gate 5 not evaluated | — | — |
| 6 — Guest checkout and delivery | Not started | Gate 6 not evaluated | — | — |
| 7 — Payment, submission, confirmation | Not started | Gate 7 not evaluated | — | — |
| 8 — Trust, editorial, policy, recovery | Not started | Gate 8 not evaluated | — | — |
| 9 — Consolidation, validation, handoff | Not started | Gate 9 not evaluated | — | — |

Allowed statuses are Not started, In progress, Ready for approval, Complete, and Blocked. A phase becomes Complete only when its named gate passes; preparing all artifacts without the required approval results in Ready for approval.

## 1. Outcome

Turn the current four-page visual prototype into a complete customer-facing storefront prototype that the shop owner can review as connected journeys rather than isolated ideal screens.

The finished prototype must let a reviewer complete and understand four P0 journeys:

1. Review custom or corporate capability and leave through either Zalo or Instagram with useful context.
2. Discover an available retail product and place a mock COD order.
3. Place a mock manual bank-transfer order and understand that payment is awaiting verification.
4. Encounter an exceptional delivery case and understand that only a delivery-quote request exists.

“Complete” means that the P0 routes, important loading/empty/error/unavailable/success states, responsive layouts, keyboard behavior, and route transitions are represented. It does not mean that the prototype processes real orders, checks inventory, calculates live delivery fees, sends messages, or accepts payment.

## 2. Governing sources and precedence

Use these sources in this order when requirements appear to conflict:

1. D:\Code\2026\ecommerce\prd\storefront-ui-functional-requirements.md is the functional contract and defines P0/P1 scope, required facts, business rules, states, and validation scenarios.
2. styleIdeas.md is the visual and brand-direction record. Quiet Ritual remains the source of truth for typography, palette roles, spacing, image treatment, geometry, and motion.
3. The existing index.html, shop.html, collection.html, product.html, styles.css, and script.js are the implementation baseline and reusable component evidence.
4. AGENTS.md and the repository skills define implementation, preservation, accessibility, and QA constraints.

If a requested layout would remove a required fact or change a business rule, the functional contract wins. If a new page needs visual decisions, Quiet Ritual wins. Archived Directions 02–06 are not a component library and must remain unchanged.

## 3. Product and experience alignment

### 3.1 Material change from the current prototype

The selected visual direction is still valid, but the required business hierarchy has changed:

- Primary: custom and corporate consultation supported by proof, process, constraints, and contextual contact.
- Secondary: browsing and buying available retail products.
- Supporting: craft, editorial content, policies, and recovery.

The current Home hero and navigation lead with retail. They must be recomposed around the custom-first proposition while preserving the recognizable Quiet Ritual visual language. This is an information-architecture and content-priority refactor, not a new visual exploration.

### 3.2 Design principles

- Show credible proof before asking the customer to contact the shop.
- Make retail actions and consultation actions visually and verbally distinct.
- Explain the consequence of every important action.
- Never present an unknown delivery fee as free or final.
- Never present transfer instructions as proof of payment.
- Preserve valid cart and checkout work through recoverable failures.
- Design with realistic Vietnamese content from the start.
- Compose mobile first at 360px and 390px, then resolve intermediate and 1280–1440px behavior within the same phase.
- Build every important state, not only the happy path.
- Keep all consequential catalog, policy, payment, delivery, contact, and maker claims clearly illustrative until approved.

### 3.3 Prototype boundaries

Do not add a framework, package, build step, backend, client-side router, real checkout, live inventory, live carrier quote, payment gateway, social widget, account system, or external messaging integration.

Keep active pages at the repository root, use relative URLs that work beneath a GitHub Pages project path, preserve materials/, and do not modify archive/visual-directions/.

## 4. Current baseline and gap audit

| Area | Current baseline | Required action |
|---|---|---|
| Visual system | Quiet Ritual tokens, serif/sans pairing, tonal surfaces, editorial layouts, tactile geometry, restrained reveals | Preserve and extend; formalize state, form, status, and checkout tokens |
| Shared shell | Header, mobile menu, announcement, footer, search overlay, bag drawer | Reorder custom-first; add Contact; replace dead links; add focus containment; make footer policy routes complete |
| Home / UI-01 | Complete retail-led visual concept page | Recompose into custom-first Home with proof, use cases, cases, process, dual-channel CTA, and secondary retail |
| Custom / UI-02–04 | Zalo placeholder buttons only | Add service page, case system, contextual Zalo/Instagram chooser, fallbacks, and honest limited-content states |
| Shop / UI-05 | Use-based shop landing exists | Retain the useful ritual-led model; add retail-versus-custom explanation and required sparse/error behavior |
| Collection / UI-06 | Filters, sort, progressive loading, empty state | Add applied-filter removal/clear, loading/error/removed-item states, reliable recovery, and retained return context |
| Search / UI-07 | Search overlay routes to collection | Add a dedicated results experience with initial, suggestions, results, zero, empty-query, loading, and error states |
| Product / UI-08 | One multi-variant happy path, gallery, quantity, gifting, sticky mobile action | Expand to four fixtures, unavailable combinations, enquiry-only and sold-out behavior, media failure, custom escalation, and policy links |
| Cart / UI-09 | Drawer stores only a count and last product | Add a full cart page and a line-item state model with variant, unit price, quantity, warnings, totals, delivery treatment, and recovery |
| Checkout / UI-10 | Missing | Add guest contact, address, delivery, payment, review, consent, validation, persistence, and submission states |
| Confirmation / UI-11 | Missing | Add COD, transfer, manual-delivery, notification-failure, creation-failure, and safe uncertain-result variants |
| Story/editorial/policies / UI-13–16 | Home snippets and dead footer links | Add dedicated trust, editorial, contact, and policy templates with approved or explicitly pending copy |
| Recovery / UI-17 | Missing | Add general 404 and known-unavailable-product recovery |
| Shared behavior | Local bag persistence, Escape close, focus return, reduced motion | Preserve; add dialog focus containment, live state announcements, deterministic fixtures, query/back persistence, and form recovery |
| Route continuity | Several category fragments do not resolve, search does not consume its query, every product card opens one PDP, and support/social/legal links use # | Normalize taxonomy and fixture routes; remove dead fragments and placeholders phase by phase |
| Content consistency | Shop counts, the eight-card catalog, reused product imagery, and the single PDP do not describe one coherent mock catalog | Make the Phase 1 fixture catalog the single prototype source of truth |
| Assets | Logo, palette reference, and eight product/gift images | Create an asset-rights and crop manifest; obtain approved custom-case and process proof; do not use third-party-branded imagery as verified HEDY work |

The current prototype is therefore a strong visual-system baseline, but it is not yet the final sitemap or a complete commerce-state model.

## 5. Target journey and route architecture

### 5.1 Journey sequence

| Journey | Required sequence | Success condition |
|---|---|---|
| Custom | Home or contextual entry → Custom service → relevant proof/case → process and preparation → contact chooser → Zalo or Instagram | Customer understands what is and is not confirmed, what to prepare, and that messaging is not an order or quotation |
| Retail | Home/Shop/Search/Article → Collection/results → Product → Cart → Guest checkout → COD or transfer confirmation | Customer understands the exact variant, delivery treatment, payment state, and next action |
| Delivery exception | Product → Cart → Checkout → manual delivery state → request confirmation | Customer understands that the final fee and total are pending and that no payment is requested |
| Recovery | Zero result, unavailable product, validation failure, quote failure, or 404 → relevant retry, Shop, Custom, Search, or support | Existing valid context is preserved and the user is not sent to a dead end |

### 5.2 Proposed root-level route map

Final filenames may change only at the Phase 0 sitemap gate.

| Functional ID | Proposed route | Plan |
|---|---|---|
| UI-01 | index.html | Recompose existing page |
| UI-02 and UI-03 | custom.html | New service page with case gallery/module |
| UI-04 | case.html | New reusable detail pattern; publish only approved case facts |
| UI-05 | shop.html | Extend existing page |
| UI-06 | collection.html | Extend existing page |
| UI-07 | search.html | New results route; retain the shared search entry overlay |
| UI-08 | product.html | Extend existing template and drive representative fixtures deterministically |
| UI-09 | cart.html | New full-page cart |
| UI-10 | checkout.html | New guest checkout |
| UI-11 | confirmation.html | New state-driven confirmation template |
| UI-12 | lookup.html | P1; exclude unless explicitly approved |
| UI-13 | story.html | New story/craft page |
| UI-14 | journal.html | New only if D-17 confirms a credible launch cadence |
| UI-15 | article.html | New template if Journal remains in scope |
| UI-16 | policies.html and contact.html | New reusable policy experience with direct topic anchors; split routes later only if approved content/SEO requires it |
| UI-17 | 404.html and unavailable.html | New general and known-product recovery pages |

### 5.3 Shared file strategy

- Keep shared visual rules in styles.css and page-specific rules scoped by body data-page values.
- Keep shared behavior in script.js and separate UI controllers by responsibility.
- Add mock-data.js only if the fixture inventory proves that hard-coded page markup would cause state drift. It must expose local data synchronously so direct file preview still works.
- Store only non-sensitive mock state. Use localStorage for cart continuity and sessionStorage where checkout recovery is useful.
- Expose alternate review states through documented query parameters or fixture keys, such as product fixture, checkout state, or confirmation method. Do not duplicate whole pages merely to show variants.
- Give every P0 page one believable default state that works without a special query.

## 6. Working method for every phase

Every designer or prototyper follows the same sequence before handing work to the next phase:

1. Confirm the page’s incoming route, user question, primary action, next step, and recovery paths.
2. Extract the required content, data fields, component variants, and state transitions.
3. Draft realistic Vietnamese copy and identify every unapproved claim.
4. Design the information hierarchy at 360px and 390px.
5. Review the mobile flow and content with the phase owner before high-fidelity implementation.
6. Implement the approved Quiet Ritual composition, then resolve intermediate and 1280–1440px layouts.
7. Exercise keyboard, touch, Escape, focus return, reduced motion, state announcements, and persistence.
8. Validate routes into and out of the phase, capture desktop/mobile evidence, and update the decision/assumption record.
9. Pass the phase gate before beginning the next implementation phase.

Discovery and owner-input collection may run ahead, but page implementation should remain sequential so later phases consume approved components and state contracts rather than inventing parallel variants.

## 7. Sequential implementation phases

### Phase 0 — Baseline, sitemap, and approval contract

**Purpose:** Prevent the team from polishing the wrong hierarchy or inventing unresolved business rules.

**Work sequence:**

1. Capture the current Home, Shop, Collection, and Product at 390px and 1440px as before-change reference evidence.
2. Map every functional requirement UI-01–UI-17 to a route, component, state, or explicit P1 exclusion.
3. Approve the custom-first sitemap and desktop/mobile navigation labels.
4. Decide whether Case detail is a route, an expansion, or an accessible dialog for the first review.
5. Decide whether Journal remains P0 or is removed from primary navigation under D-17.
6. Record every unresolved D-ID with an owner, safe placeholder, and latest phase by which a real value is needed.
7. Define the four prototype validation journeys and the fixture/state URLs reviewers will use.

**Deliverables:**

- Approved sitemap and navigation order.
- Requirements traceability matrix.
- Decision-dependency register.
- P0/P1 scope statement.
- Current-state desktop/mobile reference captures.

**Gate 0:** Product owner and shop owner approve the primary custom journey, secondary retail journey, route inventory, and safe handling of unresolved decisions. No page implementation starts without this gate.

### Phase 1 — Content, fixture, asset, and state architecture

**Purpose:** Make every later layout honest, repeatable, and testable.

**Work sequence:**

1. Define four product fixtures:
   - Simple in-stock, single-variant product.
   - Multi-glaze or size product with price/image changes and one unavailable combination.
   - Fragile or large product whose packaging changes delivery treatment.
   - Sold-out or enquiry-only product with contextual custom escalation.
2. Define three custom-case fixtures:
   - Individual personalized gift.
   - Corporate branded or volume gift.
   - Hospitality or venue project.
3. Define cart, address, delivery, COD, transfer, confirmation, contact-channel, search, and media-failure fixtures.
4. Create a realistic Vietnamese copy deck using long and short content lengths.
5. Create an asset manifest: source, rights/approval, subject, aspect ratios, focal point, allowed crops, alt-text intent, and failure fallback.
6. Mark any image or case fact that is illustrative, third-party, confidential, missing, or awaiting merchant approval.
7. Define state-transition diagrams for contact, search, variant selection, cart recalculation, delivery calculation, order submission, and confirmation.
8. Choose the deterministic static-state mechanism and document its review URLs.

**Owner input required:**

- Approved custom/corporate case images and publishable project facts.
- Catalog names, SKUs, prices, inventory states, material/care facts, packaging, and retail eligibility.
- Zalo and Instagram destinations.
- Legal business/contact identity.
- Approved policy, delivery, payment, tax/invoice, gift, and notification wording.

The supplied materials may support layout exploration, but they are insufficient to substantiate three real custom cases. Several supplied photos visibly contain third-party identities. Do not label those images as completed HEDY work.

**Gate 1:** Every P0 journey has honest content or a designed limited-content fallback. No completed custom work, maker provenance, price, stock, delivery, policy, or payment value is presented as an approved merchant fact unless its approval is recorded; illustrative test values remain visibly labelled.

**Phase 1 handoff:** [Content, fixture, asset, and state architecture](review/phase-1/README.md), including the canonical `mock-data.js` fixture source, Vietnamese copy deck, asset-rights manifest, state transitions, deterministic review URLs, and executable validation.

### Phase 2 — Shared storefront foundation

**Purpose:** Establish the shell, state language, and interaction primitives that every later page reuses.

**Work sequence:**

1. Consolidate Quiet Ritual tokens for color roles, typography, spacing, borders, elevation, motion, focus, success, warning, error, disabled, pending, and skeleton states.
2. Rework the desktop header and mobile menu so Custom is first, Shop is second, and Contact opens a channel chooser.
3. Rework the footer to include Custom, Shop, Zalo, Instagram, business contact, and complete policy destinations.
4. Define announcement, breadcrumbs, buttons/links, product and case cards, price/availability, fields, error summary, status banner, accordion, dialog/drawer, toast/inline confirmation, skeleton, and empty-state patterns.
5. Build one shared dialog behavior contract: accessible name, initial focus, focus containment, Escape/close, scroll lock, and focus return.
6. Define mobile full-screen variants for navigation, contact, search, and filters.
7. Upgrade cart storage from count/last-product to line items with fixture ID, selected variant, quantity, unit price, and status.
8. Create honest policy/contact route shells so later product and checkout links never point to #, even if final copy is still awaiting approval.
9. Document component names and their default, focus, active, disabled-with-reason, loading, error, success, and pending variants.

**States covered:**

- Header: desktop, scrolled, mobile closed/open, current route, cart count.
- Contact chooser: default, contextual, one channel unavailable, open failure, offline/copy fallback.
- Dialog/drawer: default, long content, keyboard sequence, Escape, backdrop close where appropriate.
- Feedback: inline, live status, toast as secondary confirmation, loading, error, success, pending.

**Gate 2:** The shell works consistently at 360px, 390px, an intermediate width, and 1440px. Keyboard users cannot tab behind an open dialog. Close actions return focus. No completed route points to #. The archive and source materials are unchanged.

### Phase 3 — Primary custom and corporate vertical slice

**Purpose:** Prove the storefront’s primary business outcome before extending commerce.

**Pages:** index.html, custom.html, case.html or the approved equivalent.

**Work sequence:**

1. Recompose Home in this order: custom-first proposition, immediate proof, use cases, selected cases, process/preparation preview, dual-channel consultation CTA, secondary retail preview, story/trust, footer.
2. Create the Custom & Corporate service page with audience/use-case selection, capability and limits, cases, materials/techniques where verified, process, preparation checklist, commercial-guidance fallback, FAQ, trust, and repeated consultation CTA.
3. Create case cards and the approved case-detail pattern with brief, delivered capability, constraints, captions, related proof, separate-quote note, and contextual contact.
4. Pass source context from Home, case, campaign, or later product entries into the contact chooser.
5. Prototype both Zalo and Instagram branches with explicit external-destination language and copyable enquiry guidance.
6. Implement rich, limited-portfolio, failed-media, missing-commercial-guidance, channel-unavailable, open-failure, and offline states.
7. Implement Home states for slow/failed hero media, no publishable cases, no featured products, and a temporary operational announcement without leaving empty section shells.

**Required review scenarios:**

- Individual gift buyer finds relevant proof and chooses Instagram.
- Corporate buyer finds relevant proof and chooses Zalo.
- Reviewer can state what information to prepare.
- Reviewer understands that a message is not an order or confirmed quote.

**Gate 3:** Unassisted reviewers can identify the custom offer within the first two meaningful mobile decisions, find relevant evidence, explain the next step, and use either contact channel. Any illustrative proof is visibly labelled.

### Phase 4 — Retail discovery and search

**Purpose:** Make the secondary shopping path familiar, complete, and recoverable without weakening the custom-first hierarchy.

**Pages:** shop.html, collection.html, search.html.

**Work sequence:**

1. Preserve Shop’s use-based Quiet Ritual discovery model and add a clear explanation of available retail versus custom consultation.
2. Extend Collection with reliable count behavior, sort, optional approved filters, removable applied chips, clear-all, progressive loading/pagination status, and retained return position.
3. Extend product cards for single price, price range, in stock, approved low stock, sold out, retail made-to-order if approved, enquiry-only, and media failure.
4. Keep the shared search entry, then route explicit submissions to search.html.
5. Build Search initial/recent/suggested, typing, loading, mixed results, zero result, empty query, and service-error states.
6. Distinguish product, collection, case/content, and custom-service suggestions.
7. Preserve query/filter context when the user opens a product and returns.
8. Add contextual recovery from zero results to useful collections, Shop, or Custom through either channel.
9. Implement Collection loading, no-match, progressive-load failure/retry, removed-item recovery, and unavailable-image states.

**Gate 4:** A reviewer can browse by use, filter/sort, search explicitly without choosing autocomplete, recover from zero results, and return from a product without losing meaningful discovery context. Result counts and updates are announced accessibly.

### Phase 5 — Product decision and full cart

**Purpose:** Make retail eligibility, variants, availability, price, and delivery uncertainty understandable before checkout.

**Pages:** product.html, cart.html; mini-cart remains optional.

**Work sequence:**

1. Drive Product with all four Phase 1 prototype fixtures; merchant approval remains field-specific.
2. Ensure selected variant updates image, price, SKU, stock/lead time, quantity limit, and retail eligibility.
3. Add unavailable and invalid-combination explanations that work without hover.
4. Add sold-out, enquiry-only, approved made-to-order, missing-media, and price-change-after-carting states.
5. Complete gallery loading/failure, thumbnail overflow, optional zoom/lightbox, captions, keyboard controls, Escape, and focus return.
6. Keep product facts, care, variation, packaging, delivery/returns, related products, and relevant custom proof internally consistent.
7. Add contextual custom escalation for branding, volume, unavailable, or enquiry-only cases without discarding selected product/cart state.
8. Replace the count-only bag model with exact cart lines.
9. Build Cart normal, updating, removal/undo, empty, price change, stock change/unavailable, stale totals, and recalculation-failure states.
10. Show delivery as calculated later or pending; never show zero unless a truly free rule is approved.

**Gate 5:** The route Collection/Search → Product → Cart works at mobile and desktop widths. Add-to-cart increments once, confirmation is both persistent and announced, exact variants and totals survive page changes, and retail versus consultation cannot be confused.

### Phase 6 — Guest checkout and delivery decisions

**Purpose:** Establish a resilient checkout form and make total-cost uncertainty explicit before payment.

**Page:** checkout.html.

**Work sequence:**

1. Build the required information order: contact/recipient → address → delivery → payment → review/consent → submit.
2. Use persistent labels and realistic Vietnamese field lengths.
3. Implement logical validation timing, field-specific correction messages, an error summary that moves focus to the first invalid field, and preservation of all valid values.
4. Invalidate downstream address fields and stale delivery results when upstream address data changes.
5. Build delivery states:
   - Not ready.
   - Calculating.
   - One eligible method.
   - Multiple methods.
   - Zone-table fallback.
   - Manual quote required.
   - Unsupported address.
   - Quote failure with retry/fallback.
   - Expired or stale after address change.
6. Keep address editing available during calculation and prevent selection/submission with stale delivery data.
7. Build a review summary that distinguishes item subtotal, known delivery fee, pending fee, and final total.
8. Preserve checkout input when returning from policy pages or Cart and through all recoverable errors.

**Gate 6:** Reviewers can correct invalid phone/address data, retry a failed quote, and encounter a manual quote without losing valid input. Unknown delivery never looks free or final. The final submit consequence remains visible without a sticky element covering errors or consent.

### Phase 7 — Payment, submission, and confirmation

**Purpose:** Make order, request, and payment states exact enough that the shop owner can validate operations language.

**Pages:** checkout.html, confirmation.html.

**Work sequence:**

1. Add COD with configured eligibility and disabled-with-reason behavior.
2. Add manual bank transfer with clear pre-order explanation; reveal configured instructions only after the mock order exists.
3. Keep any future gateway as a design-system-only variant. Do not display it in the MVP prototype.
4. Change the submit label and review copy for COD, transfer, and manual-delivery request.
5. Prevent duplicate activation and show a visible submitting state.
6. Build deterministic known-creation-failure and uncertain-result recovery without a fabricated order code.
7. Build confirmation variants:
   - COD: order received, exact amount due on delivery, never Paid.
   - Bank transfer: order received, awaiting payment/verification, exact amount/reference/deadline, text and copy alternatives to QR.
   - Manual delivery: request received, fee and final total pending, no payment instructions.
   - Order created but notification failed.
   - Known failure before creation with preserved input and no code.
   - Unknown outcome with safe recovery wording only.
8. Ensure refreshing confirmation never creates another order.

**Required review scenarios:**

- Uninterrupted COD.
- Uninterrupted bank transfer.
- Manual delivery exception.
- Submission failure and safe retry.
- Notification failure after a valid order.

**Gate 7:** Reviewers accurately distinguish received, awaiting payment, awaiting verification, paid, and delivery-fee-pending states. The shop operator approves or explicitly marks pending all operational language. Duplicate submission is prevented and recovery preserves valid work.

### Phase 8 — Trust, editorial, policy, contact, and recovery

**Purpose:** Complete supporting decisions and remove every remaining dead end.

**Pages:** story.html, journal.html, article.html, policies.html, contact.html, 404.html, unavailable.html; lookup.html only if P1 is approved.

**Work sequence:**

1. Build Story/craft with verified origin, makers, process, materials, handmade variation, and routes to Custom and relevant products.
2. If D-17 is approved, build Journal listing and Article with long-form Vietnamese typography, captions, pagination/loading, related commerce/service links, and limited-content treatment.
3. If D-17 is not approved, remove Journal from primary navigation and use the approved evergreen alternative.
4. Replace policy route shells with approved delivery/damage, payment, exchange/return/cancellation/refund, privacy, terms, and business/contact content.
5. Ensure policy content has a clear title, useful anchors, direct support, print/copy-friendly behavior, and contextual return paths.
6. Build general 404 recovery to Home, Custom, Shop, and Search.
7. Build known-unavailable-product recovery that may retain approved basic context and offers related products or Custom.
8. Add Guest order lookup only if D-09 is explicitly moved into scope.

**Gate 8:** All navigation/footer links resolve, required policies are readable outside a modal, unavailable content is not misrepresented as sold out, editorial content has a credible launch state, and all unverified provenance/policy claims remain labelled.

### Phase 9 — System consolidation, validation, and handoff

**Purpose:** Harden the complete storefront after the vertical slices have proven the required components.

**Work sequence:**

1. Consolidate component/state variants and remove one-off styling or interaction drift.
2. Review every P0 page at 360px, 390px, 500px, an intermediate layout width, and 1440px.
3. Verify DOM/focus order, 44px touch targets where practical, contrast, headings, landmarks, labels, alternative text, live announcements, and WCAG 2.2 AA intent.
4. Verify Escape, focus containment/return, reduced motion, safe-area sticky behavior, and horizontal overflow.
5. Audit image dimensions, aspect ratios, loading priority, focal crops, layout shift, failed-media fallbacks, and third-party identities.
6. Verify every relative route and representative back path from a GitHub Pages project-path context.
7. Run the supported JavaScript syntax check and review browser console/resource/font errors.
8. Execute all nine functional-requirement validation scenarios without coaching.
9. Record completion, material errors, hesitation, state comprehension, channel preference, and accessibility observations.
10. Revise when two or more representative participants make the same material error.
11. Update styleIdeas.md with approved page strategy/assumptions and README.md with the complete preview route list and illustrative behavior disclosure.

**Gate 9:** The designer definition of done, repository definition of done, traceability checklist, and shop-owner review are all complete. Remaining production integrations and unapproved data are explicitly listed rather than implied.

## 8. Minimum fixture and state contract

### 8.1 Product fixture fields

Each product fixture needs:

- Short and long Vietnamese name.
- Fixture ID and customer-facing SKU where useful.
- Price or range in VND and variant price changes.
- Retail eligibility, inventory, sellable quantity, and lead-time wording.
- Variant combinations and unavailable reasons.
- Dimensions plus packed shipping profile.
- Material, finish, food/use restrictions, care, and handmade variation.
- Packaging and gift information.
- Delivery/return summary linked to canonical policy content.
- Images in representative aspect ratios, focal point, alt-text intent, and failed-media fallback.

### 8.2 Case fixture fields

Each custom case needs:

- Approved representative imagery and permission status.
- Use case and audience.
- Need or brief.
- Delivered capability/outcome.
- Publishable materials, techniques, constraints, quantity, and timing only where approved.
- Explicit separate-quotation note.
- Related case/product/service.
- Contextual enquiry checklist and contact source label.

### 8.3 Commerce and service fixtures

Define at least:

- Search: suggestions, mixed results, zero, empty query, and error.
- Cart: normal, updating, removal, price change, stock change, stale totals, recalculation failure, and empty.
- Address/delivery: one method, multiple methods, fallback, manual quote, unsupported, service failure, and stale quote.
- Payment: COD eligible/ineligible and transfer awaiting payment/verification.
- Confirmation: COD, transfer, manual quote, notification failure, known creation failure, and unknown result.
- Contact: both channels, each independently unavailable, open failure, and offline copy fallback.
- Content: rich and limited custom portfolio, no featured retail products, failed hero/case/product media, limited Journal, general 404, and known unavailable product.

## 9. Decision dependencies and safe fallbacks

| Decision | Needed by | Safe design behavior before approval |
|---|---:|---|
| D-01 final brand/domain/legal identity | Gate 0 / final sign-off | Preserve flexible Quiet Ritual tokens and use current identity as a working prototype asset |
| D-02 taxonomy and Vietnamese labels | Gate 0 / Phase 4 | Demonstrate a shallow reusable structure; do not invent deep nesting |
| D-03 retail eligibility | Phase 5 | Show in-stock, sold-out, and enquiry-only fixtures; do not put custom-only work in Cart |
| D-05 delivery source, fees, and coverage | Phase 6 | Design every quote/fallback/manual/unsupported state; use clearly illustrative values |
| D-06 COD rules | Phase 7 | Show enabled and disabled-with-reason variants |
| D-07 transfer deadline/verification | Phase 7 | Keep the deadline configurable and say verification is manual |
| D-08 notification channel and email requirement | Phase 6 | Keep email optional unless the approved receipt model needs it; use channel-neutral receipt wording |
| D-09 guest lookup | Phase 8 | Exclude as P1 |
| D-10 gift behavior | Phase 5 / 6 | Show optional note/packaging only; do not promise wrap, requested date, or concealment until approved |
| D-11 tax/invoice treatment | Phase 5 / 6 | Reserve an explanation area without claiming included/excluded tax or invoice behavior |
| D-12 policies | Phase 2 shell / Phase 8 final | Use an honest pending-approval route shell, never invented promises |
| D-13 custom MOQ/lead time/sample/deposit | Phase 3 | Use “confirmed after consultation” rather than invented numbers |
| D-15 gateway | Phase 7 | Component-library placeholder only; no customer-facing MVP option |
| D-17 Journal | Gate 0 / Phase 8 | Prepare a navigation-removal and evergreen-content alternative |
| D-20 contact destinations/order/response | Phase 3 | Equal Zalo/Instagram variants with configurable labels; do not invent response times |

## 10. Phase-to-screen traceability

| Phase | Functional coverage |
|---|---|
| 0 | Complete UI-01–UI-17 map and P0/P1 decisions |
| 1 | Content/data contract and state coverage for all screens |
| 2 | Global shell, navigation, contact chooser, feedback, policy/contact shells |
| 3 | UI-01, UI-02, UI-03, UI-04 |
| 4 | UI-05, UI-06, UI-07 |
| 5 | UI-08, UI-09 |
| 6 | UI-10 through delivery/review states |
| 7 | UI-10 payment/submission and UI-11 |
| 8 | UI-13, UI-14, UI-15, UI-16, UI-17; UI-12 only if approved |
| 9 | Cross-site accessibility, responsive, route, performance, SEO/share, analytics-annotation, and QA coverage |

## 11. Required validation scenarios

Do not consider the plan complete until representative reviewers can perform these tasks without coaching:

1. Find evidence for an individual personalized gift and leave through Instagram with a usable prompt.
2. Find relevant corporate proof and begin a Zalo conversation with quantity, deadline, and location context.
3. Find a retail product, choose the correct variant/quantity, understand delivery, and place a mock COD order.
4. Complete manual bank transfer and explain why the payment is not yet verified.
5. Encounter a manual delivery quote and explain whether an order, payment, or request exists.
6. Recover from an unavailable product to a related item or contextual consultation.
7. Recover from a zero-result search.
8. Correct phone/address validation without losing other checkout input.
9. Retry delivery calculation safely without duplicate order submission.

For each scenario, record task completion, material errors, hesitation, wording misunderstandings, state/next-step comprehension, channel preference, mobile issues, keyboard issues, and changes made from evidence.

## 12. Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Current imagery cannot prove custom/corporate capability | Primary journey appears untrustworthy | Make approved case content a Gate 1 input; use an explicit limited-content state until supplied |
| Third-party brands are visible in source photos | HEDY ownership/endorsement may be implied | Maintain an asset-rights manifest; avoid using such images as HEDY case proof or production-ready assets |
| Unresolved operational facts are presented as real | Owner review becomes misleading | Link every assumption to its D-ID and use visible prototype/pending wording |
| Too many states produce one-off screens | Inconsistent UI and slow maintenance | Use fixture/state matrices, shared component variants, and deterministic state controls |
| Duplicated shell markup drifts across static pages | Navigation and dialog behavior become inconsistent | Keep one documented shell/component contract and run a cross-route audit after every phase |
| Custom and retail CTAs look alike | Customers misunderstand the consequence | Define separate language, hierarchy, and component treatments at Phase 2 and test at Gates 3 and 5 |
| Static checkout looks operational | Reviewers believe orders/payments are real | Add prototype disclosure and deterministic mock outcomes; never open real bank/social/payment flows |
| Responsive work is delayed | Desktop/mobile constraints force late redesign | Resolve mobile, intermediate, and desktop behavior inside every vertical slice |
| Policy pages lag behind checkout | Required consent links become dead ends | Create honest route shells in Phase 2 and replace with approved content in Phase 8 |

## 13. Handoff packet for every phase

Each phase handoff must contain:

- Pages, routes, and components changed.
- Requirement IDs and states covered.
- Default and alternate fixture URLs.
- Real versus illustrative content notes.
- Desktop and mobile screenshots.
- Interaction notes for keyboard, focus, Escape, announcements, persistence, and reduced motion.
- Responsive behavior and image crop/fallback notes.
- Checks performed and known limitations.
- Decision changes or new owner questions.
- A clear pass/fail result for the phase gate.

The next phase begins from the approved handoff rather than reopening the visual direction.

## 14. Deferred follow-on work

The following work does not block the P0 storefront unless product explicitly changes scope:

- Guest order lookup/status under D-09.
- A customer account or order-history area.
- Payment gateway methods under D-15.
- Wishlist, reviews, loyalty, native applications, and on-site product customization.
- Instant custom quotation, custom checkout, sample/deposit tracking, or production tracking.
- A guided gift finder beyond the required retail/custom discovery routes.
- A build system, static-site generator, framework, backend, CMS, or live external integration.

Evaluate the gift finder after the custom, retail, and checkout journeys have been validated. It may become a useful P1 discovery layer, but it must not delay the primary custom consultation or the P0 retail purchase flow.

## 15. Final definition of done

The complete prototype is ready for shop-owner vision validation when:

- Quiet Ritual is still recognizably one coherent storefront.
- Home and navigation are visibly custom-first while retail remains easy to find.
- Both Zalo and Instagram consultation branches are equally usable.
- Custom, COD, bank-transfer, and delivery-exception journeys work end to end with mock data.
- Retail and custom actions cannot be mistaken for each other.
- Unknown delivery is never shown as free or final.
- Order/payment states use exact, non-misleading language.
- Every P0 route has relevant normal, loading, empty, validation, error, unavailable, pending, and success behavior.
- Cart and valid checkout input survive designed recovery paths.
- No account, gateway, on-site customizer, instant custom quote, real messaging, or backend is implied.
- All meaningful images have appropriate Vietnamese alt-text intent, and failed-media behavior is visible.
- Keyboard, focus, Escape, reduced motion, mobile composition, and horizontal overflow checks pass.
- All routes and local assets work from direct preview and a project-path static server.
- JavaScript syntax and browser console checks pass.
- styleIdeas.md and README.md reflect the approved final page strategy and preview inventory.
- The actual shop operator has reviewed custom proof, contact, delivery, payment, policy, and confirmation language.
- Remaining production integrations, content gaps, data assumptions, and P1 work are explicitly documented.
