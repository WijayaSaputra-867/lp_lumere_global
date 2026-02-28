"use client";

import React from "react";
import { Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-brand-dark text-white pt-24 pb-12'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20'>
          {/* Brand */}
          <div className='lg:col-span-2'>
            <div className='mb-8'>
              <span className='text-3xl font-display tracking-widest'>
                LUMERA
              </span>
              <p className='text-[9px] font-medium uppercase tracking-[0.4em] text-white/30 mt-1'>
                Berakar di Alam, Dibuat untuk Masa Depan
              </p>
            </div>
            <p className='text-white/40 text-base font-light max-w-sm leading-relaxed mb-10'>
              Mode berkelanjutan yang dibuat oleh pengrajin dari Indonesia.
              Setiap potongan dibuat dengan tangan dengan teknik warisan dan
              pewarna alami 100%.
            </p>
            <div className='flex items-center gap-4'>
              {[Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href='#'
                  className='w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary transition-all duration-500'>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Toko */}
          <div>
            <h4 className='text-[10px] font-medium mb-8 uppercase tracking-[0.3em] text-white/30'>
              Toko
            </h4>
            <ul className='space-y-4'>
              {[
                "Semua Produk",
                "Koleksi Akar",
                "Koleksi Langit",
                "Koleksi Bumi",
                "Kartu Hadiah",
              ].map((item) => (
                <li key={item}>
                  <a
                    href='#'
                    className='text-white/50 hover:text-white transition-colors text-sm font-light underline-reveal'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan & Tentang */}
          <div>
            <h4 className='text-[10px] font-medium mb-8 uppercase tracking-[0.3em] text-white/30'>
              Tentang
            </h4>
            <ul className='space-y-4'>
              {[
                "Kisah Kami",
                "Dampak Kami",
                "Panduan Perawatan",
                "Pengiriman & Pengembalian",
                "Hubungi Kami",
              ].map((item) => (
                <li key={item}>
                  <a
                    href='#'
                    className='text-white/50 hover:text-white transition-colors text-sm font-light underline-reveal'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className='pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6'>
          <p className='text-white/20 text-[10px] font-medium uppercase tracking-[0.3em]'>
            © 2026 Lumera. Dibuat dengan cinta di Indonesia.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className='flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors group'>
            Kembali Ke Atas
            <div className='w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-brand-dark group-hover:border-brand-primary transition-all'>
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
