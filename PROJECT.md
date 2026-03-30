# Project Update

## Objective
Improve the website UI to a clean, professional light-theme experience and remove dark mode behavior from the active project templates.

## What Was Done

1. Removed dark mode toggle UI from the active navbar partial override.
2. Removed dark mode script logic from the active footer partial override.
3. Forced light theme at base layout level in project override templates.
4. Replaced emoji icons on homepage sections with consistent inline SVG icons.
5. Improved card/icon spacing, alignment, hover polish, and visual consistency.
6. Removed obsolete generated stylesheet file that still contained dark-mode selectors.
7. Updated color variable naming in static stylesheet for cleaner semantics.

## How It Was Done

- Added project-level Hugo template overrides (under `layouts/`) so theme behavior is controlled without editing upstream theme files.
- Created local overrides for:
  - `layouts/partials/header.html`
  - `layouts/partials/footer.html`
  - `layouts/partials/head.html`
  - `layouts/_default/baseof.html`
- Cleaned custom styling in:
  - `assets/css/extended/custom.css`
- Updated static stylesheet token naming in:
  - `static/css/main.css`
- Removed stale artifact:
  - `assets/css/stylesheet.a29c24210eb31d9ce56f669c66a35c9c51b17376b7764e336a49af7dec914cf0.css`

## Result

- Active UI now runs in light theme consistently.
- Navbar no longer shows moon/sun toggle.
- Theme toggle JavaScript is removed from active template overrides.
- Homepage iconography is professional and consistent.
- Visual style is cleaner and more SaaS-like with improved spacing and contrast.

## Notes

- This project is Hugo-based (PaperMod theme), not a React + Tailwind app.
- Changes were applied to active project overrides so upgrades to the upstream theme remain manageable.
