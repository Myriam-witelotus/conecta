import Image from "next/image";

type Note = { title: string; text: string };

export default function IngredientStory({
  image,
  imageAlt,
  notesLeft,
  notesRight,
  fit = "cover",
  accent,
}: {
  image: string;
  imageAlt: string;
  notesLeft: Note[];
  notesRight: Note[];
  /** use "contain" when `image` is an isolated product cutout rather than a texture photo */
  fit?: "cover" | "contain";
  accent?: string;
}) {
  return (
    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-6 items-center">
      <div className="space-y-14 order-2 md:order-1">
        {notesLeft.map((n, i) => (
          <div
            key={n.title}
            className="flex md:flex-row-reverse items-start gap-4 md:text-right"
            style={{ marginTop: i % 2 ? "2.5rem" : 0 }}
          >
            <div className="flex-1">
              <p className="text-[13px] font-medium text-ink tracking-[0.01em]">{n.title}</p>
              <p className="text-xs text-ink-soft mt-1.5 leading-relaxed">{n.text}</p>
            </div>
            <div className="hidden md:block w-12 h-px bg-line mt-2" />
          </div>
        ))}
      </div>

      <div
        className="relative order-1 md:order-2 aspect-square w-full md:w-[24rem] mx-auto overflow-hidden rounded-full ring-1 ring-line"
        style={fit === "contain" ? { backgroundColor: `${accent ?? "#EDE6D6"}22` } : undefined}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="384px"
          className={fit === "contain" ? "object-contain p-14" : "object-cover"}
        />
      </div>

      <div className="space-y-14 order-3">
        {notesRight.map((n, i) => (
          <div
            key={n.title}
            className="flex items-start gap-4"
            style={{ marginTop: i % 2 ? 0 : "2.5rem" }}
          >
            <div className="hidden md:block w-12 h-px bg-line mt-2" />
            <div className="flex-1">
              <p className="text-[13px] font-medium text-ink tracking-[0.01em]">{n.title}</p>
              <p className="text-xs text-ink-soft mt-1.5 leading-relaxed">{n.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
