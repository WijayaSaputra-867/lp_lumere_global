"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Globe, ShieldCheck, Heart, ArrowUpRight, Sparkles } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: <Leaf className="text-brand-primary" size={28} />,
      title: "Eco-Conscious Materials",
      description: "Organic cotton, recycled polyester, and low-impact dyes are woven into our core."
    },
    {
      icon: <Heart className="text-brand-secondary" size={28} />,
      title: "Ethical Labor",
      description: "Strict adherence to fair trade and safe conditions globally is our promise."
    },
    {
      icon: <Globe className="text-brand-accent" size={28} />,
      title: "Carbon Neutrality",
      description: "Targeting a 50% reduction in our logistics carbon footprint by 2030."
    },
    {
      icon: <ShieldCheck className="text-brand-primary" size={28} />,
      title: "Full Transparency",
      description: "Blockchain-integrated supply chain tracking for absolute end-to-end visibility."
    }
  ];

  return (
    <section id="sustainability" className="py-40 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-secondary/5 skew-x-12 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                 <Sparkles size={24} />
              </div>
              <span className='text-[11px] font-bold tracking-[0.4em] uppercase text-brand-dark/40'>Our Global Impact</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-display text-brand-dark leading-[0.9] mb-10 tracking-tighter">
              Legacy of <br />
              <span className="text-gradient italic font-normal">Conscious Luxury.</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
             <p className="text-brand-dark/50 text-xl font-light leading-relaxed">
                Sustainability is not a feature; it&apos;s our foundation. We redefine children&apos;s fashion by respecting the world they will inherit.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[420px] bg-white rounded-[60px] p-12 border border-brand-dark/5 hover:border-brand-primary/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-colors duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-light rounded-3xl flex items-center justify-center mb-10 shadow-sm border border-brand-dark/5 group-hover:scale-110 group-hover:bg-white transition-all duration-700">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-display mb-6 text-brand-dark leading-tight group-hover:text-brand-primary transition-colors">{item.title}</h3>
                <p className="text-brand-dark/50 text-base leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
              
              <div className="relative z-10 flex items-center gap-3 text-brand-dark/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-8 group-hover:text-brand-dark transition-all duration-500">
                 Read Our Policy <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
