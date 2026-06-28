# LGPSM Solar — AI Image Generation Prompt Sheet

**Tool:** Google **Nano Banana** (Gemini 2.5 Flash Image)
**Style:** Photorealistic, premium, Indian / Gujarat context
**Brand colours:** Deep navy `#0B1F3A` + emerald green `#22C55E`

---

## 0. How to use this sheet

1. **Prepend the HOUSE STYLE block (Section 1) to every prompt.** The per-image prompt only
   describes the subject; the house style keeps all images consistent.
2. **Generate the desktop version first**, then use the **REFRAME follow-up** (given per hero) in
   the *same chat* with the desktop image attached — Nano Banana keeps the same scene/lighting and
   just re-frames to vertical. This is how we get matching desktop + mobile pairs.
3. **Save with the exact filename given**, into the path shown, under `public/`.
4. Ratios are targets — generate at the largest size the tool allows, then we compress on build.
5. 🟡 = placeholder only; replace with a **real client/manufacturer photo** when available
   (products, real installations). Real photos rank and convert better.

> Note: a few existing files will be standardised to the new names below; the code references get
> updated when we wire images into the templates. Hero mobile variants use the `-mobile` suffix.

---

## 1. HOUSE STYLE (paste before every prompt)

```
Photorealistic premium commercial photography, ultra-detailed, shot on a full-frame DSLR with a
35mm lens, warm natural Indian daylight, soft realistic shadows, clean modern professional look,
subtle deep-navy (#0B1F3A) and emerald-green (#22C55E) colour accents, authentic Gujarat / India
setting, realistic people of Indian ethnicity where shown, crisp solar hardware detail, balanced
natural colours, no text, no logos, no watermark.
```

**Always AVOID (add if your tool supports negatives):**
```
text, watermark, logo, distorted or warped solar panels, extra fingers, deformed hands, plastic
CGI look, oversaturation, heavy HDR, cluttered composition, lens flare overload, fake reflections,
low resolution, cartoonish.
```

**Composition rule for heroes:** keep the **lower-left third calm/uncluttered** (sky, soft
gradient, or simple surface) so headline text overlays cleanly; place the main subject centre-right.

---

## 2. HEROES (full-bleed — generate DESKTOP + MOBILE)

> Desktop = 1920×1080 (16:9). Mobile = 1080×1920 (9:16) for the home hero, 1080×1350 (4:5) for
> inner-page heroes. For each, run the desktop prompt, then the REFRAME follow-up with the desktop
> image attached.

### H1 — Home hero  🔴
- Desktop: `public/hero-desktop-optimized.jpg`  · Mobile: `public/hero-mobile-optimized.jpg`
```
A modern upper-middle-class Indian home in Gujarat at golden hour, sleek solar panels neatly
installed across the rooftop, clear warm sky, a confident Indian homeowner and a uniformed solar
engineer looking up at the panels in the mid-ground, lush greenery around the house, sense of
optimism and clean energy. Wide cinematic establishing shot, main subject centre-right, calm warm
sky filling the left third for headline text.
```
- REFRAME → mobile: `Re-frame this exact scene to a vertical 9:16 portrait. Keep the same house, panels, people, lighting and colours. Extend the sky upward and the foreground downward naturally. Keep the lower third calm for text.`

### H2 — About hero  🔴
- Desktop: `public/images/heroes/about-hero.jpg`  · Mobile: `public/images/heroes/about-hero-mobile.jpg`
```
A professional Indian solar engineering team (4–5 people, mixed gender, branded navy-and-emerald
work polos and safety gear) standing confidently on a large commercial rooftop solar site in
Gujarat, morning light, rows of solar panels behind them, modern industrial skyline in the
distance. Documentary corporate photography, group centre-right, open sky on the left.
```
- REFRAME → mobile (4:5): `Re-frame to a vertical 4:5 portrait, same team, same rooftop and lighting, tighten slightly on the group, keep the lower area calm for text.`

### H3 — Services hero (shared by /services and the 6 service detail pages)  🔴
- Desktop: `public/images/heroes/services-hero.jpg`  · Mobile: `public/images/heroes/services-hero-mobile.jpg`
```
Close-up dynamic angle of a solar engineer in branded gear installing a solar panel on a rooftop in
Gujarat, torque wrench in hand, rows of gleaming panels receding into warm daylight, shallow depth
of field, sense of precision and craftsmanship. Subject centre-right, soft sky on the left.
```
- REFRAME → mobile (4:5): `Re-frame to vertical 4:5, same engineer and panels, same lighting, keep lower area calm for text.`

### H4 — Products hero  🔴
- Desktop: `public/images/heroes/products-hero.jpg`  · Mobile: `public/images/heroes/products-hero-mobile.jpg`
```
A premium flat-lay-meets-environment shot of high-end solar hardware — a monocrystalline solar
panel, a sleek wall-mounted hybrid inverter, and a modern lithium battery unit — arranged on a
clean rooftop with panels softly blurred behind, warm daylight, product-catalogue quality, emerald
and navy accents. Hardware centre-right, clean space on the left.
```
- REFRAME → mobile (4:5): `Re-frame to vertical 4:5, same hardware arrangement and lighting, keep lower area clean for text.`

### H5 — Why-Solar hero  🔴
- Desktop: `public/images/heroes/why-solar-hero.jpg`  · Mobile: `public/images/heroes/why-solar-hero-mobile.jpg`
```
Aerial drone view of an Indian residential neighbourhood in Gujarat where many rooftops have solar
panels, warm late-afternoon light, green trees between houses, a feeling of a community embracing
clean energy. Sweeping wide shot, calm sky/open area on the left for text.
```
- REFRAME → mobile (4:5): `Re-frame to vertical 4:5, same aerial neighbourhood and light, keep lower area calm for text.`

### H6 — Contact hero  🔴
- Desktop: `public/images/heroes/contact-hero.jpg`  · Mobile: `public/images/heroes/contact-hero-mobile.jpg`
```
A friendly Indian solar consultant in branded polo shaking hands with a happy homeowner couple at
the doorstep of a Gujarat home with solar panels visible on the roof, warm welcoming daylight,
genuine smiles, trust and partnership. People centre-right, soft background on the left.
```
- REFRAME → mobile (4:5): `Re-frame to vertical 4:5, same people and setting, same lighting, keep lower area calm for text.`

### H7 — Locations hero (shared by all city pages)  🔴
- Desktop: `public/images/heroes/locations-hero.jpg`  · Mobile: `public/images/heroes/locations-hero-mobile.jpg`
```
A sweeping golden-hour view over a Gujarat town skyline with a mix of homes and small factories,
several rooftops fitted with solar panels, warm hazy light, distant horizon, sense of regional
coverage and reach. Wide establishing shot, open sky on the left for text.
```
- REFRAME → mobile (4:5): `Re-frame to vertical 4:5, same skyline and light, keep lower area calm for text.`

### H8 — Projects hero  🔴
- Desktop: `public/images/heroes/projects-hero.jpg`  · Mobile: `public/images/heroes/projects-hero-mobile.jpg`
```
A large industrial rooftop in Gujarat completely covered with neat rows of solar panels stretching
toward the horizon, a factory or warehouse below, dramatic warm sky, a sense of scale and
achievement. Wide cinematic angle, calm sky on the left for text.
```
- REFRAME → mobile (4:5): `Re-frame to vertical 4:5, same rooftop array and sky, keep lower area calm for text.`

### H9 — Blog hero  🟢
- Desktop: `public/images/heroes/blog-hero.jpg`  · Mobile: `public/images/heroes/blog-hero-mobile.jpg`
```
A clean, bright editorial flat-lay on a desk: an open notebook, a small solar panel sample, a cup
of chai, sunlight streaming across a wooden surface, calm and informative mood, soft emerald and
navy props. Top-down-ish angle, uncluttered space on the left for text.
```
- REFRAME → mobile (4:5): `Re-frame to vertical 4:5, same desk flat-lay and light, keep lower area calm for text.`

---

## 3. CONTAINED CONTENT IMAGES (single file each — NO mobile variant needed)

### C1 — Home: mission image  🔴
- `public/premium_mission_solar.png` · 1080×1350 (4:5 portrait)
```
Two Indian solar engineers studying a tablet and a rooftop layout plan together on a sunny rooftop
solar site in Gujarat, focused and collaborative, panels around them, warm daylight, shallow depth
of field. Vertical composition.
```

### C2 — Home: why-choose-us image  🔴
- `public/hero-rooftop-ai.png` · 1080×1350 (4:5 portrait)
```
A pristine residential rooftop in Gujarat fully fitted with premium solar panels, photographed
from a flattering low angle against a clear warm sky, immaculate installation quality, sense of
pride and reliability. Vertical composition.
```

### C3 — About: commercial solar image  🔴
- `public/about-solar.png` · 1200×900 (4:3)
```
A modern commercial building in Gujarat (office or showroom) with a rooftop solar array, glass
facade reflecting a warm sky, well-maintained surroundings, professional architectural photography.
```

### C4 — About: team strip  🟢
- `public/about-team.png` · 1680×720 (21:9 wide)
```
A wide candid shot of a diverse Indian solar company team (engineers, sales, support) outside a
modern office in Gujarat, smiling naturally, branded navy-and-emerald polos, morning light.
Wide panoramic framing.
```

### C5 — Contact: consultation image  🔴
- `public/images/contact/consultation.png` · 1200×900 (4:3)
```
An Indian solar consultant sitting with a homeowner at a dining table, showing a 3D solar roof
design on a laptop, warm domestic interior, natural window light, genuine engaged expressions.
```

### C6 — Contact: HQ / office exterior  🟢🟡
- `public/images/contact/hq.png` · 1200×900 (4:3)
```
A clean modern small-business office exterior in Rajkot, Gujarat, with subtle solar branding on the
signage area (no readable text), parked company van, bright daytime, welcoming professional look.
```

### C7 — Why-Solar: family benefits  🔴
- `public/images/why-solar/family_benefits.png` · 1200×900 (4:3)
```
A happy middle-class Indian family (parents and two children) relaxing in a bright, comfortable
living room of their Gujarat home, ceiling fan and appliances running, warm and content mood,
implying worry-free electricity from solar. Natural indoor light.
```

### C8–C13 — Service content images (one per service)  🔴
Path: `public/images/services/<name>.jpg` · 1200×900 (4:3)

- `residential.jpg`
```
A neat solar installation on a typical Indian single-family rooftop in Gujarat, a homeowner looking
on happily, sunny day, approachable residential scale.
```
- `commercial.jpg`
```
Solar panels on the rooftop of a commercial showroom or office in Gujarat, business signage area
(no readable text), professional and prosperous feel, daytime.
```
- `industrial.jpg`
```
A vast factory rooftop in Gujarat covered with rows of solar panels, industrial scale, a worker in
hi-vis inspecting the array, strong sense of capacity and engineering.
```
- `maintenance.jpg`
```
A technician in branded gear cleaning and inspecting solar panels with a soft brush and a tablet
diagnostic tool on a rooftop in Gujarat, focus on care and upkeep, sunny day.
```
- `consultancy.jpg`
```
A solar consultant and a client reviewing charts, a site map and a solar proposal on a table in a
bright modern office in Gujarat, advisory and analytical mood, natural light.
```
- `epc.jpg`
```
A wide active construction view of a large solar project being installed in Gujarat — workers,
mounting structures, panels being placed, a project manager with a clipboard — end-to-end
engineering in progress, daytime.
```

### C14–C15 — Resource guide illustrations  🟢
Path: `public/images/resources/<name>.jpg` · 1200×900 (4:3)

- `government-subsidy-guide.jpg`
```
A clean conceptual photo of an Indian homeowner happily reviewing solar subsidy paperwork at a
table with a small model house and solar panel and Indian rupee notes nearby, bright optimistic
desk scene, no readable text.
```
- `solar-buying-guide.jpg`
```
A tidy comparison flat-lay of solar components (panel sample, inverter, battery) with a checklist
notepad and a magnifying glass on a bright surface, helpful informative mood, no readable text.
```

---

## 4. PRODUCT SHOTS  🟡 (placeholders — prefer real manufacturer photos)

Path: `public/images/products/<file>` · 1000×1000 (1:1) · **pure white seamless background, soft
studio lighting, centred, catalogue style, slight reflection**

- `panel-1.jpg` — `A single monocrystalline solar panel (entry-level, 400W look), front 3/4 angle, uniform blue-black cells, silver frame.`
- `panel-2.jpg` — `A premium half-cut monocrystalline solar panel (500W look), sleek all-black cells, front 3/4 angle.`
- `panel-3.jpg` — `A high-end bifacial dual-glass solar panel (600W look), transparent-edged dual glass, front 3/4 angle.`
- `inv-1.jpg` — `A compact wall-mounted hybrid solar inverter (small 3kW look), modern white-and-grey casing, small colour display.`
- `inv-2.jpg` — `A mid-size wall-mounted hybrid solar inverter (5kW look), sleek casing, colour LCD, front angle.`
- `inv-3.jpg` — `A larger commercial three-phase solar inverter (10kW look), industrial white casing, mounting brackets.`
- `bat-1.jpg` — `A compact lithium (LFP) home battery unit (5kWh look), modern minimalist enclosure, status LEDs.`
- `bat-2.jpg` — `A larger stackable lithium home battery (10kWh look), premium tower form factor, status indicators.`
- `acc-1.jpg` — `An anodised aluminium solar mounting rail and clamp kit, rails and clamps neatly arranged.`
- `acc-2.jpg` — `A small Wi-Fi/4G solar monitoring data-logger device with a short antenna, modern white casing.`

Catalog cover  🟢 — `public/images/catalog-cover.jpg` · 1240×1754 (A4 portrait)
```
A premium product-catalogue cover scene: solar panels on a Gujarat rooftop at golden hour with
clean empty space at the top for a title, magazine-cover quality, no text.
```

---

## 5. TEXTURES / ABSTRACT BACKGROUNDS (single file, used at low opacity)

Path: `public/images/ui/<file>` · 2000×2000, seamless if possible

- `green-abstract.png`  🟢
```
A subtle dark abstract background, deep navy base with soft flowing emerald-green light streaks and
faint geometric solar-cell grid texture, very dark and low-contrast so it works behind white text,
no focal subject.
```
- `footer-bg.png`  🟢
```
A very dark navy textured background with a faint blueprint grid and soft emerald glow in one
corner, minimal and unobtrusive, designed to sit behind footer text.
```
- `solar-blueprint.png`  🟢
```
A clean technical blueprint-style line drawing of a solar panel array and wiring schematic, thin
emerald lines on deep navy, engineering-diagram aesthetic, evenly tileable, no text.
```

---

## 6. GLOBAL SOCIAL / OG SHARE IMAGE  🔴

- `public/images/og/og-default.jpg` · 1200×630
```
A premium wide brand image: a beautiful Gujarat rooftop solar installation at golden hour, clean
composition with generous empty space on the right side for a logo and headline to be added later,
warm and trustworthy, navy and emerald tones, no text.
```
> The logo + headline get composited in later (in code or a graphics tool) — leave the right third
> clean.

---

## 7. BLOG POST FEATURED IMAGES  🟢 (generate LATER, one per article)

Path: `public/images/blog/<post-slug>.jpg` · 1200×675 (16:9)

**Reusable template — replace the `<TOPIC>` line per article:**
```
[HOUSE STYLE]
A clean editorial featured image illustrating: <TOPIC, e.g. "the cost of a 3kW home solar system
in Gujarat">. Relevant real-world Indian/Gujarat solar scene or tasteful conceptual flat-lay,
bright and informative, uncluttered, no text.
```
Examples of `<TOPIC>` values you'll fill once articles are chosen: *PM Surya Ghar subsidy explained*,
*solar net metering in Gujarat*, *residential vs commercial solar*, *how to maintain solar panels*,
*choosing the right inverter*, etc.

---

## Quick count summary

| Group | Files |
|---|---|
| Heroes (9 × desktop+mobile) | 18 |
| Contained content images | 15 |
| Product shots + catalog | 11 🟡 |
| Textures | 3 |
| OG share image | 1 |
| **Total now** | **~48** |
| Blog featured images (later, with content) | ~15–20 |

Prioritise the 🔴 items first (home + inner-page heroes, key content images, OG image). 🟡 product
and real-installation shots are best replaced with genuine client/manufacturer photos.
