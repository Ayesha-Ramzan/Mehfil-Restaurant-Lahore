import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { RESTAURANT, whatsappLink } from "@/data/menu";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Mehfil, Lahore" },
      {
        name: "description",
        content:
          "Reserve a table at Mehfil on Mall Road, Lahore. Choose your date, time and party size; confirmation arrives by WhatsApp.",
      },
      { property: "og:title", content: "Reservations — Mehfil, Lahore" },
      {
        property: "og:description",
        content: "Reserve a table at Mehfil on Mall Road, Lahore. Confirmation by WhatsApp.",
      },
    ],
  }),
  component: Reservations,
});

const slots = ["6:00", "6:45", "7:30", "8:15", "9:00", "9:45", "10:30"];
const occasions = ["No occasion", "Anniversary", "Birthday", "Business", "Family"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a reachable number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Numbers only"),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Choose a time"),
  guests: z.string().min(1),
  occasion: z.string().max(40),
  requests: z.string().trim().max(400, "Please keep this under 400 characters"),
});

function Reservations() {
  const [time, setTime] = useState("7:30");
  const [guests, setGuests] = useState("2");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      date: String(fd.get("date") ?? ""),
      time,
      guests,
      occasion: String(fd.get("occasion") ?? ""),
      requests: String(fd.get("requests") ?? ""),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setError(null);
    const d = parsed.data;
    const message = [
      `Reservation request — ${RESTAURANT.name}`,
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Date: ${d.date}`,
      `Time: ${d.time} pm`,
      `Guests: ${d.guests}`,
      `Occasion: ${d.occasion}`,
      d.requests ? `Requests: ${d.requests}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    toast.success("Opening WhatsApp to confirm your table.");
    window.open(whatsappLink(message), "_blank", "noopener");
  }

  const field =
    "w-full border border-input bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-brass";

  return (
    <div className="mx-auto max-w-2xl px-5 pt-36 pb-24 md:px-8">
      <header className="text-center">
        <p className="eyebrow">Reservations</p>
        <h1 className="mt-5 font-display text-5xl md:text-6xl">A table for the evening</h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          We hold your table for twenty minutes. Confirmation comes by WhatsApp from the maître
          d&apos;, usually within the hour.
        </p>
      </header>

      <form onSubmit={onSubmit} className="mt-14 space-y-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="eyebrow">Name</span>
            <input name="name" maxLength={80} className={`mt-3 ${field}`} placeholder="Your name" />
          </label>
          <label className="block">
            <span className="eyebrow">Phone</span>
            <input
              name="phone"
              maxLength={20}
              inputMode="tel"
              className={`mt-3 ${field}`}
              placeholder="+92 300 0000000"
            />
          </label>
        </div>

        <label className="block">
          <span className="eyebrow">Date</span>
          <input type="date" name="date" className={`mt-3 ${field}`} />
        </label>

        <div>
          <span className="eyebrow">Time</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {slots.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setTime(s)}
                className={`border px-4 py-2 text-sm transition-colors ${
                  time === s
                    ? "border-brass bg-brass text-primary-foreground"
                    : "border-input text-muted-foreground hover:border-brass-soft"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="eyebrow">Party size</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {["1", "2", "3", "4", "5", "6", "7"].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGuests(g)}
                className={`h-11 w-11 border text-sm transition-colors ${
                  guests === g
                    ? "border-brass bg-brass text-primary-foreground"
                    : "border-input text-muted-foreground hover:border-brass-soft"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Tables for eight or more — please call the maître d&apos; on {RESTAURANT.phone}.
          </p>
        </div>

        <label className="block">
          <span className="eyebrow">Occasion</span>
          <select name="occasion" defaultValue={occasions[0]} className={`mt-3 ${field}`}>
            {occasions.map((o) => (
              <option key={o} value={o} className="bg-card">
                {o}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="eyebrow">Anything we should know</span>
          <textarea
            name="requests"
            rows={4}
            maxLength={400}
            className={`mt-3 ${field}`}
            placeholder="Allergies, seating, a quiet corner…"
          />
        </label>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          className="w-full bg-brass py-4 text-[0.72rem] tracking-[0.2em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
        >
          Request the table
        </button>
      </form>
    </div>
  );
}
