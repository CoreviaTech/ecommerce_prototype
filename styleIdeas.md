# HEDY ATELIER — Selected Direction and Design Record

This document records the visual-direction exploration and the selected storefront system. The client selected Direction 01, Quiet Ritual. Directions 02–06 remain preserved as design evidence in `archive/visual-directions/` and are no longer candidates for routine storefront implementation.

## Confirmed brand foundation

**Customer-facing name:** HEDY  
**Formal name:** HEDY ATELIER  
**Brand promise:** Quiet Beauty, Lasting Meaning.  
**Category line:** Ceramics · Gifts · Living

The supplied identity combines a fine botanical monogram, a classical high-contrast wordmark, a ceramic-vessel motif, and a handwritten promise. It communicates delicacy, care, femininity, and permanence. Because the complete artwork contains several fine details and lines of text, it should not be compressed into a small navigation logo. The digital system uses it in two ways:

- A closely cropped portion of the supplied monogram accompanies the short name **HEDY** in compact headers.
- The complete **HEDY ATELIER** lockup appears at a generous, readable size in brand and footer contexts.

### Working digital palette

The supplied palette reference is a photographic mood board rather than a set of color swatches. The following working values translate its overall color character into a usable interface system:

- **Porcelain — `#F4EEE5`:** primary page background
- **Linen — `#E6DACC`:** alternate sections and soft surfaces
- **Oat — `#CBB79E`:** gifting areas and larger color fields
- **Clay Taupe — `#A78D72`:** secondary surfaces and quiet emphasis
- **Walnut — `#755943`:** links, highlights, and warm structural accents
- **Espresso — `#443126`:** primary text and high-contrast backgrounds

The palette should feel tonal rather than monochrome. A useful starting proportion is approximately 55% porcelain, 25% linen, 12% oat or clay taupe, and 8% walnut or espresso. Pure white and pure black should be avoided except where an image asset requires them.

Direction 01 uses the light end of the palette to remain soft and intimate. Direction 02 uses the same colors with more espresso, walnut, hard rules, and contrast, keeping the two explorations recognizably related without making them visually identical.

---

## Direction 01 — Quiet Ritual

**Status:** Client selected — active storefront prototype
**Core idea:** Everyday objects can turn ordinary routines into small, meaningful rituals.

### Experience

The current direction presents the shop as a calm, considered collection rather than a conventional product catalogue. It begins with atmosphere and emotion, then gradually introduces collections, products, gifting, the makers, and editorial content.

The storytelling sequence is:

1. **Emotion** — “Beauty for the everyday ritual.”
2. **Point of view** — objects with warmth, irregularity, and a human touch.
3. **Discovery** — tableware, decorative objects, and meaningful gifts.
4. **Commerce** — a focused selection of best-loved products.
5. **Service** — thoughtful wrapping and personal gift notes.
6. **Trust** — the makers, materials, and philosophy behind the objects.
7. **Relationship** — journal content and a gentle newsletter invitation.

### Visual language

- Warm parchment and porcelain backgrounds
- Walnut brown and charcoal for grounding
- Burnt clay as the emotional accent
- Muted moss green for depth and gifting moments
- Generous negative space and asymmetrical editorial layouts
- Soft arches, imperfect circles, and rounded edges inspired by hand-thrown forms
- Large photography with intentional, occasionally surprising crops
- Fine borders and small uppercase labels for structure

### Typography

- **Display:** Noto Serif Display — expressive and literary, with complete Vietnamese diacritics and more reliable stacked-mark spacing
- **Interface:** Be Vietnam Pro — clear, contemporary, and designed for Vietnamese reading at navigation, label, and body sizes
- Italic serif phrases provide warmth and contrast inside headlines
- Small tracked uppercase text is used for section labels and product context

### Interaction and motion

- Restrained scroll reveals
- Slow image scale on hover
- Underline and arrow movement for editorial links
- Horizontal swipe galleries on mobile
- Search overlay and mobile navigation
- Quick add with cart count and confirmation feedback
- Newsletter success state
- Reduced-motion support for accessibility

### Active storefront system

Direction 01 now carries the same calm editorial language through 14 connected P0 routes:

- **Primary custom journey — `index.html`, `custom.html`:** custom and corporate work leads the hierarchy with honest proof boundaries, use contexts, process, preparation, and equal Zalo/Instagram consultation branches.
- **Retail discovery and decision — `shop.html`, `collection.html`, `search.html`, `product.html`:** use-led discovery, deterministic fixtures and states, variant decisions, availability, gifting, and contextual Custom escalation form the secondary shopping path.
- **Purchase and outcome — `cart.html`, `checkout.html`, `confirmation.html`:** exact cart lines, guest delivery decisions, COD or manual transfer, duplicate-safe mock submission, and distinct recovery outcomes complete the static purchase journey.
- **Trust, support, and recovery — `story.html`, `contact.html`, `policies.html`, `404.html`, `unavailable.html`:** limited-provenance storytelling, pending-configuration support and policy content, and honest recovery remove dead ends without inventing merchant facts.

The shared header omits customer-account entry because accounts are outside the MVP. Desktop and mobile navigation, Search, Contact, the prototype bag, feedback, footer, dialog behavior, focus return, Escape behavior, stored mock state, and reduced-motion handling are shared across connected routes.

Product names, prices, SKUs, stock, dimensions, care claims, policy language, delivery timing and fees, payment rules, maker provenance, and contact destinations remain approved only where explicitly recorded. Consequential illustrative or pending values must be replaced or approved against merchant data before production use.

### Accepted prototype implementation path

On 25 August 2026, the Phase 0 recommendations were accepted as the working contract for extending Quiet Ritual:

- Custom/Corporate becomes the primary Home and navigation journey; retail remains the clear secondary path.
- A dedicated Case route is used only for a rich case with approved publishable evidence. Until then, individual, corporate, and hospitality examples use honest limited previews at `custom.html#du-an`.
- Journal and Article leave primary P0 navigation until D-17 has an approved content owner and sustainable cadence.
- Guest lookup and customer-facing payment-gateway flows remain P1. P0 retail uses deterministic COD, manual bank-transfer, and manual-delivery-request states only.
- Zalo and Instagram receive equal access. Destinations, order, owner, and response expectation remain configurable and must not be invented.

Phase 1 established `mock-data.js` as the synchronous prototype fixture contract. It defines four product fixtures, three limited custom-case fixtures, commerce/service states, and deterministic review scenarios while keeping all merchant facts visibly illustrative or pending. Phase 1 did not attach it to the active storefront; Phase 2 begins that sequential adoption.

Phase 2 now gives Quiet Ritual one shared custom-first foundation across every active route. The rendered desktop header places **Đặt riêng & Doanh nghiệp** before **Cửa hàng**, while Contact opens an equal-access Zalo/Instagram chooser. Mobile Navigation, Search, Contact, Cart, and the future Filter surface use a common full-screen/dialog contract with initial focus, focus containment, Escape, scroll lock, inert background, and focus return. The footer reaches Custom, Shop, Contact, and every canonical policy anchor without bare placeholder links.

The new `contact.html` and `policies.html` routes are intentionally honest shells: contact destinations, business identity, response expectations, and policy terms remain visibly pending. No supplied image is used as custom-project evidence.

Phase 3 now applies the custom-first hierarchy to the customer journey. Home opens with the Custom/Corporate proposition and its commercial consequence, then moves through an immediate proof boundary, three use cases, limited case contexts, process/preparation, equal channel handoff, secondary retail, and trust. `custom.html` is now the complete service page rather than a continuity shell: audience selection changes the selected limited case, checklist, and safe Contact context; capabilities and limits, verified-content rules, process, commercial fallback, FAQ, and repeated CTAs stay explicit. Zalo and Instagram can each be selected as prototype branches with clear external-destination language, but no destination opens and no message is sent until HEDY supplies approved configuration.

The rich case composition is implemented only as a locked reviewer pattern because all three case fixtures remain `routeEligible: false`. It names the required brief, delivered capability, material/technique, constraint, caption/proof, related route, and separate-quotation fields without presenting pending values as a completed project. The approved-equivalent decision therefore remains limited previews at `custom.html#du-an`; no `case.html` route is exposed.

All active pages now load `mock-data.js`. The prototype bag persists versioned schema-v2 cart lines containing fixture ID, exact variant ID, quantity, integer illustrative unit price, and line status. It safely ignores the earlier count/name object instead of guessing an exact variant. Full Cart editing, recalculation, totals, delivery, and Checkout remain in their later phases.

Phase 4 now makes the secondary retail path complete without changing the custom-first shell. `shop.html` preserves use-led discovery, calculates its collection/card counts from the Phase 1 fixtures, and explains the difference between a sellable retail fixture and a need that must move to Custom. `collection.html` consumes the same four fixtures for collection selection, current counts, price sorting, approved fixture-field filters, removable chips, clear-all, progressive loading, loading/zero/load-failure/removed-item/media-failure/restored states, and an explicitly reviewable sold-out card variant. Made-to-order retail stays hidden because D-03 is not approved.

`search.html` is now the explicit Search destination. The shared overlay submits there without requiring autocomplete selection. Initial/recent/suggested, typing, loading, mixed, zero, empty-query, service-error/retry, cleared, and restored states distinguish product, collection, limited content, and Custom-service results. The evergreen content entry now links to `story.html` with its limited-provenance meaning intact. Session-scoped discovery context preserves the source URL, filters, sort/load count, and scroll position when the reviewer opens the available multi-variant Product fixture and returns.

Phase 4 retail surfaces use only `img4.jpg`, `img5.jpg`, and `img8.jpg`, which the Phase 1 manifest permits for prototype-only product use. Missing and failed media use Quiet Ritual text placeholders. `img1.jpg`, `img2.jpg`, `img3.jpg`, `img6.jpg`, and `img7.jpg` remain excluded because of visible third-party identity or release risk.

Phase 5 turns Product into the retail-versus-consultation decision point instead of a single ideal SKU. The page resolves all four Phase 1 product fixtures and deterministic overrides from the query, synchronizing image or honest fallback, selected variant, illustrative price, SKU, inventory/lead-time, quantity ceiling, eligibility, and primary action. Unavailable combinations remain visibly explained and disabled; sold-out, enquiry-only, and unapproved made-to-order review states never expose Add to Cart. A keyboard-operable thumbnail strip and optional native lightbox preserve Escape and focus return, while the mobile purchase bar appears only after the main decision controls have passed.

`cart.html` is now the reliable full-cart experience. It reads exact schema-v2 fixture lines, shows variant, snapshot unit price, quantity, line total, availability, and deferred delivery treatment, and supports recalculation, removal/undo, price acknowledgement, stock correction, stale-total retry, recalculation failure, and empty recovery. Consultation remains visually and behaviorally separate and never discards valid cart state. The Checkout control now carries eligible exact lines into `checkout.html`; this transition still creates no order, delivery request, or payment.

Phase 5 continues the Phase 4 asset boundary: only `img4.jpg`, `img5.jpg`, and `img8.jpg` appear as product fixture media. Missing variant/detail/scale/context assets use branded text placeholders or a clearly labelled logo fallback rather than a different product photograph.

Phase 6 establishes one resilient guest Checkout at `checkout.html`. Eligible Cart states now carry their exact lines into a persistent-label recipient and address form, while a versioned session draft preserves valid work through policy visits, Cart returns, validation, address-source errors, and quote recovery. Changing province clears the dependent district/ward and removes the prior quote; any delivery-relevant address or Cart change marks the fee stale before it can be selected or submitted.

The delivery section implements not-ready, calculating, one-method, multiple-method, zone-table fallback, manual-quote, unsupported, quote-failure, and stale states from the Phase 1 contract. The review distinguishes product subtotal, known fee, pending fee, and final total without ever rendering an unknown fee as zero. COD and transfer appear only as labelled Phase 7 review consequences; manual delivery makes payment unavailable. The final controls create no order, request, reference code, bank instruction, or payment in Phase 6.

Phase 7 completes the static purchase outcome at `checkout.html` and `confirmation.html`. Checkout now exposes COD and manual bank transfer as explicit choices only after a current delivery result, including a deterministic disabled-with-reason COD variant. The selected method changes the review consequence and submit label; activation enters a visible locked state, reuses any durable result for the same session submission, and preserves the Checkout draft through known failure or uncertain recovery.

Confirmation treats COD orders, transfer orders, and manual-delivery requests as different result types. COD states show the exact amount due on delivery and never say Paid. Transfer states reveal only synthetic, non-payable instructions after an order result exists, provide text/copy alternatives instead of a live VietQR, and distinguish awaiting payment, awaiting verification, and the future verified Paid state. Manual delivery keeps fee and total pending and exposes no payment instructions. Created-result notification failure retains a valid code; known creation failure and unknown outcome show no fabricated code and use different retry guidance. Refresh only reads a session result or deterministic fixture and cannot create another result.

The supplied photographs have no recorded usage rights or verified product/case mapping. `img1.jpg`, `img2.jpg`, `img3.jpg`, `img6.jpg`, and `img7.jpg` show third-party identity or possible release risks and must not be presented as HEDY products, packaging, or completed work. No supplied photograph currently qualifies as verified custom-case proof. Missing proof uses an explicit limited-content state rather than borrowed product imagery.

Phase 8 gives the storefront a durable trust and recovery layer. `story.html` is the accepted evergreen alternative while D-17 remains open: it frames origin, maker, process, material/variation, scope, source, and publication permission as verification requirements rather than current HEDY claims. Its default, explicitly limited, and media-failure states use code-native Quiet Ritual compositions and no supplied photograph, because the asset manifest cannot prove an atelier, maker, origin, process, material, or completed project.

The shared desktop/mobile navigation, footer, Home trust area, and Search content result now resolve to Story. Journal and Article remain absent rather than presenting a dead link, empty feed, fabricated article date, or publication cadence. Guest lookup remains P1 under D-09.

`policies.html` is now a complete public pending-approval reader rather than a continuity shell. It keeps direct delivery/damage, payment, exchange/return/cancellation/refund, privacy, terms, and business/contact anchors; adds copy feedback, print/save behavior, direct support, and safe journey-return context; and still labels every unapproved policy/identity field. `contact.html` adds direct channel intent previews, page-level preparation copy, and routes back to Custom, Cart, and policies without inventing a destination or response time.

`404.html` provides general recovery to Home, Custom, Shop, Story, Contact, and Search. `unavailable.html` distinguishes known product recovery from case, deferred article, and private/unpublishable content. A permitted fixture name remains visibly illustrative, unavailable never implies Sold out, return timing, reservation, or inventory, and private recovery never echoes the requested fixture value.

Phase 9 consolidates the proven vertical slices without changing Quiet Ritual's selected visual direction or adding a new journey. Shared overlay focus now excludes hidden state controls and completes discrete visibility changes before assigning focus; compact targets, focus/warning contrast, safe-area spacing, and reduced-motion rules are finalized at system level. Primary and deferred media now use explicit priority, exact intrinsic dimensions, fixture focal points, and existing rights boundaries rather than page-specific guesses.

The final browser contract renders all 14 active P0 routes at 360px, 390px, 500px, 768px, and 1440px beneath a simulated project subpath, then executes the nine functional scenarios and shared Navigation/Cart/Contact/Filter/lightbox keyboard contracts. Privacy-safe analytics intent is annotated without collecting data. Every active route remains `noindex, nofollow` until the final domain, legal identity, catalog, policies, rights-cleared media, and share preview are approved. Automated evidence passes; representative comprehension, repeated-error observation, cross-functional traceability, and shop-owner approval remain the Gate 9 boundary.

### What this direction communicates

- Thoughtful rather than trendy
- Premium but approachable
- Handmade without feeling rustic or unfinished
- Suitable for both self-purchase and gifting
- A brand that values longevity, material, and slower living

### Current implementation status

- Phase 2: complete — shared custom-first shell, contact chooser, state primitives, policy/contact shells, and versioned cart-line storage.
- Phase 3: complete — custom-first Home and complete service slice with honest limited proof, contextual preparation, equal channel previews, and deterministic recovery states.
- Phase 4: ready for approval — use-led Shop, fixture-driven Collection, dedicated grouped Search, honest card/media states, and retained discovery context.
- Phase 5: ready for approval — four fixture-driven Product decisions, exact persistent lines, full Cart recalculation/change/recovery states, and deferred delivery treatment.
- Phase 6: ready for approval — guest Checkout draft recovery, logical validation, address invalidation, nine delivery states, exact pending/final totals, policy continuity, and Phase 7 submission boundaries.
- Phase 7: ready for approval — COD/transfer choice, disabled eligibility, submission safety, durable mock results, and exact Confirmation/recovery states.
- Phase 8: ready for approval — evergreen limited-provenance Story, final pending-approval policy/contact readers, 404/known-unavailable recovery, and deferred Journal/Article/Guest lookup decisions.
- Phase 9: ready for approval — shared system consolidation, five-width/project-path validation across 14 P0 routes, nine deterministic scenario rehearsals, 28 final captures, and an explicit human/operator approval boundary.

A guided gift finder and Maker profile remain follow-on opportunities. They must not displace the approved P0 custom, retail, checkout, policy, or recovery work.

---

## Direction 02 — Earthen Modernism

**Status:** Archived at `archive/visual-directions/direction-2.html`
**Core idea:** Ceramics as functional sculpture for a modern home.  
**Mood:** Architectural, grounded, tactile, quietly confident.

This direction would feel more structured and design-led than Quiet Ritual. The products would be treated almost like pieces in an interior-design gallery, with bold grids, close material studies, and strong geometric composition.

### Visual system

- Palette: chalk, limestone, raw umber, oxidized red, and near-black
- Typeface pairing: a precise grotesk such as Neue Haas–style sans with a restrained serif
- Modular grid with clear horizontal and vertical rules
- Oversized product numbers and material labels
- Square corners balanced with occasional circular product crops
- Macro photography focused on glaze, grain, rim, and hand marks
- Minimal icons based on construction drawings and vessel silhouettes

### Storytelling angle

Organize the experience around **form, material, and function**. Products could be introduced through short design notes: why a rim curves a certain way, how a glaze reacts to firing, or how weight changes the feeling of use.

### Signature homepage moment

A full-screen composition in which a vessel overlaps a technical outline, followed by a material index: stoneware, porcelain, earthenware, wood, and textile.

### Best for

- A design-conscious, urban audience
- Higher perceived product value
- Stronger emphasis on interiors and collectible objects
- Expansion into lighting, textiles, or small furniture later

---

## Direction 03 — The Living Table

**Status:** Archived at `archive/visual-directions/direction-3.html`
**Core idea:** The table is where daily life becomes memory.  
**Creative expression:** Gathered Forms
**Mood:** Warm, social, abundant, tactile, lived-in.

This direction moves away from quiet individual contemplation and toward food, hospitality, and connection. It feels like entering a beautiful home just before friends arrive. Soft curves are treated as a material metaphor: frames, buttons, and containers appear gently pressed like clay rather than inflated like digital bubbles. Editorial typography and grounded colors keep the softness mature and premium.

### Visual system

- **Palette:** porcelain `#FFFAF2`, cream `#F7F1E7`, butter `#EFD990`, tomato `#D55F43`, olive leaf `#66704A`, wine `#713843`, soft blue `#ADCBD1`, and warm ink `#392A24`. These are expressive interface colors layered around, rather than extracted exactly from, the supplied photographic mood board.
- **Typography:** Fraunces provides soft, optical-size-aware editorial display type; Nunito Sans provides a friendly humanist interface voice.
- **Geometry:** large organic image masks, compressed pill controls, overlapping circular fields, and asymmetric corner radii echo hand-formed tableware. Curves appear at page, component, and feedback scales.
- **Layout:** layered compositions borrow from informal place settings and recipe books. Images overlap color fields and notes sit like place cards around the table.
- **Photography:** existing product and gift photography stays central, with warm crops that prioritize sets, round vessels, botanical details, and the evidence of sharing.
- **Color proportion:** approximately 42% cream/porcelain, 24% butter, 14% tomato, 10% olive, 6% soft blue, and 4% wine/ink emphasis.

### Storytelling angle

The experience is organized around occasions: **slow breakfast, tea with a friend, shared supper, celebration, and the thoughtful host**. Instead of only selling objects, it shows combinations and rituals customers can recreate. The sequence moves from an emotional invitation, to an interactive occasion edit, to products, thoughtful gifting, and editorial hosting notes.

### Signature homepage moment

An interactive table setting lets customers select slow breakfast, tea with a friend, or shared supper. The image shape visibly resettles while the coordinated pieces, serving count, story, and set price change together.

### Interaction character

- Buttons compress and reshape on hover or press, giving the interface a quiet “squish” response without cartoon bounce.
- Occasion tabs update the complete coordinated table edit and retain clear pressed states.
- Product filters, add-to-bag feedback, search, mobile navigation, newsletter confirmation, Escape handling, and reduced-motion behavior make the direction comparable with Directions 01 and 02.
- Mobile becomes a horizontal shelf of products with intentionally recomposed hero, table-builder, gifting, and story layouts.

### Best for

- Tableware as the primary commercial category
- Bundles and sets
- Seasonal campaigns and recipes
- Strong social and lifestyle content

### Open questions

- The current source photography is product- and packaging-led. A production version would benefit from commissioned lifestyle imagery with visible hands, food, and guests to fully deliver the social promise.
- Validate whether the brighter tomato, butter, and blue accents fit the desired price point across seasonal campaigns.

---

## Direction 04 — Small Joys

**Status:** Archived at `archive/visual-directions/direction-4.html`
**Core idea:** Giving should feel delightful, personal, and easy.  
**Creative expression:** The Gift Note
**Mood:** Charming, optimistic, expressive, personal, gift-led.

This is the most playful direction. It preserves tasteful typography and useful spacing while using brighter color, friendly microcopy, and interactive gift discovery. Its visual metaphor is the pleasure of opening good post: cut paper, stamps, seals, gift tags, checks, dots, and ribbons. Straight-edged layered compositions and graphic pattern distinguish it from Direction 03's organic clay curves.

### Visual system

- **Palette:** warm cream `#FFF5E6`, paper `#FFFAF1`, persimmon `#EB6947`, dusty pink `#E9A8AE`, cornflower `#7F9FD0`, pistachio `#C8D79A`, gift yellow `#F1CC63`, and cocoa `#4B3028`. These are expressive campaign colors developed around, rather than extracted literally from, the supplied neutral photographic mood board.
- **Typography:** Young Serif gives headlines a soft, optimistic editorial voice; DM Sans keeps questions, choices, filters, and product information crisp and approachable.
- **Geometry:** straight-edged paper layers, postage borders, round seals, ribbon bands, and occasional pill controls create a tactile gift-desk composition without repeating Direction 03's soft blob system.
- **Photography:** products are framed like snapshots or objects placed on patterned wrapping paper. Gift sets, boxes, botanicals, and ceremonial details receive priority.
- **Patterns:** dots, checks, stripes, and small floral marks are created in CSS so the supplied source images remain untouched.
- **Color proportion:** approximately 34% cream/paper, 18% yellow, 15% pink, 12% pistachio, 10% cornflower, 7% persimmon, and 4% cocoa structure.

### Storytelling angle

The experience leads with the recipient and feeling rather than the product category: **for the homebody, for the host, for new beginnings, and for no reason at all**. It moves from an emotional invitation, to guided discovery, recipient edits, a shoppable gift shelf, wrapping personalization, and social proof.

### Signature homepage moment

A conversational gift finder asks three quick questions: who is it for, what should it feel like, and what is the budget? It returns a tailored product, edit name, rationale, and price, while preserving Back and Start Again paths.

### Interaction character

- Finder choices advance with a small paper-card lift, update progress, support Back, and create recipient- and budget-specific results.
- Recipient cards, budget filters, product quick-add, cart feedback, search, mobile navigation, newsletter confirmation, and Escape handling keep the direction commercially representative.
- Gift-note mood controls update the handwritten message preview in place.
- Hover motion uses small lifts, registration-like offsets, and rotations; reduced-motion mode removes these transitions.
- Mobile turns the gift shelf into a swipeable row and recomposes the finder, edits, wrapping card, and newsletter rather than shrinking the desktop layout.

### Best for

- Gift-first positioning
- Holiday and occasion campaigns
- Faster product discovery
- Personalization, gift notes, and bundles

### Open questions

- The bright campaign palette is intentionally more expressive than the supplied neutral mood board; validate whether it should be permanent brand behavior or a seasonal layer.
- A production finder would need real inventory, price, recipient, and availability rules instead of the prototype's curated recommendation map.
- Test whether gift-led navigation should remain primary outside peak gifting periods.

---

## Direction 05 — Contemporary Folk

**Status:** Archived at `archive/visual-directions/direction-5.html`
**Core idea:** Traditional craft can feel alive, graphic, and relevant now.
**Creative expression:** The Pattern Atlas
**Mood:** Artisanal, expressive, culturally rich, collected over time.

This direction leans into the pattern, decoration, and ceremonial character visible in some of the supplied product imagery. It has more visual texture and personality than Quiet Ritual while avoiding an overly rustic craft-market aesthetic. Pattern acts as a navigation and storytelling system: customers move through a visual atlas of bloom, line, earth, and knot before meeting the products connected to each field note.

### Visual system

- **Palette:** rice paper `#F3EEE2`, warm paper `#FBF7ED`, indigo `#172B4D`, vermilion `#C84732`, celadon `#A9B9A5`, straw `#D5BD84`, and soot `#272520`.
- **Typography:** Newsreader gives the direction an editorial, slightly calligraphic serif voice; Archivo provides a clean, international interface layer.
- **Geometry:** circular field markers, seal-like stamps, ledger rules, registration grids, and straight-edged image mounts create an archival collection system.
- **Pattern:** CSS-built waves, dots, lines, botanical abstractions, clay speckles, and knots turn the interface into an active motif library without altering the source photography.
- **Layout:** large indigo fields and rice-paper ledgers alternate with collage compositions, offset image mounts, specimen labels, and an intentionally asymmetric product edit.
- **Photography:** patterned tableware, gift knots, natural packaging, botanical linework, and simple forms are presented as related field studies rather than a single matched range.
- **Color proportion:** approximately 35% rice/paper, 30% indigo, 15% soot, 10% celadon, 6% vermilion, and 4% straw accents.

### Storytelling angle

Build the shop around **pattern, tradition, material, and the individual hand**. Each collection can explain its visual language and verified making lineage without presenting craft as frozen in the past. Because no maker or origin records were supplied with the photography, the prototype explicitly labels provenance as a future verification standard rather than inventing cultural claims.

### Signature homepage moment

An interactive “Pattern Atlas” connects four visual field notes—bloom, line, earth, and knot—with an object image, surface, form, and everyday ritual. Selecting a point redraws the editorial entry while preserving a clear pressed state and live update.

### Interaction character

- Atlas markers update the active object study and maintain accessible `aria-pressed` states.
- Collection filters separate patterned pieces, quiet forms, and gift-ready objects without losing the visual field-note system.
- Gift-note controls update the keepsake-card preview in place.
- Product quick-add, cart feedback, search, mobile navigation, newsletter confirmation, Escape handling, focus return, and reduced-motion behavior keep the direction commercially comparable with Directions 01–04.
- Mobile turns the product collection into a deliberate swipeable shelf and stacks the atlas map above its selected field note.

### Best for

- A marketplace containing distinct maker styles
- Patterned and decorated ceramics
- Strong packaging and brand collaborations
- Rich maker stories and cultural context

### Open questions

- Production use requires confirmed maker, region, material, technique, care, and cultural-context records for each product. The current taxonomy is illustrative only.
- Only one supplied image strongly features decorated ceramics. A broader marketplace direction would need more pattern-rich photography and documented maker-process imagery.
- Validate whether indigo and vermilion should become durable brand colors or remain an editorial layer for maker-led collections.

---

## Direction 06 — The Quiet Gallery

**Status:** Archived at `archive/visual-directions/direction-6.html`
**Core idea:** A highly curated shop where every object has room to become desirable.  
**Creative expression:** The Private Exhibition
**Mood:** Minimal, rarefied, serene, collectible.

This is the most premium and minimal direction. Compared with Quiet Ritual, it uses less copy, fewer visible products, slower pacing, and more dramatic restraint. The experience is composed as a private exhibition: an isolated opening object, a brief curatorial statement, four focused rooms, a deliberately small product edit, and a private-view invitation.

### Visual system

- **Palette:** bone `#F0EEE9`, cool white `#FAFAFA`, fog `#D9DAD8`, mist `#AEB3B4`, deep brown-black `#191614`, and gallery blue `#8295A0`. The blue-grey accent is an inferred seasonal note drawn from the cool areas of the supplied photographic mood board, not an extracted brand swatch.
- **Typography:** DM Serif Display provides a sturdy, high-contrast editorial voice; Inter supplies a neutral, highly legible interface layer. DM Serif Display replaced the more delicate Bodoni Moda after the large display settings revealed hairlines that became difficult to read on screen.
- **Geometry:** very large margins, thin rules, straight-edged image mounts, catalog squares, and isolated product compositions replace the more tactile curves and graphic pattern of earlier directions.
- **Layout:** the page alternates near-empty bone rooms with dense brown-black exhibition fields. Product cards are deliberately staggered on desktop and become a composed swipeable shelf on mobile.
- **Photography:** source images are desaturated and framed like displayed works. The solitary bud vase leads; brighter or busier packaging images are reserved for later rooms and gifting.
- **Color proportion:** approximately 42% bone/cool white, 30% brown-black, 18% fog/mist, 7% photography, and 3% gallery-blue emphasis.

### Storytelling angle

Focus on curation and close looking: one object, one story at a time. Copy is short, exact, and materially specific. Because maker and edition records were not supplied with the source photography, the prototype avoids invented provenance and scarcity counts and labels the descriptive material copy as interpretive pending verification.

### Signature homepage moment

An interactive four-room exhibition lets customers move manually through form, ritual, line, and giving. Each selection crossfades the image, title, material, character, availability, price, and short curator’s note while preserving clear pressed states and direct add-to-bag access.

### Interaction character

- Manual room tabs and Previous/Next controls keep the gallery pacing calm and customer-directed rather than auto-rotating.
- Collection filters, quick-add, bag count and feedback, search, mobile navigation, newsletter confirmation, Escape handling, focus return, and reduced-motion behavior keep the direction commercially comparable with Directions 01–05.
- A gift-note selector updates a restrained stationery preview without turning the premium service into a long form.
- Slow fades, fine underline movement, restrained image scale, and selective desaturation make motion feel architectural rather than decorative.
- Mobile uses a full-screen exhibition menu, an intentionally narrow object narrative, and a swipeable collection shelf rather than simply compressing the desktop grid.

### Best for

- Limited editions and artist collaborations
- Higher price points
- A small, tightly edited catalogue
- Establishing a sophisticated art-and-design position

### Open questions

- The current photography contains visible third-party packaging and only one strongly isolated object image. A production version would benefit from consistently art-directed, rights-cleared object studies on neutral backgrounds.
- Confirm real maker, material, edition, availability, and price records before using the proposed catalog-detail system in production.
- Validate whether the cool gallery-blue accent should rotate seasonally or remain the direction's durable signature.

---

## Selection and archive policy

Quiet Ritual is the source of truth for new storefront pages, components, and customer journeys. Extend its established system rather than reopening visual-direction comparison during routine page work.

Directions 02–06 are available through `archive/visual-directions/index.html`. Preserve their HTML, CSS, JavaScript, and distinct visual logic for reference. Do not borrow isolated colors, typography, geometry, or interaction motifs from them unless the client explicitly asks to reconsider or combine directions.

Routine storefront work now proceeds as page-by-page refinement rather than remaining route completion:

1. Define the expectation for the target page and the journey, content, behavior, state, and accessibility contracts that must remain intact.
2. Inspect the current page, its immediate incoming and outgoing routes, and the shared system it consumes before revising the composition.
3. Keep unique changes page-scoped. Carry intentional shared-component, behavior, persistence, or fixture changes through every affected consumer.
4. Validate the revised page at 360px, 390px, 500px, 768px, and 1440px, including affected alternate states and representative cross-route regressions.
5. Update this record only when page strategy, approved assumptions, routes, state contracts, or the selected design system materially change.

Gift finder, verified Maker profiles, Journal/Article, and Guest lookup remain possible follow-on scope. They should be evaluated explicitly rather than treated as unfinished P0 routes.

---

## Principles retained in the selected storefront

New Quiet Ritual pages should preserve these foundations:

- Product photography remains central.
- The interface should feel human and tactile, not mechanically “luxury.”
- Gifting must be a first-class journey, not only a product filter.
- Maker and material information should increase trust and perceived value.
- Navigation and purchasing actions should remain clear despite expressive layouts.
- Mobile layouts should be intentionally composed, not compressed desktop screens.
- Motion should support pacing and feedback rather than act as decoration.
- Accessibility, readable type, useful contrast, and reduced-motion behavior remain part of the design system.
