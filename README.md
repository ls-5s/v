# Nuxt 4 Full Stack Starter

A minimal Nuxt 4 starter template with full-stack capabilities, ready for Vercel deployment.

## 📁 Directory Structure

- **app/**: Frontend application logic (pages, components, layouts)
- **server/**: Backend logic (API routes, middleware)
- **public/**: Static assets

## 🚀 Standard Command List

Use these commands to develop, build, and deploy your application.

### 1. Setup

Install dependencies before starting.

```bash
npm install
```

### 2. Development

Start the local development server with hot-module replacement.

```bash
npm run dev
```
> Server runs at: http://localhost:3000

### 3. Production Build & Preview

To verify your application works in a production-like environment (recommended before deployment):

```bash
# Step 1: Build the application
npm run build

# Step 2: Preview the build locally
npm run preview
```
> **Note:** Always run `npm run build` before `npm run preview`.
> The preview server usually runs at: http://localhost:3000

### 4. Deployment (Vercel)

#### Option A: Vercel CLI (Recommended for testing)
```bash
npm i -g vercel
vercel
```

#### Option B: Git Integration
Push to GitHub/GitLab and import into Vercel.

## ❓ Troubleshooting Vercel Deployment

If your deployment fails or the site is inaccessible despite working locally:

1. **Check Build Logs**: Look for errors in the Vercel dashboard logs.
2. **Verify Settings**:
   - Framework Preset: `Nuxt.js`
   - Build Command: `nuxt build`
   - Output Directory: `(empty)` or `.output/public`
3. **Clear Cache**: Use the "Redeploy" -> "Clear build cache and redeploy" option in Vercel.
4. **Nitro Preset**: This project explicitly uses `nitro.preset: 'vercel'` in `nuxt.config.ts` for better compatibility.

## 📚 Documentation

- [Nuxt Documentation](https://nuxt.com/docs)
- [Vercel Deployment](https://nuxt.com/docs/getting-started/deployment)
