# Troubleshooting Guide
**Last updated:** 2025-10-07
**Purpose:** Common issues and solutions for Harmonia Rząska project

---

## Build Issues

### ❌ `npm run build` fails with TypeScript errors

**Symptom:**
Type error: ...

**Cause:** TypeScript strict mode enabled

**Solution:**
1. Fix the TypeScript errors (preferred)
2. Temporarily: Set `ignoreBuildErrors: true` in `next.config.ts` (NOT recommended)

**Prevention:**
- Run `npm run lint` before committing
- Use TypeScript in your editor

---

### ❌ Panda CSS styles not working

**Symptom:**
- Styles not applied
- `styled-system/` directory missing

**Cause:** Panda CSS not generated

**Solution:**
```bash
npm run prepare
npm run build
```
**Prevention:**

- Always run npm install fully
- Panda generates on postinstall

---

### ❌ Module not found: Can't resolve '@/styled-system/css'

**Symptom:**
Module not found: Can't resolve '@/styled-system/css'

**Cause:** Panda CSS not initialized

**Solution:**
```bash
npx panda codegen
npm run build
```

---

## Payload CMS Issues

### ❌ "DATABASE_URI not configured"

**Symptom:**
Error: DATABASE_URI not configured and cannot construct from Supabase

**Cause:** Missing or incorrect DATABASE_URI in .env.local

**Solution:**

1. Check .env.local exists in project root
2. Verify DATABASE_URI format:

```bash
DATABASE_URI=postgresql://postgres.xxx:password@aws-1-eu-central-1.pooler.supabase.com:6543/postgres
```

- Use Transaction Pooler (port 6543), NOT Direct Connection (port 5432)

**Prevention:**

- Use .env.local.example as template
- Never commit .env.local to git

---

### ❌ Payload admin not loading (/admin gives 404)

**Symptom:**

- /admin returns 404
- Admin UI doesn't appear

**Cause:** Payload routes not configured

**Solution:**

- Verify payload.config.ts has correct routes
- Check app/(payload)/admin/[[...segments]]/page.tsx exists
- Rebuild: `npm run build`

---

### ❌ "Cannot read properties of undefined (reading 'id')" in units

**Symptom:**

- Error when creating/editing units
- Units table issues

**Cause:** Database schema mismatch

**Solution:**

- Drop units table in Supabase
- Restart dev server (Payload recreates table)
- Or run migrations manually

**Prevention:**

- Let Payload manage schema
- Don't modify database directly

---

### ❌ Images not uploading to Payload

**Symptom:**

- Upload fails silently
- "Sharp" errors

**Cause:** Sharp not installed correctly

**Solution:**
```bash
npm uninstall sharp
npm install sharp --platform=win32 --arch=x64
npm run build
```
For Mac:
```bash
npm install sharp --platform=darwin
```

---

## Development Issues

### ❌ Port 3000 already in use

**Symptom:**
Error: listen EADDRINUSE: address already in use :::3000

**Solution:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```
Or use different port:
```bash
PORT=3001 npm run dev
```

---

### ❌ .next folder corrupted

**Symptom:**

- Random build errors
- Weird caching issues

**Solution:**
```bash
# Windows (PowerShell)
Remove-Item -Recurse -Force .next

# Mac/Linux
rm -rf .next

npm run build
```
**Prevention:**

- Included in dev script already

---

### ❌ Changes not reflecting in browser

**Symptom:**

- Code changes don't appear
- Old styles persist

**Solutions:**

- Hard refresh: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
- Clear Next.js cache:

```bash
rm -rf .next
npm run dev
```

- Regenerate Panda CSS:

```bash
npx panda codegen
```

---

## Styling Issues

### ❌ Panda CSS tokens not recognized

**Symptom:**
```typescript
// This doesn't work:
color: 'colors.primary'
```
**Cause:** Incorrect token reference

**Solution:**
```typescript
// Correct way:
color: 'primary'  // No 'colors.' prefix
```
Token structure:

- Colors: primary, secondary, textPrimary
- Spacing: 2, 4, 6, 8
- Font sizes: sm, base, lg, xl

---

### ❌ Hover styles not working in Panda

**Symptom:**
```typescript
// This doesn't work:
' &:hover': { color: 'red' }
```
**Cause:** Wrong syntax for pseudo-selectors

**Solution:**
```typescript
// Correct way:
_hover: { color: 'red' }
_focus: { outline: '2px solid' }
_active: { opacity: 0.8 }
```

---

## Deployment Issues (Netlify)

### ❌ Build fails on Netlify but works locally

**Symptom:**

- Local build: ✅ Success
- Netlify build: ❌ Failed

**Common Causes:**

- Missing environment variables
  - DATABASE_URI
  - PAYLOAD_SECRET
  - SUPABASE_URL
  - SUPABASE_ANON_KEY
  - Solution: Add to Netlify Environment Variables

- Wrong Node version
  - Solution: Add netlify.toml:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
```

- Build command incorrect
  - Solution: Netlify build settings:
    - Build command: npm run build
    - Publish directory: .next

---

### ❌ Netlify Functions timeout

**Symptom:**

- /api/* routes timeout
- Payload admin slow

**Cause:** Serverless function limits

**Solution:**

- Optimize database queries
- Use Supabase Transaction Pooler (not Direct Connection)
- Consider upgrading Netlify plan

---

## Git Issues

### ❌ Merge conflicts in .next or node_modules

**Symptom:**

- Conflicts in generated files

**Solution:**
```bash
# These should be in .gitignore
git rm -r --cached .next
git rm -r --cached node_modules
```
**Prevention:**

Verify .gitignore includes:

```
.next
node_modules
.env.local
```

---

### ❌ Large files rejected by Git

**Symptom:**
remote: error: File too large

**Solution:**

- Remove large files from public/
- Use CDN for images
- Check for accidentally committed node_modules

---

## Performance Issues

### ❌ Slow page loads

**Causes & Solutions:**

- Too many database queries
  - Use payload.find() with limit
  - Implement pagination

- Large images
  - Use Next.js <Image> component
  - Optimize images before upload

- Client-side filtering
  - OK for <100 units
  - Consider server-side for >100

---

## Testing Issues

### ❌ Component tests fail after Panda migration

**Symptom:**
Cannot find module '@/styled-system/css'

**Solution:**
Add to test setup:
```javascript
// jest.config.js
moduleNameMapper: {
  '^@/styled-system/(.*)$': '<rootDir>/styled-system/$1'
}
```

---

## When Nothing Works

### Nuclear Option (Clean Slate)
```bash
# 1. Remove all generated files
Remove-Item -Recurse -Force .next, node_modules, styled-system

# 2. Clear npm cache
npm cache clean --force

# 3. Fresh install
npm install

# 4. Regenerate Panda
npx panda codegen

# 5. Build
npm run build

# 6. Dev
npm run dev
```

---

## Getting Help

### Before Asking for Help

✅ Check this TROUBLESHOOTING.md
✅ Check DECISIONS.md for context
✅ Read error message fully
✅ Google the exact error
✅ Check Next.js / Payload / Panda docs

### When Asking for Help
Include:

- Exact error message (full stack trace)
- What you were trying to do
- What you've already tried
- Your environment (OS, Node version)
- Relevant code snippet

Template:
```markdown
## Issue: [Brief description]

### Error:
[Full error message]

### Steps to reproduce:
1. ...
2. ...

### Expected behavior:
...

### Actual behavior:
...

### Environment:
- OS: Windows 11
- Node: v20.x
- Next.js: 15.5.3
- Browser: Chrome 120

### What I tried:
- [x] Cleared .next
- [x] Reinstalled dependencies
- [ ] ...
```

---

## Useful Commands Reference
```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint

# Payload
npm run payload          # Payload CLI
npm run create-admin     # Create admin user

# Panda CSS
npx panda codegen        # Regenerate styles
npx panda --watch        # Watch mode

# Cleanup
Remove-Item -Recurse -Force .next        # Clear Next.js cache
Remove-Item -Recurse -Force node_modules # Clear dependencies

# Database (Supabase dashboard)
# - View tables
# - Reset migrations
# - Check logs
```

Last updated: 2025-10-07
Next review: When new issues discovered


