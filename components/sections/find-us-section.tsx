import { ExternalLink, Navigation } from "lucide-react";

import { cn } from "@/lib/utils";

const ADDRESS = "7659 McCallum Blvd, Dallas, TX";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=7659+McCallum+Blvd%2C+Dallas%2C+TX";

export function FindUsSection() {
  return (
    <section
      id="find-us"
      className="scroll-mt-24 border-y border-primary/10 bg-mint-50/50 py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-lg ring-1 ring-primary/10 lg:aspect-[4/3]">
          <div
            className="absolute inset-0 flex items-center justify-center bg-muted px-6 text-center"
            role="img"
            aria-label="Place holder image"
          >
            <span className="text-sm font-medium text-muted-foreground sm:text-base">
              Place holder image
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Find us
          </h2>
          <p className="mt-2 text-muted-foreground">
            Right on McCallum — easy in, easy out when you&apos;re on the move.
          </p>
          <address className="mt-6 not-italic">
            <p className="text-lg font-medium text-foreground">{ADDRESS}</p>
            <p className="mt-1 text-sm text-muted-foreground">Dallas, Texas</p>
          </address>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-8 inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-transparent bg-primary px-8 text-base font-medium text-primary-foreground shadow-md shadow-primary/15 transition-colors outline-none select-none hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            )}
          >
            <Navigation className="size-5" aria-hidden />
            Get directions
            <ExternalLink className="size-4 opacity-80" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
