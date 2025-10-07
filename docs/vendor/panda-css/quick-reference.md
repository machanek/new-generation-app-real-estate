# Panda CSS - Quick Reference
**Our version:** 1.4.1  
**Last updated:** 2025-10-07  
**For full docs:** See LINKS.md

---

## Our Design Tokens (from panda.config.ts)

### Colors - NO 'colors.' prefix!
```typescript
// ✅ CORRECT
color: 'primary'              // #065F46
color: 'textPrimary'          // #1F2937
backgroundColor: 'bgGray'     // #F9FAFB

// ❌ WRONG - don't use colors. prefix
color: 'colors.primary'       // Won't work!
```

**Available tokens:**
- primary, primaryLight, secondary
- textPrimary, textSecondary
- bgWhite, bgGray
- border, borderLight, borderDark
- status-available, status-reserved, status-sold

### Spacing
```typescript
padding: '4'    // 16px (most common)
margin: '6'     // 24px
gap: '2'        // 8px
```

**Available:** 1 (4px), 2 (8px), 3 (12px), 4 (16px), 6 (24px), 8 (32px), 12 (48px)

### Font Sizes
```typescript
fontSize: 'base'    // 16px (default)
fontSize: 'lg'      // 18px
fontSize: 'xl'      // 20px
```

**Available:** xs, sm, base, lg, xl, 2xl, 3xl, 4xl

---

## Common Patterns WE Use

### Basic Component
```typescript
import { css } from '@/styled-system/css'

const styles = css({
  color: 'textPrimary',
  padding: '4',
  borderRadius: 'md'
})
```

### Hover States
```typescript
// ✅ CORRECT - use _hover
css({
  color: 'primary',
  _hover: { 
    color: 'primaryLight' 
  }
})

// ❌ WRONG - don't use &:hover
css({
  '&:hover': { color: 'red' }  // Won't work!
})
```

### Responsive Design
```typescript
css({
  display: 'none',
  md: {
    display: 'flex'  // Shows on tablet+
  }
})
```

**Breakpoints:** base (mobile), md (768px+), lg (1024px+)

---

## Gotchas (Things That Tripped Us Up)

### ❌ Don't use 'colors.' prefix
```typescript
// WRONG
color: 'colors.primary'

// CORRECT
color: 'primary'
```

### ❌ Don't use pixel values
```typescript
// WRONG
padding: '16px'

// CORRECT
padding: '4'
```

### ❌ Don't use & for pseudo-selectors
```typescript
// WRONG
'&:hover': { ... }

// CORRECT
_hover: { ... }
_focus: { ... }
_active: { ... }
```

### ✅ Always import from styled-system
```typescript
// CORRECT
import { css } from '@/styled-system/css'

// WRONG
import { css } from '@pandacss/dev'
```

---

## Examples from Our Components

### Button (from ui/Button.tsx)
```typescript
css({
  backgroundColor: 'primary',
  color: 'white',
  padding: '12px 24px',
  borderRadius: 'md',
  fontWeight: 'semibold',
  _hover: {
    backgroundColor: 'primaryLight'
  }
})
```

### Card Border
```typescript
css({
  border: '1px solid',
  borderColor: 'border',
  borderRadius: 'md'
})
```

### Status Badge
```typescript
css({
  backgroundColor: 'status-available',
  color: 'white',
  padding: '2',
  borderRadius: 'sm',
  fontSize: 'xs'
})
```

---

## When to Check Official Docs

**Use this quick reference for:**
✅ Our token names  
✅ Common patterns  
✅ Quick gotchas  

**Fetch official docs when you need:**
🔍 Full list of style props  
🔍 Advanced patterns  
🔍 Recipes and variants  
🔍 Animation utilities  

**See:** LINKS.md for URLs to fetch
