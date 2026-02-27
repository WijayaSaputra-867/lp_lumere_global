"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-32 bg-brand-light/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-dark p-12 md:p-24 rounded-[64px] text-center max-w-5xl mx-auto relative overflow-hidden group shadow-2xl"
        >
          {/* Decorative Gradient Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-secondary/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
             <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">
                   <Mail size={28} />
                </div>
             </div>
             
             <h2 className="text-5xl md:text-7xl font-display text-white leading-[1.1] mb-8">
               Join Our <br />
               <span className="italic font-normal opacity-60">Global Network.</span>
             </h2>
             
             <p className="text-white/40 text-lg mb-12 font-light leading-relaxed">
               Gain exclusive access to corporate insights, wholesale drops, and sustainable manufacturing updates from the world of Lumera Global.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/5 p-2 rounded-[32px] border border-white/10 backdrop-blur-xl">
               <input 
                 type="email" 
                 placeholder="Corporate Email Address" 
                 className="flex-1 px-8 py-5 rounded-[28px] bg-transparent text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 font-light"
               />
               <button className="group flex items-center justify-center gap-2 px-10 py-5 bg-white text-brand-dark rounded-[28px] font-bold transition-all hover:bg-brand-primary hover:text-brand-dark shadow-xl hover:px-12 active:scale-95">
                 Join Network
                 <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
               </button>
             </div>
             
             <p className="mt-8 text-white/20 text-[10px] uppercase font-bold tracking-[0.2em]">
                By joining, you agree to our corporate privacy policies.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
