import { Link } from "@tanstack/react-router";
import { RESTAURANT } from "@/data/menu";

const press = ["Dawn", "Something Haute", "Destinations", "Good Times", "The Friday Times"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-ink pb-24 lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <span className="font-display text-2xl tracking-[0.18em]">
            {RESTAURANT.name.toUpperCase()}
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {RESTAURANT.address}
          </p>
          <p className="mt-2 text-sm text-muted-foreground" dir="rtl">
            ۱۲ گنگا رام بلڈنگ، مال روڈ، لاہور
          </p>
          <a
            href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`}
            className="mt-4 inline-block text-sm text-brass"
          >
            {RESTAURANT.phone}
          </a>
        </div>

        <div>
          <p className="eyebrow">Hours</p>
          <dl className="mt-5 space-y-3">
            {RESTAURANT.hours.map((h) => (
              <div key={h.day} className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-muted-foreground">{h.day}</dt>
                <dd className="text-sm text-foreground">{h.time}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex gap-5 text-sm text-muted-foreground">
            <a href="https://instagram.com" className="hover:text-brass">
              Instagram
            </a>
            <a href="https://facebook.com" className="hover:text-brass">
              Facebook
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow">Find us</p>
          <a
            href="https://maps.google.com/?q=Mall+Road+Lahore"
            target="_blank"
            rel="noreferrer"
            className="mt-5 block overflow-hidden border border-border/60"
          >
            <img
              loading="lazy"
              width={640}
              height={360}
              alt="Map showing the restaurant on Mall Road, Lahore"
              src="https://static-maps.yandex.ru/1.x/?ll=74.3300,31.5600&z=14&size=640,360&l=map"
              className="h-40 w-full object-cover opacity-60 grayscale transition hover:opacity-90"
            />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Valet from 6pm. Two covered bays for guests with reservations.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="rule-brass opacity-40" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-6">
          {press.map((p) => (
            <span
              key={p}
              className="font-display text-sm tracking-[0.2em] text-muted-foreground/60 uppercase"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 py-6 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {RESTAURANT.name}, Lahore. All rights reserved.
          </span>
          <Link to="/visit" className="hover:text-brass">
            Contact & location
          </Link>
        </div>
      </div>
    </footer>
  );
}
