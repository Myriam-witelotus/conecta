"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import PriceTag from "@/components/PriceTag";

export default function ProductCard({
  product,
  aspect = "aspect-[4/5]",
  imagePadding = "p-8",
}: {
  product: Product;
  aspect?: string;
  imagePadding?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const secondary = product.images[1] ?? product.textureImage;

  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative overflow-hidden bg-ivory ${aspect}`}>
        <div
          className="absolute inset-10 rounded-full opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-90"
          style={{ background: `radial-gradient(circle, ${product.accent}30, transparent 72%)` }}
        />
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className={`object-contain ${imagePadding} transition-all duration-700 ease-out ${
            secondary && hovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
        {secondary && (
          <Image
            src={secondary.src}
            alt={secondary.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            className={`object-contain ${imagePadding} transition-all duration-700 ease-out ${
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 border-t border-line/70 pt-3">
        <div>
          <p className="font-display text-lg text-ink leading-tight">{product.name}</p>
          <p className="text-[11px] uppercase tracking-[0.1em] text-ink-soft mt-1">
            {product.categoryLabel}
          </p>
        </div>
        <div className="flex items-center gap-2 pt-1 shrink-0">
          <span
            className="h-3 w-3 rounded-full border border-ink/10"
            style={{ backgroundColor: product.accent }}
          />
          <PriceTag price={product.price} />
        </div>
      </div>
    </Link>
  );
}
