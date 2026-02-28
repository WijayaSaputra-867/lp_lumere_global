"use client";

import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { label: "Pengrajin Artisan", value: "200+", color: "text-brand-primary" },
    { label: "Pewarna Alami", value: "100%", color: "text-brand-secondary" },
    { label: "Negara Terjangkau", value: "25+", color: "text-brand-accent" },
    { label: "Pohon Ditanam", value: "10k+", color: "text-brand-rose" },
  ];

  return (
    <section className='py-20 bg-brand-cream border-y border-brand-primary/10'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20'>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className='text-center'>
              <p
                className={`text-4xl md:text-5xl font-display mb-2 ${stat.color}`}>
                {stat.value}
              </p>
              <p className='text-[10px] font-medium uppercase tracking-[0.3em] text-brand-dark/40'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
