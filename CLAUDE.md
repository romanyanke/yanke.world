# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` - Start dev server on port 3000
- `npm run build` - Production build (outputs to `dist/`, includes HTML minification)
- `npm run preview` - Preview production build

## Architecture

This is a personal homepage built with Vite and TypeScript. It's a single-page static site with PWA support.

### Custom Vite Plugin

`vite.config.js` includes a custom `inlineSvgPlugin` that transforms `<inline svg="path" />` tags in HTML into actual SVG content at build time.

### Theme System

The site has day/night theme switching:
- Uses the `daynight` library to detect time-based theme, falls back to `prefers-color-scheme`
- Theme is toggled by clicking the header
- CSS variables in `src/app.css` define `.day` and `.night` color schemes
- `--day-length` CSS variable controls animation duration and is read by JS for cooldown

### Entry Points

- `index.html` - Main HTML with inline CSS imports
- `src/app.ts` - JS entry point, imports theme and feature scripts
- `src/app.css` - CSS entry point, imports component styles

### Scripts

- `src/script/theme.ts` - Theme detection and toggle logic
- `src/script/switch-theme.ts` - Click handler for theme toggle with animation cooldown
- `src/script/pencil.ts` - Fetches pencil collection stats from external API
- `src/script/calendar.ts` - Easter egg: milestone alerts based on theme toggle count
