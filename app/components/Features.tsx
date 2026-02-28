"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scissors, Sprout, HandHeart, Infinity } from "lucide-react";

const promises = [
  {
    icon: <Scissors size={28} />,
    title: "Dibuat dengan Tangan",
    description:
      "Setiap potongan disentuh oleh tangan pengrajin, bukan mesin pabrik. Setiap pakaian membawa kehangatan pembuatnya.",
  },
  {
    icon: <Sprout size={28} />,
    title: "Dari Ladang ke Lemari",
    description:
      "Kami mengenal setiap langkah — dari ladang tempat kapas tumbuh hingga lemari di mana ia hidup. Transparansi penuh, selalu.",
  },
  {
    icon: <HandHeart size={28} />,
    title: "Teknik Warisan",
    description:
      "Batik, ikat, pewarnaan alami — tradisi kerajinan tua Indonesia berabad-abad dilestarikan dan dirayakan dalam desain modern.",
  },
  {
    icon: <Infinity size={28} />,
    title: "Perawatan Seumur Hidup",
    description:
      "Kami menawarkan perbaikan gratis selamanya. Karena pakaian paling berkelanjutan adalah yang tidak pernah Anda buang.",
  },
];

const Features = () => {
  return (
    <section id='expertise' className='py-28 bg-brand-cream'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <p className='text-[11px] font-medium uppercase tracking-[0.4em] text-brand-dark/40 mb-6'>
              Janji Kami
            </p>
            <h2 className='text-5xl md:text-7xl font-display text-brand-dark leading-[0.95] mb-6'>
              Pakaian Dibuat dengan{" "}
              <em className='font-light text-brand-accent'>Niat</em>
            </h2>
            <p className='text-brand-dark/50 text-lg font-light max-w-lg mx-auto leading-relaxed'>
              Empat pilar memandu semua yang kami ciptakan — memastikan setiap
              pakaian layak untuk tangan yang membuatnya dan orang yang
              memakainya.
            </p>
          </motion.div>
        </div>

        {/* Promise Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {promises.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className='group text-center p-10 rounded-2xl bg-white border border-brand-dark/5 hover:border-brand-primary/20 transition-all duration-500 hover-lift'>
              <div className='w-16 h-16 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500'>
                {item.icon}
              </div>
              <h3 className='text-xl font-display text-brand-dark mb-3 group-hover:text-brand-primary transition-colors'>
                {item.title}
              </h3>
              <p className='text-brand-dark/40 text-sm font-light leading-relaxed'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
