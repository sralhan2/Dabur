# Nerve Center — Dabur Supply Chain Control Tower (prototype)

React + Vite. Illustrative mock data modeled on Dabur's public category and
plant footprint — not real operating figures.

Modules: Command Center, Perfect Order (OTIF), Network Pulse, Quality Watch,
Demand-Supply reconciliation.

## Run locally
```
npm install
npm run dev
```

## Deploy to Vercel

**Option A — no GitHub needed**
1. Install the CLI once: `npm i -g vercel`
2. From this folder: `vercel` (first deploy) then `vercel --prod`
3. Follow the prompts — accept the defaults (Vite is auto-detected)

**Option B — via GitHub**
1. Push this folder to a new GitHub repo
2. In Vercel: New Project → import the repo → deploy (no config needed,
   Vercel detects Vite automatically: build command `npm run build`,
   output directory `dist`)

No environment variables required.
