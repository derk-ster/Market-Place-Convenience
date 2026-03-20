"use client";

import { motion } from "framer-motion";
import {
  Apple,
  BatteryCharging,
  Coffee,
  GlassWater,
} from "lucide-react";

const categories = [
  {
    title: "Cold Drinks",
    emoji: "🥤",
    blurb: "Ice-cold refreshment",
    icon: GlassWater,
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Fresh Snacks",
    emoji: "🍎",
    blurb: "Grab & go favorites",
    icon: Apple,
    image:
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Coffee & Breakfast",
    emoji: "☕",
    blurb: "Hot coffee, quick bites",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Household Essentials",
    emoji: "🔋",
    blurb: "Batteries, basics & more",
    icon: BatteryCharging,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format&fit=crop",
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function CategoryGrid() {
  return (
    <section id="categories" className="scroll-mt-24 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What we carry
          </h2>
          <p className="mt-2 text-muted-foreground">
            Quick-link categories — step in, grab what you need, and get back to
            your day.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((cat) => (
            <motion.li
              key={cat.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-card shadow-sm ring-1 ring-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <div
                className="aspect-[4/3] bg-muted bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${cat.image})` }}
                role="img"
                aria-label=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <span className="text-2xl" aria-hidden>
                  {cat.emoji}
                </span>
                <div className="mt-1 flex items-center gap-2">
                  <cat.icon className="size-5 opacity-90" aria-hidden />
                  <h3 className="font-heading text-lg font-semibold">
                    {cat.title}
                  </h3>
                </div>
                <p className="mt-0.5 text-sm text-white/85">{cat.blurb}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
