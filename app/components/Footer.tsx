"use client";

import React from "react";
import { Instagram, Twitter, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-brand-dark text-white pt-32 pb-16 relative overflow-hidden'>
      {/* Decorative Gradient Background */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-30 shadow-2xl' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24'>
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-4 mb-10'>
              <div className='w-12 h-12 hero-gradient rounded-3xl flex items-center justify-center text-brand-dark font-bold text-xl shadow-lg'>
                L
              </div>
              <span className='text-3xl font-display tracking-tight text-white'>
                LUMERA <span className="italic font-normal opacity-60 text-brand-primary">GLOBAL</span>
              </span>
            </div>
            <p className='text-white/50 text-xl font-light max-w-md leading-relaxed mb-10'>
              Fashioning the next generation with manufacturing excellence, sustainable heritage, and global strategic distribution.
            </p>
            <div className='text-white/20 text-[10px] space-y-2 font-bold uppercase tracking-[0.2em] mb-10'>
              <p className='text-white/40'>Registration & Compliance</p>
              <p>SSIC 46900 – General Wholesale Trade</p>
              <p>SSIC 46413 – Luxury Apparel Wholesaling</p>
            </div>
            <div className='flex items-center gap-6'>
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href='#'
                  className='w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl shadow-sm'>
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className='text-[10px] font-bold mb-10 uppercase tracking-[0.3em] text-white/40'>
              Strategic Solutions
            </h4>
            <ul className='space-y-6'>
              {[
                "Global Wholesale",
                "OEM Manufacturing",
                "Sustainable Sourcing",
                "Supply Logistics",
                "Retail Partnerships",
              ].map((item) => (
                <li key={item}>
                  <a
                    href='#'
                    className='text-white/60 hover:text-brand-primary transition-all text-sm font-light flex items-center gap-2 group'>
                    <span className="w-0 group-hover:w-4 h-[1px] bg-brand-primary transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-[10px] font-bold mb-10 uppercase tracking-[0.3em] text-white/40'>
              Corporate
            </h4>
            <ul className='space-y-6'>
              {[
                "Our Heritage",
                "Sustainability Policy",
                "Manufacturing Ethics",
                "Partner Network",
                "Investor Relations",
              ].map((item) => (
                <li key={item}>
                  <a
                    href='#'
                    className='text-white/60 hover:text-brand-primary transition-all text-sm font-light flex items-center gap-2 group'>
                    <span className="w-0 group-hover:w-4 h-[1px] bg-brand-primary transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8'>
          <p className='text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]'>
            © 2026 LUMERA GLOBAL. Pioneering Excellence for Global Children&apos;s Fashion.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className='flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] group text-white/40 hover:text-white transition-colors'>
            Back to summit
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-dark transition-all">
               <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
