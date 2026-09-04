import Link from "next/link";
import type { Product } from "@/lib/products";

/**
 * Shade selector — shown "when applicable", i.e. only when the current
 * product has sibling shades in the same category. Each swatch links to
 * that shade's own product page (every shade keeps its own URL).
 */
export default function ShadeSelector({ current, siblings }: { current: Product; siblings: Product[] }) {
  if (siblings.length < 2) return null;

  return (
    <div className="mt-6">
      <p className="text-[11px] uppercase tracking-[0.08em] text-ink-soft mb-3">Tono: {current.shade}</p>
      <div className="flex items-center gap-3">
        {siblings.map((p) => {
          const isCurrent = p.slug === current.slug;
          return (
            <Link
              key={p.slug}
              href={`/producto/${p.slug}`}
              aria-label={p.shade}
              aria-current={isCurrent ? "true" : undefined}
              className="group p-0.5"
            >
              <span
                className={`block h-8 w-8 rounded-full border transition-all ${
                  isCurrent
                    ? "ring-2 ring-offset-2 ring-offset-cream ring-ink border-transparent"
                    : "border-ink/15 group-hover:border-ink/40"
                }`}
                style={{ backgroundColor: p.shadeColor }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
