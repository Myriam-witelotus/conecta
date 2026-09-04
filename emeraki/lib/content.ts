// ============================================================================
// EMÉRAKI — HOMEPAGE CONTENT
// ============================================================================
// EDIT HOMEPAGE CONTENT HERE. Every piece of text and image on the
// homepage (hero, collection intro, philosophy, ritual, closing CTA) comes
// from this file — app/page.tsx only reads these values, it does not
// contain hardcoded copy. Change a value below and the site updates.
//
// Image fields work the same way as in lib/products.ts: leave a slot
// undefined for a neutral placeholder, or set { src, alt } once the real
// photo exists — no layout changes required either way.
// ============================================================================

import type { ProductImage } from "@/lib/products";

export const homeContent = {
  // ---- HERO ---------------------------------------------------------------
  hero: {
    eyebrow: "Multiusos · Origen mexicano", // EDIT
    headingLine1: "Un color,", // EDIT
    headingLine2: "todos los usos.", // EDIT — rendered in italic
    body: "Nueve tonos inspirados en flores mexicanas, formulados para mejillas, labios y párpados. Se aplican con los dedos y se funden con la piel — sin brochas, sin líneas que difuminar.", // EDIT
    primaryCtaLabel: "Ver colección", // EDIT
    featuredSlug: "buganvilla", // EDIT: which product (by slug) headlines the hero
  },

  marquee: ["Nueve tonos", "Hecho en Mérida", "Fórmula multiusos", "Difumina con los dedos"], // EDIT: any number of short phrases

  // ---- COLLECTION INTRODUCTION ---------------------------------------------
  collectionIntro: {
    eyebrow: "La colección", // EDIT
    heading: "Nueve tonos, cinco maneras de usarlos.", // EDIT
    body: "Multiusos, polvo, bronzer, rubor e iluminador — pensados para aplicarse con los dedos y desaparecer en la piel. Cada tono lleva el nombre de una flor mexicana.", // EDIT
  },

  // ---- FEATURED PRODUCTS (the alternating pair below the hero) ------------
  featuredProducts: {
    eyebrow: "Ediciones destacadas", // EDIT
    slugs: ["azahar", "cempasuchil"], // EDIT: exactly 2 product slugs to feature here
  },

  // ---- CAMPAIGN MOMENT (full-bleed real-texture break with a quote) -------
  campaignMoment: {
    image: { src: "/products/texture-red-paste.png", alt: "Textura de pigmento cremoso EMÉRAKI en primer plano" } as ProductImage, // EDIT: swap for any real texture/campaign photo
    quote: "El color se aplica, no se pinta.", // EDIT
  },

  // ---- BRAND PHILOSOPHY -----------------------------------------------------
  philosophy: {
    eyebrow: "Filosofía EMÉRAKI", // EDIT
    heading: "Menos pasos, más piel.", // EDIT
    body: "Creemos en fórmulas que hacen más con menos: un solo producto para varias zonas del rostro, colores que imitan lo que la piel ya hace sola. Nada de rutinas de diez pasos — solo el gesto justo.", // EDIT
    pillars: [
      { title: "Multiuso", text: "Un producto, varias zonas del rostro." }, // EDIT
      { title: "Origen mexicano", text: "Tonos y nombres inspirados en flores locales." }, // EDIT
      { title: "Aplicación con los dedos", text: "Sin brochas, sin curva de aprendizaje." }, // EDIT
    ],
  },

  // ---- BOTANICAL / PRODUCT STORYTELLING (existing "de dónde viene el color") --
  storytelling: {
    eyebrow: "De dónde viene el color", // EDIT
    heading: "Pigmentos que se muelen a mano, no que se imprimen.", // EDIT
    // REPLACE BOTANICAL IMAGE HERE once campaign photography is ready — a
    // real texture photo is used as a placeholder in the meantime.
    image: { src: "/products/texture-mauve-paste.png", alt: "Textura de pigmento cremoso EMÉRAKI" } as ProductImage,
    notesLeft: [
      { title: "Óxidos de hierro", text: "Dan el color base y no se oxidan con el sudor ni el sol." }, // EDIT
      { title: "Manteca de karité", text: "Funde el pigmento en la piel sin dejar sensación pesada." }, // EDIT
    ],
    notesRight: [
      { title: "Cera de jojoba", text: "Sostiene la fórmula en crema, sin necesidad de conservadores agresivos." }, // EDIT
      { title: "Vitamina E", text: "Protege el pigmento y la piel de la oxidación diaria." }, // EDIT
    ],
  },

  // ---- BEAUTY RITUAL --------------------------------------------------------
  ritual: {
    eyebrow: "El ritual", // EDIT
    heading: "Un gesto para todo el rostro.", // EDIT
    steps: [
      "Toma una cantidad pequeña con la yema de los dedos.", // EDIT
      "Difumina desde el centro de las mejillas hacia las sienes.", // EDIT
      "Repite en labios y párpados para un color continuo.", // EDIT
    ],
    // REPLACE LIFESTYLE IMAGE HERE — leave undefined for a neutral
    // placeholder slot until a real application/lifestyle photo exists.
    image: undefined as ProductImage | undefined,
  },

  // ---- REST OF COLLECTION GRID HEADER ---------------------------------------
  restOfCollection: {
    eyebrow: "El resto de la colección", // EDIT
    linkLabel: "Ver todo", // EDIT
  },

  // ---- SHOP CTA (closing section) -------------------------------------------
  shopCta: {
    eyebrow: "Hecho en Mérida", // EDIT
    heading: "Nueve tonos. Un solo gesto para todos.", // EDIT
    ctaLabel: "Explorar la tienda", // EDIT
  },
};
