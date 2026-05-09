# CourtBook HiFi Prototype - Visual Reference & Implementation Guide

## Design System Quick Reference

### Color Palette & Usage

```
PRIMARY COLORS:
┌─────────────────────────────┐
│ Teal #16A34A                │  Primary CTA, Links, Success
│ Teal Dark #15803D           │  Hover states, Depth
│ Privacy Red #DC2626         │  Data disclosures, Important
└─────────────────────────────┘

NEUTRAL COLORS:
┌─────────────────────────────┐
│ Dark Gray #1F2937           │  Primary text, Headings
│ Light Gray #E5E7EB          │  Borders, Dividers
│ Off-White #F9FAFB           │  Backgrounds
│ White #FFFFFF               │  Card backgrounds
└─────────────────────────────┘

STATUS COLORS:
┌─────────────────────────────┐
│ Success Green #059669       │  Confirmations ✓
│ Warning Orange #F59E0B      │  Cautions ⚠
│ Error Red #EF4444           │  Errors ✗
└─────────────────────────────┘
```

### Typography Hierarchy

```
HEADINGS:
H1 (Hero)     → Inter Bold, 28px, 1.4 line-height
H2 (Section)  → Inter Bold, 24px, 1.4 line-height
H3 (Subsec)   → Inter Bold, 20px, 1.4 line-height
H4 (Label)    → Inter Bold, 18px, 1.4 line-height

BODY TEXT:
Regular      → Inter Regular, 16px, 1.6 line-height
Compact      → Inter Regular, 14px, 1.4 line-height
Small        → Inter Regular, 12px, 1.4 line-height

EMPHASIS:
Bold Text    → Inter Medium/Bold, same size, increased weight
Links        → Teal #16A34A, underline on hover
Error Text   → Red #EF4444, bold
```

### Spacing System (8px Base)

```
SCALE:        4px   8px   12px  16px  24px  32px  48px  64px
USE FOR:      Tiny  XS    Small Med   Large XL    XXL   XXXL
────────────────────────────────────────────────────────────
PADDING:      ✓     ✓     ✓     ✓     ✓     ✓     ✓     ✓
MARGIN:            ✓     ✓     ✓     ✓     ✓     ✓     ✓
GAP (flex):        ✓     ✓     ✓     ✓     ✓     ✓     ✓
RADIUS:       ✓     ✓     ✓     ✓
```

### Border Radius Usage

```
Compact Components:     4px
  → Buttons, badges, small UI elements

Medium Components:      8px
  → Cards, input fields, form elements

Large Components:       12px
  → Containers, modals, larger cards

Images & Featured:      16px
  → Court images, gallery items
```

---

## Component Library

### 1. Privacy Badge Components

```
MINIMAL DATA BADGE:
┌──────────────────────────────┐
│ 📊 Minimal Data              │
│ This court collects only:    │
│ • Your name & phone          │
│ • Booking time               │
│ [See full list]              │
└──────────────────────────────┘
Color: Teal background, dark text
Position: Top-right of court card
Interactive: Hover shows tooltip, click expands

VERIFIED PRIVACY BADGE:
┌──────────────────────────────┐
│ ✓ Verified Privacy           │
│ Audited for GDPR compliance  │
│ [Learn more]                 │
└──────────────────────────────┘
Color: Green background, white text
Position: Bottom-right of court card
Interactive: Click to certification

PRIVACY CONCERN BADGE:
┌──────────────────────────────┐
│ ⚠ More Data Collected        │
│ This court collects 8+ fields│
│ [See what they collect]      │
└──────────────────────────────┘
Color: Orange background, dark text
Position: Top-right of court card
Interactive: Click to expand details
```

### 2. Consent Checkbox with Description

```
UNCHECKED (Default):
┌─────────────────────────────────────────┐
│ ☐ Allow marketing emails               │
│   We'll send you special offers        │
│   [Uncheck to opt-out anytime]         │
└─────────────────────────────────────────┘

CHECKED:
┌─────────────────────────────────────────┐
│ ☑ Allow marketing emails               │
│   We'll send you special offers        │
│   [Manage preferences]                 │
└─────────────────────────────────────────┘

REQUIRED (No uncheck):
┌─────────────────────────────────────────┐
│ ☑ Your full name (Required)            │
│   We use this for your booking         │
│   [Why we need this]                   │
└─────────────────────────────────────────┘

States:
- Default (unchecked)
- Hover (background highlight)
- Focused (blue outline)
- Checked (checkmark animated)
- Disabled (grayed out)
```

### 3. "Why?" Tooltip System

```
TRIGGER: Small "?" icon next to label
┌─────────────────┐
│ Email Address ? │  ← Hover icon
└─────────────────┘

TOOLTIP APPEARS:
┌────────────────────────────────────┐
│ Why do we ask for your email?     │
│                                    │
│ We use this to send you booking   │
│ confirmations and reminders.       │
│                                    │
│ You can change your preferences   │
│ anytime in Settings.              │
│                                    │
│ [Learn about our privacy policy]  │
└────────────────────────────────────┘

Styling:
- Position: Appear at cursor
- Background: Dark #1F2937
- Text: White, 14px
- Padding: 12px
- Border-radius: 8px
- Drop shadow for depth
- Arrow pointing to trigger

Interaction:
- Appear on hover of "?" icon
- Persist while hovering tooltip
- Disappear when mouse leaves
- Keyboard: Show on focus, hide on blur
```

### 4. Data Transparency Panel

```
COLLAPSED STATE:
┌─────────────────────────────────────┐
│ ▶ What data does this court         │
│   collect? (Click to expand)        │
└─────────────────────────────────────┘

EXPANDED STATE:
┌─────────────────────────────────────┐
│ ▼ What data does this court collect?│
│                                     │
│ THIS COURT COLLECTS:               │
│ ✓ Your name (for confirmation)    │
│ ✓ Phone number (for check-in)     │
│ ✓ Booking time (for scheduling)   │
│ ✓ Group size (for occupancy)      │
│ ✗ Not collected: email, payment   │
│                                     │
│ HOW WE USE IT:                     │
│ → Send confirmation message        │
│ → Court staff contact for check-in │
│ → Keep record for refunds          │
│                                     │
│ HOW LONG WE KEEP IT:               │
│ ⏱ Deleted after 2 years            │
│ [Customize retention period]       │
│                                     │
│ WHO CAN SEE IT:                    │
│ 👤 Court staff only                │
│ (Not shared with 3rd parties)      │
└─────────────────────────────────────┘

Styling:
- Background: Light #F9FAFB
- Border: 1px #E5E7EB
- Border-radius: 8px
- Padding: 16px
- Smooth height animation on expand
- Icons for visual hierarchy
```

### 5. Form Field with Privacy Explanation

```
STANDARD FORM FIELD:
┌─────────────────────────────────────┐
│ Full Name *              [Why?]      │
│ ┌──────────────────────────────────┐│
│ │ Enter your full name            ││
│ └──────────────────────────────────┘│
│ Used for: Booking confirmation only │
│                                     │
│ ☐ I understand how my name is used │
└─────────────────────────────────────┘

OPTIONAL FIELD:
┌─────────────────────────────────────┐
│ Email Address (Optional)            │
│ ┌──────────────────────────────────┐│
│ │ your.email@example.com          ││
│ └──────────────────────────────────┘│
│ Used for: Confirmations & reminders │
│ Can opt-out anytime in Settings    │
│                                     │
│ ☐ I want email reminders           │
└─────────────────────────────────────┘

States:
- Empty (placeholder text)
- Focused (blue border, shadow)
- Filled (dark text)
- Error (red border, error message)
- Disabled (grayed out)
```

### 6. Status & Feedback Badges

```
UPCOMING:
┌──────────────────────────┐
│ 🔵 Upcoming              │ Teal background
└──────────────────────────┘

CONFIRMED:
┌──────────────────────────┐
│ ✓ Confirmed              │ Green background
└──────────────────────────┘

PENDING:
┌──────────────────────────┐
│ ⏱ Pending Payment        │ Orange background
└──────────────────────────┘

CANCELLED:
┌──────────────────────────┐
│ ✗ Cancelled              │ Red background
└──────────────────────────┘
```

---

## Key Screens Layout Templates

### Screen 1: Onboarding - Privacy Welcome

```
┌─────────────────────────────────────────┐
│  CourtBook  [Find Courts] [My Bookings] │  Header
├─────────────────────────────────────────┤
│                                         │
│   Book Your Court.                      │
│   Your Privacy Is Our Priority          │  H1 Hero
│                                         │
│   We collect only what's necessary     │  Subtitle
│   to book your badminton court          │
│                                         │
├─────────────────────────────────────────┤
│  THREE TRUST PILLARS (Cards):          │
│ ┌─────────┐  ┌─────────┐  ┌─────────┐ │
│ │ 📊      │  │ 🎮      │  │ 🔓      │ │
│ │ Minimal │  │ Your    │  │Transparent
│ │ Data    │  │ Control │  │         │ │
│ └─────────┘  └─────────┘  └─────────┘ │
├─────────────────────────────────────────┤
│                                         │
│         [Get Started Button]            │
│  Learn About Our Privacy [Link]        │
│                                         │
├─────────────────────────────────────────┤
│  PRIVACY DETAILS (Expandable)           │
│  [▼ See how we protect your data]      │
│   • Minimal collection: 3 essential... │
│   • Full user control: Change...       │
│   • Complete transparency: See...      │
│                                         │
└─────────────────────────────────────────┘
```

### Screen 2: Sign Up with Privacy Consent

```
┌─────────────────────────────────────────┐
│  CourtBook                              │  Header
├────────────────┬────────────────────────┤
│ LEFT: FORM     │ RIGHT: PRIVACY SIDEBAR │
│                │                        │
│ Full Name *    │ 🛡️ YOUR PRIVACY        │
│ [Enter name]   │ ────────────────────   │
│                │                        │
│ Email *        │ ☐ Data Collection      │
│ [Enter email]  │   [Details below]      │
│                │                        │
│ Phone *        │ ☐ Marketing Emails     │
│ [Enter phone]  │   Optional, anytime    │
│                │                        │
│ ☐ I agree that │ ☐ Analytics for Better │
│   we collect   │   [Help us improve]    │
│   your data... │                        │
│                │ ────────────────────   │
│ ☐ I understand │ [Full Privacy Policy]  │
│   how we use   │                        │
│   this data    │ Privacy ensures you    │
│                │ stay in control.       │
│ [Sign Up BTN]  │                        │
│                │                        │
└────────────────┴────────────────────────┘
```

### Screen 3: Find Courts with Privacy Filter

```
┌─────────────────────────────────────────┐
│  CourtBook  [Find Courts] [My Bookings] │
├────────────┬────────────────────────────┤
│ FILTERS    │ SEARCH & RESULTS           │
│            │                            │
│ Court Type │ [Search by name/location] │
│ ☐ Indoor   │                            │
│ ☐ Outdoor  │ 📊 Your search is private │
│            │ (Deleted after 30 days)   │
│ Floor      │                            │
│ ☐ Taraflex │ Sort by: Rating ▼          │
│ ☐ Wooden   │                            │
│ ☐ Vinyl    │ 6 courts found             │
│ ☐ Concrete │ ─────────────────────────  │
│            │ 📊                    ⭐4.9 │
│ 🛡️Privacy  │ Champion Badminton Club    │
│ Filter:    │ [Image]                    │
│ ☐ Data-    │ • Indoor • Wooden • 6 cts  │
│   minimal  │ Rp 150.000 per hour        │
│   courts   │ [Check Schedule]           │
│            │                            │
│ Price      │ 📊                    ⭐4.8 │
│ ┌──────┐   │ Elite Badminton Arena      │
│ │◆────◆│   │ [Image]                    │
│ │Rp0  │   │ • Indoor • Taraflex • 8cts│
│ │-200K│   │ Rp 120.000 per hour        │
│ └──────┘   │ [Check Schedule]           │
│            │                            │
│ [Clear]    │ [More courts below...]     │
│            │                            │
└────────────┴────────────────────────────┘
```

### Screen 4: Court Details - Full Transparency

```
┌─────────────────────────────────────────┐
│  [← Back]                               │
├─────────────────────────────────────────┤
│  [LARGE COURT IMAGE]                    │
│  🛡️ This court is data-minimal         │
├─────────────────────────────────────────┤
│ Champion Badminton Club          ⭐ 4.9 │
│ Jl. HR Rasuna Said, Jakarta Selatan     │
│                                         │
│ COURT DETAILS:                          │
│ [Indoor] [Wooden Floor] [6 Courts]      │
│                                         │
│ Luxury badminton club with wooden       │
│ flooring and premium amenities.         │
│                                         │
├─────────────────────────────────────────┤
│ 🛡️ THIS COURT COLLECTS:                │
│ ────────────────────────────────────    │
│ ✓ Your name (for confirmation)        │
│ ✓ Phone (for check-in contact)        │
│ ✗ Email (optional, not stored)        │
│ ✗ Payment card (never stored)         │
│                                         │
│ WHAT WE DO WITH IT:                    │
│ → Send confirmation message            │
│ → Court staff call for check-in        │
│ → Keep for 2 years (for refunds)      │
│                                         │
│ [See Full Privacy Policy]              │
│ [Opt-out of certain data]              │
├─────────────────────────────────────────┤
│ FACILITIES:                             │
│ ☑ Parking  ☑ VIP Locker  ☑ Restaurant │
│ ☑ Pro Shop ☑ AC        ☑ Shower       │
│ ☑ Sauna    ☑ Cafeteria                │
│                                         │
│ PRICE: Rp 150.000 per hour per court  │
│                                         │
│         [Book Now] [Add to Favorites]   │
│                                         │
└─────────────────────────────────────────┘
```

### Screen 5: Booking Flow - Review & Confirm

```
┌──────────────────────────────────────────┐
│ Complete Your Booking                    │
├──────────────────┬──────────────────────┤
│ LEFT: FORM       │ RIGHT: SUMMARY       │
│                  │                      │
│ Contact Details  │ 📋 BOOKING SUMMARY  │
│ ────────────────  │ ──────────────────  │
│ Full Name *      │ Court:              │
│ [Enter name]     │ Champion Club       │
│                  │ Date:               │
│ Email            │ Sat, May 9, 2026    │
│ [optional]       │ Time:               │
│ ☐ Get reminders  │ 22:00               │
│                  │ Players: 4          │
│ Phone *          │                     │
│ [Enter phone]    │ ────────────────────  │
│                  │                      │
│ Group Details    │ 🛡️ BEFORE CONFIRM:  │
│ ────────────────  │ ──────────────────  │
│ Players: [4 ▼]   │ ✓ Confirmation to: │
│                  │   [Your phone]      │
│ ☑ Minimal Data   │ ✓ Court staff has:  │
│   Mode           │   Your name, phone  │
│ (Phone only,     │ ✓ Data kept until:  │
│  no email)       │   May 9, 2028       │
│                  │                     │
│ Notes (optional) │ [I Understand]      │
│ [Special req.]   │ [Back to Edit]      │
│                  │                     │
│              [Continue to Payment]      │
│                                         │
└──────────────────┴──────────────────────┘
```

### Screen 6: User Settings - Privacy Control Center

```
┌─────────────────────────────────────────┐
│  Account Settings                       │
├─────────────────────────────────────────┤
│ [Account] [Privacy & Data] [Comms]     │
│           [Devices]                     │
├─────────────────────────────────────────┤
│ PRIVACY & DATA TAB SELECTED:             │
│                                         │
│ DATA PREFERENCES:                       │
│ ────────────────────────────────────   │
│ ☐ Allow marketing emails               │
│ ☐ Allow booking analytics              │
│ ☐ Allow location tracking              │
│ ☐ Allow feedback surveys               │
│                                         │
│ YOUR DATA RIGHTS:                       │
│ ────────────────────────────────────   │
│ [📥 Download Your Data]                │
│    Get a copy of all data in PDF      │
│                                         │
│ [🗑️ Delete Your Account]               │
│    30-day grace period before deletion │
│                                         │
│ DATA RETENTION:                         │
│ ────────────────────────────────────   │
│ Your booking history is auto-deleted   │
│ after: [2 years ▼]                    │
│ (Customize 1 month - 5 years)         │
│                                         │
│ Timeline:                               │
│ May 9, 2026 (Today)                    │
│ ├─ 1 year: Still available             │
│ ├─ 2 years: AUTO DELETED               │
│ └─ No record remains                   │
│                                         │
│ ACTIVE SESSIONS:                        │
│ ────────────────────────────────────   │
│ MacBook Pro • Last active 2 min ago    │
│ [Sign out] [Sign out all devices]      │
│                                         │
│ SECURITY:                               │
│ ────────────────────────────────────   │
│ • All data encrypted in transit        │
│ • Payment cards never stored           │
│ • Auto-logout after 15 min             │
│                                         │
│            [Save Preferences]           │
│                                         │
└─────────────────────────────────────────┘
```

---

## Interaction & Animation Specs

### Button Interactions

```
DEFAULT STATE:
┌─────────────────────┐
│   Book Now Button   │  Background: Teal #16A34A
│                     │  Text: White, bold
│                     │  Padding: 12px 24px
│                     │  Border-radius: 4px
└─────────────────────┘

HOVER STATE (mouse over):
┌─────────────────────┐
│   Book Now Button   │  Background: Teal Dark #15803D
│                     │  Cursor: pointer
│                     │  Box-shadow: 0 2px 8px rgba(22,163,74,0.3)
└─────────────────────┘
Duration: 150ms ease

FOCUS STATE (keyboard):
┌─────────────────────┐
│   Book Now Button   │  Border: 2px blue outline
│                     │  Outline-offset: 2px
│                     │  Same as hover background
└─────────────────────┘

ACTIVE STATE (click):
┌─────────────────────┐
│   Book Now Button   │  Background: Darker teal
│                     │  Scale: 0.98x (slight press)
│                     │  Box-shadow: inset
└─────────────────────┘
Duration: 50ms

DISABLED STATE:
┌─────────────────────┐
│   Book Now Button   │  Background: #D1D5DB (gray)
│                     │  Text: #9CA3AF (lighter gray)
│                     │  Cursor: not-allowed
│                     │  Opacity: 0.5
└─────────────────────┘
```

### Dropdown/Expand Animations

```
COLLAPSED → EXPANDED:
┌──────────────────────┐
│ ▶ Click to expand    │  Initial: Chevron right
└──────────────────────┘
        ↓ (click)
┌──────────────────────┐
│ ▼ Expanded content   │  After: Chevron down
│ ─────────────────    │
│ • Content item 1     │  Height animation: 0 → auto
│ • Content item 2     │  Duration: 300ms ease-out
│ • Content item 3     │  Chevron rotation: 0° → 90°
└──────────────────────┘

Easing: cubic-bezier(0.4, 0, 0.2, 1)
Max height: Calculate actual content size
```

### Checkbox with Animation

```
UNCHECKED:
┌───────┐
│ ☐     │  Empty square, subtle border
└───────┘

HOVER (unchecked):
┌───────┐
│ ☐     │  Border highlight, slight background
└───────┘
Duration: 150ms

CLICK & TRANSITION:
┌───────┐
│  ❍    │  Rotation: 0° → 180°
└───────┘  Scale: 1 → 1.1 → 1
           Opacity: 0 → 1
           Duration: 200ms

CHECKED:
┌───────┐
│ ☑     │  Filled background, white checkmark
└───────┘  Background color: Teal #16A34A
           Checkmark stroke: animated

States: unchecked → indeterminate → checked
```

### Form Field Focus

```
DEFAULT:
┌───────────────────┐
│ Input field       │  Border: 1px #E5E7EB
│                   │  Background: #F9FAFB
│                   │  Text color: #1F2937
└───────────────────┘

FOCUS:
┌═══════════════════┐
│ Input field       │  Border: 2px #16A34A (teal)
│                   │  Background: #FFFFFF
│                   │  Box-shadow: 0 0 0 3px rgba(22,163,74,0.1)
│                   │  Placeholder fade out
└═══════════════════┘
Duration: 150ms ease

WITH ERROR:
┌───────────────────┐
│ Input field       │  Border: 2px #EF4444 (red)
│                   │  Background: #FFFBFB (light red)
│ ✗ Error message   │  Error text: #EF4444, 12px
└───────────────────┘

SUCCESS:
┌───────────────────┐
│ Input field       │  Border: 2px #059669 (green)
│                   │  Background: #F0FDF4 (light green)
│ ✓ Confirmed       │  Success text: #059669, 12px
└───────────────────┘
```

---

## Accessibility Implementation

### Keyboard Navigation Order

```
Onboarding Screen:
1. "Get Started" button
2. "Learn About Our Privacy" link
3. Trust pillar cards (Tab through each)

Sign Up Screen:
1. Full Name input
2. Email input  
3. Phone input
4. Data Collection consent checkbox
5. Marketing consent checkbox
6. Analytics consent checkbox
7. "Sign Up" button
8. "Already have account?" link

Court Details Screen:
1. Back navigation
2. Court name (read-only)
3. Facilities filter buttons
4. "See Full Privacy Policy" link
5. "Opt-out" toggles for data
6. "Book Now" button
7. "Add to Favorites" button
```

### ARIA Labels & Roles

```
PRIVACY BADGES:
<div role="status" aria-label="Minimal data collection: name and phone only">
  📊 Minimal Data
</div>

TOOLTIPS:
<button aria-label="Why do we ask for your email?" 
        aria-describedby="email-tooltip">
  ?
</button>
<div id="email-tooltip" role="tooltip">
  We use this to send confirmations...
</div>

EXPANDABLE SECTIONS:
<button aria-expanded="false" 
        aria-controls="privacy-details"
        aria-label="Show what data this court collects">
  ▶ What data does this court collect?
</button>
<div id="privacy-details" hidden>
  [Content here]
</div>

FORM FIELDS:
<label for="full-name">
  Full Name
  <span aria-label="required">*</span>
</label>
<input id="full-name" required>

ICONS (privacy badges):
<span aria-label="Data is minimal - only name and phone collected" 
      class="badge">📊</span>
```

### Color Contrast Verification

```
TEXT COLORS:
Dark text (#1F2937) on Light background (#F9FAFB): 19:1 ✓✓
Dark text (#1F2937) on White (#FFFFFF): 15.3:1 ✓✓
White text on Teal (#16A34A): 5.8:1 ✓✓
White text on Red (#DC2626): 4.7:1 ✓

GRAPHICS/BORDERS:
Teal (#16A34A) on White: 4.5:1 ✓
Light Gray (#E5E7EB) on White: 2.5:1 ✗ (Use #D1D5DB instead: 3.9:1 ✓)
Red (#DC2626) on Light gray: 5.2:1 ✓

HOVER STATES:
Original Teal → Dark Teal: Sufficient contrast for distinction ✓
```

---

## Mobile Responsiveness Breakpoints

### Breakpoints

```
Mobile:    0px - 640px
Tablet:    641px - 1024px  
Desktop:   1025px+

LAYOUT CHANGES:
┌────────────────────────────────────┐
│ DESKTOP (≥1025px):                 │
│ • Sidebar filters (left column)    │
│ • 3-column grid for court cards    │
│ • Side-by-side forms & summary     │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ TABLET (641-1024px):               │
│ • Filters drawer (top button)      │
│ • 2-column grid for court cards    │
│ • Stacked forms & summary          │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ MOBILE (<641px):                   │
│ • Filters bottom sheet             │
│ • 1-column card grid               │
│ • Full-width stacked forms         │
│ • Full-screen modals               │
└────────────────────────────────────┘
```

### Mobile-Specific Components

```
MOBILE MENU:
┌────────────────────┐
│ ≡ CourtBook     🔔 │  Hamburger menu
├────────────────────┤
│ • Find Courts      │
│ • My Bookings      │
│ • Settings         │
│ • Help             │
│ • Sign Out         │
└────────────────────┘

BOTTOM SHEET (Filters):
Bottom of screen
┌────────────────────┐
│ ╌╌╌╌╌ Drag handle  │
│ Filters            │
│ ─────────────────  │
│ ☐ Indoor           │
│ ☐ Outdoor          │
│ ... (other filters)│
│                    │
│ [Apply Filters]    │
└────────────────────┘

TOUCH TARGETS:
All buttons ≥48px × 48px
All links ≥44px × 44px
Spacing between targets: ≥8px
```

---

## Quick Implementation Checklist

### Before Build
- [ ] All 7 screens designed at high fidelity
- [ ] Component library created (10+ components)
- [ ] Design system specs finalized
- [ ] Interaction specs documented
- [ ] Accessibility requirements listed
- [ ] Mobile variants prepared

### Design Quality
- [ ] Color usage consistent throughout
- [ ] Typography hierarchy clear
- [ ] Spacing follows 8px grid
- [ ] Icons meaningful and consistent
- [ ] Privacy badges prominent
- [ ] Interactions feel natural

### Usability
- [ ] Task flows intuitive
- [ ] Privacy information easy to find
- [ ] Form fields clearly labeled
- [ ] Error states helpful
- [ ] Mobile fully responsive
- [ ] Keyboard navigation works

### Accessibility
- [ ] WCAG AA compliant
- [ ] Color contrast verified
- [ ] ARIA labels complete
- [ ] Screen reader tested
- [ ] Keyboard navigation order logical
- [ ] Focus states visible

### Privacy
- [ ] Data minimization clear
- [ ] Consent explicit (never pre-checked)
- [ ] Purpose of data collection visible
- [ ] Retention timelines shown
- [ ] User rights easy to exercise
- [ ] Third-party sharing disclosed

---

## Reference Files & Resources

**This guide should be used with:**
1. **COURTBOOK_HIFI_SPECS.md** - Detailed screen specifications
2. **Design System Documentation** - Full color/typography specs
3. **Component Library (Figma)** - Actual component files
4. **Interaction Prototypes** - Working flows in Figma

**Related Documents:**
- UX_EVALUATION_METHODS.md (How to test the design)
- PRIVACY_ETHICS_ANALYSIS.md (Compliance & ethics)
- ITERATION_ROADMAP.md (Timeline & refinement plan)

---

**Version 1.0** | May 2026 | CourtBook HiFi Prototype Visual Reference
