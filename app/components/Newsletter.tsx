"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-28 bg-brand-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-brand-secondary p-14 md:p-24 rounded-3xl text-center max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Warm decorative accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-white/70 mx-auto mb-10">
              <Mail size={28} />
            </div>

            <h2 className="text-4xl md:text-6xl font-display text-white leading-[0.95] mb-6">
              Be Part of <br />
              <em className="font-light opacity-70">Our Story</em>
            </h2>

            <p className="text-white/50 text-base mb-12 font-light leading-relaxed">
              Secret launches, artisan stories, and behind-the-scenes glimpses
              we don&apos;t share anywhere else.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 p-2 rounded-full bg-white/10 border border-white/10">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-8 py-4 rounded-full bg-transparent text-white placeholder:text-white/30 focus:outline-none font-light"
              />
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-secondary rounded-full font-medium transition-all hover:bg-brand-accent hover:text-white text-[11px] uppercase tracking-[0.15em]">
                Join Us
                <ArrowRight size={16} />
              </button>
            </div>

            <p className="mt-8 text-white/20 text-[10px] font-medium uppercase tracking-[0.3em]">
              No spam, unsubscribe anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
