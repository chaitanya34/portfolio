# Personal portfolio

Static site with no build step: `index.html`, `styles.css` and `script.js`.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

Put your résumé in this folder as `Chaitanya_Kotlapati_Resume_4_yoe.pdf` so the download buttons work.

## Deploy (free) with GitHub Pages

```sh
git init && git add . && git commit -m "Initial portfolio"
gh repo create <github-username>.github.io --public --source=. --push
```

Then go to the repo's Settings → Pages → Source: "Deploy from a branch", choose `main` and `/ (root)`.
The site goes live at `https://<github-username>.github.io` within a minute or two.

## Alternatives

- **Vercel / Netlify / Cloudflare Pages:** import the GitHub repo. No build command is needed, and the output directory is `/`.
- **Custom domain** (around ₹800–1000 a year, e.g. `chaitanya.dev`): add it in the host's domain settings, then add the DNS records it shows you at your registrar.
