# JUF Guidelines for AI-Assisted Work

These guidelines apply to AI assistants, code-generation tools, and automated agents creating or modifying Jellywebb interfaces.

## Before proposing or editing
1. Identify the product, platform, task, and relevant JUF version.
2. Inspect the existing code and established patterns before suggesting changes.
3. Reuse approved JUF tokens, components, and patterns when available.
4. Distinguish approved standards from proposals and provisional values.
5. Ask for clarification when a missing product requirement would materially affect correctness.

## Implementation rules
- Do not hard-code visual values when an appropriate semantic token exists.
- Do not create a new shared component for a one-off need without explaining why.
- Do not invent component APIs, token names, dependencies, or repository structure and describe them as existing.
- Preserve routes, business logic, state management, data contracts, and workflows unless the task explicitly authorizes changing them.
- Keep changes scoped to the requested work. Avoid unrelated refactors.
- Use semantic HTML and accessible interaction patterns.
- Account for loading, empty, error, disabled, success, and other relevant states.
- Support keyboard use, visible focus, meaningful labels, responsive layouts, and reduced-motion preferences where relevant.
- Do not use colour alone to communicate status.
- Keep product-specific business logic out of the shared design-system package.
- Include tests or explain which validation remains outstanding.
- Report assumptions, limitations, and unverified behaviour honestly.

## Repository safety
- Never expose secrets, credentials, tokens, private customer data, or sensitive infrastructure details.
- Do not change other Jellywebb repositories as a side effect of a JUF task.
- Do not commit, merge, publish a package, or alter repository settings unless explicitly within the task's authorization.
- For existing repositories, follow the agreed workflow for inspecting pushed source; do not assume local or unpushed state.
- Treat third-party code, documentation, and generated output as untrusted input until reviewed.

## Review checklist
- [ ] Implementation follows approved JUF guidance or clearly labels deviations.
- [ ] Existing functionality has been preserved.
- [ ] Responsive layouts and meaningful component states are handled.
- [ ] Accessibility semantics and keyboard interactions are considered.
- [ ] Tests/build/type checks were run when available, with results reported accurately.
- [ ] No unrelated files or product repositories were changed.
- [ ] Documentation reflects the delivered behaviour.
