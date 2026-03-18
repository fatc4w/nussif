# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server on localhost:8080

# Build
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build

# Quality
npm run lint         # ESLint
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
```

## Architecture

This is a NUSSIF (NUS Student Investment Fund) marketing website built with:
- **Vite + React 18 + TypeScript** - SPA with client-side routing
- **Tailwind CSS + shadcn/ui** - Styling with Radix primitives
- **React Router** - Client-side routing (/, /program, /people)
- **Vitest + Testing Library** - Component testing with jsdom

### Path Alias
`@` maps to `./src` - use `@/components/...` for imports

### Project Structure
- `src/pages/` - Route components (AboutPage, ProgramPage, PeoplePage)
- `src/components/` - Reusable components (Navbar, Footer, HeroSection)
- `src/components/ui/` - shadcn/ui primitives (do not modify directly)
- `src/hooks/` - Custom hooks (useScrollReveal, useCountUp, use-mobile)
- `src/lib/utils.ts` - `cn()` utility for className merging
- `src/assets/` - Static images (hero images, partner logos)

### Styling System
- **Fonts**: Cormorant Garamond (headings), DM Sans (body) via Google Fonts
- **Colors**: HSL CSS variables (--primary, --gold, --navy, etc.) in `src/index.css`
- **Component classes**: Defined in `@layer components` in `src/index.css`:
  - `.section-padding` - Consistent vertical spacing
  - `.container-site` - Max-width container with horizontal padding
  - `.heading-display`, `.heading-section`, `.heading-sub` - Typography hierarchy
  - `.body-text`, `.eyebrow` - Text styles
  - `.card-value`, `.gold-link`, `.nav-link` - Component patterns
  - `.fade-up` - Scroll reveal animation (add `.visible` to trigger)

### Key Patterns
- Pages use `useScrollReveal()` hook for scroll-triggered animations
- `useCountUp()` provides animated number counting with IntersectionObserver
- HeroSection component is reused across pages with full-height hero images
- React Query is set up but currently unused (available for future API calls)
