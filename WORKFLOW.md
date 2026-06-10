# Cardinalspeed — Site Workflow

## Overview

This site is built with Jekyll and hosted on GitHub Pages at cardinalspeed.com.
The repo lives at: `~/Documents/Matt Cardinal/04-Projects/cardinalspeed.github.io`

The general workflow is:
1. Use Claude to write or update code
2. Preview changes locally with VS Code Live Server
3. Once satisfied, commit and push to GitHub

---

## Step 1 — Open the repo in VS Code

Open VS Code, then open the folder:
`File → Open Folder → Documents/Matt Cardinal/04-Projects/cardinalspeed.github.io`

---

## Step 2 — Start Live Server for local preview

Live Server lets you preview the site in a browser without pushing to GitHub.

1. In VS Code, right-click `index.html` in the file explorer
2. Select **Open with Live Server**
3. Your browser will open at `http://127.0.0.1:5500`

> **Note:** Jekyll Liquid tags (`{% %}`, `{{ }}`) won't render in Live Server —
> it's plain HTML only. To preview Jekyll-specific features (blog index, post
> layouts), you need to push to GitHub and check cardinalspeed.com directly.
> For CSS, layout, and content changes, Live Server is fine.

---

## Step 3 — Make changes with Claude

Describe what you want to change to Claude. Claude will produce updated file
content. Copy the output into the relevant file in VS Code and save (`Cmd + S`).
Live Server will reload the browser automatically.

### Common things to ask Claude:
- "Update the CSS in `css/style.css` to..."
- "Write a new blog post about X and format it as a Jekyll post"
- "Add a new section to `about.html`"
- "Update the nav in `_includes/nav.html` to include a Shop link"

---

## Step 4 — Commit and push to GitHub

Once changes look good in the browser, open Terminal and navigate to the repo:

```bash
cd ~/Documents/Matt\ Cardinal/04-Projects/cardinalspeed.github.io
```

Then run:

```bash
git add .
git commit -m "brief description of what changed"
git push origin main
```

GitHub Pages will rebuild the site automatically. Changes go live at
cardinalspeed.com within 1–2 minutes.

Check the **Actions** tab on GitHub to confirm the build succeeded:
`github.com/cardinal-/cardinalspeed.github.io → Actions`

---

## Publishing a new blog post

1. Ask Claude to write the post in Jekyll Markdown format
2. Save the file to `_posts/` with this naming format: `YYYY-MM-DD-post-slug.md`
3. Commit and push — the blog index at `/blog.html` updates automatically

Example filename: `2026-07-15-honda-super-cub.md`

Each post file starts with front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-07-15
category: Motorcycles
summary: One sentence that appears in the blog index.
intro: One or two sentence lede shown at the top of the post.
---

Post body starts here...
```

---

## File structure reference

```
cardinalspeed.github.io/
├── _config.yml          — Jekyll settings
├── _layouts/
│   ├── default.html     — Base template (nav, footer, GA)
│   └── post.html        — Blog post template
├── _includes/
│   ├── nav.html         — Shared navigation
│   └── footer.html      — Shared footer
├── _posts/              — Blog posts (Markdown files)
├── css/
│   └── style.css        — All styles
├── images/
│   ├── hero.jpg         — Homepage background
│   └── logo.svg         — Site logo
├── index.html           — Homepage (placeholder)
├── blog.html            — Blog index
├── about.html           — About page
├── favicon.png          — Browser tab icon
└── CNAME                — Custom domain (cardinalspeed.com)
```

---

## Tips

- Always `cd` into the correct repo folder before running git commands
- The repo path has a space in it — use `Matt\ Cardinal` in Terminal
- `.DS_Store` files are gitignored automatically
- If a push is rejected, run `git pull origin main` first, then push again
- Live Server won't show the hero background image (fetch restriction) —
  push to GitHub to verify image changes
