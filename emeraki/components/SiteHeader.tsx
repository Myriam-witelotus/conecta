import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <nav className="hidden md:flex items-center gap-9 text-[11px] tracking-[0.16em] uppercase text-ink-soft flex-1">
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
          className="font-display text-[1.65rem] md:text-3xl tracking-[0.03em] text-ink flex-1 text-center md:flex-none"
        >
          EMÉRAKI
        </Link>

        <div className="hidden md:flex items-center justify-end gap-6 flex-1">
          <span className="text-[11px] tracking-[0.14em] uppercase text-ink-soft/70">
            Mérida, MX
          </span>
          <a
            href="https://instagram.com/emeraki.mx"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.14em] uppercase text-ink-soft hover:text-ink transition-colors"
          >
            @emeraki.mx
          </a>
          <span className="w-px h-4 bg-line" />
          <button type="button" aria-label="Buscar" className="text-ink-soft hover:text-ink transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
          </button>
          <button type="button" aria-label="Carrito" className="relative text-ink-soft hover:text-ink transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M6 8h12l-1 12H7L6 8z" strokeLinejoin="round" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 text-[9px] leading-none w-3.5 h-3.5 rounded-full bg-ink text-ivory flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
