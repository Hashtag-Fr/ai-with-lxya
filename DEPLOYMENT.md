# Quick Deployment Guide

## Step 1: Replace the Current Homepage

```powershell
# Backup your current design
Copy-Item layouts\index.html layouts\index-backup.html

# Use the new modern design
Copy-Item layouts\index-new.html layouts\index.html
```

## Step 2: Add Blog Images

Create or download images for your blog posts and save them in `static/images/`:

Required images:
- `ai-tools-2026.jpg` (800x600px)
- `n8n-automation.jpg` (800x600px)
- `dev-tools.jpg` (800x600px)
- `make-money-ai.jpg` (800x600px)

### Quick Solution: Using Placeholder Services

While you prepare your images, temporarily use placeholder URLs by editing `index.html`:

```html
<!-- Replace -->
<img src="/images/ai-tools-2026.jpg" alt="...">

<!-- With -->
<img src="https://via.placeholder.com/800x600/6366F1/FFFFFF?text=AI+Tools" alt="...">
```

Or use Unsplash for real photos:
```html
<img src="https://source.unsplash.com/800x600/?ai,technology" alt="...">
```

## Step 3: Test Locally

### Using Hugo (Recommended)

```powershell
hugo server -D
```

Then open: http://localhost:1313

### Using Python

```powershell
cd public
python -m http.server 8000
```

Then open: http://localhost:8000

### Using Node.js/npx

```powershell
cd public
npx http-server -p 8000
```

Then open: http://localhost:8000

## Step 4: Customize Content

### Update Blog Posts

Edit `layouts/index.html` and modify the blog card sections:

1. Find the `.blog-card` elements
2. Update titles, descriptions, and links
3. Match with your actual blog posts

### Update About Section

Find the `.about-text` section and update with your information.

### Update Contact Email

Find the `.contact-detail-item` and update the email address.

### Add Your Social Media Links

Find the `.social-icons` section and update href attributes:

```html
<a href="https://twitter.com/yourusername" aria-label="Twitter" class="social-icon">
```

## Step 5: Deploy

### Option A: GitHub Pages

```powershell
# Build the site
hugo

# Commit changes
git add .
git commit -m "Deploy modern blog design"
git push origin main
```

### Option B: Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `hugo`
3. Set publish directory: `public`
4. Deploy!

### Option C: Vercel

1. Install Vercel CLI:
   ```powershell
   npm install -g vercel
   ```

2. Deploy:
   ```powershell
   vercel
   ```

## Step 6: Post-Deployment Checks

1. ✅ Test all navigation links
2. ✅ Verify images load correctly
3. ✅ Test forms (newsletter and contact)
4. ✅ Check mobile responsiveness
5. ✅ Test on different browsers
6. ✅ Verify social media links work
7. ✅ Check page load speed (aim for < 3 seconds)

## Performance Optimization

### Compress Images

```powershell
# Install TinyPNG CLI (optional)
npm install -g tinypng-cli

# Compress images
tinypng static/images/*.jpg -k YOUR_API_KEY
```

### Minify CSS and JS (Production Only)

For production deployment, minify your CSS and JS files:

```powershell
# Install clean-css-cli and uglify-js
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o static/css/main.min.css static/css/main.css

# Minify JS
uglifyjs static/js/main.js -o static/js/main.min.js

# Update HTML to use minified versions
# <link rel="stylesheet" href="/css/main.min.css">
# <script src="/js/main.min.js"></script>
```

## Troubleshooting

### Hugo Build Errors

If Hugo gives errors, ensure your `hugo.toml` configuration is correct and all required directories exist.

### CSS Not Loading

Check that paths are correct:
- File location: `/static/css/main.css`
- HTML reference: `/css/main.css` (without 'static')

### JavaScript Not Working

1. Open browser console (F12)
2. Check for errors
3. Ensure script tag is before closing `</body>` tag

### Images Not Showing

Hugo serves files from `/static/` as root. So:
- File: `/static/images/photo.jpg`
- HTML: `<img src="/images/photo.jpg">`

## Need Help?

- Check WEBSITE-README.md for detailed documentation
- Review browser console for errors
- Test in incognito mode to avoid cache issues
- Clear Hugo cache: `hugo --gc`

---

**You're all set! 🚀**

Your modern AI blog is ready to go live.
