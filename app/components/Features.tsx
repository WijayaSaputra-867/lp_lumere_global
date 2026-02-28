"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scissors, Sprout, HandHeart, Infinity } from "lucide-react";

const promises = [
  {
    icon: <Scissors size={28} />,
    title: "Handmade",
    description:
      "Every piece is touched by artisan hands, not factory machines. Each garment carries the warmth of its maker.",
  },
  {
    icon: <Sprout size={28} />,
    title: "Farm to Closet",
    description:
      "We know every step — from the fields where cotton grows to the closet where it lives. Full transparency, always.",
  },
  {
    icon: <HandHeart size={28} />,
    title: "Heritage Techniques",
    description:
      "Batik, ikat, natural dyeing — Indonesia's centuries-old craft traditions preserved and celebrated in modern design.",
  },
  {
    icon: <Infinity size={28} />,
    title: "Lifetime Care",
    description:
      "We offer free repairs forever. Because the most sustainable garment is the one you never throw away.",
  },
];

const Features = () => {
  return (
    <section id='expertise' className='py-28 bg-brand-cream'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <p className='text-[11px] font-medium uppercase tracking-[0.4em] text-brand-dark/40 mb-6'>
              Our Promise
            </p>
            <h2 className='text-5xl md:text-7xl font-display text-brand-dark leading-[0.95] mb-6'>
              Clothing Made with{" "}
              <em className='font-light text-brand-accent'>Intent</em>
            </h2>
            <p className='text-brand-dark/50 text-lg font-light max-w-lg mx-auto leading-relaxed'>
              Four pillars guide everything we create — ensuring every garment
              is worthy of the hands that made it and the person who wears it.
            </p>
          </motion.div>
        </div>

        {/* Promise Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {promises.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className='group text-center p-10 rounded-2xl bg-white border border-brand-dark/5 hover:border-brand-primary/20 transition-all duration-500 hover-lift'>
              <div className='w-16 h-16 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500'>
                {item.icon}
              </div>
              <h3 className='text-xl font-display text-brand-dark mb-3 group-hover:text-brand-primary transition-colors'>
                {item.title}
              </h3>
              <p className='text-brand-dark/40 text-sm font-light leading-relaxed'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
