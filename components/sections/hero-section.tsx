"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mint-50/80 to-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:items-center sm:py-20 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 sm:order-1"
        >
          <p className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Dallas · Local &amp; fast
          </p>
          <h1 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Your Neighborhood Essentials, Ready When You Are.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
            Fresh snacks, cold drinks, and daily essentials in the heart of
            Dallas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#find-us"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 gap-2 px-6 text-base shadow-md shadow-primary/15"
              )}
            >
              Get directions
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="#categories"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 border-primary/20 bg-white/80 px-6 text-base backdrop-blur-sm"
              )}
            >
              Browse categories
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-primary/10 ring-1 ring-primary/10 sm:order-2 lg:aspect-square"
        >
          <div
            className="absolute inset-0 flex items-center justify-center bg-muted px-6 text-center"
            role="img"
            aria-label="Place holder image"
          >
            <span className="text-sm font-medium text-muted-foreground sm:text-base">
              Place holder image
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
