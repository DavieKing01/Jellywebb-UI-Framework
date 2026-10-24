# Design Tokens

Design tokens are named, reusable decisions about visual and interaction properties. They are the portable source of truth for JUF across web and future platform implementations.

## Rules

- Prefer semantic names such as `color.text.primary` and `color.action.primary` over names tied only to a hue.
- Keep raw palette values separate from semantic roles.
- Components should consume semantic tokens rather than hard-coded brand colours.
- Define light and dark themes through token mappings, not separate component implementations.
- Document token purpose, contrast implications, and examples.
- Do not treat proposed values as approved production values until the promotion process is complete.

## Jellywebb Continuum - provisional exploration palette

The proposed direction combines Jellywebb orange, royal blue, and an orange-to-purple signature gradient. Royal blue is the default primary-action direction; orange and gradient treatments remain optional variants.

| Token candidate | Example value | Intended role |
|---|---|---|
| Brand orange | `#FF7A18` | Brand identity and selected accents |
| Deep orange | `#B84B00` | Optional high-contrast orange action variant with white text |
| Royal blue | `#2563EB` | Default primary action in light and dark themes |
| Purple | `#6D5AE6` | Signature gradient and selected brand moments |
| Vivid purple | `#D946EF` | Signature gradient highlight |
| Deep ink | `#172033` | Strong text and light-theme foreground |
| Soft canvas | `#F8FAFC` | Light-theme page background |
| Pure surface | `#FFFFFF` | Light-theme cards and elevated content |

These values remain proposed. Check contrast and realistic use cases before promoting them to stable tokens. A single brand hue should not automatically be used for text, backgrounds, borders, and focus indicators alike.

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

## Color foundation

The proposed color foundation is documented in [`specifications/COLOR.md`](specifications/COLOR.md).

- **Token source:** [`tokens/color.json`](tokens/color.json)
- **CSS output:** [`generated/css/color.css`](generated/css/color.css)
- **Generator and validation:** [`../scripts/generate-color.mjs`](../scripts/generate-color.mjs)
- **Default primary action:** royal blue `#2563EB` with white text.
- **Fallbacks:** brand orange, deep orange, and a selective orange-to-purple gradient.
- **Status:** Proposed; visual direction approved for further review, but tokens are not yet approved for production adoption.

From the repository root, run:

```bash
node scripts/generate-color.mjs
node scripts/generate-color.mjs --check
```

The generator uses Node.js built-in modules only. Edit `tokens/color.json` rather than generated CSS directly. The generator validates palette and semantic colors, checks the declared contrast pairs, and writes CSS custom properties for light and dark themes. Gradient text must be validated against the actual rendered gradient area.

## Typography baseline

The proposed typography baseline is documented in [`specifications/TYPOGRAPHY.md`](specifications/TYPOGRAPHY.md).

- **Token source:** [`tokens/typography.json`](tokens/typography.json)
- **CSS output:** [`generated/css/typography.css`](generated/css/typography.css)
- **Default typeface:** Inter, with Arial and generic sans-serif fallbacks.
- **Status:** Proposed baseline; values require validation before production adoption.

The JSON file defines the framework-neutral typography values. The CSS file provides the corresponding `--juf-` custom properties for web implementations.

## Typography generation and validation

From the repository root, run:

```bash
node scripts/generate-typography.mjs
node scripts/generate-typography.mjs --check
```

The generator validates the typography token structure and regenerates `generated/css/typography.css`. Check mode verifies that generated CSS matches the JSON source without changing files. The generator uses Node.js built-in modules and requires no third-party dependencies.

Edit `tokens/typography.json` rather than editing generated CSS directly. Before committing token changes, regenerate CSS and run check mode for the relevant token group.
