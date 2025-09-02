# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` or `pnpm dev` - Start development server with Turbo (recommended)
- `npm run build` - Build production bundle with Turbo
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Architecture

This is a Next.js 15 portfolio website with App Router featuring a terminal-themed UI.

### Key Structure
- `src/app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components (not in src/)
- `src/api/contact/route.ts` - API route for contact form

### Core Components
- `HeroTerminal` - Interactive terminal simulation with auto-typing animation and command execution
- `Section` - Layout wrapper for main content sections
- `ProjectCard` - Display component for portfolio projects
- `ContactForm` - Form component that posts to `/api/contact`
- `Header` - Navigation header with theme switcher
- `ProgressBar` - Page loading indicator

### Styling & Theme
- Uses Tailwind CSS v4 with custom config
- Dark theme by default with `next-themes`
- Terminal aesthetic with monospace fonts (JetBrains Mono)
- Custom glow shadows and terminal styling with `.crt-grid` effects
- Color scheme: emerald accents, dark backgrounds, white/gray text

### Key Dependencies
- Next.js 15 with App Router
- React 19
- Framer Motion for animations
- Lucide React for icons
- TypeScript with strict mode

### Configuration Notes
- Uses Turbo for faster builds/dev
- Path alias `@/*` maps to `./src/*`
- Tailwind content includes `./app/**/*.{ts,tsx}` and `./components/**/*.{ts,tsx}`
- Theme provider configured for dark-only mode

### Code Patterns
- Client components use `"use client"` directive
- Form handling with FormData API
- Smooth scrolling navigation via `scrollIntoView`
- Auto-typing terminal effects with useEffect timers