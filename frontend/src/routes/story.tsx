import { createFileRoute } from "@tanstack/react-router";
import kitchen from "@/assets/kitchen-tandoor.jpg";
import ambience from "@/assets/ambience.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Mehfil, Lahore" },
      {
        name: "description",
        content:
          "How Mehfil came to Mall Road: a Gawalmandi degh, eleven years in hotel kitchens, four fires that never go out, and the suppliers behind every dish.",
      },
      { property: "og:title", content: "Our Story — Mehfil, Lahore" },
      {
        property: "og:description",
        content:
          "A Gawalmandi degh, eleven years in hotel kitchens, and four fires that never go out.",
      },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <div className="pt-36 pb-24">
      <header className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="eyebrow">Since 1997</p>
        <h1 className="mt-5 font-display text-5xl md:text-6xl">Our Story</h1>
      </header>

      <div className="mx-auto mt-14 max-w-2xl space-y-6 px-5 text-[0.95rem] leading-loose text-foreground/80 md:px-8">
        <p>
          Mehfil began as a single degh outside a house in Gawalmandi. It was lit before dawn, sold
          out by nine, and had no name — people called it by the street. That degh is still in the
          building, in the back, and it still cooks the nihari.
        </p>
        <p>
          In 2011 we took the room on Mall Road: a colonial-era shell with fifteen-foot ceilings and
          floors we had to lift and lay again. We kept the carved screens, the marble, and the habit
          of starting early. Everything else was built around the fires.
        </p>
      </div>

      <img
        loading="lazy"
        width={1408}
        height={1008}
        src={kitchen}
        alt="Skewers of seekh kebab over a glowing tandoor"
        className="mx-auto mt-16 h-[55vh] w-full max-w-6xl object-cover px-0"
      />

      <div className="mx-auto mt-16 max-w-2xl space-y-6 px-5 text-[0.95rem] leading-loose text-foreground/80 md:px-8">
        <p>
          We buy from four people, and we have bought from three of them for over a decade. The
          shank arrives before six. The coriander is cut at five and here by seven. The mango wood
          is seasoned nine months in Sheikhupura before it is allowed near a chop.
        </p>
        <p>
          Nothing on the menu is quicker than the ingredient allows. The haleem takes nine hours,
          the rabri overnight, the nihari from the previous evening. When something runs out, we say
          so rather than make it faster.
        </p>
      </div>

      <img
        loading="lazy"
        width={1408}
        height={1008}
        src={ambience}
        alt="The dining room: dark green walls, carved screens, brass lamps and white linen"
        className="mx-auto mt-16 h-[55vh] w-full max-w-6xl object-cover"
      />

      <div className="mx-auto mt-16 max-w-2xl px-5 md:px-8">
        <p className="font-display text-2xl leading-relaxed italic text-foreground/90">
          “A mehfil is a gathering that runs late because nobody wants to be the first to leave. We
          built the room for that, and then we built the menu for the room.”
        </p>
      </div>
    </div>
  );
}
