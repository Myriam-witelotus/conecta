"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const image = product.images[active];

  return (
    <div>
      <div className="relative aspect-[4/5] bg-ivory overflow-hidden">
        <div
          className="absolute -inset-10 opacity-60 blur-3xl"
          style={{ background: `radial-gradient(circle at 60% 40%, ${product.accent}2e, transparent 65%)` }}
        />
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-contain p-8 md:p-10 transition-opacity duration-500"
        />
      </div>
      {product.images.length > 1 && (
        <div className="mt-6 flex gap-3">
          {product.images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              aria-label={`Ver ${img.alt}`}
              className={`relative h-20 w-20 bg-ivory overflow-hidden border transition-colors ${
                active === i ? "border-ink" : "border-line/70 hover:border-ink-soft"
              }`}
            >
              <Image src={img.src} alt={img.alt} fill sizes="80px" className="object-contain p-2" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
