"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Full-bleed background image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/img/moses-janga-WZaPKRy4zYQ-unsplash.jpg'
          alt='Lumera Collection'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-brand-dark/30' />
      </div>

      {/* Content */}
      <div className='relative z-10 text-center px-6 max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
          <p className='text-[11px] font-medium uppercase tracking-[0.5em] text-white/60 mb-8'>
            Rooted in Nature, Made for Tomorrow
          </p>

          <h1 className='text-6xl md:text-[120px] font-display text-white leading-[0.9] mb-10 tracking-tight'>
            The Most <br />
            <em className='font-light'>Meaningful</em> <br />
            Clothing For You
          </h1>

          <p className='text-white/60 text-lg md:text-xl font-light mb-14 max-w-xl mx-auto leading-relaxed'>
            Handcrafted by Indonesian artisans using heritage techniques and
            100% natural dyes. Every piece tells a story.
          </p>

          <a
            href='#catalogue'
            className='inline-flex items-center gap-3 px-10 py-4 border border-white/30 text-white text-[11px] font-medium uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-brand-dark transition-all duration-500'>
            Explore Collection
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3'>
        <span className='text-[9px] font-medium uppercase tracking-[0.4em] text-white/40'>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={16} className='text-white/40' />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
