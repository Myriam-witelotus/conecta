import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import IngredientStory from "@/components/IngredientStory";
import ImageSlot from "@/components/ImageSlot";
import Eyebrow from "@/components/Eyebrow";
import PriceTag from "@/components/PriceTag";
import { TextureField, getFieldSide } from "@/components/PigmentBackdrop";
import { getProductBySlug, products } from "@/lib/products";
import { homeContent } from "@/lib/content";

// EDIT HOMEPAGE CONTENT HERE: all copy/images for this page live in
// lib/content.ts (homeContent) and lib/products.ts (products) — nothing
// below is a hardcoded string that needs a code change to update.

export default function Home() {
  const hero = getProductBySlug(homeContent.hero.featuredSlug)!;
  const [pairA, pairB] = homeContent.featuredProducts.slugs.map((slug) => getProductBySlug(slug)!);
  const featuredSlugs = new Set([hero.slug, pairA.slug, pairB.slug]);
  const rest = products.filter((p) => !featuredSlugs.has(p.slug));

  return (
    <div>
      {/* HERO — asymmetric, full-bleed right */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-12 md:min-h-[86vh]">
          <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-14 md:py-0">
            <Eyebrow className="mb-6">{homeContent.hero.eyebrow}</Eyebrow>
            <h1 className="font-display text-[3.2rem] leading-[0.98] md:text-[4.2rem] md:leading-[0.96] text-ink">
              {homeContent.hero.headingLine1}
              <br />
              <span className="italic">{homeContent.hero.headingLine2}</span>
            </h1>
            <p className="mt-7 text-ink-soft leading-relaxed max-w-[26rem] text-[15px]">
              {homeContent.hero.body}
            </p>
            <div className="mt-10 flex items-center gap-7">
              <Link
                href="/tienda"
                className="inline-flex items-center h-11 px-7 bg-ink text-ivory text-[12px] uppercase tracking-[0.14em] hover:bg-ink/85 transition-colors"
              >
                {homeContent.hero.primaryCtaLabel}
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
            {/* the real cream texture, photographed, occupying a genuine
                portion of the frame — the product is composed to overlap it */}
            {hero.textureImage && (
              <TextureField
                texture={hero.textureImage.src}
                alt={hero.textureImage.alt}
                side={getFieldSide(hero.slug)}
                width="w-[52%]"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center p-14 md:p-16">
              <div className="relative w-[58%] md:w-[54%] aspect-[4/5]">
                <Image
                  src={hero.heroImage.src}
                  alt={hero.heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 32vw, 55vw"
                  className="object-contain drop-shadow-[0_8px_10px_rgba(30,26,22,0.26)]"
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
            {homeContent.marquee.map((m, i) => (
              <span key={m} className="flex items-center gap-3">
                {m}
                {i < homeContent.marquee.length - 1 && <span className="text-terracotta">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-4 md:pt-24 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <Eyebrow className="mb-4">{homeContent.collectionIntro.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-ink max-w-xl">
            {homeContent.collectionIntro.heading}
          </h2>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex items-end">
          <p className="text-ink-soft leading-relaxed text-[15px]">{homeContent.collectionIntro.body}</p>
        </div>
      </section>

      {/* FEATURED PRODUCTS — alternating image/text, asymmetric */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 space-y-24 md:space-y-32">
        <div className="grid md:grid-cols-12 gap-8 md:gap-4 items-center">
          <div className="md:col-span-7 relative aspect-[5/4] bg-ivory overflow-hidden">
            {pairA.textureImage && (
              <TextureField
                texture={pairA.textureImage.src}
                alt={pairA.textureImage.alt}
                side={getFieldSide(pairA.slug)}
                width="w-[52%]"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center p-10 md:p-14">
              <div className="relative w-[56%] aspect-[4/5]">
                <Image
                  src={pairA.heroImage.src}
                  alt={pairA.heroImage.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 55vw"
                  className="object-contain drop-shadow-[0_7px_9px_rgba(30,26,22,0.2)]"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Eyebrow className="mb-4">{pairA.categoryLabel}</Eyebrow>
            <h3 className="font-display text-3xl md:text-[2.6rem] leading-[1.02] text-ink">{pairA.name}</h3>
            <p className="mt-5 text-ink-soft leading-relaxed text-[15px] max-w-xs">{pairA.tagline}</p>
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
            <h3 className="font-display text-3xl md:text-[2.6rem] leading-[1.02] text-ink">{pairB.name}</h3>
            <p className="mt-5 text-ink-soft leading-relaxed text-[15px] max-w-xs">{pairB.tagline}</p>
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
              <TextureField
                texture={pairB.textureImage.src}
                alt={pairB.textureImage.alt}
                side={getFieldSide(pairB.slug)}
                width="w-[52%]"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center p-10 md:p-14">
              <div className="relative w-[56%] aspect-[4/5]">
                <Image
                  src={pairB.heroImage.src}
                  alt={pairB.heroImage.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 55vw"
                  className="object-contain drop-shadow-[0_7px_9px_rgba(30,26,22,0.2)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN MOMENT — full-bleed real texture */}
      <section className="relative h-[52vh] md:h-[64vh] overflow-hidden">
        <Image
          src={homeContent.campaignMoment.image.src}
          alt={homeContent.campaignMoment.image.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/10" />
        <div className="absolute bottom-8 left-6 md:bottom-14 md:left-14 max-w-xs">
          <p className="font-display italic text-2xl md:text-3xl text-ivory leading-snug drop-shadow">
            &ldquo;{homeContent.campaignMoment.quote}&rdquo;
          </p>
        </div>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="border-b border-line/70">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-lg mb-14">
            <Eyebrow className="mb-4">{homeContent.philosophy.eyebrow}</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-5">
              {homeContent.philosophy.heading}
            </h2>
            <p className="text-ink-soft leading-relaxed text-[15px]">{homeContent.philosophy.body}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 border-t border-line/70 pt-10">
            {homeContent.philosophy.pillars.map((pillar) => (
              <div key={pillar.title}>
                <p className="font-display text-lg text-ink mb-2">{pillar.title}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTANICAL / PRODUCT STORYTELLING */}
      <section className="border-b border-line/70 bg-ivory">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-md mb-16">
            <Eyebrow className="mb-4">{homeContent.storytelling.eyebrow}</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
              {homeContent.storytelling.heading}
            </h2>
          </div>
          <IngredientStory
            image={homeContent.storytelling.image.src}
            imageAlt={homeContent.storytelling.image.alt}
            notesLeft={homeContent.storytelling.notesLeft}
            notesRight={homeContent.storytelling.notesRight}
          />
        </div>
      </section>

      {/* BEAUTY RITUAL — full-bleed alternating section, same language as the PDP "how to use" */}
      <section className="border-b border-line/70">
        <div className="grid md:grid-cols-12 md:min-h-[65vh]">
          <div className="md:col-span-5 flex flex-col justify-center px-6 md:px-14 py-16 md:py-0 order-2 md:order-1">
            <Eyebrow className="mb-5">{homeContent.ritual.eyebrow}</Eyebrow>
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.05] text-ink max-w-sm">
              {homeContent.ritual.heading}
            </h2>
            <ol className="mt-9 space-y-6 max-w-sm">
              {homeContent.ritual.steps.map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span className="font-display text-lg text-terracotta shrink-0">0{i + 1}</span>
                  <span className="text-sm text-ink-soft leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            {/* REPLACE LIFESTYLE IMAGE HERE — set homeContent.ritual.image in lib/content.ts */}
            <ImageSlot
              image={homeContent.ritual.image}
              label="Fotografía de ritual / lifestyle — pendiente"
              aspect="aspect-[4/3] md:aspect-auto md:h-full"
            />
          </div>
        </div>
      </section>

      {/* REST OF COLLECTION */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12 border-b border-line/70 pb-6">
          <Eyebrow>{homeContent.restOfCollection.eyebrow}</Eyebrow>
          <Link href="/tienda" className="text-[12px] uppercase tracking-[0.12em] text-ink-soft hover:text-ink underline underline-offset-4">
            {homeContent.restOfCollection.linkLabel}
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {rest.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* SHOP CTA */}
      <section className="border-t border-line/70">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-32 text-center">
          <Eyebrow className="mb-5">{homeContent.shopCta.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight">
            {homeContent.shopCta.heading}
          </h2>
          <Link
            href="/tienda"
            className="mt-9 inline-flex items-center h-12 px-9 bg-ink text-ivory text-[12px] uppercase tracking-[0.14em] hover:bg-ink/85 transition-colors"
          >
            {homeContent.shopCta.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
