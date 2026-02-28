"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const collections = [
  {
    title: "Akar",
    subtitle: "Akar",
    description:
      "Potongan lengkap yang dibuat dari kain katun organik berwarna tanah. Teknik tenun warisan yang diwariskan turun-temurun.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Langit",
    subtitle: "Langit",
    description:
      "Pakaian berwarna nila yang terinspirasi dari luasnya langit Indonesia. Setiap corak menceritakan kisah kesabaran dan kerajinan.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Bumi",
    subtitle: "Bumi",
    description:
      "Linen berwarna kunyit dan mahoni yang merayakan tanah kaya Jawa. Nada hangat untuk hati yang hangat.",
    image:
      "https://images.unsplash.com/photo-1539109132381-31a1ec6d4b3f?q=80&w=1200&auto=format&fit=crop",
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
              Koleksi yang Dikurasi
            </p>
            <h2 className='text-5xl md:text-7xl font-display text-brand-dark leading-[0.95] mb-6'>
              Setiap Benang <br />
              <em className='font-light text-brand-primary'>
                Menceritakan Kisah
              </em>
            </h2>
            <p className='text-brand-dark/50 text-lg font-light max-w-lg mx-auto leading-relaxed'>
              Tiga koleksi terinspirasi oleh elemen alam Indonesia,
              masing-masing dibuat dengan tangan oleh komunitas pengrajin kami.
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
              <div className='absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/10 to-transparent transition-all duration-700'>
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
                      Jelajahi Koleksi <ArrowRight size={14} />
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
