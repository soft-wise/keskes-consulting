# Client Feedback Fixes Plan

## Summary
This plan addresses all issues reported by the client regarding language button bugs, footer changes, button inconsistencies, navigation issues, and CTA section improvements.

---

## Issue 1: Language Button Bug
**Problem**: When changing language to EN (DE shows above), clicking "Start your Transformation" from case studies page shoots to landing page instead of staying on the same page. The language button changes to "EN" which is confusing.

**Root Cause**:
- In [`app/[lang]/case-studies/[slug]/page.tsx`](app/[lang]/case-studies/[slug]/page.tsx:23), the "Start your transformation" button uses `href="/contact"` instead of `href="/${lang}/contact"`
- The language switcher in [`Header.tsx`](components/layout/Header.tsx:31-74) shows the switched locale (what you can switch TO), not the current locale

**Solution**:
1. Fix the "Start your transformation" button in case study detail pages to use the correct language prefix
2. Update the language switcher to show the current locale with an indicator of what switching would do
3. Ensure all internal links preserve the language parameter

**Files to Modify**:
- `app/[lang]/case-studies/[slug]/page.tsx`
- `components/layout/Header.tsx`

---

## Issue 2: Services Pages Markdown Support
**Problem**: Services pages need to support markdown content with H1, H2, H3 headings.

**Root Cause**: Current [`ServiceLayout.tsx`](components/layout/ServiceLayout.tsx) doesn't support markdown rendering.

**Solution**:
1. Add markdown rendering capability to service detail pages
2. Update [`ServiceLayout.tsx`](components/layout/ServiceLayout.tsx) to render markdown content
3. Add markdown content to service dictionaries

**Files to Modify**:
- `components/layout/ServiceLayout.tsx`
- `dictionaries/en.json`
- `dictionaries/de.json`

---

## Issue 3: Footer Changes
**Problem**: 
- Remove "Contact us" button (already below "Company" column)
- Keep only LinkedIn, remove Twitter and GitHub

**Root Cause**: [`Footer.tsx`](components/layout/Footer.tsx:44-53) has both a "Contact Us" button and all three social icons.

**Solution**:
1. Remove the "Contact Us" button from the first column
2. Remove Twitter and GitHub social icons
3. Keep only LinkedIn icon

**Files to Modify**:
- `components/layout/Footer.tsx`

---

## Issue 4: Landing Page Button Inconsistency
**Problem**: Buttons below "What we do" section have different shape than buttons below "Real results from real work". Client wants the shape and highlight behavior from case studies page buttons.

**Root Cause**: 
- [`services-section.tsx`](components/sections/services-section.tsx:40-44) uses a text link with underline
- [`hero-section.tsx`](components/sections/hero-section.tsx:27-34) uses rounded-full buttons
- [`case-studies-section.tsx`](components/sections/case-studies-section.tsx:32-36) uses a text link

**Solution**:
1. Update the "View all services" button in [`services-section.tsx`](components/sections/services-section.tsx) to use rounded-full style matching hero section
2. Update the "View all case studies" button in [`case-studies-section.tsx`](components/sections/case-studies-section.tsx) to use rounded-full style matching hero section

**Files to Modify**:
- `components/sections/services-section.tsx`
- `components/sections/case-studies-section.tsx`

---

## Issue 5: "Back to Case Studies" Navigation Bug
**Problem**: "Back to Case Studies" button on case study detail page takes to homepage instead of case studies page.

**Root Cause**: [`app/[lang]/case-studies/[slug]/page.tsx`](app/[lang]/case-studies/[slug]/page.tsx:12) uses `href="/case-studies"` instead of `href="/${lang}/case-studies"`

**Solution**:
1. Fix the "Back to Case Studies" link to use the correct language prefix
2. Ensure the component has access to the `lang` parameter

**Files to Modify**:
- `app/[lang]/case-studies/[slug]/page.tsx`

---

## Issue 6: Keywords Section for Case Studies
**Problem**: Add keywords section to individual case study pages like in the case studies listing page.

**Root Cause**: Case study detail pages don't display keywords/tags.

**Solution**:
1. Add keywords/tags data to case study dictionaries
2. Update [`app/[lang]/case-studies/[slug]/page.tsx`](app/[lang]/case-studies/[slug]/page.tsx) to display keywords
3. Style the keywords section to match the design (similar to metrics badges)

**Files to Modify**:
- `app/[lang]/case-studies/[slug]/page.tsx`
- `dictionaries/en.json`
- `dictionaries/de.json`

---

## Issue 7: CTA Section Improvements
**Problem**: 
- Too much vertical whitespace, make it flatter
- Color is same as lower margin, gets mixed up
- Should appear on all pages except contact page
- Remove "Start your transformation" buttons from individual case studies/services pages

**Root Cause**:
- [`CTA-section.tsx`](components/sections/CTA-section.tsx:9) uses `py-24` (large vertical padding)
- Both CTA section and Footer use `bg-burgundy-50` color
- CTA section is only on landing page
- Individual case studies and services pages have their own CTA buttons

**Solution**:
1. Reduce vertical padding in CTA section from `py-24` to `py-16` or `py-12`
2. Change CTA section background color to distinguish from footer (e.g., `bg-white` or `bg-burgundy-100`)
3. Add CTA section to all pages except contact page:
   - About page
   - Case studies listing page
   - Services listing page
   - Case study detail pages
   - Service detail pages
4. Remove the "Start your transformation" buttons from:
   - [`app/[lang]/case-studies/[slug]/page.tsx`](app/[lang]/case-studies/[slug]/page.tsx:23)
   - [`components/layout/ServiceLayout.tsx`](components/layout/ServiceLayout.tsx:88)

**Files to Modify**:
- `components/sections/CTA-section.tsx`
- `app/[lang]/about/page.tsx`
- `app/[lang]/case-studies/page.tsx`
- `app/[lang]/services/page.tsx`
- `app/[lang]/case-studies/[slug]/page.tsx`
- `components/layout/ServiceLayout.tsx`

---

## Implementation Order

### Phase 1: Critical Navigation & Language Fixes
1. Fix language button bug (Issue 1)
2. Fix "Back to Case Studies" navigation (Issue 5)

### Phase 2: Footer & Button Styling
3. Footer changes (Issue 3)
4. Landing page button consistency (Issue 4)

### Phase 3: Content Improvements
5. Services pages markdown support (Issue 2)
6. Keywords section for case studies (Issue 6)

### Phase 4: CTA Section Overhaul
7. CTA section improvements (Issue 7)

---

## Technical Notes

### Language Preservation Pattern
All internal links should follow this pattern:
```tsx
<Link href={`/${lang}/path`} />
```

### Button Style Standardization
Primary buttons should use:
```tsx
className="bg-burgundy-700 rounded-full text-white px-6 py-3 font-medium hover:bg-burgundy-800 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
```

### CTA Section Color Scheme
To distinguish from footer:
- CTA section: `bg-white` or `bg-burgundy-100`
- Footer: `bg-burgundy-50`

---

## Testing Checklist
- [ ] Language switcher works correctly on all pages
- [ ] All internal links preserve language parameter
- [ ] Footer shows only LinkedIn icon
- [ ] All "View all" buttons have consistent rounded-full style
- [ ] "Back to Case Studies" navigates to correct page
- [ ] Keywords/tags display on case study detail pages
- [ ] CTA section appears on all non-contact pages
- [ ] CTA section has reduced vertical whitespace
- [ ] CTA section color is distinguishable from footer
- [ ] Individual case studies and services pages no longer have standalone CTA buttons
