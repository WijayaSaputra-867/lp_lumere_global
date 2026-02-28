"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-dark p-16 md:p-32 rounded-[100px] text-center max-w-6xl mx-auto relative overflow-hidden group shadow-2xl mesh-gradient border border-white/5"
        >
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-2/3 h-full bg-gradient-to-r from-brand-secondary/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
             <div className="flex justify-center mb-10">
                <div className="w-20 h-20 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary backdrop-blur-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                   <Mail size={32} />
                </div>
             </div>
             
             <h2 className="text-6xl md:text-8xl font-display text-white leading-[0.9] mb-10 tracking-tighter">
               Curated <br />
               <span className="text-gradient italic font-normal">Global Insights.</span>
             </h2>
             
             <p className="text-white/40 text-xl mb-16 font-light leading-relaxed">
               Gain privileged access to our manufacturing forecasts, wholesale releases, and sustainable fashion breakthroughs.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-6 p-3 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl">
               <input 
                 type="email" 
                 placeholder="Professional Email Address" 
                 className="flex-1 px-10 py-6 rounded-[40px] bg-transparent text-white placeholder:text-white/20 focus:outline-none font-light text-lg"
               />
               <button className="group flex items-center justify-center gap-4 px-12 py-6 bg-white text-brand-dark rounded-[40px] font-bold transition-all duration-500 hover:bg-brand-primary hover:text-brand-dark shadow-xl hover:px-16 active:scale-95 glow-on-hover uppercase tracking-widest text-xs">
                 Join Network
                 <ArrowRight size={24} className="transition-transform group-hover:translate-x-2" />
               </button>
             </div>
             
             <div className="mt-12 flex items-center justify-center gap-3">
                <Sparkles size={14} className="text-brand-primary animate-pulse" />
                <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.4em]">
                   Encrypted & Private Global Transmission
                </p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
