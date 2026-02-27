"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[40px] text-center max-w-4xl mx-auto border-brand-primary/20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-950">
            Partner <span className="text-gradient">With Us</span>
          </h2>
          <p className="text-zinc-700 text-lg mb-10 max-w-xl mx-auto font-medium">
            Join our global network of retail partners and exclusive wholesale drops. Gain access to corporate insights and sustainable manufacturing updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Corporate Email Address" 
              className="flex-1 px-6 py-4 rounded-full bg-white border border-brand-primary/20 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 font-medium"
            />
            <button className="px-8 py-4 bg-brand-dark text-white rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl">
              Join Network
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
