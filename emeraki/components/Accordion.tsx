"use client";

import { useState, type ReactNode } from "react";

export function Accordion({ items }: { items: { index: string; title: string; content: ReactNode }[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.index ?? null);

  return (
    <div className="border-t border-line/70">
      {items.map((item) => {
        const isOpen = open === item.index;
        return (
          <div key={item.index} className="border-b border-line/70">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.index)}
              className="w-full flex items-baseline justify-between gap-6 py-5 text-left"
            >
              <span className="flex items-baseline gap-4">
                <span className="text-xs text-terracotta tracking-[0.08em]">{item.index}</span>
                <span className="font-display text-lg text-ink">{item.title}</span>
              </span>
              <span
                className={`text-ink-soft text-xl leading-none transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 text-sm text-ink-soft leading-relaxed max-w-xl">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
