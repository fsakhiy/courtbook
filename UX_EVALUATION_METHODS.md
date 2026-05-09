# CourtBook UX Evaluation Methods - Complete Frameworks

## EVALUATION METHOD 1: HEURISTIC EVALUATION (Usability + Privacy)

### Overview
Systematic inspection by UX experts against established heuristics. This method combines Nielsen's 10 Usability Heuristics with Privacy-Specific Heuristics tailored to CourtBook.

### Participants
- 3-5 UX professionals with heuristic evaluation experience
- Ideally 1-2 with privacy/security background
- Time commitment: 2-3 hours per evaluator

### Evaluation Criteria (20 Total)

#### Category A: General Usability (Nielsen's 10 Heuristics)

| # | Heuristic | CourtBook Implementation | Success Indicators |
|---|-----------|------------------------|-------------------|
| 1 | System Visibility | Privacy badges on court cards, data collection disclosure before booking, retention timelines visible | Users see what data is collected without digging; clear "what" and "why" |
| 2 | System-User Match | Privacy terminology matches user mental models; "minimal data," "why we ask," "data deleted after X months" | No technical jargon; plain English explanations; users nod in recognition |
| 3 | User Control & Freedom | Easy undo of consent changes (7-day window); "Change my mind" paths in booking flow; opt-out toggles | Users feel they can change decisions without penalty; clear undo options |
| 4 | Error Prevention | Consent checkboxes required before booking; confirmation before account deletion; validation on mandatory fields | Users prevented from accidental data sharing; confirmations on destructive actions |
| 5 | Error Recovery | 30-day grace period before account deletion; "Undo recent changes" link; contact support for data recovery | Users can recover from mistakes; sufficient recovery time |
| 6 | Flexibility & Shortcuts | Minimal Data Mode toggle; keyboard navigation support; saved preferences; quick access to privacy settings | Power users can adjust defaults; accessibility support; consistent navigation |
| 7 | Aesthetic & Minimalism | Clean layout focused on essentials; privacy info contextual (tooltips) not cluttered; data transparency section scannable | Page not overwhelming; important info prominent; visual hierarchy clear |
| 8 | Help & Documentation | "Why?" tooltips on every mandatory field; expandable privacy panels; links to full policy; glossary of terms | Users find answers without leaving context; plain language help |
| 9 | Task Support | Booking flow in clear steps; privacy check before confirmation; summary shows collected data; easy modification | Users know where they are; can review before committing; simple recovery |
| 10 | Consistency | Consistent badge styling, consent patterns, "Why?" tooltips, layout structure; same flows across screens | Users learn pattern once, apply everywhere; predictable UI |

#### Category B: Privacy-Specific Heuristics

| # | Privacy Heuristic | CourtBook Implementation | Success Indicators |
|---|-------------------|------------------------|-------------------|
| 11 | Data Minimization | Forms ask only for essentials (name, email, phone); "Minimal Data Mode" available; non-essential marked optional | Court collects only what's needed; users surprised by simplicity not complexity |
| 12 | Consent Clarity | Checkboxes never pre-selected; one use per checkbox; descriptions in plain English; purpose immediately clear | Users know exactly what they're consenting to; 100% comprehension |
| 13 | Purpose Limitation | "What we do with it" shown next to every data point; court staff sharing disclosed; no secondary uses mentioned | Users confident data won't be used beyond stated purpose |
| 14 | Transparency | "This court collects:" section shows all data types; retention timeline visible; sharing with staff disclosed | No hidden data collection; users know full picture |
| 15 | Retention Limits | "Deleted after X months" shown on every booking; slider to adjust retention; default conservative (2 years) | Users know when data disappears; can customize comfort level |
| 16 | User Rights Access | "Download Your Data" button; export formats clear (JSON/PDF); retrieval process simple; data format readable | Users can get copy; verify accuracy; take elsewhere if desired |
| 17 | Deletion & Portability | "Delete Account" easy to find; 30-day grace period explained; booking history deletable; export before deletion | Users not locked in; can leave without data trail |
| 18 | Data Sharing Disclosure | Clear list of who has access (court staff, payment processor); no third-party sharing without consent; vendor names | Users know exactly who sees their booking |
| 19 | Security & Encryption | Notes about payment processing; session timeout mentioned; data encryption referenced; security badges visible | Users feel protected; trust in data safety |
| 20 | Accessibility | WCAG AA compliant; keyboard navigation; color not sole conveyor; icons have labels; screen reader support | All users can access privacy controls; information not in images only |

### Heuristic Evaluation Form Template

```
EVALUATOR: _________________ | DATE: __________ | DURATION: __________

INSTRUCTION: For each heuristic below, rate the prototype on a scale:
5 = Perfect implementation
4 = Minor issues
3 = Moderate issues  
2 = Major issues
1 = Critical failure

────────────────────────────────────────────────────────────────

USABILITY HEURISTICS:

[ ] H1: System Visibility | Rating: ___ 
Comments: 
- Can users see what data is collected at a glance?
- Is the data collection status/progress visible?
Issues found: _______________________________________________

[ ] H2: System-User Match | Rating: ___
Comments:
- Does terminology match user expectations?
- Is technical jargon minimized?
Issues found: _______________________________________________

[Continue for H3-H10...]

────────────────────────────────────────────────────────────────

PRIVACY HEURISTICS:

[ ] P11: Data Minimization | Rating: ___
Comments:
- Are only essential fields required?
- Can users see what's collected vs. optional?
Issues found: _______________________________________________

[Continue for P12-P20...]

────────────────────────────────────────────────────────────────

OVERALL ASSESSMENT:

Critical Issues (blocks functionality): _______
Major Issues (significant impact): ___________
Minor Issues (should fix): ___________________
Suggestions: _________________________________

Top 3 Priority Fixes:
1. ___________________________________________
2. ___________________________________________
3. ___________________________________________
```

### Severity Classification

**CRITICAL** (Fix immediately)
- Privacy consent checkbox cannot be unchecked
- Data collection not shown before booking
- Account deletion not possible
- No way to access privacy settings

**MAJOR** (Fix before user testing)
- Data retention period unclear
- Consent checkboxes pre-selected
- "Why?" explanations missing on key fields
- Sharing with court staff not disclosed
- Mobile layout broken

**MINOR** (Fix during refinement)
- Inconsistent spacing in privacy section
- Tooltip trigger area too small
- Button colors slightly off spec
- Inconsistent terminology (minor)

**COSMETIC** (Nice to have)
- Font weight inconsistency
- Icon styling minor variations
- Spacing off by 2-4px
- Redundant labels

### Data Collection & Analysis

**Findings Template**:
```
HEURISTIC: [Number & Name]
SEVERITY: [Critical/Major/Minor/Cosmetic]

ISSUE DESCRIPTION:
[What is the problem? Where does it occur?]

EVIDENCE:
[What did evaluators observe? Screenshot references?]

IMPACT:
[How does this affect users? Privacy risk? Usability?]

FREQUENCY:
[How many evaluators found this? Is it consistent?]

RECOMMENDED FIX:
[How should the design change?]

PRIORITY RANK:
[1-5, with 1 = most critical]
```

### Analysis & Synthesis

After all 3-5 evaluators complete:

1. **Compile all issues** by heuristic
2. **Calculate average severity** across evaluators
3. **Identify consensus issues** (found by multiple evaluators)
4. **Categorize by type**:
   - Privacy UX issues (primary focus)
   - Accessibility issues
   - Interaction design issues
   - Visual design issues
5. **Create prioritized fix list** (top 10)
6. **Estimate effort** for each fix
7. **Plan refinement round**

---

## EVALUATION METHOD 2: MODERATED USER TESTING

### Overview
Direct observation of real users attempting booking tasks, with focus on privacy understanding and confidence. Moderated sessions (researcher present) allow for probing questions.

### Research Goals
1. Can users complete booking without confusion?
2. Do users understand what data is collected?
3. Do users feel confident their data is protected?
4. Are privacy controls discoverable & understandable?
5. Where do users get stuck or hesitate?

### Participant Recruitment

**Participant Profile**:
- **Age Range**: 25-45
- **Badminton Experience**: Active players (book ≥2x/month)
- **Tech Comfort**: Moderate to high (comfortable with booking apps)
- **Diversity**: Mix of backgrounds, income levels, technical ability
- **Sample Size**: 5-8 participants (saturation point for 1-day testing)

**Recruitment Method**:
- Post on badminton club groups
- Social media
- Badminton interest forums
- Incentive: $25-50 gift card

**Screening Questions**:
1. Do you play badminton at least once per month?
2. Have you booked courts online before?
3. How comfortable are you with sharing personal data online? (Scale 1-5)
4. Do you have concerns about data privacy when using apps?

### Testing Environment

**Location**: Usability lab, quiet office, or remote (via Zoom + Figma sharing)

**Setup**:
- Laptop or desktop (not mobile first, but test responsive later)
- Figma prototype with interactive flows
- Audio/video recording (with consent)
- Screen sharing enabled
- Observer notes template visible
- Prototype loaded & ready

**Duration**: 60 minutes per session
- Intro & consent: 5 min
- Tasks: 35-40 min
- Debrief questions: 15-20 min

### Testing Protocol & Task Script

#### Introduction (5 min)

**Moderator Script**:
> "Thanks for joining. Today, we're improving a badminton court booking app. You'll do some realistic tasks while I observe. I'll be quiet mostly—I want to see how you naturally interact. There are no right or wrong answers. If you get stuck, that helps us learn. Ready?"

**Consent**:
- Verbal recording consent obtained
- Privacy briefing: "We're studying how users understand data privacy, so we'll ask about that"

#### Task 1: Browse & Understand Privacy (5 min)

**Setup**: User sees home screen with privacy welcome

**Task**: 
> "Take a look at the first screen. Tell me: What does this app promise about my data?"

**Observation Notes**:
- Does user read the privacy section?
- How long do they spend?
- Do they click "Learn About Our Privacy"?
- Do they seem reassured?
- Facial expressions/hesitations?

**Follow-up Questions** (if unclear):
- "What's your main concern about sharing data with a booking app?"
- "What would make you trust this app more?"

#### Task 2: Create Account with Consent (5 min)

**Setup**: User at sign-up screen

**Task**:
> "Create an account. Sign up with a fake name and email. Notice what the app asks for and why."

**Observation Notes**:
- Which form fields do they fill first?
- Do they read the consent section?
- Do they check boxes? Do they read descriptions?
- Do they hover on tooltips?
- Hesitations around data sharing?

**Follow-up**:
- "Why did you check/uncheck that consent box?"
- "What does 'analytics consent' mean to you?"

#### Task 3: Find & Book a Court (8 min)

**Setup**: User at find courts screen

**Task**:
> "You want to book a court for this Saturday at 7 PM. Find one and start the booking process. Tell me what you notice about the courts' data collection."

**Observation Notes**:
- Do they look at privacy badges?
- Do they use filters?
- Which court do they pick? Why?
- Do they read the "data this court collects" section?
- How long do they spend on court details?
- Do they notice the data transparency section?

**Follow-up**:
- "How do you feel about this court having access to [collected data]?"
- "Did the 'minimal data' badge influence your choice?"

#### Task 4: Review Booking & Check Privacy (6 min)

**Setup**: User at booking review screen

**Task**:
> "Review what you're about to confirm. Make sure you understand what data this court will have. Tell me when you're ready to click confirm."

**Observation Notes**:
- Do they read the "Before You Confirm" section?
- Do they expand the data breakdown?
- Do they notice retention timeline?
- Any hesitations before clicking?
- Do they change anything?

**Follow-up**:
- "Can you tell me: What data will the court have after booking?"
- "How long will they keep it?"
- "Is there any data they're collecting you wish they wouldn't?"

#### Task 5: Change Privacy Settings (5 min)

**Setup**: User at privacy settings screen

**Task**:
> "I want to stop getting marketing emails. Can you turn that off?"

**Observation Notes**:
- Can they find settings easily?
- Do they understand the toggle options?
- Do they read descriptions before changing?
- Any uncertainty about what changing will do?

**Follow-up**:
- "What happens when you turn off marketing emails?"
- "Do you understand how the app will use the data you shared?"

#### Task 6: Download & Delete (5 min)

**Setup**: User in privacy settings

**Task**:
> "Download a copy of your booking data. Then, find where you'd delete your account."

**Observation Notes**:
- Can they find these options?
- Do they understand what will happen?
- Read the 30-day grace period warning?
- Confidence in data export format?

**Follow-up**:
- "Would you actually delete your account? Why or why not?"
- "What would make you more confident about data deletion?"

### Privacy Comprehension Quiz (After Tasks)

Ask these questions without showing the app:

1. **Data Collection**: "What personal data does the court collect from your booking?"
   - Correct answers: Name, phone, email, booking time
   - Scoring: 1 point per correctly recalled item

2. **Data Usage**: "What does the court do with your phone number?"
   - Correct answer: Court staff use it for check-in; you might get reminders
   - Scoring: 0 = wrong, 1 = partial, 2 = complete

3. **Retention**: "How long does the court keep your booking data?"
   - Correct answer: 2 years (or whatever was shown)
   - Scoring: 0 = wrong/don't know, 1 = approximately correct, 2 = exact

4. **Sharing**: "Who else can see your booking information?"
   - Correct answer: Court staff and payment processor (no third parties)
   - Scoring: 0 = doesn't know, 1 = partial knowledge, 2 = complete

5. **Consent**: "What would happen if you unchecked the 'analytics' consent box?"
   - Correct answer: App won't track your booking patterns for improving availability
   - Scoring: 0 = wrong, 1 = vague, 2 = clear understanding

**Privacy Understanding Score**: Quiz total / 10 points
- 8-10: Excellent understanding
- 6-7: Good understanding
- 4-5: Moderate understanding
- 0-3: Poor understanding (design needs work)

**Target**: ≥80% of participants score 6+ (good/excellent)

### Confidence & Comfort Ratings (Post-Task)

After completing booking, ask on scale 1-5:

1. "I understand what data this app collects." | 1 2 3 4 5
2. "I feel confident my data will be protected." | 1 2 3 4 5
3. "I would feel comfortable booking here." | 1 2 3 4 5
4. "The privacy controls are easy to use." | 1 2 3 4 5
5. "I trust this app with my personal data." | 1 2 3 4 5

**Target**: Average ≥4.0 on all questions

### Debrief Questions (10-15 min)

1. "What's one thing you liked about the privacy experience?"
2. "What's one thing you'd change?"
3. "Did anything confuse you?"
4. "What data, if any, made you hesitant?"
5. "Would you book a court through this app? Why?"
6. "How does this compare to other booking apps you've used?"
7. "What would make you more confident about your privacy?"

### Observer Notes Template

```
PARTICIPANT ID: ______ | DATE: _________ | DURATION: 60 min

TASK COMPLETION:
Task 1 (Browse): [Complete/Incomplete] Time: ___ Notes: _______
Task 2 (Sign up): [Complete/Incomplete] Time: ___ Notes: _______
Task 3 (Find & Book): [Complete/Incomplete] Time: ___ Notes: _______
Task 4 (Review): [Complete/Incomplete] Time: ___ Notes: _______
Task 5 (Settings): [Complete/Incomplete] Time: ___ Notes: _______
Task 6 (Download/Delete): [Complete/Incomplete] Time: ___ Notes: _______

OVERALL BOOKING COMPLETION: [Yes/No] Time: _____ min

PRIVACY COMPREHENSION:
Data Collection Q: Score _/2 | Understanding: [Poor/Moderate/Good/Excellent]
Data Usage Q: Score _/2 | Understanding: [Poor/Moderate/Good/Excellent]
Retention Q: Score _/2 | Understanding: [Poor/Moderate/Good/Excellent]
Sharing Q: Score _/2 | Understanding: [Poor/Moderate/Good/Excellent]
Consent Q: Score _/2 | Understanding: [Poor/Moderate/Good/Excellent]

TOTAL PRIVACY SCORE: ___/10

CONFIDENCE RATINGS:
Data Collection Understanding: ___/5
Data Protection Confidence: ___/5
Booking Comfort: ___/5
Privacy Controls Ease: ___/5
Privacy Trust: ___/5
Average: ___/5

KEY OBSERVATIONS:
- First action on home screen: ________________
- Privacy badge noticed? [Yes/No]
- Consent boxes fully read? [Yes/No/Partially]
- Hesitations observed: [Where/Why] __________
- Unexpected interactions: ____________________
- Emotional state: [Confident/Uncertain/Frustrated] _________

CRITICAL MOMENTS:
[At what point did user struggle, hesitate, or ask for help?]
1. ________________________________________________
2. ________________________________________________

INSIGHTS:
- What surprised them? _________________________
- What confused them? __________________________
- What would they change? _______________________

QUOTE:
[One meaningful thing they said]
"_________________________________________________"
```

### Analysis & Synthesis

**After all 5-8 sessions**:

1. **Task Completion Rate** (target ≥80%):
   - Count how many users completed each task
   - Note any drop-off points

2. **Time Metrics**:
   - Average time to complete booking (target <3 min from "browse" to "confirm")
   - Longest/shortest times and why
   - Time spent on privacy sections

3. **Privacy Comprehension**:
   - Average quiz score (target ≥6/10)
   - Which questions had low scores (design gaps)
   - Confidence scores average (target ≥4/5)

4. **Common Issues** (2+ participants):
   - Confusion about data retention
   - Missed privacy badges
   - Unclear consent checkboxes
   - Settings difficult to find
   - Insufficient data collection transparency

5. **Quotes & Insights**:
   - Positive feedback (what works well)
   - Pain points (what needs fixing)
   - Surprises (unexpected behaviors)
   - Feature requests (nice-to-have)

6. **Affinity Mapping**:
   - Group related issues/insights
   - Identify themes
   - Prioritize by frequency & impact

---

## SYNTHESIS: Combining Both Methods

### Data Consolidation

Create matrix comparing findings:
```
ISSUE | Heuristic Eval? | User Testing? | Frequency | Severity | Priority
------|---|---|---|---|---
Consent unclear | Yes (3/5 evaluators) | Yes (4/8 users) | High | Major | 1
Data retention vague | Yes (4/5) | Yes (5/8) | Very High | Critical | 1
...
```

### Prioritization Framework

Rank fixes by: Impact × Frequency × Severity

**High Priority** (Fix immediately):
- Critical severity OR
- Found by both methods AND
- Affects privacy understanding

**Medium Priority** (Fix in next iteration):
- Major severity AND
- Found by one or both methods

**Low Priority** (Nice to have):
- Minor/cosmetic issues
- Aesthetic improvements

### Success Metrics Summary

Before refinement round, establish targets:

- [ ] 85%+ task completion rate
- [ ] Average privacy quiz score: 6.5+/10
- [ ] Average confidence rating: 4.5+/5
- [ ] 0 critical privacy UX issues
- [ ] <5 major issues remaining
- [ ] WCAG AA accessibility pass
- [ ] Mobile responsiveness verified

---

## Documentation Outputs

After full evaluation:

1. **Heuristic Evaluation Report** (5-10 pages)
   - Findings summary
   - Issues by severity
   - Top 10 recommendations

2. **User Testing Report** (10-15 pages)
   - Participant summaries
   - Task analysis
   - Metrics & charts
   - Quotes & insights
   - Recommendations

3. **Iteration Roadmap** (1-2 pages)
   - Top fixes by priority
   - Effort estimates
   - Refinement plan

4. **Video Highlights** (3-5 min)
   - Key moments from sessions
   - User struggles on privacy tasks
   - Positive interactions
