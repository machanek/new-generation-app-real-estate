# Payload CMS - Official Documentation Links
**Version:** 3.56.0  
**Homepage:** https://payloadcms.com

---

## Getting Started

### What is Payload
**URL:** https://payloadcms.com/docs/getting-started/what-is-payload  
**When:** Understanding core concepts  
**Fetch command:**
```
Use web_fetch: https://payloadcms.com/docs/getting-started/what-is-payload
```

### Installation (We already did this)
**URL:** https://payloadcms.com/docs/getting-started/installation  
**Note:** We use Next.js integration with PostgreSQL adapter

---

## Core Concepts (Fetch These)

### Collections (Most Important)
**URL:** https://payloadcms.com/docs/configuration/collections  
**When:** Creating or modifying collections  
**Fetch command:**
```
Use web_fetch: https://payloadcms.com/docs/configuration/collections
```

### Fields Overview
**URL:** https://payloadcms.com/docs/fields/overview  
**When:** Need to know available field types  
**Fetch command:**
```
Use web_fetch: https://payloadcms.com/docs/fields/overview
```

### Hooks
**URL:** https://payloadcms.com/docs/hooks/overview  
**When:** Auto-calculating fields, validation, custom logic  
**Fetch command:**
```
Use web_fetch: https://payloadcms.com/docs/hooks/overview
```

### Upload Fields
**URL:** https://payloadcms.com/docs/upload/overview  
**When:** Adding image/file uploads  
**Fetch command:**
```
Use web_fetch: https://payloadcms.com/docs/upload/overview
```

---

## Specific Field Types

### Text Field
**URL:** https://payloadcms.com/docs/fields/text

### Number Field
**URL:** https://payloadcms.com/docs/fields/number

### Select Field
**URL:** https://payloadcms.com/docs/fields/select

### Relationship Field
**URL:** https://payloadcms.com/docs/fields/relationship

### Upload Field
**URL:** https://payloadcms.com/docs/fields/upload

---

## Database & Queries

### PostgreSQL Adapter
**URL:** https://payloadcms.com/docs/database/postgres  
**Note:** We use this with Supabase

### Querying
**URL:** https://payloadcms.com/docs/queries/overview  
**When:** Complex database queries

---

## Admin UI

### Customization
**URL:** https://payloadcms.com/docs/admin/overview  
**When:** Customizing admin panel

### Components
**URL:** https://payloadcms.com/docs/admin/components  
**When:** Adding custom admin components

---

## Access Control

### Overview
**URL:** https://payloadcms.com/docs/access-control/overview  
**When:** Setting up permissions

**Our pattern:**
```typescript
access: {
  read: () => true,  // Public read
  create: ({ req: { user } }) => Boolean(user),  // Admin only
}
```

---

## Quick Access

**Most Used URLs:**
- **Collections:** https://payloadcms.com/docs/configuration/collections
- **Fields:** https://payloadcms.com/docs/fields/overview
- **Hooks:** https://payloadcms.com/docs/hooks/overview
- **Upload:** https://payloadcms.com/docs/upload/overview
- **Queries:** https://payloadcms.com/docs/queries/overview

**Search:** https://payloadcms.com/docs

---

## Usage Example for AI

```
TASK: Add image gallery to Units collection

STEP 1: Read docs/vendor/payload/our-patterns.md
        (See how we structure collections)

STEP 2: Check existing Media collection for reference

STEP 3: Fetch official docs if needed:
        web_fetch: https://payloadcms.com/docs/fields/upload
        web_fetch: https://payloadcms.com/docs/fields/relationship

STEP 4: Implement following our patterns
```
