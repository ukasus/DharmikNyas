# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build (outputs to dist/)
npm run preview    # Preview production build locally
npm run lint       # ESLint with zero max-warnings policy
npm run deploy     # Deploy to GitHub Pages (requires prior build)
```

There are no tests in this project.

## Architecture

This is a single-page React 18 application for "Prabhu Shri Ram Dharmik Nyas" — a religious trust in Unn Shamli, Uttar Pradesh. Built with Vite, deployed to GitHub Pages.

**Single-page, anchor-based navigation** — no router library. Sections are linked via `href="#home"`, `#about"`, `#gallery"`, `#contact"`, each section having a matching `id` attribute.

**Component tree:**
```
I18nProvider (src/i18n.jsx)
└── App
    ├── Navbar
    ├── HeroSlider
    ├── NoticesMarquee
    ├── Sections  (About, Gallery, Contact)
    └── Footer
```

**State management:** React Context only (no Redux/Zustand). The sole Context is `I18nContext` in `src/i18n.jsx`, which exposes `lang`, `setLang`, and a `t()` translation function. Language preference persists to `localStorage`. All other state is local to components (`isOpen` for mobile menu, `index` for carousel slide, `fontScale` for accessibility).

**Styling:** Custom CSS in `src/App.css` and `src/index.css` — no CSS framework. Responsive breakpoints at 600px, 768px, 992px. Accessibility font scaling uses CSS custom property `--dn-font-scale`, toggled by A-/A/A+ buttons in the topbar.

**Internationalization:** Hindi (`hi`) and English (`en`) — all UI strings live as keys in `src/i18n.jsx`. Use the `t()` hook from `useI18n()` in every component that renders text.

**Deployment:** GitHub Actions workflow (`.github/workflows/publish.yml`) builds with Node 20 and deploys to GitHub Pages on every push to `main`. The base URL is `/`.
