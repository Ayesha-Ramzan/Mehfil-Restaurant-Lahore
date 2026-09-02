import { createFileRoute, Link } from "@tanstack/react-router";
import chefPortrait from "@/assets/chef-portrait.jpg";

export const Route = createFileRoute("/chef")({
  head: () => ({
    meta: [
      { title: "Chef Imran Saeed — Mehfil, Lahore" },
      {
        name: "description",
        content:
          "Chef Imran Saeed learned the shank at his father's degh in Gawalmandi and spent eleven years in hotel kitchens learning why it worked. He grinds the nihari masala himself.",
      },
      { property: "og:title", content: "Chef Imran Saeed — Mehfil, Lahore" },
      {
        property: "og:description",
        content: "From a Gawalmandi degh to Mall Road: the chef behind Mehfil's four fires.",
      },
    ],
  }),
  component: Chef,
});

const timeline = [
  { year: "1989", text: "Starts on the degh beside his father, Gawalmandi. Aged eleven." },
  { year: "1998", text: "Commis, then chef de partie, in Lahore's hotel kitchens." },
  { year: "2006", text: "Two years in Peshawar learning charcoal and clay from Chapli masters." },
  { year: "2011", text: "Opens the Mall Road room. Brings the original degh with him." },
  { year: "Today", text: "Grinds the nihari masala himself, every Tuesday, before service." },
];

function Chef() {
  return (
    <div className="pt-36 pb-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 md:px-8">
        <img
          loading="lazy"
          width={1200}
          height={1504}
          src={chefPortrait}
          alt="Chef Imran Saeed standing beside the tandoor in a dark kitchen"
          className="w-full object-cover md:aspect-[4/5]"
        />
        <div className="self-center">
          <p className="eyebrow">Executive Chef</p>
          <h1 className="mt-5 font-display text-5xl leading-tight md:text-6xl">Imran Saeed</h1>
          <p className="mt-7 text-[0.95rem] leading-loose text-foreground/80">
            He does not plate for photographs and he does not send a dish that arrived late. Twice a
            week he goes to Bakar Mandi himself, at four in the morning, because the shank is the
            whole argument of the kitchen and he does not trust it to a phone call.
          </p>
          <p className="mt-5 text-[0.95rem] leading-loose text-foreground/80">
            Ask him about the champ and he will tell you about the wood before he tells you about
            the meat.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-2xl px-5 md:px-8">
        <div className="rule-brass w-24 opacity-60" />
        <dl className="mt-10 space-y-7">
          {timeline.map((t) => (
            <div key={t.year} className="grid grid-cols-[5rem_1fr] gap-5">
              <dt className="eyebrow pt-1">{t.year}</dt>
              <dd className="text-sm leading-relaxed text-foreground/85">{t.text}</dd>
            </div>
          ))}
        </dl>
        <Link
          to="/reservations"
          className="mt-14 inline-block border border-brass-soft/60 px-8 py-4 text-[0.72rem] tracking-[0.2em] uppercase text-brass hover:bg-brass hover:text-primary-foreground"
        >
          Reserve a table
        </Link>
      </div>
    </div>
  );
}
