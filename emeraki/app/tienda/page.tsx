import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Eyebrow from "@/components/Eyebrow";
import { categoryLabels, products, type Product, type ProductCategory } from "@/lib/products";

export const metadata = {
  title: "Tienda — EMÉRAKI",
};

const categories: { key: ProductCategory | "todo"; label: string }[] = [
  { key: "todo", label: "Todo" },
  { key: "multiusos", label: categoryLabels.multiusos },
  { key: "polvo", label: categoryLabels.polvo },
  { key: "bronzer", label: categoryLabels.bronzer },
  { key: "rubor", label: categoryLabels.rubor },
  { key: "iluminador", label: categoryLabels.iluminador },
];

export default async function TiendaPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;
  const active = categoria && categoria in categoryLabels ? (categoria as ProductCategory) : "todo";
  const list = active === "todo" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-10 md:pt-24 md:pb-14 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <Eyebrow className="mb-5">Colección completa</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.02] text-ink">
            Nueve tonos, un mismo gesto.
          </h1>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex items-end">
          <p className="text-ink-soft leading-relaxed text-[15px]">
            Multiusos, polvo, bronzer, rubor e iluminador — pensados para
            aplicarse con los dedos y desaparecer en la piel. Cada tono lleva
            el nombre de una flor.
          </p>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-6 md:px-10 flex flex-wrap gap-x-7 gap-y-3 pb-12 border-b border-line/70 text-[12px]">
        {categories.map((c) => {
          const href = c.key === "todo" ? "/tienda" : `/tienda?categoria=${c.key}`;
          const isActive = c.key === active;
          return (
            <Link
              key={c.key}
              href={href}
              className={`uppercase tracking-[0.12em] pb-2 border-b-2 transition-colors ${
                isActive
                  ? "border-terracotta text-ink"
                  : "border-transparent text-ink-soft hover:text-ink"
              }`}
            >
              {c.label}
            </Link>
          );
        })}
      </nav>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        {list.length >= 6 ? <Lookbook list={list} /> : <SimpleGrid list={list} />}
      </div>
    </div>
  );
}

function SimpleGrid({ list }: { list: Product[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
      {list.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

// editorial lookbook rhythm — groups of 3 / 3 / banner / remainder, so the
// page reads as a curated spread rather than a uniform ecommerce grid
function Lookbook({ list }: { list: Product[] }) {
  const groupA = list.slice(0, 3);
  const groupB = list.slice(3, 6);
  const banner = list[6];
  const rest = list.slice(7);

  return (
    <div className="space-y-16 md:space-y-24">
      {groupA.length > 0 && (
        <div className="grid md:grid-cols-12 gap-6">
          {groupA[0] && (
            <div className="md:col-span-7">
              <ProductCard product={groupA[0]} aspect="aspect-[5/4]" imagePadding="p-12 md:p-16" />
            </div>
          )}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            {groupA.slice(1).map((p) => (
              <ProductCard key={p.slug} product={p} aspect="aspect-[5/4]" imagePadding="p-8" />
            ))}
          </div>
        </div>
      )}

      {groupB.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {groupB.map((p) => (
            <ProductCard key={p.slug} product={p} aspect="aspect-[4/5]" imagePadding="p-8" />
          ))}
        </div>
      )}

      {banner && <BannerCard product={banner} />}

      {rest.length > 0 && <SimpleGrid list={rest} />}
    </div>
  );
}

function BannerCard({ product }: { product: Product }) {
  return (
    <Link href={`/producto/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-ivory aspect-[16/7]">
        {product.textureImage && (
          <Image
            src={product.textureImage.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20 mix-blend-multiply"
          />
        )}
        <Image
          src={product.heroImage.src}
          alt={product.heroImage.alt}
          fill
          sizes="(min-width: 768px) 90vw, 100vw"
          className="object-contain p-10 md:p-14 transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute left-6 bottom-6 md:left-10 md:bottom-8">
          <p className="text-[11px] uppercase tracking-[0.1em] text-ink-soft">{product.categoryLabel}</p>
          <p className="font-display text-2xl md:text-3xl text-ink mt-1">{product.name}</p>
        </div>
      </div>
    </Link>
  );
}
