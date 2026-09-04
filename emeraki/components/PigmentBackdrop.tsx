/**
 * Decorative backdrop for a product photograph: an irregular smear of the
 * product's own real texture photo, masked to a soft organic (non-circular)
 * blob, plus a grounding contact shadow — so the isolated product cutout
 * reads as something photographed on a surface, not a pasted-in PNG behind
 * geometric shapes. Only rendered when a real texture photo exists; no
 * synthetic color glow fallback.
 */

// hand-drawn irregular blob outlines (200x200 viewBox), each with a baked-in
// gaussian blur so the mask edge feathers like a real swiped smear rather
// than a crisp cutout
const BLOB_PATHS = [
  "M42,88 C18,55 48,15 98,20 C150,10 190,50 182,98 C192,148 148,188 98,180 C50,190 8,142 42,88 Z",
  // soft irregular cloud — for loose/dispersed powder
  "M30,70 C15,40 55,10 105,18 C155,8 195,45 185,95 C205,140 160,192 108,182 C60,198 5,150 20,105 C10,90 22,80 30,70 Z",
  "M50,95 C30,55 60,18 110,22 C145,8 188,35 178,80 C198,120 165,175 115,178 C70,195 20,155 35,115 C22,108 44,102 50,95 Z",
  // elongated tapered swipe — for a swiped/applied cream smear
  "M18,148 C6,132 18,112 42,98 C70,80 108,68 138,48 C158,35 178,18 186,26 C192,34 178,50 158,64 C126,86 92,104 62,128 C42,144 30,166 18,148 Z",
];

function blobMask(index: number, feather: number) {
  const path = BLOB_PATHS[index % BLOB_PATHS.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><filter id='f' x='-40%' y='-40%' width='180%' height='180%'><feGaussianBlur stdDeviation='${feather}'/></filter></defs><path d='${path}' fill='#fff' filter='url(#f)'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export function PigmentSmear({
  texture,
  className = "",
  blobIndex = 0,
  rotate = 0,
  feather = 10,
  bgSize = "230%",
  bgPosition = "38% 32%",
  opacity = 0.8,
}: {
  texture: string;
  className?: string;
  blobIndex?: number;
  rotate?: number;
  feather?: number;
  bgSize?: string;
  bgPosition?: string;
  opacity?: number;
}) {
  const mask = blobMask(blobIndex, feather);
  return (
    <div
      aria-hidden
      className={`absolute ${className}`}
      style={{
        backgroundImage: `url(${texture})`,
        backgroundSize: bgSize,
        backgroundPosition: bgPosition,
        opacity,
        transform: `rotate(${rotate}deg)`,
        WebkitMaskImage: mask,
        maskImage: mask,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    />
  );
}

// per-shade smear tuning so the same texture photo doesn't look identically
// stamped everywhere it's reused (hero vs. gallery vs. featured pair) — and
// loose powders (Azahar) get a softer, more dispersed edge than creams
const SMEAR_CONFIG: Record<
  string,
  { blobIndex: number; rotate: number; feather: number; bgPosition: string }
> = {
  buganvilla: { blobIndex: 3, rotate: -14, feather: 9, bgPosition: "42% 35%" },
  jacaranda: { blobIndex: 3, rotate: 22, feather: 10, bgPosition: "55% 40%" },
  azahar: { blobIndex: 1, rotate: -6, feather: 18, bgPosition: "45% 55%" },
  malva: { blobIndex: 3, rotate: 8, feather: 10, bgPosition: "35% 45%" },
};

export function getSmearConfig(slug: string) {
  return SMEAR_CONFIG[slug] ?? { blobIndex: 0, rotate: 0, feather: 12, bgPosition: "center" };
}

export function GroundShadow({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`absolute ${className}`}>
      <div className="absolute inset-0 rounded-[50%] bg-ink/[0.20] blur-md" />
      <div className="absolute -inset-x-[35%] -inset-y-[70%] rounded-[50%] bg-ink/[0.07] blur-2xl" />
    </div>
  );
}
