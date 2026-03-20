"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function StockRequestForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="stock-request"
      className="scroll-mt-24 bg-gradient-to-b from-background to-mint-50/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-xl px-4">
        <Card className="border-primary/15 shadow-lg shadow-primary/5 ring-primary/10">
          <CardHeader>
            {/* eslint-disable-next-line @next/next/no-img-element -- placehold.co banner; swap for real photography later */}
            <img
              src="https://placehold.co/720x80/f8fafc/065f46?text=Tell+us+what+to+stock"
              alt=""
              width={720}
              height={80}
              className="mb-4 w-full rounded-lg border border-primary/10 object-cover"
            />
            <CardTitle className="text-xl sm:text-2xl">
              Stock request
            </CardTitle>
            <CardDescription>
              Tell us what you&apos;d like to see on the shelves — we read every
              note from neighbors.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex flex-col items-center gap-3 rounded-xl border border-primary/15 bg-mint-50/80 px-4 py-10 text-center"
                >
                  <CheckCircle2
                    className="size-12 text-primary"
                    aria-hidden
                  />
                  <p className="font-medium text-foreground">
                    Thanks — we&apos;ve got your request.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    (Demo: form doesn&apos;t send email yet; hook this to your
                    inbox or SMS when you go live.)
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2 border-primary/25"
                    onClick={() => setSent(false)}
                  >
                    Send another
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="h-10 bg-white/80"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email or phone</Label>
                    <Input
                      id="email"
                      name="contact"
                      required
                      autoComplete="email"
                      placeholder="you@email.com or (214) …"
                      className="h-10 bg-white/80"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product">Product you want</Label>
                    <Input
                      id="product"
                      name="product"
                      required
                      placeholder="Brand & flavor — be specific"
                      className="h-10 bg-white/80"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes (optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Dietary needs, size, where you usually find it…"
                      className="min-h-[96px] resize-y bg-white/80"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="mt-2 w-full h-11 gap-2 text-base shadow-md shadow-primary/15 sm:w-auto"
                  >
                    <Send className="size-4" aria-hidden />
                    Submit request
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
