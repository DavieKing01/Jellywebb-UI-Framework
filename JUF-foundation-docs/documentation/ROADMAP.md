# JUF Implementation Roadmap

This roadmap separates design decisions from implementation so the framework does not accumulate components before its rules are clear.

## Phase 1 — Constitution and repository foundation
- [x] Create the public JUF repository.
- [x] Draft the constitution.
- [x] Establish Jellywebb Continuum as the proposed design-language name.
- [x] Define provisional token principles and AI guidance.
- [ ] Review and approve the constitution.
- [ ] Decide the repository licence and contribution policy separately from visibility.
- [ ] Establish branch protection and review requirements for `main`.

**Exit condition:** core rules and governance are approved, and draft decisions are clearly distinguished from approved standards.

## Phase 2 — Visual foundation
- [ ] Validate brand and semantic colour roles.
- [ ] Define typography, spacing, shape, elevation, motion, and focus tokens.
- [ ] Specify light and dark themes.
- [ ] Prototype representative screens: dashboard, data table, transaction history, and form.
- [ ] Test dense business information alongside simpler consumer-facing layouts.
- [ ] Validate accessibility, contrast, zoom, and responsive behaviour.

**Exit condition:** foundations work in realistic screens and are documented before becoming implementation defaults.

## Phase 3 — JUF Core and web package
- [ ] Choose package tooling and supported React/TypeScript versions.
- [ ] Implement framework-neutral token sources and CSS custom properties.
- [ ] Establish accessible primitive conventions and component API rules.
- [ ] Build initial components: button, text input, select, checkbox, status badge, dialog/drawer, and table primitives.
- [ ] Add unit, interaction, accessibility, and visual regression checks where appropriate.
- [ ] Publish usage examples and versioning guidance.

**Exit condition:** components are reusable, tested, themed, documented, and free of product-specific business logic.

## Phase 4 — Controlled product pilot
- [ ] Select one product and one bounded interface area.
- [ ] Record current behaviour and visual baseline.
- [ ] Replace only the agreed presentation layer with JUF components.
- [ ] Preserve routes, business logic, state management, and existing workflows unless separately approved.
- [ ] Compare accessibility, consistency, regressions, and developer effort.
- [ ] Document findings before expanding adoption.

**Exit condition:** a pilot demonstrates value without unrelated refactors.

## Phase 5 — Ecosystem adoption
- [ ] Define product theme mappings such as CBS and AcecorePay.
- [ ] Document product-specific extension rules.
- [ ] Introduce AI-assisted compliance checks and reusable prompt guidance.
- [ ] Add platform-specific implementation guidance when needed.
- [ ] Plan native, mobile, and desktop implementations only when a real product need justifies them.

**Exit condition:** multiple products share a coherent foundation while retaining appropriate product-specific workflows.

## Delivery principles
- Prefer small, reviewable changes over broad rewrites.
- Do not modify existing product repositories during the foundation phase.
- Never present provisional palette values as approved design decisions.
- Keep accessibility and regression checks in the definition of done.
- Record trade-offs and exceptions rather than relying on undocumented convention.
