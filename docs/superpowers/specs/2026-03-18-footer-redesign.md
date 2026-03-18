# Footer Redesign Spec

## Overview
Replace the current simple footer with a ReactBits Pro footer-1 component, adapted for NUSSIF branding.

## Requirements
- Minimal footer with essential navigation + social links
- Large "NUSSIF" wordmark at the bottom
- LinkedIn only (structured for future social expansion)
- Smooth scroll-triggered animations via framer-motion

## Design

### Structure
- **Branding column**: NUSSIF logo, tagline, establishment line
- **Navigate card**: About, Program, People (internal links via React Router)
- **Connect card**: LinkedIn link (array structure for future socials)
- **Wordmark**: Large "NUSSIF" SVG spanning full width

### Styling
- Background: `bg-navy-deep` (existing color)
- Text: `primary-foreground` with muted variants
- Cards: bordered with hover states
- Fonts: Cormorant Garamond (branding), DM Sans (links)
- Animations: framer-motion fade-in on scroll

### Dependencies
- `motion` (framer-motion v11+)

## Implementation Steps
1. Install framer-motion via `npx shadcn@latest add @reactbits-pro/footer-1`
2. Create new Footer component based on footer-1 template
3. Adapt content: NUSSIF branding, navigation links, LinkedIn
4. Create NUSSIF wordmark SVG
5. Apply project styling (colors, fonts, container classes)
6. Replace existing Footer import in layout
