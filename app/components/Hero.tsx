/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-dark mesh-gradient'>
      {/* Dynamic Glow Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className='absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[160px] pointer-events-none' 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/20 rounded-full blur-[140px] pointer-events-none' 
      />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-[1.1fr,0.9fr] gap-20 items-center'>
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 mb-10 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <Sparkles size={14} className="text-brand-primary animate-pulse" />
                <span className='text-[10px] font-bold tracking-[0.4em] uppercase text-white/50'>
                  The Future of Kids Fashion
                </span>
              </motion.div>

              <h1 className='text-7xl md:text-9xl font-display leading-[0.9] mb-10 text-white tracking-tighter'>
                Elegance in <br />
                <span className="text-gradient italic font-normal">Every Stitch.</span>
              </h1>

              <p className='text-xl text-white/60 max-w-xl mb-14 leading-relaxed font-light'>
                LUMERA GLOBAL redefines children&apos;s apparel with a fusion of heritage craftsmanship and avant-garde design. We empower global brands through sustainable, world-class manufacturing.
              </p>

              <div className='flex flex-wrap gap-8'>
                <button className='group relative px-12 py-6 bg-brand-primary text-brand-dark rounded-full font-bold overflow-hidden transition-all hover:pr-16 hover:shadow-[0_0_40px_rgba(0,242,153,0.3)] active:scale-95'>
                  <span className="relative z-10">Partner With Us</span>
                  <ArrowUpRight
                    size={22}
                    className='absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all'
                  />
                </button>
                
                <button className='flex items-center gap-5 px-8 py-6 text-white font-bold hover:text-brand-primary transition-all group'>
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-dark transition-all shadow-xl">
                    <Play size={20} fill="currentColor" />
                  </div>
                  Watch Film
                </button>
              </div>

              {/* Enhanced Stats */}
              <div className='mt-20 flex items-center gap-16'>
                <div className="group">
                  <p className="text-4xl font-display text-white mb-2 group-hover:text-brand-primary transition-colors">15+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Nations Served</p>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div className="group">
                  <p className="text-4xl font-display text-white mb-2 group-hover:text-brand-secondary transition-colors">500k</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Monthly Capacity</p>
                </div>
              </div>
            </motion.div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className='relative perspective-1000'>
              
              {/* Main Image Container */}
              <div className="relative p-6 bg-white/5 rounded-[60px] border border-white/10 shadow-3xl overflow-hidden group backdrop-blur-sm">
                <div className='aspect-[4/5] rounded-[48px] overflow-hidden relative'>
                  <Image
                    src='/img/kajetan-sumila-uPhQXmwPVXc-unsplash.jpg'
                    alt='LUMERA GLOBAL Kids Fashion'
                    fill
                    className='object-cover transition-transform duration-1000 group-hover:scale-105'
                    priority
                  />
                  {/* Iridescent Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 via-transparent to-brand-primary/20 opacity-40 mix-blend-overlay' />
                </div>
                
                {/* Floating Aesthetic Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass p-8 rounded-[40px] shadow-2xl border-white/20 z-20"
                >
                   <div className="flex flex-col items-center text-center">
                      <span className="text-[9px] font-bold tracking-[0.3em] text-brand-dark/40 uppercase mb-2">Heritage</span>
                      <span className="text-2xl font-display italic text-brand-dark">Est. 1998</span>
                   </div>
                </motion.div>

                {/* Glass Tag */}
                <div className="absolute bottom-10 left-10 glass px-6 py-4 rounded-3xl border-white/20">
                   <p className="text-brand-dark font-bold text-[10px] tracking-widest uppercase">Premium Quality</p>
                </div>
              </div>

              {/* Decorative Glows */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-primary/40 rounded-full blur-[80px] -z-10" />
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