"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const colors = [
  {
    name: "Nila Pusaka",
    hex: "#1E3A5F",
    description:
      "Biru dalam dari daun nila yang difermentasi — warna yang semakin dalam dengan setiap pencucian, seperti kebijaksanaan dengan usia.",
    source: "Tanaman Nila",
  },
  {
    name: "Emas Kunyit",
    hex: "#CCA460",
    description:
      "Corak emas hangat dari akar kurcuma. Sakral dalam tradisi Jawa, melambangkan kemakmuran dan kehangatan.",
    source: "Akar Kurcuma",
  },
  {
    name: "Bumi Mahoni",
    hex: "#8B4A3B",
    description:
      "Corak coklat kaya dari kulit mahoni, menempatkan setiap pakaian di hutan dalam Kalimantan.",
    source: "Kulit Mahoni",
  },
  {
    name: "Putih Alami",
    hex: "#F5F0E8",
    description:
      "Katun organik kami yang tidak diwarnai. Murni, jujur, dan hanya dilembapkan oleh matahari dan air.",
    source: "Kapas Tidak Diwarnai",
  },
  {
    name: "Mawar Sapan",
    hex: "#C47B7B",
    description:
      "Semburat lembut dari kayu sapan, yang secara tradisional digunakan dalam upacara penyembuhan di seluruh nusantara.",
    source: "Kayu Sapan",
  },
  {
    name: "Lumut Hutan",
    hex: "#4A6B5A",
    description:
      "Hijau teredam dari ekstrak daun campuran, membangkitkan dataran tinggi berkabut Jawa Tengah.",
    source: "Daun Campuran",
  },
];

const ColorsOfNature = () => {
  return (
    <section className='py-28 bg-white'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <p className='text-[11px] font-medium uppercase tracking-[0.4em] text-brand-dark/40 mb-6'>
              Pewarna Berbasis Tanaman 100%
            </p>
            <h2 className='text-5xl md:text-7xl font-display text-brand-dark leading-[0.95] mb-6'>
              Warna-Warna <em className='font-light text-brand-accent'>Alam</em>
            </h2>
            <p className='text-brand-dark/50 text-lg font-light max-w-lg mx-auto leading-relaxed'>
              Setiap warna lahir dari tumbuhan. Tidak ada bahan kimia, tidak ada
              sintetis — hanya palet jujur bumi, menceritakan cerita menjadi.
            </p>
          </motion.div>
        </div>

        {/* Editorial quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='text-center text-2xl md:text-3xl font-display italic text-brand-dark/30 mb-20 max-w-2xl mx-auto'>
          &ldquo;Seperti Anda, setiap warna membawa cerita menjadi.&rdquo;
        </motion.p>

        {/* Color Swatches Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
          {colors.map((color, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className='group cursor-pointer'>
              {/* Swatch */}
              <div
                className='aspect-square rounded-2xl mb-5 transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:rounded-3xl'
                style={{ backgroundColor: color.hex }}
              />

              {/* Info */}
              <h4 className='text-sm font-display font-semibold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors'>
                {color.name}
              </h4>
              <p className='text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/30 mb-2'>
                {color.source}
              </p>
              <p className='text-xs text-brand-dark/40 font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                {color.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mt-16'>
          <a
            href='#catalogue'
            className='inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-dark/50 hover:text-brand-dark transition-colors underline-reveal'>
            Temukan Warna Anda <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ColorsOfNature;
