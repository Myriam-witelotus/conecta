export type ProductCategory =
  | "multiusos"
  | "polvo"
  | "bronzer"
  | "rubor"
  | "iluminador";

export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  weight: string;
  price: number;
  accent: string; // hex, used for shade dots / accents
  tagline: string;
  description: string;
  benefits: string[];
  howToUse: string;
  finish: string;
  ingredients: string[];
  images: ProductImage[];
  textureImage?: ProductImage;
};

export const categoryLabels: Record<ProductCategory, string> = {
  multiusos: "Multiusos",
  polvo: "Polvo matificante",
  bronzer: "Bronzer",
  rubor: "Rubor",
  iluminador: "Iluminador",
};

export const products: Product[] = [
  {
    slug: "buganvilla",
    name: "Buganvilla",
    category: "multiusos",
    categoryLabel: categoryLabels.multiusos,
    weight: "6 g",
    price: 420,
    accent: "#A24B4E",
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
    images: [
      { src: "/products/buganvilla-angled-1.png", alt: "Buganvilla multiusos, vista en ángulo" },
      { src: "/products/buganvilla-top.png", alt: "Buganvilla multiusos, vista superior" },
      { src: "/products/buganvilla-angled-2.png", alt: "Buganvilla multiusos, segundo ángulo" },
    ],
    textureImage: { src: "/products/texture-red-paste.png", alt: "Textura de pigmento rojo intenso" },
  },
  {
    slug: "amapola",
    name: "Amapola",
    category: "multiusos",
    categoryLabel: categoryLabels.multiusos,
    weight: "6 g",
    price: 420,
    accent: "#C1613F",
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
    images: [
      { src: "/products/amapola-angled.png", alt: "Amapola multiusos, vista en ángulo" },
    ],
  },
  {
    slug: "jacaranda",
    name: "Jacaranda",
    category: "multiusos",
    categoryLabel: categoryLabels.multiusos,
    weight: "6 g",
    price: 420,
    accent: "#7C6A8E",
    tagline: "Malva profundo con un dejo violeta.",
    description:
      "Jacaranda aporta un tono malva-ciruela poco común, perfecto para quienes buscan algo más que un rosa clásico. Multiusos en mejillas, labios y párpados.",
    benefits: [
      "Un solo producto para mejillas, labios y párpados",
      "Tono malva-ciruela distintivo",
      "Textura cremosa de fácil difuminado",
    ],
    howToUse:
      "Difumina con los dedos sobre el pómulo. Ideal en capas para intensificar el color en labios.",
    finish: "Acabado natural, ligeramente luminoso.",
    ingredients: ["Cera de jojoba", "Manteca de karité", "Óxidos de hierro", "Vitamina E"],
    images: [
      { src: "/products/jacaranda-top.png", alt: "Jacaranda multiusos, vista superior" },
    ],
    textureImage: { src: "/products/texture-mauve-paste.png", alt: "Textura de pigmento malva" },
  },
  {
    slug: "azahar",
    name: "Azahar",
    category: "polvo",
    categoryLabel: categoryLabels.polvo,
    weight: "10 g",
    price: 480,
    accent: "#EDE6D6",
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
    images: [
      { src: "/products/azahar-top.png", alt: "Azahar polvo matificante, vista superior" },
      { src: "/products/azahar-angled.png", alt: "Azahar polvo matificante, vista en ángulo" },
    ],
    textureImage: { src: "/products/texture-white-powder.png", alt: "Textura de polvo suelto translúcido" },
  },
  {
    slug: "malva",
    name: "Malva",
    category: "bronzer",
    categoryLabel: categoryLabels.bronzer,
    weight: "6 g",
    price: 440,
    accent: "#8A5A3B",
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
    images: [
      { src: "/products/malva-bronzer-top.png", alt: "Malva bronzer, vista superior" },
    ],
    textureImage: { src: "/products/texture-brown-paste.png", alt: "Textura de pigmento bronceador" },
  },
  {
    slug: "cempasuchil",
    name: "Cempasúchil",
    category: "bronzer",
    categoryLabel: categoryLabels.bronzer,
    weight: "4 g",
    price: 440,
    accent: "#B5772E",
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
    images: [
      { src: "/products/cempasuchil-bronzer-angled.png", alt: "Cempasúchil bronzer, vista en ángulo" },
    ],
  },
  {
    slug: "geranio",
    name: "Geranio",
    category: "rubor",
    categoryLabel: categoryLabels.rubor,
    weight: "4 g",
    price: 400,
    accent: "#C48A9A",
    tagline: "Rosa suave, el rubor de todos los días.",
    description:
      "Geranio es un rubor en polvo de rosa suave que imita el color natural de las mejillas sonrojadas. Fácil de dosificar, difícil de exagerar.",
    benefits: [
      "Tono rosa universal",
      "Fácil de difuminar y dosificar",
      "Acabado saludable, no polvoso",
    ],
    howToUse:
      "Sonríe y aplica sobre la parte más alta del pómulo con movimientos circulares. Difumina hacia la sien.",
    finish: "Acabado satinado suave.",
    ingredients: ["Mica", "Óxidos de hierro", "Talco", "Extracto de geranio"],
    images: [
      { src: "/products/geranio-blush-top.png", alt: "Geranio rubor, vista superior" },
      { src: "/products/geranio-blush-angled.png", alt: "Geranio rubor, vista en ángulo" },
    ],
  },
  {
    slug: "camelia",
    name: "Camelia",
    category: "rubor",
    categoryLabel: categoryLabels.rubor,
    weight: "4 g",
    price: 400,
    accent: "#D69C86",
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
    images: [
      { src: "/products/camelia-blush-top.png", alt: "Camelia rubor, vista superior" },
    ],
  },
  {
    slug: "magnolia",
    name: "Magnolia",
    category: "iluminador",
    categoryLabel: categoryLabels.iluminador,
    weight: "4 g",
    price: 460,
    accent: "#E7DCC8",
    tagline: "Resplandor champagne, luz que no se nota.",
    description:
      "Magnolia es un iluminador de tono champagne que reparte luz sin dejar partícula visible. Pensado para pómulo alto, lagrimal y arco de cupido.",
    benefits: [
      "Resplandor difuso, no glitter",
      "Tono champagne universal",
      "Se puede mezclar con base o usar solo",
    ],
    howToUse:
      "Con brocha pequeña o dedo, aplica en la parte más alta del pómulo, lagrimal y arco de cupido.",
    finish: "Acabado luminoso difuso.",
    ingredients: ["Mica", "Talco", "Extracto de magnolia", "Vitamina E"],
    images: [
      { src: "/products/magnolia-iluminador-angled.png", alt: "Magnolia iluminador, vista en ángulo" },
    ],
  },
];

// short benefit line per ingredient, reused across every product that lists it
// (placeholder copy — to be confirmed against the real formulas)
export const ingredientNotes: Record<string, string> = {
  "Cera de jojoba": "Sostiene la fórmula en crema, sin conservadores agresivos.",
  "Manteca de karité": "Funde el pigmento en la piel sin sensación pesada.",
  "Óxidos de hierro": "Dan el color base; no se oxidan con el sudor ni el sol.",
  "Vitamina E": "Protege el pigmento y la piel de la oxidación diaria.",
  "Sílice": "Absorbe el exceso de brillo sin resecar la piel.",
  "Almidón de tapioca": "Difumina el polvo para un acabado invisible.",
  Caolín: "Equilibra el sebo en zonas de mayor movimiento.",
  "Extracto de azahar": "Aporta un aroma suave, sin perfume añadido.",
  Mica: "Da luminosidad natural, sin partícula visible.",
  Talco: "Aporta suavidad y adherencia al polvo compacto.",
  "Extracto de malva": "Calma la piel mientras aporta color.",
  "Extracto de cempasúchil": "Antioxidante natural, propio de la flor.",
  "Extracto de geranio": "Tonifica visualmente el color de la piel.",
  "Extracto de camelia": "Aporta suavidad y un dejo luminoso.",
  "Extracto de magnolia": "Aporta un aroma floral suave y natural.",
};

export function getIngredientDiagramNotes(product: Product) {
  const notes = product.ingredients.map((name) => ({
    title: name,
    text: ingredientNotes[name] ?? "Ingrediente de la fórmula EMÉRAKI.",
  }));
  const mid = Math.ceil(notes.length / 2);
  return { left: notes.slice(0, mid), right: notes.slice(mid) };
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
