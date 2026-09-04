"use client";

import { useState } from "react";

export default function AddToCart({ accent }: { accent: string }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center border border-ink/20">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="w-10 h-12 flex items-center justify-center text-ink-soft hover:text-ink transition-colors"
          aria-label="Reducir cantidad"
        >
          −
        </button>
        <span className="w-8 text-center text-sm">{qty}</span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          className="w-10 h-12 flex items-center justify-center text-ink-soft hover:text-ink transition-colors"
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
        className={`flex-1 h-12 px-8 text-sm uppercase tracking-[0.1em] transition-colors ${
          added ? "text-ivory" : "bg-ink text-ivory hover:bg-ink/85"
        }`}
      >
        {added ? "Agregado" : "Agregar al carrito"}
      </button>
    </div>
  );
}
