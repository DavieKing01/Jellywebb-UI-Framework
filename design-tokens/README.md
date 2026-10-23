# Design Tokens

Design tokens are named, reusable decisions about visual and interaction properties. They are the portable source of truth for JUF across web and future platform implementations.

## Rules
- Prefer semantic names such as `color.text.primary` and `color.action.primary` over names tied only to a hue.
- Keep raw palette values separate from semantic roles.
- Components should consume semantic tokens rather than hard-coded brand colours.
- Define light and dark themes through token mappings, not separate component implementations.
- Document token purpose, contrast implications, and examples.
- Do not treat the illustrative values below as approved production values.

## Jellywebb Continuum — provisional exploration palette

| Token candidate | Example value | Intended role |
|---|---|---|
| Brand orange | `#E96300` | Brand emphasis and primary actions after contrast validation |
| Deep ink | `#172033` | Strong text and dark interface surfaces where appropriate |
| Soft canvas | `#F5F6F8` | Neutral page background |
| Pure surface | `#FFFFFF` | Cards and elevated content surfaces in light theme |
| Slate | `#64748B` | Secondary text or neutral UI, subject to contrast checks |
| Success | `#176B52` | Semantic success indication, paired with text or an icon |

These values are starting points for exploration only. Test contrast and use cases before promoting them to stable tokens. One orange value should not automatically be used for text, backgrounds, borders, and focus indicators alike.

## Proposed token groups
- Color: raw palette, semantic roles, status roles, borders, focus, overlays.
- Typography: family, size, weight, line height, letter spacing.
- Spacing: consistent base rhythm with documented exceptions.
- Shape: radius and border width.
- Elevation: shadows and layer ordering.
- Motion: duration, easing, reduced-motion behaviour.
- Layout: content widths, breakpoints, and density.
- Interaction: focus rings, target sizing, and state treatments.

## Implementation direction
Keep the token specification framework-neutral. Web output can use CSS custom properties, with optional typed exports for React and TypeScript packages. Tailwind integration may consume tokens, but Tailwind configuration must not become the only source of truth.

## Promotion process
1. Propose token names and values.
2. Show examples in realistic interfaces, including dense business workflows.
3. Check contrast, dark theme, responsive use, and interaction states.
4. Record approval and any deprecation or migration rules.
