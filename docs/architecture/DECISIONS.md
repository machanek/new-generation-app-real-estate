# Architectural Decision Records (ADR)
**Last updated:** 2025-10-07

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

