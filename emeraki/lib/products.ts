// ============================================================================
// EMÉRAKI — PRODUCT DATA
// ============================================================================
// This file is the ONLY place product information lives. Every page and
// component (shop grid, product pages, homepage, related products) reads
// from the `products` array below — nothing product-specific is hardcoded
// in layout files. To update the site, edit the values in this file only;
// you never need to touch anything in `app/` or `components/`.
//
// See "How to edit EMÉRAKI" in README.md for a plain-language walkthrough.
// ============================================================================

export type ProductCategory = "multiusos" | "polvo" | "bronzer" | "rubor" | "iluminador";

export type ProductImage = {
  src: string; // EDIT: path under /public, e.g. "/products/buganvilla-angled-1.png"
  alt: string; // EDIT: short description for accessibility/SEO
};

export type KeyIngredient = {
  name: string; // EDIT: ingredient name
  benefit: string; // EDIT: one short sentence — shown in the "Lo que lleva…" diagram
};

export type Product = {
  // ---- IDENTITY ---------------------------------------------------------
  slug: string; // EDIT WITH CARE: used in the URL (/producto/<slug>) — keep lowercase, no spaces/accents
  name: string; // EDIT: product name shown everywhere (cards, PDP title, nav)
  shade: string; // EDIT: shade label next to the swatch dot — usually same as `name`
  shadeColor: string; // EDIT: hex color for the swatch dot + accent moments, e.g. "#A24B4E"
  botanicalName: string; // EDIT: the flower this shade is named after (English/botanical reference), shown on the botanical image slot
  category: ProductCategory; // EDIT: one of "multiusos" | "polvo" | "bronzer" | "rubor" | "iluminador"
  categoryLabel: string; // auto-filled below from `categoryLabels` — do not edit per-product, edit categoryLabels instead

  // ---- COMMERCE (placeholder — replace with real values) ----------------
  price: number; // EDIT PRICE HERE — placeholder MXN price, shown with a "ref." marker until confirmed
  weight: string; // EDIT: net weight, e.g. "6 g"

  // ---- COPY (placeholder — replace with final copy) ----------------------
  tagline: string; // EDIT: one-line hook under the product name
  description: string; // EDIT: paragraph shown on the product page
  benefits: string[]; // EDIT: bullet list — accordion "Beneficios"
  howToUse: string; // EDIT: main how-to-use sentence (also used as step 1 of the ritual section)
  finish: string; // EDIT: accordion "Textura y acabado"
  ingredients: string[]; // EDIT: full ingredient list — accordion "Ingredientes"
  keyIngredients: KeyIngredient[]; // EDIT: 2–4 ingredients highlighted in the "Lo que lleva…" diagram

  // ---- IMAGES — replace the file path only, no layout changes needed ----
  heroImage: ProductImage; // EDIT PRODUCT PHOTO HERE — main real product photo (gallery, cards, hero)
  galleryImages: ProductImage[]; // EDIT: full set of angles for the PDP thumbnail strip (include heroImage as the first entry)
  secondaryImage?: ProductImage; // EDIT: alt angle used for the shop-card hover swap (optional — falls back to galleryImages[1] or textureImage)
  textureImage?: ProductImage; // EDIT: real cosmetic texture/pigment macro photo (optional)
  botanicalImage?: ProductImage; // REPLACE BOTANICAL IMAGE HERE — corresponding flower campaign photo. Leave empty for now; an editorial placeholder slot renders automatically until this is set.
  lifestyleImage?: ProductImage; // EDIT: application/lifestyle photo (optional — falls back to textureImage in the "how to use" section)
  ingredientImage?: ProductImage; // EDIT: center image for the "Lo que lleva…" diagram (optional — falls back to textureImage, then heroImage)

  // ---- MERCHANDISING ------------------------------------------------------
  relatedProducts?: string[]; // EDIT: slugs to show under "Completa el look" — leave undefined to auto-fill with products from the same category
};

export const categoryLabels: Record<ProductCategory, string> = {
  multiusos: "Multiusos",
  polvo: "Polvo matificante",
  bronzer: "Bronzer",
  rubor: "Rubor",
  iluminador: "Iluminador",
};

// ============================================================================
// THE 9 PRODUCTS — edit any field below. Nothing here requires a layout change.
// ============================================================================
export const products: Product[] = [
  {
    slug: "buganvilla",
    name: "Buganvilla",
    shade: "Buganvilla",
    shadeColor: "#A24B4E",
    botanicalName: "Bougainvillea",
    category: "multiusos",
    categoryLabel: categoryLabels.multiusos,
    price: 420,
    weight: "6 g",
    tagline: "Rosa intenso que se funde con el calor de la piel.",
    description:
      "Un multiusos de textura cremosa que se difumina con los dedos y se transforma en un rubor translúcido. Buganvilla lleva el mismo pigmento a labios, mejillas y párpados para un color continuo, sin líneas que marcar.",
    benefits: [
      "Un solo producto para mejillas, labios y párpados",
      "Acabado natural que se funde con el tono de piel",
      "Textura cremosa que no se agrieta ni se ve pastosa",
    ],
    howToUse:
      "Con la yema de los dedos, toma una pequeña cantidad y difumina en el centro de las mejillas hacia las sienes. Repite en labios y párpados para un look monocromático.",
    finish: "Acabado natural, ligeramente luminoso.",
    ingredients: ["Cera de jojoba", "Manteca de karité", "Óxidos de hierro", "Vitamina E"],
    keyIngredients: [
      { name: "Cera de jojoba", benefit: "Sostiene la fórmula en crema, sin conservadores agresivos." },
      { name: "Manteca de karité", benefit: "Funde el pigmento en la piel sin sensación pesada." },
      { name: "Óxidos de hierro", benefit: "Dan el color base; no se oxidan con el sudor ni el sol." },
      { name: "Vitamina E", benefit: "Protege el pigmento y la piel de la oxidación diaria." },
    ],
    heroImage: { src: "/products/buganvilla-angled-1.png", alt: "Buganvilla multiusos, vista en ángulo" },
    galleryImages: [
      { src: "/products/buganvilla-angled-1.png", alt: "Buganvilla multiusos, vista en ángulo" },
      { src: "/products/buganvilla-top.png", alt: "Buganvilla multiusos, vista superior" },
      { src: "/products/buganvilla-angled-2.png", alt: "Buganvilla multiusos, segundo ángulo" },
    ],
    textureImage: { src: "/products/texture-red-paste.png", alt: "Textura de pigmento rojo intenso" },
  },
  {
    slug: "amapola",
    name: "Amapola",
    shade: "Amapola",
    shadeColor: "#C1613F",
    botanicalName: "Poppy",
    category: "multiusos",
    categoryLabel: categoryLabels.multiusos,
    price: 420,
    weight: "6 g",
    tagline: "Coral cálido, la dosis exacta de vitalidad.",
    description:
      "Amapola es el multiusos de tono coral que despierta el rostro sin esfuerzo. Su fórmula cremosa se activa con el calor de la piel y se difumina en segundos.",
    benefits: [
      "Un solo producto para mejillas, labios y párpados",
      "Tono coral versátil para la mayoría de subtonos",
      "Se difumina con los dedos, sin brochas",
    ],
    howToUse:
      "Aplica con la yema de los dedos sobre las mejillas y difumina hacia afuera. Usa el sobrante en labios para un acabado coordinado.",
    finish: "Acabado natural, ligeramente luminoso.",
    ingredients: ["Cera de jojoba", "Manteca de karité", "Óxidos de hierro", "Vitamina E"],
    keyIngredients: [
      { name: "Cera de jojoba", benefit: "Sostiene la fórmula en crema, sin conservadores agresivos." },
      { name: "Manteca de karité", benefit: "Funde el pigmento en la piel sin sensación pesada." },
      { name: "Óxidos de hierro", benefit: "Dan el color base; no se oxidan con el sudor ni el sol." },
      { name: "Vitamina E", benefit: "Protege el pigmento y la piel de la oxidación diaria." },
    ],
    heroImage: { src: "/products/amapola-angled.png", alt: "Amapola multiusos, vista en ángulo" },
    galleryImages: [{ src: "/products/amapola-angled.png", alt: "Amapola multiusos, vista en ángulo" }],
  },
  {
    slug: "jacaranda",
    name: "Jacaranda",
    shade: "Jacaranda",
    shadeColor: "#7C6A8E",
    botanicalName: "Jacaranda blossom",
    category: "multiusos",
    categoryLabel: categoryLabels.multiusos,
    price: 420,
    weight: "6 g",
    tagline: "Malva profundo con un dejo violeta.",
    description:
      "Jacaranda aporta un tono malva-ciruela poco común, perfecto para quienes buscan algo más que un rosa clásico. Multiusos en mejillas, labios y párpados.",
    benefits: [
      "Un solo producto para mejillas, labios y párpados",
      "Tono malva-ciruela distintivo",
      "Textura cremosa de fácil difuminado",
    ],
    howToUse: "Difumina con los dedos sobre el pómulo. Ideal en capas para intensificar el color en labios.",
    finish: "Acabado natural, ligeramente luminoso.",
    ingredients: ["Cera de jojoba", "Manteca de karité", "Óxidos de hierro", "Vitamina E"],
    keyIngredients: [
      { name: "Cera de jojoba", benefit: "Sostiene la fórmula en crema, sin conservadores agresivos." },
      { name: "Manteca de karité", benefit: "Funde el pigmento en la piel sin sensación pesada." },
      { name: "Óxidos de hierro", benefit: "Dan el color base; no se oxidan con el sudor ni el sol." },
      { name: "Vitamina E", benefit: "Protege el pigmento y la piel de la oxidación diaria." },
    ],
    heroImage: { src: "/products/jacaranda-top.png", alt: "Jacaranda multiusos, vista superior" },
    galleryImages: [{ src: "/products/jacaranda-top.png", alt: "Jacaranda multiusos, vista superior" }],
    textureImage: { src: "/products/texture-mauve-paste.png", alt: "Textura de pigmento malva" },
  },
  {
    slug: "azahar",
    name: "Azahar",
    shade: "Azahar",
    shadeColor: "#EDE6D6",
    botanicalName: "Orange blossom",
    category: "polvo",
    categoryLabel: categoryLabels.polvo,
    price: 480,
    weight: "10 g",
    tagline: "Polvo translúcido que difumina sin apagar la piel.",
    description:
      "Azahar es un polvo matificante suelto de acabado invisible. Sella el maquillaje y controla el brillo en zonas de mayor movimiento sin dejar velo blanco ni acartonar la piel.",
    benefits: [
      "Controla el brillo hasta por 8 horas",
      "Acabado invisible en todos los tonos de piel",
      "Difumina líneas finas sin resecar",
    ],
    howToUse:
      "Con una brocha esponjada, toma una cantidad mínima y presiona sobre zona T u otras áreas propensas a brillo. Sacude el exceso antes de aplicar.",
    finish: "Acabado mate natural.",
    ingredients: ["Sílice", "Almidón de tapioca", "Caolín", "Extracto de azahar"],
    keyIngredients: [
      { name: "Sílice", benefit: "Absorbe el exceso de brillo sin resecar la piel." },
      { name: "Almidón de tapioca", benefit: "Difumina el polvo para un acabado invisible." },
      { name: "Caolín", benefit: "Equilibra el sebo en zonas de mayor movimiento." },
      { name: "Extracto de azahar", benefit: "Aporta un aroma suave, sin perfume añadido." },
    ],
    heroImage: { src: "/products/azahar-top.png", alt: "Azahar polvo matificante, vista superior" },
    galleryImages: [
      { src: "/products/azahar-top.png", alt: "Azahar polvo matificante, vista superior" },
      { src: "/products/azahar-angled.png", alt: "Azahar polvo matificante, vista en ángulo" },
    ],
    textureImage: { src: "/products/texture-white-powder.png", alt: "Textura de polvo suelto translúcido" },
  },
  {
    slug: "malva",
    name: "Malva",
    shade: "Malva",
    shadeColor: "#8A5A3B",
    botanicalName: "Mallow",
    category: "bronzer",
    categoryLabel: categoryLabels.bronzer,
    price: 440,
    weight: "6 g",
    tagline: "Calidez terracota para un bronceado con memoria.",
    description:
      "Malva devuelve la calidez del sol al rostro sin caer en tonos anaranjados. Su base de polvo compacto se difumina en capas para un contorno natural.",
    benefits: [
      "Tono terracota cálido, universal",
      "Se difumina en capas sin manchar",
      "Doble uso: contorno y bronceado",
    ],
    howToUse:
      "Con brocha angulada, aplica en forma de '3' desde la sien hasta la mandíbula, pasando por el pómulo. Difumina hacia el nacimiento del cabello.",
    finish: "Acabado semi-mate.",
    ingredients: ["Mica", "Óxidos de hierro", "Talco", "Extracto de malva"],
    keyIngredients: [
      { name: "Mica", benefit: "Da luminosidad natural, sin partícula visible." },
      { name: "Óxidos de hierro", benefit: "Dan el color base; no se oxidan con el sudor ni el sol." },
      { name: "Talco", benefit: "Aporta suavidad y adherencia al polvo compacto." },
      { name: "Extracto de malva", benefit: "Calma la piel mientras aporta color." },
    ],
    heroImage: { src: "/products/malva-bronzer-top.png", alt: "Malva bronzer, vista superior" },
    galleryImages: [{ src: "/products/malva-bronzer-top.png", alt: "Malva bronzer, vista superior" }],
    textureImage: { src: "/products/texture-brown-paste.png", alt: "Textura de pigmento bronceador" },
  },
  {
    slug: "cempasuchil",
    name: "Cempasúchil",
    shade: "Cempasúchil",
    shadeColor: "#B5772E",
    botanicalName: "Marigold",
    category: "bronzer",
    categoryLabel: categoryLabels.bronzer,
    price: 440,
    weight: "4 g",
    tagline: "Dorado profundo inspirado en la flor de muertos.",
    description:
      "Cempasúchil es un bronzer dorado-intenso pensado para pieles medias a oscuras, con un sutil resplandor cálido que evita la ceniza.",
    benefits: [
      "Tono dorado profundo, sin ceniza",
      "Resplandor sutil, no glitter",
      "Ideal para contornear y calentar el rostro",
    ],
    howToUse:
      "Aplica con brocha grande en las zonas donde el sol tocaría de forma natural: frente, nariz, pómulos y mentón.",
    finish: "Acabado semi-mate con resplandor sutil.",
    ingredients: ["Mica", "Óxidos de hierro", "Talco", "Extracto de cempasúchil"],
    keyIngredients: [
      { name: "Mica", benefit: "Da luminosidad natural, sin partícula visible." },
      { name: "Óxidos de hierro", benefit: "Dan el color base; no se oxidan con el sudor ni el sol." },
      { name: "Talco", benefit: "Aporta suavidad y adherencia al polvo compacto." },
      { name: "Extracto de cempasúchil", benefit: "Antioxidante natural, propio de la flor." },
    ],
    heroImage: { src: "/products/cempasuchil-bronzer-angled.png", alt: "Cempasúchil bronzer, vista en ángulo" },
    galleryImages: [
      { src: "/products/cempasuchil-bronzer-angled.png", alt: "Cempasúchil bronzer, vista en ángulo" },
    ],
  },
  {
    slug: "geranio",
    name: "Geranio",
    shade: "Geranio",
    shadeColor: "#C48A9A",
    botanicalName: "Geranium",
    category: "rubor",
    categoryLabel: categoryLabels.rubor,
    price: 400,
    weight: "4 g",
    tagline: "Rosa suave, el rubor de todos los días.",
    description:
      "Geranio es un rubor en polvo de rosa suave que imita el color natural de las mejillas sonrojadas. Fácil de dosificar, difícil de exagerar.",
    benefits: ["Tono rosa universal", "Fácil de difuminar y dosificar", "Acabado saludable, no polvoso"],
    howToUse:
      "Sonríe y aplica sobre la parte más alta del pómulo con movimientos circulares. Difumina hacia la sien.",
    finish: "Acabado satinado suave.",
    ingredients: ["Mica", "Óxidos de hierro", "Talco", "Extracto de geranio"],
    keyIngredients: [
      { name: "Mica", benefit: "Da luminosidad natural, sin partícula visible." },
      { name: "Óxidos de hierro", benefit: "Dan el color base; no se oxidan con el sudor ni el sol." },
      { name: "Talco", benefit: "Aporta suavidad y adherencia al polvo compacto." },
      { name: "Extracto de geranio", benefit: "Tonifica visualmente el color de la piel." },
    ],
    heroImage: { src: "/products/geranio-blush-top.png", alt: "Geranio rubor, vista superior" },
    galleryImages: [
      { src: "/products/geranio-blush-top.png", alt: "Geranio rubor, vista superior" },
      { src: "/products/geranio-blush-angled.png", alt: "Geranio rubor, vista en ángulo" },
    ],
  },
  {
    slug: "camelia",
    name: "Camelia",
    shade: "Camelia",
    shadeColor: "#D69C86",
    botanicalName: "Camellia",
    category: "rubor",
    categoryLabel: categoryLabels.rubor,
    price: 400,
    weight: "4 g",
    tagline: "Durazno cálido con un guiño dorado.",
    description:
      "Camelia combina rosa y durazno para un rubor cálido que favorece a la mayoría de los subtonos de piel, con un dejo dorado casi imperceptible.",
    benefits: [
      "Tono durazno-rosa cálido",
      "Un toque dorado sutil, no glitter",
      "Acabado saludable, no polvoso",
    ],
    howToUse:
      "Aplica sobre la parte más alta del pómulo y difumina hacia la sien. Superpón sobre Geranio para mayor intensidad.",
    finish: "Acabado satinado suave.",
    ingredients: ["Mica", "Óxidos de hierro", "Talco", "Extracto de camelia"],
    keyIngredients: [
      { name: "Mica", benefit: "Da luminosidad natural, sin partícula visible." },
      { name: "Óxidos de hierro", benefit: "Dan el color base; no se oxidan con el sudor ni el sol." },
      { name: "Talco", benefit: "Aporta suavidad y adherencia al polvo compacto." },
      { name: "Extracto de camelia", benefit: "Aporta suavidad y un dejo luminoso." },
    ],
    heroImage: { src: "/products/camelia-blush-top.png", alt: "Camelia rubor, vista superior" },
    galleryImages: [{ src: "/products/camelia-blush-top.png", alt: "Camelia rubor, vista superior" }],
  },
  {
    slug: "magnolia",
    name: "Magnolia",
    shade: "Magnolia",
    shadeColor: "#E7DCC8",
    botanicalName: "Magnolia",
    category: "iluminador",
    categoryLabel: categoryLabels.iluminador,
    price: 460,
    weight: "4 g",
    tagline: "Resplandor champagne, luz que no se nota.",
    description:
      "Magnolia es un iluminador de tono champagne que reparte luz sin dejar partícula visible. Pensado para pómulo alto, lagrimal y arco de cupido.",
    benefits: [
      "Resplandor difuso, no glitter",
      "Tono champagne universal",
      "Se puede mezclar con base o usar solo",
    ],
    howToUse: "Con brocha pequeña o dedo, aplica en la parte más alta del pómulo, lagrimal y arco de cupido.",
    finish: "Acabado luminoso difuso.",
    ingredients: ["Mica", "Talco", "Extracto de magnolia", "Vitamina E"],
    keyIngredients: [
      { name: "Mica", benefit: "Da luminosidad natural, sin partícula visible." },
      { name: "Talco", benefit: "Aporta suavidad y adherencia al polvo compacto." },
      { name: "Extracto de magnolia", benefit: "Aporta un aroma floral suave y natural." },
      { name: "Vitamina E", benefit: "Protege el pigmento y la piel de la oxidación diaria." },
    ],
    heroImage: { src: "/products/magnolia-iluminador-angled.png", alt: "Magnolia iluminador, vista en ángulo" },
    galleryImages: [
      { src: "/products/magnolia-iluminador-angled.png", alt: "Magnolia iluminador, vista en ángulo" },
    ],
  },
];

// ============================================================================
// Helpers — used by pages/components. No product content lives below this
// line; it's all logic that reads the `products` array above.
// ============================================================================

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

/** Sibling shades in the same category, current product first — powers the PDP shade selector. */
export function getSiblingShades(product: Product): Product[] {
  const siblings = products.filter((p) => p.category === product.category && p.slug !== product.slug);
  return [product, ...siblings];
}

/** "Completa el look" — uses `relatedProducts` slugs if set, else falls back to same category, else any 3 others. */
export function getRelatedProducts(product: Product, count = 3): Product[] {
  if (product.relatedProducts?.length) {
    return product.relatedProducts
      .map((slug) => getProductBySlug(slug))
      .filter((p): p is Product => Boolean(p))
      .slice(0, count);
  }
  const sameCategory = products.filter((p) => p.slug !== product.slug && p.category === product.category);
  const pool = sameCategory.length > 0 ? sameCategory : products.filter((p) => p.slug !== product.slug);
  return pool.slice(0, count);
}

/** Center image for the "Lo que lleva…" diagram: ingredientImage → textureImage → heroImage. */
export function getIngredientDiagramImage(product: Product): ProductImage {
  return product.ingredientImage ?? product.textureImage ?? product.heroImage;
}

/** Splits keyIngredients into left/right columns for the diagram layout. */
export function splitKeyIngredients(product: Product) {
  const mid = Math.ceil(product.keyIngredients.length / 2);
  return {
    left: product.keyIngredients.slice(0, mid).map((k) => ({ title: k.name, text: k.benefit })),
    right: product.keyIngredients.slice(mid).map((k) => ({ title: k.name, text: k.benefit })),
  };
}
