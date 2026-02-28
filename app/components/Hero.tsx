/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-light">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 z-0 mesh-gradient opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="px-4 py-1.5 rounded-full bg-brand-primary/20 text-brand-dark flex items-center gap-2">
                   <TrendingUp size={14} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">New Season Drop</span>
                </div>
                <div className="flex items-center gap-2 text-brand-dark/40">
                   <Sparkles size={14} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Limited Edition</span>
                </div>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-display text-brand-dark leading-[0.85] mb-10 tracking-tighter">
                Ethereal <br />
                <span className="text-gradient italic font-normal">Elegance.</span>
              </h1>
              
              <p className="text-brand-dark/50 text-xl md:text-2xl font-light mb-12 max-w-lg leading-relaxed">
                Experience sustainable luxury for the next generation. Our Spring &apos;26 collection combines timeless heritage with state-of-the-art fabrics.
              </p>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary/30 rounded-full blur-[70px] -z-10" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_10px_#00F299]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;