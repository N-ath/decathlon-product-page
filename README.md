# Decathlon product page · Vitamin Web

A single product page (hiking backpack 30 L) built entirely with Decathlon's **Vitamin Web** design system: its CSS components, design tokens, Roboto type and Vitamix icon font. Plain HTML, CSS and JavaScript, with no build step.

## Run it

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## What's inside

```
index.html                      the page: markup, page-layout CSS, interaction script
vitamin/components/bundle.css   Vitamin component stylesheet (loads Roboto from Google Fonts)
vitamin/tokens.css              Vitamin tokens as CSS variables (light + dark), Vitamix @font-face
vitamin/fonts/vitamix.woff2     Vitamix icon font
assets/product-placeholder.svg  placeholder product image
```

`vitamin/tokens.css` is generated from the design system's `tokens.json`. Colours resolve the per-theme H/S/L channels in `bundle.css`, so the page follows `data-theme="light"` / `"dark"` on `<html>`.

## Components used (all 31)

Accordion, Alert, Badge, Breadcrumb, Button, Card, Checkbox, Chip, Divider, Dropdown, Link, List, Loader, Modal, Navbar, Popover, Price, Progressbar, Quantity, RadioButton, Rating, Search, Select, Skeleton, Snackbar, Tabs, Tag, TextInput, Toast, Toggle, Tooltip.

## Interactions

- Colour chips, photo thumbnails, quantity stepper and tabs (arrow keys supported)
- **Add to cart**: loader, then a toast and an updated cart badge
- **Wishlist**: heart icon swap and a snackbar with Undo
- **Size guide**: modal
- **Newsletter**: success alert
- Light / dark theme switch in the footer

Alerts, toasts and snackbars stay open until closed (the system's default animation hides them after a few seconds).

## Sample content

Prices, ratings, review counts and reviews are sample data for the mockup. Warranty, weight and dimensions are `[PLACEHOLDERS]`. The review distribution and related products are arrays at the top of the script in `index.html`.
