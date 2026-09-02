import { createFileRoute } from "@tanstack/react-router";
import { menu, spiceMark, spiceLabel } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Mehfil, Lahore" },
      {
        name: "description",
        content:
          "Nihari at eight hours, sealed Lahori biryani, mango-wood champ, kulfi falooda. The full Mehfil menu with sourcing notes, spice levels and dietary tags.",
      },
      { property: "og:title", content: "Menu — Mehfil, Lahore" },
      {
        property: "og:description",
        content:
          "Nihari at eight hours, sealed Lahori biryani, mango-wood champ. The full menu with sourcing notes.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-36 pb-24 md:px-8">
      <header className="text-center">
        <p className="eyebrow">Kitchen</p>
        <h1 className="mt-5 font-display text-5xl md:text-6xl">The Menu</h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Everything is halal. Spice is marked ○ mild · ◐ medium · ● hot. Where a dish depends on a
          particular supplier or season, we say so.
        </p>
      </header>

      <nav className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3">
        {menu.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground hover:text-brass"
          >
            {c.title}
          </a>
        ))}
      </nav>

      <div className="mt-16 space-y-20">
        {menu.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-28">
            <div className="text-center">
              <h2 className="font-display text-4xl">{cat.title}</h2>
              <p className="mt-2 text-xs tracking-[0.16em] uppercase text-muted-foreground">
                {cat.kicker}
              </p>
              <div className="rule-brass mx-auto mt-6 w-16 opacity-50" />
            </div>

            <ul className="mt-10 space-y-9">
              {cat.dishes.map((d) => (
                <li key={d.id}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-2xl leading-snug">{d.name}</h3>
                    <span className="dotted-lead hidden flex-1 translate-y-[-4px] opacity-50 sm:block" />
                    <span className="text-sm whitespace-nowrap text-brass">{d.price}</span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {d.note}
                  </p>
                  {d.sourcing && (
                    <p className="mt-2 max-w-2xl text-xs leading-relaxed text-foreground/55 italic">
                      {d.sourcing}
                    </p>
                  )}
                  <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.65rem] tracking-[0.16em] uppercase text-muted-foreground/80">
                    <span className="text-brass-soft">
                      {spiceMark[d.spice]} {spiceLabel[d.spice]}
                    </span>
                    {d.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-20 text-center text-xs leading-relaxed text-muted-foreground">
        Please tell us about allergies when you reserve. Several dishes are finished with nuts,
        dairy or ghee in a shared kitchen.
      </p>
    </div>
  );
}
