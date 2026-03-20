import { SiteHeader } from "@/components/sections/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { CategoryGrid } from "@/components/sections/category-grid";
import { OffersMarquee } from "@/components/sections/offers-marquee";
import { FindUsSection } from "@/components/sections/find-us-section";
import { StockRequestForm } from "@/components/sections/stock-request-form";
import {
  CLOSING_TIME_DISPLAY,
  isStoreOpenNow,
  OPENING_TIME_DISPLAY,
} from "@/lib/hours";

export default function Home() {
  const isOpen = isStoreOpenNow();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader
        isOpen={isOpen}
        closingTime={CLOSING_TIME_DISPLAY}
        openingTime={OPENING_TIME_DISPLAY}
      />
      <main>
        <HeroSection />
        <CategoryGrid />
        <OffersMarquee />
        <FindUsSection />
        <StockRequestForm />
      </main>
      <footer className="border-t border-primary/10 bg-mint-50/30 py-8 text-center text-sm text-muted-foreground">
        <div className="mx-auto mb-4 flex justify-center">
          <div
            className="rounded-lg bg-primary px-6 py-2.5 font-heading text-sm font-semibold tracking-wide text-primary-foreground shadow-md shadow-primary/15 ring-1 ring-primary/20"
            role="img"
            aria-label="Market Place Convenience wordmark placeholder"
          >
            MARKET PLACE
          </div>
        </div>
        <p className="font-medium text-foreground">
          Market Place Convenience
        </p>
        <p className="mt-1">7659 McCallum Blvd · Dallas, TX</p>
        <p className="mt-3 text-xs">
          Demo site — hours and offers shown for presentation.
        </p>
      </footer>
    </div>
  );
}
