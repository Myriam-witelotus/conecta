import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import AddToCart from "@/components/AddToCart";
import ShadeSelector from "@/components/ShadeSelector";
import ImageSlot from "@/components/ImageSlot";
import { Accordion } from "@/components/Accordion";
import ProductCard from "@/components/ProductCard";
import Eyebrow from "@/components/Eyebrow";
import PriceTag from "@/components/PriceTag";
import IngredientStory from "@/components/IngredientStory";
import {
  getProductBySlug,
  getRelatedProducts,
  getSiblingShades,
  getIngredientDiagramImage,
  splitKeyIngredients,
  products,
} from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product ? `${product.name} — EMÉRAKI` : "EMÉRAKI" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // EDIT PRODUCT INFORMATION HERE: everything below is pulled from the
  // matching entry in lib/products.ts — this file has no product-specific
  // content of its own.
  const others = getRelatedProducts(product);
  const shadeSiblings = getSiblingShades(product);
  const diagramNotes = splitKeyIngredients(product);
  const diagramImage = getIngredientDiagramImage(product);
  const howToUseImage = product.lifestyleImage ?? product.textureImage;

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-8 pb-4">
        <nav className="text-[11px] uppercase tracking-[0.1em] text-ink-soft flex items-center gap-2">
          <Link href="/tienda" className="hover:text-ink">Tienda</Link>
          <span className="text-line">/</span>
          <span>{product.categoryLabel}</span>
          <span className="text-line">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24 grid md:grid-cols-12 gap-12 md:gap-10 items-start">
        <div className="md:col-span-7">
          <ProductGallery product={product} />
        </div>

        <div className="md:col-span-5 md:pt-4 md:sticky md:top-28">
          <Eyebrow>{product.categoryLabel}</Eyebrow>
          <h1 className="font-display text-[2.75rem] md:text-6xl leading-[0.98] text-ink mt-4">
            {product.name}
          </h1>
          <p className="mt-5 text-ink-soft leading-relaxed max-w-md text-[15px]">{product.tagline}</p>

          <div className="mt-8 flex items-baseline gap-3 border-t border-line/70 pt-6">
            <PriceTag price={product.price} size="lg" />
            <span className="text-[13px] text-ink-soft">MXN · {product.weight}</span>
          </div>

          {/* shade selector — only renders when this product has sibling shades */}
          <ShadeSelector current={product} siblings={shadeSiblings} />

          <p className="mt-8 text-sm text-ink-soft leading-relaxed max-w-md">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCart accent={product.shadeColor} />
          </div>

          <div className="mt-12">
            <Accordion
              items={[
                {
                  index: "01",
                  title: "Beneficios",
                  content: (
                    <ul className="space-y-2">
                      {product.benefits.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="text-terracotta">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ),
                },
                { index: "02", title: "Cómo usar", content: <p>{product.howToUse}</p> },
                {
                  index: "03",
                  title: "Ingredientes",
                  content: <p>{product.ingredients.join(" · ")}</p>,
                },
                { index: "04", title: "Textura y acabado", content: <p>{product.finish}</p> },
              ]}
            />
          </div>
        </div>
      </div>

      {/* HOW TO USE — full-bleed alternating editorial section */}
      <section className="border-t border-line/70 bg-ivory">
        <div className="grid md:grid-cols-12 md:min-h-[70vh]">
          <div className="md:col-span-5 flex flex-col justify-center px-6 md:px-14 py-16 md:py-0 order-2 md:order-1">
            <Eyebrow className="mb-5">Cómo usar</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.05] text-ink max-w-sm">
              Un gesto, tres zonas del rostro.
            </h2>
            <ol className="mt-9 space-y-6 max-w-sm">
              {[product.howToUse, "Difumina con la yema de los dedos hasta que no queden bordes.", "Reaplica según el nivel de color que busques."].map(
                (step, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="font-display text-lg text-terracotta shrink-0">0{i + 1}</span>
                    <span className="text-sm text-ink-soft leading-relaxed pt-0.5">{step}</span>
                  </li>
                )
              )}
            </ol>
          </div>
          <div className="md:col-span-7 relative aspect-[4/3] md:aspect-auto order-1 md:order-2">
            {howToUseImage ? (
              <Image
                src={howToUseImage.src}
                alt={howToUseImage.alt}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-cream flex items-center justify-center">
                <div className="relative w-2/3 aspect-square">
                  <Image src={product.heroImage.src} alt={product.heroImage.alt} fill sizes="50vw" className="object-contain p-10" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* EDITORIAL INGREDIENT DIAGRAM */}
      <section className="border-t border-line/70 bg-ivory">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-md mb-4">
            <Eyebrow className="mb-4">La fórmula</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
              Lo que lleva {product.name}.
            </h2>
          </div>
          <p className="text-[11px] italic text-ink-soft/70 mb-16">
            * Fórmula de referencia, sujeta a confirmación.
          </p>
          <IngredientStory
            image={diagramImage.src}
            imageAlt={diagramImage.alt}
            notesLeft={diagramNotes.left}
            notesRight={diagramNotes.right}
            fit={product.textureImage || product.ingredientImage ? "cover" : "contain"}
            accent={product.shadeColor}
          />
        </div>
      </section>

      {/* BOTANICAL CAMPAIGN SLOT — one per product, ready for the flower photography */}
      <section className="border-t border-line/70">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-20">
          <Eyebrow className="mb-6">Campaña botánica</Eyebrow>
          <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-center">
            <div className="md:col-span-1">
              {/* REPLACE BOTANICAL IMAGE HERE — set product.botanicalImage in lib/products.ts */}
              <ImageSlot
                image={product.botanicalImage}
                label={`Fotografía botánica — ${product.botanicalName}`}
                aspect="aspect-[4/5]"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-ink-soft leading-relaxed max-w-md">
                {product.name} lleva el nombre de {product.botanicalName.toLowerCase()}. Cuando la
                fotografía de campaña esté lista, aparecerá aquí automáticamente — sin tocar el diseño de la página.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12 border-b border-line/70 pb-6">
          <Eyebrow>Completa el look</Eyebrow>
          <Link href="/tienda" className="text-[12px] uppercase tracking-[0.12em] text-ink-soft hover:text-ink underline underline-offset-4">
            Ver colección
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-16">
          {others.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
