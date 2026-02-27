"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const divisions = [
  {
    title: "Global Distribution",
    category: "Wholesale Network",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=2000&auto=format&fit=crop",
    color: "bg-brand-accent/20",
  },
  {
    title: "Eco Manufacturing",
    category: "Sustainable Production",
    image:
      "https://images.unsplash.com/photo-1621454523226-c4752f44039c?q=80&w=2000&auto=format&fit=crop",
    color: "bg-brand-secondary/20",
  },
  {
    title: "Supply Logistics",
    category: "Inventory Solutions",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2000&auto=format&fit=crop",
    color: "bg-brand-primary/20",
  },
];

const Collections = () => {
  return (
    <section
      id='collections'
      className='py-24 bg-white relative overflow-hidden text-zinc-900'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Business <span className='text-gradient'>Expertise</span>
            </h2>
            <p className='text-zinc-600 max-w-md font-medium'>
              Empowering retail partners through world-class manufacturing and a
              robust global supply network.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-sm font-bold uppercase tracking-widest flex items-center gap-2 group border-b-2 border-brand-dark pb-1'>
            Explore Divisions
            <ArrowUpRight
              size={18}
              className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
            />
          </motion.button>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {divisions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group cursor-pointer'>
              <div
                className={`relative aspect-[3/4] rounded-[32px] overflow-hidden mb-6 ${item.color}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8'>
                  <button className='w-full py-4 bg-white rounded-2xl font-bold text-sm uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                    Learn More
                  </button>
                </div>
              </div>
              <p className='text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2'>
                {item.category}
              </p>
              <h3 className='text-2xl font-bold text-zinc-900 group-hover:text-brand-primary transition-colors'>
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
