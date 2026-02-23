# Meeting Room Booker — Drift Detection + Unit Tests

> **Branch:** `skill/drift-and-tests`
> **Skills:** Q2 · T3 · W2
> **Audience:** Eng · PM

---

## For the Facilitator

### Session Overview

| | |
|---|---|
| **Kata** | 6: Meeting Room Booker |
| **Session** | Drift Detection + Unit Tests |
| **Skills** | Q2 · T3 · W2 |
| **Duration** | 2 hours (facilitated) + self-directed extension |
| **Slide Deck** | https://gamma.app/docs/wptemimmh55o6mx |
| **Miro Board** | https://miro.com/app/board/uXjVG8QBtVg%3D/ |

### Session Timing

| Time | Activity |
|------|----------|
| 0:00–0:15 | Concept framing — open the Gamma slide deck and walk through each slide |
| 0:15–0:30 | Orient to Miro board + this starting state |
| 0:30–1:05 | Step 1 exercise (Miro — Context frame) |
| 1:05–1:25 | Step 2 exercise (Miro — Exercise frame) |
| 1:25–1:30 | Step 3 wrap-up |
| 1:30–1:50 | Debrief — use Miro Debrief frame prompts |
| 1:50–2:00 | Extension brief — point to Extension Zone in Miro |

### What to Watch For

- Tests that test implementation rather than behaviour — "how" vs "what"
- Drift classified as "intentional" without evidence — who made the decision and when?
- Test names that don't read like requirements: "test1" or "shouldWork" are failures

### Facilitation Tips

- For each drift item: "Was there a decision, or did it just happen?" — this surfaces process gaps
- For each test: read the name aloud. Would a PM understand what it's testing?
- At debrief: show the original spec and the delivered code side by side. Count the deviations.

### Extension / Coaching Office Hours

Participants can continue extension work independently and bring it to **Coaching Office Hours**.
At Office Hours, focus on: what decision did they make, why, and what would they change?

---

## For Participants (Developer · PM · UX)

### Getting Started

```bash
git clone https://github.com/DyingPoets/kata-room-booker
git checkout skill/drift-and-tests
```

Open the Miro board and the Gamma slide deck — have both visible during the session.

- **Slides:** https://gamma.app/docs/wptemimmh55o6mx
- **Miro Board:** https://miro.com/app/board/uXjVG8QBtVg%3D/

### What You'll Practice

- Q2
- T3
- W2

### Your Starting State

You have:
- `spec/room-booker-spec.md` — the original requirements
- `src/` — the delivered code (with drift baked in)

Your goal: find the drift, classify it, and write tests that encode the correct behaviour.

### Step by Step

**Step 1:** Compare the spec to the code. List every deviation. Classify: intentional change, scope creep, or bug.

**Step 2:** Write unit tests for the booking logic covering: happy path, double-booking, room capacity, time zone edge case.

**Step 3:** For each test: verify it has one assertion, a requirement-style name, and a meaningful failure message.

### What Good Looks Like

A drift report where every item has a clear owner and decision trail (or an honest "no decision made"). Tests that read like a specification.

See the `solutions/` directory for reference examples — but try the exercise first.

### Extension Work

- Write a 3-point pre-PR checklist that would have prevented the drift you found
- Add an integration test for the full booking flow: search → select → book → confirmation
- Write a "scope change protocol": how should mid-sprint change requests be handled?

Bring your extension work to **Coaching Office Hours**. You'll get 15 minutes of focused feedback.

---

Part of the [PDLC Training Katas](https://github.com/DyingPoets) series.
