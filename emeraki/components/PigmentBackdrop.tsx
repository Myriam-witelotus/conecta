import Image from "next/image";

/**
 * TextureField — the real texture/pigment photograph used as a genuine
 * part of the photographic environment: a plain rectangular crop occupying
 * a meaningful portion of the frame, cropped by the frame itself (no mask,
 * no gradient, no synthetic shape). The product is composed to overlap
 * this field so it reads as one still life, not a product icon with a
 * decorative graphic behind it.
 */
export function TextureField({
  texture,
  alt = "",
  side = "right",
  width = "w-[55%]",
}: {
  texture: string;
  alt?: string;
  side?: "left" | "right";
  width?: string;
}) {
  return (
    <div className={`absolute inset-y-0 ${side === "right" ? "right-0" : "left-0"} ${width} overflow-hidden`}>
      <Image src={texture} alt={alt} fill sizes="700px" className="object-cover" />
    </div>
  );
}

// which side of the frame each shade's real texture field sits on, so the
// product (kept centered) naturally overlaps it — varied per shade so
// reused components don't all look identically composed
const FIELD_SIDE: Record<string, "left" | "right"> = {
  buganvilla: "right",
  jacaranda: "left",
  azahar: "right",
  malva: "left",
};

export function getFieldSide(slug: string): "left" | "right" {
  return FIELD_SIDE[slug] ?? "right";
}
