import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import IngredientStory from "@/components/IngredientStory";
import { getProductBySlug, products } from "@/lib/products";

export default function Home() {
  const hero = getProductBySlug("buganvilla")!;
  const featured = products.filter((p) =>
    ["buganvilla", "azahar", "cempasuchil", "magnolia"].includes(p.slug)
  );

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-14 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.14em] text-terracotta mb-5">
              Multiusos · Origen mexicano
            </p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-ink">
              Un color,
              <br />
              <span className="italic">todos los usos.</span>
            </h1>
            <p className="mt-6 text-ink-soft leading-relaxed max-w-sm">
              Nueve tonos inspirados en flores mexicanas, formulados para
              mejillas, labios y párpados. Se aplican con los dedos y se
              funden con la piel — sin brochas, sin líneas que difuminar.
            </p>
            <div className="mt-9 flex items-center gap-6">
              <Link
                href="/tienda"
                className="inline-flex items-center h-12 px-8 bg-ink text-ivory text-sm uppercase tracking-[0.1em] hover:bg-ink/85 transition-colors"
              >
                Ver colección
              </Link>
              <Link
                href={`/producto/${hero.slug}`}
                className="text-sm text-ink-soft hover:text-ink underline underline-offset-4"
              >
                Descubre {hero.name}
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2 relative">
            <div className="relative aspect-[5/4] md:aspect-[4/3]">
              <div
                className="absolute inset-6 md:inset-14 rounded-full blur-3xl opacity-70"
                style={{ background: `radial-gradient(circle, ${hero.accent}3a, transparent 70%)` }}
              />
              <Image
                src={hero.images[0].src}
                alt={hero.images[0].alt}
                fill
                priority
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-contain p-6 md:p-10"
              />
            </div>
            <div className="absolute left-0 bottom-0 md:left-6 md:-bottom-10 bg-ivory px-5 py-4 border border-line/70 max-w-[11rem]">
              <p className="text-[11px] uppercase tracking-[0.08em] text-ink-soft">Destacado</p>
              <p className="font-display text-lg text-ink mt-1">{hero.name}</p>
              <p className="text-xs text-ink-soft mt-0.5">{hero.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 border-t border-line/70">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-terracotta mb-3">
              La colección
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink">
              Cuatro formas de empezar.
            </h2>
          </div>
          <Link href="/tienda" className="hidden md:block text-sm text-ink-soft hover:text-ink underline underline-offset-4">
            Ver los nueve tonos
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {featured.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* EDITORIAL / INGREDIENT STORY */}
      <section className="border-t border-line/70 bg-ivory">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-20 md:py-28">
          <div className="text-center max-w-lg mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.14em] text-terracotta mb-4">
              De dónde viene el color
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
              Pigmentos que se muelen a mano, no que se imprimen.
            </h2>
          </div>
          <IngredientStory
            image="/products/texture-red-paste.png"
            imageAlt="Textura de pigmento cremoso EMÉRAKI"
            notesLeft={[
              {
                title: "Óxidos de hierro",
                text: "Dan el color base y no se oxidan con el sudor ni el sol.",
              },
              {
                title: "Manteca de karité",
                text: "Funde el pigmento en la piel sin dejar sensación pesada.",
              },
            ]}
            notesRight={[
              {
                title: "Cera de jojoba",
                text: "Sostiene la fórmula en crema, sin necesidad de conservadores agresivos.",
              },
              {
                title: "Vitamina E",
                text: "Protege el pigmento y la piel de la oxidación diaria.",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 text-center">
        <p className="text-xs uppercase tracking-[0.14em] text-terracotta mb-4">
          Hecho en Mérida
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-ink max-w-2xl mx-auto leading-tight">
          Nueve tonos. Un solo gesto para todos.
        </h2>
        <Link
          href="/tienda"
          className="mt-9 inline-flex items-center h-12 px-9 bg-ink text-ivory text-sm uppercase tracking-[0.1em] hover:bg-ink/85 transition-colors"
        >
          Explorar la tienda
        </Link>
      </section>
    </div>
  );
}
