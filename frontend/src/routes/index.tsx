import { createFileRoute, Link } from "@tanstack/react-router";
import heroNihari from "@/assets/hero-nihari.jpg";
import dishChamp from "@/assets/dish-champ.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import kitchen from "@/assets/kitchen-tandoor.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";
import { RESTAURANT } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mehfil — Slow-Fired Lahori Cooking, Mall Road" },
      {
        name: "description",
        content:
          "An elite Lahori table on Mall Road. Nihari at eight hours, sealed clay-pot biryani, mango-wood grill. Reserve a table at Mehfil, Lahore.",
      },
      { property: "og:title", content: "Mehfil — Slow-Fired Lahori Cooking, Mall Road" },
      {
        property: "og:description",
        content:
          "An elite Lahori table on Mall Road. Nihari at eight hours, sealed clay-pot biryani, mango-wood grill.",
      },
    ],
  }),
  component: Home,
});

const sourcing = [
  { label: "Beef shank", detail: "One supplier, Bakar Mandi, since 2014." },
  { label: "Tandoor wood", detail: "Mango, seasoned nine months in Sheikhupura." },
  { label: "Coriander & mint", detail: "Cut at 5am, Badami Bagh, delivered by 7." },
  { label: "Rice", detail: "Aged sella, eighteen months, single mill." },
];

const reviews = [
  {
    quote:
      "We came for the nihari and stayed three hours. The marrow arrived in the bone with a spoon and nobody at the table spoke for a minute.",
    name: "Ayesha Tariq",
    context: "Dined in December",
  },
  {
    quote:
      "I have eaten champ across this city for twenty years. This is the only kitchen that still uses mango wood and you can taste the difference from the doorway.",
    name: "Faisal Nadeem",
    context: "Regular since 2019",
  },
  {
    quote:
      "They opened the biryani pot at the table and the whole room turned. That is theatre you cannot fake.",
    name: "Sana Qureshi",
    context: "Anniversary dinner",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroNihari}
          alt="Nihari beef shank in a hammered brass bowl with marrow bone and ginger"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="veil absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-24">
          <p className="eyebrow">Mall Road · Lahore</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
            Slow-fired Lahori cooking.
            <br />
            <span className="italic text-brass">Since dawn, every dawn.</span>
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/reservations"
              className="bg-brass px-8 py-4 text-[0.72rem] tracking-[0.2em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reserve a table
            </Link>
            <span className="text-[0.72rem] tracking-[0.2em] uppercase text-muted-foreground">
              4.9 · 2,140 guests
            </span>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        <div className="rule-brass mx-auto w-24 opacity-60" />
        <p className="mt-10 font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl">
          Four fires burn here through the night. One for the shank, one for the milk, one for the
          clay, one for the wood. Nothing on this menu is faster than the ingredient allows.
        </p>
        <Link
          to="/story"
          className="mt-10 inline-block text-[0.72rem] tracking-[0.2em] uppercase text-brass"
        >
          Our story
        </Link>
      </section>

      {/* Signature dishes */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="grid gap-px bg-border/50 md:grid-cols-2">
          {[
            {
              img: dishChamp,
              name: "The Champ",
              note: "Mutton chops in raw papaya and white pepper, finished over mango wood.",
              alt: "Charred mutton chops plated on dark ceramic with burnt lemon",
            },
            {
              img: dishBiryani,
              name: "Lahori Biryani, Sealed",
              note: "Layered in a clay pot, sealed with dough, opened at your table.",
              alt: "A sealed clay pot of biryani being opened, steam rising",
            },
          ].map((d) => (
            <article key={d.name} className="bg-background">
              <img
                loading="lazy"
                width={1200}
                height={1200}
                src={d.img}
                alt={d.alt}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="px-6 py-8">
                <h2 className="font-display text-3xl">{d.name}</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {d.note}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/menu"
            className="border border-brass-soft/60 px-8 py-4 text-[0.72rem] tracking-[0.2em] uppercase text-brass transition-colors hover:bg-brass hover:text-primary-foreground"
          >
            The full menu
          </Link>
        </div>
      </section>

      {/* Trust: chef + sourcing */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <img
            loading="lazy"
            width={1200}
            height={1504}
            src={chefPortrait}
            alt="Chef Imran Saeed in the kitchen beside the tandoor"
            className="w-full object-cover md:aspect-[4/5]"
          />
          <div className="self-center">
            <p className="eyebrow">The kitchen</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Chef Imran Saeed grinds the nihari masala himself, on Tuesdays.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              He learned the shank at his father's degh in Gawalmandi, then spent eleven years in
              hotel kitchens learning why it worked. He came back to do it properly. The recipe has
              not changed since; the sourcing has, three times, and each time upward.
            </p>
            <Link
              to="/chef"
              className="mt-8 inline-block text-[0.72rem] tracking-[0.2em] uppercase text-brass"
            >
              Meet the chef
            </Link>

            <dl className="mt-12 grid gap-px bg-border/50 sm:grid-cols-2">
              {sourcing.map((s) => (
                <div key={s.label} className="bg-background px-5 py-6">
                  <dt className="eyebrow">{s.label}</dt>
                  <dd className="mt-2 text-sm text-foreground/85">{s.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Kitchen photo band */}
      <section className="relative">
        <img
          loading="lazy"
          width={1408}
          height={1008}
          src={kitchen}
          alt="Chef placing seekh kebab skewers into a glowing clay tandoor"
          className="h-[60vh] w-full object-cover"
        />
        <div className="veil absolute inset-0" />
        <p className="absolute bottom-8 left-1/2 w-full max-w-xl -translate-x-1/2 px-5 text-center font-display text-xl italic text-foreground/90">
          The tandoor is lit at four in the afternoon and never allowed to drop.
        </p>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <p className="eyebrow text-center">In the guests' words</p>
        <div className="mt-14 grid gap-14 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name}>
              <blockquote className="font-display text-xl leading-relaxed text-foreground/90 italic">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <span className="block text-sm text-brass">{r.name}</span>
                <span className="block text-xs text-muted-foreground">{r.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Exclusivity */}
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-px bg-border/50 px-0 md:grid-cols-3">
          {[
            {
              k: "Today's fire",
              t: "Nalli Nihari",
              d: "Twelve portions daily. When the shank is gone, it is gone.",
            },
            {
              k: "By invitation",
              t: "The Nine-Course Table",
              d: "One seating a week, eight guests. Request a place and we will write back.",
            },
            {
              k: "The register",
              t: "Guest of the House",
              d: "After your fifth dinner your name is entered by hand, and your table is held.",
            },
          ].map((c) => (
            <div key={c.t} className="bg-background px-7 py-14">
              <p className="eyebrow">{c.k}</p>
              <h3 className="mt-4 font-display text-3xl">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-3xl px-5 py-28 text-center md:px-8">
        <h2 className="font-display text-4xl md:text-5xl">A table at {RESTAURANT.name}</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Dinner from six. Tables for eight or more, please speak to the maître d'.
        </p>
        <Link
          to="/reservations"
          className="mt-9 inline-block bg-brass px-9 py-4 text-[0.72rem] tracking-[0.2em] uppercase text-primary-foreground"
        >
          Reserve
        </Link>
      </section>
    </>
  );
}
