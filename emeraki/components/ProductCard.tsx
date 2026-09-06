"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import PriceTag from "@/components/PriceTag";
import { TextureField, getFieldSide } from "@/components/PigmentBackdrop";

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
  const secondary = product.secondaryImage ?? product.galleryImages[1] ?? product.textureImage;

  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative overflow-hidden bg-ivory ${aspect}`}>
        {product.textureImage && (
          <TextureField
            texture={product.textureImage.src}
            alt={product.textureImage.alt}
            side={getFieldSide(product.slug)}
            width="w-[50%]"
          />
        )}
        <Image
          src={product.heroImage.src}
          alt={product.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className={`object-contain ${imagePadding} drop-shadow-[0_6px_8px_rgba(30,26,22,0.2)] transition-all duration-700 ease-out ${
            secondary && hovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
        {secondary && (
          <Image
            src={secondary.src}
            alt={secondary.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            className={`object-contain ${imagePadding} drop-shadow-[0_6px_8px_rgba(30,26,22,0.2)] transition-all duration-700 ease-out ${
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
            style={{ backgroundColor: product.shadeColor }}
          />
          <PriceTag price={product.price} />
        </div>
      </div>
    </Link>
  );
}
