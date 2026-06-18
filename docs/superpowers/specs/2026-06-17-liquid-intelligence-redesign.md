# Kingdom Media Hub — "Liquid Intelligence" Redesign Spec
**Fecha:** 2026-06-17  
**Alcance:** Rediseño visual completo (Pass 1 + Pass 2) — 16 secciones  
**Enfoque:** Sistema primero, secciones después

---

## 1. Contexto y objetivo

Kingdom Media Hub necesita reposicionarse visualmente de una estética dark "sovereign systems" hacia **"Liquid Intelligence"**: un diseño light, airy y premium comparable a Apple, Stripe, Linear y Arc Browser.

El objetivo no cambia: **máxima conversión a consultas y leads de alto valor.** Pero la percepción del visitante debe escalar de "agencia de marketing" a "empresa de IA y Growth Systems de $100M."

---

## 2. Filosofía de diseño

**Liquid Intelligence** — la automatización, la IA y la creatividad se sienten fluidas, inteligentes y modernas.

La interfaz debe transmitir:
- Confianza y sofisticación (Apple)
- Innovación sin distracción (Linear)
- Velocidad y autoridad (Stripe)

**Evitar absolutamente:**
- Estética dark cyberpunk o gaming
- Neones excesivos
- Layouts saturados
- Animaciones agresivas
- Sombras pesadas y oscuras

---

## 3. Sistema de diseño

### 3.1 Paleta de colores

```css
/* Base — 80% del UI */
--white:        #FFFFFF;
--gray-50:      #F8FAFC;
--gray-100:     #F1F5F9;
--gray-200:     #E5E7EB;
--gray-900:     #0F172A;   /* texto principal */
--gray-500:     #64748B;   /* texto secundario / muted */

/* Acento — 20%, solo CTAs, métricas y highlights */
--cyan:         #33CCFF;
--cyan-soft:    #A5E9FF;
--cyan-deep:    #0099CC;

/* Dark — solo Case Studies footer y footer principal */
--ink:          #0F172A;
--ink-2:        #1E293B;
```

**Regla de uso del acento cyan:**
- ✅ Botones CTA primarios
- ✅ Números y métricas clave (ROI, contadores, Case Studies)
- ✅ Estados interactivos (hover, focus)
- ✅ Barra de progreso scroll
- ❌ Nunca como color de fondo de sección completa
- ❌ Nunca en texto de párrafo

### 3.2 Tipografía

| Rol | Fuente | Peso | Uso |
|-----|--------|------|-----|
| Display / H1–H2 | **Plus Jakarta Sans** | 800, 700 | Headlines de sección, hero |
| Body / UI / Nav | **Geist** | 400, 500, 600 | Párrafos, labels, nav links |
| Mono / Datos | **Geist Mono** | 400, 600 | Eyebrows, métricas, calculator |

Todas las fuentes vía `next/font/google` — sin layout shift.

```css
/* Hero headline */
font-size: clamp(3rem, 7vw, 7rem);
font-weight: 800;
line-height: 0.95;
letter-spacing: -0.04em;

/* Section headings */
font-size: clamp(2rem, 4vw, 4rem);
font-weight: 700;
letter-spacing: -0.02em;

/* Body */
font-size: 1.125rem;
line-height: 1.8;
color: #64748B;
```

### 3.3 Sistema de fondos (sin flat-white)

Las secciones se mezclan suavemente sin transiciones abruptas:

```css
/* Hero */
background:
  radial-gradient(circle at 65% 0%, rgba(51,204,255,0.13), transparent 52%),
  linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);

/* Secciones alternas */
background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%);
background: #FFFFFF;

/* CTA sections (ROI, Contact) */
background:
  radial-gradient(circle at 40% 50%, rgba(51,204,255,0.09), transparent 60%),
  #F8FAFC;

/* Case Studies y Footer — único acento oscuro */
background: #0F172A;
```

### 3.4 Glassmorphism claro (Apple Vision Pro / Arc)

```css
/* Glass card estándar */
background:    rgba(255, 255, 255, 0.60);
backdrop-filter: blur(24px) saturate(160%);
-webkit-backdrop-filter: blur(24px) saturate(160%);
border:        1px solid rgba(255, 255, 255, 0.80);
box-shadow:
  0 20px 60px rgba(0, 0, 0, 0.07),
  0 1px 0 rgba(255, 255, 255, 0.90) inset;
border-radius: 20px;

/* Glass sutil (sobre fondos blancos) */
background:    rgba(248, 250, 252, 0.80);
border:        1px solid rgba(0, 0, 0, 0.06);
box-shadow:    0 4px 24px rgba(0, 0, 0, 0.05);
border-radius: 16px;
```

### 3.5 Blobs orgánicos

Esferas de gradiente de gran escala, baja opacidad, animación `breathe`:

```css
/* Blob cyan — Hero, ROI, CTA */
background: radial-gradient(circle, rgba(51,204,255,0.22), transparent 65%);
width: 700px; height: 700px;
filter: blur(90px);
animation: breathe 9s ease-in-out infinite;

@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.08); opacity: 1; }
}

/* Blob secundario — soft cyan */
background: radial-gradient(circle, rgba(165,233,255,0.18), transparent 65%);
filter: blur(100px);
animation: breathe 12s ease-in-out infinite reverse;
```

### 3.6 Sistema de sombras

```css
/* Tarjetas flotantes (hero) */
box-shadow: 0 8px 32px rgba(0,0,0,0.10);

/* Cards estándar */
box-shadow: 0 4px 20px rgba(0,0,0,0.06);

/* Hover elevation */
box-shadow: 0 20px 50px rgba(0,0,0,0.10);

/* Botón CTA primario (cyan) */
box-shadow: 0 8px 24px rgba(51,204,255,0.35);
```

### 3.7 Sistema de botones

```css
/* Primario */
background: #33CCFF;
color: #000000;
border-radius: 100px; /* pill */
padding: 14px 28px;
font-weight: 600;
box-shadow: 0 8px 24px rgba(51,204,255,0.30);
transition: transform 200ms, box-shadow 200ms;

/* Hover */
transform: translateY(-2px) scale(1.02);
box-shadow: 0 12px 32px rgba(51,204,255,0.45);

/* Secundario glass */
background: rgba(255,255,255,0.60);
border: 1px solid rgba(0,0,0,0.10);
color: #0F172A;
/* hover: borde cyan sutil */
```

### 3.8 Sistema de animaciones (Framer Motion)

Solo animaciones elegantes — nada flashy:

| Tipo | Uso | Valores |
|------|-----|---------|
| Fade + Slide Y | Reveal de secciones al scroll | `opacity: 0→1, y: 20→0, duration: 0.7` |
| Scale | Cards al hover | `scale: 1→1.02` |
| Blur reveal | Hero headline | `filter: blur(4px)→0` |
| Float | Tarjetas hero | `y: 0→-10→0, 4-6s loop` |
| Breathe | Blobs orgánicos | `scale: 1→1.08→1, 9s loop` |
| Número | Contadores | `0→valor, 1.8s ease-out-quint` |

`prefers-reduced-motion`: todas las animaciones se deshabilitan. Lenis continúa activo solo si el usuario no prefiere movimiento reducido.

---

## 4. Primitivos UI (reemplazos)

### GlassCard (light)
Reemplaza el `GlassCard` oscuro. Props: `variant` (default | subtle | elevated), `glow` (false por defecto, solo en cards de emphasis con borde cyan).

### CTAButton
Reemplaza el sistema actual. Variants: `primary` (cyan), `secondary` (glass), `ghost` (solo texto + arrow). Elimina `sovereign` y `gold` variants.

### SectionHeading
Mismo patrón (eyebrow + título + subtítulo) pero con nueva tipografía: eyebrow en Geist Mono, título en Plus Jakarta Sans 700, subtítulo en Geist 400 color `#64748B`.

### Reveal
Igual al actual pero añade variante `blur` (fade + blur simultáneos para el hero).

### AnimatedCounter
Sin cambios funcionales. Color del número pasa de `text-gold` a `text-cyan`.

### FloatingCard (nuevo)
Tarjeta pequeña (160-200px) para el hero. Glass claro, icono de estado (punto verde pulsando o número con flecha), tipografía Geist Mono para el valor, Geist para la label. Animación `float` independiente con delay variable.

---

## 5. Secciones — especificación completa

### 5.1 Navbar
- Fondo: `rgba(255,255,255,0.75)` + `blur(20px)`
- Al scroll: `box-shadow: 0 1px 0 rgba(0,0,0,0.06)` + fondo aumenta a `0.90`
- Links: Geist 500, color `#64748B`, hover `#0F172A`
- CTA: botón primario cyan con texto negro
- EN/ES toggle: pill redondeado, locale activo con fondo `#33CCFF`
- Mobile: menú deslizante desde arriba, glass claro

### 5.2 Hero
**Estructura de tres capas:**

1. **Fondo:** blob cyan animado (top-right) + blob soft cyan (bottom-left) + grid de puntos SVG muy sutil
2. **Contenido central:**
   - Eyebrow: Geist Mono uppercase, color `#64748B`
   - Headline: Plus Jakarta Sans 800, `clamp(3rem, 7vw, 7rem)`, tracking `-0.04em`, color `#0F172A`
   - La palabra clave (ej. "growth systems") en `#33CCFF`
   - Subheadline: Geist 400, 1.125rem, `#64748B`, max-width 540px
   - CTAs: primario cyan + secundario glass, gap 12px
3. **Floating cards (5):** posicionadas con valores absolutos ajustados para responsive. Contenido:
   - `+42 Citas reservadas` (arriba izquierda)
   - `AI Voice Agent ● Activo` (arriba derecha)
   - `+31% Conversión de Leads` (abajo izquierda)
   - `CRM Synced — 847 registros` (abajo centro)
   - `Automation ▶ Running` (abajo derecha)
   
   En mobile (< 768px): las tarjetas flotan verticalmente debajo del headline en un scroll horizontal. No bloquean el CTA.

### 5.3 Trust Bar
- Fondo: `#F8FAFC`
- Contadores: Plus Jakarta Sans 800, `text-3xl sm:text-5xl`, color `#0F172A`
- Sufijos/prefijos: color `#33CCFF`
- Labels: Geist 400, `#64748B`
- Separador visual entre stats: línea vertical `rgba(0,0,0,0.08)`
- Debajo de los contadores: fila de logos de clientes en escala de grises con `opacity: 0.5`, `filter: grayscale(1)`

### 5.4 Kingdom Ecosystem (Bento)
**Layout bento asimétrico — desktop:**
```
┌──────────────┬─────────────────────────────────┐
│              │                                 │
│   Agency     │      Kingdom Core               │
│   (card)     │      (card grande)              │
│              │      "Tres motores,             │
├──────┬───────┤       una máquina"              │
│Media │Academy│      + líneas SVG               │
│Lab   │       │      animadas                   │
└──────┴───────┴─────────────────────────────────┘
```
- Líneas SVG de conexión (dashed, color `rgba(51,204,255,0.4)`) con animación de `stroke-dashoffset` → efecto de flujo de datos
- Kingdom Core card: fondo con blob cyan interno sutil, borde `rgba(51,204,255,0.30)`
- Mobile: stack vertical con Agency → Core → MediaLab → Academy

### 5.5 ROI Calculator
- Fondo sección: blob cyan centrado, opacidad baja
- Layout: dos paneles en glass card grande
  - Izquierda: 4 sliders con labels Geist Mono + valor actual en cyan
  - Derecha: resultado dominante `text-6xl` en `#33CCFF`, desglose anual en `#64748B`, disclaimer `text-xs`
- CTA resultado: botón primario cyan "Recuperar Ingresos Perdidos"
- Cálculo: idéntico al actual (perdida por llamadas no contestadas × tasa de conversión × ticket)

### 5.6 Kingdom Agency (Feature Rows — Apple style)
3 filas alternadas imagen/texto:
- **AI Voice Agents** (visual derecha): mockup de interface de agente con conversación de chat + indicador de voz pulsando
- **Automation Systems** (visual izquierda): dashboard de automatización con nodos conectados
- **High-Converting Websites** (visual derecha): mockup de sitio web premium, badge `$10,000+`

Cada fila: headline Plus Jakarta Sans 700, bullets con checkmarks cyan, descripción Geist, transición suave al hover sobre el visual (leve scale 1.02).

### 5.7 Media Lab (Nueva)
Ancla: `#media-lab`
- Grid 2 columnas: proyecto grande (izquierda, 2/3 ancho) + 2 proyectos apilados (derecha)
- Cada proyecto: imagen/video placeholder con overlay al hover mostrando métricas
- Barra superior con filtros: Todo / Comerciales / Reels / Campañas
- Métricas en overlay: `+X%` en cyan grande + descripción

### 5.8 Academy (Nueva)
Ancla: `#academy`
- Headline: "Aprende de Operadores, No de Teóricos"
- 4 tarjetas bento con: ícono grande (phosphor), nombre del programa, descripción, badge "Proyectos Reales"
- Layout: 2×2 en desktop, 1 columna en mobile
- Fondo sección: ligeramente azulado `rgba(51,204,255,0.04)` sobre `#F8FAFC`

### 5.9 How It Works (Nueva)
Ancla: `#how-it-works`
- 5 pasos: Auditoría → Estrategia → Implementación → Optimización → Escala
- Desktop: timeline horizontal con línea conectora y número grande `#33CCFF`
- Mobile: timeline vertical
- Animación: scroll-triggered — cada paso se revela con `opacity: 0→1, x: -20→0`

### 5.10 Case Studies (Nueva — alta prioridad)
Ancla: `#results`
- Fondo: `#0F172A` (único bloque oscuro de la página, crea contraste dramático)
- 3 tarjetas grandes con fondo `#1E293B`, borde `rgba(51,204,255,0.15)`
- Estructura de cada tarjeta:
  ```
  +212%             ← Plus Jakarta Sans 800, 5rem, color #33CCFF
  Leads calificados ← Geist 600, blanco
  ──────────────
  Marca de Moda · Venezuela  ← Geist 400, #64748B adaptado para dark
  [Ver caso completo →]
  ```
- El número ocupa 60% de la altura de la tarjeta
- Hover: borde se ilumina a `rgba(51,204,255,0.40)`, leve scale 1.01

### 5.11 Social Proof (Nueva)
Ancla: `#social-proof`
- Fila 1: logos de clientes en escala de grises, placeholder de 6 logos
- Fila 2: 3 tarjetas glass con testimonial, nombre, cargo, empresa y una métrica resultado en cyan
- Fondo: `#FFFFFF` con blob muy sutil

### 5.12 Competitive Comparison (Nueva)
Ancla: `#comparison`
- Tabla 4 columnas: Feature | Agencia Tradicional | Freelancer | **Kingdom Media Hub**
- Columna Kingdom: fondo `rgba(51,204,255,0.06)`, header con badge "Mejor opción"
- Sin bordes pesados: solo separadores horizontales `rgba(0,0,0,0.06)`
- ✓ en verde, ✗ en rojo/gris, ⚡ para diferenciadores únicos

### 5.13 FAQ / AEO Hub (Nueva)
Ancla: `#faq`
- Acordeón minimalista: pregunta Geist 600, respuesta Geist 400 `#64748B`
- Sin bordes de caja — solo `border-bottom: 1px solid rgba(0,0,0,0.08)`
- 8 preguntas optimizadas para AI search (50-120 palabras por respuesta)
- Schema FAQ JSON-LD añadido al `lib/schema.ts`

### 5.14 Pricing (Nueva)
Ancla: `#pricing`
- 3 columnas: Starter Automation ($1,500–$4,000) | **Growth Systems** (Custom, "Popular") | Enterprise (Custom)
- Columna central: glass card con `border: 1px solid rgba(51,204,255,0.40)`, badge cyan "Más popular"
- Cada plan: precio grande, lista de features con checkmarks, CTA
- Fondo: blob muy sutil centrado

### 5.15 Contact
- Mismo layout bifurcado existente, rediseñado al nuevo sistema
- Inputs: fondo blanco, `border: 1px solid #E5E7EB`, hover `border-color: #33CCFF`
- Focus: `outline: 2px solid rgba(51,204,255,0.40)`
- CTA submit: botón primario cyan
- Validación de errores: texto `#EF4444`, borde rojo sutil
- Sin cambios en la lógica RHF + Zod ni en la API route

### 5.16 Footer
- Fondo: `#0F172A` (mismo tono oscuro que Case Studies — cohesión visual)
- Logo en blanco, tagline en `#64748B`
- Links en `rgba(255,255,255,0.60)`, hover `#FFFFFF`
- Redes sociales: íconos con hover `#33CCFF`
- Bottom bar: copyright + Privacy + Terms en `rgba(255,255,255,0.40)`

---

## 6. CRO Baseline (rediseñado)

### Scroll Progress
- Barra de `2px` en `#33CCFF` en top de pantalla (igual que antes, nuevo color)

### Sticky Mobile CTA
- Glass claro: `rgba(255,255,255,0.85)` + `blur(16px)`
- Borde superior: `1px solid rgba(0,0,0,0.08)`
- Dos botones pill: WhatsApp glass (borde) + Book Call cyan (sólido)
- Padding seguro para iPhone notch (`safe-area-inset-bottom`)

### Floating WhatsApp (desktop)
- Botón redondo en `#33CCFF` con ícono WhatsApp blanco
- `box-shadow: 0 8px 24px rgba(51,204,255,0.40)`
- Tooltip glass al hover

---

## 7. i18n — cambios de copy necesarios

Los archivos `messages/en.json` y `messages/es.json` necesitan nuevas claves para:
- `hero.floatingCards.*` (5 tarjetas)
- `mediaLab.*` (sección completa)
- `academy.*` (sección completa)
- `howItWorks.*` (5 pasos)
- `caseStudies.*` (3 casos)
- `socialProof.*` (3 testimonios)
- `comparison.*` (tabla, 8 filas)
- `faq.*` (8 preguntas/respuestas)
- `pricing.*` (3 planes)

Las claves existentes se mantienen; solo se añaden nuevas.

---

## 8. Archivos que cambian vs. que se crean

### Archivos reescritos (no creados desde cero — misma estructura, nuevo contenido):
- `app/globals.css` — tokens completos (dark → light)
- `app/[locale]/layout.tsx` — fuentes Fraunces/Hanken/JetBrains → Plus Jakarta Sans/Geist/Geist Mono
- `components/ui/glass-card.tsx` — dark glass → light glass
- `components/ui/cta-button.tsx` — sovereign/gold variants → primary/secondary/ghost
- `components/ui/section-heading.tsx` — nueva tipografía
- `components/sections/navbar.tsx` — light glass, toggle rediseñado
- `components/sections/hero.tsx` — floating cards + blob + nueva paleta
- `components/sections/trust-bar.tsx` — nueva paleta + logos
- `components/sections/ecosystem.tsx` + `ecosystem-diagram.tsx` — bento layout
- `components/sections/roi-calculator.tsx` — nueva paleta
- `components/sections/agency.tsx` — feature rows Apple style
- `components/sections/contact.tsx` — nueva paleta
- `components/sections/footer.tsx` — footer oscuro rediseñado
- `components/cro/*.tsx` — nueva paleta
- `messages/en.json` + `messages/es.json` — claves nuevas añadidas

### Archivos nuevos a crear:
- `components/ui/floating-card.tsx`
- `components/ui/organic-blob.tsx`
- `components/sections/media-lab.tsx`
- `components/sections/academy.tsx`
- `components/sections/how-it-works.tsx`
- `components/sections/case-studies.tsx`
- `components/sections/social-proof.tsx`
- `components/sections/comparison.tsx`
- `components/sections/faq.tsx`
- `components/sections/pricing.tsx`
- `content/caseStudies.ts`
- `content/testimonials.ts`
- `content/faq.ts`
- `content/pricing.ts`
- `content/comparison.ts`

### Sin cambios (lógica, no visual):
- `i18n/*`, `proxy.ts`, `lib/validations.ts`, `lib/analytics.ts`, `app/api/contact/route.ts`, `lib/env.ts`, `lib/store.ts`, `app/sitemap.ts`, `app/robots.ts`

### Cambio menor (solo paleta, sin cambio de lógica):
- `components/sections/ai-demo-modal.tsx` — colores dark → light
- `components/sections/demo-button.tsx` — colores dark → light

---

## 9. Orden de implementación

1. `globals.css` — tokens nuevos (light system)
2. `app/[locale]/layout.tsx` — fuentes
3. Primitivos UI — GlassCard, CTAButton, SectionHeading, Reveal, FloatingCard, OrganicBlob
4. `messages/en.json` + `messages/es.json` — todas las claves nuevas
5. Archivos de contenido — caseStudies, testimonials, faq, pricing, comparison
6. Secciones existentes en orden de página (top → bottom)
7. Secciones nuevas en orden de página
8. CRO baseline
9. `lib/schema.ts` — FAQ schema añadido
10. `app/[locale]/page.tsx` — componer todas las secciones

---

## 10. Criterios de verificación

1. `npm run build` pasa sin errores de tipo
2. `/en` y `/es` cargan con la nueva estética (fondo claro, fuentes nuevas)
3. Floating cards del hero se animan independientemente
4. Blob orgánico respira (scale animation) — detenido con `prefers-reduced-motion`
5. Toggle EN/ES funciona, persiste locale
6. ROI Calculator calcula en tiempo real, número en `#33CCFF`
7. Case Studies section visible con fondo oscuro `#0F172A`
8. Todas las secciones nuevas renderizan en ambos idiomas
9. Mobile: floating cards no bloquean el CTA, sticky bar visible
10. `npm run build` — 0 type errors, `/en` y `/es` prerendered como SSG
