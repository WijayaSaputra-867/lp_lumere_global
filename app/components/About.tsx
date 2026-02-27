"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about-us" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h4 className="text-brand-primary font-bold tracking-widest uppercase mb-4">Our Heritage</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-dark leading-tight">
              A Global Leader in <span className="text-gradient">Apparel Manufacturing</span>
            </h2>
            <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
              With over two decades of experience, Lumera Global has evolved from a boutique manufacturing unit into a worldwide powerhouse of ethical fashion production and wholesale distribution.
            </p>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              Based in the heart of London with satellite production hubs across Southeast Asia and North America, we bridge the gap between high-fashion design and sustainable, large-scale manufacturing.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-3xl font-bold text-brand-dark mb-1">20+</h3>
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-brand-dark mb-1">Global</h3>
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Network Distribution</p>
              </div>
            </div>

            <button className="px-10 py-4 border-2 border-brand-dark text-brand-dark rounded-full font-bold hover:bg-brand-dark hover:text-white transition-all">
              Learn Our Story
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                alt="Corporate Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
