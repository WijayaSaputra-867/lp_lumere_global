"use client";

import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 hero-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">L</div>
              <span className="text-2xl font-bold tracking-tight text-white">LUMERA <span className="text-brand-primary">GLOBAL</span></span>
            </div>
            <p className="text-zinc-300 text-lg max-w-md leading-relaxed mb-8">
              Creating a world where children's fashion is expressive, sustainable, and timeless. Join us in shaping the icons of tomorrow.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Shop</h4>
            <ul className="space-y-4">
              {['New Arrivals', 'Best Sellers', 'Sustainable Edit', 'Accessories', 'Sale'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-300 hover:text-brand-primary transition-colors text-sm font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {['Our Story', 'Sustainability', 'Store Locator', 'Contact Us', 'Terms & Privacy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-300 hover:text-brand-primary transition-colors text-sm font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-sm font-medium">
            © 2026 LUMERA GLOBAL. All rights reserved. Designed for the small icons.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group"
          >
            Back to top
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
