"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Divisions', href: '#divisions' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Sustainability', href: '#sustainability' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-[32px] px-8 py-4 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'shadow-2xl border-white/20' : 'border-transparent'}`}>
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 hero-gradient rounded-2xl flex items-center justify-center text-brand-dark font-bold text-lg shadow-lg group-hover:rotate-12 transition-transform duration-500">
               L
            </div>
            <span className="text-2xl font-display tracking-tight text-brand-dark">
               LUMERA <span className="italic font-normal opacity-40">GLOBAL</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-bold text-brand-dark/60 hover:text-brand-dark transition-colors uppercase tracking-[0.2em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#contact"
              className="hidden lg:flex items-center gap-2 px-8 py-3 bg-brand-dark text-white text-[10px] font-bold rounded-full hover:bg-brand-primary hover:text-brand-dark transition-all active:scale-95 uppercase tracking-widest shadow-xl"
            >
              Contact Us <ArrowUpRight size={14} />
            </a>
            
            <button 
              className="md:hidden p-2 text-brand-dark hover:bg-brand-dark/5 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 px-6"
          >
            <div className="glass rounded-[40px] p-10 flex flex-col gap-6 shadow-2xl border-white/40 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-display text-brand-dark hover:text-brand-primary transition-colors italic"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="w-full py-5 bg-brand-dark text-white font-bold rounded-[24px] mt-6 text-[12px] tracking-[0.2em] shadow-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT US
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
