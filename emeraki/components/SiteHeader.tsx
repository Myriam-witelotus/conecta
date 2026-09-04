import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.08em] uppercase text-ink-soft flex-1">
          <Link href="/tienda" className="hover:text-ink transition-colors">
            Tienda
          </Link>
          <Link href="/tienda?categoria=multiusos" className="hover:text-ink transition-colors">
            Multiusos
          </Link>
          <Link href="/tienda?categoria=rubor" className="hover:text-ink transition-colors">
            Color
          </Link>
        </nav>

        <Link
          href="/"
          className="font-display text-2xl md:text-3xl tracking-[0.02em] text-ink flex-1 text-center md:flex-none"
        >
          EMÉRAKI
        </Link>

        <div className="hidden md:flex items-center justify-end gap-6 text-[13px] tracking-[0.08em] uppercase text-ink-soft flex-1">
          <span className="text-ink-soft/70">Mérida, MX</span>
          <a
            href="https://instagram.com/emeraki.mx"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink transition-colors"
          >
            @emeraki.mx
          </a>
        </div>
      </div>
    </header>
  );
}
