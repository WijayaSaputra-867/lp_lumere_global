"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search, User, Sparkles } from "lucide-react";
import CartSidebar from "./CartSidebar";

const navLinks = [
  { name: "Shop All", href: "#catalogue" },
  { name: "Collections", href: "#divisions" },
  { name: "Best Sellers", href: "#catalogue" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Mock cart items for demonstration
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ethereal Silk Dress",
      price: "Rp 1.250.000",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      quantity: 1
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-700 px-6 py-8 ${
          isScrolled ? "py-4" : ""
        }`}>
        <div className={`container mx-auto transition-all duration-700 ${
            isScrolled ? "max-w-5xl" : "max-w-7xl"
          }`}>
          <div className={`relative flex items-center justify-between px-8 py-5 transition-all duration-700 ${
              isScrolled 
                ? "glass rounded-[32px] border border-white/20 shadow-2xl backdrop-blur-3xl" 
                : "bg-transparent"
            }`}>
            
            {/* Logo */}
            <div className='flex items-center gap-3 group cursor-pointer'>
              <div className='w-10 h-10 mesh-gradient rounded-2xl flex items-center justify-center text-brand-dark font-black text-lg transition-transform duration-500 group-hover:scale-110 shadow-lg'>
                L
              </div>
              <span className={`text-xl font-display tracking-tighter transition-colors duration-500 ${
                isScrolled ? "text-brand-dark" : "text-brand-dark"
              }`}>
                LUMERA <span className="text-gradient italic font-normal">BOUTIQUE</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-10'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/40 hover:text-brand-primary transition-all relative group'>
                  {link.name}
                  <span className='absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-500 group-hover:w-full shadow-[0_0_10px_#00F299]' />
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className='flex items-center gap-4'>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-brand-dark/40 hover:text-brand-dark transition-colors">
                <Search size={20} />
              </button>
              <button className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-brand-dark/40 hover:text-brand-dark transition-colors">
                <User size={20} />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className='relative w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all duration-500 shadow-xl group'
              >
                <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
                {cartItems.length > 0 && (
                  <span className='absolute -top-1 -right-1 w-5 h-5 bg-brand-secondary text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:bg-brand-dark group-hover:border-brand-primary transition-colors'>
                    {cartItems.length}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='lg:hidden w-10 h-10 flex items-center justify-center text-brand-dark'>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className='fixed inset-0 z-[90] bg-white lg:hidden flex flex-col items-center justify-center p-8'
            >
              <div className="absolute top-8 right-8">
                 <button onClick={() => setIsOpen(false)} className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-dark">
                    <X size={24} />
                 </button>
              </div>
              
              <div className='flex flex-col items-center gap-10'>
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='text-4xl font-display text-brand-dark hover:text-brand-primary transition-colors'>
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-20 flex flex-col items-center gap-6">
                 <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-brand-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40">Exclusive Member Access</span>
                 </div>
                 <button className="px-12 py-5 bg-brand-dark text-white rounded-full font-bold uppercase tracking-widest text-[11px] glow-on-hover shadow-2xl">
                    Account Login
                 </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemove={removeFromCart}
      />
    </>
  );
};

export default Navbar;
