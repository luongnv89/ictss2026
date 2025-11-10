# CloudCom 2026 - Information Architecture

**Document Version**: 1.0
**Last Updated**: November 10, 2025
**Purpose**: Define site structure, navigation, URL scheme, and internal linking strategy

---

## 1. Site Map (Visual Hierarchy)

```
CloudCom 2026 (/)
│
├── Call for Papers (/call-for-papers)
│   ├── Submission Guidelines
│   ├── Topics of Interest
│   ├── Important Dates
│   └── Paper Templates (downloads)
│
├── Committees (/committees)
│   ├── General Chairs
│   ├── Program Committee Chairs
│   ├── Steering Committee
│   ├── Publicity Chairs
│   ├── Local Organizing Committee
│   └── Technical Program Committee
│
├── Program (/program)
│   ├── Schedule Overview
│   ├── Day 1 (Nov 12)
│   ├── Day 2 (Nov 13)
│   ├── Day 3 (Nov 14)
│   ├── Workshops & Tutorials
│   └── Social Events
│
├── Keynotes (/keynotes)
│   ├── Keynote Speaker 1
│   ├── Keynote Speaker 2
│   ├── Keynote Speaker 3
│   └── Keynote Speaker 4
│
├── Competitions (/competitions)
│   ├── PDMR 2026 (/competitions/pdmr-2026)
│   └── Emotional Recognition (/competitions/emotional-2026)
│
├── Registration (/registration)
│   ├── Registration Fees
│   ├── What's Included
│   ├── Payment Methods
│   ├── Cancellation Policy
│   └── Register Form (multi-step)
│
├── Venue & Travel (/venue)
│   ├── Conference Venue
│   ├── Getting to Paris
│   ├── Getting to the Venue
│   ├── Accommodation
│   ├── Visa Information
│   └── About Paris
│
├── Contact (/contact)
│   ├── Contact Form
│   ├── Email Contacts
│   ├── FAQ (accordion)
│   └── Social Media
│
├── Privacy Policy (/privacy)
├── Cookie Policy (/cookies)
├── Terms of Service (/terms)
├── Sitemap (/sitemap)
└── 404 Page (/404)
```

---

## 2. URL Structure & Routing

### URL Design Principles

- ✅ **Semantic**: URLs describe content clearly
- ✅ **RESTful**: Use nouns, not verbs
- ✅ **Lowercase**: All URLs in lowercase with hyphens
- ✅ **Short & memorable**: Easy to type and remember
- ✅ **SEO-friendly**: Include keywords where appropriate
- ❌ **No**: Query parameters for main pages, trailing slashes, file extensions

### Primary Routes

| Page/Section        | URL                            | Priority | Changefreq |
| ------------------- | ------------------------------ | -------- | ---------- |
| Home                | `/`                            | 1.0      | weekly     |
| Call for Papers     | `/call-for-papers`             | 0.9      | monthly    |
| Committees          | `/committees`                  | 0.7      | monthly    |
| Program             | `/program`                     | 0.8      | weekly     |
| Keynotes            | `/keynotes`                    | 0.8      | monthly    |
| Competitions        | `/competitions`                | 0.7      | monthly    |
| PDMR Competition    | `/competitions/pdmr-2026`      | 0.6      | monthly    |
| Emotional Challenge | `/competitions/emotional-2026` | 0.6      | monthly    |
| Registration        | `/registration`                | 0.9      | weekly     |
| Venue & Travel      | `/venue`                       | 0.8      | monthly    |
| Contact             | `/contact`                     | 0.7      | yearly     |
| Privacy Policy      | `/privacy`                     | 0.3      | yearly     |
| Cookie Policy       | `/cookies`                     | 0.3      | yearly     |
| Terms of Service    | `/terms`                       | 0.3      | yearly     |
| Sitemap             | `/sitemap`                     | 0.5      | weekly     |

### Route Aliases (Redirects)

| Old/Alternate URL | Redirect To        | Type |
| ----------------- | ------------------ | ---- |
| `/cfp`            | `/call-for-papers` | 301  |
| `/papers`         | `/call-for-papers` | 301  |
| `/submission`     | `/call-for-papers` | 301  |
| `/committee`      | `/committees`      | 301  |
| `/speakers`       | `/keynotes`        | 301  |
| `/schedule`       | `/program`         | 301  |
| `/register`       | `/registration`    | 301  |
| `/travel`         | `/venue`           | 301  |
| `/location`       | `/venue`           | 301  |
| `/competition`    | `/competitions`    | 301  |
| `/index.html`     | `/`                | 301  |
| `/home`           | `/`                | 301  |

### URL Parameters (Future Use)

| Parameter | Usage                 | Example                         |
| --------- | --------------------- | ------------------------------- |
| `?day=`   | Filter program by day | `/program?day=2`                |
| `?track=` | Filter by track       | `/program?track=cloud-security` |
| `?lang=`  | Language selection    | `/?lang=fr`                     |
| `#`       | Anchor links          | `/venue#accommodation`          |

---

## 3. Navigation Structure

### 3.1 Primary Navigation (Header)

**Desktop Navigation** (Horizontal):

```
[Logo] | Home | Call for Papers | Committees | Program | Registration | Venue & Travel | Contact
```

**Mobile Navigation** (Hamburger Menu):

```
☰ Menu
├── Home
├── Call for Papers
├── Committees
├── Program
│   ├── Schedule
│   └── Keynotes
├── Competitions
├── Registration
├── Venue & Travel
└── Contact
```

**Navigation States**:

- Active page: Bold + underline or highlight
- Hover: Color change + subtle animation
- Focus: Visible outline for accessibility

**Sticky Header**:

- Yes, on scroll down
- Compact version (reduced padding)
- Always accessible navigation

### 3.2 Footer Navigation

**Footer Structure** (4 columns):

**Column 1: About**

- About CloudCom
- Conference History
- Past Editions
- Contact Us

**Column 2: For Authors**

- Call for Papers
- Submission Guidelines
- Important Dates
- Paper Templates

**Column 3: Attend**

- Registration
- Program Schedule
- Venue & Travel
- Accommodation

**Column 4: Legal & Social**

- Privacy Policy
- Cookie Policy
- Terms of Service
- ───────────────
- Social Media Icons:
  - Twitter/X
  - LinkedIn
  - Facebook
  - Email

**Footer Bottom Bar**:

```
© 2026 CloudCom. All rights reserved. | Organized by IEEE Computer Society
```

### 3.3 Breadcrumb Navigation

**Implementation**: All pages except Home
**Format**: Home > Parent > Current Page
**Schema**: BreadcrumbList (schema.org)

**Examples**:

```
Home > Call for Papers
Home > Committees
Home > Program
Home > Competitions > PDMR 2026
Home > Registration
Home > Venue & Travel
```

**Styling**:

- Separator: `/` or `>`
- Links: All levels except current
- Current page: Plain text (not linked)

### 3.4 Mobile Menu

**Behavior**:

- Hamburger icon (☰) on mobile (<768px)
- Full-screen overlay or slide-in drawer
- Smooth animation
- Close button (X) or tap outside
- No nested dropdowns (flatten hierarchy)

**Mobile Menu Order**:

1. Home
2. Call for Papers
3. Committees
4. Program
5. Keynotes
6. Competitions
7. Registration
8. Venue & Travel
9. Contact
10. ─────────────── (divider)
11. Privacy Policy
12. Cookie Policy

---

## 4. Internal Linking Strategy

### 4.1 Priority Pages (Hub Pages)

**Hub pages** receive most internal links:

1. Home (/)
2. Call for Papers (/call-for-papers)
3. Registration (/registration)
4. Program (/program)
5. Venue & Travel (/venue)

### 4.2 Contextual Linking

**From Home Page**:

- Link to: CFP (3x), Registration (2x), Program (1x), Keynotes (1x), Venue (1x)
- Strategic placement: Hero CTA, important dates section, sponsor section

**From CFP Page**:

- Link to: Registration, Committees, Program, Templates (download)

**From Program Page**:

- Link to: Registration, Keynotes, Venue, Competitions

**From Registration Page**:

- Link to: Program, Venue (accommodation), CFP (if submitting)

**From Venue Page**:

- Link to: Registration, Program, Contact

### 4.3 Call-to-Action (CTA) Placement

**Primary CTAs** (Priority 1):

1. **Submit Paper** (CFP page) - Hero section on every page until deadline
2. **Register Now** - Prominent on home, program, venue pages

**Secondary CTAs** (Priority 2): 3. View Program 4. Book Accommodation 5. Request Visa Letter

**CTA Design**:

- Primary: IEEE blue button, white text
- Secondary: Outline button
- Hover: Darker blue + scale animation
- Minimum size: 44x44px (touch target)

### 4.4 Cross-Linking Between Pages

**Bidirectional Links**:

- CFP ↔ Committees (link to reviewers)
- Program ↔ Keynotes (link to speaker details)
- Venue ↔ Registration (link to accommodation)
- Competitions ↔ Registration (separate competition tickets)

**One-Way Links**:

- All pages → Contact (footer)
- All pages → Legal pages (footer)
- 404 → Home, CFP, Registration (helpful links)

---

## 5. Search & Discoverability

### 5.1 Site Search (Optional - Phase 2+)

**Implementation**:

- Search icon in header
- Lightweight client-side search (Fuse.js)
- Search all page content
- Results page: `/search?q=query`

**Search Scope**:

- Page titles
- Headings (H1-H3)
- Main content
- Meta descriptions

### 5.2 Sitemap.xml

**Location**: `/sitemap.xml` (root)
**Format**: XML (Google-friendly)
**Update**: Weekly during active period

**Structure**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cloudcom2026.org/</loc>
    <lastmod>2026-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Additional URLs -->
</urlset>
```

**Submit To**:

- Google Search Console
- Bing Webmaster Tools

### 5.3 Robots.txt

**Location**: `/robots.txt` (root)
**Content**:

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*

Sitemap: https://cloudcom2026.org/sitemap.xml
```

---

## 6. Page Templates & Layouts

### 6.1 Template Types

**1. Home Page Template**

- Layout: Custom (hero + sections)
- Components: Hero, ImportantDates, Tracks, Speakers, Sponsors
- No sidebar

**2. Content Page Template**

- Layout: Single column
- Components: Heading, RichText, Images
- Breadcrumbs: Yes
- Examples: About, Committees, Keynotes

**3. Form Page Template**

- Layout: Centered, narrower width
- Components: Multi-step form, Progress indicator
- Examples: Registration, Contact

**4. List Page Template**

- Layout: Grid or table
- Components: Cards or rows
- Filtering: Optional
- Examples: Program, Competitions

**5. Legal Page Template**

- Layout: Single column, max-width 800px
- Typography: Smaller, more dense
- Table of contents: Yes (sticky)
- Examples: Privacy, Terms

### 6.2 Responsive Breakpoints

| Breakpoint | Width           | Target Devices     | Layout Changes                 |
| ---------- | --------------- | ------------------ | ------------------------------ |
| `xs`       | < 640px         | Phones (portrait)  | Single column, hamburger menu  |
| `sm`       | 640px - 767px   | Phones (landscape) | Single column, compact spacing |
| `md`       | 768px - 1023px  | Tablets            | 2 columns where appropriate    |
| `lg`       | 1024px - 1279px | Small laptops      | Full desktop layout            |
| `xl`       | ≥ 1280px        | Desktop monitors   | Max-width container            |

**Tailwind Breakpoints Match**: Yes (using default Tailwind breakpoints)

---

## 7. Accessibility Considerations

### 7.1 Navigation Accessibility

**Keyboard Navigation**:

- Tab order: Logical flow (top to bottom, left to right)
- Focus indicators: Visible outline on all interactive elements
- Skip links: "Skip to main content" (hidden, visible on focus)

**Screen Readers**:

- ARIA labels: All navigation elements
- ARIA current: Indicate active page
- ARIA expanded: For mobile menu states
- Landmark roles: `<nav role="navigation">`, `<main role="main">`

**Example**:

```html
<nav role="navigation" aria-label="Primary Navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/call-for-papers">Call for Papers</a></li>
    <!-- More items -->
  </ul>
</nav>
```

### 7.2 URL Accessibility

- **Descriptive**: URLs describe content
- **No cryptic IDs**: Use words, not `/page?id=123`
- **Predictable**: Consistent naming conventions
- **Portable**: No session IDs in URLs

---

## 8. SEO Optimization

### 8.1 URL Best Practices

**✅ Do**:

- Use hyphens to separate words (`/call-for-papers`)
- Keep URLs short and descriptive
- Use lowercase only
- Include target keywords
- Make URLs human-readable

**❌ Don't**:

- Use underscores (`/call_for_papers`)
- Include stop words unnecessarily (`/the-call-for-the-papers`)
- Use special characters or spaces
- Create deep nesting (max 3 levels)
- Change URLs frequently

### 8.2 Canonical URLs

**Purpose**: Prevent duplicate content issues
**Implementation**: Add to all pages

```html
<link rel="canonical" href="https://cloudcom2026.org/call-for-papers" />
```

**Rules**:

- HTTPS always
- No trailing slash
- Lowercase
- No query parameters (for main pages)

### 8.3 Structured Data

**Schema.org Types**:

- HomePage: `WebSite`
- Event: `Event` (conference details)
- BreadcrumbList: `BreadcrumbList`
- Organization: `Organization` (IEEE, CloudCom)
- ContactPage: `ContactPage`

**Example (Event)**:

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "CloudCom 2026",
  "description": "International Conference on Cloud Computing",
  "startDate": "2026-11-12",
  "endDate": "2026-11-14",
  "location": {
    "@type": "Place",
    "name": "Sorbonne Université",
    "address": "21 Rue de l'École de Médecine, 75006 Paris, France"
  },
  "organizer": {
    "@type": "Organization",
    "name": "IEEE Computer Society"
  }
}
```

---

## 9. Error Handling

### 9.1 404 Page

**URL**: Any non-existent route → `/404`
**Design**: Friendly, helpful
**Content**:

- Clear message: "Page Not Found"
- Possible reasons (moved, mistyped, outdated link)
- Search box
- Links to main pages (Home, CFP, Registration)
- Contact link

**HTTP Status**: 404 (not 200 with 404 content)

### 9.2 Error Pages

| Error | Page         | Content                         |
| ----- | ------------ | ------------------------------- |
| 404   | Not Found    | Helpful navigation              |
| 500   | Server Error | "We're working on it" + contact |
| 503   | Maintenance  | "Back soon" + social links      |

---

## 10. Implementation Notes

### 10.1 React Router Configuration

**Routes** (React Router v7):

```tsx
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'call-for-papers', element: <CallForPapersPage /> },
      { path: 'committees', element: <CommitteesPage /> },
      { path: 'program', element: <ProgramPage /> },
      { path: 'keynotes', element: <KeynotesPage /> },
      {
        path: 'competitions',
        children: [
          { index: true, element: <CompetitionsPage /> },
          { path: 'pdmr-2026', element: <PDMRPage /> },
          { path: 'emotional-2026', element: <EmotionalPage /> },
        ],
      },
      { path: 'registration', element: <RegistrationPage /> },
      { path: 'venue', element: <VenuePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'cookies', element: <CookiesPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'sitemap', element: <SitemapPage /> },
    ],
  },
])
```

### 10.2 Netlify Configuration

**Redirects** (in `netlify.toml`):

```toml
[[redirects]]
  from = "/cfp"
  to = "/call-for-papers"
  status = 301

[[redirects]]
  from = "/register"
  to = "/registration"
  status = 301

# SPA fallback (must be last)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 11. Sitemap.xml Generation

**Dynamic Generation**:

- Build time: Generate during `npm run build`
- Include all routes
- Set priority and changefreq
- Add lastmod dates

**Script Location**: `scripts/generate-sitemap.js`

**Example Output**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cloudcom2026.org/</loc>
    <lastmod>2026-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://cloudcom2026.org/call-for-papers</loc>
    <lastmod>2026-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- More URLs -->
</urlset>
```

---

## 12. Analytics & Tracking

### 12.1 Page View Tracking

**Events to Track**:

- Page views (all pages)
- Time on page
- Bounce rate
- Exit pages

**Implementation**:

- Google Analytics 4 (after cookie consent)
- Netlify Analytics (GDPR-compliant, no cookies)

### 12.2 Conversion Tracking

**Goals**:

1. Paper submission initiated (click CFP link)
2. Registration completed
3. Contact form submitted
4. Template downloaded
5. External links (social media, sponsors)

---

**Document Status**: ✅ Complete
**Next Step**: Create wireframes/mockups for key pages
