import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categoryLabels, products, type ProductCategory } from "@/lib/products";

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
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="pt-16 pb-10 md:pt-24 md:pb-14 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.14em] text-terracotta mb-4">
          Colección completa
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight text-ink">
          Nueve tonos, un mismo gesto.
        </h1>
        <p className="mt-5 text-ink-soft leading-relaxed">
          Multiusos, polvo, bronzer, rubor e iluminador — pensados para
          aplicarse con los dedos y desaparecer en la piel. Cada tono lleva el
          nombre de una flor.
        </p>
      </div>

      <nav className="flex flex-wrap gap-x-6 gap-y-3 pb-14 border-b border-line/70 text-sm">
        {categories.map((c) => {
          const href = c.key === "todo" ? "/tienda" : `/tienda?categoria=${c.key}`;
          const isActive = c.key === active;
          return (
            <Link
              key={c.key}
              href={href}
              className={`uppercase tracking-[0.08em] pb-1 border-b-2 transition-colors ${
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 py-14">
        {list.map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}
