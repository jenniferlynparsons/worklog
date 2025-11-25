# 🌱 Worklog: AWS Learning Project Plan

**Project Philosophy:** Small enough to finish. Rich enough to teach. Frontend-first to build momentum.

**Core Learning Goal:** Build real backend architecture intuition, AWS fluency, and professional vocabulary - not just copy-paste another tutorial.

---

## Part 1: What You're Actually Building

### The MVP (And Nothing More)

Worklog is a personal activity tracker that logs:
- **What you worked on today** (required)
- **Short description** (optional)
- **Tags or type** (e.g., drafting, practice, editing, release) (optional)
- **Uploaded file/image** documenting the work (optional)
- **Simple dashboard** showing recent activity and basic stats (optional)

That's it. No teams. No social features. No notifications except maybe a weekly summary email.

### Why This Size Matters

This gives you:
- User authentication
- CRUD operations  
- File uploads/storage
- Filtering and querying
- Basic state management
- Deployment pipeline

All the essential patterns without drowning in complexity.

---

## Part 2: What You're Learning (The Real Goals)

### Backend Architecture Reasoning
- Routing and API design
- Resource modeling and validation
- Data flow and state management
- Error handling philosophy (where failures go, what gets logged)
- Authentication vs. Authorization (these are different!)
- Separating business logic from infrastructure

### Database Intuition (SQL)
- Table design and relationships
- Index strategy
- Query optimization  
- Migration patterns (evolving schema over time)
- Search and filter implementation

### AWS Fundamentals (In Order)
1. **S3**: Object storage for files
2. **IAM**: Access control and permissions
3. **Compute Choice**: Lambda vs. EC2 vs. containers
4. **API Gateway**: Exposing your backend
5. **CloudWatch**: Observability and logging
6. **Secrets Management**: Environment configuration

### Deployment & Operations
- Getting code from laptop to production
- Database migrations in production
- Rollback strategies
- Environment management (local/staging/prod)

### Professional Vocabulary
- Learning the "official" names for patterns you already use
- Understanding industry terminology for architecture concepts
- Building a personal glossary as you go

---

## Part 3: The Build Path (Frontend → Local Backend → AWS)

### Phase 0: Foundation
**Goal:** Get your hands on a keyboard in comfortable territory

**Decisions To Make:**
- How will you structure your Next.js project? (App Router vs Pages Router)
- What styling approach? (Tailwind, CSS Modules, styled-components?)
- Where does authentication state live?
- How will you mock the backend data initially?
- What does "usable for yourself" actually mean? (What's the minimum UI you need?)

**Build:**
- [ ] Set up Next.js project
- [ ] Build the basic UI for logging an entry
- [ ] Mock the backend with local data
- [ ] Make it actually usable for yourself
- [ ] **Reflection**: What state management approach did you choose and why?

**Why frontend first?** You're warming up programming muscles in familiar territory. Momentum matters.

**Learning Note:** Next.js is new territory for you. You'll be learning server components, the App Router, and Next.js's opinions about how things should work. That's part of the value - you're learning modern approaches.

### Phase 1: Local Backend MVP
**Goal:** Build a working backend on your machine

**Decisions To Make:**
- Python framework? (FastAPI, Flask, Django?)
- Database choice? (PostgreSQL vs SQLite for local dev)
- Authentication strategy? (JWT, sessions, something else?)
- API design style? (RESTful conventions, or just pragmatic JSON endpoints?)
- Where does business logic live vs. data access?
- How will you structure your backend code? (Controllers, services, repositories?)
- How will Next.js talk to your backend? (API routes as proxy, direct calls, something else?)

**Build:**
- [ ] Choose your backend stack
- [ ] Set up local database
- [ ] Implement user authentication
- [ ] Build CRUD endpoints for entries
- [ ] Connect frontend to real backend
- [ ] **Deploy locally** - make it work end-to-end

**Milestone:** You should be using your own app locally to track your work.

**Vocabulary Check:** What's the authentication pattern you used called? What's the API style you landed on? What's the database access pattern called?

### Phase 2: Database Migrations
**Goal:** Learn to evolve your schema safely

**Decisions To Make:**
- Which migration tool? (Alembic for Python, Prisma, raw SQL?)
- How do you track which migrations have run?
- What's your rollback strategy?
- How do you handle data migrations vs. schema migrations?
- What's your process for testing migrations before production?

**Build:**
- [ ] Set up migration tooling
- [ ] Create your first migration (even if just documenting current state)
- [ ] Practice: add a new field to entries table
- [ ] Practice: create an index
- [ ] **Reflection**: How do you roll back if a migration breaks? What's your strategy?

**Vocabulary Check:** Migration vs. seed data - what's the difference? What's idempotent mean for migrations?

### Phase 3: File Uploads
**Goal:** Handle files without AWS first

**Decisions To Make:**
- Where do files live on disk?
- How do you generate filenames? (UUIDs, hashes, sequential?)
- What validation do you need? (File types, size limits, malicious content?)
- How do you serve files back out? (Direct file serving, signed URLs, proxy through backend?)
- What happens to files if an entry is deleted?
- How will you handle the file upload in Next.js? (Server action, API route, something else?)

**Build:**
- [ ] Local file storage implementation
- [ ] Upload endpoint
- [ ] Serving uploaded files
- [ ] Frontend file upload UI
- [ ] **Reflection**: How are you handling file validation? Size limits? Error cases?

**Migration Thinking:** Notice what you're building here - you'll replace this with S3 later. Pay attention to the *interface* between your app and file storage.

### Phase 4: First AWS Migration - S3
**Goal:** Replace local file storage with S3

**Decisions To Make:**
- Public bucket or private with signed URLs?
- How do you structure the bucket? (Folders by user, by date, flat?)
- What IAM permissions do you actually need?
- How do you handle credentials locally vs. production?
- Do files need to be deleted from S3 when entries are deleted?
- How do you test S3 integration locally?

**Build:**
- [ ] Create S3 bucket
- [ ] Set up IAM role for S3 access
- [ ] Replace local file storage with S3
- [ ] Test that uploads still work
- [ ] **Reflection**: What changed in your code? What stayed the same? Why?

**Milestone:** Deploy a version that uses S3 for file storage.

### Phase 5: Backend Deployment
**Goal:** Get your backend running in AWS

**Decisions To Make:**
- Compute choice: Lambda, EC2, ECS, or something else?
- How does your frontend reach your backend? (API Gateway, Load Balancer, direct?)
- Where do environment variables/secrets live?
- How do you handle database connections from AWS?
- What's your deployment process? (Manual first, then automate?)
- How does Next.js deployment work with your backend choice?
- Does Next.js run on Vercel or AWS? (This affects architecture!)

**Build:**
- [ ] Choose your compute strategy
- [ ] Set up deployment pipeline (even if manual at first)
- [ ] Deploy backend to AWS
- [ ] Update frontend to point to production API
- [ ] **Big Reflection**: Document every step you took. What broke? How did you fix it?

**This is the hard part.** Expect to get stuck. That's the point.

### Phase 6: Observability
**Goal:** See what your app is actually doing

**Decisions To Make:**
- What's worth logging? (Every request, just errors, something in between?)
- Structured logging format? (JSON, plain text?)
- What metrics matter? (Request count, error rate, response times?)
- Do you need alerts? For what?
- How do you trace a request through the system?

**Build:**
- [ ] Set up CloudWatch logging
- [ ] Add structured logging to your backend
- [ ] Create a simple dashboard
- [ ] Intentionally break something and watch logs
- [ ] **Reflection**: What metrics matter for this app? What would you alert on?

### Phase 7: Polish & Automation
**Goal:** Make deployment less painful

**Decisions To Make:**
- What triggers a deployment? (Git push, manual button, something else?)
- Do you need a staging environment? What makes it different from prod?
- How do you roll back a bad deployment?
- What gets tested automatically before deploy?
- How do you handle database migrations in an automated deploy?

**Build:**
- [ ] Automate deployment (CI/CD basics)
- [ ] Document deployment process
- [ ] Set up staging environment
- [ ] Practice deploying a change end-to-end
- [ ] **Reflection**: What would you do differently next time?

---

## Part 4: AI as Mentor, Not Builder

### Core Instruction for AI Tools

```
I'm building a learning project called Worklog. I want to develop deep understanding,
not just working code. Your job is to:

1. ASK QUESTIONS FIRST - Help me reason through decisions before suggesting solutions
2. TEACH VOCABULARY - When I've built something, help me learn what it's "officially" called
3. GUIDE, DON'T BUILD - Point me toward resources and concepts, don't write code for me
4. FORCE REFLECTION - After I finish a feature, ask me to explain my choices
5. SURFACE TRADE-OFFS - Help me see the pros/cons of different approaches
6. EMBRACE STRUGGLE - If I'm stuck on something I should figure out, guide me toward 
   the answer rather than giving it to me

Default mode: Socratic questioning and conceptual explanation.
Only provide code examples when I explicitly ask "show me an example" or when I'm 
genuinely blocked on syntax/mechanics rather than concepts.
```

### Prompt Templates (Use These Liberally)

**When starting a new feature:**
> I'm about to build [feature]. Before I start coding, ask me architecture questions 
> that help me think through the design. Don't propose solutions yet.

**When stuck on a decision:**
> I'm deciding between [option A] and [option B]. Help me articulate the trade-offs 
> by asking questions. Don't pick one for me until I've reasoned through it.

**When debugging:**
> Here's my error: [paste error]. Don't fix it. Ask me diagnostic questions to help 
> me find the root cause. Treat me like an intermediate engineer, not a beginner.

**After finishing something:**
> I just finished [feature]. Ask me to explain: what I built, how I structured it, 
> what trade-offs I made, and what this pattern is formally called.

**When learning AWS:**
> I'm trying to decide which AWS service fits [use case]. Walk me through how you 
> think about the problem space first, then ask what constraints matter to me.

**When genuinely stuck:**
> I've been stuck on this for [time period] and tried [what you tried]. I need more 
> direct help now. Can you show me an example or point me to specific documentation?

---

## Part 5: Shipping Rhythm

**Deploy something new regularly.** Even if tiny. Even if just a log statement.

This forces you to:
- Practice the full pipeline repeatedly
- Avoid perfectionism paralysis  
- Build deployment muscle memory
- Catch deployment issues early when stakes are low

**Suggested Milestones:**
- Frontend running locally  
- Full app working locally  
- Add one new feature (your choice)  
- Database migration applied  
- S3 integration working  
- Backend deployed to AWS  
- Frontend pointing to production  
- Monitoring in place  
- Automated deployment working  

The rhythm matters more than the speed.  

---

## Part 6: Vocabulary Building System

### Keep a Running Glossary

Create a `glossary.md` file. Every time you learn a term that clicks with something you 
already knew, add an entry:

```markdown
## [TERM]
**What I thought it was:** [Your intuitive understanding]
**What it actually is:** [Official definition]
**When I'd use it:** [Practical application]
**Example from Worklog:** [Where you used this pattern]
```

### Reflection Questions After Each Phase

1. **What did I build?** (In your own words)
2. **What is this pattern formally called?** (Research the terminology)
3. **What trade-offs did I make?** (What did you optimize for? What did you sacrifice?)
4. **What would I do differently?** (With what you know now)
5. **What surprised me?** (What was harder/easier than expected?)

---

## Part 7: What You're NOT Building (Scope Guardrails)

**Hard No's:**
- Multi-user teams or workspaces
- Social features or sharing
- Complex analytics or reporting  
- Notifications (except maybe one weekly email)
- Version history or audit logs
- Workflow automation
- Mobile apps
- Real-time anything

**If you catch yourself adding these, stop.** This is a learning project, not a product.

---

## Part 8: Dealing With "It's Too Hard" Fear

### When You Hit a Wall

1. **Identify what kind of stuck you are:**
   - Don't know what to search for → Ask AI to help you form the question
   - Don't understand the concept → Back up, find simpler explanation
   - Syntax/mechanics blocking you → Okay to ask for example
   - Architecture decision paralysis → Use Socratic prompts to explore options

2. **The 30-Minute Rule:**
   - Struggle productively for 30 minutes
   - If still stuck, ask AI for guidance (not solution)
   - If still stuck after another 30 minutes, ask for more direct help
   - This isn't about suffering - it's about knowing when to get help

3. **Remember:** You've built real applications before. You know more than you think. 
   You're just learning new vocabulary and tools for concepts you already understand.

### Proof It's Not Too Hard

You're building:
- Authentication (you've used this in apps before)
- CRUD operations (you've built these)
- File uploads (you've handled these)  
- A database (you've queried databases)
- Deployment (okay, this might be newer, but it's just moving files around)

**None of these are impossible.** You're just learning the AWS way of doing familiar things.

---

## Part 9: Optional Expansions (After MVP is Solid)

Only add these if the core is working AND you're still excited:

- Weekly email summary (teaches: scheduled jobs, email services)
- Search functionality (teaches: full-text search, query optimization)  
- Export data (teaches: data serialization, backup strategies)
- Simple API for other tools (teaches: API versioning, documentation)

---

## Part 10: Success Metrics

**You've succeeded when:**
- [ ] You're actually using Worklog to track your work
- [ ] It runs in production on AWS
- [ ] You can explain each architectural decision you made
- [ ] You can deploy a change without fear
- [ ] You understand the AWS services you're using (not just copy-pasted config)
- [ ] Your glossary has at least 20 terms in it
- [ ] You've practiced the full deployment pipeline multiple times
- [ ] You know where to look when things break

**This is not about perfection.** This is about building fluency.

---

## Part 11: Resources & Support

### When You Need Help Finding Information

**Python/Backend:**
- Official Python docs (your first stop)
- FastAPI/Flask docs (depending on what you pick)  
- Stack Overflow (for specific errors)

**AWS:**
- AWS documentation (dense but authoritative)
- AWS training modules (you're doing these anyway)
- "AWS in Plain English" guides (for cutting through AWS marketing speak)

**Database:**
- PostgreSQL docs (if using Postgres)
- "Use The Index, Luke" (query optimization)

**Deployment:**
- Your chosen CI/CD platform docs
- AWS deployment guides

**Architecture Patterns:**
- Martin Fowler's blog (architecture patterns explained clearly)
- "The Twelve-Factor App" (deployment best practices)

### When To Ask For Help vs. Figure It Out

**Figure it out yourself:**
- Syntax questions (docs will answer these)
- "How do I do X in Python?" (searchable)
- Configuring tools (follow the docs)

**Get help from AI:**
- "Should I use pattern X or Y here?" (needs context)
- "Why isn't this working?" (debugging partner)
- "What am I not considering?" (blind spots)

**Get help from humans:**
- "Is this approach reasonable?" (sanity check)
- "I've been stuck for days" (sometimes you need a different perspective)

---

## The Real Goal

**By the end of this project, you should be able to:**

1. Walk into a technical interview and discuss backend architecture decisions confidently
2. Look at an AWS bill and understand what you're paying for
3. Read documentation for a new service and map it to what you know
4. Explain trade-offs between different approaches
5. Deploy a change to production without holding your breath
6. Use the correct industry terminology for patterns you already understand
7. Know where to look when you don't know something

**That's what fluency looks like.**

Now go build something. 🤘

---

## Quick Start Checklist

Your first weekend:

- [ ] Create frontend project
- [ ] Build the "log an entry" form  
- [ ] Mock the data locally
- [ ] Make it pretty enough that you'd use it
- [ ] Actually log one real entry

Then come back to this plan for phase 1.

You've got this.
