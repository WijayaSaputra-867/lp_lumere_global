"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import CartSidebar from "./CartSidebar";

const navLinks = [
  { name: "Toko", href: "#catalogue" },
  { name: "Koleksi", href: "#divisions" },
  { name: "Kisah Kami", href: "#about-us" },
  { name: "Dampak", href: "#sustainability" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gaun Linen Akar",
      price: "Rp 1.250.000",
      image: "/img/kajetan-sumila-uPhQXmwPVXc-unsplash.jpg",
      quantity: 1,
    },
  ]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-80 transition-all duration-700 ${
          isScrolled ? "py-3" : "py-6"
        }`}>
        <div className='container mx-auto px-6'>
          <div
            className={`flex items-center justify-between px-8 py-4 transition-all duration-700 rounded-full ${
              isScrolled
                ? "bg-brand-light/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-brand-primary/10"
                : "bg-transparent"
            }`}>
            {/* Left — Nav Links (Desktop) */}
            <div className='hidden lg:flex items-center gap-10'>
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-[11px] font-medium uppercase tracking-[0.2em] text-brand-dark/50 hover:text-brand-dark transition-colors underline-reveal'>
                  {link.name}
                </a>
              ))}
            </div>

            {/* Center — Logo */}
            <a href='#' className='flex flex-col items-center group'>
              <span className='text-2xl font-display font-semibold tracking-[0.15em] text-brand-dark group-hover:text-brand-primary transition-colors'>
                LUMERA
              </span>
              <span className='text-[8px] font-medium uppercase tracking-[0.5em] text-brand-dark/30 -mt-0.5'>
                Butik
              </span>
            </a>

            {/* Right — Nav Links (Desktop) + Actions */}
            <div className='hidden lg:flex items-center gap-10'>
              {navLinks.slice(2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-[11px] font-medium uppercase tracking-[0.2em] text-brand-dark/50 hover:text-brand-dark transition-colors underline-reveal'>
                  {link.name}
                </a>
              ))}
              <div className='flex items-center gap-3 ml-4'>
                <button className='w-9 h-9 rounded-full flex items-center justify-center text-brand-dark/40 hover:text-brand-dark hover:bg-brand-cream transition-all'>
                  <Search size={18} />
                </button>
                <button className='w-9 h-9 rounded-full flex items-center justify-center text-brand-dark/40 hover:text-brand-dark hover:bg-brand-cream transition-all'>
                  <User size={18} />
                </button>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className='relative w-9 h-9 rounded-full flex items-center justify-center text-brand-dark/40 hover:text-brand-dark hover:bg-brand-cream transition-all'>
                  <ShoppingBag size={18} />
                  {cartItems.length > 0 && (
                    <span className='absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-secondary text-white text-[8px] font-bold rounded-full flex items-center justify-center'>
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile — Actions */}
            <div className='flex items-center gap-3 lg:hidden'>
              <button
                onClick={() => setIsCartOpen(true)}
                className='relative w-9 h-9 rounded-full flex items-center justify-center text-brand-dark/40'>
                <ShoppingBag size={18} />
                {cartItems.length > 0 && (
                  <span className='absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-secondary text-white text-[8px] font-bold rounded-full flex items-center justify-center'>
                    {cartItems.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='w-9 h-9 flex items-center justify-center text-brand-dark'>
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-90 bg-brand-light lg:hidden flex flex-col items-center justify-center'>
              <button
                onClick={() => setIsOpen(false)}
                className='absolute top-8 right-8 w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark'>
                <X size={20} />
              </button>

              <div className='flex flex-col items-center gap-8'>
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='text-3xl font-display text-brand-dark hover:text-brand-primary transition-colors'>
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className='mt-16 text-center'>
                <p className='text-[10px] font-medium uppercase tracking-[0.3em] text-brand-dark/30 mb-4'>
                  Berakar di Alam
                </p>
                <p className='text-brand-dark/40 text-sm font-light'>
                  Dibuat untuk Masa Depan
                </p>
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
