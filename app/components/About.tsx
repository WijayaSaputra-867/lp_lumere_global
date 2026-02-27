"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about-us" className="py-32 bg-white relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Visual Side with Layered Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 relative pr-12 pb-12"
          >
            <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl z-20">
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                alt="Corporate Office"
                fill
                className="object-cover"
              />
            </div>
            {/* Secondary Layering Image */}
            <motion.div 
              style={{ y: 50 }}
              className="absolute bottom-0 right-0 w-2/3 aspect-square rounded-[40px] overflow-hidden shadow-2xl z-30 border-[12px] border-white">
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
                alt="Team working"
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-[100px] -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-brand-dark/20" />
              <span className='text-[10px] font-bold tracking-[0.3em] uppercase text-brand-dark/50'>Our Heritage</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display text-brand-dark leading-[1.1] mb-8">
              A Global Leader in <br />
              <span className="italic font-normal opacity-60">Ethical Apparel.</span>
            </h2>
            
            <p className="text-brand-dark/70 text-lg mb-8 leading-relaxed font-light">
              With over two decades of excellence, Lumera Global has evolved from a boutique manufacturing unit into a worldwide powerhouse of sustainable fashion production and strategic wholesale distribution.
            </p>
            
            <div className="grid grid-cols-2 gap-10 mb-12">
              <div className="group">
                <p className="text-4xl font-display text-brand-dark mb-2">20+</p>
                <div className="flex items-center gap-2">
                   <span className="w-4 h-[1px] bg-brand-primary group-hover:w-8 transition-all" />
                   <p className="text-brand-dark/40 text-[10px] font-bold uppercase tracking-widest">Years Experience</p>
                </div>
              </div>
              <div className="group">
                <p className="text-4xl font-display text-brand-dark mb-2">Global</p>
                <div className="flex items-center gap-2">
                   <span className="w-4 h-[1px] bg-brand-primary group-hover:w-8 transition-all" />
                   <p className="text-brand-dark/40 text-[10px] font-bold uppercase tracking-widest">Network Distribution</p>
                </div>
              </div>
            </div>

            <button className="group flex items-center gap-3 px-10 py-5 bg-brand-dark text-white rounded-full font-bold transition-all hover:shadow-2xl active:scale-95">
              Explore Our Story
              <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
