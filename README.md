# Ji-Eun Han — Academic Website

A responsive personal academic website for Ji-Eun Han, adapted from the MIT-licensed [Athena Personal Academic Page](https://github.com/AaronZ345/Athena-personal-academic-page). It preserves Athena's clean, publication-first design and content-first organization while using a custom navy visual system.

## Local development

Requires Node.js 22 or later.

```bash
pnpm install
pnpm dev
```

Open the local URL printed in the terminal. Run `pnpm build` to create the production site in `dist/`.

## Editing content

Most text and links live in `src/content.js`:

- `profile`: bio, contact links, research interests, and CV path
- `news`: recent updates, newest first
- `publications`: authors, venue, paper and code links, contribution notes
- `experience`: research roles and project details
- `education` and `internationalExperience`: academic history
- `awards`: honors and scholarships

Layout components are in `src/App.jsx`; the visual system and responsive rules are in `src/styles.css`.

## Personal assets to replace

- Add a portrait to `public/images/` and set `profile.photo` in `src/content.js`.
- Replace the lettermark blocks with licensed official institution logo image files when available.
- Add the confirmed LinkedIn URL to `profile.linkedin`.
- Add paper URLs for SciGraphSelect, CulturePRM, and Fluency Matters.
- Confirm whether public links should include GitHub, Google Scholar, ORCID, or Semantic Scholar.

## GitHub Pages deployment

1. Create a repository named `USERNAME.github.io` for an account homepage, or use any repository name for a project site.
2. Push this project to the `main` branch.
3. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the source.
4. The included workflow builds and deploys the site. The Vite base path is selected automatically for both user and project sites.

## License

The Athena-derived code remains available under the MIT License. See `LICENSE` and the original [Athena repository](https://github.com/AaronZ345/Athena-personal-academic-page).
