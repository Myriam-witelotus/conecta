"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const [hovered, setHovered] = useState(false);
  const secondary = product.images[1] ?? product.textureImage;
  const tall = index % 5 === 0 || index % 5 === 3;

  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative overflow-hidden bg-ivory ${
          tall ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >
        <div
          className="absolute inset-8 rounded-full opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-90"
          style={{ background: `radial-gradient(circle, ${product.accent}33, transparent 70%)` }}
        />
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className={`object-contain p-6 transition-all duration-700 ease-out ${
            secondary && hovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
        {secondary && (
          <Image
            src={secondary.src}
            alt={secondary.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className={`object-contain p-6 transition-all duration-700 ease-out ${
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-lg text-ink">{product.name}</p>
          <p className="text-xs uppercase tracking-[0.08em] text-ink-soft mt-0.5">
            {product.categoryLabel}
          </p>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span
            className="h-3.5 w-3.5 rounded-full border border-ink/10"
            style={{ backgroundColor: product.accent }}
          />
          <span className="text-sm text-ink-soft">${product.price}</span>
        </div>
      </div>
    </Link>
  );
}
