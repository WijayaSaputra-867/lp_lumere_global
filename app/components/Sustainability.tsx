"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Globe, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: <Leaf className="text-brand-dark" size={24} />,
      title: "Eco-Conscious Materials",
      description: "Organic cotton, recycled polyester, and low-impact dyes at our core."
    },
    {
      icon: <Heart className="text-brand-dark" size={24} />,
      title: "Ethical Labor",
      description: "Strict adherence to fair trade and safe conditions globally."
    },
    {
      icon: <Globe className="text-brand-dark" size={24} />,
      title: "Carbon Neutrality",
      description: "Reducing logistics carbon footprint by 50% by 2030."
    },
    {
      icon: <ShieldCheck className="text-brand-dark" size={24} />,
      title: "Full Transparency",
      description: "Blockchain-integrated supply chain tracking for end-to-end visibility."
    }
  ];

  return (
    <section id="sustainability" className="py-32 bg-brand-light relative overflow-hidden scroll-mt-24">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-brand-dark/20" />
              <span className='text-[10px] font-bold tracking-[0.3em] uppercase text-brand-dark/50'>Our Responsibility</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display text-brand-dark leading-[1.1] mb-8">
              Commitment to a <br />
              <span className="italic font-normal opacity-60">Greener Future.</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
             <p className="text-brand-dark/60 text-lg font-light leading-relaxed">
                Sustainable practices aren&apos;t just an addition for us; they are woven into the very fabric of how Lumera Global operates worldwide.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[40px] p-10 border border-brand-dark/5 hover:border-brand-primary/30 transition-all group flex flex-col justify-between aspect-square"
            >
              <div>
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display mb-4 text-brand-dark">{item.title}</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-brand-dark/40 text-[10px] font-bold uppercase tracking-widest mt-6 group-hover:text-brand-dark transition-colors">
                 Read Policy <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
