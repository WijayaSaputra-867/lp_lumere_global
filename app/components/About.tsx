"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id='about-us' className='scroll-mt-24 overflow-hidden'>
      {/* Editorial Split Layout */}
      <div className='flex flex-col lg:flex-row min-h-[80vh]'>
        {/* Image Side — using background image for reliability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className='relative w-full lg:w-1/2 min-h-100 lg:min-h-0'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='https://images.unsplash.com/photo-1490481651871-ab68625d5062?q=80&w=1200&auto=format&fit=crop'
            alt='Artisan crafting process'
            className='absolute inset-0 w-full h-full object-cover'
          />
          {/* Warm overlay */}
          <div className='absolute inset-0 bg-brand-dark/10' />

          {/* Year Badge — inside image */}
          <div className='absolute bottom-8 left-8 lg:bottom-12 lg:left-12 z-10'>
            <div className='flex items-center gap-4 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg'>
              <span className='text-sm font-display text-brand-dark'>
                Est. <span className='text-brand-primary'>1998</span>
              </span>
              <span className='w-6 h-px bg-brand-dark/20' />
              <span className='text-[9px] font-medium uppercase tracking-[0.2em] text-brand-dark/50'>
                Jawa Tengah, Indonesia
              </span>
            </div>
          </div>

          {/* Floating caption */}
          <div className='absolute top-8 left-8 lg:top-12 lg:left-12'>
            <p className='text-white/70 text-[10px] font-medium uppercase tracking-[0.3em]'>
              Bengkel Kerajinan Warisan
            </p>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='w-full lg:w-1/2 flex items-center bg-brand-light'>
          <div className='px-8 py-20 md:px-16 lg:px-20 xl:px-28 max-w-2xl'>
            <p className='text-[11px] font-medium uppercase tracking-[0.4em] text-brand-dark/40 mb-6'>
              Our Story
            </p>

            <h2 className='text-4xl md:text-6xl lg:text-7xl font-display text-brand-dark leading-[0.95] mb-10'>
              Rooted in <br />
              <em className='font-light text-brand-primary'>
                Generations
              </em>{" "}
              <br />
              of Craft
            </h2>

            <div className='space-y-5 mb-12'>
              <p className='text-brand-dark/50 text-base lg:text-lg font-light leading-relaxed'>
                In 1998, Lumera began as a single workshop in Central Java,
                where a handful of artisans wove dreams into fabric using
                techniques passed down through centuries.
              </p>
              <p className='text-brand-dark/50 text-base lg:text-lg font-light leading-relaxed'>
                Today, we work with over 200 artisan makers across Indonesia,
                creating garments dyed entirely with plants — no chemicals,
                ever. Every stitch carries the warmth of hands that understand
                both tradition and tomorrow.
              </p>
            </div>

            {/* Stats row */}
            <div className='flex items-center gap-12 mb-12 py-8 border-y border-brand-primary/10'>
              <div>
                <p className='text-3xl font-display text-brand-primary mb-1'>
                  200+
                </p>
                <p className='text-[10px] font-medium uppercase tracking-[0.3em] text-brand-dark/40'>
                  Pembuat Pengrajin
                </p>
              </div>
              <div className='w-px h-12 bg-brand-dark/10' />
              <div>
                <p className='text-3xl font-display text-brand-secondary mb-1'>
                  100%
                </p>
                <p className='text-[10px] font-medium uppercase tracking-[0.3em] text-brand-dark/40'>
                  Pewarna Alami
                </p>
              </div>
              <div className='w-px h-12 bg-brand-dark/10 hidden sm:block' />
              <div className='hidden sm:block'>
                <p className='text-3xl font-display text-brand-accent mb-1'>
                  25+
                </p>
                <p className='text-[10px] font-medium uppercase tracking-[0.3em] text-brand-dark/40'>
                  Negara
                </p>
              </div>
            </div>

            <a
              href='#sustainability'
              className='group inline-flex items-center gap-4 px-8 py-4 border border-brand-dark/10 rounded-full text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dark/60 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-500'>
              Pelajari Dampak Kami
              <ArrowRight
                size={14}
                className='group-hover:translate-x-1 transition-transform'
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Second Row — Artisan Gallery Strip */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-0'>
        {[
          {
            img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600&auto=format&fit=crop",
            label: "Ateliér",
          },
          {
            img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=600&auto=format&fit=crop",
            label: "Pewarnaan Alami",
          },
          {
            img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop",
            label: "Potongan Jadi",
          },
          {
            img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop",
            label: "Komunitas",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className='group relative h-48 md:h-64 overflow-hidden cursor-pointer'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.img}
              alt={item.label}
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]'
            />
            <div className='absolute inset-0 bg-brand-dark/30 group-hover:bg-brand-dark/50 transition-colors duration-500 flex items-end p-6'>
              <p className='text-white text-[10px] font-medium uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0'>
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
