# Sanchez Solutions Portfolio

A premium, cyber-industrial themed software showcase designed to market, present, and license enterprise-grade software products: **T.R.A.C.E. (Asset Management Engine)**, **EquiYield (Cooperative Savings Suite)**, **CCARD Studio (Calling Card & Business Card Generator)**, **DPA Mastery (Spaced Repetition NPC DPO Prep)**, **SILIP (Philippine Data Privacy Search Engine)**, **Vault Drop Explorer (Cloud Object Storage File Manager)**, and **Synapse (Academic Spaced Repetition Engine)**, alongside active pipeline slots for **Tanod**, **Tala**, **Apex Smile**, **Beacon**, **Cellular Bridge**, **Susi**, **MLBB Forge**, and **SolarCalc**.

## 🌟 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 + Glassmorphism / Pulse Animations
- **Typography:** Outfit (Headings) & Plus Jakarta Sans (Body)
- **Icons:** FontAwesome (embedded CDN)
- **Language:** TypeScript / React

## 📂 Project Structure

- `app/`: Next.js pages, fonts, metadata, and styles.
  - `globals.css`: Global baseline styles, Tailwind configuration, custom theme definitions, scrollbars, and keyframes.
  - `layout.tsx`: Layout wrapper containing SEO metadata keywords, Google Font integrations, and CDNs.
  - `page.tsx`: Single-page index containing the Hero section, product lists, and interactive forms.
- `components/`: Modular UI units.
  - `Navbar.tsx`: Sticky glassmorphic navigator with mobile drawer support.
  - `ProductCard.tsx`: Detailed feature breakdown, tag renderer, credential boxes, and action logs.
  - `PricingModal.tsx`: Quote request intake form with interactive submission simulation.

## 🚀 Running Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Dev Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

3. **Production Build:**
   ```bash
   npm run build
   ```
