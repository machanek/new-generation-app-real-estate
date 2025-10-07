# Architectural Decision Records (ADR)
**Last updated:** 2025-10-07

---

## 2025-10-07: Mobile Menu Button Refactoring to Use Button.tsx

**Decision:** Replace custom mobile menu button with Button.tsx component

**Context:**
- Mobile menu button had custom CSS styling (15+ lines of duplicated code)
- Inconsistent styling approach with other buttons
- Need for unified button behavior and styling
- Mobile menu button used for toggling mobile navigation

**Alternatives Considered:**
1. **Keep custom implementation** - Rejected (code duplication, maintenance issues)
2. **Create shared button styles** - Rejected (adds complexity)
3. **Use main Button.tsx component** - ✅ Chosen

**Implementation:**
- Replaced custom button with Button variant="secondary" size="sm"
- Maintained same functionality (onClick, aria-label, aria-expanded)
- Added import for Button component
- Removed 15+ lines of custom CSS

**Benefits:**
- Consistent styling with other buttons
- Automatic focus states and accessibility features
- Better maintainability
- Unified button behavior across the app

**Files Modified:**
- `components/SiteHeader.tsx`

---

## 2025-10-07: Unified Button Padding Sizes Across Components

**Decision:** Standardize all button and interactive element padding to match Button.tsx sizes

**Context:**
- SiteHeader had inconsistent padding: `8px 16px` for nav links, `2` for mobile menu button
- Mobile menu links used `3 0` (vertical only)
- Need for consistent spacing across all interactive elements
- Button.tsx defines standard sizes: sm (`2 3`), md (`3 4`), lg (`4 6`)

**Alternatives Considered:**
1. **Keep custom padding** - Rejected (inconsistent UX)
2. **Create new padding tokens** - Rejected (adds complexity)
3. **Use existing Button.tsx sizes** - ✅ Chosen

**Implementation:**
- Changed nav links from `8px 16px` to `3 4` (md size)
- Changed mobile menu button from `2` to `2 3` (sm size)
- Changed mobile menu links from `3 0` to `3 4` (md size)
- Skip link already used `2 3` (sm size) - kept as is

**Benefits:**
- Consistent spacing across all interactive elements
- Better visual hierarchy
- Easier maintenance
- Matches design system standards

**Files Modified:**
- `components/SiteHeader.tsx`

---

## 2025-10-07: ViewButton Refactoring to Use Button.tsx

**Decision:** Replace ViewButton custom implementation with Button.tsx component

**Context:**
- ViewButton had custom CSS styling (15+ lines of duplicated code)
- Inconsistent styling approach across button components
- Need for unified button behavior and styling
- ViewButton used for table/card view toggle in UnitsSection

**Alternatives Considered:**
1. **Keep custom ViewButton** - Rejected (code duplication, maintenance issues)
2. **Create shared button styles** - Rejected (adds complexity)
3. **Use main Button.tsx component** - ✅ Chosen

**Implementation:**
- Replaced ViewButton custom CSS with Button component
- Used conditional variant: `active ? "primary" : "secondary"`
- Maintained same API for backward compatibility
- Added import for Button component in UnitsSection.tsx

**Benefits:**
- Eliminated 15+ lines of duplicated CSS code
- Consistent styling with main Button component
- Automatic focus states and accessibility features
- Better maintainability
- Unified hover/focus behavior

**Trade-offs:**
- Slight dependency on Button.tsx (acceptable)
- Need to ensure Button.tsx supports all required props

**Status:** ✅ COMPLETED
**Files Modified:**
- components/ui/UnitsSection.tsx (refactored ViewButton)
- docs/architecture/COMPONENTS.md (updated documentation)

---

## 2025-10-07: Button Focus States Implementation for WCAG 2.1 AA Compliance

**Decision:** Add comprehensive focus states to Button.tsx component

**Context:**
- Button component lacked proper focus states for accessibility
- WCAG 2.1 AA compliance requires visible focus indicators
- Keyboard navigation users need clear visual feedback
- Current buttons had no focus styling

**Alternatives Considered:**
1. **No focus states** - Rejected (accessibility violation)
2. **Basic outline only** - Rejected (insufficient contrast)
3. **Comprehensive focus system** - ✅ Chosen

**Implementation:**
- Added `_focus` states for all variants (primary, secondary, ghost)
- Added `_focusVisible` for keyboard-only focus
- Added `_disabled` states with proper opacity and cursor
- Used 2px solid outline with primary color
- Added outlineOffset for better visibility

**Focus State Details:**
- **Primary:** Outline + background color change
- **Secondary:** Outline + background fill
- **Ghost:** Outline + text color change
- **All variants:** 2px solid outline, 2px offset

**Benefits:**
- WCAG 2.1 AA compliance for focus indicators
- Better keyboard navigation experience
- Consistent focus behavior across all button variants
- Clear visual feedback for disabled states

**Trade-offs:**
- Slightly larger CSS bundle (minimal impact)
- Need to maintain focus states across variants

**Status:** ✅ COMPLETED
**Files Modified:**
- components/ui/Button.tsx (added focus and disabled states)
- docs/architecture/COMPONENTS.md (updated documentation)

---

## 2025-10-07: FormButton Refactoring to Eliminate Code Duplication

**Decision:** Refactor FormButton and FormSubmitButton to use main Button.tsx component

**Context:**
- FormButton and FormSubmitButton had identical CSS styles (30+ lines of duplication)
- Inconsistent styling approach across button components
- Maintenance burden of multiple button implementations
- Need for unified button behavior and styling

**Alternatives Considered:**
1. **Keep separate implementations** - Rejected (code duplication, maintenance issues)
2. **Create shared button styles** - Rejected (adds complexity)
3. **Use main Button.tsx component** - ✅ Chosen

**Implementation:**
- Replaced FormButton with Button variant="primary" size="md"
- Replaced FormSubmitButton with Button type="submit" variant="primary" size="md"
- Maintained same API for backward compatibility
- Added import for Button component in Form.tsx

**Benefits:**
- Eliminated 30+ lines of duplicated CSS code
- Consistent styling across all buttons
- Unified hover/focus states
- Better maintainability
- Single source of truth for button styles

**Trade-offs:**
- Slight dependency on Button.tsx (acceptable)
- Need to ensure Button.tsx supports all required props

**Status:** ✅ COMPLETED
**Files Modified:**
- components/ui/Form.tsx (refactored FormButton and FormSubmitButton)
- docs/architecture/COMPONENTS.md (updated documentation)

---

## 2025-10-07: Complete SiteHeader and Form Components Migration to Panda CSS

**Decision:** Migrate SiteHeader and Form components from inline styles to Panda CSS

**Context:**
- CSS analysis revealed mixed styling approach (inline styles + Panda CSS)
- SiteHeader had 80% inline styles, 20% Panda CSS
- Form components were 100% inline styles
- Need for consistency and maintainability
- WCAG 2.1 AA compliance requirements

**Alternatives Considered:**
1. **Keep inline styles** - Rejected (inconsistent, hard to maintain)
2. **Gradual migration** - Rejected (creates technical debt)
3. **Complete migration** - ✅ Chosen

**Implementation:**
- **SiteHeader.tsx:**
  - Migrated skip link styles to Panda CSS with focus states
  - Converted header container and navigation styles
  - Updated mobile menu dropdown styles
  - Added hover states for interactive elements
  - Maintained all accessibility features

- **ui/Form.tsx:**
  - Migrated all form components to Panda CSS
  - Added proper focus states with box-shadow
  - Implemented hover and disabled states
  - Added form validation styles (invalid states)
  - Maintained WCAG 2.1 AA compliance

**Impact:**
- **Positive:**
  - Consistent styling approach across components
  - Better maintainability and developer experience
  - Improved accessibility with proper focus states
  - Type-safe styling with design tokens
  - Better performance (no runtime CSS-in-JS)

- **Negative:**
  - None identified

**Files Changed:**
- `components/SiteHeader.tsx`
- `components/ui/Form.tsx`
- `docs/architecture/COMPONENTS.md`

**Status:** ✅ Complete

**Testing:**
- Build passes successfully (`npm run build`)
- No linting errors
- All accessibility features preserved
- Responsive design maintained

---

## 2025-10-07: Pre-documentation Setup Checkpoint

**Decision:** Committed all changes before creating documentation system

**Context:**
- 64 uncommitted changes
- Panda CSS migration completed
- 4 components using Panda CSS
- Ready for structured documentation

**Status:** ✅ Complete

**Commit:** `c3b6839` - "chore: pre-documentation-setup checkpoint"

---

## 2025-10-07: Migrated from Stitches to Panda CSS

**Decision:** Replace Stitches CSS-in-JS with Panda CSS 1.4.1

**Context:**
- Stitches unmaintained since 2023
- Security and compatibility concerns
- Need zero-runtime performance
- Panda CSS actively developed (Chakra UI team)

**Alternatives Considered:**
1. **Tailwind CSS** - Rejected (utility-first paradigm, different approach)
2. **Styled-components** - Rejected (runtime overhead)
3. **CSS Modules** - Rejected (less DX, verbose)
4. **Panda CSS** - ✅ Chosen

**Implementation:**
- Removed `lib/stitches.config.ts`
- Created `panda.config.ts` with Modern Green theme
- Migrated 4 components:
  - SiteHeader.tsx
  - ui/ArchitectureSection.tsx
  - ui/Button.tsx
  - ui/UnitsSection.tsx
- Generated `styled-system/` directory

**Impact:**
- Build time reduced
- Type-safe styling maintained
- Zero runtime overhead
- Modern DX preserved

**Status:** ✅ Complete

**Files Changed:** 70 files (6,151 insertions, 5,066 deletions)

---

## 2025-01-XX: Kept Next.js 15 (Payload Compatibility Confirmed)

**Decision:** Stay on Next.js 15.5.3

**Context:**
- Initial concerns about Payload CMS compatibility
- Payload 3.56 confirmed compatible with Next.js 15
- Access to latest Next.js features

**Why Next.js 15:**
- Latest features (Turbopack, improved performance)
- Stable Payload integration
- Better App Router support

**Status:** ✅ Complete

---

## 2024-12-XX: Chose Payload CMS over Alternatives

**Decision:** Use Payload CMS 3.56 as content management system

**Context:**
- Need self-hosted CMS (data sovereignty)
- TypeScript-native preferred
- PostgreSQL database required

**Alternatives Considered:**
1. **WordPress** - Rejected (PHP, not modern stack)
2. **Strapi** - Rejected (less TypeScript-native)
3. **Contentful** - Rejected (paid, external hosting)
4. **Payload CMS** - ✅ Chosen

**Why Payload:**
- TypeScript-first (full type safety)
- Self-hosted (complete control)
- PostgreSQL support
- Modern React admin UI
- Active development

**Collections Created:**
- Units (property listings)
- Media (file uploads)
- Users (admin)
- ContactMessages
- SiteSettings (global config)

**Status:** ✅ Complete

---

## 2024-12-XX: PostgreSQL (Supabase) over MongoDB

**Decision:** Use PostgreSQL via Supabase as database

**Context:**
- Payload supports both PostgreSQL and MongoDB
- Real estate data is structured (relational)
- Need reliability and data integrity

**Why PostgreSQL:**
- Relational model fits property data
- Foreign keys and constraints
- Supabase provides managed hosting
- Built-in auth, storage (future features)

**Connection Mode:**
- Transaction Pooler (port 6543) for serverless
- Not Direct Connection (causes issues)

**Status:** ✅ Complete

---

## 2024-12-XX: Decided Against Runtime Theme Switching

**Decision:** Use hardcoded Modern Green theme (no dark mode toggle)

**Context:**
- Initially considered dark/light mode
- Single-purpose property website
- Brand consistency important

**Reasoning:**
- Over-engineering for use case
- Brand colors should be consistent
- Simpler codebase
- Reduced bundle size (~5kb)

**Implementation:**
- Hardcoded colors in `panda.config.ts`
- Removed theme provider/context
- Simplified component styles

**Status:** ✅ Complete

**Note:** Can revisit if client requests multi-theme

---

## Template for New Entries
```markdown
## YYYY-MM-DD: [Decision Title]

**Decision:** [One sentence summary]

**Context:**
- [Why did this come up?]
- [What problem are we solving?]

**Alternatives Considered:**
1. **Option A** - Rejected (reason)
2. **Option B** - ✅ Chosen (reason)

**Implementation:**
- [What was done]
- [Key changes]

**Impact:**
- [Effect on project]
- [Performance/DX impacts]

**Status:** 🚧 In Progress | ✅ Complete | ❌ Reverted

**Files Changed:** (if applicable)

Usage:

Add entries at TOP (newest first)
Be specific about reasoning
List alternatives considered
Track status changes
Reference commit SHAs when relevant

This log helps AI understand WHY decisions were made, preventing "improvements" that undo deliberate choices.
```

