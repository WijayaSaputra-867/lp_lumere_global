"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((acc, item) => {
    const priceNum = parseInt(item.price.replace(/[^\d]/g, ''));
    return acc + priceNum * item.quantity;
  }, 0);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="cart-sidebar-mask"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="cart-sidebar"
          >
            <div className="p-8 border-b border-brand-dark/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <ShoppingBag size={24} className="text-brand-dark" />
                <h2 className="text-2xl font-display text-brand-dark pt-1">Your Bag</h2>
                <span className="bg-brand-primary text-brand-dark text-[10px] font-bold px-2 py-1 rounded-full ml-2">
                  {items.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all transform hover:rotate-90"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 scrollbar-hide space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-24 h-24 rounded-full bg-brand-light flex items-center justify-center text-brand-dark/20">
                    <ShoppingBag size={48} />
                  </div>
                  <p className="text-brand-dark/40 font-light">Your bag is currently empty.</p>
                  <button
                    onClick={onClose}
                    className="px-8 py-4 bg-brand-dark text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-brand-dark transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    className="flex gap-6 group"
                  >
                    <div className="relative w-24 h-32 rounded-2xl overflow-hidden bg-brand-light shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h4 className="text-lg font-display text-brand-dark mb-1 leading-tight group-hover:text-brand-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-brand-dark/40 text-[10px] uppercase font-bold tracking-widest mb-2">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-brand-secondary font-bold tracking-tight">
                          {item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="flex items-center gap-2 text-brand-error text-[10px] font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
                      >
                        <Trash2 size={12} /> Remove
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-brand-light space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-brand-dark/40 text-sm font-light">Subtotal</span>
                  <span className="text-xl font-display text-brand-dark">{formatPrice(total)}</span>
                </div>
                <button className="w-full py-6 bg-brand-dark text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand-primary hover:text-brand-dark transition-all shadow-2xl uppercase tracking-widest text-[11px] glow-on-hover px-12">
                  Proceed to Checkout <ArrowRight size={18} />
                </button>
                <p className="text-[9px] text-center text-brand-dark/30 font-bold uppercase tracking-[0.2em]">
                  Shipping and taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
