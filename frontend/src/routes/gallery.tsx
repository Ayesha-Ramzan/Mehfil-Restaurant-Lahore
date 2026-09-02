import { createFileRoute } from "@tanstack/react-router";
import ambience from "@/assets/ambience.jpg";
import kitchen from "@/assets/kitchen-tandoor.jpg";
import champ from "@/assets/dish-champ.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import nihari from "@/assets/hero-nihari.jpg";
import chef from "@/assets/chef-portrait.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mehfil, Lahore" },
      {
        name: "description",
        content:
          "The room, the plating and the fires at Mehfil, Lahore: dining room ambience, charcoal grill, sealed biryani and the chef at work.",
      },
      { property: "og:title", content: "Gallery — Mehfil, Lahore" },
      {
        property: "og:description",
        content: "The room, the plating and the fires at Mehfil, Lahore.",
      },
    ],
  }),
  component: Gallery,
});

const shots = [
  {
    src: ambience,
    alt: "The dining room at night, brass lamps over white linen",
    span: "md:col-span-2 md:row-span-2",
  },
  { src: nihari, alt: "Nihari in a brass bowl with marrow bone", span: "" },
  { src: champ, alt: "Charred mutton chops plated on dark ceramic", span: "" },
  { src: kitchen, alt: "Seekh kebabs going into the tandoor", span: "md:col-span-2" },
  { src: biryani, alt: "A clay pot of biryani opened at the table", span: "" },
  { src: chef, alt: "Chef Imran Saeed beside the tandoor", span: "" },
];

function Gallery() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-36 pb-24 md:px-8">
      <header className="text-center">
        <p className="eyebrow">The room, the fires, the plates</p>
        <h1 className="mt-5 font-display text-5xl md:text-6xl">Gallery</h1>
      </header>

      <div className="mt-14 grid auto-rows-[220px] gap-px bg-border/50 md:grid-cols-4 md:auto-rows-[240px]">
        {shots.map((s) => (
          <figure key={s.alt} className={`overflow-hidden bg-background ${s.span}`}>
            <img
              loading="lazy"
              src={s.src}
              alt={s.alt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
