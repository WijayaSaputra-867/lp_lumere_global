"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Heart, Award, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Eco-Certified Quality",
    description: "Every garment meets the highest global standards for sustainable and ethical manufacturing.",
    color: "bg-brand-primary/10 text-brand-primary",
    border: "border-brand-primary/20"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Supply Chain",
    description: "Our robust network ensures seamless distribution to over 15 countries worldwide.",
    color: "bg-brand-secondary/10 text-brand-secondary",
    border: "border-brand-secondary/20"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "High-Volume Agility",
    description: "Capacity to produce 500k units monthly with unmatched precision and speed.",
    color: "bg-brand-accent/10 text-brand-accent",
    border: "border-brand-accent/20"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Design Innovation",
    description: "Where heritage craftsmanship meets contemporary children's fashion aesthetics.",
    color: "bg-brand-primary/10 text-brand-primary",
    border: "border-brand-primary/20"
  }
];

const Features = () => {
  return (
    <section id="expertise" className="py-40 bg-brand-dark relative overflow-hidden mesh-gradient">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-brand-primary animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/50">Core Capabilities</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-display text-white leading-[0.9] mb-10 tracking-tighter">
            The Pillars of <br />
            <span className="text-gradient italic font-normal">Our Excellence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card group flex flex-col justify-between"
            >
              <div className={`w-16 h-16 rounded-[24px] ${feature.color} flex items-center justify-center mb-10 border ${feature.border} group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative line */}
              <div className="w-12 h-[1px] bg-white/10 mt-10 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Features;
