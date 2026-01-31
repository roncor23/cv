# Ronan Otaza - Portfolio Website

A modern, responsive portfolio website built with Nuxt 3, showcasing professional experience, skills, and education.

## Features

- 🎨 Modern, clean design with gradient hero section
- 📱 Fully responsive layout
- ⚡ Built with Nuxt 3 for optimal performance
- 🎯 Smooth scrolling navigation
- 💼 Complete work experience showcase
- 🎓 Education section
- 🛠️ Skills with proficiency levels
- 📧 Contact information

## Tech Stack

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter, Playfair Display)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── assets/
│   └── css/
│       └── main.css          # Global styles
├── components/
│   ├── NavBar.vue            # Navigation component
│   ├── Footer.vue             # Footer component
│   ├── ExperienceCard.vue     # Work experience card
│   ├── EducationCard.vue      # Education card
│   ├── SkillCard.vue          # Skill card with progress
│   └── ContactInfo.vue        # Contact information
├── layouts/
│   └── default.vue            # Default layout
├── pages/
│   └── index.vue              # Home page
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.js         # Tailwind configuration
└── package.json               # Dependencies
```

## Customization

- Update profile picture: Replace `/public/profile.jpg` with your actual profile image
- Modify content: Edit the data in `pages/index.vue`
- Change colors: Update Tailwind classes or modify `tailwind.config.js`

## Deployment

### GitHub Pages

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository → **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy when you push to `main`

3. **Your site will be available at:**
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME` (for project sites)
   - `https://YOUR_USERNAME.github.io` (if repo is named `username.github.io`)

See `DEPLOY.md` for detailed deployment instructions.

## License

MIT
