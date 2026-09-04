# DatabyPassion website strategy and gap audit

**Status:** Recommendation document  
**Prepared:** 4 September 2026  
**Purpose:** Turn the current site into a credible business card for enterprise buyers of digital, data, and AI product consulting.

## Executive verdict

The site already has a distinctive visual identity, a clear four-capability structure, and a useful central idea: enterprise judgement without large-consultancy drag. Those are strong foundations.

It is not yet ready to perform as an enterprise business card. The main problem is not visual polish. It is the gap between the promise and the evidence:

1. All four service pages publicly expose placeholder instructions and placeholder metrics.
2. The primary form simulates a successful submission but does not send the enquiry.
3. The global “AI engagement agent” advertises a disabled “Coming soon” product.
4. The site alternates between “collective,” “studio,” “solo boutique,” “solo practice,” and “freelancer.” A buyer cannot tell what they are buying or how delivery scales.
5. There is no credible work evidence: no case narratives, verified outcomes, testimonials, named senior profiles, or delivery artefacts.
6. The homepage explains capabilities but does not show a primary call to action in the first viewport.
7. Several trust signals are either ambiguous or unsupported: “In production with” above technology logos, “All systems operational” without a status system, absolute confidentiality language, and broad enterprise positioning without procurement facts.

The recommended direction is to position DatabyPassion as:

> A senior-led technology collective that helps enterprises turn high-value digital and AI opportunities into working products, then expand what proves valuable into a managed portfolio.

This preserves the boutique model without presenting it as a single-person delivery risk. It also adds the missing commercial story: start with a sharp problem, prove value quickly, and grow deliberately.

## 1. Business context translated into a website proposition

### 1.1 The business model the site should communicate

DatabyPassion is not a generic software agency, a body shop, or a strategy-only consultancy. The intended model is:

- a small, accountable senior core;
- senior technology, product, data, and AI leaders assembled around the problem;
- direct access to the people making decisions and building the product;
- short decision loops and fast movement;
- an initial, valuable project rather than a large transformation commitment;
- the ability to retain context and grow successful work into a portfolio of products or product initiatives;
- enterprise-grade judgement, governance, security awareness, and handover;
- no invented bench and no unsupported scale claims.

The site currently communicates pieces of this model, but not the complete commercial proposition.

### 1.2 Recommended positioning hierarchy

Use one stable hierarchy everywhere:

**Category**

Senior-led digital and AI product consultancy.

**Core promise**

Turn valuable enterprise opportunities into working products, quickly and responsibly.

**Differentiator**

Senior leaders stay close to the work. A trusted specialist collective scales around the problem.

**Growth model**

Start with one high-value use case. Prove it. Evolve successful products into a coherent portfolio.

**Risk-reduction promise**

Clear scope, visible progress, measurable outcomes, secure delivery, and an explicit path to handover or continued evolution.

### 1.3 Recommended one-line description

> DatabyPassion brings senior technology leaders and specialist teams together to design, build, and scale digital and AI products for enterprises.

An outcome-led alternative:

> We help enterprise teams turn high-value digital and AI opportunities into products that work, prove value, and scale.

Use one version consistently in metadata, the footer, social profiles, proposals, and directory listings.

### 1.4 Recommended hero direction

Keep “Enterprise expertise. Built at startup speed.” as a supporting line, not the entire proposition. “Startup speed” is familiar consultancy language and needs an explanation.

Suggested first draft:

> **Turn digital and AI opportunities into products that perform.**
>
> DatabyPassion is a senior-led technology collective. We work with enterprise teams to shape, build, and scale high-value products—starting focused, moving quickly, and growing what proves valuable.
>
> **Primary CTA:** Discuss a business problem  
> **Secondary CTA:** See selected work

Supporting proof line:

> Enterprise judgement. Senior people in the work. A team that scales around the problem.

Do not publish this wording mechanically. Validate it against the work DatabyPassion can evidence and the buyers it most wants.

## 2. Audit scope and method

The review covered:

- `/`
- `/about`
- `/analytics`
- `/engineering`
- `/ai`
- `/products`
- `/security`
- `/careers`
- `/privacy`
- `/terms`
- shared navigation, footer, contact modal, cookie banner, visual effects, and assistant widget;
- desktop and mobile rendering;
- navigation and interactive service stages;
- generated metadata, sitemap, and robots configuration;
- accessibility, performance, dependencies, and build/lint configuration.

Evidence used:

- manual browser review of every route;
- mobile review of the homepage and a service page;
- source review;
- route and metadata checks;
- axe-core checks of the homepage and `/engineering`;
- a local Lighthouse lab run against the production server;
- `npm audit` and the existing lint command.

The performance numbers in this document are one local lab run, not real-user field data. They are diagnostic signals and should be re-baselined on the deployed domain.

## 3. The buyer and the job of the site

### 3.1 Primary buyer groups

The site should be written for a small number of recognisable enterprise buyers:

- CIO, CTO, CDO, Chief AI Officer, or technology director;
- CPO, digital director, or product leader;
- COO or functional executive with an operational workflow problem;
- data, analytics, engineering, or AI leader who needs senior delivery capacity;
- transformation or strategy leader who needs an idea converted into a working product;
- procurement, security, legal, and architecture stakeholders who validate a preferred partner.

The founder and collective may be the product, but the buyer’s problem must remain the subject of the page.

### 3.2 Questions the site must answer in five minutes

1. What does DatabyPassion do?
2. Is it relevant to my business problem?
3. Why use this firm instead of a large consultancy, an agency, contractors, or my own team?
4. Who will actually lead and deliver the work?
5. Has this team done comparable work?
6. What tangible outcome can an engagement produce?
7. How does a project start?
8. How quickly can I see evidence of progress?
9. Can the team work inside enterprise architecture, security, and procurement constraints?
10. What happens after the first release?
11. What is the commercial and delivery model?
12. How do I contact a real person?

The current site answers questions 1 and 7 partially. It does not answer 3–6 or 8–11 with enough evidence.

### 3.3 The site’s primary conversion

The north-star website action should be:

> A qualified buyer starts a real conversation about a defined business problem.

The site does not need to maximise raw leads. It should help the right buyer self-qualify, reduce perceived risk, and provide one dependable contact path.

## 4. Strengths to preserve

### 4.1 Clear capability map

The four areas—data platforms, analytics and decisions, AI and automation, and digital products—are understandable and mutually reinforcing. They support the portfolio story better than a narrow “AI agency” label would.

### 4.2 Strong anti-hype language

Lines such as “not a demo that dies in a notebook,” “products people actually use,” and “systems you can operate after we leave” speak to real enterprise frustration. Preserve the directness, but pair it with evidence.

### 4.3 Founder accountability

“One studio lead you can email” and direct founder access are useful contrasts to account-heavy consulting. Preserve this while proving that delivery continuity and specialist capacity do not depend on one person.

### 4.4 Honest collective model

“The right experts” and “no invented bench” are credible principles. The next version must explain vetting, accountability, confidentiality, continuity, and realistic scale.

### 4.5 Coherent service-page journey

“Understand → Shape → Build → Evolve” gives buyers a simple delivery model. The interactive stages work on desktop and mobile. Keep the model, simplify the interaction where needed, and add concrete outputs and decision gates.

### 4.6 Trust is addressed early

The site recognises that AI and data buyers care about confidentiality, access, and model training. That is the right topic. Claims need to be precise, supportable, and accompanied by actual operating controls.

### 4.7 Professional responsive foundation

The main layouts adapt well to a narrow viewport, the service stage controls remain usable, and the visual system feels more considered than a generic consultancy template.

## 5. Priority model

Use these priorities throughout:

- **P0 — credibility or lead-loss risk:** resolve before actively sending prospects to the site.
- **P1 — material sales-enablement gap:** resolve in the core repositioning release.
- **P2 — optimisation and scale:** address after the proposition, proof, and contact path are sound.

## 6. P0 credibility and conversion blockers

### 6.1 Public placeholder content on all service pages

**Current state**

The shared service template says:

- “Placeholder workflows — replace with named work when you are ready.”
- “Placeholder metrics until you confirm real numbers.”

Every service page displays em dashes and labels such as “time saved (placeholder).”

**Why it matters**

This is internal drafting language in the public buyer experience. It tells a prospect that the firm knowingly published unfinished sales material. Empty metrics are worse than no metrics because they direct attention to the absence of proof.

**Change**

- Remove both placeholder sections until evidence is ready.
- Keep illustrative engagement patterns, but label them “Typical engagement” or “Example scope,” never “proof.”
- Add only verified metrics with a source and permission.
- If outcomes cannot be published, use anonymised qualitative evidence and concrete deliverables.

### 6.2 Contact form simulates delivery

**Current state**

The “Start a project” form waits briefly, shows “We’ve received your request,” and closes. No email, API, database, CRM, or other delivery path exists.

**Why it matters**

A qualified lead can reasonably believe a request was delivered and wait for a response that will never come. This is not merely a missing feature; it can lose revenue and damage trust.

**Change**

Choose one:

1. Implement a dependable form endpoint with spam protection, consent text, delivery monitoring, and a fallback.
2. Replace the form with a short `mailto:` flow that pre-fills the business problem.
3. Replace it with a scheduling link plus direct domain email.

Until one is live, remove every claim that a request was received.

### 6.3 “AI engagement agent” is an unfinished global feature

**Current state**

The widget appears on every route, animates, opens a chat panel, labels itself an engagement agent, and then says “Coming soon.” The input and send action are disabled. WhatsApp is the only working path.

**Why it matters**

The firm sells digital and AI products. A prominently unfinished AI product undermines the exact capability the site is meant to demonstrate. It also competes with the main CTA and creates visual noise.

**Change**

- Remove the chat shell until it provides real value.
- If WhatsApp is strategically appropriate, use a simple, honest “Message Tiago on WhatsApp” control.
- Do not call a contact shortcut an AI agent.
- Reintroduce an assistant only when it can answer from approved content, disclose its limitations, protect submitted data, hand off reliably, and be monitored.

### 6.4 Identity contradiction: collective versus solo/freelancer

**Current state**

The homepage and About page sell a collective. Security calls DatabyPassion a “solo boutique.” Privacy says it is operated by an individual and “not a registered company on this page.” Terms says “solo practice.” Legal metadata says “Solo / freelancer.”

**Why it matters**

Honesty is necessary, but the current wording creates doubt about legal identity, delivery capacity, insurance, subcontracting, continuity, and procurement readiness. It also contradicts the collective proposition.

**Change**

- Decide the exact legal contracting identity and state it accurately in legal pages.
- Use “founder-led collective” or “senior-led consultancy” in marketing copy.
- Explain how specialists are contracted, vetted, covered by confidentiality and IP terms, and governed by one accountable engagement lead.
- Never imply employees or capacity that do not exist.
- Keep legal truth separate from self-defeating marketing labels such as “freelancer.”

This language should be reviewed by qualified legal counsel for the applicable jurisdiction.

### 6.5 Missing evidence for enterprise experience

**Current state**

The site claims enterprise experience and names Mercer and EY-Parthenon on `/about`, but it has no selected-work narrative, verified outcomes, testimonial, delivery artefact, or senior collective profile.

**Why it matters**

An enterprise buyer is being asked to infer delivery capability from assertions and technology logos. That is not enough for a high-trust consulting decision.

**Change**

Publish at least three evidence units, which may be anonymised:

- a data/platform engagement;
- an AI or automation engagement;
- a digital product or analytics engagement.

Each must distinguish the individual’s role, the client team’s work, the problem, what shipped, the measured or observed outcome, and what happened next.

Do not move Mercer or EY-Parthenon to the homepage. Keep them on `/about` as career context, consistent with the current site guardrail.

### 6.6 Ambiguous or artificial trust signals

**Current state**

- “In production with” sits above third-party technology logos.
- The footer says “All systems operational” without a public status service.
- The security page calls its own commitments “soft commitments.”
- “Your data is always confidential” is absolute language.

**Why it matters**

Buyers may read technology logos as partnerships, certifications, client use, or vendor endorsements. A decorative operational status and imprecise security language can make real trust claims less believable.

**Change**

- Rename the tool strip to “Technologies we work with” only where that is true.
- Remove Cursor and Vercel if they do not help an enterprise buyer assess delivery capability.
- Remove the operational-status indicator or link it to a real status page.
- Replace “soft commitments” with factual, scoped controls.
- Replace absolute claims with contractable language, for example: “Client information is handled under agreed confidentiality, access, retention, and deletion terms.”

### 6.7 Individual Gmail address

**Current state**

The primary direct contact is `tiagopaixaodomingues@gmail.com`.

**Why it matters**

An individual consumer mailbox weakens the business identity and can create avoidable procurement, deliverability, and continuity concerns.

**Change**

- Configure a domain mailbox such as `tiago@databypaixao.com` or `hello@databypaixao.com`.
- Publish a named direct contact and a monitored general fallback.
- Configure SPF, DKIM, and DMARC.
- Keep the personal mailbox only as an internal recovery path.

### 6.8 Known vulnerable production dependency

**Current state**

`npm audit` reports three high-severity vulnerable packages through `next@16.2.9`. The reported fixed path is a newer Next.js release.

**Why it matters**

A consultancy making security claims should not knowingly leave a directly declared framework on a vulnerable release.

**Change**

- Review the advisories against the actual deployment configuration.
- Upgrade Next.js and related packages to the latest compatible patched release.
- Run the complete build and route tests after the upgrade.
- Add automated dependency review and a defined patching owner.

## 7. Strategic messaging gaps

### 7.1 The value is still described as things built, not business change

The homepage leads with data systems, workflows, and digital products. Those are outputs. Enterprise buyers buy changes such as:

- faster decisions;
- lower operating effort and error;
- new digital revenue or service channels;
- shorter product cycle time;
- safer AI adoption;
- modernised platforms with lower risk and cost;
- better customer or employee experiences.

**Change**

Organise the story as:

> Business opportunity → product or platform intervention → measurable operating outcome.

Keep the four capabilities as supporting mechanisms.

### 7.2 “Helping companies” is too broad

“Companies” does not signal enterprise context, buying situations, or areas of authority.

**Change**

Use “enterprise teams” where true and state the situations in which DatabyPassion is most useful:

- a high-value idea lacks an accountable route to production;
- an AI pilot needs to become a governed workflow;
- data foundations block decisions or product delivery;
- an internal process needs a real product rather than another spreadsheet;
- an existing product needs senior intervention to unlock its next stage.

### 7.3 “Startup speed” is not yet substantiated

Speed can sound like haste, low governance, or generic agency language.

**Change**

Explain the mechanism:

- senior decision-makers stay in the work;
- small team and direct client access;
- scoped first release;
- explicit decision gates;
- weekly demonstrations;
- reuse of proven delivery patterns;
- no account-management relay.

Use “speed through seniority and focus,” not speed as a standalone claim.

### 7.4 The portfolio growth model is absent

The intended land-and-expand model is one of the most differentiating parts of the business, but the site stops at “Evolve.”

**Change**

Add a simple progression:

1. **Frame one valuable opportunity.**
2. **Ship the smallest credible product.**
3. **Measure value and operational fit.**
4. **Strengthen or stop based on evidence.**
5. **Expand successful products and shared capabilities into a portfolio.**

Clarify that “portfolio” means coordinated products and product initiatives, not indefinite consultant dependency.

### 7.5 The collective is a claim, not yet an operating model

“Specialists around the problem” is attractive but leaves practical questions:

- Who are they?
- What seniority do they have?
- How are they selected?
- Who contracts them?
- Who owns quality and deadlines?
- How is client information isolated?
- What happens if someone becomes unavailable?
- How large can a team realistically become?

**Change**

Add a concise collective operating model and named profiles only for people who have agreed to appear. State roles, relevant experience, location/time-zone coverage, and engagement responsibility. Do not invent a standing team.

### 7.6 The site does not define fit

Trying to cover all enterprise data, AI, analytics, and digital product needs can look unfocused.

**Change**

Add “Best fit” and “Not the right fit” language.

Example:

**Best fit**

- a high-value problem with an accountable executive sponsor;
- a product or workflow that can show evidence in a focused first release;
- a client team willing to work directly with senior practitioners;
- a need that crosses product, data, engineering, and AI boundaries.

**Not the right fit**

- commodity staff augmentation;
- an RFP designed only to compare day rates;
- a request for unsupported AI claims;
- a transformation with no empowered product owner;
- a requirement for certifications or delivery scale the collective does not hold.

## 8. Recommended homepage architecture

The homepage should work as a complete business card. A new route is not required for the first revision; selected work can initially be a homepage section while the existing route set remains unchanged.

### 8.1 Navigation

Recommended:

- Work
- Capabilities
- How we work
- Collective
- Trust
- About
- Discuss a problem

On smaller screens, preserve all links, indicate menu state with `aria-expanded`, close on Escape, and return focus to the menu button.

The visible EN switch can remain as required, but should not behave like an actionable switch if no other language exists. Label it “Language: English” and avoid misleading interaction.

### 8.2 Hero

The first viewport should contain:

- the category;
- an outcome-led headline;
- a one-sentence explanation of the collective;
- one primary CTA;
- one evidence-oriented secondary CTA;
- one compact proof statement.

The current hero has no CTA. A visitor must scroll to act.

### 8.3 Buyer-problem section

Replace generic capability-first framing with three or four buying situations:

- turn an AI opportunity into a governed workflow;
- launch a digital product connected to real enterprise systems;
- repair the data foundation blocking decisions and product delivery;
- convert operational work into a measurable internal product.

Each should link to the relevant existing service page.

### 8.4 Selected work

Show two or three anonymised case cards:

- client context, without identifying details if not cleared;
- business problem;
- DatabyPassion/founder role;
- team shape;
- what shipped;
- verified result or honest qualitative outcome;
- expansion from first use case to subsequent product, if applicable.

Do not use empty metric cards.

### 8.5 Why this model

Use three proof-backed differentiators:

1. **Senior from first call to release** — decision-makers remain in delivery.
2. **A team shaped around the problem** — a small accountable core plus vetted specialists.
3. **Built to prove and expand** — focused first value, measurable evolution, portfolio continuity.

Avoid six cards that repeat the same founder/collective idea.

### 8.6 Capabilities

Keep the four current capability cards, but rewrite each around:

- the buyer problem;
- the product or system delivered;
- representative outcomes;
- a direct link.

Technology tags should remain secondary.

### 8.7 Engagement path

Show what happens after a prospect makes contact:

1. a short fit call;
2. a focused discovery or opportunity framing;
3. a proposed first outcome, team, decision gates, and commercials;
4. delivery with visible demonstrations;
5. scale, handover, or stop based on evidence.

This makes the CTA less risky.

### 8.8 Collective

Introduce the accountable lead and the model. Link to `/about` for:

- founder biography;
- selected senior profiles;
- principles;
- governance of the collective;
- career experience, including Mercer and EY-Parthenon only on that page.

### 8.9 Enterprise trust

Use concise factual statements on the homepage and link to `/security`:

- NDA and contractual confidentiality available;
- least-privilege access;
- client-approved tools and environments;
- no use of client data for unrelated model training;
- retention/deletion agreed per engagement;
- specialist confidentiality and IP obligations;
- DPA/subprocessor information where applicable.

Only include controls that are operationally true.

### 8.10 Final CTA

Use one promise and two dependable paths:

> Tell us the business problem, what is blocked, and what would make it worth solving.

- **Primary:** Discuss a business problem
- **Secondary:** Email Tiago

Add an honest response expectation only if it can be met.

## 9. Page-by-page change plan

### 9.1 `/`

**Keep**

- visual confidence;
- current four-capability map;
- enterprise-versus-startup tension;
- concise trust entry point;
- founder access.

**Change**

- add CTA and proof in the hero;
- lead with business outcomes, not a catalogue of build outputs;
- add selected work;
- explain the initial-project-to-portfolio model;
- condense repetitive collective cards;
- rename or remove the technology marquee;
- remove the global unfinished assistant;
- remove decorative operational status;
- reduce competing motion and visual controls;
- make direct contact use the business domain.

### 9.2 `/about`

**Keep**

- founder-led accountability;
- “Understand → Shape → Build → Evolve”;
- restrained use of Mercer and EY-Parthenon as founder career context;
- transparent statement that there is no invented bench.

**Change**

- add a professional founder profile: full name, role, concise biography, headshot, LinkedIn, location, and relevant operating experience;
- distinguish employment/career experience from DatabyPassion client work;
- add named collective profiles only with consent and current availability wording;
- explain selection, contracting, quality ownership, continuity, security, and IP;
- replace weak statistics such as “4 solution areas” and “1 founder you can email” with meaningful evidence;
- explain realistic team shapes;
- explain how a first engagement can become a portfolio without creating lock-in.

### 9.3 `/engineering`

**Change**

- remove placeholder copy and metrics;
- describe the buying triggers: unreliable data, slow source onboarding, platform cost/risk, migration, product-data constraints;
- state concrete outputs: architecture decision record, data contracts, tested pipelines, observability, runbooks, cost model, handover;
- add one verified or anonymised example;
- clarify supported cloud/data patterns without turning the page into a tool list;
- state how client platform and security teams participate.

### 9.4 `/analytics`

**Change**

- remove placeholder copy and metrics;
- centre decisions, operating cadence, and adoption rather than dashboards;
- define outputs: decision map, metric contracts, semantic layer, operating pack, forecasting process, experiment readout;
- show an example of a disputed or slow decision improved by the work;
- distinguish executive analytics, product analytics, and planning where relevant;
- avoid claiming business impact caused by analytics unless attribution is defensible.

### 9.5 `/ai`

**Change**

- remove placeholder copy and metrics;
- separate AI opportunity framing, workflow automation, assistants/copilots, predictive systems, and agentic workflows;
- add feasibility and stop criteria;
- explain evaluation, grounding, human review, traceability, monitoring, model/vendor choice, data boundaries, and fallback;
- show one production-shaped example, even if anonymised;
- explain when conventional automation is preferable to generative AI;
- link specific controls to `/security`;
- remove the unfinished assistant from the global shell so this page is not contradicted by the product experience.

### 9.6 `/products`

**Change**

- remove placeholder copy and metrics;
- position product leadership and delivery, not only website/web-app implementation;
- show discovery, service design, product strategy, UX, architecture, build, instrumentation, and iteration;
- distinguish customer-facing products from internal products;
- explain ownership and roadmap after launch;
- connect products to enterprise systems, data, AI, security, and change adoption;
- show how one product can become a coherent portfolio.

### 9.7 `/security`

**Keep**

- no false SOC 2 claim;
- least-privilege principle;
- no unrelated training on client data;
- willingness to put obligations in the contract.

**Change**

- remove “solo boutique,” “soft commitments,” and absolute confidentiality language;
- state the legal/service-provider identity accurately;
- organise the page under governance, access, data handling, AI/model use, development practices, incident handling, continuity, retention/deletion, and subprocessors;
- distinguish current controls from controls agreed per engagement;
- explain whether work occurs in client-controlled or DatabyPassion-controlled environments;
- explain specialist access and confidentiality;
- provide a security contact;
- provide an NDA/DPA path where applicable;
- state certifications factually without making the absence of one the headline;
- have security and legal claims reviewed by qualified professionals.

### 9.8 `/careers`

The route currently adds little to a prospect’s decision and says there are no roles.

**Change**

- keep the required route, but remove Careers from prominent navigation/footer placement until there is a real hiring proposition;
- if the collective recruits independent specialists, explain how expressions of interest work without implying employment;
- do not route potential client work through a careers page.

### 9.9 `/privacy`

**Current gaps**

- says the form processes and retains fields even though the form does not send them;
- refers to a consent “cookie (or local storage)” when the implementation uses local storage;
- says a language preference is remembered, but the current language control does not set one;
- exposes internal release-state commentary;
- uses an individual Gmail address;
- does not fully identify the controller or provide standard business details;
- gives imprecise Vercel transfer wording.

**Change**

- describe only actual processing;
- identify every local-storage key and its purpose where useful;
- document analytics only after a real tool and consent model exist;
- identify controller, contact, legal bases, recipients/processors, transfers/safeguards, retention periods, rights, complaint route, and policy-change process as applicable;
- remove internal implementation commentary;
- obtain legal review.

### 9.10 `/terms`

**Current gaps**

- the page is too thin to establish reliable website terms;
- it advertises placeholder claims elsewhere on the site;
- legal identity is unclear;
- “solo practice” conflicts with the collective positioning.

**Change**

- identify the site operator accurately;
- cover permitted use, intellectual property, third-party links, site availability, disclaimers, liability boundaries, governing law, updates, and contact as applicable;
- clarify that engagement terms are governed by a separate signed agreement/SOW;
- remove all references to public placeholders after those placeholders are removed;
- obtain legal review.

## 10. Evidence and case-study system

### 10.1 Evidence hierarchy

Use the strongest evidence available in this order:

1. verified client outcome with permission;
2. anonymised outcome with enough context to be credible;
3. named testimonial with permission;
4. specific shipped artefact or architecture/product example;
5. founder career evidence, clearly attributed;
6. process claim supported by an example;
7. technology familiarity.

Technology logos are not substitutes for delivery evidence.

### 10.2 Case-study template

Every case should contain:

1. **Context** — industry, operating situation, and relevant scale band.
2. **Problem** — what was blocked and why it mattered.
3. **Starting point** — systems, process, constraints, and baseline where known.
4. **Role** — exactly what the founder/collective owned.
5. **Team** — client and DatabyPassion roles; do not claim others’ work.
6. **Intervention** — key product, data, architecture, or operating decisions.
7. **What shipped** — a concrete product, platform, workflow, or capability.
8. **Evidence** — verified metric, observed change, adoption, or decision reached.
9. **Risk and governance** — security, compliance, migration, or operating constraints.
10. **What happened next** — stop, handover, extension, or portfolio expansion.

### 10.3 Evidence register

Maintain a private source-of-truth table with:

- claim;
- source;
- owner;
- measurement definition;
- date range;
- client approval status;
- allowed wording;
- allowed channels;
- expiry/review date.

No metric should enter the website without this record.

### 10.4 Evidence without client names

Confidentiality does not require an empty site. Safe options include:

- “European wealth-management organisation”;
- architecture diagrams redrawn without proprietary details;
- before/after operating patterns;
- anonymised product screenshots with permission;
- a delivery timeline and decision gates;
- quantified outcomes expressed as a range if approved;
- a signed anonymous testimonial attributed by role and sector;
- founder-authored technical notes based on generalised lessons.

Avoid faux case studies, composite stories presented as real, and invented numbers.

## 11. Offer and engagement design

The current site lists capabilities but not purchasable starting points.

### 11.1 Recommended entry offers

Use offers only if they match real delivery practice.

**Opportunity framing**

- define the business outcome;
- map users, workflow, data, architecture, and risks;
- identify feasibility and stop criteria;
- produce a first-release recommendation and investment case.

**Product proof**

- build the smallest production-credible slice;
- integrate real data and systems;
- establish evaluation and adoption measures;
- recommend scale, rework, or stop.

**Product build**

- multidisciplinary senior team;
- product, design, data/AI, and engineering delivery;
- working releases and visible demonstrations;
- operational readiness and handover.

**Portfolio evolution**

- retain product and architecture context;
- strengthen successful products;
- prioritise adjacent opportunities;
- share platform capabilities and governance;
- add or release specialists as the portfolio changes.

### 11.2 Commercial clarity

The public site does not need a rate card, but it should explain:

- whether work is fixed-scope, time-and-materials, retainer, or a combination;
- typical team shapes;
- minimum viable engagement, if one exists;
- what the client must provide;
- how changes are handled;
- ownership of IP and work product at a high level;
- whether the collective can contract directly with large enterprises.

Do not publish artificial “starting at” pricing unless it helps qualification and remains accurate.

## 12. Conversion design

### 12.1 CTA language

“Start a project” assumes the buyer is ready and makes an exploratory conversation feel like a commitment.

Test more appropriate language:

- Discuss a business problem
- Talk to a senior lead
- Explore an opportunity
- Request a fit call

Use one primary phrase consistently.

### 12.2 Form design

If a working form is implemented, ask only what is needed for the first response:

- name;
- work email, while allowing legitimate non-corporate addresses;
- organisation;
- “What are you trying to change?”;
- optional timing or urgency;
- optional procurement/security constraint;
- privacy acknowledgement.

The current form asks for first name, last name, business email, company, title, industry, and function but does not ask about the problem. It optimises lead classification before buyer value.

Do not reject Gmail and other personal domains automatically. Senior buyers, founders, advisors, and people between systems may use them legitimately. Flag them internally if needed.

### 12.3 Response and fallback

- Send an acknowledgement only after durable receipt.
- State the expected response window only if it is monitored.
- Alert on delivery failures.
- Provide domain email as a visible fallback.
- Preserve submitted text if an error occurs.
- Do not close a successful submission before the buyer can read confirmation.

### 12.4 Contact channel hierarchy

Recommended order:

1. working short enquiry form or scheduling flow;
2. named domain email;
3. LinkedIn;
4. WhatsApp, only if it matches enterprise buyer expectations.

## 13. Enterprise trust and procurement readiness

### 13.1 Facts buyers will eventually request

Prepare a concise supplier fact sheet covering:

- legal contracting entity;
- registered address and jurisdiction;
- registration and VAT/tax details where applicable;
- professional and cyber insurance where held;
- primary and continuity contacts;
- standard MSA/SOW process;
- NDA and DPA availability;
- IP ownership and open-source policy;
- specialist/subcontractor model;
- security-control summary;
- subprocessors and hosting;
- data location and transfers;
- incident notification;
- business continuity and key-person mitigation;
- accessibility approach;
- ESG or supplier-code requirements where relevant.

Not all of this belongs on the homepage. The website should signal readiness and make the detail available during qualification.

### 13.2 Explain key-person risk

Founder-led should mean accountable, not fragile.

Explain:

- how knowledge is documented;
- how repositories and credentials remain client-controlled where possible;
- who can provide continuity;
- how specialists are replaced;
- how delivery status and decisions are visible to the client;
- how handover works.

### 13.3 Security claim discipline

Use four labels internally:

- **Current control:** always operating today.
- **Engagement control:** configured and agreed for a particular client.
- **Planned control:** not yet operating; do not market as current.
- **Not held:** certification or capability the firm does not have.

Every public security sentence should map to one of these.

## 14. Brand, visual design, and experience

### 14.1 Own the visual system

The repository describes the visual system as cloned from another site/template. A consultancy selling digital products should develop recognisable brand assets and interaction patterns of its own.

**Change**

- retain the disciplined dark palette if it reflects the brand;
- create original layout, motion, illustration, and diagram patterns;
- remove remnants and comments tied to the source visual system;
- establish a small documented design system;
- ensure the site demonstrates the restraint expected in enterprise product work.

### 14.2 Reduce decorative competition

The fixed ticker, continuously animated logo marquee, network canvas, palette dots, moving tooltip, exploding assistant control, and scroll reveals all compete for attention.

**Change**

- keep one signature motion concept;
- pause moving content on hover/focus and fully respect reduced-motion preferences;
- make palette selection a purposeful demonstration or remove it from the sales navigation;
- prefer diagrams that explain the business model over ambient effects;
- keep the CTA visually dominant.

### 14.3 Improve visual hierarchy

Long dark pages with repeated card grids can make every section feel equally important.

**Change**

- alternate editorial narrative, evidence, diagrams, and cards;
- shorten repeated capability copy;
- give selected work more visual weight than principles;
- use real people and artefacts where approved;
- make section labels descriptive to non-technical executives;
- make CTA placement predictable.

### 14.4 Do not disable text selection

The global stylesheet disables text selection across the body, then partially re-enables it for legal content and inputs.

**Why it matters**

Prospects cannot easily copy a service description, email, or sentence into an internal note. This is hostile to normal browser behaviour and assistive workflows.

**Change**

Remove global `user-select: none`. Restrict it only to controls where selecting text would genuinely interfere with interaction.

## 15. Accessibility gaps

Automated axe checks found 75 issue instances on the homepage and 50 on `/engineering`. Counts include repeated instances, not 125 unique root causes.

### 15.1 Contrast

The automated checks flagged 10 homepage instances and 31 service-page instances. The `--text-dim` colour measures approximately:

- `3.08:1` on the darkest background;
- `2.78:1` on cards.

That fails WCAG AA for normal-sized body text. It is used extensively in cards, the footer, forms, and supporting labels.

**Change**

- define AA-compliant text tokens;
- target at least `4.5:1` for normal text and `3:1` for large text and relevant UI boundaries;
- test all accent/background combinations;
- do not rely on low contrast to create hierarchy.

### 15.2 Form labels

Visible labels are not programmatically connected to inputs and selects. Axe flags both selects as unnamed.

**Change**

- add stable `id` values;
- connect every label using `htmlFor`;
- group related fields;
- connect errors with `aria-describedby`;
- announce submission errors and success;
- retain native validation semantics where useful.

### 15.3 Modal semantics and focus

The contact modal:

- has no `role="dialog"` or `aria-modal="true"`;
- does not expose a labelled title;
- does not trap focus;
- does not move focus into the modal;
- leaves the closed, transparent form in the document with focusable controls;
- does not restore focus to the invoking control.

**Change**

Render only while open or use `hidden`/`inert`; implement dialog labelling, focus management, Escape handling, focus return, and background inertness.

The assistant dialog moves focus to its close button but also needs a complete focus trap and background handling if retained.

### 15.4 Landmarks and heading order

Axe reports content outside landmarks and non-sequential headings:

- there is no `<main>` wrapper around page content;
- service cards jump to `<h4>`;
- footer headings use `<h5>`;
- modal content sits outside a meaningful region.

**Change**

- add a skip link;
- wrap route content in `<main id="main-content">`;
- use `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, and `<footer>` intentionally;
- use headings to represent document structure, not visual size;
- style semantic headings with classes.

### 15.5 Keyboard and focus visibility

The stylesheet defines few explicit focus-visible states. Inputs remove the native outline and replace it only with a border-colour change. Hover-only text such as “View practice” is not equivalently revealed for keyboard focus.

**Change**

- add a consistent, high-contrast `:focus-visible` ring;
- mirror every hover affordance on focus;
- ensure all controls have a minimum usable target;
- test the entire site with keyboard only.

### 15.6 Mobile menu semantics

The hamburger uses only an accessible name. It does not expose expanded state or control relationship.

**Change**

- add `aria-expanded` and `aria-controls`;
- label open and close states;
- close on Escape and route change;
- manage focus;
- prevent hidden menu links from entering the tab order.

### 15.7 Motion

Some components respect `prefers-reduced-motion`, but the implementation should be audited as one system.

**Change**

- stop the ticker, logo marquee, canvas movement, animated reveals, assistant effects, and automatic carousels for reduced motion;
- allow pause for persistent movement;
- avoid delaying content visibility behind JavaScript animation;
- test with reduced motion enabled before release.

## 16. SEO and social-discovery gaps

### 16.1 Domain and canonical identity

The metadata base and sitemap use the temporary Vercel domain.

**Change**

When the business domain is ready:

- redirect every alternate host to one HTTPS canonical host;
- update `SITE_URL`;
- emit per-page canonical URLs;
- update sitemap, robots, social profiles, directory listings, and analytics;
- verify the domain in Google Search Console and Bing Webmaster Tools.

### 16.2 Repeated descriptions

Every route currently inherits the same generic meta description.

**Change**

Write a distinct title, description, canonical, and Open Graph description for each service and company page. Titles should reflect the buyer need, not only the internal service label.

### 16.3 Missing rich identity

The rendered homepage has no JSON-LD and no canonical link. It also has no configured Open Graph image. A favicon request returns `404`.

**Change**

- add original favicon/app icons;
- add a branded social-sharing image;
- add `Organization` or `ProfessionalService` structured data only with accurate legal/contact facts;
- add a `Person` entity for the founder on `/about`;
- connect `sameAs` profiles;
- add service schema only where useful and accurate;
- validate with search-engine rich-result tools.

### 16.4 Sitemap freshness

The sitemap hard-codes one date for all routes.

**Change**

Use actual content modification dates or omit `lastModified` if the project cannot maintain it accurately.

### 16.5 Content strategy

Do not add a high-volume blog that the collective cannot maintain. Prefer a small set of durable decision assets:

- an enterprise AI opportunity scorecard;
- a guide to moving an AI pilot into a governed workflow;
- a product-to-portfolio operating model;
- a data-platform decision brief;
- anonymised delivery notes with concrete lessons.

Each asset should support a buyer question and a real sales conversation.

## 17. Technical quality and performance gaps

### 17.1 Baseline performance

One mobile Lighthouse lab run produced:

- Performance: `53`
- Accessibility: `89`
- Best Practices: `96`
- SEO: `100`
- Largest Contentful Paint: `7.8 s`
- Total Blocking Time: `980 ms`
- Time to Interactive: `11.9 s`
- Cumulative Layout Shift: `0`

The homepage `<h1>` was the LCP element. Main-thread work measured `9.5 s` in this run, and the report estimated about `48 KiB` of unused JavaScript.

**Interpretation**

The server response and layout stability were good, but client-side work and animation delayed readiness. A simple business-card site should not require this much main-thread activity.

**Change**

- set a performance budget;
- make core content visible without animation;
- limit global client components;
- pause or remove continuous canvases and timers;
- load decorative effects only where they add sales value;
- profile GSAP and canvas work on mid-tier mobile hardware;
- re-run Lighthouse on the deployed domain and add real-user Core Web Vitals.

Suggested initial targets:

- LCP below `2.5 s` at the 75th percentile;
- INP below `200 ms` at the 75th percentile;
- CLS below `0.1`;
- minimal long tasks during initial interaction;
- JavaScript budget justified component by component.

### 17.2 Global animation cost

The global shell runs:

- a full-screen canvas with hundreds of nodes;
- repeated animation frames;
- pointer and resize listeners;
- GSAP/ScrollTrigger;
- ticker and logo animations;
- assistant timers and animation;
- scroll reveal behaviour.

**Change**

- make the hero illustration static by default or cap frame rate and node count;
- stop animation outside the viewport or when the tab is hidden;
- avoid initialising homepage-only effects on every route;
- use CSS for simple transitions;
- test cleanup across route changes;
- avoid making a visual demo compete with conversion.

### 17.3 CSS maintainability

`globals.css` contains repeated definitions for the footer, ticker, buttons, nav, user-select rules, breakpoints, and page-specific blocks. “Last wins” comments indicate cascade conflicts are being patched rather than designed.

**Change**

- split tokens, base styles, shared components, and route-specific modules;
- remove dead styles;
- consolidate breakpoints;
- create one source of truth for buttons, navigation, footer, typography, and cards;
- add visual regression coverage for shared components;
- format CSS for reviewability.

### 17.4 Type and effect maintainability

The main effects module begins with `@ts-nocheck` and contains large minified-style imperative blocks.

**Change**

- type the canvas models and event handlers;
- split network, reasoning, and scroll effects;
- add unit coverage for pure calculations;
- isolate browser lifecycle code;
- ensure all listeners, timers, animation frames, and ScrollTriggers are cleaned up.

### 17.5 Lint is not a quality gate

The ESLint configuration exports an empty array. The current `npm run lint` scans generated `.next` files and fails on missing rule definitions rather than checking application code.

**Change**

- configure the supported Next.js flat ESLint setup;
- ignore `.next`, build artefacts, coverage, and dependencies;
- enable TypeScript and React/Next rules;
- make lint pass locally and in CI;
- add `tsc --noEmit` if the build is not the chosen typecheck gate.

### 17.6 Missing automated product tests

There are no visible tests for:

- route rendering;
- navigation;
- contact handling;
- consent persistence;
- service-stage interaction;
- mobile menu;
- metadata;
- accessibility.

**Change**

Add proportionate coverage:

- component tests for contact validation and consent;
- browser smoke tests for all required routes;
- keyboard and accessibility checks for navigation/dialogs;
- metadata assertions;
- one end-to-end lead-delivery test once the form is real.

### 17.7 Security headers and operational controls

The Next.js configuration defines redirects but no explicit security headers.

**Change**

Evaluate and configure:

- Content Security Policy;
- HSTS on the canonical HTTPS domain;
- `X-Content-Type-Options`;
- `Referrer-Policy`;
- permissions policy;
- frame-ancestor restrictions;
- secure handling for any future form endpoint;
- rate limiting, validation, spam controls, and logging.

Verify what Vercel already supplies before adding duplicate or conflicting headers.

### 17.8 Console and asset completeness

Lighthouse reports a missing `/favicon.ico`.

**Change**

Add complete icon metadata and verify that every referenced asset returns `200` on a fresh build, not only a warmed local build.

## 18. Analytics and learning plan

Analytics are currently not wired. That is preferable to pretending consent or measurement exists, but the repositioned site needs a small learning loop.

### 18.1 Events worth measuring

- primary CTA view and click;
- selected-work view;
- service page visit;
- service-stage interaction only if it informs content;
- contact start;
- contact validation failure;
- durable contact submission;
- scheduling click;
- mailto click;
- qualified conversation, recorded in the CRM;
- source/campaign.

### 18.2 Metrics that matter

- qualified conversations per relevant visitor;
- percentage of conversations matching best-fit criteria;
- selected-work-to-contact progression;
- service page to contact progression;
- lead delivery success;
- response time;
- opportunity creation and influenced pipeline;
- buyer objections heard in calls.

Avoid optimising time on page, raw animation interactions, or traffic without buyer quality.

### 18.3 Consent and privacy

- keep non-essential analytics off until consent where required;
- document the actual provider and processing;
- honour “Essentials only” technically;
- make changing consent possible;
- do not claim a cookie when using local storage;
- keep measurement proportionate to a low-volume consultancy site.

## 19. Prioritised implementation roadmap

### P0 — credibility repair

1. Remove every public placeholder instruction, placeholder label, and empty metric.
2. Remove the simulated form success or connect the form to dependable delivery.
3. Remove the unfinished AI assistant; optionally retain a plainly labelled WhatsApp link.
4. Decide and document the legal contracting identity.
5. Align “founder-led collective” language across marketing and legal pages without obscuring legal facts.
6. Configure a business-domain email.
7. Remove or correct ambiguous logo, status, and security claims.
8. Add at least one credible evidence unit; do not wait for a perfect case-study library.
9. Patch the vulnerable framework dependency.

### P1 — proposition and sales enablement

1. Rewrite the homepage around enterprise outcomes, senior delivery, and product-to-portfolio growth.
2. Put a CTA and evidence path in the hero.
3. Add selected work to the homepage.
4. Explain the collective operating model and key-person mitigation.
5. Package clear entry offers and engagement progression.
6. Rewrite all four service pages around buying triggers, outputs, outcomes, evidence, and risk.
7. Rebuild `/security`, `/privacy`, and `/terms` from current operating facts with professional review.
8. Add distinct metadata, canonical URLs, social imagery, structured identity, and favicon.
9. Fix high-impact accessibility issues.
10. Establish working lint, type, route, and browser quality gates.

### P2 — optimisation and authority

1. Add further case evidence and cleared testimonials.
2. Publish a small library of durable buyer decision assets.
3. Add privacy-respecting analytics and CRM attribution.
4. Reduce global animation and meet performance budgets.
5. Refactor the global CSS and effects architecture.
6. Add visual regression and ongoing accessibility checks.
7. Consider a dedicated `/work` route only after updating the agreed route map and collecting enough evidence to justify it.
8. Test proposition and CTA variants using qualified-conversation quality, not click volume alone.

## 20. Suggested implementation tickets

These can be executed independently after the required business decisions are made:

1. **Content safety pass:** remove placeholders, internal release commentary, simulated status, and unfinished product UI.
2. **Lead path:** select provider, implement delivery, add monitoring, simplify fields, and update privacy text.
3. **Identity foundation:** canonical business name, legal identity, domain, domain email, social handles, and contact owner.
4. **Proof sprint:** evidence register plus three anonymised case narratives.
5. **Homepage narrative:** hero, buying situations, work, collective model, portfolio path, trust, and CTA.
6. **Service-page redesign:** one evidence-capable shared template and four service content sets.
7. **Collective page:** founder profile, operating model, approved profiles, continuity, and career context.
8. **Trust pack:** security page, supplier facts, NDA/DPA path, privacy, terms, and professional review.
9. **Accessibility remediation:** landmarks, headings, contrast, forms, dialogs, keyboard, focus, motion, and automated checks.
10. **Technical hardening:** framework patch, lint/type configuration, tests, headers, favicon, metadata, and performance budget.
11. **Design-system cleanup:** remove duplicated CSS, isolate effects, and create original brand patterns.
12. **Measurement:** consent-aware events, CRM source capture, and qualified-conversation reporting.

## 21. Release acceptance criteria

### Positioning

- A new visitor can state what DatabyPassion does, for whom, and why the model is different after a five-second and a one-minute review.
- “Senior-led collective” has one consistent meaning across the site.
- The initial-project-to-portfolio model is visible and understandable.
- Marketing copy does not misrepresent the legal entity, team, clients, partnerships, scale, or certifications.

### Evidence

- No placeholder or internal drafting language is public.
- Every metric has a documented source and approval.
- At least three evidence units cover more than one capability, or the site clearly limits itself to the evidence currently available.
- Founder career experience is clearly distinguished from DatabyPassion client work.

### Conversion

- A primary CTA appears in the first viewport.
- Every CTA reaches a working, monitored destination.
- The site never reports success before durable lead receipt.
- A domain email provides a visible fallback.
- Contact asks about the buyer’s problem, not only demographic classification.

### Trust

- Legal identity and contact facts are accurate.
- Security claims map to operating controls or engagement-specific commitments.
- The collective’s specialist, confidentiality, IP, and continuity model is explained.
- Privacy text matches actual data collection, storage, analytics, and form behaviour.
- No false status, certification, partnership, or endorsement is implied.

### Accessibility

- All core routes pass automated critical/serious accessibility checks, with documented manual exceptions.
- Normal text meets WCAG AA contrast.
- The site is usable by keyboard only.
- Dialogs have correct semantics and focus behaviour.
- Reduced-motion mode removes persistent and non-essential movement.
- Content remains usable without client-side animation.

### Engineering

- `npm ci`, lint, typecheck, tests, and `npm run build` pass in CI.
- Required routes return `200`; redirects are intentional.
- No high/critical production dependency vulnerability remains without a documented risk decision.
- Metadata, canonical URLs, sitemap, robots, favicon, and social preview are verified on the deployed canonical domain.
- Performance meets the agreed lab budget and is monitored with field data after traffic is sufficient.

## 22. Decisions and inputs required from the business

The implementation should not invent answers to these:

1. What is the exact legal contracting entity today?
2. Which domain and business email will be canonical?
3. Which buyer role and two or three buying situations are highest priority?
4. Which sectors can be named as experience without overstating current specialisation?
5. Which three engagements can be described, even anonymously?
6. Which outcomes are measured and approved for publication?
7. Which people are genuinely part of the collective, and who agrees to be named?
8. How are specialists contracted, vetted, secured, and replaced?
9. What team sizes and engagement shapes can be delivered reliably?
10. What is the smallest commercially sensible entry engagement?
11. Does the firm want WhatsApp to be a public enterprise contact channel?
12. Which contact system will be monitored and owned?
13. Which security controls operate today?
14. What insurance, DPA, NDA, MSA, SOW, IP, and continuity materials exist?
15. Where does client work normally run: client environments, DatabyPassion environments, or both?
16. What is the realistic promise for response time?
17. What does “grow into a portfolio” mean commercially and operationally?

## 23. Recommended immediate content stance

Until the inputs above are complete, publish less and make every published statement true:

- one clear proposition;
- three or four capabilities;
- one honest founder/collective explanation;
- one or more credible anonymised work examples;
- one factual trust summary;
- one working contact path.

A concise, evidenced business card will convert better than a larger site containing placeholders, simulated products, or claims that require the buyer to fill in the gaps.
