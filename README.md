# Mirakuru

## Deploy to GitHub Pages

1. **Fork or clone this repo**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update the base path in `vite.config.js`**

   Change the `base` value to match your repo name:
   ```js
   base: '/your-repo-name/',
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages** (first time only)

   Go to your repo's **Settings > Pages**, set the source to **Deploy from a branch**, and select the `gh-pages` branch.

Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

## Development

```bash
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
```
