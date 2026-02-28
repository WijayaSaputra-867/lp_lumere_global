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
                Rooted in Nature, Made for Tomorrow
              </p>
            </div>
            <p className='text-white/40 text-base font-light max-w-sm leading-relaxed mb-10'>
              Sustainable fashion handcrafted by Indonesian artisans. Each piece
              is made by hand with heritage techniques and 100% natural dyes.
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

          {/* Shop */}
          <div>
            <h4 className='text-[10px] font-medium mb-8 uppercase tracking-[0.3em] text-white/30'>
              Shop
            </h4>
            <ul className='space-y-4'>
              {[
                "All Products",
                "Roots Collection",
                "Sky Collection",
                "Earth Collection",
                "Gift Cards",
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

          {/* Help & About */}
          <div>
            <h4 className='text-[10px] font-medium mb-8 uppercase tracking-[0.3em] text-white/30'>
              About
            </h4>
            <ul className='space-y-4'>
              {[
                "Our Story",
                "Our Impact",
                "Care Guide",
                "Shipping & Returns",
                "Contact Us",
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
            © 2026 Lumera. Made with love in Indonesia.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className='flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors group'>
            Back to Top
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
