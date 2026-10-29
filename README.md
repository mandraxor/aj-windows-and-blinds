# AJ Blind Installations & Repair

Flagship, high-converting, multi-page web application for **AJ Blind Installations and Repair**, Henderson, NV's premier window treatment restoration and installation specialist.

## Business Background & Core Client Edge
- **Owner / Master Craftsman:** Alfredo Juarez
- **Experience:** 29 Years in Business (Serving Southern Nevada since 1997)
- **Track Record:** Thumbtack "Top Pro" with a **5.0-Star Rating across 25 reviews** (96% 5-star, 4% 4-star, 0% negative) and **41+ verified hires**.
- **Team Model:** 2-Person Dedicated Master Team (Alfredo + Master Assistant; zero outsourced third-party subcontractors).
- **Core Competitive Edge:** **Honest, precision repairs that extend the life of existing blinds and shutters** instead of pushing expensive full replacements (like Lowe's, Home Depot, or retail franchises).
- **Specializations:**
  - Plantation shutter louver restitching, invisible staple re-pinning, and frame realignment
  - Faux wood & real wood blind restringing (UV-resistant diamond cord) and metal tilt gear swaps
  - Roller & solar shade commercial Rollease clutch replacements and bead chain repairs
  - High-ceiling installations (15ft - 25ft great rooms with scaffolding and dual-axis laser leveling)
  - Motorized shade diagnostics (Somfy, Hunter Douglas PowerView, limit reprogramming, battery wands)
  - Custom new sales and wholesale-direct installations when replacement is genuinely needed

---

## Design System: "Desert Modern Architectural"
- **Aesthetic Tone:** Clean, sunlit, high-trust luxury craftsmanship.
- **Color Palette:**
  - Warm Alabaster (`#FAF8F5`, `#F3EFEA`) background and card tints
  - Deep Charcoal (`#18181B`, `#0F0F11`) typography and architectural structures
  - Brushed Bronze / Warm Amber (`#B45309`, `#D97706`, `#FEF3C7`) primary accents & CTA buttons
  - Desert Sage (`#4D7C0F`, `#3F6212`, `#ECFCCB`) for "Repair vs. Replace" savings badges
- **Typography:** Modern geometric sans-serif with high contrast and legibility.

---

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom desert palette and glassmorphism utilities
- **Icons:** Lucide React
- **Micro-Interactions:** Canvas Confetti for quote conversions and interactive state transitions
- **Architecture:** Client Context (`EstimateModalProvider`) enabling global modal triggering from any component or page

---

## Site Pages & Architecture
- `/`: Flagship homepage featuring Hero, Interactive Repair vs. Replace Calculator, 6 Core Services tabs, Why Alfredo 4 Pillars & Comparison Table, Before & After Slider, Authentic Reviews (5.0★), Local Nevada Service Areas, FAQs, and Conversion Banner.
- `/services`: Comprehensive Services Hub detailing mobile van stock, turnaround times, and supported brands.
- `/services/[slug]`: In-depth individual technical pages for:
  - `blind-repair-restringing`
  - `plantation-shutter-repair`
  - `roller-shade-repair-clutch`
  - `high-ceiling-drapery-installation`
  - `motorized-smart-shade-repair`
  - `custom-window-treatments-installation`
- `/calculator`: Standalone "Repair vs. Replace" Cost Guide and interactive calculator.
- `/gallery`: Interactive Before & After portfolio with failure vs. restored toggle modes.
- `/reviews`: Thumbtack Top Pro social proof showcase and customer testimonial submission form.
- `/service-areas`: Comprehensive Clark County community hub (Anthem, Seven Hills, Inspirada, Green Valley, Summerlin, Lake Las Vegas, Centennial Hills, Rhodes Ranch, North Las Vegas).
- `/about`: The 29-year story of Alfredo Juarez, master craftsmanship philosophy, and the 2-man crew edge.
- `/contact`: Direct photo diagnostic submission, tap-to-call, and SMS dispatch.

---

## Development & Production Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Create optimized production build
npm run build

# Start production server
npm start
```
