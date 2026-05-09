# CourtBook HiFi Prototype - Heuristic Evaluation Checklist

## Overview
This document provides a comprehensive heuristic evaluation framework using Nielsen's 10 Usability Heuristics plus 10 Privacy-Specific Heuristics. Designed for 3-5 expert evaluators to independently review the prototype and identify usability and privacy issues.

---

## Part A: Nielsen's 10 Usability Heuristics

Each evaluator rates each heuristic on a 5-point severity scale:
- **1 = No Problem**: Not an issue; feature works well
- **2 = Minor Issue**: Cosmetic; doesn't affect functionality
- **3 = Major Issue**: Causes confusion but users can workaround
- **4 = Critical**: Users unable to complete task; breaks functionality
- **5 = Catastrophic**: Blocks entire user flow; must fix immediately

### 1. Visibility of System Status

**Description**: The app should keep users informed in real-time about what's happening.

**Checklist Items**:
- [ ] Loading states are visible (spinners, skeletons, etc.)
- [ ] Form submission feedback is immediate
- [ ] Booking confirmation appears after completion
- [ ] Error messages appear clearly and promptly
- [ ] Status of current page/screen is obvious
- [ ] Navigation shows current location (breadcrumbs or active state)
- [ ] Transition between screens has some feedback
- [ ] Search results update in real-time as filters change
- [ ] Calendar date selection shows selected date
- [ ] Checkout process shows progress (step 1 of 4, etc.)

**Issues Found**:
```
Issue #1: [Severity: 1-5] [Screen/Feature: ____]
Description: ________________
Recommendation: ________________

Issue #2: ...
```

**Severity Average**: ___/5

---

### 2. Match Between System and Real World

**Description**: Speak the user's language, use familiar terms and conventions.

**Checklist Items**:
- [ ] Court terminology matches what badminton players use
- [ ] Price formatting uses local currency clearly (Rp vs currency symbol)
- [ ] Time display uses 24-hour (common in Indonesia) or 12-hour clearly
- [ ] Location names are recognizable (not codes or unclear abbreviations)
- [ ] Facility icons/names match real-world expectations
- [ ] Floor material names are standard industry terms
- [ ] Booking status terms are clear (Confirmed vs Pending)
- [ ] Form labels match user mental models
- [ ] Icons represent concepts accurately
- [ ] Error messages explain problems in plain language

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 3. User Control and Freedom

**Description**: Users need clear "emergency exits" and can undo/redo actions.

**Checklist Items**:
- [ ] Users can go back from any screen
- [ ] Booking can be cancelled without penalty (clear exceptions)
- [ ] Accidental submissions can be undone (confirmation dialogs)
- [ ] Users can edit their profile info
- [ ] Users can change privacy preferences anytime
- [ ] Data can be deleted through privacy settings
- [ ] Search filters can be reset easily
- [ ] Browser back button works as expected
- [ ] No forced flows that trap users
- [ ] Can exit dialogs/modals with X button or Cancel

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 4. System Consistency and Standards

**Description**: Follow web and app conventions; be consistent internally.

**Checklist Items**:
- [ ] Button styles consistent (primary, secondary, danger colors)
- [ ] Icons used consistently (same icon for same action)
- [ ] Spacing/padding consistent throughout app
- [ ] Typography hierarchy consistent
- [ ] Color coding consistent (green for success, red for danger, etc.)
- [ ] Form inputs styled consistently
- [ ] Navigation placement consistent across screens
- [ ] Modal/dialog patterns consistent
- [ ] Error message styling consistent
- [ ] Card/list item layouts consistent

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 5. Error Prevention and Recovery

**Description**: Prevent errors; if they happen, clearly explain and recover.

**Checklist Items**:
- [ ] Form validation happens before submission
- [ ] Destructive actions (delete) require confirmation
- [ ] Conflicting filters show explanations (not silent failures)
- [ ] Date/time mismatches are caught
- [ ] Required fields are marked clearly
- [ ] Invalid entries show specific error messages
- [ ] Error messages suggest solutions
- [ ] Users can recover from errors without starting over
- [ ] Past dates cannot be selected in calendar
- [ ] Missing fields are highlighted on submission

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 6. Flexibility and Efficiency

**Description**: Support both new and experienced users; allow shortcuts.

**Checklist Items**:
- [ ] Search filters allow quick refinement
- [ ] Saved preferences (sort, filters) persist
- [ ] Multiple pathways to complete a task
- [ ] Advanced users can skip explanatory text
- [ ] Bulk actions possible (multi-select bookings)
- [ ] Favorites/saved courts available (if implemented)
- [ ] Quick booking shortcuts exist
- [ ] Customizable view options (list vs grid)
- [ ] Keyboard shortcuts documented (if applicable)
- [ ] Mobile experience is as efficient as desktop

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 7. Aesthetic and Minimalist Design

**Description**: Remove irrelevant information; focus on essential content.

**Checklist Items**:
- [ ] Court cards show essential info without clutter
- [ ] Filters don't overwhelm with options
- [ ] Whitespace is used effectively
- [ ] No unnecessary animations or decorations
- [ ] Images enhance content (not purely decorative)
- [ ] Information hierarchy is clear (headings, sizes, weights)
- [ ] No duplicate information repeated
- [ ] Sidebar filters don't take excessive space
- [ ] Forms don't ask for non-essential data
- [ ] Booking summary is scannable and concise

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 8. Help and Documentation

**Description**: Provide help when needed; easy to search and task-focused.

**Checklist Items**:
- [ ] Privacy settings have tooltips explaining each toggle
- [ ] Court facility icons have labels/tooltips
- [ ] Help text available without leaving current screen
- [ ] FAQ/Help section is easily accessible
- [ ] Common questions are answered (data retention, cancellation, etc.)
- [ ] Booking flow has helpful hints at each step
- [ ] Privacy badge has hover explanation
- [ ] Required vs optional fields are explained
- [ ] Payment methods have clarification
- [ ] Contact information for support is visible

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 9. Mobile Responsiveness

**Description**: Interface works well on mobile devices.

**Checklist Items**:
- [ ] Touch targets are ≥44px (easy to tap)
- [ ] Text is readable without zooming
- [ ] Images scale appropriately
- [ ] Filters collapse into menu on mobile
- [ ] Forms fit mobile width without side-scrolling
- [ ] Modals/dialogs work on small screens
- [ ] Navigation adapts to mobile (hamburger menu, etc.)
- [ ] Buttons are large enough to tap easily
- [ ] Table data is reformatted for mobile
- [ ] Performance is acceptable on mobile networks

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 10. Accessibility (WCAG 2.1 AA)

**Description**: Accessible to users with disabilities.

**Checklist Items**:
- [ ] Color contrast meets WCAG standards (4.5:1 for text)
- [ ] All images have alt text
- [ ] Form fields have associated labels
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators are visible
- [ ] Tab order is logical
- [ ] Buttons and links are labeled clearly
- [ ] Icons without text have aria-label
- [ ] Don't rely on color alone to convey meaning
- [ ] Heading hierarchy is proper (H1, H2, H3...)

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

## Part B: Privacy-Specific Heuristics

### 11. Data Minimization

**Description**: Only collect data necessary for the stated purpose.

**Checklist Items**:
- [ ] Booking requires only: Name, Email, Phone, Date, Time, Players
- [ ] No unnecessary data fields in forms
- [ ] No age, gender, or interest profiling
- [ ] No "optional" tracking fields
- [ ] Minimal Data Mode is fully functional
- [ ] Users aren't pressured to share optional data
- [ ] Profile page doesn't request unnecessary info
- [ ] Payment processor doesn't request excess data
- [ ] No hidden data collection scripts
- [ ] Data collection clearly justified

**Issues Found**:
```
Issue #1: [Severity: 1-5]
Description: The app asks for 'favorite court' which isn't necessary for booking
Recommendation: Remove this field or make clearly optional
```

**Severity Average**: ___/5

---

### 12. Transparency of Data Use

**Description**: Users know what data is collected and how it's used.

**Checklist Items**:
- [ ] Before booking, "What we collect" section is visible
- [ ] Each field has "Why we ask" explanation
- [ ] Privacy badge explains data level (Minimal/Standard/Full)
- [ ] Consent checkboxes show what they enable
- [ ] Terms of service are readable (not legalese)
- [ ] Privacy policy accessible from every page
- [ ] "Why" tooltips appear for privacy questions
- [ ] Data retention policy clearly stated (2 years, etc.)
- [ ] No misleading statements about data
- [ ] Third-party integrations disclosed

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 13. User Consent and Agency

**Description**: Users actively consent to data processing; nothing is forced.

**Checklist Items**:
- [ ] All non-essential toggles default to OFF
- [ ] Consent checkboxes require explicit action (can't accidentally consent)
- [ ] Checkboxes can be unchecked easily
- [ ] Opting out doesn't break core functionality
- [ ] "Accept All" button doesn't appear without granular options
- [ ] Users can change consent anytime
- [ ] Pre-checked boxes don't exist (except essential)
- [ ] Consent withdraws old data collection (where possible)
- [ ] Cookie consent clear and straightforward
- [ ] No guilt-tripping language ("Help us improve")

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 14. Privacy Controls and Settings

**Description**: Users can manage their data and privacy actively.

**Checklist Items**:
- [ ] Privacy Settings page is easily accessible
- [ ] Minimal Data Mode toggle works and is obvious
- [ ] Users can disable analytics, marketing, etc.
- [ ] Settings changes apply immediately
- [ ] Users can view what data is stored
- [ ] Download data button works
- [ ] Delete data option available
- [ ] Users can manage retention preferences
- [ ] Privacy controls grouped logically
- [ ] Changes are confirmed/saved visibly

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 15. Privacy Badges and Indicators

**Description**: Visual signals help users quickly understand privacy levels.

**Checklist Items**:
- [ ] Privacy badges clearly distinguish court data practices
- [ ] Badge colors are accessible (not color-blind unfriendly)
- [ ] Tooltips explain each badge level
- [ ] Badges visible on all court listings
- [ ] Consistent badge styling throughout
- [ ] "Minimal Data" label is clear (not jargon)
- [ ] Icons match badge meaning
- [ ] Badges don't overwhelm the UI
- [ ] Court detail page also shows privacy info
- [ ] Badges indicate what data is minimized

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 16. Data Protection & Security Communication

**Description**: Users understand that their data is protected.

**Checklist Items**:
- [ ] Encryption/security methods mentioned (e.g., "SSL encrypted")
- [ ] Security certifications displayed (if applicable)
- [ ] Server location mentioned (for legal jurisdiction context)
- [ ] Breach notification process explained
- [ ] Regular security audits mentioned
- [ ] Compliance (GDPR, CCPA) clearly stated
- [ ] No false security claims
- [ ] Data deletion actually works (no backups kept forever)
- [ ] Secure payment integration confirmed
- [ ] Password requirements are reasonable

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 17. Third-Party and Sharing Transparency

**Description**: Clear about what data goes to third parties.

**Checklist Items**:
- [ ] No third-party sharing without explicit consent
- [ ] Third-party partners listed (e.g., payment processor)
- [ ] Each third party's purpose explained
- [ ] Users can opt out of non-essential sharing
- [ ] No data sold to advertisers
- [ ] Analytics partner disclosed
- [ ] Payment processor disclosed
- [ ] Sharing limitations explained
- [ ] Court venue data collection practices disclosed
- [ ] Users notified of policy changes regarding sharing

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 18. User Rights (Access, Correction, Deletion)

**Description**: Users can exercise privacy rights easily.

**Checklist Items**:
- [ ] "Download my data" function works (JSON/CSV export)
- [ ] Data export is complete and understandable
- [ ] Users can request data correction
- [ ] Delete data option removes all personal info
- [ ] Deletion confirmation is clear
- [ ] Time to process requests stated (<30 days)
- [ ] No barriers to exercising rights
- [ ] Rights listed clearly (Access, Correct, Delete, Port)
- [ ] Contact for privacy requests given
- [ ] Deletion confirmed to user

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 19. Data Retention Clarity

**Description**: Users understand how long their data is kept.

**Checklist Items**:
- [ ] Retention periods clearly stated for each data type
- [ ] "2 years after last booking" is visible
- [ ] Tax records retention (7 years) explained
- [ ] Auto-deletion process described
- [ ] Users can request earlier deletion
- [ ] No indefinite data storage
- [ ] Backup/archival policies explained
- [ ] Retention periods comply with regulations
- [ ] Users can customize retention settings
- [ ] Deletion timeline is reasonable

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

### 20. Privacy by Default

**Description**: Privacy-protective settings are defaults; users opt-in to less privacy.

**Checklist Items**:
- [ ] Minimal data collection is the default option
- [ ] Optional tracking is OFF by default
- [ ] Marketing emails OFF by default
- [ ] Analytics OFF by default (or opt-in)
- [ ] All toggles start in privacy-protective state
- [ ] Users must actively choose to share more
- [ ] "Minimal Data Mode" is easy to enable
- [ ] No rewards for sharing data
- [ ] Privacy warnings appear before sharing more
- [ ] Dark patterns avoided

**Issues Found**:
```
Issue #1: [Severity: 1-5]
...
```

**Severity Average**: ___/5

---

## Evaluation Form Template

### Evaluator Information
- **Evaluator Name**: _____________
- **Date**: _______________
- **Session Duration**: _____ hours

### Summary Scores
| Heuristic | Avg Severity |
|-----------|-------------|
| 1. Visibility | __/5 |
| 2. Match System-World | __/5 |
| 3. User Control | __/5 |
| 4. Consistency | __/5 |
| 5. Error Prevention | __/5 |
| 6. Flexibility | __/5 |
| 7. Aesthetic | __/5 |
| 8. Help & Docs | __/5 |
| 9. Mobile | __/5 |
| 10. Accessibility | __/5 |
| **Usability Average** | **__/5** |
| 11. Data Minimization | __/5 |
| 12. Transparency | __/5 |
| 13. Consent | __/5 |
| 14. Privacy Controls | __/5 |
| 15. Privacy Badges | __/5 |
| 16. Security Comms | __/5 |
| 17. Third-Party | __/5 |
| 18. User Rights | __/5 |
| 19. Retention Clarity | __/5 |
| 20. Privacy by Default | __/5 |
| **Privacy Average** | **__/5** |
| **Overall Average** | **__/5** |

### Top 3 Critical Issues
1. [Severity 4-5]: _______________________
2. [Severity 4-5]: _______________________
3. [Severity 4-5]: _______________________

### Top 3 Strengths
1. ________________________
2. ________________________
3. ________________________

### Overall Impression
_________________________________

---

## Analysis & Synthesis Process

### Step 1: Individual Evaluation (Each Evaluator)
- Complete form independently
- Rate each heuristic 1-5
- List specific issues with locations
- Provide recommendations

### Step 2: Consolidation
- Compile all 3-5 evaluators' responses
- Identify consensus issues (mentioned by 2+ evaluators)
- Calculate average severity scores
- Create consolidated issue list

### Step 3: Prioritization
**High Priority** (Severity 4-5): Fix before user testing
**Medium Priority** (Severity 3): Fix during iteration round
**Low Priority** (Severity 1-2): Consider for future versions

### Step 4: Reporting
- Report average severity for each heuristic
- List issues by priority
- Show consensus issues
- Provide specific recommendations

---

## Success Criteria
The heuristic evaluation is successful if:
- ✓ All 3-5 evaluators complete forms
- ✓ Average severity <2.5/5 for each heuristic
- ✓ <5 critical (4-5 severity) issues identified
- ✓ Privacy heuristics average ≤2.0/5
- ✓ Consensus on top 3 issues across evaluators
