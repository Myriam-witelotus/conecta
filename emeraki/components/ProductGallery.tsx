"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { PigmentSmear, GroundShadow, getSmearConfig } from "@/components/PigmentBackdrop";

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const image = product.images[active];
  const smear = getSmearConfig(product.slug);

  return (
    <div>
      <div className="relative aspect-[4/5] bg-ivory overflow-hidden">
        {product.textureImage && (
          <PigmentSmear
            texture={product.textureImage.src}
            {...smear}
            className="w-[42%] aspect-[4/3] top-[10%] right-[7%]"
          />
        )}
        <GroundShadow className="w-[36%] aspect-[5/1] left-1/2 -translate-x-1/2 bottom-[13%]" />
        <div className="absolute inset-0 flex items-center justify-center p-14 md:p-16">
          <div className="relative w-[62%] aspect-[4/5]">
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 26vw, 55vw"
              className="object-contain drop-shadow-[0_18px_26px_rgba(30,26,22,0.16)] transition-opacity duration-500"
            />
          </div>
        </div>
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
