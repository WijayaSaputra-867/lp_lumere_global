"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: "Elite Partners", value: "500+", color: "text-brand-primary" },
    { label: "Global Hubs", value: "15", color: "text-brand-secondary" },
    { label: "Monthly Units", value: "500k", color: "text-brand-accent" },
    { label: "Success Rate", value: "100%", color: "text-brand-primary" }
  ];

  return (
    <section className="bg-brand-dark py-24 relative overflow-hidden mesh-gradient">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <p className={`text-6xl md:text-8xl font-display mb-4 tracking-tighter ${stat.color} group-hover:scale-105 transition-transform duration-500 origin-left`}>
                {stat.value}
              </p>
              <div className="flex items-center gap-4">
                <span className={`w-8 h-[2px] ${stat.color} opacity-30 shadow-[0_0_10px_currentColor]`} />
                <p className="text-white/30 text-[11px] font-bold uppercase tracking-[0.3em]">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-brand-secondary/10 blur-[100px] pointer-events-none" />
    </section>
  );
};

export default Stats;
