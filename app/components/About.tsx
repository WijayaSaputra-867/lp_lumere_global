"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about-us" className="py-28 bg-brand-light scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68625d5062?q=80&w=1200&auto=format&fit=crop"
                alt="Artisan crafting"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating accent image */}
            <div className="absolute -bottom-8 -right-8 w-2/5 aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-brand-light">
              <Image
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600&auto=format&fit=crop"
                alt="Sustainable fabrics"
                fill
                className="object-cover"
              />
            </div>

            {/* Year badge */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-brand-cream rounded-full flex items-center justify-center border border-brand-primary/20 shadow-sm">
              <div className="text-center">
                <p className="text-2xl font-display text-brand-dark leading-none">
                  Est.
                </p>
                <p className="text-xl font-display text-brand-primary leading-none">
                  1998
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-brand-dark/40 mb-6">
              Our Story
            </p>

            <h2 className="text-5xl md:text-7xl font-display text-brand-dark leading-[0.95] mb-8">
              Rooted in <br />
              <em className="font-light text-brand-primary">Generations</em> <br />
              of Craft
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-brand-dark/50 text-lg font-light leading-relaxed">
                In 1998, Lumera began as a single workshop in Central Java, where
                a handful of artisans wove dreams into fabric using techniques
                passed down through centuries.
              </p>
              <p className="text-brand-dark/50 text-lg font-light leading-relaxed">
                Today, we work with over 200 artisan makers across Indonesia,
                creating garments dyed entirely with plants — no chemicals, ever.
                Every stitch carries the warmth of hands that understand both
                tradition and tomorrow.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12 py-8 border-y border-brand-primary/10">
              <div>
                <p className="text-3xl font-display text-brand-primary mb-1">
                  200+
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-brand-dark/40">
                  Artisan Makers
                </p>
              </div>
              <div>
                <p className="text-3xl font-display text-brand-secondary mb-1">
                  100%
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-brand-dark/40">
                  Natural Dyes
                </p>
              </div>
            </div>

            <a
              href="#sustainability"
              className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-dark/50 hover:text-brand-dark transition-colors underline-reveal"
            >
              Learn About Our Impact <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
