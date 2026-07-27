# ELC Shopify Beauty Concierge Prototype

This is a lean static prototype for an ELC North America concierge concept using Lab Series and Tom Ford Beauty as Shopify-backed example brands.

## Run

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Pitch angle

- Lab Series and Tom Ford Beauty both expose Shopify `products.json` catalog structures.
- Phase 1 can be a discovery and recommendation layer, with purchase redirected to each brand PDP.
- No unified cart, checkout, payment, tax, shipping, returns, OMS, or real-time inventory integration is required for the prototype.
- As more ELC brands migrate to Shopify, the same catalog ingestion pattern can be extended brand by brand.

## Prototype behavior

- User provides skin type, goal, concerns, budget, and a short concierge note.
- User can select up to 3 preferred ELC brands; Lab Series and Tom Ford Beauty are connected as Shopify sample catalogs, and Clinique is connected through Clinique.com product pages.
- The app ranks a small catalog snapshot from Lab Series, Tom Ford Beauty, and Clinique.
- It returns a routine with product cards, rationale, prices, total budget, images, and brand PDP links.

Product data was sampled from public Shopify storefront product endpoints on June 21, 2026.
