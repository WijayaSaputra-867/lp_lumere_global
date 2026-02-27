/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Leaf,
    title: "Eco-Conscious Manufacturing",
    desc: "Our production facilities adhere to the highest GOTS standards, ensuring sustainable growth.",
    span: "md:col-span-2 md:row-span-1",
    bg: "bg-white",
  },
  {
    icon: Award,
    title: "Premium Wholesale",
    desc: "Expertly crafted garments designed to elevate your retail offering.",
    span: "md:col-span-1 md:row-span-1",
    bg: "bg-brand-primary/10",
  },
  {
    icon: Heart,
    title: "Ethical Supply Chain",
    desc: "Transparency and fair labor practices are at our heart.",
    span: "md:col-span-1 md:row-span-2",
    bg: "bg-brand-secondary/10",
  },
  {
    icon: ShieldCheck,
    title: "Retail Support",
    desc: "Dedicated account management and flexible logistics.",
    span: "md:col-span-2 md:row-span-1",
    bg: "bg-white",
  },
];

const Features = () => {
  return (
    <section id="expertise" className='py-32 bg-brand-light/50 overflow-hidden scroll-mt-24'>
      <div className='container mx-auto px-6'>
        <div className="max-w-4xl mb-20">
           <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-brand-dark/20" />
              <span className='text-[10px] font-bold tracking-[0.3em] uppercase text-brand-dark/50'>Our Expertise</span>
           </div>
           <h2 className='text-5xl md:text-7xl font-display text-brand-dark leading-[1.1] mb-8'>
             The Backbone of <br />
             <span className='italic font-normal opacity-60'>Modern Retail.</span>
           </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]'>
          {/* Main Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-[40px] overflow-hidden group shadow-sm border border-brand-dark/5"
          >
             <Image 
                src='/img/kim-tayona-CgBrItB1mGk-unsplash.jpg'
                alt="Factory expertise"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
             <div className="absolute bottom-10 left-10 right-10">
                <div className="glass inline-flex p-3 rounded-2xl mb-6">
                   <ShieldCheck className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-display text-white mb-4">Unmatched Quality Control</h3>
                <p className="text-white/70 max-w-sm mb-6 font-light">
                   Every thread is inspected by experts, ensuring that your brand delivers only the finest garments to your customers.
                </p>
                <button className="flex items-center gap-2 text-white font-bold group/btn">
                   Learn more <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
             </div>
          </motion.div>

          {/* Feature Bento Cards */}
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${f.span} ${f.bg} rounded-[40px] p-10 flex flex-col justify-between border border-brand-dark/5 hover:border-brand-primary/30 transition-colors shadow-sm`}>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <f.icon className='text-brand-dark' size={24} />
                </div>
                <h4 className='text-xl md:text-2xl font-display text-brand-dark mb-4'>{f.title}</h4>
              </div>
              <p className='text-brand-dark/60 text-sm leading-relaxed font-light'>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
