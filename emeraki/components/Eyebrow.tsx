export default function Eyebrow({
  children,
  tone = "terracotta",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "terracotta" | "ink-soft";
  className?: string;
}) {
  const color = tone === "terracotta" ? "text-terracotta" : "text-ink-soft";
  return (
    <p className={`text-[11px] uppercase tracking-[0.18em] ${color} ${className}`}>
      {children}
    </p>
  );
}
