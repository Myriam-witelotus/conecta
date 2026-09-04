import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl mb-4">EMÉRAKI</p>
            <p className="text-sm text-ink-soft leading-relaxed max-w-xs">
              Color multiusos inspirado en flores mexicanas. Texturas que se
              funden con los dedos, hechas para el rostro y la mano que las
              aplica.
            </p>
          </div>
          <div className="text-sm">
            <p className="uppercase tracking-[0.1em] text-ink-soft mb-4">Tienda</p>
            <ul className="space-y-2 text-ink-soft">
              <li><Link href="/tienda?categoria=multiusos" className="hover:text-ink">Multiusos</Link></li>
              <li><Link href="/tienda?categoria=polvo" className="hover:text-ink">Polvo matificante</Link></li>
              <li><Link href="/tienda?categoria=bronzer" className="hover:text-ink">Bronzer</Link></li>
              <li><Link href="/tienda?categoria=rubor" className="hover:text-ink">Rubor</Link></li>
              <li><Link href="/tienda?categoria=iluminador" className="hover:text-ink">Iluminador</Link></li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="uppercase tracking-[0.1em] text-ink-soft mb-4">EMÉRAKI</p>
            <ul className="space-y-2 text-ink-soft">
              <li><a href="https://instagram.com/emeraki.mx" target="_blank" rel="noreferrer" className="hover:text-ink">Instagram</a></li>
              <li className="text-ink-soft/70">Mérida, Yucatán · México</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-line/70 flex flex-col md:flex-row justify-between gap-2 text-xs text-ink-soft/70">
          <span>&copy; {new Date().getFullYear()} EMÉRAKI</span>
          <span>Sitio en construcción — imágenes de producto reales, resto en curación</span>
        </div>
      </div>
    </footer>
  );
}
