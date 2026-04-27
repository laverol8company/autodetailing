# Project Execution Rules — General Cars Detailing Platform

> These rules apply to every future task: redesigns, bug fixes, features, visual changes, UX changes, and deployments.

---

## 1. Do Exactly What Is Requested
- Implement the specific task — do not reinterpret it as a broader redesign
- Do not add unrelated features
- Do not remove working functionality
- "Add floating lines" → add lines; "Fix scroll" → fix scroll only

## 2. Preserve the Business Purpose
The platform is a **Premium Booking & Lead System**. Every change must support:

```
Visitor → Smart Quote / Service → Estimate → Booking → Owner Lead Summary
```

Improve: qualified leads · faster booking · clearer service selection · trust · mobile UX · conversion

## 3. Preserve Core Logic (Unless Explicitly Removed)
- Route structure
- Smart Quote flow
- `quoteEstimate`, `leadScoring`, `suggestedReply`
- Booking flow & WhatsApp prefilled CTA
- `OwnerLeadSummary` / System Preview
- Mobile nav (single close icon)
- Scroll-to-top and form behavior

## 4. Respect the Visual Direction
**Black-and-white luxury automotive studio.**

✅ Use: deep black · graphite · pure white · platinum gray · subtle ambient accents (only where requested)  
❌ Avoid: colorful · playful · SaaS-like · neon · cluttered · over-animated

## 5. Requested Visual Effects Must Be Visible
If a task requests an effect (ambient lines, glow, sweep), it must be noticeable within seconds.  
Balance: **visible, premium, controlled, tasteful**. Not invisible. Not overloaded.

## 6. Maintain CTA Hierarchy

| Level | Examples |
|---|---|
| Primary (strongest) | Get a Quote · Start Smart Quote · Request Appointment |
| Secondary | Explore Services · View Proof · Continue on WhatsApp |
| Tertiary (subtle) | WhatsApp link · Learn More · Contact |

Do not make all buttons equally loud. Only primary CTAs get glow / magnetic treatment.

## 7. Keep Homepage Short and Route-Based
Home must stay short: Hero → Path → Services Preview → Proof Preview → Quote Preview → Final CTA.  
Long flows (quiz, booking form, dashboard) live on dedicated routes.

## 8. Mobile-First Is Mandatory
Every layout/nav change must be verified on mobile:
- No overlapping elements
- No broken sticky CTAs
- Readable text
- Single close icon in menu
- Smart Quote easy to complete on mobile

## 9. Scroll & Focus Behavior Must Be Clean
- New route → opens at top (`ScrollToTop`)
- Smart Quote step change → card stays in view (`scrollIntoView`)
- No manual upward swiping required after navigation

## 10. Performance Matters
✅ Prefer: CSS transform/opacity animations · lazy loading · lightweight overlays · `prefers-reduced-motion`  
❌ Avoid: heavy GIFs · huge videos · unnecessary JS animation libs · layout shifts

## 11. Accessibility & Quality
- Good contrast · readable text · visible focus states
- `aria-label` on icon-only buttons and social icons
- No broken links · no raw keys · no technical errors shown to users

## 12. Bug Fix Format
```
Problem:
Expected behavior:
Files changed:
Verification:
Result:
```
Fix only the bug. Do not redesign. Run build after every fix.

## 13. Deployment Is Required for Every Task
1. `npm run build`
2. `npm run lint`
3. `git add . && git commit -m "..." && git push origin main`
4. `vercel --prod --yes`
5. Confirm Vercel production URL is live

A task is **not complete** until it is deployed and verified at the production URL.

## 14. Final Report Format (Every Task)
- Files changed
- What was changed / what was preserved
- Build · Lint · TSC result
- Deployment status
- Remaining issues (if any)
- How to verify live

For visual changes: where the effect appears · how visible · how implemented · mobile check result.

## 15. Ask Only If Truly Blocked
Default: choose the interpretation that best matches the premium B&W luxury direction + business/booking purpose + simple maintainable implementation.  
Only ask if implementation would be **unsafe or impossible** without clarification.

---

## Master Principle

> This project is: **A premium black-and-white automotive detailing platform + an interactive booking and qualification system + a business tool that helps the owner capture better leads.**  
> Every change must improve: visual quality · user clarity · lead conversion · owner usefulness · mobile experience · performance.
