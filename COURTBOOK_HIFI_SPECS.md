# CourtBook HiFi Interactive Prototype - Design Specifications

## Overview
High-fidelity interactive prototype for badminton court booking app with **privacy-first design** as the core focus. This prototype emphasizes transparency, user control, and trust-building through explicit data handling disclosures.

---

## Part 1: Design System & Visual Standards

### Color Palette
- **Primary Brand**: Teal #16A34A (confidence, trust, health)
- **Secondary**: Teal Dark #15803D (depth, interactions)
- **Neutral Dark**: #1F2937 (dark gray for text)
- **Neutral Light**: #F9FAFB (off-white backgrounds)
- **Neutral Medium**: #E5E7EB (borders, dividers)
- **Privacy Red**: #DC2626 (important data disclosures, warnings)
- **Success Green**: #059669 (confirmations, completed actions)
- **Warning Orange**: #F59E0B (cautions, incomplete actions)

### Typography
- **Headings (H1-H3)**: Inter Bold, 28px-18px, line-height 1.4
- **Body Text**: Inter Regular, 16px, line-height 1.6
- **Labels/Captions**: Inter Medium, 14px, line-height 1.4
- **Small Text**: Inter Regular, 12px, line-height 1.4

### Spacing Scale
8px base unit: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Border Radius
- Compact: 4px (buttons, badges)
- Medium: 8px (cards, input fields)
- Large: 12px (containers, modals)
- Extra Large: 16px (images, featured cards)

---

## Part 2: Key Screens & Privacy-First Design

### 1. **Onboarding - Privacy Welcome Screen**
**Purpose**: Establish trust upfront by being transparent about data handling

**Content**:
- Hero: "Book Your Court. Your Privacy Is Our Priority"
- Subtitle: "We collect only what's necessary to book your badminton court"
- Three trust pillars:
  - "Minimal Data": "We only ask for essential details"
  - "Your Control": "Manage what data you share anytime"
  - "Transparent": "See exactly how we use your information"
- "Get Started" CTA
- "Learn About Our Privacy" link (expands privacy details below)

**Interactive Elements**:
- Expandable privacy panel showing data categories
- Hover states on trust pillars
- Smooth scroll to details

---

### 2. **Sign Up with Privacy Consent**
**Purpose**: Clear, modular consent before account creation

**Layout**:
- Left: Account creation form (minimal fields: name, email, phone)
  - Add red "Why we ask?" tooltips on each field
- Right: Privacy controls sidebar
  - **Data Collection Consent**: Checkbox with expandable details
    - What: Full name, email, phone, booking history
    - Why: To process bookings and send confirmations
    - How long: Until account deletion
  - **Marketing Consent**: Optional checkbox
    - Clear: "We'll never sell your data to third parties"
  - **Analytics Consent**: Optional checkbox
    - Shows: "We use anonymized booking patterns to improve availability"

**Interactive Elements**:
- "Why we ask?" tooltips trigger info modals
- Consent checkboxes have helpful descriptions
- "Expand to see full privacy details" links
- Disable "Sign Up" button if mandatory consent unchecked
- Visual feedback when all required consents given

---

### 3. **Find Courts - Enhanced Search with Privacy Badge**
**Purpose**: Maintain privacy transparency while browsing

**Layout**:
- Header with privacy badge: "🛡️ Your search history is private & deleted after 30 days"
- Search bar: "Search by court name, location..."
- Filters (left sidebar):
  - Court Type (Indoor/Outdoor)
  - Floor Material
  - Price Range
  - **NEW - Privacy Filter**: "Filter by data-minimal courts"
    - Shows only courts that collect minimal user data
  - Facilities (with count)
- Clear All Filters button
- Court cards with privacy badges:
  - "Data minimal" badge on courts that collect <5 data points
  - "Verified privacy" checkmark for courts with privacy certifications

**Interactive Elements**:
- Filter accordion animations
- Hover effects showing data minimization details
- "See what data this court collects" expandable section on each card
- Filter chip animations when applied

---

### 4. **Court Details - Full Transparency**
**Purpose**: Show exactly what data the court will collect before booking

**Layout**:
- Large court image with "Data Usage" transparency banner
- Court info: Name, location, rating
- **NEW - Data Transparency Section** (prominent):
  ```
  THIS COURT COLLECTS:
  ✓ Your name, phone, email (for booking)
  ✓ Booking dates & times (for scheduling)
  ✗ Payment card details (we use secure payment processor)
  
  WHAT WE DO WITH IT:
  → Send confirmation emails
  → Share with court staff for check-in
  → Keep for 2 years for refunds/disputes
  
  [See Full Privacy Policy] [Opt-out certain data]
  ```
- Facilities section with privacy toggle
  - "This court has CCTV in common areas" - with opt-out option
  - "This court shares booking data with management" - toggle to minimize
- Reviews section
- Booking buttons

**Interactive Elements**:
- Data transparency section expands/collapses
- Hover on data points shows "why we collect this"
- "Opt-out" toggles show impact message
- Privacy policy link opens modal overlay

---

### 5. **Booking Flow - Data Minimization Steps**

#### Step 1: Date & Time Selection
- Calendar widget with available slots
- Time slot picker
- **Privacy indicator**: "We'll collect your booking time"
- Booking summary (right panel) shows: Court, date, time, total price

#### Step 2: Group Details - Minimal Required Fields
- Contact Person Information (mandatory):
  - Full Name (used for: booking confirmation only)
  - Email (used for: confirmation email - can opt for SMS only)
  - Phone (used for: court check-in)
- **NEW**: "Minimal Data Mode" toggle
  - When ON: Collects only name + phone, no email
  - Shows impact: "This court will contact you by phone only"
- Number of Players (simple dropdown: 2, 3, 4, 4+)
- Optional Notes field
- Group members section (optional):
  - "Add group members? (Optional)"
  - "We don't need their details - you can share court with whoever you want"

**Interactive Elements**:
- Form field focus shows collection purpose
- "Minimal Data Mode" toggle with live feedback
- Validation shows what's required vs. optional
- "Why do we need this?" tooltips on mandatory fields

#### Step 3: Review & Confirm with Final Privacy Check
- Booking Summary (left):
  - Court details
  - Date/time
  - Players count
  - Total price
- **Final Privacy Check** (right, highlighted):
  ```
  BEFORE YOU CONFIRM:
  ✓ We'll send booking confirmation to [email/phone]
  ✓ Court staff will have your name & contact
  ✓ Your data will be deleted after [X months]
  
  DATA THIS COURT USES:
  [List collected data with collection method]
  
  [I Understand - Continue to Payment] [Back to Edit]
  ```
- Data retention timeline visualization
- Links to full privacy terms

**Interactive Elements**:
- Expandable data breakdown
- "Change my consent" button returns to data settings
- Retention timeline shows when data is deleted
- Read confirmation before enabling button

---

### 6. **User Settings - Privacy Control Center**
**Purpose**: Give users full control over their data

**Tabs**:
1. **Account Settings**
   - Name, email, phone (with "Why we collect this" explanations)
   - Delete Account button (with 30-day grace period warning)

2. **Privacy & Data** (Primary focus)
   - **Data Preferences**:
     - ☐ Allow marketing emails
     - ☐ Allow booking data for analytics
     - ☐ Allow location tracking
     - ☐ Allow court to contact me for feedback surveys
   - **Download Your Data** button
     - "Get a copy of all data we have on you in PDF format"
   - **Data Deletion Schedule**
     - Shows when booking history will be automatically deleted
     - Default: 2 years after booking
   - **Active Sessions** - Show device info, last active, "Sign out" option

3. **Communication Preferences**
   - Email frequency (reminders, promotions, updates)
   - SMS preferences
   - Language preference
   - Contact method preference (email/SMS/phone)

4. **Connected Devices & Apps**
   - Shows where user has logged in
   - "Sign out from all devices" option
   - App permissions (for mobile version)

**Interactive Elements**:
- Toggle switches with confirmation modals for sensitive changes
- "Undo recent changes" link (7-day window)
- Expandable explanations on each setting
- Real-time feedback on what changes mean

---

### 7. **My Bookings - Privacy-Aware Management**
**Purpose**: Manage bookings while respecting data minimization

**Layout**:
- Tabs: All (1) | Confirmed (1) | Pending (0) | Cancelled (0)
- Booking cards showing:
  - Court name & image
  - Date, time, group size
  - Status badge with animation
  - **NEW - Privacy Badge**: Shows data collected for this booking
    - Example: "📊 Minimal data: Name & phone only"
  - Actions: "View Details" | "Cancel" | "Download Receipt"
  - "What data did we collect?" expandable section

**Interactive Elements**:
- Hover on privacy badge shows collection tooltip
- "Download receipt" (PDF without excess data)
- "View sharing settings" - who has access to this booking
- Expandable data section

---

## Part 3: Interaction Design Principles Applied

### 1. **Feedback & Response**
- Every action triggers clear feedback:
  - Consent checkboxes → immediate state change + confirmation
  - Data toggles → "Impact" message showing consequences
  - Form submission → progress indicator + success state
  - Filter changes → card count update + animation

### 2. **Consistency**
- Same privacy disclosure structure across all screens
- Uniform "Why?" tooltip styling
- Consistent consent patterns
- Standard button styles (primary: Teal, secondary: Gray, danger: Red)

### 3. **User Control & Agency**
- Every mandatory data collection explained with "Why?"
- Optional data marked clearly
- Easy access to privacy settings from any screen
- "Change my mind" paths throughout booking flow

### 4. **Error Prevention**
- Consent checkboxes required before action
- Confirmation modal for data deletion
- "Minimal Data Mode" warning before disabling email
- Preview of what data is collected before confirmation

### 5. **Accessibility (WCAG AA)**
- All interactive elements focusable via keyboard
- Color not sole conveyor of meaning (badges also use text/icons)
- Privacy badges have aria-labels explaining purpose
- Form labels associated with inputs
- Sufficient color contrast (4.5:1 text, 3:1 graphics)
- Tab order logical from top to bottom
- Error messages clear and associated with fields

### 6. **Mobile Responsiveness**
- Single column layout on mobile (<768px)
- Filters drawer instead of sidebar
- Consent modals full-screen on mobile
- Touch-friendly button sizing (48px minimum)
- Privacy badges collapse to icons on mobile, expand on tap

---

## Part 4: Privacy & Ethics Framework (Privacy by Design)

### Principle 1: Data Minimization
- **Implementation**: Only collect name, email, phone for booking (not birthday, gender, etc.)
- **Badge**: "Minimal data" shown on applicable courts
- **Control**: "Minimal Data Mode" toggle to collect only name + phone

### Principle 2: Purpose Limitation
- **Implementation**: Clear "What we do with it" section on every data point
- **Transparency**: Court staff see only: name, phone, booking time (not email)
- **Control**: "Opt-out" toggles for non-essential data sharing

### Principle 3: Consent & Transparency
- **Implementation**: Explicit checkboxes for each data use, never pre-checked
- **Clarity**: "Why we ask?" tooltips on every mandatory field
- **Record**: Users can see their consent history in Privacy settings

### Principle 4: User Rights
- **Access**: "Download Your Data" button (JSON/PDF export)
- **Correction**: All fields editable in settings
- **Deletion**: "Delete Account" with 30-day grace period
- **Portability**: Export booking history

### Principle 5: Retention Limits
- **Display**: Clear "Deleted after X months" next to booking
- **Default**: 2 years for booking history, 30 days for search history
- **Control**: Slider to adjust retention (1 month to 5 years)

### Principle 6: Security (Implicit)
- **Privacy badge notes**: "Payment info not stored - processed by [Provider]"
- **Session timeout**: "Auto sign-out after 15 min of inactivity"
- **Data encryption**: Mentioned in privacy settings

---

## Part 5: UX Evaluation Methods

### Method 1: Heuristic Evaluation

**Process**: 3-5 evaluators assess against 12 heuristics

**Evaluation Checklist** (20 criteria):
1. ✓ System visibility: Users know what data is being collected
2. ✓ System-user match: Privacy controls match user mental models
3. ✓ User control: Easy to change consent/data preferences
4. ✓ Error prevention: Validation prevents unintended data sharing
5. ✓ Help documentation: "Why?" explanations clear
6. ✓ Flexibility: Optional data is clearly marked
7. ✓ Data minimization: Form only asks for essentials
8. ✓ Consent clarity: Checkboxes never pre-selected
9. ✓ Transparency: Data usage shown before booking
10. ✓ Accessibility: WCAG AA standards met
11. ✓ Mobile responsiveness: Works on all screen sizes
12. ✓ Consistency: Privacy patterns uniform across screens
13. ✓ Recovery: Users can undo consent changes (7-day window)
14. ✓ Feedback: Every action has clear feedback
15. ✓ Retention clarity: Users know how long data kept
16. ✓ Data export: Users can download their data
17. ✓ Deletion: Easy account/booking deletion
18. ✓ Sharing disclosure: Clear about who sees data
19. ✓ Retention slider: Users control data storage length
20. ✓ Session security: Auto sign-out enabled

**Severity Scale**:
- Critical (blocks booking/violates privacy)
- Major (reduces transparency/control)
- Minor (inconsistency in privacy UX)
- Cosmetic (labeling inconsistency)

---

### Method 2: Moderated User Testing

**Participants**: 5-8 users (mix of badminton players, ages 25-45)

**Tasks** (15-20 min sessions):
1. "Book a court for this Saturday at 7 PM" (observe privacy notice reading)
2. "Tell me what data this court collects" (assess transparency)
3. "Change your email notification preferences" (test privacy settings)
4. "Download your booking data" (test data export)
5. "Find a court that collects minimal data" (assess filter functionality)

**Metrics**:
- Task completion rate (target: ≥80%)
- Time to complete booking (target: <3 min)
- Privacy understanding score (quiz: what data collected? retention? who sees it?)
- Confidence rating: "I understand how my data will be used" (scale 1-5, target: ≥4.5)
- Consent comprehension: Correct understanding of consent checkboxes (target: 100%)
- Error rate during privacy-related tasks

**Questions**:
- "What does this court do with your phone number?"
- "How long is your data kept?"
- "Who can see your booking?"
- "Would you feel comfortable booking here? Why/why not?"
- "What's one thing you'd change about privacy here?"

**Observation Notes**:
- Where do users look first?
- Do they read privacy badges?
- Do they understand data minimization?
- Hesitations during consent steps?
- Questions about data handling?

---

## Part 6: Iteration Cycle

### Round 1: Heuristic Evaluation
- 3-5 UX evaluators review prototype
- Identify critical privacy UX issues
- Document findings in severity categories
- Prioritize top 5 fixes

### Round 2: User Testing (Moderated)
- 5-8 participants book a court
- Record observations & video
- Note privacy comprehension gaps
- Measure task completion rates

### Round 3: Synthesis & Analysis
- Consolidate findings from both methods
- Create affinity map of common issues
- Prioritize changes by impact + severity
- Create refinement roadmap

### Round 4: Design Refinement
- Implement top 10 findings
- Focus on privacy transparency gaps
- Iterate on unclear interactions
- Refine visual feedback

### Round 5: Validation Testing
- Re-test with 3-4 participants on refined screens
- Verify fixes resolved original issues
- Measure improvement in metrics
- Capture final feedback

### Round 6: Final Polish
- Address edge cases
- Ensure consistency
- Document final design system
- Prepare for handoff to dev

---

## Part 7: Deliverables Checklist

### In Figma:
- [ ] Design System file (colors, typography, components)
- [ ] High-fidelity screens (all 7 key screens)
- [ ] Interactive prototype with flows
- [ ] Mobile responsive variants
- [ ] Privacy component library (badges, tooltips, consent modals)
- [ ] Interaction specs (animations, transitions)
- [ ] Accessibility annotations

### Documentation:
- [ ] HiFi specs (this document)
- [ ] Heuristic evaluation checklist
- [ ] User testing plan & script
- [ ] Privacy & ethics analysis
- [ ] Iteration findings report
- [ ] Design system documentation
- [ ] Component usage guide

### Evaluation Materials:
- [ ] Heuristic evaluation form (digital)
- [ ] User testing consent form
- [ ] Task script (printable)
- [ ] Observer notes template
- [ ] Findings synthesis template
- [ ] Iteration roadmap document

---

## Notes for Figma Implementation

1. **Create Figma components** for:
   - Privacy badges (Minimal data, Verified, etc.)
   - Consent checkboxes with descriptions
   - "Why?" tooltip system
   - Data transparency panels
   - Form fields with privacy explanations
   - Status badges

2. **Set up interactive prototypes**:
   - Consent checkbox → Enable/disable confirm button
   - "Why?" labels → Show tooltip overlay
   - Form submission → Show success state
   - Filter toggle → Update card display
   - Expand data section → Smooth height animation

3. **Create mobile variants**:
   - Responsive grid: 1 column on mobile, 2 on tablet, 3+ on desktop
   - Sidebar filters → Bottom drawer
   - Side-by-side layouts → Stacked

4. **Accessibility annotations**:
   - Add ARIA labels to icons
   - Note keyboard navigation order
   - Specify color contrast ratios
   - Label form fields
   - Describe icon meanings

---

## Success Criteria

After full iteration cycle, prototype should achieve:
- ✓ 85%+ user task completion rate
- ✓ 4.5/5+ confidence in privacy understanding
- ✓ 100% consent comprehension accuracy
- ✓ WCAG AA accessibility compliance
- ✓ <5 critical privacy UX issues remaining
- ✓ Mobile responsiveness verified
- ✓ All interaction feedback implemented
