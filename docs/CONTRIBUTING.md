# Contributing to Documentation
**Last updated:** 2025-10-07
**Purpose:** Guide for maintaining project documentation

---

## Documentation Structure
docs/
├── README.md                    # Documentation index
├── CONTRIBUTING.md              # This file - how to maintain docs
├── architecture/
│   ├── ARCHITECTURE.md          # System design (update rarely)
│   ├── DECISIONS.md             # Decision log (add often)
│   ├── COMPONENTS.md            # Component inventory (update often)
│   └── TROUBLESHOOTING.md       # Common issues (add as discovered)
└── .cursorrules (root)          # AI rules (update rarely)

---

## When to Update Documentation

### ALWAYS Update When:

#### ✅ Adding New Component
**Update:** `COMPONENTS.md`
```markdown
### 🚧 ComponentName.tsx
**Status:** WIP
**Styling:** Panda CSS
**Purpose:** [Brief description]
**Created:** [Date]
✅ Making Architectural Decision
Update: DECISIONS.md
markdown## YYYY-MM-DD: [Decision Title]

**Decision:** [One sentence]
**Context:** [Why?]
**Alternatives:** [What else considered?]
**Status:** ✅ Complete
✅ Solving New Problem
Update: TROUBLESHOOTING.md
markdown### ❌ [Problem title]

**Symptom:** [What user sees]
**Cause:** [Root cause]
**Solution:** [Step by step fix]
✅ Changing Component Status
Update: COMPONENTS.md
markdown### ✅ ComponentName.tsx (was: 🚧 WIP)
**Status:** STABLE (upgraded from WIP)
**Last Modified:** [Date]

SOMETIMES Update When:
🔄 Upgrading Dependencies
Update: ARCHITECTURE.md (Tech Stack section)
Update: DECISIONS.md if major version change
🔄 Adding New Library
Update: ARCHITECTURE.md (Key Libraries)
Update: DECISIONS.md (why this library?)
🔄 Changing Workflow
Update: .cursorrules (WORKFLOW section)
Update: DECISIONS.md (document the change)

RARELY Update When:
⚠️ Changing Core Architecture
Update: ARCHITECTURE.md (full review)
Update: DECISIONS.md (critical decision)
Update: .cursorrules (update constraints)

Documentation Workflow
1. Before Making Code Changes
CHECKLIST:
[ ] Read relevant docs (ARCHITECTURE.md, COMPONENTS.md)
[ ] Check if component is STABLE (needs approval)
[ ] Verify tech stack constraints
[ ] Plan documentation updates
2. During Development
KEEP NOTES:
- What problems did you encounter?
- What decisions did you make?
- What alternatives did you consider?
3. After Code Changes
UPDATE DOCUMENTATION:
[ ] Add/update component in COMPONENTS.md
[ ] Add decision to DECISIONS.md (if architectural)
[ ] Add solution to TROUBLESHOOTING.md (if solved problem)
[ ] Update ARCHITECTURE.md (if structure changed)
[ ] Commit docs with code changes
4. Commit Message Format
bash# Good - docs with code
git commit -m "feat: add UnitsFilter component

- Add UnitsFilter.tsx with Panda CSS
- Update COMPONENTS.md with new component
- Add filtering decision to DECISIONS.md"

# Good - docs only
git commit -m "docs: update TROUBLESHOOTING with build fix

- Add solution for Panda CSS generation issue
- Document npm run prepare requirement"

# Bad - no docs update
git commit -m "add filter"  ❌

Review Schedule
Weekly (Every Monday)
Quick Check:
bash# Check recent changes
git log --since="1 week ago" --oneline

# Questions:
- Were new components added? → Update COMPONENTS.md
- Were problems solved? → Add to TROUBLESHOOTING.md
- Were decisions made? → Document in DECISIONS.md
Monthly (First of Month)
Full Review:
markdown[ ] Review COMPONENTS.md
    - Mark stable components as ✅ STABLE
    - Update WIP components status
    - Remove deprecated components

[ ] Review DECISIONS.md
    - Add "Last updated" date
    - Archive old decisions if needed

[ ] Review TROUBLESHOOTING.md
    - Verify solutions still work
    - Update for new Next.js/Payload versions

[ ] Review ARCHITECTURE.md
    - Update dependency versions
    - Reflect current project state
Quarterly (Every 3 Months)
Deep Review:
markdown[ ] .cursorrules - Still accurate?
[ ] All docs - Reflect reality?
[ ] Templates - Still useful?
[ ] Add new sections if needed

Documentation Quality Standards
Good Documentation:
✅ Specific
markdown# Good
- Update COMPONENTS.md when adding components
- Run `npm run build` to verify

# Bad
- Update docs sometimes
- Test stuff
✅ Actionable
markdown# Good
### ❌ Build fails
**Solution:** 
1. Delete .next folder
2. Run npm install
3. Run npm run build

# Bad
### Build issue
Try reinstalling or something
✅ Current
markdown# Good (with dates)
**Last updated:** 2025-10-07
**Next review:** 2026-01-07

# Bad (no dates)
Last updated: Recently
✅ Searchable
markdown# Good (keywords for search)
### ❌ Module not found: '@/styled-system/css'
### ❌ Panda CSS styles not working
### ❌ Import error styled-system

# Bad (vague)
### Import problem

Common Mistakes to Avoid
❌ DON'T:
1. Document After The Fact
# Bad workflow:
Code for 2 weeks → "Oh I should document this"
→ Don't remember details
→ Poor documentation

# Good workflow:
Plan → Code → Document immediately while fresh
2. Document Everything
# Bad:
Document every single line change

# Good:
Document decisions, patterns, problems
Skip obvious changes
3. Use Vague Language
# Bad:
"Sometimes you might need to..."
"This could help..."

# Good:
"When X happens, do Y"
"This solves Z problem"
4. Forget to Update Component Status
# Bad:
Component marked 🚧 WIP for 6 months

# Good:
🚧 WIP → 🔄 ACTIVE → ✅ STABLE (with dates)

Templates
New Component Template (COMPONENTS.md)
markdown### 🚧 ComponentName.tsx
**Status:** WIP
**Styling:** Panda CSS
**Purpose:** [What it does]
**Location:** components/[path]
**Exports:** [What it exports]

**Props:**
- `prop1: string` - [Description]
- `prop2?: number` - [Optional, description]

**Usage:**
```typescript
import { ComponentName } from '@/components/ComponentName'

<ComponentName prop1="value" />
Created: YYYY-MM-DD
Last Modified: YYYY-MM-DD
TODO:

 Add tests
 Migrate to Panda CSS
 Add accessibility features


### New Decision Template (DECISIONS.md)
```markdown
## YYYY-MM-DD: [Decision Title]

**Decision:** [One sentence summary]

**Context:**
- [Why did this come up?]
- [What problem solving?]
- [What constraints?]

**Alternatives Considered:**
1. **Option A** - Rejected (reason with details)
2. **Option B** - Rejected (reason with details)
3. **Option C** - ✅ Chosen (reason with details)

**Implementation:**
- [What was done]
- [How was it done]
- [What changed]

**Impact:**
- **Positive:** [Benefits]
- **Negative:** [Trade-offs]
- **Performance:** [If applicable]

**Status:** 🚧 In Progress | ✅ Complete | ❌ Reverted

**Files Changed:**
- `path/to/file.ts`
- `path/to/another.ts`

**Links:**
- [Related PR]
- [Design doc]
- [Discussion thread]
New Problem Template (TROUBLESHOOTING.md)
markdown### ❌ [Problem Title with Keywords]

**Symptom:**
- [What user sees]
- [Error message if any]

**Cause:** [Root cause explanation]

**Solution:**
```bash
# Step 1: [Action]
command here

# Step 2: [Action]
another command
Prevention:

[How to avoid this]
[What to check]

Related Issues:

[Link to GitHub issue]
[Link to similar problem]

Added: YYYY-MM-DD
Verified: YYYY-MM-DD (last time solution worked)

---

## Documentation Debt

### What is Documentation Debt?

Like technical debt, but for docs:
- Outdated information
- Missing decisions
- Undocumented components
- Stale troubleshooting

### How to Track:

**In COMPONENTS.md:**
```markdown
## Documentation Debt

- [ ] UnitDetails.tsx - needs usage examples
- [ ] Button.tsx - missing accessibility notes
- [ ] Form.tsx - outdated props list
How to Pay Down:
Monthly Task:
markdownPick 1-2 items from debt list and:
1. Update documentation
2. Mark as complete
3. Remove from debt list

Questions & Answers
Q: Do I need to document small bug fixes?
A: No, unless:

The bug was hard to find → TROUBLESHOOTING.md
The fix changes behavior → DECISIONS.md
The fix changes component API → COMPONENTS.md

Q: What if I'm not sure if something is worth documenting?
A: Ask yourself:

Will future me need to know this? → Document
Will AI assistant benefit? → Document
Will new team members ask about this? → Document

When in doubt, document. Easier to remove than recreate.
Q: How detailed should DECISIONS.md be?
A: Include:
✅ Enough to understand WHY
✅ Alternatives considered
✅ Trade-offs accepted
Skip:
❌ Implementation details (that's in code)
❌ Obvious decisions
❌ Temporary workarounds
Q: Should I document third-party libraries?
A: Only document:

Why we chose it (DECISIONS.md)
How we use it differently than docs (ARCHITECTURE.md)
Common issues specific to our project (TROUBLESHOOTING.md)

Don't duplicate official library docs.

Getting Help
Documentation Issues
Not sure how to document something?

Check templates above
Look at similar existing entries
Ask in team chat
Better imperfect docs than no docs

Found outdated documentation?

Create GitHub issue: "docs: [file] is outdated"
Fix it if you can
Add to Documentation Debt list


Success Metrics
Good documentation means:
✅ New AI assistants understand project in <5 minutes
✅ New developers can contribute in <1 day
✅ Common problems solved without asking
✅ Decisions don't need to be re-explained
✅ Code reviews reference docs, not just opinions

Last updated: 2025-10-07
Next review: 2026-01-07

Po utworzeniu:

Sprawdź strukturę: ls docs/
Pokaż pierwsze 50 linii: head -50 docs/CONTRIBUTING.md
Git status: git status --short

