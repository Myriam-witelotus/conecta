import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import IngredientStory from "@/components/IngredientStory";
import Eyebrow from "@/components/Eyebrow";
import PriceTag from "@/components/PriceTag";
import { PigmentSmear, GroundShadow, getSmearConfig } from "@/components/PigmentBackdrop";
import { getProductBySlug, products } from "@/lib/products";

const marquee = [
  "Nueve tonos",
  "Hecho en Mérida",
  "Fórmula multiusos",
  "Difumina con los dedos",
];

export default function Home() {
  const hero = getProductBySlug("buganvilla")!;
  const pairA = getProductBySlug("azahar")!;
  const pairB = getProductBySlug("cempasuchil")!;
  const rest = products.filter((p) => !["buganvilla", "azahar", "cempasuchil"].includes(p.slug));

  return (
    <div>
      {/* HERO — asymmetric, full-bleed right */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-12 md:min-h-[86vh]">
          <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-14 md:py-0">
            <Eyebrow className="mb-6">Multiusos · Origen mexicano</Eyebrow>
            <h1 className="font-display text-[3.2rem] leading-[0.98] md:text-[4.2rem] md:leading-[0.96] text-ink">
              Un color,
              <br />
              <span className="italic">todos los usos.</span>
            </h1>
            <p className="mt-7 text-ink-soft leading-relaxed max-w-[26rem] text-[15px]">
              Nueve tonos inspirados en flores mexicanas, formulados para
              mejillas, labios y párpados. Se aplican con los dedos y se
              funden con la piel — sin brochas, sin líneas que difuminar.
            </p>
            <div className="mt-10 flex items-center gap-7">
              <Link
                href="/tienda"
                className="inline-flex items-center h-11 px-7 bg-ink text-ivory text-[12px] uppercase tracking-[0.14em] hover:bg-ink/85 transition-colors"
              >
                Ver colección
              </Link>
              <Link
                href={`/producto/${hero.slug}`}
                className="text-[13px] text-ink-soft hover:text-ink underline underline-offset-4 decoration-line"
              >
                Descubre {hero.name}
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2 relative aspect-[6/7] md:aspect-auto bg-cream overflow-hidden">
            {/* irregular burgundy cream smear, offset behind the product */}
            {hero.textureImage && (
              <PigmentSmear
                texture={hero.textureImage.src}
                {...getSmearConfig(hero.slug)}
                className="w-[42%] aspect-[4/3] top-[14%] right-[6%]"
              />
            )}
            {/* soft grounding shadow beneath the tin */}
            <GroundShadow className="w-[38%] aspect-[5/1] left-1/2 -translate-x-1/2 bottom-[20%] md:bottom-[16%]" />
            {/* complete product, reduced scale, generous negative space */}
            <div className="absolute inset-0 flex items-center justify-center p-14 md:p-16">
              <div className="relative w-[58%] md:w-[54%] aspect-[4/5]">
                <Image
                  src={hero.images[0].src}
                  alt={hero.images[0].alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 32vw, 55vw"
                  className="object-contain drop-shadow-[0_18px_28px_rgba(30,26,22,0.16)]"
                />
              </div>
            </div>
            <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 bg-cream/95 px-5 py-4 max-w-[12rem] border-t-2 border-ink">
              <p className="text-[10px] uppercase tracking-[0.14em] text-ink-soft">Destacado</p>
              <p className="font-display text-xl text-ink mt-1">{hero.name}</p>
              <p className="text-[12px] text-ink-soft mt-1 leading-snug">{hero.tagline}</p>
            </div>
          </div>
        </div>

        {/* marquee strip */}
        <div className="border-y border-line/70">
          <div className="mx-auto max-w-7xl px-6 md:px-10 py-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.14em] text-ink-soft/80">
            {marquee.map((m, i) => (
              <span key={m} className="flex items-center gap-3">
                {m}
                {i < marquee.length - 1 && <span className="text-terracotta">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PAIR — alternating image/text, asymmetric */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 space-y-24 md:space-y-32">
        <div className="grid md:grid-cols-12 gap-8 md:gap-4 items-center">
          <div className="md:col-span-7 relative aspect-[5/4] bg-ivory overflow-hidden">
            {pairA.textureImage && (
              <PigmentSmear
                texture={pairA.textureImage.src}
                {...getSmearConfig(pairA.slug)}
                className="w-[40%] aspect-[4/3] top-[12%] left-[6%]"
              />
            )}
            <GroundShadow className="w-[34%] aspect-[5/1] left-1/2 -translate-x-1/2 bottom-[14%]" />
            <div className="absolute inset-0 flex items-center justify-center p-10 md:p-14">
              <div className="relative w-[56%] aspect-[4/5]">
                <Image
                  src={pairA.images[0].src}
                  alt={pairA.images[0].alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 55vw"
                  className="object-contain drop-shadow-[0_16px_24px_rgba(30,26,22,0.14)]"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Eyebrow className="mb-4">{pairA.categoryLabel}</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.02] text-ink">
              {pairA.name}
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed text-[15px] max-w-xs">
              {pairA.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <PriceTag price={pairA.price} size="lg" />
              <span className="text-xs text-ink-soft">· {pairA.weight}</span>
            </div>
            <Link
              href={`/producto/${pairA.slug}`}
              className="mt-7 inline-block text-[12px] uppercase tracking-[0.12em] border-b border-ink pb-1 hover:text-terracotta hover:border-terracotta transition-colors"
            >
              Ver producto
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-4 items-center">
          <div className="md:col-span-4 order-2 md:order-1">
            <Eyebrow className="mb-4">{pairB.categoryLabel}</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.02] text-ink">
              {pairB.name}
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed text-[15px] max-w-xs">
              {pairB.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <PriceTag price={pairB.price} size="lg" />
              <span className="text-xs text-ink-soft">· {pairB.weight}</span>
            </div>
            <Link
              href={`/producto/${pairB.slug}`}
              className="mt-7 inline-block text-[12px] uppercase tracking-[0.12em] border-b border-ink pb-1 hover:text-terracotta hover:border-terracotta transition-colors"
            >
              Ver producto
            </Link>
          </div>
          <div className="md:col-span-7 md:col-start-6 order-1 md:order-2 relative aspect-[5/4] bg-ivory overflow-hidden">
            {pairB.textureImage && (
              <PigmentSmear
                texture={pairB.textureImage.src}
                {...getSmearConfig(pairB.slug)}
                className="w-[40%] aspect-[4/3] top-[12%] right-[6%]"
              />
            )}
            <GroundShadow className="w-[34%] aspect-[5/1] left-1/2 -translate-x-1/2 bottom-[14%]" />
            <div className="absolute inset-0 flex items-center justify-center p-10 md:p-14">
              <div className="relative w-[56%] aspect-[4/5]">
                <Image
                  src={pairB.images[0].src}
                  alt={pairB.images[0].alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 55vw"
                  className="object-contain drop-shadow-[0_16px_24px_rgba(30,26,22,0.14)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN MOMENT — full-bleed texture */}
      <section className="relative h-[52vh] md:h-[64vh] overflow-hidden">
        <Image
          src="/products/texture-red-paste.png"
          alt="Textura de pigmento cremoso EMÉRAKI en primer plano"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/10" />
        <div className="absolute bottom-8 left-6 md:bottom-14 md:left-14 max-w-xs">
          <p className="font-display italic text-2xl md:text-3xl text-ivory leading-snug drop-shadow">
            &ldquo;El color se aplica, no se pinta.&rdquo;
          </p>
        </div>
      </section>

      {/* INGREDIENT STORY */}
      <section className="border-b border-line/70 bg-ivory">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-md mb-16">
            <Eyebrow className="mb-4">De dónde viene el color</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
              Pigmentos que se muelen a mano, no que se imprimen.
            </h2>
          </div>
          <IngredientStory
            image="/products/texture-mauve-paste.png"
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

      {/* REST OF COLLECTION */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12 border-b border-line/70 pb-6">
          <Eyebrow>El resto de la colección</Eyebrow>
          <Link href="/tienda" className="text-[12px] uppercase tracking-[0.12em] text-ink-soft hover:text-ink underline underline-offset-4">
            Ver todo
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {rest.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line/70">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-32 text-center">
          <Eyebrow className="mb-5">Hecho en Mérida</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight">
            Nueve tonos. Un solo gesto para todos.
          </h2>
          <Link
            href="/tienda"
            className="mt-9 inline-flex items-center h-12 px-9 bg-ink text-ivory text-[12px] uppercase tracking-[0.14em] hover:bg-ink/85 transition-colors"
          >
            Explorar la tienda
          </Link>
        </div>
      </section>
    </div>
  );
}
