import { Sparkles } from "lucide-react";

const deals = [
  "2 for $4 Energy Drinks",
  "Fresh Coffee Brewed Every Hour",
  "Ice-Cold Fountain Drinks — Refill Friendly",
  "New Grab-and-Go Snack Mix In Stock",
  "Cold Beer & Seltzer Selection",
  "Morning Pastries While Supplies Last",
];

export function OffersMarquee() {
  return (
    <section
      id="offers"
      className="scroll-mt-24 overflow-hidden bg-primary py-3 text-primary-foreground"
      aria-label="Current specials"
    >
      <div className="flex items-center gap-3 border-y border-white/10 bg-primary/95 px-4 py-2 sm:px-6">
        <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide sm:inline-flex">
          <Sparkles className="size-3.5" aria-hidden />
          Today&apos;s deals
        </span>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee">
            <ul className="m-0 flex shrink-0 list-none items-center gap-10 px-4 text-sm font-medium sm:gap-14 sm:text-base">
              {deals.map((deal) => (
                <li key={deal} className="whitespace-nowrap">
                  {deal}
                </li>
              ))}
            </ul>
            <ul
              className="m-0 flex shrink-0 list-none items-center gap-10 px-4 text-sm font-medium sm:gap-14 sm:text-base"
              aria-hidden
            >
              {deals.map((deal) => (
                <li key={`${deal}-dup`} className="whitespace-nowrap">
                  {deal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
