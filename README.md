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

## Puppy shop (multi-page)

A puppy section built with the same Vitamin components, linked from the backpack page's navbar and footer. Start at `puppies-home.html`.

| Page | What it does |
| --- | --- |
| `puppies-home.html` | Landing page: hero, trust points, newest puppies, sport chips, steps, gear |
| `puppies.html` | Catalogue with breed / sex / size / sport filters, "available only" toggle, sorting and search (`?q=`, `?breed=`, `?sport=`) |
| `puppy.html?id=…` | Puppy profile: breed meters, pick-up options, reserve with a 200 € deposit, favourites, tabs, similar puppies |
| `breeds.html` | Breed guide with a quick-match quiz |
| `puppy-gear.html` | Leashes, harnesses, beds and more, with category chips and add to cart |
| `how-it-works.html` | Reservation process, commitments and FAQ |
| `care-guide.html` | Care advice by age and a pre-pick-up checklist (saved in the browser) |
| `book-a-visit.html` | Visit request form with validation (`?puppy=…` preselects a puppy) |
| `our-breeders.html` | Breeder charter, breeder cards and family reviews |
| `cart.html` | Reservations and gear, quantities, summary, demo checkout |

Shared files: `assets/site.css` (layout), `assets/site.js` (header, footer, cart in `localStorage`, toast, card renderers), `assets/data.js` (sample puppies, breeds and gear), `assets/puppies/*.svg` (illustrations), `assets/logo.svg`.

All puppies, breeders, prices and reviews are sample content. Contact details and legal documents are `[PLACEHOLDERS]`.
