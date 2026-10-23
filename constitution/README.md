# JUF Design Constitution

**Status:** Draft 0.1 — proposed baseline  
**Applies to:** Jellywebb products, shared UI packages, design assets, and AI-assisted interface work  
**Design language:** Jellywebb Continuum

This constitution defines the decisions that should remain stable across the Jellywebb ecosystem. It is a design and engineering standard, not a demand that every product use identical screens.

## 1. Unity without uniformity
Products should feel related through shared foundations, interaction conventions, accessibility, and quality. Product-specific workflows, audiences, and information density may justify different compositions and emphasis.

## 2. Clarity before decoration
An interface must make its purpose, hierarchy, available actions, and consequences understandable. Decoration must never compete with comprehension. Use visual emphasis intentionally rather than making every element prominent.

## 3. Consistency by default
Use approved JUF tokens, components, patterns, terminology, and interaction behaviour wherever they fit. A local variation must have a reason; repeated variations should be evaluated as candidates for a shared pattern.

## 4. Function determines form
Choose an interface structure based on the user's task, context, risk, frequency of use, and information needs. Do not choose a visual treatment solely because it looks fashionable or resembles another brand.

## 5. Accessibility is foundational
Accessibility is part of definition-of-done, not a later enhancement. Target WCAG 2.2 Level AA for applicable web experiences. Provide semantic structure, keyboard access, visible focus, understandable labels, appropriate contrast, and accessible error and status communication. Combine automated checks with manual keyboard and screen-reader checks where practical.

## 6. Responsive by design
Layouts must account for available space, input method, content length, zoom, and touch targets. Responsive behaviour must preserve task completion and information meaning—not merely shrink a desktop layout.

## 7. Every meaningful state is communicated
Components and workflows must account for relevant states, including default, hover, focus, pressed, disabled, loading, empty, success, warning, error, and unavailable. Do not rely on colour alone to communicate meaning. Consequential actions must make their outcome clear.

## 8. AI follows the same standard
AI-generated interfaces and code are not exempt from JUF. AI tools should use approved tokens and components, preserve established product behaviour, avoid inventing unsupported patterns, and identify uncertainty rather than silently introducing a new convention. See [AI Guidelines](../AI_GUIDELINES.md).

## 9. Changes are governed
Shared tokens, components, and patterns must have documented ownership, rationale, examples, and compatibility implications. Breaking changes require a migration path. Exceptions should be explicit, limited in scope, and reviewable.

## 10. Originality over imitation
JUF may learn from established design systems and platform conventions, but must not copy another company's protected visual identity, proprietary assets, or distinctive presentation wholesale. Jellywebb Continuum must develop its own recognizable visual voice.

## Decision hierarchy
When requirements conflict, resolve them in this order:

1. Safety, privacy, security, and legal obligations.
2. Accessibility and ability to complete the task.
3. Correctness and clarity of information.
4. Product and platform conventions users rely on.
5. JUF consistency and maintainability.
6. Visual preference and decoration.

A lower-level preference must not override a higher-level requirement without an explicit, documented decision.

## Conformance levels
- **Required:** constitutional rules, accessibility fundamentals, semantic states, and security-sensitive interaction expectations.
- **Standardised:** shared tokens, component APIs, common interaction patterns, and content conventions.
- **Configurable:** product themes, density options, layout choices, and brand expression within approved constraints.
- **Exception-based:** a documented deviation required by a specific product, platform, user group, or technical limitation.

## Component contract
Every shared component should document:
- Purpose and appropriate use; when not to use it.
- API, variants, and supported states.
- Keyboard and accessibility behaviour.
- Responsive behaviour and theme support.
- Examples and anti-patterns.
- Automated tests and required manual checks.
- Versioning and migration notes for breaking changes.

## Governance and change process
1. Describe the problem and affected products or users.
2. Propose the change with alternatives and trade-offs.
3. Check accessibility, responsiveness, consistency, and implementation cost.
4. Record the decision and update examples or migration guidance.
5. Validate the implementation before marking the change approved.

Until explicitly approved, a proposal must be labelled **Draft** or **Proposed** and must not be treated as a final token or mandatory implementation.

## Initial adoption boundary
JUF begins with documentation and web foundations. Existing Jellywebb repositories are not automatically in scope for code changes. Each product adoption should be planned separately, preserve existing business logic, and avoid unrelated refactors.
