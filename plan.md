# CloudCom 2026 Website Implementation Plan

## Overview
This document provides a comprehensive, actionable plan for building a production-ready CloudCom 2026 conference website, inspired by the CloudCom 2025 site structure but fully adapted for Paris, France. The site will be secure, GDPR-compliant, performant, and maintainable.

**Key Changes from 2025**:
- Year: 2025 → 2026 (dates: Nov 12-14, 2026)
- Location: Shenzhen/Guangdong → Paris, France (venue: Sorbonne Université; airport: CDG; currency: EUR)
- Sponsors: Remove Guangdong references; add Montimage as primary sponsor
- Assets: All media versioned and optimized—no external dependencies
- **Tech Stack** (Simplified):
  - Frontend: React.js (Vite), Tailwind CSS v4, Lucide icons, React Router
  - Forms: React Hook Form + Zod validation (no Redux needed for this use case)
  - State: React Context API for simple global state (theme, language)
  - Hosting: Netlify with staging + production environments
  - CDN: Cloudinary or Netlify Large Media for assets

**Assumptions**:
- Team: 1-2 mid-level React devs + 1 designer/QA (full-time equivalent)
- Timeline: **12-14 developer-days** (3 weeks with 1 dev; includes buffer)
- Content: Adapted from 2025 with Paris-specific updates
- Deliverables:
  - Staging: https://staging--cloudcom-2026.netlify.app
  - Production: https://cloudcom2026.org (custom domain)
- Tools: VS Code, GitHub (with branch protection), Figma, Netlify CLI, Playwright for E2E
- **Compliance**: GDPR-compliant forms, cookie consent, privacy policy

**Risks & Mitigations**:
| Risk | Impact | Mitigation |
|------|--------|------------|
| Asset breakage | High | Version all assets in repo; use CDN with fallbacks |
| Scope creep | Medium | Strict change control; no new features without timeline adjustment |
| GDPR non-compliance | Critical | Implement cookie consent; audit forms; add privacy policy |
| Performance issues | Medium | Lazy loading, image optimization, bundle analysis, 95+ Lighthouse target |
| External dependencies | Medium | Vendor assets locally; minimize third-party scripts |
| Security vulnerabilities | High | CSP headers, form validation, rate limiting, security audit |

## Phases and Detailed Tasks
Phases are sequential but allow parallel work (e.g., components during setup). Each task includes: **Owner** (e.g., Dev1), **Est. Time** (hours), **Dependencies**, **Success Criteria**, and **Output**.

### Phase 1: Project Setup and Environment (1.5 days / 12 hours)
**Goal**: Scaffold project with proper tooling, environment configuration, and CI/CD pipeline.

| Task ID | Description | Owner | Est. Time | Dependencies | Success Criteria | Output |
|---------|-------------|-------|-----------|--------------|------------------|--------|
| 1.1 | Initialize Vite + React project: `npm create vite@latest cloudcom-2026 -- --template react-ts`; configure `vite.config.ts` (base: '/', optimize deps, define env vars). Add TypeScript for better DX. | Dev1 | 1.5h | None | Dev server runs at `localhost:5173`; TS compiles without errors. | Project folder with `package.json`, `tsconfig.json`. |
| 1.2 | Install dependencies: `npm i react-router-dom react-hook-form zod @hookform/resolvers react-helmet-async clsx`; `npm i -D tailwindcss@next postcss autoprefixer lucide-react @types/react @types/react-dom`. Init Tailwind. Configure `tailwind.config.js` with theme, colors (ieee-blue: '#0056b3'), fonts (Inter). | Dev1 | 1h | 1.1 | No errors; Tailwind applies; test with `className="bg-ieee-blue"`. | `package.json`, `tailwind.config.js`, `postcss.config.js`. |
| 1.3 | **Environment Setup**: Create `.env.example`, `.env.development`, `.env.production`. Add variables: `VITE_API_URL`, `VITE_SITE_URL`, `VITE_GA_ID`. Add `dotenv` handling in `vite.config.ts`. | Dev1 | 1h | 1.1 | Env vars accessible via `import.meta.env`. | `.env.*` files. |
| 1.4 | Download and organize assets: Create `/public/assets/` subdirs (logos/, images/, videos/, docs/, icons/). Download and optimize: logos (WebP + PNG fallback), images (paris-skyline.webp, 1920x1080), favicon set (favicon.ico, apple-touch-icon.png, favicon-32x32.png). Use `sharp` for optimization. Version assets with hash in filename. | Dev1 | 3h | 1.1 | All assets in `/public/assets/`; optimized (<500KB per image); script `npm run optimize-assets` works. | Populated `/public/assets/`; `scripts/optimize-assets.mjs`. |
| 1.5 | Setup project structure: Create folders: `src/components/`, `src/pages/`, `src/contexts/`, `src/hooks/`, `src/utils/`, `src/types/`, `src/config/`. Create README.md with setup instructions. | Dev1 | 1h | 1.2, 1.4 | Clean architecture; README has install steps. | Folder structure; README.md. |
| 1.6 | **Git & CI/CD Setup**: Init repo, `.gitignore` (node_modules, dist, .env, .DS_Store). Push to GitHub. Setup branch protection (require PR reviews). Create `.github/workflows/ci.yml`: Build on PR, run linter, type-check, tests. Add Netlify config: `netlify.toml` (build command, headers for security). | Dev1 | 2h | All above | CI runs on PR; branch protection active; Netlify preview deploys work. | GitHub repo with CI; `netlify.toml`. |
| 1.7 | **Code Quality Tools**: Setup ESLint + Prettier: `npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier`. Add `.eslintrc.json`, `.prettierrc`. Add scripts: `lint`, `format`. Setup Husky + lint-staged for pre-commit hooks. | Dev1 | 1.5h | 1.6 | `npm run lint` passes; pre-commit hooks work. | ESLint/Prettier configs; Husky setup. |
| 1.8 | **Component Library Setup**: Create base components: `Button.tsx`, `Container.tsx`, `Heading.tsx` with TypeScript props. Add Storybook (optional): `npx storybook@latest init`. | Dev1 | 1h | 1.5, 1.7 | Base components render; typed props work. | `/src/components/ui/`. |

**Logos & Assets Table** (Download to `/public/assets/`):
| Description | Source URL | Filename | Optimization |
|-------------|------------|----------|--------------|
| IEEE Master | https://www.ieee.org/content/dam/ieee-org/ieee/web/org/img/ieee_logo_black.png | logos/ieee-logo.{png,webp} | WebP + PNG fallback, 200x60px |
| CloudCom | https://cloudcom.org/wp-content/uploads/2023/10/cloudcom-logo.svg | logos/cloudcom-logo.svg | SVG optimized with SVGO |
| SMBU AI | http://www.cloudcom2025.org/images/smbu-ai-logo.png | logos/smbu-ai-logo.{png,webp} | WebP + PNG fallback, 150x50px |
| Montimage | https://montimage.eu/wp-content/uploads/2020/06/Montimage-logo.png | logos/montimage-logo.{png,webp} | WebP + PNG fallback, 250x80px |
| Paris Skyline | Unsplash/generated | images/paris-hero.webp | WebP, 1920x1080, <300KB |
| Social Share | Custom design | images/og-image.png | 1200x630px for Open Graph |

**Phase Deliverable**: Production-ready dev environment; CI/CD pipeline active; commit "Phase 1 Complete". **Total Effort**: 12h.

### Phase 2: Content Analysis and Information Architecture (1 day / 8 hours)
**Goal**: Create comprehensive content structure with SEO and accessibility in mind.

| Task ID | Description | Owner | Est. Time | Dependencies | Success Criteria | Output |
|---------|-------------|-------|-----------|--------------|------------------|--------|
| 2.1 | **Site Audit**: Crawl 2025 site using screaming frog/manual; document all pages, navigation structure, meta descriptions, headings hierarchy. Create content inventory spreadsheet (page, URL, title, meta, H1-H6, word count). | Dev1 | 2h | None | Complete inventory of 15+ pages with metadata. | `docs/content-inventory.xlsx`. |
| 2.2 | **Content Adaptation**: Create content migration doc: Map 2025→2026 changes (dates, locations, currencies, sponsors). Write Paris-specific content: venue details, travel guide, accommodation. Define new meta descriptions for SEO. | Content/Dev1 | 2h | 2.1 | All content ready; SEO-optimized descriptions (<160 chars); Paris info complete. | `docs/content-2026.md`. |
| 2.3 | **Information Architecture**: Create sitemap.xml structure, define URL slugs (e.g., `/call-for-papers`, `/registration`), plan internal linking strategy. Design navigation (primary, footer, mobile menu). Define 404 and legal pages (privacy, cookies, terms). | Dev1 | 2h | 2.2 | Sitemap covers all pages; URL structure RESTful; legal pages scoped. | `public/sitemap.xml` template; IA diagram. |
| 2.4 | **Wireframing**: Design in Figma: Home, Registration, CFP pages (desktop + mobile). Include GDPR elements (cookie banner position, privacy links). Create component library in Figma for consistency. | Designer | 2h | 2.3 | 5+ pages wireframed; responsive breakpoints (sm, md, lg); annotated for accessibility (ARIA labels). | Figma project with shared library. |

**Phase Deliverable**: Content strategy + wireframes; PR "Phase 2 Content & IA". **Total Effort**: 8h.

### Phase 3: Core Component Development (2.5 days / 20 hours)
**Goal**: Build accessible, typed, reusable components with comprehensive testing.

| Task ID | Description | Owner | Est. Time | Dependencies | Success Criteria | Output |
|---------|-------------|-------|-----------|--------------|------------------|--------|
| 3.1 | **Layout Components**: `Header.tsx` (Nav with Router Links, mobile menu, LogoGroup); `Footer.tsx` (sponsors, legal links, Montimage logo); `Layout.tsx` (<Header/><Outlet/><Footer/>, ScrollToTop); `SEO.tsx` (react-helmet-async wrapper for meta tags, Open Graph, Twitter Cards). All with TypeScript interfaces. | Dev1 | 4h | 1.8, 2.4 | Responsive; keyboard navigable; TypeScript errors-free. | `/src/components/layout/`. |
| 3.2 | **UI Components**: `Button.tsx` (variants: primary, secondary, outline; sizes: sm, md, lg); `Card.tsx` (with hover effects); `Section.tsx` (container, title, description props); `Timeline.tsx` (dates with icons); `Accordion.tsx` (controlled/uncontrolled); `Table.tsx` (responsive with horizontal scroll); `Modal.tsx` (accessible with focus trap). All with prop types, JSDoc. | Dev1 | 5h | 3.1 | Reusable; Tailwind styled; accessible (ARIA); documented. | `/src/components/ui/`. |
| 3.3 | **Form Components**: `Input.tsx`, `Select.tsx`, `Textarea.tsx`, `Checkbox.tsx`, `Radio.tsx` (compatible with React Hook Form, error states, labels, required indicators). `FormField.tsx` wrapper for consistent styling. | Dev1 | 3h | 3.2 | Forms integrate with Hook Form; validation errors display. | `/src/components/forms/`. |
| 3.4 | **Media Components**: `Image.tsx` (lazy loading, WebP with PNG fallback, blur placeholder); `Video.tsx` (controls, poster, autoplay option); `Icon.tsx` (Lucide wrapper with size prop). | Dev1 | 2h | 3.2 | Images lazy load; WebP supported; fallbacks work on Safari <14. | `/src/components/media/`. |
| 3.5 | **Component Testing**: Setup Vitest: `npm i -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom`. Write tests for 10+ core components (Button, Card, Form fields): render, interactions, accessibility. Target 90% coverage. | QA/Dev1 | 4h | 3.4 | `npm test` passes; coverage ≥90%; ARIA assertions pass. | `/src/components/**/*.test.tsx`; vitest.config.ts. |
| 3.6 | **Component Documentation**: Add JSDoc to all components; create `components.md` with usage examples, props tables. Setup TypeScript declaration maps for better DX. | Dev1 | 2h | 3.5 | TSDoc works in IDE; docs readable. | `/docs/components.md`. |

**Phase Deliverable**: Tested, documented component library. PR "Phase 3 Components". **Total Effort**: 20h.

### Phase 4: Page Implementation (2.5 days / 20 hours)
**Goal**: Build all pages with real content, SEO optimization, and proper routing.

| Task ID | Description | Owner | Est. Time | Dependencies | Success Criteria | Output |
|---------|-------------|-------|-----------|--------------|------------------|--------|
| 4.1 | **Home Page**: Hero section (bg-gradient, Paris image, title, date, CTA); About section; Tracks grid; Sponsors row; Key Dates timeline; Video embed (lazy loaded). Add structured data (Event schema.org). | Dev1 | 4h | 3.6, 2.2 | Content from content doc; Lighthouse SEO 100; schema validates. | `/src/pages/Home.tsx`. |
| 4.2 | **Content Pages (Batch 1)**: About (history, organizers), CFP (tracks accordion, important dates, submission link with external icon), Committees (tabs: organizing, program, steering). All with breadcrumbs. | Dev1 | 4h | 4.1 | Accurate content; internal links work; breadcrumbs navigate. | `/src/pages/{About,CFP,Committees}.tsx`. |
| 4.3 | **Content Pages (Batch 2)**: Keynotes (speaker cards, bios, photos), Program (schedule table, filters), Competitions (PDMR, Emotional - cards with prizes in €, deadlines). | Dev1 | 3h | 4.2 | Keynote bios from content doc; schedule sortable; prizes correct. | `/src/pages/{Keynotes,Program,Competitions}.tsx`. |
| 4.4 | **Interactive Pages**: Registration (multi-step form: personal info → affiliation → fees → payment mock), Contact (form + FAQ accordion, map iframe for Sorbonne), Visitor Info (travel, accommodation table, weather widget). | Dev1 | 5h | 4.3, 3.3 | Forms validate (Zod schema); map interactive; tables responsive. | `/src/pages/{Registration,Contact,Visitor}.tsx`. |
| 4.5 | **Legal & Utility Pages**: Privacy Policy (GDPR-compliant template), Cookie Policy, Terms of Service, 404 (with search/nav links), Sitemap page (auto-generated from routes). | Dev1 | 2h | 4.4 | Legal text reviewed; 404 helpful; sitemap.xml generated. | `/src/pages/{Privacy,Cookies,Terms,NotFound,Sitemap}.tsx`. |
| 4.6 | **Routing & Navigation**: Configure React Router: lazy loading, error boundaries, scroll restoration. Add navigation context for active states. Setup dynamic sitemap generation. | Dev1 | 2h | 4.5 | All pages routable; lazy loading works; error boundary catches errors. | `/src/router.tsx`; `/src/contexts/NavigationContext.tsx`. |

**Phase Deliverable**: Complete site with all pages. PR "Phase 4 Pages". **Total Effort**: 20h.

### Phase 5: State Management with Redux/Saga (1 day / 8 hours)
**Goal**: Setup Redux/Redux-Saga for future feature expansion (e.g., real-time updates, complex workflows).

| Task ID | Description | Owner | Est. Time | Dependencies | Success Criteria | Output |
|---------|-------------|-------|-----------|--------------|------------------|--------|
| 5.1 | **Redux Setup**: Install `npm i react-redux @reduxjs/toolkit redux-saga`. Create `store/index.ts`: configureStore with slices. Create `slices/registrationSlice.ts` (reducers: setStep, updateFormData, reset), `slices/uiSlice.ts` (theme, notifications). Wrap App with Provider. | Dev1 | 2h | 4.6 | useSelector/useDispatch typed; DevTools work. | `/src/store/`, `/src/slices/`. |
| 5.2 | **Saga Integration**: Create `sagas/registrationSaga.ts`: watchSubmitForm (takeLatest: validate → mock API call → delay 1s → success/error). Create `sagas/index.ts` rootSaga. Add saga middleware to store. | Dev1 | 2h | 5.1 | Saga intercepts actions; logs in DevTools; mock submission works. | `/src/sagas/`. |
| 5.3 | **Connect Forms**: Update Registration page: dispatch form steps, save data to Redux. Add persistence with `redux-persist` (localStorage). Add loading states. Contact form: dispatch submission to saga. | Dev1 | 3h | 5.2 | Multi-step form navigates; data persists on refresh; loading spinner shows. | Updated Registration/Contact pages. |
| 5.4 | **Redux Testing**: Write integration tests for reducers, selectors. Test saga flows with `redux-saga-test-plan`. | Dev1 | 1h | 5.3 | Tests pass; coverage ≥80% for store logic. | `/src/store/**/*.test.ts`. |

**Phase Deliverable**: State management ready for expansion. PR "Phase 5 Redux/Saga". **Total Effort**: 8h.

### Phase 6: Styling, Responsiveness, and Accessibility (1.5 days / 12 hours)
**Goal**: Ensure visual fidelity, responsive design, and WCAG 2.1 AA compliance.

| Task ID | Description | Owner | Est. Time | Dependencies | Success Criteria | Output |
|---------|-------------|-------|-----------|--------------|------------------|--------|
| 6.1 | **Tailwind Polish**: Create custom utilities in `index.css` (@layer components: .hero-gradient, .card-hover, etc.); add @tailwindcss/typography for prose; configure dark mode (class strategy). Add custom animations (fade-in, slide-up). | Dev1 | 3h | 5.4 | Styles consistent; animations smooth (60fps); dark mode toggles. | Updated `src/index.css`; dark mode component. |
| 6.2 | **Responsive Design**: Test all pages at breakpoints (320px, 768px, 1024px, 1920px). Fix: mobile nav (hamburger), tables (horizontal scroll), images (srcset for responsive), forms (full-width on mobile). Use Chrome DevTools + real devices. | Dev1/QA | 3h | 6.1 | No horizontal scroll; content readable at all sizes; touch targets ≥44px. | Responsive fixes committed. |
| 6.3 | **Accessibility Audit**: Run axe DevTools + WAVE; fix issues: ARIA labels (buttons, icons), alt text (all images), semantic HTML (<nav>, <main>, <article>), focus indicators (keyboard nav), color contrast (WCAG AA: 4.5:1). Test with screen reader (NVDA/VoiceOver). | Dev1 | 4h | 6.2 | axe: 0 violations; WAVE: 0 errors; keyboard navigable; screen reader friendly. | Accessibility report; fixes committed. |
| 6.4 | **Visual QA**: Compare with wireframes; ensure brand consistency (IEEE blue, logos, fonts). Test animations, hovers, transitions. Fix visual bugs. | Designer/QA | 2h | 6.3 | Design approved; no visual regressions. | Design sign-off. |

**Phase Deliverable**: Fully responsive, accessible site. PR "Phase 6 Styling & A11y". **Total Effort**: 12h.

### Phase 7: GDPR Compliance & Legal (1 day / 8 hours)
**Goal**: Ensure GDPR compliance for EU visitors (required for Paris-based conference).

| Task ID | Description | Owner | Est. Time | Dependencies | Success Criteria | Output |
|---------|-------------|-------|-----------|--------------|------------------|--------|
| 7.1 | **Cookie Consent**: Install `npm i vanilla-cookieconsent` or build custom. Create banner: non-intrusive, options (necessary/analytics/marketing), save preferences to localStorage. Integrate with analytics (defer GA until consent). | Dev1 | 3h | 6.4 | Banner shows on first visit; respects user choice; GA only loads after consent. | Cookie consent component; config. |
| 7.2 | **Privacy Policy**: Write GDPR-compliant privacy policy: data collected (email, name for registration), purpose, storage duration, user rights (access, deletion), contact info. Use GDPR template. | Legal/Dev1 | 2h | 7.1 | Covers all data processing; mentions GDPR rights; contact email provided. | `/src/pages/Privacy.tsx` with full text. |
| 7.3 | **Form Data Handling**: Ensure forms: have opt-in checkboxes (not pre-checked), explain data use, link to privacy policy, don't collect unnecessary data. Add data retention notice ("data deleted after conference"). | Dev1 | 2h | 7.2 | All forms GDPR-compliant; clear consent; minimal data collection. | Updated Registration/Contact forms. |
| 7.4 | **GDPR Audit**: Check: no tracking before consent, secure data handling (client-side only for now), users can access/delete data (add email for requests). Test with GDPR checklist. | QA | 1h | 7.3 | Passes GDPR checklist; no violations; users can exercise rights. | GDPR audit report. |

**Phase Deliverable**: GDPR-compliant site. PR "Phase 7 GDPR". **Total Effort**: 8h.

### Phase 8: SEO & Performance Optimization (1 day / 8 hours)
**Goal**: Achieve 95+ Lighthouse scores, optimize for search engines.

| Task ID | Description | Owner | Est. Time | Dependencies | Success Criteria | Output |
|---------|-------------|-------|-----------|--------------|------------------|--------|
| 8.1 | **SEO Meta Tags**: Add comprehensive SEO component: Open Graph (og:title, og:description, og:image, og:type), Twitter Cards, canonical URLs, JSON-LD structured data (Event, Organization schemas). Add to all pages via `<SEO>` component. | Dev1 | 2h | 7.4 | Rich previews work on Twitter/Facebook; schema validates (schema.org validator). | SEO component; structured data. |
| 8.2 | **Performance Optimization**: Lazy load images (intersection observer), code splitting (React.lazy for routes), preload critical assets (fonts, hero image), minify assets. Add loading="lazy" to images. Setup bundle analyzer: `npm i -D rollup-plugin-visualizer`. | Dev1 | 3h | 8.1 | Bundle <500KB gzipped; largest chunks <150KB; FCP <1.8s. | Optimized build; bundle report. |
| 8.3 | **Sitemap & Robots**: Generate `sitemap.xml` (all pages, lastmod, priority). Create `robots.txt` (allow all, sitemap URL). Add to Netlify redirects for `/sitemap.xml`. | Dev1 | 1h | 8.2 | Sitemap validates; Google Search Console accepts. | `public/robots.txt`, generated sitemap. |
| 8.4 | **Analytics & Monitoring**: Integrate Google Analytics 4 (only after cookie consent). Add Netlify Analytics (server-side, GDPR-compliant). Setup error tracking: Sentry (client-side errors). | Dev1 | 2h | 8.3 | GA4 tracks pageviews post-consent; Sentry captures errors. | Analytics integrated; Sentry configured. |

**Phase Deliverable**: SEO-optimized, performant site. PR "Phase 8 SEO & Perf". **Total Effort**: 8h.

### Phase 9: Security & Headers (0.5 day / 4 hours)
**Goal**: Secure the site with proper headers and configurations.

| Task ID | Description | Owner | Est. Time | Dependencies | Success Criteria | Output |
|---------|-------------|-------|-----------|--------------|------------------|--------|
| 9.1 | **Security Headers**: Configure Netlify headers in `netlify.toml`: CSP (Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' *.google-analytics.com; img-src 'self' data: https:), X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin, Permissions-Policy. | Dev1 | 2h | 8.4 | securityheaders.com: A+ rating; CSP doesn't block assets. | Updated `netlify.toml`. |
| 9.2 | **Form Security**: Add rate limiting (client-side: disable submit for 3s after submit), honeypot fields (hidden, reject if filled), CSRF tokens (for future backend). Validate all inputs (XSS prevention with Zod). | Dev1 | 1.5h | 9.1 | Forms resistant to spam; no XSS vulnerabilities. | Secured forms. |
| 9.3 | **Dependency Audit**: Run `npm audit`; fix vulnerabilities. Setup Dependabot (GitHub: auto PRs for updates). Add `npm audit` to CI pipeline. | Dev1 | 0.5h | 9.2 | 0 high/critical vulnerabilities; Dependabot active. | Audit report; Dependabot config. |

**Phase Deliverable**: Secure, hardened site. PR "Phase 9 Security". **Total Effort**: 4h.

### Phase 10: Comprehensive Testing (1.5 days / 12 hours)
**Goal**: Ensure quality through unit, integration, E2E, and cross-browser testing.

| Task ID | Description | Owner | Est. Time | Dependencies | Success Criteria | Output |
|---------|-------------|-------|-----------|--------------|------------------|--------|
| 10.1 | **E2E Testing Setup**: Install Playwright: `npm i -D @playwright/test`. Configure `playwright.config.ts` (browsers: chromium, firefox, webkit; base URL). Write 15+ E2E tests: navigation, forms (registration, contact), search, mobile menu, accessibility tree. | QA/Dev1 | 4h | 9.3 | All E2E tests pass in 3 browsers; tests run in CI. | `/tests/e2e/**/*.spec.ts`; Playwright config. |
| 10.2 | **Integration Testing**: Write integration tests for: Redux flows (form submission), routing (lazy loading, error boundaries), API mocks (sagas). Use MSW for API mocking. | Dev1 | 3h | 10.1 | Integration tests pass; Redux state updates correctly. | `/tests/integration/**/*.test.ts`. |
| 10.3 | **Visual Regression**: Setup Percy or Chromatic for visual regression testing. Capture baselines for key pages (Home, Registration, CFP). | QA | 2h | 10.2 | Visual baselines captured; no unexpected changes. | Percy/Chromatic configured. |
| 10.4 | **Performance Testing**: Run Lighthouse CI in pipeline. Test on throttled network (3G). Use WebPageTest for detailed metrics. Ensure: Performance ≥95, Accessibility 100, Best Practices ≥95, SEO 100. | Dev1 | 2h | 10.3 | All Lighthouse scores meet targets; loads <3s on 3G. | Lighthouse CI reports. |
| 10.5 | **Cross-Browser/Device Testing**: Test on: Chrome, Firefox, Safari (Mac/iOS), Edge. Mobile: iOS Safari, Chrome Android. Use BrowserStack or real devices. Check: layout, forms, videos, animations. | QA | 1h | 10.4 | No browser-specific bugs; consistent experience. | Browser compatibility report. |

**Phase Deliverable**: Fully tested site with ≥90% coverage. PR "Phase 10 Testing". **Total Effort**: 12h.

### Phase 11: Deployment & Launch (1 day / 8 hours)
**Goal**: Deploy to production with monitoring, documentation, and launch checklist.

| Task ID | Description | Owner | Est. Time | Dependencies | Success Criteria | Output |
|---------|-------------|-------|-----------|--------------|------------------|--------|
| 11.1 | **Staging Deployment**: Deploy to Netlify staging: Connect GitHub repo, configure build (command: `npm run build`, dir: `dist`). Setup environment variables. Test staging thoroughly. | Dev1 | 1.5h | 10.5 | Staging site live; environment vars work; no errors in logs. | Staging URL: https://staging--cloudcom2026.netlify.app. |
| 11.2 | **Domain Setup**: Configure custom domain: Buy/transfer cloudcom2026.org; add to Netlify; configure DNS (A/CNAME records). Enable HTTPS (Netlify auto-provisions SSL). Add www redirect. | Dev1 | 2h | 11.1 | Domain resolves; HTTPS active; www redirects to apex. | Production domain: https://cloudcom2026.org. |
| 11.3 | **Pre-Launch Checklist**: Go through checklist: ✓ GDPR compliant, ✓ analytics working, ✓ forms tested, ✓ SEO tags, ✓ sitemap submitted to Google Search Console, ✓ social sharing images, ✓ error monitoring, ✓ backups enabled, ✓ 404 page works. | Team | 1h | 11.2 | All checklist items ✓; no critical issues. | Completed checklist. |
| 11.4 | **Production Deployment**: Merge to main branch; Netlify auto-deploys. Monitor logs during deploy. Run smoke tests on production. | Dev1 | 1h | 11.3 | Production deploy successful; smoke tests pass; no errors. | Live site. |
| 11.5 | **Post-Launch Monitoring**: Monitor for 24h: Sentry errors, Netlify analytics, GA4 traffic, Lighthouse scores. Set up Uptime Robot for downtime alerts. | Dev1 | 1.5h | 11.4 | No critical errors; site stable; uptime 100%. | Monitoring dashboard. |
| 11.6 | **Documentation & Handoff**: Write deployment runbook (`docs/deployment.md`), update README with production URLs, create maintenance guide. Handoff to stakeholders with demo. | Dev1 | 1h | 11.5 | Docs complete; stakeholders trained; access transferred. | `/docs/` complete; handoff meeting. |

**Phase Deliverable**: Production site live with monitoring. PR "Phase 11 Launch". **Total Effort**: 8h.

## Timeline & Milestones

**Total Effort**: 112 hours (14 developer-days)

**Week-by-Week Breakdown**:
- **Week 1** (Days 1-5):
  - Phase 1: Project Setup & Environment (12h)
  - Phase 2: Content Analysis & IA (8h)
  - Phase 3: Core Components (20h) - Start
- **Week 2** (Days 6-10):
  - Phase 3: Core Components - Complete
  - Phase 4: Page Implementation (20h)
  - Phase 5: Redux/Saga (8h)
  - Phase 6: Styling & Accessibility (12h) - Start
- **Week 3** (Days 11-14):
  - Phase 6: Styling & Accessibility - Complete
  - Phase 7: GDPR Compliance (8h)
  - Phase 8: SEO & Performance (8h)
  - Phase 9: Security (4h)
  - Phase 10: Testing (12h)
  - Phase 11: Deployment (8h)

**Key Milestones**:
1. **End of Week 1**: Component library complete, basic pages rendering
2. **End of Week 2**: All pages functional, state management in place, styled
3. **Mid Week 3**: GDPR compliant, SEO optimized, secured
4. **End of Week 3**: Production launch

**Daily Workflow**:
- Morning standup (15min): Yesterday's progress, today's goals, blockers
- Development sprints (2x 2-hour focused sessions)
- Code reviews on all PRs (no direct commits to main)
- End-of-day: Push progress, update tracking

**Risk Buffer**: 2-3 days built into timeline for unexpected issues

## Resources & Tools

**Repository**:
- GitHub: `github.com/Montimage/cloudcom2026`
- Branch strategy: `main` (production), `develop` (staging), `feature/*` (development)
- Branch protection: Require PR reviews, CI passing, no force push

**Development Tools**:
- IDE: VS Code with ESLint, Prettier, TypeScript extensions
- Design: Figma (wireframes, component library)
- Version Control: Git with conventional commits
- Package Manager: npm (v9+)

**Hosting & Deployment**:
- Hosting: Netlify (free tier sufficient)
- Domain: cloudcom2026.org (to be purchased ~$12/year)
- CDN: Netlify CDN (included)
- Analytics: Google Analytics 4 (free) + Netlify Analytics ($9/month, optional)
- Monitoring: Sentry (free tier), Uptime Robot (free)

**Testing Tools**:
- Unit: Vitest + Testing Library
- E2E: Playwright
- Visual: Percy or Chromatic (free tier)
- Performance: Lighthouse CI, WebPageTest
- Accessibility: axe DevTools, WAVE

**Budget Estimate**:
| Item | Cost | Notes |
|------|------|-------|
| Development Time | $0 | In-house team |
| Domain Registration | ~$12/year | .org domain |
| Netlify Hosting | $0 | Free tier sufficient |
| Analytics (optional) | $9/month | Netlify Analytics |
| Monitoring | $0 | Free tiers (Sentry, Uptime Robot) |
| **Total Year 1** | **~$20** | Minimal investment |

**Team Contacts**:
- Technical Lead: [email]
- Content Manager: [email]
- QA Lead: [email]
- Support: GitHub Issues for tracking

**Compliance & Legal**:
- GDPR compliance reviewed by legal
- Privacy policy template from GDPR.eu
- Cookie consent following ICO guidelines

## Success Criteria

The project is considered successful when:
- ✅ All 11 phases complete with deliverables
- ✅ Lighthouse scores: Performance ≥95, Accessibility 100, Best Practices ≥95, SEO 100
- ✅ GDPR compliant (passes audit checklist)
- ✅ Security headers: A+ on securityheaders.com
- ✅ 0 critical accessibility violations (axe, WAVE)
- ✅ Test coverage ≥90%
- ✅ All E2E tests passing in 3 browsers
- ✅ Mobile responsive (320px - 1920px)
- ✅ Production site live at cloudcom2026.org
- ✅ Documentation complete
- ✅ Stakeholder approval

## Next Steps

1. **Get Approval**: Stakeholders review and approve plan
2. **Setup Access**: Create GitHub repo, Netlify account, domain registration
3. **Kick-off Meeting**: Align team on timeline, responsibilities, communication
4. **Start Phase 1**: Initialize project following plan

**Questions?** Open a discussion in the GitHub repo or contact the technical lead.

---

**Document Version**: 2.0 (Revised)
**Last Updated**: November 10, 2025
**Author**: Development Team
**Status**: Ready for Implementation