# Blog Post Front-Matter Template

Use this template when creating new blog posts to ensure proper thumbnail images, SEO, and formatting.

## Example Front-Matter

```markdown
+++
title = "Your Post Title Here"
date = "2026-03-07"
draft = false
description = "A compelling meta description (150-160 characters) that appears in search results and social media."
tags = ["AI tools", "automation", "productivity"]
categories = ["AI Tools"]
author = "Lxya"

# Cover Image (CRITICAL for proper blog grid display)
[cover]
image = "/images/your-post-image.jpg"  # Or use external URL from Unsplash
alt = "Descriptive alt text for accessibility"
caption = "Optional caption text"
relative = false  # Set to true if using page bundle resources

# Display Settings
ShowToc = true          # Show table of contents
TocOpen = false         # TOC collapsed by default
ShowReadingTime = true  # Display reading time
ShowShareButtons = true # Social sharing buttons
ShowBreadCrumbs = true  # Breadcrumb navigation
+++
```

## Where to Get Images

### Option 1: Local Images (Recommended for branding)
1. Add images to `/static/images/` folder
2. Reference as: `image = "/images/filename.jpg"`
3. Optimize images before uploading (max 1200px width, webP format preferred)

### Option 2: Unsplash (Quick & Free)
Use Unsplash URLs directly:
```toml
[cover]
image = "https://images.unsplash.com/photo-1234567890?w=800&h=500&fit=crop&q=80"
```

Popular Unsplash searches for AI blog:
- AI: `https://unsplash.com/s/photos/artificial-intelligence`
- Technology: `https://unsplash.com/s/photos/technology`
- Coding: `https://unsplash.com/s/photos/programming`
- Automation: `https://unsplash.com/s/photos/automation`
- Futuristic: `https://unsplash.com/s/photos/futuristic-technology`

### Option 3: Generated AI Images
1. Use Midjourney, DALL-E, or Stable Diffusion
2. Save to `/static/images/`
3. Reference as local image

## Example Complete Post

```markdown
+++
title = "10 AI Tools That Will Transform Your Workflow in 2026"
date = "2026-03-07"
draft = false
description = "Discover the most powerful AI tools for automation, productivity, and content creation. Tested and reviewed for real-world use."
tags = ["AI tools", "productivity", "automation", "workflow"]
categories = ["AI Tools"]
author = "Lxya"

[cover]
image = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80"
alt = "Futuristic AI technology interface"
caption = "The future of AI tools is here"
relative = false

ShowToc = true
TocOpen = false
ShowReadingTime = true
ShowShareButtons = true
ShowBreadCrumbs = true
+++

## Introduction

Start with a compelling hook that explains why this post matters...

## Tool 1: Name

Description of the tool...

### Key Features
- Feature 1
- Feature 2
- Feature 3

### Pricing
Free tier available / $X per month

## Conclusion

Wrap up with actionable takeaways...
```

## Required Fields

- ✅ `title` - SEO-friendly, descriptive
- ✅ `date` - YYYY-MM-DD format
- ✅ `description` - 150-160 characters
- ✅ `cover.image` - **Critical for blog grid display**
- ✅ `tags` - 3-5 relevant tags
- ✅ `categories` - Choose from: AI Tools, Coding, Automation, Make Money, Tech News

## Optional Fields

- `author` - Defaults to site author
- `cover.alt` - For accessibility
- `cover.caption` - Appears below image
- `ShowToc` - Table of contents toggle
- `draft` - Set to `false` to publish

## Categories

Use these consistent categories:
- **AI Tools** - Tool reviews and comparisons
- **Coding** - Development and programming
- **Automation** - Workflow automation guides
- **Make Money** - Monetization strategies
- **Tech News** - Weekly roundups and trends

## Tips for Better Thumbnails

1. **Aspect Ratio**: Use 16:9 (e.g., 1200x675px)
2. **File Size**: Keep under 200KB for fast loading
3. **Relevance**: Choose images that relate to content
4. **Consistency**: Use similar style across posts
5. **Text Overlay**: Avoid images with too much text

## Command to Create New Post

```bash
hugo new posts/your-post-slug.md
```

Then edit the front-matter using this template!
