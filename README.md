# heybauD

Portfolio of Christian E. Bausin, built with React, TypeScript, Vite, Tailwind CSS and React Router.

Live: https://bauchao-works.vercel.app

## Run it locally

```
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:5173).

## Edit the content

All text (profile, about, skills, education, experience, projects and case studies,
gallery, contact, SEO) lives in `src/data/content.ts`. No component changes needed.

Images go in `public/`:

- `public/images/profile.jpg`, then set `profile.photo`
- `public/images/projects/…`, then set each project's `image`
- `public/images/gallery/…`, then set each gallery item's `image` and `alt`
- `public/resume.pdf`, replace the placeholder with your resume

## Pages

| URL | File |
|---|---|
| `/` | `src/pages/Home.tsx` |
| `/about` | `src/pages/About.tsx` |
| `/experience` | `src/pages/Experience.tsx` |
| `/projects` and `/projects/:slug` | `src/pages/Projects.tsx`, `src/pages/ProjectDetail.tsx` |
| `/gallery` | `src/pages/Gallery.tsx` |
| `/contact` | `src/pages/Contact.tsx` |

## Deploy

Push to `main`. Vercel, Netlify and GitHub Pages each rebuild the site automatically
(`vercel.json`, `netlify.toml`, `.github/workflows/pages.yml`).
