# CloudCom 2026 - Wireframes & Design Specifications

**Document Version**: 1.0
**Last Updated**: November 10, 2025
**Purpose**: Visual specifications for key pages (Home, Registration, CFP, Contact)

---

## Design System Foundation

### Colors

| Purpose      | Color          | Hex       | Usage                    |
| ------------ | -------------- | --------- | ------------------------ |
| Primary      | IEEE Blue      | `#0056b3` | Buttons, links, headings |
| Primary Dark | IEEE Blue Dark | `#003d82` | Button hover, accents    |
| Secondary    | Gray           | `#6c757d` | Secondary text           |
| Success      | Green          | `#28a745` | Success messages         |
| Danger       | Red            | `#dc3545` | Error messages           |
| Warning      | Yellow         | `#ffc107` | Warnings                 |
| Info         | Blue           | `#17a2b8` | Info boxes               |
| Light        | Light Gray     | `#f8f9fa` | Backgrounds              |
| Dark         | Dark Gray      | `#343a40` | Text                     |
| White        | White          | `#ffffff` | Backgrounds, cards       |

### Typography

| Element | Font  | Size    | Weight   | Line Height |
| ------- | ----- | ------- | -------- | ----------- |
| H1      | Inter | 48-60px | Bold     | 1.1         |
| H2      | Inter | 36-48px | Bold     | 1.2         |
| H3      | Inter | 28-36px | Semibold | 1.3         |
| H4      | Inter | 24-28px | Semibold | 1.4         |
| H5      | Inter | 20-24px | Medium   | 1.4         |
| H6      | Inter | 16-20px | Medium   | 1.5         |
| Body    | Inter | 16px    | Regular  | 1.6         |
| Small   | Inter | 14px    | Regular  | 1.5         |

### Spacing

**Scale**: 4px base unit (Tailwind default)

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

### Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1023px
- Desktop: ≥ 1024px

---

## Wireframe 1: Home Page

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Sticky)                                             │
│ [Logo] | Home | Call for Papers | Committees | Program ... │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                 HERO SECTION                                │
│          [Background: Paris/Sorbonne Image]                 │
│                                                             │
│         CloudCom 2026                                       │
│   International Conference on Cloud Computing              │
│         November 12-14, 2026 | Paris, France               │
│                                                             │
│      [Submit Paper]  [Register Now]                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              IMPORTANT DATES SECTION                        │
│                                                             │
│  📅 Paper Submission: June 30, 2026                        │
│  📬 Notification: August 15, 2026                          │
│  📄 Camera-ready: September 15, 2026                       │
│  🎟️  Early Registration: October 1, 2026                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              CONFERENCE TRACKS (Grid 2x4)                   │
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐      │
│  │ Cloud   │  │ Security│  │   Edge  │  │  AI/ML  │      │
│  │ Systems │  │ Privacy │  │ & IoT   │  │  Cloud  │      │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘      │
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐      │
│  │Serverless│ │ Storage │  │  Green  │  │  Cloud  │      │
│  │Computing │ │Database │  │  Cloud  │  │   Apps  │      │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              KEYNOTE SPEAKERS (Carousel)                    │
│                                                             │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐             │
│  │   Photo    │ │   Photo    │ │   Photo    │             │
│  │            │ │            │ │            │             │
│  │  Dr. Smith │ │ Prof. Dupont│ │ Dr. Zhang  │             │
│  │    MIT     │ │  Sorbonne  │ │  Tsinghua  │             │
│  └────────────┘ └────────────┘ └────────────┘             │
│                                                             │
│              [View All Keynotes →]                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              SPONSORS & PARTNERS                            │
│                                                             │
│    [IEEE Logo]  [CloudCom Logo]  [SMBU Logo]  [Montimage]  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                       FOOTER                                │
│                                                             │
│  About | For Authors | Attend | Legal & Social             │
│                                                             │
│  © 2026 CloudCom. All rights reserved.                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Component Details

**Hero Section**:

- Height: 60vh (mobile), 70vh (tablet), 80vh (desktop)
- Background: Paris/Sorbonne image with dark overlay (opacity: 0.5)
- Text: White, centered, max-width 800px
- Buttons: Primary (Submit Paper), Secondary (Register Now)
- Animation: Fade in on load

**Important Dates**:

- Layout: Grid 2x2 (mobile), 4x1 (desktop)
- Icon: Calendar emoji or Lucide icon
- Background: Light gray (#f8f9fa)
- Padding: 48px vertical

**Conference Tracks**:

- Cards: White background, shadow on hover
- Icon: Related icon for each track (optional)
- Layout: 1 column (mobile), 2 columns (tablet), 4 columns (desktop)
- Hover: Scale 1.05, shadow increase

**Keynote Speakers**:

- Layout: Carousel/slider (3 visible on desktop, 1 on mobile)
- Photos: Circular (200x200px)
- Text: Name (H4), Affiliation (Body)
- CTA: Link to full keynotes page

**Sponsors**:

- Logo size: Max height 80px
- Layout: Flex row, centered
- Spacing: 40px between logos
- Filter: Grayscale default, color on hover

---

## Wireframe 2: Registration Page

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Same as Home)                                       │
├─────────────────────────────────────────────────────────────┤
│ BREADCRUMB: Home > Registration                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    REGISTRATION                              │
│              Conference Registration                         │
│                                                             │
│  ┌─────────────────────────────────────────────────┐       │
│  │         MULTI-STEP FORM                         │       │
│  │                                                 │       │
│  │   Progress: ●──○──○──○                         │       │
│  │   Step 1 of 4: Personal Information            │       │
│  │                                                 │       │
│  │   ┌──────────────────────────────────────┐     │       │
│  │   │ First Name:        [_____________]   │     │       │
│  │   │ Last Name:         [_____________]   │     │       │
│  │   │ Email:             [_____________]   │     │       │
│  │   │ Phone:             [_____________]   │     │       │
│  │   └──────────────────────────────────────┘     │       │
│  │                                                 │       │
│  │                [Back]     [Next Step →]         │       │
│  │                                                 │       │
│  └─────────────────────────────────────────────────┘       │
│                                                             │
│  ┌─────────────────────────────────────────────────┐       │
│  │            REGISTRATION FEES                    │       │
│  │                                                 │       │
│  │  Category     Early   Regular   On-site        │       │
│  │  ─────────────────────────────────────────     │       │
│  │  IEEE Member  €350    €400      €450           │       │
│  │  Non-Member   €400    €450      €500           │       │
│  │  Student IEEE €200    €250      €300           │       │
│  │  Student Non  €250    €300      €350           │       │
│  │                                                 │       │
│  │  Early bird deadline: October 1, 2026          │       │
│  │                                                 │       │
│  └─────────────────────────────────────────────────┘       │
│                                                             │
│  ┌─────────────────────────────────────────────────┐       │
│  │          WHAT'S INCLUDED                        │       │
│  │                                                 │       │
│  │  ✓ Access to all technical sessions            │       │
│  │  ✓ Conference proceedings (IEEE Xplore)        │       │
│  │  ✓ Coffee breaks and lunches (Nov 12-14)       │       │
│  │  ✓ Welcome reception                           │       │
│  │  ✓ Certificate of attendance                   │       │
│  │                                                 │       │
│  │  Optional: Conference dinner (+€50)            │       │
│  │                                                 │       │
│  └─────────────────────────────────────────────────┘       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                       FOOTER                                │
└─────────────────────────────────────────────────────────────┘
```

### Multi-Step Form Progression

**Step 1: Personal Information**

- First Name (required)
- Last Name (required)
- Email (required, validated)
- Phone (optional)

**Step 2: Affiliation Details**

- Organization/University (required)
- Department (optional)
- Country (dropdown, required)
- IEEE Member? (Yes/No radio)

**Step 3: Fee Category & Payment**

- Select category (radio buttons)
- Calculate fee (auto-calculate based on date)
- Add conference dinner? (checkbox, +€50)
- Total displayed prominently

**Step 4: Payment Method**

- Credit Card (Stripe integration - placeholder)
- Bank Transfer (show bank details)
- Invoice Request (form fields)

**Step 5: Confirmation**

- Summary of registration
- Download receipt
- Add to calendar button
- Confirmation email sent

### Component Details

**Progress Indicator**:

- 4 steps
- Active: Filled circle (●)
- Inactive: Empty circle (○)
- Line connecting steps
- Accessible (ARIA labels)

**Form Fields**:

- Label: Above input, bold
- Input: Border 1px gray, focus border blue
- Error: Red text below field, red border
- Required: Asterisk (\*) in label

**Buttons**:

- Back: Secondary button (gray)
- Next/Submit: Primary button (blue)
- Disabled state: Opacity 0.5, cursor not-allowed

---

## Wireframe 3: Call for Papers (CFP)

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Same as Home)                                       │
├─────────────────────────────────────────────────────────────┤
│ BREADCRUMB: Home > Call for Papers                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                   CALL FOR PAPERS                           │
│      Submit Your Research to CloudCom 2026                  │
│                                                             │
│  We invite original papers on cloud computing, edge         │
│  computing, and distributed systems...                      │
│                                                             │
│              [Submit Your Paper →]                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              IMPORTANT DATES (Timeline)                     │
│                                                             │
│     June 30 ──────> Aug 15 ──────> Sep 15 ──────> Nov 12   │
│     Paper          Notification   Camera-      Conference   │
│     Deadline                      ready                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              TOPICS OF INTEREST (Accordion)                 │
│                                                             │
│  ▼ Track 1: Cloud Architecture and Systems                 │
│     • Virtualization technologies                          │
│     • Container orchestration                              │
│     • Microservices architecture                           │
│     • Resource management                                  │
│     • [5 more topics...]                                   │
│                                                             │
│  ▶ Track 2: Cloud Security and Privacy                     │
│                                                             │
│  ▶ Track 3: Edge Computing and IoT                         │
│                                                             │
│  ▶ Track 4: AI/ML in Cloud Environments                    │
│                                                             │
│  [Show all 8 tracks...]                                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              SUBMISSION GUIDELINES                          │
│                                                             │
│  Paper Format:    IEEE Conference Format                   │
│  Page Limits:     6-8 pages (including references)         │
│  Review Process:  Double-blind peer review                 │
│  Submission:      Via EasyChair                            │
│  Publication:     IEEE Xplore Digital Library              │
│                                                             │
│              [Download Templates]                           │
│                                                             │
│    📄 IEEE LaTeX Template                                  │
│    📄 IEEE Word Template                                   │
│    📄 Submission Guidelines PDF                            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                       FOOTER                                │
└─────────────────────────────────────────────────────────────┘
```

### Component Details

**Hero Section**:

- Similar to home but simpler
- Background: Subtle gradient or pattern
- CTA: "Submit Your Paper" - primary button
- Links to EasyChair submission system

**Timeline**:

- Horizontal on desktop, vertical on mobile
- Icons or numbers for each milestone
- Dates in bold
- Connecting lines between milestones

**Accordion (Topics)**:

- Click to expand/collapse
- Icon: ▼ (expanded), ▶ (collapsed)
- Smooth animation (300ms)
- Expanded: Show 8-12 subtopics
- Highlight active track

**Download Section**:

- Card layout
- Icons: PDF, DOC, ZIP
- File size displayed
- Download button/link
- Opens in new tab

---

## Wireframe 4: Contact Page

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Same as Home)                                       │
├─────────────────────────────────────────────────────────────┤
│ BREADCRUMB: Home > Contact                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                     CONTACT US                              │
│        Get in Touch with the Organizing Committee           │
│                                                             │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │                      │  │                      │        │
│  │   CONTACT FORM       │  │  CONTACT INFO        │        │
│  │                      │  │                      │        │
│  │  Name: [__________]  │  │  General Inquiries:  │        │
│  │  Email: [_________]  │  │  info@cloudcom...    │        │
│  │  Subject: [Dropdown] │  │                      │        │
│  │  Message:            │  │  Paper Submissions:  │        │
│  │  [_______________]   │  │  submissions@...     │        │
│  │  [_______________]   │  │                      │        │
│  │  [_______________]   │  │  Registration:       │        │
│  │                      │  │  registration@...    │        │
│  │  [Send Message]      │  │                      │        │
│  │                      │  │  📱 Social Media:    │        │
│  │                      │  │  [X] [LinkedIn] [FB] │        │
│  │                      │  │                      │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              FREQUENTLY ASKED QUESTIONS                     │
│                                                             │
│  ▼ How do I submit a paper?                                │
│     To submit a paper, please visit our Call for Papers    │
│     page and follow the submission guidelines...           │
│                                                             │
│  ▶ What is the registration fee?                           │
│                                                             │
│  ▶ Do I need a visa to attend?                             │
│                                                             │
│  ▶ What's included in the registration?                    │
│                                                             │
│  ▶ How do I request an invitation letter?                  │
│                                                             │
│  [Show 15 more FAQs...]                                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                       FOOTER                                │
└─────────────────────────────────────────────────────────────┘
```

### Component Details

**Contact Form**:

- Layout: 60% width (left column)
- Fields: Name, Email, Subject (dropdown), Message (textarea)
- Validation: Real-time (email format, required fields)
- Submit: Primary button
- Success: Green notification banner
- Error: Red notification with specific field errors

**Contact Info**:

- Layout: 40% width (right column, sticky on desktop)
- Email addresses: Clickable (mailto: links)
- Social media: Icon buttons (open in new tab)
- Office hours: If applicable

**FAQ Accordion**:

- Same styling as Topics accordion (CFP page)
- Categories: Submission, Registration, Travel, General
- Search box above FAQ (filter questions)
- "Show more" button if >10 FAQs

---

## Responsive Behavior

### Mobile (< 640px)

**Home Page**:

- Hero: Height 50vh, reduce font sizes
- Important Dates: Stack vertically (1 column)
- Tracks: Stack vertically (1 column)
- Keynotes: Slider, 1 visible at a time
- Sponsors: Stack vertically, 2 per row

**Registration**:

- Form: Full width, larger inputs
- Tables: Horizontal scroll or card layout
- Buttons: Full width, stacked

**CFP**:

- Timeline: Vertical orientation
- Accordion: Full width
- Downloads: Stack vertically

**Contact**:

- Form & Info: Stack vertically (form first)
- FAQ: Full width accordion

### Tablet (640px - 1023px)

**General**:

- Between mobile and desktop
- 2-column grid where appropriate
- Maintain touch targets (44x44px minimum)

### Desktop (≥ 1024px)

**General**:

- Max-width container: 1280px
- Centered content
- More whitespace
- Hover effects enabled
- Multi-column layouts

---

## Interactive Elements

### Buttons

**Primary Button**:

```css
background: #0056b3
color: white
padding: 12px 24px
border-radius: 8px
font-weight: 600
transition: all 200ms

hover:
  background: #003d82
  transform: translateY(-2px)
  box-shadow: 0 4px 12px rgba(0, 86, 179, 0.3)
```

**Secondary Button**:

```css
background: transparent
color: #0056b3
border: 2px solid #0056b3
padding: 12px 24px
border-radius: 8px

hover:
  background: #0056b3
  color: white
```

### Form Inputs

**Text Input**:

```css
border: 1px solid #d1d5db
padding: 10px 14px
border-radius: 6px
font-size: 16px

focus:
  border: 2px solid #0056b3
  outline: none
  box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.1)

error:
  border: 2px solid #dc3545
```

### Cards

**Default Card**:

```css
background: white
border-radius: 12px
padding: 24px
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)

hover:
  transform: scale(1.05)
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15)
  transition: all 300ms ease-in-out
```

---

## Accessibility

### Focus States

All interactive elements must have visible focus indicators:

- Outline: 2px solid #0056b3
- Offset: 2px
- Border-radius: match element

### ARIA Labels

**Navigation**:

```html
<nav role="navigation" aria-label="Primary">
  <button aria-expanded="false" aria-controls="mobile-menu"></button>
</nav>
```

**Forms**:

```html
<input aria-required="true" aria-invalid="false" />
<div role="alert" aria-live="polite">Error message</div>
```

**Accordions**:

```html
<button aria-expanded="false" aria-controls="faq-1">
  <div id="faq-1" aria-hidden="true"></div>
</button>
```

### Keyboard Navigation

- Tab order: Logical (top to bottom, left to right)
- Skip link: "Skip to main content"
- Escape key: Close modals/menus
- Arrow keys: Navigate carousels
- Enter/Space: Activate buttons

---

## Animation Guidelines

**Page Load**:

- Fade in: 400ms ease-in
- Stagger: Content appears progressively (100ms delay between elements)

**Hover**:

- Transform: 200ms ease-out
- Color changes: 150ms ease-in-out

**Scroll**:

- Intersection Observer: Fade in elements as they enter viewport
- Parallax: Subtle (hero background only)

**Transitions**:

- Route changes: Fade (300ms)
- Modal open/close: Scale + fade (250ms)

---

## GDPR Elements

### Cookie Banner

**Position**: Bottom of page, fixed
**Layout**: Horizontal bar on desktop, card on mobile
**Content**:

```
┌───────────────────────────────────────────────────┐
│ 🍪 We use cookies to improve your experience.    │
│ [Manage Preferences] [Accept All] [Reject All]   │
└───────────────────────────────────────────────────┘
```

**Manage Preferences Modal**:

- Checkboxes: Necessary (disabled/checked), Analytics, Marketing
- Save button
- Link to Cookie Policy

### Privacy Links

**Footer**: Always visible

- Privacy Policy
- Cookie Policy
- Terms of Service

**Forms**: Checkbox with link

- "I agree to the [Privacy Policy]"
- Must be checked to submit

---

**Document Status**: ✅ Complete
**Design System**: Ready for Figma implementation
**Responsive**: Mobile-first approach
**Accessibility**: WCAG 2.1 AA compliant
**Next Phase**: Begin Phase 3 - Component Development
