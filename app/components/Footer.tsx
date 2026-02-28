"use client";

import React from "react";
import { Instagram, Twitter, Facebook, ArrowUp, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-brand-dark text-white pt-40 pb-20 relative overflow-hidden'>
      {/* Decorative High-Contrast Elements */}
      <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[140px] pointer-events-none' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32'>
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-5 mb-12'>
              <div className='w-14 h-14 mesh-gradient rounded-3xl flex items-center justify-center text-brand-dark font-black text-2xl shadow-2xl'>
                L
              </div>
              <span className='text-4xl font-display tracking-tighter text-white'>
                LUMERA <span className="text-gradient italic font-normal">GLOBAL</span>
              </span>
            </div>
            <p className='text-white/40 text-xl font-light max-w-md leading-relaxed mb-12'>
              Redefining children&apos;s fashion through absolute manufacturing precision, sustainable heritage, and global vision.
            </p>
            <div className='text-white/10 text-[11px] space-y-3 font-bold uppercase tracking-[0.4em] mb-16'>
              <div className="flex items-center gap-3">
                 <Sparkles size={14} className="text-brand-primary/40" />
                 <p className='text-white/30'>Registration & Global Compliance</p>
              </div>
              <p>SSIC 46900 – General Wholesale Strategic Trade</p>
              <p>SSIC 46413 – Luxury Apparel Global Wholesaling</p>
            </div>
            <div className='flex items-center gap-8'>
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href='#'
                  className='w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary transition-all duration-700 transform hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,242,153,0.3)]'>
                  <Icon size={26} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className='text-[11px] font-bold mb-12 uppercase tracking-[0.4em] text-white/30'>
              Strategic Solutions
            </h4>
            <ul className='space-y-8'>
              {[
                "Product Catalogue",
                "OEM Manufacturing",
                "Sustainable Sourcing",
                "Supply Logistics",
                "Retail Partnerships",
              ].map((item) => (
                <li key={item}>
                  <a
                    href='#'
                    className='text-white/50 hover:text-brand-primary transition-all text-base font-light flex items-center gap-4 group'>
                    <span className="w-0 group-hover:w-6 h-[1px] bg-brand-primary transition-all duration-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-[11px] font-bold mb-12 uppercase tracking-[0.4em] text-white/30'>
              Legacy & Vision
            </h4>
            <ul className='space-y-8'>
              {[
                "Our Heritage",
                "Sustainability Policy",
                "Manufacturing Ethics",
                "Partnership Packages",
                "Strategic Relations",
              ].map((item) => (
                <li key={item}>
                  <a
                    href='#'
                    className='text-white/50 hover:text-brand-primary transition-all text-base font-light flex items-center gap-4 group'>
                    <span className="w-0 group-hover:w-6 h-[1px] bg-brand-primary transition-all duration-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12'>
          <p className='text-white/20 text-[10px] font-bold uppercase tracking-[0.4em] text-center md:text-left'>
            © 2026 LUMERA GLOBAL. <br className="md:hidden" /> Elevating The Next Generation of Global Excellence.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className='flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.3em] group text-white/30 hover:text-white transition-all duration-500'>
            Ascend to Summit
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-brand-dark group-hover:border-brand-primary transition-all duration-700 shadow-2xl">
               <ArrowUp size={22} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
