# Component Inventory
**Last updated:** 2025-10-07
**Purpose:** Track all components, their status, and styling approach

## Status Legend

- ✅ **STABLE** - Production-ready, DO NOT refactor without approval
- 🔄 **ACTIVE** - Working but can be modified carefully
- 🚧 **WIP** - Work in progress, actively being developed

---

## Layout Components

### ✅ HeroSection.tsx
**Status:** STABLE
**Styling:** Panda CSS (hybrid approach)
**Purpose:** Main hero section with background image
**Location:** components/
**Created:** 2025-10-07

**Features:**
- Full-width hero with background image
- Dark gradient overlay
- Centered content (h1 + p)
- Next.js Image optimization
- Fetches heroImages from Payload CMS (site-settings)
- Fallback to Unsplash default image

**Props:**
- `heroImage?: { url: string, alt?: string }` - Hero image from CMS

**Styling:**
- Height: 600px (inline - custom value)
- Background: Image with gradient overlay
- Text: White with text shadow
- Responsive: Full-width on all devices

**TODO:** ✅ DONE
- ~~Create hero section~~
- ~~Add Payload CMS integration~~
- ~~Add fallback image~~

---

### ✅ SiteHeader.tsx
**Status:** STABLE  
**Styling:** Panda CSS  
**Purpose:** Main navigation header with mobile menu  
**Features:**
- Skip link (WCAG)
- Desktop/mobile responsive nav
- CTA buttons (Prospekt, Phone)
- Dropdown menu for mobile
- Unified padding sizes (3 4 for nav links, 2 3 for mobile menu)
- Mobile menu button uses Button.tsx (secondary variant, sm size)

**Props:** None (self-contained)

**Last Modified:** 2025-10-07 (Mobile menu button uses Button.tsx)

**DO NOT:**
- Change structure without approval
- Remove WCAG skip link
- Modify mobile menu logic

---

### ✅ SiteFooter.tsx
**Status:** STABLE (upgraded from ACTIVE - Panda CSS migration complete)
**Styling:** Panda CSS
**Purpose:** Site footer with contact info
**Last Modified:** 2025-10-07

**Migration:** Converted all inline styles to Panda CSS
- 2 inline styles migrated
- Fully consistent with Panda CSS patterns

**TODO:** ✅ DONE
- ~~Migrate to Panda CSS~~
- Add social media links
- Improve mobile layout

---

## UI Components (Panda CSS)

### ✅ ui/Button.tsx
**Status:** STABLE  
**Styling:** Panda CSS  
**Purpose:** Reusable button component  
**Variants:**
- `primary` - Green CTA button
- `secondary` - Outline button
- `ghost` - Text-only button

**Sizes:**
- `sm` - Small (mobile)
- `md` - Medium (desktop)
- `lg` - Large

**Accessibility Features:**
- Focus outline with 2px solid border
- Focus-visible support for keyboard navigation
- Proper disabled states with reduced opacity
- High contrast focus indicators (WCAG 2.1 AA)

**Export:** `Button`, `ButtonLink`

**Last Modified:** 2025-10-07 (Added focus and disabled states)

---

### ✅ ui/ArchitectureSection.tsx
**Status:** STABLE  
**Styling:** Panda CSS  
**Purpose:** About section with project info  

**Last Modified:** 2025-10-07 (Panda CSS migration)

---

### ✅ ui/UnitsSection.tsx
**Status:** STABLE  
**Styling:** Panda CSS  
**Purpose:** Units listing with table/card views  
**Exports:** (30+ components for tables, cards, filters)
- `UnitsSection`
- `UnitsTable`, `TableHeader`, `TableRow`, etc.
- `UnitCard`, `CardHeader`, `CardInfo`, etc.
- `FiltersForm`, `FilterGroup`, `FilterSelect`, etc.
- `StatusBadge`, `ViewButton` (now uses Button.tsx), etc.

**Features:**
- Responsive table/card toggle
- Status badges (available/reserved/sold)
- Filtering UI components

**Last Modified:** 2025-10-07 (Panda CSS migration)

**CRITICAL:** This file exports 50+ components - DO NOT split without discussion

---

### ✅ ui/UnitDetails.tsx (was: 🚧 WIP)
**Status:** STABLE (upgraded from WIP - Panda CSS migration complete)
**Styling:** Panda CSS (hybrid approach)
**Purpose:** Unit detail page with gallery and specifications
**Location:** components/ui/
**Exports:** 19 components (UnitLayout, UnitHeader, UnitTitle, etc.)
**Last Modified:** 2025-10-07

**Migration:** 
- Converted 20 inline styles to Panda CSS hybrid approach
- Phase 1: 4 simple components (margins, flex)
- Phase 2: 8 medium components (layouts, typography)
- Phase 3: 4 complex components (grids, shadows, custom colors)
- Uses Panda CSS tokens for standard values
- Inline styles for complex values (gridTemplateColumns, boxShadow, custom colors)

**Complexity:** High (19 components, largest file)

**TODO:** ✅ DONE
- ~~Migrate to Panda CSS~~
- ~~Improve image gallery~~
- ~~Responsive layout~~

---

### ✅ ui/Card.tsx
**Status:** STABLE (upgraded from ACTIVE - Panda CSS migration complete)  
**Styling:** Panda CSS (hybrid approach)  
**Purpose:** Generic card component  
**Location:** components/ui/  
**Last Modified:** 2025-10-07

**Migration:** 
- Converted 8 inline styles to Panda CSS
- Uses Panda CSS tokens consistently
- Inline styles for custom borders/shadows only

**Exports:**
- `Card`, `CardHeader`, `CardTitle`, `CardSubtitle`, `CardContent`, `CardFooter`, `CardImage`, `CardActions`

**TODO:** ✅ DONE
- ~~Migrate to Panda CSS~~
- Standardize API

---

### ✅ ui/Form.tsx
**Status:** STABLE  
**Styling:** Panda CSS  
**Purpose:** Form components with full accessibility support  

**Features:**
- Complete Panda CSS migration
- Focus states with proper contrast
- Form validation styles
- WCAG 2.1 AA compliant
- Hover and disabled states

**Exports:**
- `Form`, `FormGroup`, `FormRow`
- `FormLabel`, `FormInput`, `FormTextarea`, `FormSelect`
- `FormButton`, `FormSubmitButton`
- `FormError`, `FormSuccess`
- `CheckboxGroup`, `FormCheckbox`, `CheckboxLabel`
- `FormActions`

**Last Modified:** 2025-10-07 (Refactored FormButton to use Button.tsx)

**Refactoring Benefits:**
- Eliminated code duplication (30+ lines removed)
- Consistent styling with main Button component
- Better maintainability
- Unified hover/focus states

---

## Form Components

### ✅ forms/AccessibleContactForm.tsx (was: 🔄 ACTIVE)
**Status:** STABLE (upgraded from ACTIVE - Panda CSS migration + WCAG fixes)
**Styling:** Panda CSS (hybrid approach)
**Purpose:** WCAG 2.1 AA compliant contact form with React Aria Components
**Location:** components/forms/
**Exports:** AccessibleContactForm
**Last Modified:** 2025-10-07

**WCAG Compliance:**
- WCAG 2.1 AA compliant
- React Aria Components for accessibility
- Focus states with 2px outline + offset
- Error states with WCAG AA contrast
- Keyboard navigation support
- Screen reader friendly

**Migration (3 phases):**
- Phase 0: WCAG fixes (focus states, contrast)
- Phase 1: Layout + Typography (20 min)
- Phase 2: Form Fields + event handlers (25 min)
- Phase 3: Checkbox labels + Success message (15 min)

**Hybrid Approach:**
- Panda CSS: spacing, colors, layout, borderRadius
- Inline styles: custom fontSize, borders, backgrounds
- Event handlers: focus/blur/hover for WCAG compliance

**React Aria Components:**
- Form, TextField, TextArea, Button
- Label, Input, FieldError, Group, Checkbox
- All maintain WCAG compliance

**Complexity:** High (WCAG critical + 28 original inline styles)

**TODO:** ✅ DONE
- ~~Add WCAG focus states~~
- ~~Migrate to Panda CSS~~
- ~~Preserve accessibility~~
- ~~Test keyboard navigation~~

---

### 🔄 ContactForm.tsx
**Status:** ACTIVE  
**Styling:** Legacy  
**Purpose:** Simple contact form  

**TODO:**
- Merge with AccessibleContactForm or deprecate
- Decide on single form approach

---

## Section Components

### 🔄 AboutSection.tsx
**Status:** ACTIVE  
**Styling:** Mixed  
**Purpose:** About/intro section  

**TODO:**
- Migrate to Panda CSS
- Match design with ArchitectureSection

---

### 🔄 ArchitectureSection.tsx (root)
**Status:** ACTIVE  
**Styling:** Mixed  
**Purpose:** Architecture info (duplicate of ui/ArchitectureSection?)  

**TODO:**
- Clarify difference with ui/ArchitectureSection
- Consider merging

---

## Utility Components

### ✅ GalleryGrid.tsx
**Status:** STABLE (upgraded from ACTIVE - Panda CSS migration complete)
**Styling:** Panda CSS
**Purpose:** Image gallery grid
**Last Modified:** 2025-10-07

**Migration:** Converted all inline styles to Panda CSS
- 4 inline styles migrated
- Uses Panda CSS tokens consistently

**TODO:**
- Add lightbox
- Image optimization

---

### 🔄 UnitsCards.tsx
**Status:** ACTIVE  
**Styling:** Legacy  
**Purpose:** Units card view (may overlap with ui/UnitsSection)  

**TODO:**
- Verify if still used
- Consider deprecating in favor of ui/UnitsSection

---

### 🔄 UnitsTable.tsx
**Status:** ACTIVE  
**Styling:** Legacy  
**Purpose:** Units table view (may overlap with ui/UnitsSection)  

**TODO:**
- Verify if still used
- Consider deprecating in favor of ui/UnitsSection

---

### 🚧 UnitsSectionComponent.tsx
**Status:** WIP  
**Purpose:** Wrapper component (purpose unclear)  

**TODO:**
- Clarify purpose
- Consider removing if redundant

---

### 🚧 UnitsSectionWithState.tsx
**Status:** WIP  
**Purpose:** Stateful units section  

**TODO:**
- Merge with ui/UnitsSection or clarify difference

---

## Migration Priority

### High Priority (Migrate to Panda CSS)
1. ui/UnitDetails.tsx - Most visible to users
2. forms/AccessibleContactForm.tsx - WCAG compliance
3. GalleryGrid.tsx - Image display

### Medium Priority
4. SiteFooter.tsx
5. ui/Card.tsx
6. ~~ui/Form.tsx~~ ✅ COMPLETED

### Low Priority (Evaluate First)
7. AboutSection.tsx
8. UnitsCards.tsx / UnitsTable.tsx (may be redundant)
9. ArchitectureSection.tsx (root) - clarify vs ui/

---

## Component Guidelines

### Creating New Components

**Always:**
- Use Panda CSS for styling
- Follow naming conventions (PascalCase)
- Add to this inventory immediately
- Export from appropriate directory
- Include TypeScript types

**File Structure:**
```typescript
import { css } from '@/styled-system/css'

type ComponentProps = {
  // Props
}

export const Component = ({ ...props }: ComponentProps) => {
  return <div className={css({ ... })} />
}
```

### Modifying Existing Components

**STABLE Components (✅):**

- Require approval before changes
- Document reason in DECISIONS.md
- Test thoroughly
- Update this file if behavior changes

**ACTIVE Components (🔄):**

- Can modify carefully
- Follow existing patterns
- Update this file if major changes

**WIP Components (🚧):**

- Free to modify
- Document major decisions
- Mark as ACTIVE when production-ready


### Deprecation Process

- Mark as ⚠️ DEPRECATED in this file
- Add comment in component file
- Document in DECISIONS.md
- Create migration guide if needed
- Remove after 2 weeks if no issues


