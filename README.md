# mojashni.github.io

Personal portfolio of **Mohammad Karimi Jashni**: MEng ECE student at the University of Calgary and Software Developer Intern at SAGA Wisdom.

Live: https://mojashni.github.io

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Editing content

All content lives in [`assets/js/data.js`](assets/js/data.js): name, intro, experience, projects, skills, education and links. Edit that file and push.

- **Photo:** add `assets/img/me.jpg` and set `avatar: "assets/img/me.jpg"`.
- **Resume:** add `resume.pdf` next to `index.html` and set `resume: "resume.pdf"`.

## Structure

```
index.html            page skeleton
assets/css/style.css  styles (light/dark theme, responsive)
assets/js/data.js     all portfolio content
assets/js/main.js     renders the content
assets/favicon.svg
```

## Deploy on GitHub Pages

1. Create a public repository named exactly `mojashni.github.io`.
2. Push these files to the `main` branch.
3. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, then pick `main` and `/ (root)`.
4. The site is live at `https://mojashni.github.io` within a minute or two.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
