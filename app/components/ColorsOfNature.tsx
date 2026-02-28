"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const colors = [
  {
    name: "Heirloom Indigo",
    hex: "#1E3A5F",
    description: "Deep blue from fermented indigo leaves — a color that deepens with each wash, like wisdom with age.",
    source: "Indigo Plant",
  },
  {
    name: "Turmeric Gold",
    hex: "#CCA460",
    description: "A warm golden hue from curcuma root. Sacred in Javanese tradition, it symbolizes prosperity and warmth.",
    source: "Curcuma Root",
  },
  {
    name: "Mahogany Earth",
    hex: "#8B4A3B",
    description: "Rich brown from mahogany bark, grounding each garment in the deep forests of Kalimantan.",
    source: "Mahogany Bark",
  },
  {
    name: "Nature White",
    hex: "#F5F0E8",
    description: "Our undyed organic cotton. Pure, honest, and softened only by the sun and water.",
    source: "Undyed Cotton",
  },
  {
    name: "Sappan Rose",
    hex: "#C47B7B",
    description: "A gentle blush from sappanwood, traditionally used in healing ceremonies across the archipelago.",
    source: "Sappanwood",
  },
  {
    name: "Forest Moss",
    hex: "#4A6B5A",
    description: "Muted green from mixed leaf extracts, evoking the misty highlands of Central Java.",
    source: "Mixed Leaves",
  },
];

const ColorsOfNature = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-brand-dark/40 mb-6">
              100% Plant-Based Dyes
            </p>
            <h2 className="text-5xl md:text-7xl font-display text-brand-dark leading-[0.95] mb-6">
              Colors of <em className="font-light text-brand-accent">Nature</em>
            </h2>
            <p className="text-brand-dark/50 text-lg font-light max-w-lg mx-auto leading-relaxed">
              Every color is born from plants. No chemicals, no synthetics — just
              the earth&apos;s honest palette, telling stories of becoming.
            </p>
          </motion.div>
        </div>

        {/* Editorial quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-display italic text-brand-dark/30 mb-20 max-w-2xl mx-auto"
        >
          &ldquo;Like you, every color carries a story of becoming.&rdquo;
        </motion.p>

        {/* Color Swatches Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {colors.map((color, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="group cursor-pointer"
            >
              {/* Swatch */}
              <div
                className="aspect-square rounded-2xl mb-5 transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:rounded-3xl"
                style={{ backgroundColor: color.hex }}
              />

              {/* Info */}
              <h4 className="text-sm font-display font-semibold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">
                {color.name}
              </h4>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/30 mb-2">
                {color.source}
              </p>
              <p className="text-xs text-brand-dark/40 font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {color.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#catalogue"
            className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-dark/50 hover:text-brand-dark transition-colors underline-reveal"
          >
            Discover Your Colors <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ColorsOfNature;
