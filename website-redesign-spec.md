# Website Redesign Spec — Maitrayee Keskar Portfolio

## Who this is for

This is a design and implementation spec for redesigning my personal academic portfolio website. The site is built on Next.js and deployed on Vercel. Apply these changes across all pages while preserving the existing content structure and functionality (search, filters, interactive skill graph, etc.).

---

## Design philosophy

I'm a PhD student who studies autonomous driving and writes mathematical proofs, but I also paint, read, and do nail art. The site should feel like it belongs to someone who lives at the intersection of precision and creativity. Think: "a beautiful notebook that has proofs on one page and watercolor on the next." The current blue-and-white template look needs to go.

---

## 1. Color palette

### Background
- **Primary background**: `#1a1a2e` (deep warm navy-plum, NOT cold black)
- **Card/surface background**: `#232136` (slightly lighter plum)
- **Elevated surface (hover states, active cards)**: `#2a2844`

### Accent colors (use consistently across the whole site)
| Name | Hex | Usage |
|------|-----|-------|
| Electric violet | `#7C5CFC` | Primary accent. Links, active states, highlighted tags, the main interactive color |
| Coral | `#FF6F61` | Secondary accent. Trajectory/planning research theme, hover glows, CTAs |
| Teal | `#2EC4B6` | MARL/multi-agent research theme, success states |
| Marigold | `#F4A940` | Industry experience theme, warning/attention states |

### Text colors
- **Primary text (headings, body)**: `#f0eae4` (warm cream, NOT pure white)
- **Secondary text (descriptions, metadata)**: `#b8b0a8` (muted warm stone)
- **Tertiary text (timestamps, labels)**: `#8a8279` (faded stone)
- **Link color**: `#7C5CFC` (electric violet), hover: `#9B82FC`

### Borders
- Default: `rgba(240, 234, 228, 0.1)`
- Emphasis: `rgba(240, 234, 228, 0.2)`

---

## 2. Typography

### Fonts to import
- **Headings**: `Playfair Display` (from Google Fonts) — weight 400 and 500 only
- **Body text**: `Inter` or `DM Sans` (from Google Fonts) — weights 400 and 500

### Scale
| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Page title (e.g. "Research Engagements") | Playfair Display | 36–40px | 400 | `#f0eae4` |
| Section subtitle (e.g. "ACADEMIC INQUIRY") | Inter/DM Sans | 11px, uppercase, letter-spacing 0.08em | 500 | `#7C5CFC` |
| Card title (e.g. "MTR-VP") | Playfair Display | 22–24px | 400 | `#f0eae4` |
| Card subtitle/metadata | Inter/DM Sans | 13px | 400 | `#b8b0a8` |
| Body text | Inter/DM Sans | 15px, line-height 1.7 | 400 | `#b8b0a8` |
| Tags/pills | Inter/DM Sans | 11–12px | 500 | Per research-area color |
| Nav links | Inter/DM Sans | 14px | 500 | `#b8b0a8`, active: `#f0eae4` |

### Key rule
Replace ALL current sans-serif headings (the bold black serif-like font currently used for "Research Engagements", "Professional Experience", etc.) with Playfair Display at weight 400. The current headings look heavy and template-like. Playfair at normal weight is elegant and warm.

---

## 3. Artistic/illustrative touches

These are what make the site feel personal rather than templated. Implement all of them.

### 3a. Watercolor glow backgrounds
Use soft, large CSS radial gradients with very low opacity accent colors to create a "paint bleeding on paper" effect. These should be subtle, not overpowering.

**Homepage hero area:**
```css
.hero::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -80px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(124, 92, 252, 0.12) 0%, transparent 70%);
  pointer-events: none;
}
.hero::after {
  content: '';
  position: absolute;
  bottom: -60px;
  left: 40px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 111, 97, 0.08) 0%, transparent 70%);
  pointer-events: none;
}
```

**Research page header:** Violet + teal glows
**Experience page header:** Marigold + coral glows
**Publications page header:** Coral + violet glows

Each page should have its own subtle color glow combination in the header area. Keep opacity between 0.06 and 0.15 so it's felt, not seen.

### 3b. Math notation watermark
In the hero section and/or the research page background, add very faint (opacity 0.03–0.05), large mathematical notation as a decorative texture. Use actual math symbols rendered in a light serif font:

Examples of text to scatter: `∫`, `P(A|B)`, `∑`, `∇`, `E[X]`, `σ²`, `∂/∂x`, `lim`, `→ ∞`

These should be:
- Scattered at various angles (rotated 10–30 degrees)
- Very large (40–80px font size)
- Nearly invisible (opacity 0.03–0.05 in the warm cream color)
- Position: absolute, behind all content
- Not readable as equations, just felt as texture

### 3c. Paint-splash profile photo mask
Instead of a circular or rectangular photo, use an organic SVG clip-path that looks like a paint splash or ink blot. The shape should be asymmetric and natural-looking.

```css
.profile-photo {
  clip-path: url(#paint-splash-mask);
  /* OR use a blob-like clip-path: */
  clip-path: polygon(
    30% 0%, 70% 0%, 95% 20%, 100% 50%,
    90% 80%, 70% 100%, 30% 95%, 10% 80%,
    0% 50%, 5% 20%
  );
}
```

Create a custom SVG clipPath with organic, painterly curves (bezier curves, not straight lines) for a more natural look. The edges should look like watercolor bleeding.

### 3d. Hand-drawn section dividers
Replace all `<hr>` elements and hard line dividers between sections with SVG paths that look slightly hand-drawn (organic, slightly wobbly). Example:

```svg
<svg width="100%" height="20" viewBox="0 0 600 20">
  <path d="M0 10 Q150 4, 300 10 T600 10"
    stroke="rgba(240,234,228,0.15)"
    stroke-width="1.5"
    fill="none"
    stroke-linecap="round"/>
</svg>
```

Create 3–4 variations and randomly use them across the site for visual variety.

---

## 4. Component styles

### 4a. Cards (research, experience, publication cards)
```css
.card {
  background: #232136;
  border: 0.5px solid rgba(240, 234, 228, 0.08);
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s, transform 0.2s;
}
.card:hover {
  border-color: rgba(124, 92, 252, 0.3);
  transform: translateY(-2px);
}
```

### 4b. Research cards — color-coded left border
Each research project card gets a 3px left border in its theme color:
- Perception/vision projects: `#7C5CFC` (violet)
- MARL/multi-agent projects: `#2EC4B6` (teal)
- Trajectory/planning projects: `#FF6F61` (coral)
- Industry work: `#F4A940` (marigold)

```css
.card--perception { border-left: 3px solid #7C5CFC; }
.card--marl { border-left: 3px solid #2EC4B6; }
.card--planning { border-left: 3px solid #FF6F61; }
.card--industry { border-left: 3px solid #F4A940; }
```

### 4c. Tags/pills
Tags should use the research-area color system with low-opacity backgrounds:

```css
.tag--perception {
  background: rgba(124, 92, 252, 0.15);
  color: #c4b8fc;
  border: none;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 11px;
}
.tag--marl {
  background: rgba(46, 196, 182, 0.15);
  color: #6ee0d3;
}
.tag--planning {
  background: rgba(255, 111, 97, 0.15);
  color: #ffa69e;
}
.tag--industry {
  background: rgba(244, 169, 64, 0.15);
  color: #f7c97e;
}
```

### 4d. Buttons
```css
.btn-primary {
  background: transparent;
  border: 1px solid rgba(124, 92, 252, 0.4);
  color: #c4b8fc;
  border-radius: 8px;
  padding: 8px 20px;
  font-size: 14px;
  transition: all 0.2s;
}
.btn-primary:hover {
  background: rgba(124, 92, 252, 0.15);
  border-color: #7C5CFC;
  color: #f0eae4;
}
```

### 4e. Navigation bar
- Background: `#1a1a2e` with a very subtle bottom border `rgba(240,234,228,0.08)`
- Logo/name: Playfair Display, 18px, `#f0eae4`
- "Ph.D. Student" badge: small pill with violet background `rgba(124,92,252,0.15)`, color `#c4b8fc`
- Nav links: `#b8b0a8`, hover: `#f0eae4`, active page: `#f0eae4` with a small violet dot or underline below

### 4f. Footer
- Background: same as page `#1a1a2e` or slightly darker
- Text: `#8a8279`
- Social icons: `#b8b0a8`, hover: `#7C5CFC`

---

## 5. Page-specific instructions

### 5a. Homepage

**Hero section:**
- Dark background with watercolor glow effects (violet top-right, coral bottom-left)
- Name "Maitrayee Keskar" in Playfair Display, 40–48px, `#f0eae4`
- Subtitle "Ph.D. Student in EECS" in Inter, 16px, `#b8b0a8`
- "UNIVERSITY OF CALIFORNIA, MERCED" in Inter, 11px uppercase, letter-spacing 0.08em, `#7C5CFC`
- Bio text in Inter, 15px, line-height 1.7, `#b8b0a8`
- Profile photo with paint-splash clip-path mask
- Faint math notation watermark behind the hero content
- "Explore Research" and "Publications" buttons in the outlined button style

**Radar chart / skill visualization:**
- Keep the existing functionality but restyle:
  - Chart lines/grid: `rgba(240,234,228,0.08)`
  - Data fill: `rgba(124,92,252,0.2)` with `#7C5CFC` border
  - Labels: `#b8b0a8`
  - Category tags around the chart should use the color-coded tag style

**Education cards:**
- Use the dark card style (`#232136` background)
- Degree name in Playfair Display
- University in Inter, `#b8b0a8`
- Status badge: "STARTING AUGUST 2026" in violet, "COMPLETED" in teal, "CUM LAUDE" in marigold

**Key milestones section:**
- Cards with subtle left borders
- "WAYMO CHALLENGE" label in violet
- "PUBLICATIONS" label in coral
- "ENTERPRISE AI" label in marigold
- Icons: use the current icons but color them with the respective accent colors

**Connect & Collaborate:**
- Cards: dark style with icon colored in respective brand/accent color
- On hover: subtle glow in the card's accent color

### 5b. Research page

**Page header:**
- "ACADEMIC INQUIRY" label in violet uppercase
- "Research Engagements" in Playfair Display, 36px
- Intro paragraph in body text style
- Watercolor glow: violet + teal behind the header

**Research cards — CONTENT CHANGES (important):**
Replace the current resume-style bullet points with narrative paragraphs. Each card should have:

1. **Project name** as the card title in Playfair Display (e.g., "MTR-VP" not "LISA Lab, UC San Diego")
2. **Lab and credential line** below in small uppercase violet text (e.g., "LISA LAB · WAYMO CHALLENGE TOP-15")
3. **Advisor and dates** in secondary text
4. **A narrative paragraph** (3-4 sentences) explaining what the problem was, what you did, and why it matters. Written in first person, conversational but precise.
5. **Color-coded tags** at the bottom
6. **Color-coded left border** matching the research area

Here are the narrative paragraphs to use:

**Card 1 — MTR-VP (border: coral)**
Title: MTR-VP
Subtitle: LISA LAB · MI3 LAB · WAYMO CHALLENGE TOP-15
Advisor: Prof. Ross Greer (UC Merced) & Prof. Mohan Trivedi (UCSD) · April 2021 – Present

> Most autonomous driving systems depend on expensive, pre-built HD maps to plan safe trajectories. But maps go stale, they're costly to maintain, and they don't exist for every road. I designed a vision-first trajectory planning architecture that replaces HD-map inputs with learned visual representations from a Vision Transformer, fused through a cross-attention decoder that combines what the vehicle intends to do with what the camera observes. As a two-person team with Prof. Ross Greer, this work placed top-15 globally in the Waymo Open End-to-End Driving Challenge. A first-authored paper has been submitted to IEEE Robotics and Automation Letters.

Tags: Trajectory Planning, Vision Transformers, PyTorch

**Card 2 — Anchor-free vehicle substructure detection (border: violet)**
Title: Lights as points
Subtitle: LISA LAB · IEEE RA-L FIRST AUTHOR
Advisor: Prof. Mohan Trivedi · April 2021 – 2024

> Detecting a vehicle as a single bounding box discards a lot of useful information: which lights are on, where the wheels are, how the body is oriented. I adapted the anchor-free CenterNet architecture to jointly detect vehicles and their substructures as keypoints, building a custom detection head and loss function in PyTorch. The model achieved 78.2% AP on the ApolloCar3D dataset and was published as a first-author paper in IEEE Robotics and Automation Letters.

Tags: Computer Vision, Keypoint Detection, PyTorch

**Card 3 — Communication-aware MARL (border: teal)**
Title: Communication bounds for multi-agent learning
Subtitle: MINDS LAB
Advisor: Prof. Parinaz Naghizadeh · Jan 2025 – Jan 2026

> When multiple agents need to learn together in a decentralized setting, how much do they need to communicate, and how does that communication affect how quickly they learn? I worked on building a theoretical framework that formally connects the structure of communication protocols to the sample complexity of multi-agent reinforcement learning algorithms. Using adapted Optimized Maximum Likelihood Estimation methods, I established bounds on how well an agent can observe its environment under limited bandwidth, with formal guarantees on how specific communication schemes affect training efficiency and convergence.

Tags: MARL, Probability & Stats, Optimization, Sample Complexity

**Card 4 — Attention-based multi-agent coordination (border: teal)**
Title: Self-attention policies for multi-robot games
Subtitle: EXISTENTIAL ROBOTICS LAB · IROS 2026 SUBMISSION
Advisor: Prof. Nikolay Atanasov · Nov 2024 – Sep 2025

> How should we evaluate whether lightweight, attention-based policies actually work for multi-robot coordination? I built the experimental validation framework for a self-attention-based MARL policy, implementing a Graph Attention Network baseline within the BenchMARL framework and designing a head-to-head evaluation suite with metrics like capture rate and inter-agent distance. This contributed to a co-authored submission to IROS on model-free policy gradient methods for distributed multi-agent games.

Tags: Graph Neural Networks, MARL, BenchMARL, TorchRL

### 5c. Experience page

**Page header:**
- "INDUSTRY IMPACT" label in marigold uppercase
- "Professional Experience" in Playfair Display
- Watercolor glow: marigold + coral

**Experience cards — CONTENT CHANGES:**
Replace bullet points with narrative paragraphs. Use marigold left border for all industry cards.

**Card 1 — AI Software Engineer at Balbix (border: marigold)**
Title: AI Software Engineer
Subtitle: BALBIX · SAN JOSE, CA
Dates: July 2022 – August 2024

> Balbix is a cybersecurity platform that helps enterprises understand and reduce their breach risk. As a software engineer on the AI team, I built the data infrastructure that made this possible at scale: PySpark pipelines processing 500k+ real-time vulnerability feeds, Airflow-orchestrated workflows cataloging risk attributes across 2M+ end-of-life software packages, and high-throughput Cassandra event architectures tracking state changes across 5M+ customer endpoints. I also built the statistical models underneath the product's risk predictions, mapping CVSS scores and CWE classifications to organizational breach likelihood, and presented these frameworks directly to the CTO and VP of Engineering. Working at production scale for two years gave me an engineering discipline that directly shapes how I approach research systems today.

Tags: PySpark, Cassandra, Kubernetes, Airflow, Python, AWS, Statistical Modeling

**Card 2 — Engineering Intern at Balbix (border: marigold)**
Title: Engineering Intern
Subtitle: BALBIX · SAN JOSE, CA
Dates: June 2021 – September 2021

> During my internship, I built reinforcement learning models (Q-learning and Actor-Critic) in custom OpenAI Gym environments to simulate how attackers move laterally through corporate networks, and used those simulations to model optimal defense strategies. This was my first exposure to RL in a practical setting, and it planted the seed for the multi-agent RL work I would later pursue in graduate school.

Tags: Reinforcement Learning, Q-Learning, Actor-Critic, Python, OpenAI Gym

### 5d. Publications page

This page is already well-structured. Keep the search bar, filter tags, and card layout. Changes:

- Restyle all cards to dark theme (`#232136` background)
- Venue names (e.g., "IEEE ROBOTICS AND AUTOMATION LETTERS") in violet uppercase
- Paper titles in Playfair Display, `#f0eae4`
- Author list in Inter, `#b8b0a8`, with my name ("Keskar, M.") highlighted in `#7C5CFC`
- Tags use the color-coded system (not generic gray)
- "Preview Abstract" and "PDF" buttons in the outlined button style
- Search bar: dark input (`#232136` background, `rgba(240,234,228,0.1)` border, `#f0eae4` text, `#b8b0a8` placeholder)
- Filter tag pills: use the color-coded tag styles, with active state having slightly higher opacity background

### 5e. Skills page

- Restyle the skill grid cards to dark theme
- Category tabs ("All Skills", "Languages", etc.): dark tab style, active tab has violet underline or background
- Each skill card: `#232136` background, skill name in `#f0eae4`, category label ("LANGUAGE", "FRAMEWORK", "INFRA") color-coded:
  - LANGUAGE: `#b8b0a8` (neutral)
  - FRAMEWORK: `#7C5CFC` (violet)
  - INFRA: `#F4A940` (marigold)
- Interactive Skill Graph: restyle with the new palette, use accent colors for connections

---

## 6. Animations and micro-interactions

Keep these subtle. The site should feel alive, not busy.

- **Cards**: On hover, slight translateY(-2px) and border glow in the card's accent color
- **Page transitions**: Gentle fade-in (opacity 0 to 1, 300ms) when navigating between pages
- **Tags**: On hover, slight brightness increase
- **Watercolor glows**: Very slow, subtle pulse animation (scale 1.0 to 1.05, 8-10 second cycle) to make them feel organic, like paint slowly spreading. Keep this extremely subtle.
- **Scroll reveal**: Cards and sections fade in + slide up slightly (translateY(20px) to 0) as they enter the viewport. Use Intersection Observer. Stagger multiple cards by 100ms each.
- **Nav links**: Smooth underline animation on hover

---

## 7. Responsive considerations

- On mobile, watercolor glows should be smaller and lower opacity to avoid visual clutter
- Cards should stack single-column on mobile
- Math notation watermark should be hidden on screens below 768px
- Profile photo paint-splash mask should scale gracefully
- Navigation should collapse to a hamburger menu (already implemented, just restyle with dark theme)

---

## 8. Summary of what to remove

- All blue (#3B82F6 or similar) accent colors — replace with the violet/coral/teal/marigold system
- White/light backgrounds everywhere — replace with dark palette
- Bold sans-serif headings — replace with Playfair Display at normal weight
- Resume-style bullet points on Research and Experience pages — replace with narrative paragraphs (provided above)
- Straight-line dividers — replace with hand-drawn SVG paths
- Generic gray tags — replace with color-coded research-area tags
- The plain circular/rectangular photo treatment — replace with paint-splash mask
