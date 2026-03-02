# OutAfBox — Growth Ecosystem Site

**Stack:** Astro 5 · Tailwind CSS v4 · TinaCMS (Local) · TypeScript  
**Hosting:** cPanel via Git Version Control  
**Output:** `static` (pre-rendered HTML, no server required)

---

## ⚡ Quick Start (Development)

```powershell
npm install
npm run dev
```

- **Site:** `http://localhost:3000`
- **CMS Admin:** `http://localhost:3000/admin/index.html`

---

## 🚨 Building for Production — Two-Terminal Required

> TinaCMS runs a local GraphQL API that pages fetch at build time.  
> The dev server **must be running** before you run the build.

```
Terminal 1 (keep running):   npm run dev
Terminal 2 (run the build):  npx astro build
```

Wait for Terminal 1 to show `✅ TinaCMS Dev Server is active` before running Terminal 2.

---

## 🚀 Push & Deploy to cPanel

```powershell
git add .
git add dist -f          # REQUIRED — cPanel deploys from dist/
git commit -m "Deploy: your message here"
git push origin main
```

Then in cPanel → **Git™ Version Control** → **Manage** → **Pull or Deploy** → **Deploy HEAD Commit**.

---

## 🔒 Before Making Risky Changes (Create a Backup Branch)

```powershell
git checkout -b backup/description-YYYY-MM-DD
git push origin backup/description-YYYY-MM-DD
git checkout main
```

---

## 🛠 Troubleshooting

| Error | Fix |
|-------|-----|
| `fetch failed` | Start `npm run dev` in Terminal 1 first |
| `Cannot use server-rendered pages without an adapter` | A page has `prerender = false` — convert it to `getStaticPaths()` |
| `EADDRINUSE :::3000` | Run `Stop-Process -Name node -Force` |
| Site didn't update on cPanel | Run `git add dist -f` before committing |

---

📖 **Full documentation:** [`PROJECT_DOCUMENTATION.md`](./PROJECT_DOCUMENTATION.md)
