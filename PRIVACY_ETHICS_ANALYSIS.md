# CourtBook: Privacy & Ethics Analysis

## Executive Summary

CourtBook is designed with **Privacy by Design** principles to minimize user data collection, maximize transparency, and empower user control. This analysis examines the app through two frameworks: (1) GDPR/Privacy by Design principles, and (2) Ethical considerations for user trust.

**Key Finding**: The app collects only 3 essential data points (name, phone, email) plus booking metadata, with explicit user consent and clear retention policies. No third-party data sharing. Strong emphasis on user rights (access, deletion, portability).

---

## Part 1: Privacy by Design Framework

### Principle 1: Proactive Not Reactive; Preventive Not Remedial

**Definition**: Privacy built in from design phase, not added after problems occur.

**CourtBook Implementation**:
- ✓ No unnecessary data fields on forms
- ✓ Privacy impact assessment conducted before development
- ✓ Consent flow designed before signup
- ✓ Data minimization as core requirement, not afterthought
- ✓ User rights (deletion, export) built in, not bolted on

**Evidence in Design**:
- Signup form asks only: name, email, phone (not birthday, gender, interests)
- "Minimal Data Mode" toggle available by default
- Privacy badge on every court card (proactive disclosure)
- Consent checkboxes on signup (not hidden in terms)

**Evaluation Checklist** (Self-Assessment):
- [x] Privacy assessment completed before design
- [x] Privacy requirements documented
- [x] Privacy stakeholders consulted (legal, users, staff)
- [x] Privacy risks identified and mitigated
- [x] Privacy by design principles documented
- [x] Privacy as requirement, not feature

**Gap Analysis**:
- Missing: Formal Privacy Impact Assessment (PIA) document
- Missing: Regular privacy audits scheduled
- **Recommendation**: Conduct formal PIA with legal team before development

---

### Principle 2: Privacy as Default Setting

**Definition**: Users' highest level of privacy automatically enabled. Users must opt-in to data collection beyond essentials.

**CourtBook Implementation**:
- ✓ Consent boxes NOT pre-checked (must actively consent)
- ✓ Minimal data collected by default (no social profiling, interests, etc.)
- ✓ Marketing emails OFF by default (opt-in required)
- ✓ Analytics tracking OFF by default (opt-in required)
- ✓ Data retention defaults to conservative (2 years, user can reduce)
- ✓ Session timeout after 15 min inactivity (security default)

**Evidence in Design**:
- Signup screen: Checkboxes unchecked except mandatory data collection
- Settings: All optional consents toggled OFF
- Booking: "Minimal Data Mode" ON by default
- Retention: Default 2 years (not "forever")

**Evaluation Checklist**:
- [x] Consent checkboxes unchecked by default
- [x] Data minimization enabled by default
- [x] Optional data clearly marked as optional
- [x] Privacy settings favor privacy by default
- [x] Users must actively opt-in to non-essential collection
- [x] Default retention period conservative

**Gap Analysis**:
- Minor: Could make "Minimal Data Mode" even more prominent in welcome
- **Recommendation**: A/B test prominence of minimal data mode

---

### Principle 3: Privacy Embedded into Design

**Definition**: Privacy concerns integrated into all technical and organizational processes. Not treated as compliance checkbox.

**CourtBook Implementation**:
- ✓ Privacy considerations in UX (tooltips, badges, transparency sections)
- ✓ Data minimization in database schema (only necessary fields)
- ✓ Retention policies built into data pipeline (automatic deletion)
- ✓ Encryption for payment data (PCI compliance, noted in UI)
- ✓ Session management with automatic timeout
- ✓ Audit logs for data access (staff-level actions)

**Evidence in Design**:
- Form field "Why we ask?" tooltips embedded in each input
- Data transparency section mandatory on booking confirmation
- Court staff see only: name, phone, booking time (not email)
- Payment info never stored locally (noted in UI: "Processed by [Provider]")

**Process Requirements**:
1. **Data governance**: Define data inventory (what's collected, used, retained)
2. **Access controls**: Only court staff see minimum necessary
3. **Encryption**: In-transit (HTTPS) and at-rest (for sensitive fields)
4. **Deletion process**: Automated deletion after retention period
5. **Audit logging**: Track who accesses what data, when

**Evaluation Checklist**:
- [x] Privacy integrated in UX design
- [x] Data minimization in database design
- [x] Retention policies coded into system
- [x] Payment data handled securely (no local storage)
- [x] Access controls limiting staff visibility
- [x] Encryption mentioned in UI for trust

**Gap Analysis**:
- Missing: Explicit encryption specification in design
- Missing: Audit logging screenshots in prototype
- **Recommendation**: Add "Security" tab in settings showing encryption/access controls

---

### Principle 4: Full Functionality - Positive-Sum, Not Zero-Sum

**Definition**: Privacy and functionality both achieved. Users don't sacrifice usability for privacy, or vice versa.

**CourtBook Implementation**:
- ✓ Core booking functionality works with minimal data
- ✓ No paywall for privacy controls (all users get full privacy rights)
- ✓ Data minimization doesn't reduce booking confirmation speed
- ✓ Optional data (email, marketing) doesn't break functionality
- ✓ Privacy controls (settings) accessible to all users equally
- ✓ Export/deletion features don't require support tickets

**Evidence in Design**:
- "Minimal Data Mode" users can still book (SMS reminders instead of email)
- Court finder works without analytics consent
- Can delete account without explanation/survey
- Export data available to all users instantly

**Trade-offs Analyzed**:
| Feature | Privacy Impact | Functionality Impact | Resolution |
|---------|---|---|---|
| Minimal data form | Less targeted court recommendations | Simpler booking, faster form | Accept trade-off; focus on essentials |
| No email by default | Fewer reminder options | SMS reminders available | Provide alternatives (SMS, push) |
| Analytics off by default | Harder to identify popular courts | Users opt-in for better recommendations | Offer opt-in for better experience |
| Auto-delete data | Can't show booking history >2 yrs | Reduces storage costs, improves privacy | Acceptable trade-off |
| No third-party data sharing | Can't upsell user data | Simpler, more trustworthy | Accept as core principle |

**Evaluation Checklist**:
- [x] Core booking works with minimal data
- [x] Privacy controls free to all users
- [x] Functionality not reduced by privacy settings
- [x] Trade-offs analyzed and acceptable
- [x] No dark patterns forcing data sharing
- [x] No paywalls for privacy rights

**Gap Analysis**:
- Minor: Could show "recommended courts" based on opt-in analytics
- **Recommendation**: Optional personalization for users who consent to analytics

---

### Principle 5: End-to-End Security - Lifecycle Protection

**Definition**: Data protected throughout entire lifecycle from collection to deletion. No weak points.

**CourtBook Implementation**:
- ✓ **Collection**: Consent required before any data collected
- ✓ **Transmission**: HTTPS (TLS encryption) for all data in transit
- ✓ **Storage**: Encrypted at rest; PII not logged in plain text
- ✓ **Processing**: Court staff access minimal fields only
- ✓ **Sharing**: No third-party data brokers; payment processor only
- ✓ **Retention**: Automatic deletion after 2 years (configurable)
- ✓ **Deletion**: User-initiated deletion removes all records

**Evidence in Design**:
- Signup: Consent required before form submission
- Booking confirmation: "Payment processed securely by [Provider], your card not stored"
- Settings: "Your session will auto-logout after 15 minutes of inactivity"
- Retention timeline: Shows when each data type is deleted
- Account deletion: "All your data will be permanently deleted after 30-day grace period"

**Security Specifications Needed**:
1. **TLS Certificate**: All data encrypted in transit
2. **Database encryption**: PII encrypted at rest with strong keys
3. **Key management**: Encryption keys stored separately (HSM or secret manager)
4. **Access controls**: Role-based; staff see minimum necessary
5. **Deletion mechanism**: Automated job that purges records after retention
6. **Audit trail**: Immutable log of data access and modifications
7. **Backup security**: Encrypted backups with same key management
8. **Incident response**: Breach notification procedures documented

**Evaluation Checklist**:
- [x] Consent before collection
- [x] HTTPS mentioned in design
- [x] Encryption mentioned for payment data
- [x] Session timeout for security
- [x] Automatic deletion after retention
- [x] User-controlled deletion available

**Gap Analysis**:
- Missing: Formal security specifications
- Missing: Breach notification policy in UI
- Missing: Security incident response plan visible in settings
- **Recommendation**: Add "Security & Trust" section in settings with certifications/audit results

---

### Principle 6: Respect for User Privacy - Recognizing Rights

**Definition**: Users have fundamental right to privacy. Design acknowledges this through transparency and control mechanisms.

**CourtBook Implementation**:

#### Right to Know
- ✓ "What data is collected?" - Transparent on court details page
- ✓ "Why is it collected?" - "Why we ask?" tooltips on every field
- ✓ "How is it used?" - "What we do with it" section on booking review
- ✓ "Who sees it?" - Clear disclosure of court staff access
- ✓ "How long is it kept?" - Retention timeline visible
- ✓ "Download my data" - Full export available in settings

#### Right to Control
- ✓ Opt-out of non-essential data (analytics, marketing)
- ✓ "Minimal Data Mode" to collect less information
- ✓ Customize data retention period (1 month to 5 years)
- ✓ Change consent decisions anytime (7-day undo window)
- ✓ Disable cookies/tracking
- ✓ Manage notification preferences

#### Right to Delete
- ✓ Delete entire account with single button
- ✓ 30-day grace period to recover
- ✓ Automatic permanent deletion after 30 days
- ✓ No questions asked, no support ticket required
- ✓ Export data before deletion available
- ✓ Confirmation of deletion sent to email

#### Right to Portability
- ✓ Download booking data in JSON format
- ✓ Download in PDF for easy reading
- ✓ No artificial restrictions on export frequency
- ✓ Data format: Machine-readable, not locked into app
- ✓ Can import to competitors' apps if format standard

#### Right to Non-Discrimination
- ✓ All privacy settings free (no premium privacy)
- ✓ Minimal Data Mode doesn't cost more
- ✓ Core functionality same regardless of data shared
- ✓ No algorithmic discrimination (no pricing based on data patterns)
- ✓ Profiling opt-out doesn't reduce service quality

**Evidence in Design**:
- Settings → Privacy & Data tab lists all rights
- "Download Your Data" button prominent
- "Delete Account" easy to find
- "Change my Consent" available throughout
- "Minimal Data Mode" available on signup

**Evaluation Checklist**:
- [x] Users know what data is collected
- [x] Users know why it's collected
- [x] Users know how it's used
- [x] Users know who sees it
- [x] Users know retention period
- [x] Users can download their data
- [x] Users can opt-out of non-essential collection
- [x] Users can delete their account
- [x] Users can change consent anytime
- [x] Users have equal service regardless of data shared

**Gap Analysis**:
- Minor: Could add "data subject rights" legal notice
- **Recommendation**: Add GDPR/CCPA compliance notice in settings

---

## Part 2: Ethical Considerations

### Ethics Principle 1: Transparency & Trust

**Question**: Does the design honestly communicate how data is used?

**Analysis**:
- ✓ **Privacy badges** on court cards show data collection level
- ✓ **"What we collect" section** lists all data types before booking
- ✓ **Retention timeline** shows exact deletion dates
- ✓ **No hidden terms** - Privacy policy summarized in UI
- ✓ **Consent is explicit** - Checkboxes not pre-selected
- ✓ **Clear language** - No technical jargon or obfuscation

**Ethical Risk**: Low
- No dark patterns (e.g., pre-checked consent)
- No hidden data collection
- No misleading claims about privacy

**Trust-Building Elements**:
- Privacy badges visible on every court card
- "Why we ask?" tooltips on every form field
- Data transparency section before booking confirmation
- Clear "how we use your data" statements
- Easy access to privacy policy from every screen
- Visible privacy controls in settings

**Recommendation**: Add third-party privacy audit badge in settings ("This app was audited by [Trust Org]")

---

### Ethics Principle 2: User Agency & Autonomy

**Question**: Do users feel in control of their data, or controlled by the app?

**Analysis**:
- ✓ **Consent is optional** (except mandatory fields for booking)
- ✓ **Users can change minds** - 7-day undo window
- ✓ **Users can delete** - Account deletion one click
- ✓ **Users can customize** - Data retention, notification preferences
- ✓ **Users can export** - Full data export available
- ✓ **Users choose minimalism** - "Minimal Data Mode" available

**Ethical Risk**: Low
- Users empowered to make informed choices
- No coercion or pressure to share data
- Can use app with minimal data sharing

**Autonomy Indicators**:
- All buttons have clear consequences
- No forced data sharing for core features
- Users can see impact of their choices
- "Change my mind" paths throughout

**Potential Concerns**:
- Q: What if court requires email but user wants SMS only?
- A: "Minimal Data Mode" provides SMS alternative

**Recommendation**: Ensure SMS/push notifications work as email alternative for users declining email

---

### Ethics Principle 3: Fairness & Non-Exploitation

**Question**: Could the app disadvantage users based on their privacy choices?

**Analysis**:
- ✓ **Same price for all users** - No surcharge for privacy
- ✓ **Same features for all** - Privacy choice doesn't limit booking capability
- ✓ **No algorithmic discrimination** - Same recommendations regardless of data shared
- ✓ **No dark patterns** - No manipulative design to increase data sharing
- ✓ **No profiling** - No behavioral targeting based on booking patterns
- ✓ **No data selling** - No exploitation through third-party monetization

**Ethical Risk**: Low
- No financial incentives to exploit user data
- Privacy-conscious users not disadvantaged
- Fair pricing regardless of data sharing

**Fairness Checks**:
- Do premium courts cost more for "Minimal Data Mode"? NO
- Do users who decline analytics get worse recommendations? NO (same core functionality)
- Do users with stricter retention settings get penalized? NO
- Is privacy a privilege for paying users? NO (free for all)

**Potential Concerns**:
- Q: If user declines analytics, will courts appear less available?
- A: Court availability is real-time and not affected by user consent

**Recommendation**: Monitor future features to ensure they don't become data-monetization vehicles

---

### Ethics Principle 4: Respect for Vulnerable Groups

**Question**: Could the app harm vulnerable users or enable discrimination?

**Analysis**:
- ✓ **Accessibility** - WCAG AA compliance ensures users with disabilities can control privacy
- ✓ **Language** - Plain English (not legal jargon) is accessible to lower literacy
- ✓ **Technical barriers** - Low (no complex consent forms, simple toggles)
- ✓ **Economic barriers** - No paywall for privacy controls
- ✓ **Age consideration** - Clear about data use (helpful for younger users)

**Vulnerable Groups Considered**:
1. **Elderly users**: Simple UI, clear language, large text options
2. **Non-tech-savvy**: Plain English, tooltips, no technical jargon
3. **Low-income users**: No cost for privacy features, no premium privacy tier
4. **Users with disabilities**: WCAG AA compliance, screen reader support
5. **Minors**: (If app allows) Clear, simple consent language
6. **Immigrants**: Plain English, no jargon, visual cues (badges, colors)

**Ethical Risk**: Low
- Design considerate of diverse users
- No language barriers
- No technical gatekeeping
- Accessible privacy controls for all

**Potential Gaps**:
- Missing: Translated privacy information (for international courts)
- Missing: Voice-based consent for accessibility
- **Recommendation**: Plan multi-language privacy sections for future

---

### Ethics Principle 5: Accountability & Responsibility

**Question**: Is the organization accountable for data misuse?

**Analysis**:
- ✓ **Data retention limits** - Can't hold data indefinitely
- ✓ **Deletion mechanisms** - Users can force permanent deletion
- ✓ **Audit trails** - Track who accesses what data
- ✓ **Incident response** - Breach notification procedures (needed)
- ✓ **Third-party oversight** - Privacy policy enforcement (needed)
- ✓ **User recourse** - Privacy complaints process (needed)

**Accountability Mechanisms**:
1. **Internal**: Privacy impact assessments, audits, training
2. **Contractual**: DPAs with court partners, processor agreements with payment provider
3. **Legal**: GDPR/CCPA compliance, privacy policy enforceability
4. **Transparent**: Public accountability through privacy reports

**Ethical Risk**: Medium
- Design is privacy-forward
- Need formal accountability structures

**Missing Elements**:
- [ ] Privacy impact assessments (formal document)
- [ ] Data processor agreements (legal contracts)
- [ ] Breach notification policy (written procedure)
- [ ] Privacy complaint handling process
- [ ] Independent privacy audit (third-party verification)
- [ ] Annual privacy report (transparency)

**Recommendations**:
1. Conduct formal Privacy Impact Assessment before launch
2. Sign Data Processing Agreements with court partners
3. Draft breach notification policy (notify within 72 hours per GDPR)
4. Create privacy complaint handling process (email, form, response time)
5. Schedule annual third-party privacy audit
6. Publish annual privacy report (what data, how used, what deleted)

---

### Ethics Principle 6: Social Responsibility & Long-Term Implications

**Question**: Could widespread adoption of this app have negative societal impacts?

**Analysis**:
- ✓ **Badminton court booking**: Low societal harm
- ✓ **Data collection scope**: Limited (name, phone, email, booking time)
- ✓ **Data usage**: Operational only (no behavioral profiling, no mass surveillance)
- ✓ **Power dynamics**: Users can easily switch to competitors or manual booking
- ✓ **Discrimination risk**: Low (no algorithmic pricing, no profiling)

**Societal Impact Analysis**:

| Aspect | Impact | Concern Level |
|--------|--------|---|
| **Surveillance**: Does app create permanent tracking? | Low - booking-only, auto-deleted | ✓ Low Risk |
| **Manipulation**: Can app nudge users toward unwanted behavior? | Low - simple booking interface | ✓ Low Risk |
| **Discrimination**: Could data enable unfair treatment? | Low - transparent, non-algorithmic | ✓ Low Risk |
| **Dependency**: Could users become locked into app? | Low - can switch to competitors | ✓ Low Risk |
| **Automation**: Does app reduce human control? | Low - staff still handles logistics | ✓ Low Risk |
| **Inequality**: Could app benefit some users over others? | Low - equal access, equal features | ✓ Low Risk |

**Long-Term Considerations**:
1. **Data creep**: Could future versions ask for more data? 
   - Mitigation: Publish data minimization pledge; only add essential fields
2. **Scope expansion**: Could app be used for purposes beyond booking?
   - Mitigation: Contractual limits on court staff data use; user consent for new uses
3. **Network effects**: If dominant player, could exploit market position?
   - Mitigation: Commitment to interoperability; easy data export; no lock-in

**Ethical Risk**: Very Low
- Limited data, limited use, limited power
- Strong privacy protections by design
- Users can easily switch

**Recommendation**: Publish "Social Responsibility Charter" outlining long-term commitment to user privacy and non-exploitation

---

## Part 3: Compliance & Legal Framework

### GDPR Compliance

**Applicable**: If users in EU or app accessible from EU

**Key Requirements**:
1. **Lawful Basis**: Consent or contract for booking
2. **Purpose Limitation**: Data used only for booking, not secondary uses
3. **Data Minimization**: Collect only essentials
4. **Retention**: Delete after purpose complete or user requests
5. **User Rights**: Access, correction, deletion, portability, object
6. **Privacy Notices**: Clear before collection
7. **Data Processors**: Agreements with courts, payment provider
8. **Breach Notification**: Notify within 72 hours
9. **Impact Assessment**: Required for medium/high-risk processing
10. **Accountability**: Document compliance measures

**CourtBook Compliance Status**:
- [x] Consent for non-essential data
- [x] Purpose disclosure
- [x] Data minimization
- [x] User rights (access, delete, export)
- [x] Privacy notice in UI
- [ ] Formal Data Processing Agreements
- [ ] Breach notification procedure documented
- [ ] Formal Privacy Impact Assessment

**Action Items**:
- [ ] Draft Data Processing Agreements with courts
- [ ] Document breach notification procedure
- [ ] Conduct formal PIA
- [ ] Add Data Protection Officer contact to privacy policy
- [ ] Implement breach notification timers (72-hour alert system)

### CCPA Compliance (California)

**Applicable**: If users in California

**Key Requirements**:
1. **Notice**: Disclosure at/before collection
2. **Right to Know**: Users can request what data is collected
3. **Right to Delete**: Users can request deletion
4. **Right to Opt-Out**: Users can opt-out of data sales
5. **Non-Discrimination**: Can't penalize users for exercising rights
6. **Verification**: Reasonable verification of user identity

**CourtBook Compliance Status**:
- [x] Privacy notice in UI
- [x] "Download your data" (know)
- [x] "Delete account" (delete)
- [x] Opt-out toggles (opt-out of analytics, marketing)
- [x] No price discrimination
- [x] User identity required for deletion

**Action Items**:
- [ ] Add "CCPA Notice at Collection" to signup
- [ ] Implement identity verification for data requests
- [ ] Document opt-out process and timeliness

---

## Part 4: Privacy & Ethics Evaluation Rubric

### Self-Assessment Scoring

Rate each principle on 0-5 scale:
- **5** = Fully implemented, exceeds requirements
- **4** = Implemented, meets requirements
- **3** = Partially implemented, some gaps
- **2** = Minimal implementation, significant gaps
- **1** = Not implemented, critical failures
- **0** = Harmful or violates principle

| Principle | Score | Status | Notes |
|-----------|-------|--------|-------|
| Proactive Privacy | 4 | Good | Privacy by design well-implemented; missing formal PIA |
| Privacy Default | 5 | Excellent | All defaults favor privacy; no pre-checked boxes |
| Embedded Privacy | 4 | Good | Privacy in UX strong; needs technical specs |
| Full Functionality | 4 | Good | Privacy and features both work; good trade-off analysis |
| Lifecycle Security | 4 | Good | Strong across lifecycle; missing formal security specs |
| User Rights | 5 | Excellent | All major rights available; easy to use |
| Transparency | 5 | Excellent | Clear communication throughout; no dark patterns |
| User Agency | 5 | Excellent | Users empowered; easy to control data |
| Fairness | 5 | Excellent | No exploitation; equal treatment regardless of data |
| Vulnerable Groups | 4 | Good | Accessibility considered; multilingual support TBD |
| Accountability | 3 | Needs Work | Design good; legal/procedural accountability missing |
| Social Responsibility | 5 | Excellent | Low societal risks; good long-term outlook |
| GDPR Compliance | 3 | Needs Work | Design compliant; contracts & procedures needed |
| CCPA Compliance | 4 | Good | Mostly compliant; identity verification needed |

**Overall Privacy & Ethics Score: 4.2/5 (Very Good)**

**Strengths**:
- User rights fully implemented
- Strong transparency and agency
- No exploitative practices
- Privacy-first defaults
- Accessibility considered

**Gaps**:
- Formal legal/compliance structure needed
- Formal Privacy Impact Assessment needed
- Data Processing Agreements needed
- Breach notification procedure needed
- Identity verification for CCPA

---

## Recommendations & Action Plan

### Immediate (Before Launch)
1. [ ] Conduct formal Privacy Impact Assessment
2. [ ] Draft Data Processing Agreements with courts and payment processor
3. [ ] Document breach notification procedure and 72-hour alert system
4. [ ] Add privacy policy with legal/compliance section
5. [ ] Implement identity verification for data deletion requests
6. [ ] Accessibility audit (WCAG AA)

### Short-term (First 3 months)
7. [ ] Implement breach notification system
8. [ ] Set up privacy complaint handling process
9. [ ] Create Data Protection Officer role/contact
10. [ ] Schedule quarterly privacy reviews
11. [ ] Document data inventory (what's collected, used, retained)

### Medium-term (6-12 months)
12. [ ] Schedule first independent privacy audit
13. [ ] Publish annual privacy report
14. [ ] Expand to multilingual privacy information
15. [ ] Add voice-based consent for accessibility
16. [ ] Implement advanced analytics consent tracking

### Long-term (Beyond 1 year)
17. [ ] Pursue privacy certifications (e.g., TRUSTe, ISO 27001)
18. [ ] Publish Social Responsibility Charter
19. [ ] Establish privacy advisory board
20. [ ] Continuous improvement through user feedback

---

## Conclusion

CourtBook demonstrates **strong privacy and ethical design** through implementation of Privacy by Design principles, transparent communication, and robust user rights. The prototype successfully balances functionality with privacy, never forcing users to choose between usability and personal data protection.

**Key Success Factors**:
- Minimal data collection (only essentials)
- Explicit user consent (never pre-checked)
- Clear transparency (badges, tooltips, explanations)
- Full user control (access, delete, export, customize)
- No exploitation (no data selling, no discrimination)
- Accessible to all (WCAG AA, plain language)

**Critical Path for Launch**:
The design is ready for user testing. Before full launch, complete the legal/compliance framework (PIAs, agreements, policies) to ensure privacy commitments are enforceable and accountable.

**Stakeholder Responsibilities**:
- **Design team**: Maintain privacy-first principles during implementation
- **Legal team**: Establish formal compliance structure, contracts, policies
- **Operations team**: Implement data governance, deletion procedures, audit logging
- **Leadership**: Commit to privacy-first culture; publish transparency reports
