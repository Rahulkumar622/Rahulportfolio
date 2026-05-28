# Rahul Kumar — Portfolio Website

A premium, modern personal portfolio built with React + Vite + Tailwind CSS.

## Features
- ✅ Dark futuristic theme with glassmorphism
- ✅ Animated particle background (canvas)
- ✅ Typing animation in Hero
- ✅ Scroll reveal animations
- ✅ Animated skill progress bars
- ✅ Project cards with live demo links
- ✅ Timeline experience layout
- ✅ Contact form (Formspree)
- ✅ Scroll progress indicator
- ✅ Back-to-top button
- ✅ Loading screen
- ✅ Mobile responsive + hamburger menu
- ✅ Sticky glass navbar

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Netlify

1. Push to GitHub
2. Connect repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Deploy to Vercel

```bash
npx vercel
```

## Contact Form Setup

1. Go to https://formspree.io and create a free account
2. Create a new form and copy the form ID
3. In `src/components/Contact.jsx`, replace `YOUR_FORM_ID` with your actual ID:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```

## Resume

Place your resume PDF at `public/resume.pdf` so the Download Resume button works.

## Customization

- **Colors**: Edit `src/index.css` CSS variables (--color-primary etc.)
- **Content**: Edit each component in `src/components/`
- **Fonts**: Change Google Fonts link in `index.html`
