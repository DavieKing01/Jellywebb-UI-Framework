# JUF Typography Specification

**Status:** Proposed baseline
**Design language:** Jellywebb Continuum
**Default typeface:** Inter

## 1. Purpose

Typography must support clear reading, predictable hierarchy, accessible interfaces, and efficient work across Jellywebb products. The system is designed for both information-dense business applications and general product interfaces.

## 2. Font family

The default font family is Inter.

```css
font-family: Inter, Arial, sans-serif;
```

Inter is the default, not a permanent restriction. Platform implementations may provide approved overrides while preserving the semantic type scale and hierarchy.

## 3. Type scale

| Token | Size | Intended use |
|---|---:|---|
| `text-xs` | 12px | Compact metadata and supporting labels |
| `text-sm` | 14px | Secondary text, form labels, dense controls |
| `text-md` | 16px | Default body text and inputs |
| `text-lg` | 18px | Emphasized body text |
| `heading-sm` | 20px | Small section headings |
| `heading-md` | 24px | Standard section headings |
| `heading-lg` | 30px | Page headings |
| `heading-xl` | 36px | Major page or presentation headings |

These are proposed defaults. Components may use documented exceptions where the interface requires them.

## 4. Font weights

- `regular`: 400
- `medium`: 500
- `semibold`: 600
- `bold`: 700

Use weight to establish hierarchy. Avoid using bold for entire dense sections when spacing and structure would communicate the information more clearly.

## 5. Line height

- Compact: 1.25
- Standard: 1.5
- Relaxed: 1.65

Choose line height according to content and context. Long-form text should remain comfortable to read; compact controls may use tighter values.

## 6. Implementation rules

1. Semantic tokens are the public interface; components should not depend on arbitrary raw values.
2. CSS custom properties are the initial web output format.
3. Keep token definitions framework-neutral.
4. Do not require every product to load the font from a third-party service at runtime.
5. Validate typography at narrow widths, browser zoom, and increased text sizes.
6. Preserve readable contrast and clear focus indicators.
7. Test dense tables, forms, transaction histories, dashboards, and onboarding screens.

## 7. Adoption

This specification establishes the proposed JUF baseline. Production adoption and changes to existing Jellywebb products require a deliberate integration decision.