# Blog Post Front-Matter Guide

## Perfect Post Template

This guide shows you how to create properly formatted blog posts that work perfectly with the AI With Lxya theme.

---

## 📝 TOML Format (Recommended)

```toml
+++
title = "How to Transform Your Workflow with AI Tools"
date = "2026-03-08"
draft = false
description = "Discover practical strategies to integrate AI tools into your daily workflow and boost productivity by 3x. Real examples included."
summary = "Learn how to leverage AI tools to automate repetitive tasks, enhance creativity, and build smarter workflows."

# Author Information
author = "Lxya"

# SEO - IMPORTANT for visibility
tags = ["AI tools", "productivity", "automation", "workflow", "efficiency"]
categories = ["AI Tools", "Productivity"]
keywords = ["AI workflow", "productivity tools", "automation", "AI assistant", "work efficiency"]

# Cover Image - USE ABSOLUTE URLS
[cover]
image = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop&q=80"
alt = "AI tools transforming workflow visualization"
caption = "Boost your productivity with AI-powered workflows"
relative = false  # MUST be false for external images

# Display Settings
ShowToc = true
TocOpen = false
ShowReadingTime = true
ShowShareButtons = true
ShowPostNavLinks = true
ShowBreadCrumbs = true
ShowCodeCopyButtons = true

# Homepage Display
[params]
hiddenInHomeList = false
+++

Your blog content goes here...
```

---

## 📋 YAML Format (Alternative)

```yaml
---
title: "Top 10 AI Tools Every Developer Should Know in 2026"
date: 2026-03-08
draft: false
description: "Comprehensive guide to the best AI development tools in 2026. Speed up coding, debugging, and deployment with these powerful tools."
summary: "Curated list of AI tools that will supercharge your development workflow with practical examples."

author: "Lxya"

# SEO Configuration
tags:
  - AI tools
  - coding
  - developers
  - productivity
  - technology
  - software development

categories:
  - Coding
  - AI Tools

keywords:
  - AI coding tools
  - developer productivity
  - code assistants
  - AI for developers

# Cover Image Configuration
cover:
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop&q=80"
  alt: "Developer using AI coding tools at workstation"
  caption: "AI-powered development tools in action"
  relative: false

# Display Options
ShowToc: true
TocOpen: false
ShowReadingTime: true
ShowShareButtons: true
ShowPostNavLinks: true
ShowBreadCrumbs: true
ShowCodeCopyButtons: true

# Additional Parameters
params:
  hiddenInHomeList: false
  featured: false
---

Your content starts here...
```

---

## 🖼️ Finding Good Cover Images

### Recommended Image Sources

1. **Unsplash** (Free, High-Quality)
   - URL Format: `https://images.unsplash.com/photo-{ID}?w=1200&h=630&fit=crop&q=80`
   - Recommended dimensions: 1200x630 (Open Graph standard)
   - Example: `https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop&q=80`

2. **Pexels** (Free, No Attribution Required)
   - `https://images.pexels.com/photos/{ID}/...`

3. **Custom Images**
   - Upload to `/static/images/` folder
   - Use: `image = "/images/my-post-cover.jpg"`
   - Make sure to set `relative = true`

### Image URL Parameters

```
?w=1200        # Width in pixels
&h=630         # Height in pixels (use 1200x630 for social sharing)
&fit=crop      # Crop to exact dimensions
&q=80          # Quality (80 is good balance)
```

---

## ✅ Required Fields Checklist

### Minimum Requirements

- [ ] `title` - Clear, descriptive title (50-60 characters)
- [ ] `date` - Publication date (YYYY-MM-DD format)
- [ ] `draft` - Set to `false` to publish
- [ ] `description` - SEO meta description (150-160 characters)
- [ ] `cover.image` - Absolute URL to cover image
- [ ] `categories` - At least one category

### Recommended Fields

- [ ] `summary` - Brief summary for cards (120 characters)
- [ ] `tags` - 3-5 relevant tags
- [ ] `author` - Your name
- [ ] `cover.alt` - Image alt text for accessibility
- [ ] `keywords` - Additional SEO keywords
- [ ] `ShowToc` - Enable table of contents for long posts

---

## 🎨 Category & Tag Guidelines

### Standard Categories

```toml
categories = ["AI Tools"]       # For AI tool reviews
categories = ["Automation"]     # For workflow automation guides
categories = ["Coding"]         # For development tutorials
categories = ["Make Money"]     # For monetization strategies
categories = ["Tech News"]      # For weekly roundups
categories = ["Productivity"]   # For productivity tips
```

### Effective Tags

```toml
# Good: Specific and searchable
tags = ["ChatGPT", "GitHub Copilot", "AI assistants", "productivity"]

# Bad: Too generic
tags = ["AI", "technology", "tools"]
```

**Best Practices:**
- Use 3-5 tags per post
- Mix broad and specific tags
- Include tool names when relevant
- Use lowercase for consistency

---

## 🔗 Post URL Structure

Hugo automatically generates URLs from your filename:

```
content/posts/ai-tools-2026.md → /blog/ai-tools-2026/
content/posts/make-money-with-ai.md → /blog/make-money-with-ai/
```

**Best Practices:**
- Use lowercase filenames
- Separate words with hyphens
- Keep URLs short and descriptive
- Avoid dates in URLs (use front-matter date instead)

---

## 📊 SEO Optimization Examples

### Good SEO Front-Matter

```toml
title = "7 Free AI Tools That Will Change Your Life in 2026"
description = "Discover 7 powerful free AI tools that boost productivity, automate tasks, and save time. Tested and reviewed with real examples."
tags = ["free AI tools", "productivity", "automation", "AI software"]
keywords = ["free AI tools 2026", "best AI apps", "productivity software", "AI for beginners"]

[cover]
image = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop&q=80"
alt = "Collection of AI tools on laptop screen showing productivity dashboard"
```

**Why This Works:**
- Title has year for timeliness
- Description is action-oriented
- Tags include "free" which is highly searched
- Alt text is descriptive for SEO and accessibility

### Bad SEO Example

```toml
title = "AI Tools"  # Too vague
description = ""  # Missing!
tags = ["AI"]  # Too generic
keywords = []  # Missing!

[cover]
image = "/image.jpg"  # Broken path
alt = ""  # Missing!
```

---

## 🚀 Quick Start Templates

### Tutorial Post

```toml
+++
title = "How to Build an AI-Powered Chatbot in 30 Minutes"
date = "2026-03-08"
draft = false
description = "Step-by-step tutorial on creating your first AI chatbot using Python and OpenAI API. No prior experience needed."
tags = ["tutorial", "chatbot", "Python", "OpenAI", "AI development"]
categories = ["Coding", "AI Tools"]

[cover]
image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop&q=80"
alt = "Code editor showing Python chatbot tutorial"
relative = false

ShowToc = true
ShowCodeCopyButtons = true
+++
```

### Product Review

```toml
+++
title = "ChatGPT Pro vs Claude Opus: Which AI Assistant Wins in 2026?"
date = "2026-03-08"
draft = false
description = "Detailed comparison of ChatGPT Pro and Claude Opus. Features, pricing, performance, and real-world testing results."
tags = ["ChatGPT", "Claude", "AI comparison", "AI assistants", "review"]
categories = ["AI Tools", "Tech News"]

[cover]
image = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop&q=80"
alt = "Side-by-side comparison of ChatGPT and Claude interfaces"
relative = false

ShowToc = true
ShowReadingTime = true
ShowShareButtons = true
+++
```

### Weekly Roundup

```toml
+++
title = "Top AI Tools This Week - March 2026 Edition"
date = "2026-03-08"
draft = false
description = "Weekly roundup of the hottest new AI tools, updates, and releases. Stay ahead with the latest in artificial intelligence."
tags = ["AI tools", "tech news", "weekly roundup", "new releases"]
categories = ["Tech News"]

[cover]
image = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop&q=80"
alt = "Weekly AI tools roundup featuring latest releases"
relative = false

ShowToc = true
ShowReadingTime = true
+++
```

### Money-Making Guide

```toml
+++
title = "How I Made $5,000 in One Month Using AI Tools"
date = "2026-03-08"
draft = false
description = "Real case study showing how to earn money with AI tools. Includes strategies, tools used, and exact income breakdown."
tags = ["make money", "AI business", "freelancing", "side hustle", "income"]
categories = ["Make Money"]

[cover]
image = "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?w=1200&h=630&fit=crop&q=80"
alt = "Freelancer working with AI tools showing income dashboard"
relative = false

ShowToc = true
ShowReadingTime = true
+++
```

---

## ⚡ Common Issues & Fixes

### Issue 1: Image Not Showing

**Problem:**
```toml
[cover]
image = "image.jpg"  # ❌ Relative path without proper config
```

**Solution:**
```toml
[cover]
image = "https://images.unsplash.com/photo-xxx?w=1200&h=630&fit=crop&q=80"  # ✅ Absolute URL
# OR
image = "/images/my-image.jpg"  # ✅ Root-relative path
relative = true  # ✅ Required for root-relative paths
```

### Issue 2: Post Not Showing on Homepage

**Problem:**
```toml
draft = true  # ❌ Still in draft mode
# OR
date = "2027-03-08"  # ❌ Future date
```

**Solution:**
```toml
draft = false  # ✅ Published
date = "2026-03-08"  # ✅ Current or past date
```

### Issue 3: Missing Category Badge

**Problem:**
```toml
categories = []  # ❌ Empty
```

**Solution:**
```toml
categories = ["AI Tools"]  # ✅ At least one category
```

### Issue 4: Poor Search Visibility

**Problem:**
```toml
description = ""  # ❌ Missing
tags = []  # ❌ Empty
```

**Solution:**
```toml
description = "Clear, compelling description with keywords"  # ✅
tags = ["specific", "searchable", "keywords"]  # ✅
keywords = ["additional", "SEO", "terms"]  # ✅
```

---

## 📝 Creating Your First Post

### Step 1: Create File

```bash
# In your terminal
hugo new posts/my-first-ai-tool-review.md
```

### Step 2: Edit Front-Matter

Open the file and update the front-matter using this template:

```toml
+++
title = "My Awesome AI Tool Review"
date = "2026-03-08"
draft = false
description = "Comprehensive review of [Tool Name] with real-world testing and examples."
tags = ["AI tools", "review", "productivity"]
categories = ["AI Tools"]

[cover]
image = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop&q=80"
alt = "Description of your cover image"
relative = false

ShowToc = true
ShowReadingTime = true
+++
```

### Step 3: Write Content

Add your article content below the `+++` markers.

### Step 4: Preview

```bash
hugo server -D
```

Visit `http://localhost:1313` to preview.

### Step 5: Publish

```bash
# Build site
hugo

# Commit and push to GitHub
git add .
git commit -m "Add new post: My Awesome AI Tool Review"
git push
```

---

## 🎯 Best Practices Summary

1. **Always use absolute URLs for external images**
2. **Write descriptive titles (50-60 characters)**
3. **Craft compelling descriptions (150-160 characters)**
4. **Use 3-5 relevant tags**
5. **Choose appropriate categories**
6. **Add meaningful alt text for images**
7. **Enable table of contents for long posts**
8. **Set draft=false when ready to publish**
9. **Use consistent date format (YYYY-MM-DD)**
10. **Include author name**

---

## 📚 Additional Resources

- **Hugo Documentation**: https://gohugo.io/content-management/front-matter/
- **Markdown Guide**: https://www.markdownguide.org/
- **SEO Best Practices**: https://moz.com/beginners-guide-to-seo
- **Image Optimization**: https://developers.google.com/speed/docs/insights/OptimizeImages

---

**Need Help?** Check the [UI-UX-AUDIT-REPORT.md](UI-UX-AUDIT-REPORT.md) for more detailed information on the site structure and design.
