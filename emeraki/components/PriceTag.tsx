export default function PriceTag({
  price,
  size = "sm",
  className = "",
}: {
  price: number;
  size?: "sm" | "lg";
  className?: string;
}) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span className={size === "lg" ? "font-display text-2xl text-ink" : "text-sm text-ink-soft"}>
        ${price}
      </span>
      <sup className="text-[9px] text-ink-soft/60 tracking-[0.04em] not-italic">ref.</sup>
    </span>
  );
}
