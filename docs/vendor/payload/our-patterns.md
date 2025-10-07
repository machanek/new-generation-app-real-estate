# Payload CMS - Our Patterns
**Our version:** 3.56.0  
**Last updated:** 2025-10-07  
**For full docs:** See LINKS.md

---

## Our Setup

### Database
- **Type:** PostgreSQL (via Supabase)
- **Connection:** Transaction Pooler (port 6543)
- **Adapter:** `@payloadcms/db-postgres`

### Configuration
**File:** `payload.config.ts`
```typescript
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: getDatabaseUri(),
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    },
  }),
  // ... rest of config
})
```

**CRITICAL:** Always use Transaction Pooler, NOT Direct Connection!

---

## Our Collections (5 total)

### 1. Units (Property Listings)
**File:** `collections/Units.ts`  
**Purpose:** Property/apartment listings

**Key Fields:**
```typescript
{
  unit: string              // "A-1"
  building: string          // "Budynek A"
  floor: number             // 0, 1, 2
  area: number              // m²
  price: number             // PLN
  pricePerM2: number        // Auto-calculated
  status: 'available' | 'reserved' | 'sold'
  planUrl: string           // PDF link
  unitPageUrl: string       // Auto-generated
}
```

**Hooks:**
- `beforeChange`: Auto-calculates pricePerM2
- `beforeChange`: Auto-generates unitPageUrl

### 2. Media (File Uploads)
**File:** `collections/Media.ts`  
**Purpose:** Images and PDFs  
**Uses:** Sharp for image optimization

### 3. Users (Admin Users)
**File:** `collections/Users.ts`  
**Purpose:** Admin authentication

### 4. ContactMessages
**File:** `collections/ContactMessages.ts`  
**Purpose:** Contact form submissions

### 5. SiteSettings (Global)
**File:** `collections/SiteSettings.ts`  
**Purpose:** Global site configuration

**Fields:**
- Site name, description
- Contact info (phone, email, address)
- Hero images (relationship to Media)
- Gallery images (relationship to Media)
- SEO settings

---

## Common Patterns WE Use

### Accessing Payload in Server Components
```typescript
import { getPayload } from 'payload'
import config from '@payload-config'

// In Server Component or API route
export default async function Page() {
  const payload = await getPayload({ config })
  
  const units = await payload.find({
    collection: 'units',
    where: {
      status: { equals: 'available' }
    },
    limit: 10
  })
  
  return <div>{/* render units */}</div>
}
```

**IMPORTANT:**
- ✅ Use `getPayload` (NOT `getPayloadHMR`)
- ✅ Import from `'payload'` (NOT `'@payloadcms/next/utilities'`)

### Auto-Calculating Fields (beforeChange Hook)
```typescript
// From Units.ts
hooks: {
  beforeChange: [
    ({ data }) => {
      // Auto-calculate price per m²
      if (data.area && data.price && data.area > 0) {
        data.pricePerM2 = Math.round(data.price / data.area)
      }
      
      // Auto-generate URL
      if (data.unit) {
        data.unitPageUrl = `/mieszkania/unit-${data.unit}`
      }
      
      return data
    },
  ],
}
```

### Upload Field (for Images)
```typescript
// From Media.ts pattern
{
  name: 'image',
  type: 'upload',
  relationTo: 'media',
  required: true,
}
```

### Relationship Field
```typescript
// From SiteSettings.ts
{
  name: 'heroImages',
  type: 'relationship',
  relationTo: 'media',
  hasMany: true,
  maxRows: 3,
}
```

---

## Gotchas (Things That Tripped Us Up)

### ❌ Don't use getPayloadHMR
```typescript
// DEPRECATED (throws warnings)
import { getPayloadHMR } from '@payloadcms/next/utilities'

// CORRECT (current)
import { getPayload } from 'payload'
```

### ❌ Don't modify database directly
```typescript
// WRONG - direct SQL
UPDATE units SET price = 500000 WHERE id = 1

// CORRECT - use Payload API
await payload.update({
  collection: 'units',
  id: '1',
  data: { price: 500000 }
})
```

### ❌ Don't use Direct Connection
```typescript
// WRONG - causes serverless timeouts
DATABASE_URI=postgresql://...@db.xxx.supabase.co:5432/postgres

// CORRECT - use Transaction Pooler
DATABASE_URI=postgresql://...@pooler.supabase.com:6543/postgres
```

### ✅ Always validate DATABASE_URI
```typescript
// From payload.config.ts
function getDatabaseUri(): string {
  // Check if using Direct Connection
  if (databaseUri && databaseUri.includes('db.rrpzjktpdgpmmgmyxywn.supabase.co')) {
    console.log('Switching to Transaction Pooler')
    // ... construct pooler URI
  }
  return databaseUri
}
```

---

## When to Check Official Docs

**Use this quick reference for:**
✅ Our collection structure  
✅ Our hooks patterns  
✅ Database connection setup  

**Fetch official docs when you need:**
🔍 Full field type reference  
🔍 Advanced hooks  
🔍 Admin UI customization  
🔍 Access control patterns  

**See:** LINKS.md for URLs to fetch
