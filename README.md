# Immbark — Hero Banner Test

A Next.js project built as a test task to recreate and improve upon the **Immbark** immigration platform's landing page design — featuring a top navigation bar and a creative auto-playing hero banner slider.

---

## Overview

The goal of this task was to:

- Build a **top navigation bar** matching the Immbark brand (logo, centered nav links, Login button, search icon, mobile hamburger menu)
- Build a **creative hero banner** inspired by the reference design with the same forest-green color palette, serif headline typography, and original copy
- Replace the static hero with an **animated 3-slide carousel** featuring wipe transitions, ken-burns photo effect, staggered text animations, and progress indicators

---

## Tech Stack

| Tool | Version |
|---|---|
| [Next.js](https://nextjs.org) | 16.3 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Fonts | [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif) + [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (sans-serif) |

---

## Features

### Navigation
- Responsive header with centered desktop nav links
- Pill-shaped Login button + circular search icon
- Mobile hamburger menu with slide-down drawer

### Hero Slider
- **3 slides** with unique headlines, body copy, and photography
- **Auto-advances** every 6 seconds; pauses on hover
- **Wipe + fade transition** between slides
- **Ken-Burns** zoom effect on the active photo
- **Staggered text animation** on slide entry
- **Progress bars** — desktop vertical rail on right, mobile dot-bars at bottom
- Prev / Next arrow controls
- **Touch swipe** support on mobile

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Tailwind + custom animations
│   ├── layout.tsx        # Root layout, Google Fonts setup
│   └── page.tsx          # Home page
└── components/
    ├── Header.tsx         # Top navigation bar
    └── HeroBanner.tsx     # 3-slide hero carousel
public/
├── hero-1.jpg            # Slide 1 photo
├── hero-2.jpg            # Slide 2 photo
└── hero-3.jpg            # Slide 3 photo
```

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `immbark` | `#1a4338` | Primary brand green |
| `immbark-deep` | `#14352c` | Hover / shadow |
| `immbark-soft` | `#2a5c4d` | Gradient accent |
| White | `#ffffff` | Text, buttons |
| `immbark-nav` | `#4b5563` | Nav link text |
| `immbark-search` | `#eef0f2` | Icon button backgrounds |

---

## Build

```bash
npm run build
npm run start
```
