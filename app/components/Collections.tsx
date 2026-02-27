"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Factory, Truck } from "lucide-react";
import Image from "next/image";

const divisions = [
  {
    title: "Global Distribution",
    category: "Wholesale Network",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Eco Manufacturing",
    category: "Sustainable Production",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Supply Logistics",
    category: "Inventory Solutions",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  },
];

const Collections = () => {
  return (
    <section id='divisions' className='py-32 bg-white relative overflow-hidden scroll-mt-24'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-brand-dark/20" />
              <span className='text-[10px] font-bold tracking-[0.3em] uppercase text-brand-dark/50'>Our Structure</span>
            </div>
            <h2 className='text-5xl md:text-7xl font-display text-brand-dark leading-[1.1] mb-8'>
              Strategic <br />
              <span className='italic font-normal opacity-60'>Global Divisions.</span>
            </h2>
            <p className='text-brand-dark/60 text-lg font-light leading-relaxed max-w-lg'>
              Empowering retail partners through world-class manufacturing and a
              robust global supply network designed for scale.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <button className='group flex items-center gap-3 px-8 py-4 border border-brand-dark/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all'>
               Explore All Divisions
               <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]'>
          {divisions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[48px] ${item.className}`}>
              
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover transition-transform duration-1000 group-hover:scale-110 ease-out'
              />
              
              {/* Overlay Content */}
              <div className='absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent p-10 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity'>
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white">
                      <item.icon size={20} />
                   </div>
                   <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-white/50'>
                      {item.category}
                   </span>
                </div>
                <h3 className='text-3xl font-display text-white mb-2'>
                  {item.title}
                </h3>
                
                <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500">
                   <p className="text-white/60 text-sm font-light">
                      Learn how we optimize our {item.title.toLowerCase()} for global excellence.
                   </p>
                </div>
              </div>

              {/* Top Right Arrow */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0">
                 <ArrowUpRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
