# Vendor Documentation
**Last updated:** 2025-10-07
**Purpose:** Curated external documentation for quick reference

---

## Overview

This directory contains **curated excerpts** from official documentation of libraries and services used in the project. These are NOT complete docs, but **quick reference guides** tailored to our specific usage.

**Why curated docs?**
- ✅ Faster than searching official docs
- ✅ Focused on what WE actually use
- ✅ Includes project-specific notes
- ✅ AI assistants can reference quickly

**Important:**
- ⚠️ Always check official docs for latest info
- ⚠️ These are excerpts - not complete documentation
- ⚠️ Update when upgrading major versions

---

## Documentation Index

### Core Stack

#### 📦 Next.js 15.5.3
**Official:** https://nextjs.org/docs  
**Our docs:**
- `nextjs/app-router.md` - App Router patterns we use
- `nextjs/server-components.md` - RSC vs Client Components
- `nextjs/deployment.md` - Netlify deployment setup

**Key topics:** App Router, Server Components, API Routes, Image optimization

---

#### 🎨 Panda CSS 1.4.1
**Official:** https://panda-css.com/docs  
**Our docs:**
- `panda-css/tokens.md` - Our design tokens reference
- `panda-css/patterns.md` - Common styling patterns
- `panda-css/responsive.md` - Responsive breakpoints

**Key topics:** css() function, Design tokens, Responsive design, Pseudo-selectors

---

#### 🔧 Payload CMS 3.56.0
**Official:** https://payloadcms.com/docs  
**Our docs:**
- `payload/quickstart.md` - Setup for our stack
- `payload/collections.md` - Collections API we use
- `payload/hooks.md` - beforeChange hooks examples

**Key topics:** Collections, Hooks, Admin UI, PostgreSQL adapter

---

#### 🗄️ Supabase PostgreSQL
**Official:** https://supabase.com/docs  
**Our docs:**
- `supabase/postgres.md` - PostgreSQL with Payload
- `supabase/pooler.md` - Transaction Pooler setup
- `supabase/auth.md` - Future auth integration

**Key topics:** Connection pooling, Database management, Environment setup

---

#### ♿ React Aria Components 1.12.2
**Official:** https://react-spectrum.adobe.com/react-aria/  
**Our docs:**
- `react-aria/components.md` - Components we use
- `react-aria/accessibility.md` - WCAG patterns

**Key topics:** Accessible components, Form validation, Focus management

---

### Supporting Libraries

#### 🎯 Lucide React 0.468.0
**Official:** https://lucide.dev/  
**Quick ref:** Icon names and usage  
**Our usage:** `<Download size={16} />`, `<Phone size={16} />`

---

#### 📧 Resend (Planned)
**Official:** https://resend.com/docs  
**Status:** Not yet implemented  
**Planned:** Email integration for contact forms

---

## Documentation Maintenance

### When to Update

**Always update when:**
- ✅ Upgrading major version (Next.js 15 → 16)
- ✅ Changing usage patterns
- ✅ Finding important gotchas

**Check quarterly:**
- 🔄 Are our excerpts still accurate?
- 🔄 Are there new features we should know?
- 🔄 Have breaking changes been announced?

### How to Add New Vendor Docs

1. **Create directory:** `docs/vendor/[library-name]/`
2. **Add README.md** with library overview
3. **Add topic files** (one file per major topic)
4. **Update this index**
5. **Link from main docs** if relevant

### Template for Vendor Doc File
```markdown
# [Library Name] - [Topic]
**Version:** X.X.X
**Official docs:** [URL]
**Last updated:** YYYY-MM-DD

## Quick Reference

[Most important info for our use case]

## Common Patterns

[Patterns we actually use in the project]

## Gotchas

[Things that tripped us up]

## Links

- [Official guide]
- [API reference]
- [Migration guide]
```

## Priority Documentation

### High Priority (Create First)

✅ Panda CSS tokens & patterns
✅ Payload CMS collections & hooks
✅ Next.js App Router patterns
✅ Supabase connection pooling

### Medium Priority

- React Aria Components for WCAG
- Next.js Image optimization
- Payload Admin UI customization

### Low Priority

- TypeScript advanced patterns
- PostgreSQL query optimization
- Netlify deployment options

---

## Usage by AI Assistants

### Good AI Prompt:
```
TASK: Add image upload to Units collection

CONTEXT:
1. Check docs/vendor/payload/collections.md for upload field syntax
2. Check docs/vendor/payload/hooks.md for image optimization
3. Follow patterns from existing Media collection

THEN: Implement the feature
```

### Bad AI Prompt:
```
Add image upload
```
*(AI has to search internet, may find outdated info, wastes time)*

---

## Copyright & Attribution

**Important:**
- These are excerpts and summaries - not complete reproductions
- Always link to official documentation
- Update references when versions change
- Respect library licenses

**Fair Use Justification:**
- Educational purpose
- Small excerpts only
- Transformative (adapted to our use case)
- Does not replace official docs

---

## Links to Official Documentation

### Primary Stack
- **Next.js:** https://nextjs.org/docs
- **Panda CSS:** https://panda-css.com/docs
- **Payload CMS:** https://payloadcms.com/docs
- **Supabase:** https://supabase.com/docs
- **React Aria:** https://react-spectrum.adobe.com/react-aria/

### Supporting Libraries
- **Lucide Icons:** https://lucide.dev/
- **React Hook Form:** https://react-hook-form.com/
- **TypeScript:** https://www.typescriptlang.org/docs/

### Deployment & Tools
- **Netlify:** https://docs.netlify.com/
- **Git:** https://git-scm.com/doc

---

## 🤖 For AI Assistants

### How to Use This Documentation System

**Step 1: Check our curated docs**
Read: docs/vendor/[library]/quick-reference.md
or:   docs/vendor/[library]/our-patterns.md
These contain:
- What WE actually use
- Our specific configuration
- Common gotchas in OUR project

**Step 2: If you need more details, fetch official docs**
Read: docs/vendor/[library]/LINKS.md
Use web_fetch to get latest official documentation

### Example AI Workflow

**Good prompt:**
```
TASK: Add upload field to Units collection
STEP 1: Read docs/vendor/payload/our-patterns.md
(See how we use Payload in this project)
STEP 2: Read docs/vendor/payload/LINKS.md
Then fetch: https://payloadcms.com/docs/fields/upload
(Get detailed API reference)
STEP 3: Check existing Media collection for patterns
STEP 4: Implement following our conventions
```

**Bad prompt:**
```
Add upload field
```
*(AI searches internet, finds outdated info, uses wrong patterns)*

---

### Quick Links for Web Fetch

**When you need official docs, use web_fetch on these URLs:**

#### Panda CSS
- Main concepts: https://panda-css.com/docs/concepts/overview
- Style props: https://panda-css.com/docs/concepts/style-props
- Responsive: https://panda-css.com/docs/concepts/responsive-design
- Patterns: https://panda-css.com/docs/concepts/patterns

#### Payload CMS
- Collections: https://payloadcms.com/docs/configuration/collections
- Fields overview: https://payloadcms.com/docs/fields/overview
- Hooks: https://payloadcms.com/docs/hooks/overview
- Upload fields: https://payloadcms.com/docs/upload/overview

#### Supabase
- Connecting: https://supabase.com/docs/guides/database/connecting-to-postgres
- Pooler: https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler
- PostgreSQL: https://supabase.com/docs/guides/database

#### Next.js
- App Router: https://nextjs.org/docs/app/building-your-application/routing
- Server Components: https://nextjs.org/docs/app/building-your-application/rendering/server-components
- Data Fetching: https://nextjs.org/docs/app/building-your-application/data-fetching

---

### Important Rules for AI

**Always:**
✅ Read our curated docs FIRST
✅ Use web_fetch for official docs when needed
✅ Follow patterns from existing code
✅ Cite sources when using fetched documentation

**Never:**
❌ Assume based on general knowledge
❌ Use outdated patterns from training data
❌ Skip reading project-specific docs

---

**Last review:** 2025-10-07  
**Next review:** 2026-01-07 (or when upgrading major versions)
