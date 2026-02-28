"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ShoppingBag, Heart } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    title: "Eco Essentials",
    category: "Sustainable Basics",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
    tag: "Trending"
  },
  {
    title: "Spring '26",
    category: "New Arrival",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2",
    tag: "New"
  },
  {
    title: "Global Best",
    category: "Customer Favorites",
    image: "https://images.unsplash.com/photo-1539109132381-31a1ec6d4b3f?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
    tag: "Popular"
  },
];

const Collections = () => {
  return (
    <section id='divisions' className='py-40 bg-white relative overflow-hidden scroll-mt-24'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={16} className="text-brand-primary" />
              <span className='text-[10px] font-bold tracking-[0.4em] uppercase text-brand-dark/40'>Curated Selection</span>
            </div>
            <h2 className='text-6xl md:text-8xl font-display text-brand-dark leading-[0.9] mb-8 tracking-tighter'>
              Seasonal <br />
              <span className='italic font-normal text-gradient'>Categories.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <button className='group flex items-center gap-4 px-10 py-5 bg-brand-dark text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-brand-dark transition-all duration-500 shadow-2xl glow-on-hover'>
               Shop All Collections
               <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[350px]'>
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[60px] cursor-pointer ${item.className}`}>
              
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover transition-transform duration-1000 group-hover:scale-110 ease-out'
              />
              
              <div className="product-badge badge-new">{item.tag}</div>

              {/* Overlay Content */}
              <div className='absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent p-12 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity'>
                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <span className='text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-3 block'>
                       {item.category}
                    </span>
                    <h3 className='text-4xl md:text-5xl font-display text-white mb-6'>
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                       <button className="flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-widest hover:text-brand-primary transition-colors">
                          Exploration <ArrowUpRight size={16} />
                       </button>
                       <div className="w-px h-4 bg-white/20" />
                       <div className="flex gap-4">
                          <ShoppingBag size={18} className="text-white/60 hover:text-brand-primary transition-colors" />
                          <Heart size={18} className="text-white/60 hover:text-brand-primary transition-colors" />
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
