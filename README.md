# Cardinal Speed

A blog about car, bike, and motorcycle culture and design.

Live at: [https://cardinalspeed.github.io](https://cardinalspeed.github.io)

## File structure

```
index.html          — Home page
blog.html           — Blog index (all posts)
about.html          — About page
css/style.css       — Shared styles
site.js             — Loads shared nav/footer via fetch
includes/
  nav.html          — Shared navigation
  footer.html       — Shared footer
blog/
  post-template.html  — Copy this to create a new post
images/             — Drop post images here
```

## Publishing a new post

1. Copy `blog/post-template.html` → `blog/your-post-slug.html`
2. Fill in the title, meta description, date, category, and body content
3. Add a post card to both `index.html` and `blog.html`
4. Add any images to `images/` (compress before pushing)
5. `git add . && git commit -m "post: your post title" && git push origin main`

## Deploy

GitHub Pages serves automatically from `main`. Changes go live in ~1–2 minutes.
