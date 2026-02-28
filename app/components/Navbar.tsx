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
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Partnership', href: '#partnership' },
    { name: 'Divisions', href: '#divisions' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Sustainability', href: '#sustainability' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'py-4' : 'py-10'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-[40px] px-10 py-5 flex items-center justify-between transition-all duration-700 ${isScrolled ? 'shadow-2xl border-white/30 bg-white/70' : 'border-white/10 bg-white/40'}`}>
          {/* Logo */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-brand-dark rounded-2xl flex items-center justify-center text-brand-primary font-bold text-xl shadow-lg group-hover:rotate-[15deg] transition-all duration-500 border border-white/10">
               L
            </div>
            <span className="text-2xl font-display tracking-tight text-brand-dark">
               LUMERA <span className="text-brand-secondary italic font-normal">GLOBAL</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-bold text-brand-dark/70 hover:text-brand-secondary transition-all uppercase tracking-[0.25em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <a 
              href="#contact"
              className="hidden lg:flex items-center gap-3 px-10 py-4 bg-brand-dark text-white text-[11px] font-bold rounded-full hover:bg-brand-primary hover:text-brand-dark transition-all active:scale-95 uppercase tracking-widest shadow-2xl glow-on-hover"
            >
              Get in Touch <ArrowUpRight size={16} />
            </a>
            
            <button 
              className="md:hidden p-3 text-brand-dark hover:bg-brand-dark/5 rounded-2xl transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="md:hidden fixed inset-0 z-40 bg-brand-dark/10"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] bg-white/90 backdrop-blur-3xl p-12 flex flex-col justify-center"
            >
              <button 
                className="absolute top-10 right-10 p-3 text-brand-dark hover:bg-brand-dark/5 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name} 
                    href={link.href} 
                    className="text-4xl font-display text-brand-dark hover:text-brand-primary transition-colors italic"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  href="#contact"
                  className="w-full py-6 bg-brand-dark text-white font-bold rounded-[32px] mt-10 text-[14px] tracking-[0.2em] shadow-2xl text-center uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT US
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
