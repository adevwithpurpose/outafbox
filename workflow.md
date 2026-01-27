🚀 The "Freedom Model" Workflow
Project: OutOfBox (up.outafbox.com) Stack: Astro + TinaCMS (Local) + cPanel

1️⃣ Start Your Day (Development)
Open your terminal in the project folder and run:

PowerShell

npm run dev
View Site: http://localhost:4321

Edit Content (CMS): http://localhost:4321/admin/index.html (Note: Always use /index.html at the end for local Windows admin)

2️⃣ The "Save & Ship" Ritual
When you are happy with your changes (new content or code), follow this exact sequence.

Step A: Build the Site
You must convert your dynamic Astro code into static HTML files for cPanel. (Stop the dev server with Ctrl + C first if needed)

PowerShell

npm run build
✅ Check: Ensure a dist folder was created or updated.

Step B: Push to GitHub
We force-add the dist folder to ensure the live site files are uploaded.

PowerShell

git add .
git add dist -f
git commit -m "Update site content"
git push
3️⃣ Go Live (cPanel Deployment)
Log in to cPanel.

Go to Git™ Version Control.

Click Manage next to outafbox.

Go to the Pull or Deploy tab.

Click: Update from Remote (Updates the code from GitHub).

Click: Deploy HEAD Commit (Copies the dist files to public_html).

🟢 Green Bar = Success. Your changes are live at up.outafbox.com.