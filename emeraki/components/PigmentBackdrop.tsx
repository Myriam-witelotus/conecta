/**
 * Decorative backdrop for a product photograph: a soft pigment/texture
 * wash plus a grounding shadow ellipse, so the isolated product cutout
 * reads as a composed still life rather than a pasted-in PNG.
 */
export function PigmentSmear({
  texture,
  accent,
  className = "",
}: {
  texture?: string;
  accent: string;
  className?: string;
}) {
  if (texture) {
    return (
      <div
        aria-hidden
        className={`absolute rounded-full ${className}`}
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
          maskImage: "radial-gradient(circle, black 45%, transparent 74%)",
          WebkitMaskImage: "radial-gradient(circle, black 45%, transparent 74%)",
        }}
      />
    );
  }
  return (
    <div
      aria-hidden
      className={`absolute rounded-full blur-2xl ${className}`}
      style={{ background: `radial-gradient(circle, ${accent}45, transparent 72%)` }}
    />
  );
}

export function GroundShadow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-full bg-ink/[0.14] blur-2xl ${className}`}
    />
  );
}
