"use client";

import { useState } from "react";

export default function AddToCart({ accent }: { accent: string }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="flex items-center border border-ink/20 h-12 shrink-0">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="w-9 h-full flex items-center justify-center text-ink-soft hover:text-ink transition-colors"
          aria-label="Reducir cantidad"
        >
          −
        </button>
        <span className="w-7 text-center text-sm">{qty}</span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          className="w-9 h-full flex items-center justify-center text-ink-soft hover:text-ink transition-colors"
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={() => {
          setAdded(true);
          setTimeout(() => setAdded(false), 1800);
        }}
        style={{ backgroundColor: added ? accent : undefined }}
        className={`h-12 flex-1 sm:flex-none px-4 sm:px-8 text-[11px] sm:text-[13px] uppercase tracking-[0.08em] sm:tracking-[0.12em] whitespace-nowrap transition-colors ${
          added ? "text-ivory" : "bg-ink text-ivory hover:bg-ink/85"
        }`}
      >
        {added ? "Agregado" : "Agregar al carrito"}
      </button>
      <button
        type="button"
        onClick={() => setSaved((s) => !s)}
        aria-label="Guardar en favoritos"
        aria-pressed={saved}
        className="h-12 w-12 flex items-center justify-center border border-ink/20 text-ink shrink-0 hover:border-ink/50 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4">
          <path d="M12 21s-7.5-4.6-10-9.3C.4 8.1 2 4.5 5.6 4c2-.3 3.9.6 5 2.2C11.7 4.6 13.6 3.7 15.6 4c3.6.5 5.2 4.1 3.6 7.7C16.5 16.4 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
