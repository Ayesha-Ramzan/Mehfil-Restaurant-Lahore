import { createFileRoute } from "@tanstack/react-router";
import { RESTAURANT } from "@/data/menu";
import ambience from "@/assets/ambience.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit & Contact — Mehfil, Mall Road, Lahore" },
      {
        name: "description",
        content:
          "Mehfil is at 12 Ganga Ram Building, Mall Road, Lahore. Opening hours, valet parking, private dining and direct contact for the maître d'.",
      },
      { property: "og:title", content: "Visit & Contact — Mehfil, Mall Road, Lahore" },
      {
        property: "og:description",
        content: "12 Ganga Ram Building, Mall Road, Lahore. Hours, valet and direct contact.",
      },
    ],
  }),
  component: Visit,
});

function Visit() {
  return (
    <div className="pt-36 pb-24">
      <header className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="eyebrow">Mall Road</p>
        <h1 className="mt-5 font-display text-5xl md:text-6xl">Visit</h1>
      </header>

      <div className="mx-auto mt-14 grid max-w-5xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="eyebrow">Address</p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/85">
            {RESTAURANT.address}
          </p>
          <p className="mt-2 text-sm text-muted-foreground" dir="rtl">
            ۱۲ گنگا رام بلڈنگ، مال روڈ، لاہور
          </p>

          <p className="eyebrow mt-10">Hours</p>
          <dl className="mt-4 space-y-3">
            {RESTAURANT.hours.map((h) => (
              <div key={h.day} className="flex items-baseline justify-between gap-6">
                <dt className="text-sm text-muted-foreground">{h.day}</dt>
                <dd className="text-sm">{h.time}</dd>
              </div>
            ))}
          </dl>

          <p className="eyebrow mt-10">Direct</p>
          <a
            href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`}
            className="mt-4 block text-sm text-brass"
          >
            {RESTAURANT.phone}
          </a>
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted-foreground">
            Valet from 6pm. Two covered bays held for guests with reservations. Private dining for
            twelve on the mezzanine, by arrangement.
          </p>
        </div>

        <img
          loading="lazy"
          width={1408}
          height={1008}
          src={ambience}
          alt="The Mehfil dining room, dark green walls and brass pendant lamps"
          className="w-full object-cover md:aspect-[4/5]"
        />
      </div>
    </div>
  );
}
