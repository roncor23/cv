# Deploying to GitHub Pages

This Nuxt portfolio can be deployed to GitHub Pages using GitHub Actions.

## Quick Setup

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
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy when you push to `main`

## Repository Name Options

### Option 1: User/Organization Site (username.github.io)
If your repository is named `username.github.io`:
- The site will be available at `https://username.github.io`
- The base URL is automatically set to `/`

### Option 2: Project Site (any other name)
If your repository has a different name:
- The site will be available at `https://username.github.io/repo-name`
- The base URL is automatically set to `/repo-name/`

## Manual Deployment

If you want to deploy manually:

```bash
# Build the static site
npm run generate

# The dist folder will contain your static site
# You can deploy the contents of dist/ to any static hosting service
```

## Custom Domain

To use a custom domain:
1. Add a `CNAME` file in the `public/` folder with your domain name
2. Configure DNS settings with your domain provider
3. The GitHub Actions workflow will automatically handle the CNAME file

## Troubleshooting

- **Images not loading?** Make sure all images are in the `public/` folder
- **404 errors?** Check that the `baseURL` in `nuxt.config.ts` matches your repository structure
- **Build fails?** Check the GitHub Actions logs in the **Actions** tab of your repository
