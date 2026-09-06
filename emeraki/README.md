# How to edit EMÉRAKI

Everything you'll ever need to change lives in **two files**:

- **`lib/products.ts`** — all 9 products (Buganvilla, Amapola, Jacaranda, Azahar, Malva, Cempasúchil, Geranio, Camelia, Magnolia): names, prices, sizes, shades, descriptions, benefits, ingredients, and every product photo.
- **`lib/content.ts`** — all the homepage text (hero, collection intro, philosophy, ritual, closing section) and its images.

You never need to open anything inside the `app/` or `components/` folders for normal content updates — those files only control layout, and the layout is already finished. Below is exactly where to make the 8 changes you asked about.

### 1. Change a product photo
Open `lib/products.ts`, find the product (e.g. `slug: "buganvilla"`), and change the `src` inside `heroImage` (main photo) or `galleryImages` (the full set of angles shown on the product page) to point at your new file. Drop the new image file in `public/products/` first, then reference it as `/products/your-file-name.png`.

### 2. Add the botanical (flower) photo
Same product entry, find `botanicalImage`. It's currently left empty on purpose, which is why the site shows a dashed placeholder box labeled "Fotografía botánica — [flower name]" on that product's page. Add the photo to `public/products/`, then set:
```ts
botanicalImage: { src: "/products/buganvilla-flower.jpg", alt: "Flor de buganvilia" },
```
The placeholder box disappears automatically and your photo takes its place — no other change needed. The same applies to `lifestyleImage` (used in the "how to use" section) and `homeContent.ritual.image` in `lib/content.ts` (the homepage ritual section).

### 3. Change a price
Same product entry, change the `price` number. It's shown with a small "ref." mark next to it everywhere on the site — that mark disappears once you tell us the prices are final (just ask, it's a one-line change).

### 4. Change a product name
Change the `name` field. If you also want the shade label next to the color dot to read differently from the product name, edit `shade` too (they're usually the same).

### 5. Edit ingredients
- `ingredients` — the full list shown in the "Ingredientes" accordion on the product page.
- `keyIngredients` — the 2–4 ingredients (with a one-line benefit each) shown in the "Lo que lleva…" diagram. Each entry looks like `{ name: "Cera de jojoba", benefit: "Sostiene la fórmula en crema..." }`.

### 6. Edit benefits
Change the `benefits` list (each line becomes one bullet in the "Beneficios" accordion).

### 7. Change related products
By default, "Completa el look" automatically shows other products from the same category. To hand-pick specific products instead, add a `relatedProducts` list of slugs to that product, e.g. `relatedProducts: ["azahar", "malva", "geranio"]`.

### 8. Edit homepage text
Open `lib/content.ts`. Every section (hero, collection intro, philosophy, ritual, closing CTA) is a labeled block with its own heading/body text — change the text directly. To feature different products in the "Ediciones destacadas" section, change the two slugs in `featuredProducts.slugs`.

### A couple of things worth knowing
- Every field in `lib/products.ts` and `lib/content.ts` has a `// EDIT ...` comment next to it explaining what it does.
- A **shade selector** (the small colored circles) appears automatically on a product page whenever that product has sibling shades in the same category (e.g. Buganvilla/Amapola/Jacaranda) — you don't need to turn it on or off.
- Prices and ingredients are currently placeholder content and are clearly marked as such; nothing about the visual design changes when you replace them.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
