"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about-us" className="py-40 bg-white relative overflow-hidden scroll-mt-24">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-24">
          {/* Visual Side with Bold Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] z-20 border border-brand-dark/5">
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                alt="Corporate Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply" />
            </div>

            {/* Floating Secondary Image */}
            <motion.div 
              style={{ y: 80 }}
              className="absolute -bottom-12 -right-12 w-3/5 aspect-square rounded-[48px] overflow-hidden shadow-3xl z-30 border-[16px] border-white">
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
                alt="Team working"
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Experience Badge */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary rounded-full flex items-center justify-center text-brand-dark shadow-2xl z-40 animate-float border-4 border-white">
               <div className="text-center">
                  <p className="text-4xl font-display leading-none">25</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Years</p>
               </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                 <Award size={24} />
              </div>
              <span className='text-[11px] font-bold tracking-[0.4em] uppercase text-brand-dark/40'>Our Legacy</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-display text-brand-dark leading-[0.9] mb-10 tracking-tighter">
              Crafting <br />
              <span className="text-gradient italic font-normal">Global Trends.</span>
            </h2>
            
            <p className="text-brand-dark/60 text-xl mb-12 leading-relaxed font-light max-w-xl">
              From a vision of sustainable excellence to a worldwide leader, Lumera Global has set the pulse for children&apos;s fashion. We merge ethical manufacturing with uncompromised aesthetic value.
            </p>
            
            <div className="grid grid-cols-2 gap-12 mb-16">
              <div className="group">
                <p className="text-5xl font-display text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">150+</p>
                <div className="flex flex-col">
                   <p className="text-brand-dark/40 text-[10px] font-bold uppercase tracking-widest">Global Partners</p>
                   <div className="w-8 h-[2px] bg-brand-primary mt-2 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
              <div className="group">
                <p className="text-5xl font-display text-brand-dark mb-3 group-hover:text-brand-secondary transition-colors">Top</p>
                <div className="flex flex-col">
                   <p className="text-brand-dark/40 text-[10px] font-bold uppercase tracking-widest">Global Ranking</p>
                   <div className="w-8 h-[2px] bg-brand-secondary mt-2 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>

            <button className="group flex items-center gap-4 px-12 py-6 bg-brand-dark text-white rounded-full font-bold transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95 glow-on-hover">
              Get to Know Us
              <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
