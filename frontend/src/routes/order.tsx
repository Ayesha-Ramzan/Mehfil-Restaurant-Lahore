import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { menu, RESTAURANT, whatsappLink, type Dish } from "@/data/menu";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Online — Mehfil, Lahore" },
      {
        name: "description",
        content:
          "Order Mehfil's nihari, biryani and charcoal grill for delivery across central Lahore. One-page checkout, or send your order straight to the kitchen on WhatsApp.",
      },
      { property: "og:title", content: "Order Online — Mehfil, Lahore" },
      {
        property: "og:description",
        content: "Nihari, biryani and charcoal grill, delivered across central Lahore.",
      },
    ],
  }),
  component: Order,
});

const detailsSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a reachable number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Numbers only"),
  address: z.string().trim().min(8, "Please enter a full address").max(300),
  notes: z.string().trim().max(300),
});

function Order() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);

  const lines = useMemo(() => {
    const all: Dish[] = menu.flatMap((c) => c.dishes);
    return Object.entries(cart)
      .filter(([, q]) => q > 0)
      .map(([id, q]) => ({ dish: all.find((d) => d.id === id)!, qty: q }));
  }, [cart]);

  const count = lines.reduce((n, l) => n + l.qty, 0);

  const change = (id: string, delta: number) =>
    setCart((c) => ({ ...c, [id]: Math.max(0, (c[id] ?? 0) + delta) }));

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!count) {
      setError("Please add at least one dish.");
      return;
    }
    const fd = new FormData(e.currentTarget);
    const parsed = detailsSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      address: String(fd.get("address") ?? ""),
      notes: String(fd.get("notes") ?? ""),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setError(null);
    const d = parsed.data;
    const message = [
      `Order — ${RESTAURANT.name}`,
      ...lines.map((l) => `${l.qty} × ${l.dish.name}`),
      "",
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Address: ${d.address}`,
      d.notes ? `Notes: ${d.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    toast.success("Sending your order to the kitchen on WhatsApp.");
    window.open(whatsappLink(message), "_blank", "noopener");
  }

  const field =
    "w-full border border-input bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-brass";

  return (
    <div className="mx-auto max-w-6xl px-5 pt-36 pb-24 md:px-8">
      <header className="text-center">
        <p className="eyebrow">Delivery across central Lahore</p>
        <h1 className="mt-5 font-display text-5xl md:text-6xl">Order Online</h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Build your order below, or send it to the kitchen directly on WhatsApp. Delivery within
          Gulberg, Model Town, Cantt and the Mall.
        </p>
        <a
          href={whatsappLink(`Hello ${RESTAURANT.name}, I would like to place an order.`)}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-block border border-brass-soft/60 px-7 py-3 text-[0.72rem] tracking-[0.2em] uppercase text-brass hover:bg-brass hover:text-primary-foreground"
        >
          Order on WhatsApp
        </a>
      </header>

      <div className="mt-16 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-14">
          {menu.map((cat) => (
            <section key={cat.id}>
              <h2 className="font-display text-3xl">{cat.title}</h2>
              <div className="rule-brass mt-4 w-16 opacity-50" />
              <ul className="mt-6 divide-y divide-border/50">
                {cat.dishes.map((d) => (
                  <li key={d.id} className="flex items-start justify-between gap-6 py-5">
                    <div>
                      <h3 className="font-display text-xl">{d.name}</h3>
                      <p className="mt-1 max-w-md text-xs leading-relaxed text-muted-foreground">
                        {d.note}
                      </p>
                      <span className="mt-2 block text-sm text-brass">{d.price}</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <button
                        type="button"
                        aria-label={`Remove one ${d.name}`}
                        onClick={() => change(d.id, -1)}
                        className="h-9 w-9 border border-input text-muted-foreground hover:border-brass-soft"
                      >
                        −
                      </button>
                      <span className="w-4 text-center text-sm">{cart[d.id] ?? 0}</span>
                      <button
                        type="button"
                        aria-label={`Add one ${d.name}`}
                        onClick={() => change(d.id, 1)}
                        className="h-9 w-9 border border-input text-muted-foreground hover:border-brass-soft"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <form
          onSubmit={submit}
          className="h-fit border border-border/60 bg-card/40 p-7 lg:sticky lg:top-28"
        >
          <p className="eyebrow">Your order</p>
          {lines.length === 0 ? (
            <p className="mt-5 text-sm text-muted-foreground">Nothing added yet.</p>
          ) : (
            <ul className="mt-5 space-y-3">
              {lines.map((l) => (
                <li key={l.dish.id} className="flex justify-between gap-4 text-sm">
                  <span className="text-foreground/85">
                    {l.qty} × {l.dish.name}
                  </span>
                  <span className="text-muted-foreground">{l.dish.price}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-7 space-y-4">
            <input name="name" maxLength={80} placeholder="Name" className={field} />
            <input
              name="phone"
              maxLength={20}
              inputMode="tel"
              placeholder="Phone"
              className={field}
            />
            <textarea
              name="address"
              rows={3}
              maxLength={300}
              placeholder="Delivery address"
              className={field}
            />
            <textarea
              name="notes"
              rows={2}
              maxLength={300}
              placeholder="Notes for the kitchen"
              className={field}
            />
          </div>

          {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

          <button
            type="submit"
            className="mt-6 w-full bg-brass py-4 text-[0.72rem] tracking-[0.2em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send order
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Payment on delivery, cash or card.
          </p>
        </form>
      </div>
    </div>
  );
}
