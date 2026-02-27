/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-light'>
      {/* Iridescent Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 40, 0], 
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className='absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-brand-primary/30 to-brand-secondary/30 rounded-full blur-[120px] mix-blend-multiply opacity-60' 
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 0], 
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className='absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-brand-secondary/20 to-brand-accent/20 rounded-full blur-[100px] mix-blend-multiply opacity-50' 
      />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-[1.2fr,0.8fr] gap-16 items-center'>
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-[1px] bg-brand-dark/20" />
                <span className='text-[11px] font-bold tracking-[0.3em] uppercase text-brand-dark/60'>
                  Global Excellence in Kids Fashion
                </span>
              </div>

              <h1 className='text-6xl md:text-8xl font-display leading-[1] mb-8 text-brand-dark tracking-tight'>
                Fashioning the <br />
                <span className="italic font-normal">Next Generation.</span>
              </h1>

              <p className='text-xl text-brand-dark/70 max-w-lg mb-12 leading-relaxed font-light'>
                LUMERA GLOBAL is where manufacturing heritage meets contemporary design. 
                We provide end-to-end wholesale solutions for the world&apos;s most ambitious children&apos;s brands.
              </p>

              <div className='flex flex-wrap gap-6'>
                <button className='group relative px-10 py-5 bg-brand-dark text-white rounded-full font-bold overflow-hidden transition-all hover:pr-14 hover:shadow-2xl active:scale-95'>
                  <span className="relative z-10">Start Partnership</span>
                  <ArrowUpRight
                    size={20}
                    className='absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all'
                  />
                </button>
                
                <button className='flex items-center gap-4 px-6 py-5 text-brand-dark font-bold hover:opacity-70 transition-all group'>
                  <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all">
                    <Play size={18} fill="currentColor" />
                  </div>
                  Our Story
                </button>
              </div>

              {/* Stats Overlay on Content Side */}
              <div className='mt-16 pt-8 border-t border-brand-dark/5 flex items-center gap-10'>
                <div>
                  <p className="text-3xl font-display text-brand-dark">15+</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-dark/40">Countries Served</p>
                </div>
                <div className="w-[1px] h-10 bg-brand-dark/10" />
                <div>
                  <p className="text-3xl font-display text-brand-dark">500k+</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-dark/40">Units Monthly</p>
                </div>
              </div>
            </motion.div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className='relative'>
              
              {/* Main Image with sophisticated frame */}
              <div className="relative p-4 bg-white rounded-[48px] shadow-2xl overflow-hidden group">
                <div className='aspect-[4/5] rounded-[36px] overflow-hidden relative'>
                  <Image
                    src='/img/kajetan-sumila-uPhQXmwPVXc-unsplash.jpg'
                    alt='LUMERA GLOBAL Kids Fashion'
                    fill
                    className='object-cover transition-transform duration-1000 group-hover:scale-110'
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent opacity-60' />
                </div>
                
                {/* Floating Badge (Updated Style) */}
                <div className="absolute top-10 right-10 glass p-5 rounded-3xl animate-float backdrop-blur-md">
                   <div className="flex flex-col items-center text-center">
                      <span className="text-[10px] font-bold tracking-widest text-brand-dark/60 uppercase mb-1">Establishment</span>
                      <span className="text-xl font-display italic">MCMXCVIII</span>
                   </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-accent/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-brand-primary/20 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark/30">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-dark/10 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;