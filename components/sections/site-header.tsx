"use client";

import { motion } from "framer-motion";
import { MapPin, Store } from "lucide-react";
import Link from "next/link";

type SiteHeaderProps = {
  isOpen: boolean;
  closingTime: string;
  openingTime: string;
};

export function SiteHeader({
  isOpen,
  closingTime,
  openingTime,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 shadow-sm backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3.5">
        <Link
          href="#"
          className="flex items-center gap-2 text-primary transition-opacity hover:opacity-90"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
            <Store className="size-5" aria-hidden />
          </span>
          <span className="font-semibold tracking-tight text-foreground">
            Market Place <span className="text-primary">Convenience</span>
          </span>
        </Link>

        <nav
          className="flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground sm:gap-6"
          aria-label="Primary"
        >
          <a href="#categories" className="hover:text-primary">
            Shop
          </a>
          <a href="#find-us" className="inline-flex items-center gap-1 hover:text-primary">
            <MapPin className="size-3.5" aria-hidden />
            Find us
          </a>
          <a href="#offers" className="hover:text-primary">
            Deals
          </a>
          <a href="#stock-request" className="hover:text-primary">
            Request a product
          </a>
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="flex items-center justify-start sm:justify-end"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-mint-50/90 px-3 py-1.5 text-xs font-medium text-primary shadow-sm ring-1 ring-primary/5 sm:text-sm"
            role="status"
            aria-live="polite"
          >
            <span className="relative flex size-2.5">
              <span
                className={`absolute inline-flex size-full rounded-full opacity-75 ${
                  isOpen ? "animate-ping bg-emerald-500" : "bg-muted-foreground/40"
                }`}
              />
              <span
                className={`relative inline-flex size-2.5 rounded-full ${
                  isOpen ? "bg-emerald-500" : "bg-muted-foreground"
                }`}
              />
            </span>
            {isOpen ? (
              <span>Open now until {closingTime}</span>
            ) : (
              <span>
                Closed · Opens {openingTime}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
