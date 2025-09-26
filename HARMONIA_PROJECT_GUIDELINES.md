# HARMONIA NEXT - PROJECT GUIDELINES FOR CLOUDAI

## 🎯 PROJECT OVERVIEW
**Project Name**: Harmonia Next  
**Type**: Next.js 15 + Payload CMS 3.56.0 + Supabase  
**Purpose**: Real estate website with admin panel  
**Deployment Target**: Netlify  
**Status**: Development phase with critical admin panel issues  

## 🛠️ TECHNOLOGY STACK
```
- Next.js 15.5.3 (App Router + Pages Router)
- Payload CMS 3.56.0 (BETA - known compatibility issues)
- Supabase (PostgreSQL database)
- TypeScript
- React 19.1.0
- Sharp (image processing)
- Netlify (deployment)
```

## 📁 PROJECT STRUCTURE
```
harmonia-next/
├── app/
│   ├── (payload)/admin/[[...segments]]/page.tsx    # Admin panel route
│   └── api/[[...payload]]/route.ts                 # API route handler
├── pages/
│   └── index.tsx                                   # Main homepage
├── collections/
│   ├── Users.ts                                    # User collection
│   ├── Media.ts                                    # Media collection
│   ├── Units.ts                                    # Property units
│   ├── ContactMessages.ts                          # Contact form
│   └── SiteSettings.ts                             # Site configuration
├── payload.config.ts                               # Payload CMS configuration
├── next.config.ts                                  # Next.js configuration
├── netlify.toml                                    # Netlify deployment config
└── .env.local                                      # Environment variables
```

## ⚙️ CURRENT CONFIGURATION

### next.config.ts (CURRENT STATE)
```typescript
import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['sharp'],
  experimental: {
    typedRoutes: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('sharp');
    }
    return config;
  },
  output: 'standalone',
};

export default withPayload(nextConfig);
```

### payload.config.ts (KEY SETTINGS)
```typescript
export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
  admin: {
    user: Users.slug,
    routes: {
      login: '/admin/login',
      logout: '/admin/logout',
      account: '/admin/account',
      createFirstUser: '/admin/create-first-user',
      forgot: '/admin/forgot',
      reset: '/admin/reset',
    },
    meta: {
      titleSuffix: '- Harmonia Rząska CMS',
      favicon: '/favicon.ico',
    },
    components: {
      beforeDashboard: [],
      afterDashboard: [],
      beforeNav: [],
      afterNav: [],
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  editor: lexicalEditor({}),
  collections: [Users, Media, Units, ContactMessages, SiteSettings],
  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://harmonia-rzaska.netlify.app',
  ],
  csrf: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://harmonia-rzaska.netlify.app',
  ],
  routes: {
    admin: '/admin',
    api: '/api',
    graphQL: '/api/graphql',
    graphQLPlayground: '/api/graphql-playground',
  },
  db: postgresAdapter({
    pool: {
      connectionString: getDatabaseUri(),
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    },
  }),
})
```

### netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20.18.0"
  NEXT_TELEMETRY_DISABLED = "1"
  PAYLOAD_SECRET = "your-secret-key-here-change-this-in-production"
  DATABASE_URI = "postgresql://postgres.rrpzjktpdgpmmgmyxywn:j1l1fVqcyFAtmUFU@aws-1-eu-central-1.pooler.supabase.com:6543/postgres"
  SUPABASE_URL = "https://rrpzjktpdgpmmgmyxywn.supabase.co"
  SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJycHpqa3RwZGdwbW1nbXl4eXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwNDU5MTAsImV4cCI6MjA3MzYyMTkxMH0.F76Vxszfx4q_ZnDbEe2S7t8Dr8skHWgG0Af5BvQNi-8"

[[headers]]
  for = "/api/payload/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 🔧 ENVIRONMENT VARIABLES
```bash
PAYLOAD_SECRET=harmonia-secret-key-2024
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
SUPABASE_URL=https://rrpzjktpdgpmmgmyxywn.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJycHpqa3RwZGdwbW1nbXl4eXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwNDU5MTAsImV4cCI6MjA3MzYyMTkxMH0.F76Vxszfx4q_ZnDbEe2S7t8Dr8skHWgG0Af5BvQNi-8
DATABASE_URI=postgresql://postgres.rrpzjktpdgpmmgmyxywn:j1l1fVqcyFAtmUFU@aws-1-eu-central-1.pooler.supabase.com:6543/postgres
```

## 🚨 CRITICAL ISSUES TO RESOLVE

### 1. ServerFunctionsProvider Error (PRIORITY 1)
```
Error: ServerFunctionsProvider requires a serverFunction prop
```
- **Status**: NOT RESOLVED
- **Impact**: Admin panel returns 500 error
- **Cause**: Known compatibility issue between Payload CMS 3.56.0 and Next.js 15
- **URL**: http://localhost:3000/admin

### 2. Turbopack Conflicts (PRIORITY 2)
```
⚠ Webpack is configured while Turbopack is not, which may cause problems.
```
- **Status**: PARTIALLY RESOLVED
- **Solution**: Using `turbo: false` in next.config.ts
- **Impact**: Development server warnings

### 3. ENOENT Build Manifest Errors (PRIORITY 3)
```
Error: ENOENT: no such file or directory, open 'C:\Projekt\harmonia-next\.next\static\development\_buildManifest.js.tmp.*'
```
- **Status**: NOT RESOLVED
- **Impact**: Build manifest file issues
- **Cause**: Turbopack/Webpack conflicts

## ✅ WHAT WORKS CORRECTLY
- **Homepage**: http://localhost:3000 ✅
- **API endpoints**: /api/* ✅
- **Production build**: `npm run build` ✅
- **Database connection**: Supabase ✅
- **Netlify configuration**: Ready for deployment ✅

## ❌ WHAT DOESN'T WORK
- **Admin panel**: /admin (500 error) ❌
- **ServerFunctionsProvider**: Compatibility issue ❌
- **Turbopack**: Conflicts with Payload CMS ❌

## 🎯 PRIMARY OBJECTIVES
1. **Fix ServerFunctionsProvider error** - Make admin panel functional
2. **Resolve Turbopack conflicts** - Eliminate development warnings
3. **Ensure admin panel works** - Critical for content management
4. **Test Netlify deployment** - Verify production readiness

## 📋 COMMANDS TO RUN
```bash
npm install                    # Install dependencies
npm run dev                   # Development server (port 3000/3001)
npm run build                 # Production build
npm start                     # Production server
```

## 🔗 REFERENCE LINKS
- [Payload CMS 3.0 Netlify Guide](https://developers.netlify.com/guides/deploy-payload-cms-3-to-netlify/)
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js 15 Documentation](https://nextjs.org/docs)

## 🚨 CRITICAL NOTES
- **Payload CMS 3.56.0 is BETA software** with known compatibility issues
- **Next.js 15** has compatibility problems with Payload CMS
- **Admin panel is non-functional** due to ServerFunctionsProvider error
- **Project is ready for Netlify deployment** despite admin panel issues
- **Homepage and API work correctly** - sufficient for basic deployment

## 🎯 SUCCESS CRITERIA
- Admin panel accessible at /admin without 500 errors
- No Turbopack/Webpack conflicts
- All development warnings resolved
- Successful Netlify deployment
- Full functionality of both frontend and admin panel

## 📝 ADDITIONAL CONTEXT
- Project was moved to new disk location
- All configurations have been updated for new location
- Git repository is set up and pushed to GitHub
- Environment variables are properly configured
- Database connection is working
- Build process completes successfully

## 🔍 DEBUGGING INFORMATION
- Server runs on port 3000 (or 3001 if 3000 is occupied)
- Database connection string is validated
- Payload CMS collections are properly configured
- Next.js App Router and Pages Router coexist
- TypeScript build errors are ignored for now
- Sharp package is externalized for server builds

## 💡 SUGGESTED APPROACH
1. Focus on ServerFunctionsProvider error first
2. Check Payload CMS 3.56.0 compatibility with Next.js 15
3. Consider downgrading Next.js or upgrading Payload CMS
4. Implement workarounds for known compatibility issues
5. Test admin panel functionality thoroughly
6. Verify Netlify deployment works correctly

## 🎯 EXPECTED OUTCOME
A fully functional Next.js application with working Payload CMS admin panel, ready for production deployment on Netlify, with all compatibility issues resolved and no development warnings.
