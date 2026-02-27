"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: "Active Partners", value: "500+" },
    { label: "Global Offices", value: "12" },
    { label: "Production Capacity", value: "2M+" },
    { label: "Delivery Success", value: "99.9%" }
  ];

  return (
    <section className="bg-brand-dark py-16 relative z-20">
      {/* Subtle Grain Overlay for Stats only */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'var(--grain)' }}
      />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <p className="text-5xl md:text-6xl font-display text-white mb-3 tracking-tight">{stat.value}</p>
              <div className="flex items-center gap-3">
                <span className="w-4 h-[1px] bg-brand-primary/50" />
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
