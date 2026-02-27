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
    <section className="bg-brand-dark py-12 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
