---
name: Persistech Aurum
colors:
  background: '#F7F4EC'
  surface: '#FFFFFF'
  surface-container-low: '#FBF8F1'
  surface-container: '#F1ECE0'
  surface-container-high: '#E7DFCE'
  on-surface: '#14120C'
  on-surface-variant: '#4A4436'
  outline: '#DCD4C2'
  outline-variant: '#E9E2D4'
  primary: '#A8811F'
  on-primary: '#14120C'
  primary-container: '#F0D060'
  on-primary-container: '#4A3A08'
  secondary: '#14120C'
  on-secondary: '#F7F4EC'
  secondary-container: '#E7DFCE'
  on-secondary-container: '#2E291D'
  tertiary: '#5D5A50'
  on-tertiary: '#FFFFFF'
  executive: '#0E0E0D'
  executive-surface: '#171715'
  on-executive: '#F5F1E6'
  on-executive-muted: '#B9B1A0'
  gold-600: '#A8811F'
  gold-500: '#B8952A'
  gold-400: '#D4AF37'
  gold-200: '#F0D060'
  ink-muted: '#726B5C'
  success: '#2E6B45'
  warning: '#9A6410'
  error: '#A3362B'
  info: '#315C7A'
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.05'
    letterSpacing: -0.03em
  display-lg:
    fontFamily: Sora
    fontSize: 52px
    fontWeight: '600'
    lineHeight: '1.06'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Sora
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.15'
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.25'
  headline-sm:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.18em
rounded:
  sm: 2px
  DEFAULT: 4px
  md: 6px
  lg: 10px
  xl: 16px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 96px
---

# Design System: Persistech Aurum

## 1. Visual Theme & Atmosphere

Persistech is an established Angolan technology partner: infrastructure, licensing, cloud, security, support and digital platforms. The brand promise is "Expandimos limites" — expanding limits through precise, dependable technology. The visual system should feel **engineered, assured and quietly premium**, never flashy fintech or generic SaaS.

The signature is a **light-first "warm ivory and ink" editorial corporate** language, punctuated by **deep executive black bands** and a disciplined **brushed-gold accent**. Dark and gold remain the brand's identity, but dark is used as a structural counterpoint — hero side panels, statistics strips, the footer and one CTA band per page — not as the default page mode. Every page opens on warm ivory so the content stays approachable, legible and bright.

Design character:

- **Warm, not sterile.** Paper-like ivory surfaces and warm charcoal ink. Avoid cool blue-greys.
- **Engineered, not decorative.** Hairline rules, 4px radii, tabular numerals and tiny monospaced labels reference technical documentation and the segmented geometry of the Persistech monogram.
- **Gold as a precision tool.** Gold marks the primary action, the active nav item, a thin top seam on featured cards and small brand details. It is never a large background wash or body-text colour.
- **Editorial calm.** Asymmetric two-column heroes, generous 96px section rhythm, restrained imagery in chamfered frames, and a clear reading order.

Avoid: pure-white glare, blue/purple gradients, pill-shaped everything, floating glass cards on light backgrounds, neon glows, stock "cyber" hexagons, badges with status dots, and full-dark pages.

## 2. Color Palette & Roles

### Primary Foundation

- **Warm Ivory (`#F7F4EC`)** — default page canvas. The system's home surface; light by default.
- **Paper White (`#FFFFFF`)** — cards, forms and raised content sitting on ivory.
- **Sand (`#FBF8F1`)** — alternating section bands and inset panels; a half-step warmer than paper.
- **Parchment (`#F1ECE0`)** — secondary panels, table headers, image placeholders.
- **Pale Stone (`#E7DFCE`)** — highest light surface tier and disabled fills.
- **Hairline (`#DCD4C2`)** — the single border tone for cards, dividers and inputs. Always 1px.

### Executive Dark

- **Executive Black (`#0E0E0D`)** — deep brand bands, footer, and the right-hand panel of the home hero.
- **Executive Surface (`#171715`)** — cards and nested panels inside dark sections.
- **Ivory on Black (`#F5F1E6`)** — primary text on executive surfaces.
- **Muted Gold on Black (`#B9B1A0`)** — secondary text and metadata on dark.

Dark bands must occupy no more than roughly 30% of any page and must never wrap the whole viewport.

### Accent & Interactive

- **Persistech Gold 600 (`#A8811F`)** — accessible gold for text links, icons, active labels and small accents on light surfaces.
- **Persistech Gold 500 (`#B8952A`)** — primary button fill and the main brand accent. Pairs with Ink text.
- **Persistech Gold 400 (`#D4AF37`)** — hover, focus rings and the bright end of the logo gradient.
- **Persistech Gold 200 (`#F0D060`)** — highlight glints, thin decorative segments and the pale end of the gradient. Never a large fill.

Gold gradient for brand marks only: `#A8811F → #D4AF37 → #F0D060`.

### Typography & Text Hierarchy

- **Ink (`#14120C`)** — headlines and primary body text on light surfaces.
- **Graphite (`#4A4436`)** — supporting paragraphs and secondary copy.
- **Muted Stone (`#726B5C`)** — captions, metadata, placeholders and eyebrows on light.
- **Executive Black (`#0E0E0D`)** — text on gold buttons and gold accents.

### Functional States

- **Success (`#2E6B45`)** — confirmations and availability, on `#E8F0E9`.
- **Warning (`#9A6410`)** — licence expiry and attention, on `#F6ECD8`.
- **Error (`#A3362B`)** — validation errors, on `#F7E6E2`.
- **Info (`#315C7A`)** — neutral notices, on `#E6EEF3`.

Semantic colours appear only in forms, alerts and data states — never as decoration.

## 3. Typography Rules

- **Sora** — display and headings. Geometric, slightly technical, confident. Use `600` for all headings, never `700+`. Tight tracking on display sizes, normal tracking below 24px. Portuguese copy must never be hyphenated manually; allow natural wrapping.
- **Inter** — body, navigation, buttons and form labels. `400` for body, `500` for UI labels and navigation, `600` for emphasis. Line height 1.7 for paragraphs.
- **JetBrains Mono** — eyebrows, section indices, technical labels, licence names and tabular figures. Always uppercase, `11px/1`, `0.18em` tracking. Use sparingly, one per section.

Scale:

- `display-xl` — Sora 64/1.05, 600, -0.03em (home hero only, max 11 characters per line preferred).
- `display-lg` — Sora 52/1.06, 600, -0.025em (page heroes).
- `headline-lg` — Sora 36/1.15, 600, -0.015em (section titles).
- `headline-md` — Sora 28/1.25, 600 (card group titles).
- `headline-sm` — Sora 20/1.3, 600 (card titles).
- `body-lg` — Inter 18/1.7 (hero subtitles, lead paragraphs).
- `body-md` — Inter 16/1.7 (default paragraph).
- `body-sm` — Inter 14/1.6 (metadata, footnotes).
- `label` — JetBrains Mono 11/1, 500, 0.18em, uppercase.

Rule: a section eyebrow is a gold 24px dash followed by a mono label. Headline sits 16px below. Body copy is capped at 68 characters per line.

## 4. Component Stylings

### Navigation

80px tall, ivory background with a 1px hairline bottom border. Persistech gold wordmark at left (approximately 148px wide). Centre navigation uses Inter 14px/500 in Graphite, active item in Ink with a 2px gold underline offset 6px. Right side: a compact "Loja Online" outline button. On scroll the bar becomes 92% opaque ivory with a soft 20px blur. Mobile: 48px menu button, full-height ivory drawer with 1px hairline dividers and gold active markers.

### Buttons

- **Primary:** Gold 500 fill, Ink text, Inter 14px/600, 52px tall, 24px horizontal padding, 4px radius. A 1px Gold 400 inner top highlight gives a machined edge. Hover darkens to Gold 600 with a 120ms ease.
- **Secondary:** Transparent fill, 1px Ink border, Ink text. Hover fills Ink and flips text to Ivory.
- **Ghost / text link:** Ink text with a 1px gold underline on hover and a 16px arrow glyph.
- **Chamfer detail:** Primary buttons may use a single 8px 45° cut on the top-right corner as a subtle logo echo; keep all other corners at 4px. Never chamfer form inputs.

### Cards

Paper White surface, 1px Hairline border, 4px radius, 32px padding, no drop shadow at rest. Featured or hovered cards gain a 2px Gold 500 top seam and shift the border to Gold 400 at 60% opacity. Icon wells are 48×48px Parchment squares with 4px radius and a Gold 600 lucide-style stroke icon. Card titles use `headline-sm`; body uses `body-sm` in Graphite. Cards in a grid align to a strict 24px gap.

### Executive Bands

Full-bleed Executive Black sections with 96px vertical padding. A 1px gold rule runs across the top edge with a 48px solid gold segment at the left margin. Headlines in Ivory, body in Muted Gold, data in JetBrains Mono with Gold 400 numerals. One dark band maximum in the middle of a page, plus the footer.

### Forms

Paper White fields on Sand section surfaces, 52px tall, 1px Hairline border, 4px radius, 16px horizontal padding. Labels sit above the field in Inter 13px/500 Graphite. Focus: 1px Gold 500 border plus a 3px Gold 200 outer ring at 35% opacity. Error: 1px Error border with a 13px error message below. Textareas are 140px minimum height and resize vertically.

### Lists & Data

Rows separated by 1px Hairline rules, 16px vertical padding. Use gold check glyphs (16px) for capability lists. Licence and product names use Inter 15px/500, never mono. Numeric data uses JetBrains Mono with tabular figures.

### Imagery

Photography sits in rectangular frames with a 2px radius and a 1px Hairline border. Feature imagery may use an 8px chamfer on the bottom-left corner. Apply a very light warm overlay (8% Ivory) and keep images desaturated by 10–15% so gold accents stay dominant. No rounded "blob" masks.

## 5. Layout Principles

- **Canvas:** 1280px max content width; 12-column grid; 24px gutters; 64px desktop side margins; 20px mobile margins.
- **Rhythm:** 4px base unit; 8px component spacing; 32px card padding; 96px between major sections on desktop, 64px on mobile.
- **Hero composition:** asymmetric 7/5 split. Left column carries eyebrow, display headline, 2-line lead and two buttons. Right column carries a chamfered image or an Executive Black panel with three proof points. Minimum hero height 640px; never centre everything.
- **Section headers:** left-aligned by default. Centre alignment is reserved for short CTA bands and client logo strips.
- **Density:** airy but not empty. A typical section has an eyebrow, a two-line headline, a 68-character lead and a 3-column card grid.
- **Responsive:** below 1024px collapse to 2 columns; below 768px one column with 20px margins, display type at 40px, buttons full width, and navigation in a drawer.

## 6. Design System Notes for Stitch Generation

**Atmosphere keywords:** warm ivory corporate, executive black band, brushed gold precision, engineered editorial, Portuguese-language B2B technology, calm premium, hairline structure, segmented monogram geometry.

**Canonical colour names:** Warm Ivory `#F7F4EC`, Paper White `#FFFFFF`, Sand `#FBF8F1`, Parchment `#F1ECE0`, Hairline `#DCD4C2`, Ink `#14120C`, Graphite `#4A4436`, Muted Stone `#726B5C`, Executive Black `#0E0E0D`, Executive Surface `#171715`, Persistech Gold `#B8952A`, Bright Gold `#D4AF37`, Pale Gold `#F0D060`.

**Component prompts:**

1. *Corporate hero:* Warm ivory canvas with a 7/5 asymmetric split. Left: JetBrains Mono eyebrow with a gold dash, 64px Sora headline in Ink with one line underlined by a 4px gold segment, 18px Inter lead in Graphite, a gold primary button and an ink outline button. Right: a chamfered 4:5 photograph frame with a thin hairline border and a small floating Executive Black proof card showing "15+ anos" in gold mono numerals. 80px sticky ivory navigation above.
2. *Service card grid:* three Paper White cards on a Sand band, 1px Hairline borders, 4px radius, 32px padding, 48px parchment icon wells with gold line icons, 20px Sora card titles, 14px Inter body, and a gold text link with arrow. One featured card carries a 2px gold top seam.
3. *Executive CTA band:* full-bleed Executive Black section with a thin gold top rule and a 48px solid gold segment at the left margin. Centred 36px Sora Ivory headline, 18px Muted Gold lead, one gold primary button and one ivory outline button. Generous 96px vertical padding.
