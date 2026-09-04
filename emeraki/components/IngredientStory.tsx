import Image from "next/image";

type Note = { title: string; text: string };

export default function IngredientStory({
  image,
  imageAlt,
  notesLeft,
  notesRight,
}: {
  image: string;
  imageAlt: string;
  notesLeft: Note[];
  notesRight: Note[];
}) {
  return (
    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-6 items-center">
      <div className="space-y-10 md:text-right order-2 md:order-1">
        {notesLeft.map((n) => (
          <div key={n.title} className="flex md:flex-row-reverse items-start gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-ink">{n.title}</p>
              <p className="text-xs text-ink-soft mt-1 leading-relaxed">{n.text}</p>
            </div>
            <div className="hidden md:block w-10 h-px bg-line mt-2.5" />
          </div>
        ))}
      </div>

      <div className="relative order-1 md:order-2 aspect-square w-full md:w-[22rem] mx-auto overflow-hidden rounded-full">
        <Image src={image} alt={imageAlt} fill sizes="352px" className="object-cover" />
      </div>

      <div className="space-y-10 order-3">
        {notesRight.map((n) => (
          <div key={n.title} className="flex items-start gap-4">
            <div className="hidden md:block w-10 h-px bg-line mt-2.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-ink">{n.title}</p>
              <p className="text-xs text-ink-soft mt-1 leading-relaxed">{n.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
