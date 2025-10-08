# Component Inventory
**Last updated:** 2025-10-07
**Purpose:** Track all components, their status, and styling approach

## Status Legend

- ✅ **STABLE** - Production-ready, DO NOT refactor without approval
- 🔄 **ACTIVE** - Working but can be modified carefully
- 🚧 **WIP** - Work in progress, actively being developed

---

## Layout Components

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

### 🚧 ui/UnitDetails.tsx
**Status:** WIP  
**Styling:** Inline styles (needs Panda migration)  
**Purpose:** Single unit detail page components  
**Exports:**
- `UnitLayout`, `UnitHeader`, `UnitTitle`
- `UnitInfo`, `InfoGrid`, `InfoItem`
- `PriceInfo`, `PriceValue`, `PricePerM2`
- `UnitGallery`, `GalleryGrid`, `GalleryItem`
- `ContactSection`, `ContactInfo`

**TODO:**
- Migrate to Panda CSS
- Add image lightbox
- Improve mobile layout
- Connect to real Payload data

---

### 🚧 ui/Card.tsx
**Status:** WIP  
**Styling:** Mixed (being refactored)  
**Purpose:** Generic card component  

**TODO:**
- Consolidate with UnitCard from UnitsSection
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

### 🔄 forms/AccessibleContactForm.tsx
**Status:** ACTIVE  
**Styling:** React Aria Components + inline styles  
**Purpose:** WCAG-compliant contact form  
**Features:**
- React Aria Components
- Form validation
- Error handling
- Accessible labels and hints

**TODO:**
- Integrate with Resend email
- Add success/error states
- Migrate styles to Panda

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


