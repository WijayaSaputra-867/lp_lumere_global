"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Globe, ShieldCheck, Heart } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: <Leaf className="text-brand-primary" size={28} />,
      title: "Eco-Conscious Materials",
      description: "We prioritize organic cotton, recycled polyester, and low-impact dyes in our manufacturing process."
    },
    {
      icon: <Heart className="text-brand-primary" size={28} />,
      title: "Ethical Labor",
      description: "Strict adherence to fair trade practices and safe working conditions across all our global facilities."
    },
    {
      icon: <Globe className="text-brand-primary" size={28} />,
      title: "Carbon Neutrality",
      description: "Ambitious target to reduce our logistics carbon footprint by 50% by the year 2030."
    },
    {
      icon: <ShieldCheck className="text-brand-primary" size={28} />,
      title: "Full Transparency",
      description: "Blockchain-integrated supply chain tracking for end-to-end production visibility."
    }
  ];

  return (
    <section id="sustainability" className="py-24 bg-brand-light relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-widest uppercase mb-4"
          >
            Our Responsibility
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark"
          >
            Committed to a <span className="text-gradient">Greener Future</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-lg"
          >
            Sustainable practices aren't just an addition for us; they are woven into the very fabric of how Lumera Global operates worldwide.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/40 hover:border-brand-primary/20 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-dark">{item.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
