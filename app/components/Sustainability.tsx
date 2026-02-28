"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Globe, ShieldCheck, ArrowRight } from "lucide-react";

const Sustainability = () => {
  const initiatives = [
    {
      icon: <Leaf size={24} />,
      title: "Tanpa Bahan Kimia",
      description:
        "Setiap pewarna berasal dari tumbuhan — nila, kunyit, mahoni, dan kayu sapan. Tidak ada bahan kimia sintetis yang menyentuh kain kami.",
      color: "text-brand-secondary",
      bg: "bg-brand-secondary/10",
    },
    {
      icon: <Heart size={24} />,
      title: "Pemberdayaan Pengrajin",
      description:
        "Upah yang adil, bengkel aman, dan pelatihan keterampilan untuk lebih dari 200 pengrajin wanita di seluruh Indonesia pedesaan.",
      color: "text-brand-rose",
      bg: "bg-brand-rose/10",
    },
    {
      icon: <Globe size={24} />,
      title: "Mode Regeneratif",
      description:
        "Praktik pertanian kami memulihkan kesehatan tanah. Setiap pakaian yang Anda kenakan membantu menyembuhkan tanah tempat asalnya.",
      color: "text-brand-accent",
      bg: "bg-brand-accent/10",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Ketertelusuran Penuh",
      description:
        "Dari pertanian hingga lemari, setiap langkah rantai pasokan kami transparan. Ketahui siapa yang membuat pakaian Anda.",
      color: "text-brand-primary",
      bg: "bg-brand-primary/10",
    },
  ];

  return (
    <section id='sustainability' className='py-28 bg-white scroll-mt-24'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='flex flex-col lg:flex-row items-end justify-between mb-20 gap-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='max-w-2xl'>
            <p className='text-[11px] font-medium uppercase tracking-[0.4em] text-brand-dark/40 mb-6'>
              Dampak Kami
            </p>
            <h2 className='text-5xl md:text-7xl font-display text-brand-dark leading-[0.95] mb-6'>
              Mode Yang <br />
              <em className='font-light text-brand-secondary'>
                Menyembuhkan Bumi
              </em>
            </h2>
          </motion.div>
          <p className='text-brand-dark/50 text-lg font-light leading-relaxed max-w-md'>
            Keberlanjutan bukan label yang kami kenakan — itu tanah tempat kami
            tumbuh. Setiap keputusan menghormati pengrajin, komunitas mereka,
            dan planet yang kami bagikan.
          </p>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className='group p-8 rounded-2xl border border-brand-dark/5 hover:border-brand-primary/20 bg-brand-light hover:bg-white transition-all duration-500 hover-lift'>
              <div
                className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-8`}>
                {item.icon}
              </div>
              <h3 className='text-xl font-display text-brand-dark mb-3 group-hover:text-brand-primary transition-colors'>
                {item.title}
              </h3>
              <p className='text-brand-dark/40 text-sm font-light leading-relaxed mb-6'>
                {item.description}
              </p>
              <div className='flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/30 group-hover:text-brand-dark transition-colors'>
                Pelajari Lebih Lanjut <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
