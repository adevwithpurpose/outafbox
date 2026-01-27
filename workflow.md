🚀 The "Freedom Model" Workflow (v2.0)
Project: OutOfBox (up.outafbox.com) Stack: Astro + TinaCMS (Local) + cPanel

1️⃣ Start Your Day (Development)
Open your terminal in VS Code and run:

PowerShell

npm run dev
View Site: http://localhost:4321

Edit Content (CMS): http://localhost:4321/admin/index.html (Note: Always use /index.html at the end for local Windows admin)

2️⃣ The "Save & Ship" Ritual
CRITICAL CHANGE: You must keep the server running while you build.

Step A: The "Two-Terminal" Build
Because your site fetches data from TinaCMS, the "Server" must be alive for the "Builder" to talk to it.

Terminal 1: Leave npm run dev running. DO NOT CLOSE IT.

Terminal 2: Open a New Terminal (Click + in VS Code).

Run the build command in the new terminal:

PowerShell

npm run build
✅ Check: Wait for the specific message ✓ Completed. If you see "Fetch Failed," it means Terminal 1 was closed.

Step B: Push to GitHub
Once the build finishes successfully, run these commands in Terminal 2:

PowerShell

git add .
git add dist -f
git commit -m "Fresh build and content update"
git push
(The -f forces Git to upload the dist folder, which cPanel needs).

3️⃣ Go Live (cPanel Deployment)
Log in to cPanel.

Go to Git™ Version Control.

Click Manage next to outafbox.

Go to the Pull or Deploy tab.

Action 1: Click Update from Remote (You must see your new commit message appear).

Action 2: Click Deploy HEAD Commit.

🟢 Green Bar = Success. Your changes are live at up.outafbox.com.

🆘 Troubleshooting
Error: "Fetch failed" during build

Cause: You stopped the dev server (npm run dev) before running npm run build.

Fix: Open two terminals. Run dev in one, and build in the other.

Error: Site didn't update after deployment

Cause: You likely pushed the code but forgot to update the dist folder.

Fix: Run npm run build, then git add dist -f, commit, and push again.