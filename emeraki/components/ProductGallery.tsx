"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { TextureField, getFieldSide } from "@/components/PigmentBackdrop";

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const image = product.galleryImages[active] ?? product.heroImage;

  return (
    <div>
      <div className="relative aspect-[4/5] bg-ivory overflow-hidden">
        {product.textureImage && (
          <TextureField
            texture={product.textureImage.src}
            alt={product.textureImage.alt}
            side={getFieldSide(product.slug)}
            width="w-[56%]"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center p-14 md:p-16">
          <div className="relative w-[60%] aspect-[4/5]">
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 26vw, 55vw"
              className="object-contain drop-shadow-[0_8px_11px_rgba(30,26,22,0.24)] transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
      {product.galleryImages.length > 1 && (
        <div className="mt-6 flex gap-3">
          {product.galleryImages.map((img, i) => (
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
