# Cardinal Speed — Project Context

## The brand
Cardinal Speed is a blog and brand built around things with wheels: cars, motorcycles, bicycles, and the tangential topics that connect to them — art, design, photography, fashion. The goal is to share experiences and knowledge, inspire people to pursue their own projects, and grow an Instagram following (@cardinal.speed) as the primary measure of success.

## About me
BFA in painting, MFA in Industrial Design. About 20 years in the bicycle industry, including running my own fabrication business. I fix broken things, solve problems, and approach everything as an artist by training and temperament.

## The site
- Live at: cardinalspeed.com
- Hosted on GitHub Pages
- Built with Jekyll (static site generator)
- Repo: github.com/cardinal-/cardinalspeed.github.io
- Local repo path: ~/Documents/Matt Cardinal/04-Projects/cardinalspeed.github.io

## Tech stack
- Jekyll with GitHub Pages (builds automatically on push)
- Google Fonts: Big Shoulders Display 700 (headings), Inter 400/500/600 (body)
- Google Analytics: G-VT9F381F90
- No JavaScript frameworks

## File structure
```
cardinalspeed.github.io/
├── _config.yml
├── _layouts/
│   ├── default.html      — base template (nav, footer, GA)
│   └── post.html         — blog post template
├── _includes/
│   ├── nav.html          — shared navigation
│   └── footer.html       — shared footer with Instagram + Etsy icons
├── _posts/               — blog posts as Markdown files
├── css/
│   └── style.css         — all styles
├── images/               — photos, logo, favicon
├── index.html            — homepage (placeholder with hero image)
├── blog.html             — blog index (auto-populated by Jekyll)
├── about.html            — about page
└── CNAME                 — cardinalspeed.com
```

## Publishing a new post
1. Write the post as a Markdown file named: YYYY-MM-DD-post-slug.md
2. Place it in _posts/
3. Front matter format:

---
layout: post
title: "Post Title"
date: YYYY-MM-DD
category: Cars | Motorcycles | Bikes | Culture
summary: One sentence for the blog index.
intro: One or two sentence lede shown at the top of the post.
---

4. Images go in /images/ and are referenced as /images/filename.jpg in the post
5. Commit and push — blog index updates automatically

## Git workflow
```bash
cd ~/Documents/Matt\ Cardinal/04-Projects/cardinalspeed.github.io
git add .
git commit -m "description of change"
git push origin main
```
If push is rejected: git pull origin main first, then push again.
If vim opens for a merge message: press Escape, type :wq, hit Enter.

## Writing rules (apply to all content)
- Simple vocabulary by default, with occasional flourish where it earns its place
- Never use em dashes
- Never use the words "honestly" or "genuinely"
- Keep writing grounded and direct

## Social + shop
- Instagram: @cardinal.speed (instagram.com/cardinal.speed)
- Etsy: etsy.com/shop/cardinalspeed
- Both linked in the site footer as SVG icons

## Design decisions made
- Nav and footer background: #E4E2DE
- Post category colors: Cars (#E6F1FB/#0C447C), Motorcycles (#FAECE7/#993C1D), Bikes (#EAF3DE/#3B6D11), Culture (#EEEDFE/#3C3489)
- Body text: Inter 400, 16px, line-height 1.75
- Post titles: Big Shoulders Display 700, 52px
- Card titles on blog index: Inter 600, 16px
- Footer: sticky, icons at 24px grey fill (#aaa), hover darkens to #555

## Jekyll notes
- WORKFLOW.md must stay in the exclude list in _config.yml or it breaks the build
- Nav links use paths without .html (e.g. /blog not /blog.html)
- Jekyll strips .html from URLs automatically
