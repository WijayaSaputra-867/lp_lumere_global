"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const collections = [
  {
    title: "Roots",
    subtitle: "Akar",
    description:
      "Full-cut pieces crafted from earth-toned organic cotton fabrics. Heritage weaving techniques passed down through generations.",
    image: "/img/kajetan-sumila-uPhQXmwPVXc-unsplash.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Sky",
    subtitle: "Langit",
    description:
      "Indigo-dyed garments inspired by the vastness of Indonesia's skies. Each pattern tells a story of patience and craft.",
    image: "/img/kim-tayona-CgBrItB1mGk-unsplash.jpg",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Earth",
    subtitle: "Bumi",
    description:
      "Turmeric and mahogany-colored linens celebrating the rich soils of Java. Warm tones for warm hearts.",
    image: "/img/moses-janga-1eLxmJvZrr4-unsplash.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
];

const Collections = () => {
  return (
    <section id='divisions' className='py-28 bg-brand-light scroll-mt-24'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <p className='text-[11px] font-medium uppercase tracking-[0.4em] text-brand-dark/40 mb-6'>
              Curated Collections
            </p>
            <h2 className='text-5xl md:text-7xl font-display text-brand-dark leading-[0.95] mb-6'>
              Every Thread <br />
              <em className='font-light text-brand-primary'>Tells A Story</em>
            </h2>
            <p className='text-brand-dark/50 text-lg font-light max-w-lg mx-auto leading-relaxed'>
              Three collections inspired by Indonesia&apos;s natural elements,
              each handcrafted by our artisan communities.
            </p>
          </motion.div>
        </div>

        {/* Collection Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]'>
          {collections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${item.className}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover transition-transform duration-[1.2s] group-hover:scale-105 ease-out'
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-linear-to-t from-brand-dark/70 via-brand-dark/10 to-transparent transition-all duration-700'>
                <div className='absolute bottom-0 left-0 right-0 p-10'>
                  {/* Title */}
                  <div className='flex items-baseline gap-3 mb-2'>
                    <h3 className='text-4xl font-display text-white'>
                      {item.title}
                    </h3>
                    <span className='text-white/40 text-sm font-light italic'>
                      — {item.subtitle}
                    </span>
                  </div>

                  {/* Description & CTA — reveal on hover */}
                  <div className='max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-700 ease-out'>
                    <p className='text-white/60 text-sm font-light leading-relaxed mb-4 max-w-md'>
                      {item.description}
                    </p>
                    <div className='flex items-center gap-2 text-white/70 text-[11px] font-medium uppercase tracking-[0.2em] hover:text-white transition-colors'>
                      Explore Collection <ArrowRight size={14} />
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
