"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-secondary/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/30 text-brand-dark text-xs font-bold tracking-widest uppercase mb-6">
              Spring Summer 2026
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-6 text-zinc-950">
              Modern Style for <br />
              <span className="text-gradient">Small Icons.</span>
            </h1>
            <p className="text-lg text-zinc-700 max-w-lg mb-10 leading-relaxed font-medium">
              Elevate your child's wardrobe with LUMERA GLOBAL. Premium materials, mindful design, and unbeatable comfort for the next generation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-brand-dark text-white rounded-full font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all group active:scale-95">
                Explore Collection
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-brand-dark text-brand-dark rounded-full font-bold hover:bg-brand-dark hover:text-white transition-all active:scale-95">
                Our Story
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-200 overflow-hidden" />
                ))}
              </div>
              <p className="text-sm font-bold text-zinc-800">
                <span className="text-brand-primary">2.5k+</span> Happy Little Icons
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative animate-float">
              {/* Fallback color if image fails */}
              <div className="absolute inset-0 bg-brand-secondary/30" />
              <img 
                src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200&auto=format&fit=crop" 
                alt="Stylish Child" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl">
                <p className="text-white text-sm font-bold uppercase tracking-widest mb-1 opacity-80">New Season</p>
                <p className="text-white text-xl font-bold">Ocean Breeze Knitwear</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 hidden lg:flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[10px] uppercase font-bold tracking-[0.2em] fill-brand-dark">
                  <textPath xlinkHref="#circlePath">Premium Quality • Sustainable Fashion •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center text-white font-bold">★</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
