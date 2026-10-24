# JUF Color Specification

**Status:** Proposed, pending component review and final approval
**Design language:** Jellywebb Continuum

## 1. Purpose

The JUF color system separates raw palette values from semantic roles. Components should consume semantic tokens so themes and future platform outputs can change without rewriting component styles.

## 2. Brand direction

- Jellywebb orange `#FF7A18` is the recognizable brand accent.
- Royal blue `#2563EB` is the default primary-action background in both light and dark themes.
- Deep orange `#B84B00` is an optional fallback action treatment when orange needs white foreground text on light surfaces.
- The orange-to-purple gradient is a selective brand treatment, not a default for everyday actions.
- Success, warning, danger, and information each have separate semantic colors.

## 3. Semantic roles

Light and dark themes define canvas, surface, raised surface, primary/secondary/muted text, border, primary and secondary actions, links, focus, statuses, and disabled controls. Keep the same semantic role across themes even when the underlying color differs.

## 4. Contrast and interaction-state policy

- Target WCAG 2.2 AA contrast: at least 4.5:1 for normal text and 3:1 for large text.
- Essential component boundaries and visual indicators should meet at least 3:1 against adjacent colors where WCAG requires it.
- Do not use bright brand orange as small text on a white surface without validating contrast.
- Hover, focus, active, selected, disabled, and error states must remain distinguishable; color must not be the only indicator of state.
- Focus indicators must be visible in both themes and not be clipped.
- Disabled controls are exempt from some WCAG contrast requirements, but should remain discernible and must not resemble active controls.
- Gradients are decorative surfaces. Any text over a gradient must be tested against the actual rendered gradient area, not only its endpoints.

## 5. Primary action

The default primary action is royal blue `#2563EB` with white text. The proposed hover color is `#1D4ED8`, also with white text. Use a clearly visible focus ring separate from the button fill. Disabled styles must lower emphasis without appearing interactive.

Orange and gradient actions remain optional variants and should be used consistently by documented context, not interchangeably for the same action class without a reason.

## 6. Validation before adoption

1. Run `node scripts/generate-color.mjs` to validate the token structure, contrast pairs, and generate CSS.
2. Run `node scripts/generate-color.mjs --check` to verify generated output is current.
3. Review examples in realistic interfaces, including dense data tables, forms, dashboards, transaction history, and onboarding.
4. Check both themes and default, hover, focus, selected, disabled, success, warning, danger, and information states.
5. Record approval before treating the proposed palette as stable production tokens.
