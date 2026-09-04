import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import AddToCart from "@/components/AddToCart";
import { Accordion } from "@/components/Accordion";
import ProductCard from "@/components/ProductCard";
import { getProductBySlug, products } from "@/lib/products";

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

  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);
  const others =
    related.length > 0
      ? related
      : products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-8 pb-4">
        <nav className="text-xs uppercase tracking-[0.08em] text-ink-soft flex items-center gap-2">
          <Link href="/tienda" className="hover:text-ink">Tienda</Link>
          <span>/</span>
          <span>{product.categoryLabel}</span>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <ProductGallery product={product} />

        <div className="md:pt-6 md:sticky md:top-28">
          <p className="text-xs uppercase tracking-[0.1em] text-terracotta">{product.categoryLabel}</p>
          <h1 className="font-display text-4xl md:text-5xl text-ink mt-3">{product.name}</h1>
          <p className="mt-4 text-ink-soft leading-relaxed max-w-md">{product.tagline}</p>

          <div className="mt-8 flex items-baseline gap-4">
            <span className="text-2xl font-display">${product.price}</span>
            <span className="text-sm text-ink-soft">MXN · {product.weight}</span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span
              className="h-4 w-4 rounded-full border border-ink/10"
              style={{ backgroundColor: product.accent }}
            />
            <span className="text-xs text-ink-soft uppercase tracking-[0.06em]">{product.name}</span>
          </div>

          <p className="mt-8 text-sm text-ink-soft leading-relaxed max-w-md">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCart accent={product.accent} />
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

      {product.textureImage && (
        <section className="border-t border-line/70 bg-ivory">
          <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.1em] text-terracotta mb-4">
                El pigmento
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                {product.name}, de cerca.
              </h2>
              <p className="mt-5 text-sm text-ink-soft leading-relaxed max-w-sm">
                Cada tono se muele y se prueba a mano hasta lograr un pigmento
                que se difumina sin dejar rastro de polvo suelto.
              </p>
            </div>
            <div className="md:col-span-7 relative">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={product.textureImage.src}
                  alt={product.textureImage.alt}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden md:block w-40 h-40 bg-cream p-3 border border-line/70">
                <div className="relative w-full h-full">
                  <Image
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    fill
                    sizes="160px"
                    className="object-contain p-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.1em] text-terracotta mb-4">
          Completa el look
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {others.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
