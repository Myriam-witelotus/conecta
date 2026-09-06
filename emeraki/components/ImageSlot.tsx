import Image from "next/image";
import type { ProductImage } from "@/lib/products";

/**
 * A reusable image slot: renders the real photo when `image` is set, or a
 * plain, honestly-labeled placeholder box when it isn't. This is how
 * botanical/lifestyle photography gets added later — set the field in
 * lib/products.ts or lib/content.ts and this component picks it up
 * automatically. No layout code needs to change.
 */
export default function ImageSlot({
  image,
  label,
  aspect = "aspect-[4/5]",
  fit = "cover",
  className = "",
  imageClassName = "",
}: {
  image?: ProductImage;
  label: string;
  aspect?: string;
  fit?: "cover" | "contain";
  className?: string;
  imageClassName?: string;
}) {
  if (image) {
    return (
      <div className={`relative ${aspect} ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className={`${fit === "cover" ? "object-cover" : "object-contain"} ${imageClassName}`}
        />
      </div>
    );
  }
  return (
    <div
      className={`relative ${aspect} ${className} flex items-center justify-center border border-dashed border-line bg-ivory/60`}
    >
      <p className="text-[10px] uppercase tracking-[0.14em] text-ink-soft/60 text-center px-6 leading-relaxed">
        {label}
      </p>
    </div>
  );
}
