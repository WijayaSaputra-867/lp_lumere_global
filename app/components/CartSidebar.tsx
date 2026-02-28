"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Minus, Plus, ArrowRight } from "lucide-react";
import Image from "next/image";

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

const formatPrice = (price: string) => price;

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  items,
  onRemove,
}) => {
  const subtotal = items.reduce((sum, item) => {
    const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
    return sum + numericPrice * item.quantity;
  }, 0);

  const formattedSubtotal = `$${subtotal.toLocaleString("en-US")}`;

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
            className='cart-sidebar-mask'
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className='fixed top-0 right-0 h-full w-full md:w-105 bg-brand-light z-101 shadow-2xl flex flex-col'>
            {/* Header */}
            <div className='flex items-center justify-between p-8 border-b border-brand-dark/5'>
              <div>
                <h3 className='text-xl font-display text-brand-dark'>
                  Your Bag
                </h3>
                <p className='text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/40 mt-1'>
                  {items.length} {items.length === 1 ? "item" : "items"}
                </p>
              </div>
              <button
                onClick={onClose}
                className='w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all'>
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className='flex-1 overflow-y-auto p-8 scrollbar-hide'>
              {items.length === 0 ? (
                <div className='flex flex-col items-center justify-center h-full text-center'>
                  <ShoppingBag size={40} className='text-brand-dark/10 mb-6' />
                  <p className='text-lg font-display text-brand-dark/60 mb-2'>
                    Your bag is empty
                  </p>
                  <p className='text-sm text-brand-dark/30 font-light mb-8'>
                    Discover our handcrafted pieces
                  </p>
                  <button
                    onClick={onClose}
                    className='px-8 py-3 bg-brand-dark text-white rounded-xl text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-brand-primary hover:text-brand-dark transition-all'>
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className='space-y-6'>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className='flex gap-5 p-4 bg-white rounded-2xl border border-brand-dark/5'>
                      <div className='w-20 h-24 rounded-xl overflow-hidden bg-brand-cream shrink-0 relative'>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className='object-cover'
                        />
                      </div>
                      <div className='flex-1 flex flex-col justify-between'>
                        <div>
                          <h4 className='text-sm font-display text-brand-dark mb-1'>
                            {item.name}
                          </h4>
                          <p className='text-sm text-brand-accent font-display'>
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-3'>
                            <button className='w-7 h-7 rounded-lg border border-brand-dark/10 flex items-center justify-center text-brand-dark/40 hover:border-brand-primary transition-all'>
                              <Minus size={12} />
                            </button>
                            <span className='text-sm font-medium text-brand-dark w-4 text-center'>
                              {item.quantity}
                            </span>
                            <button className='w-7 h-7 rounded-lg border border-brand-dark/10 flex items-center justify-center text-brand-dark/40 hover:border-brand-primary transition-all'>
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => onRemove(item.id)}
                            className='text-[10px] font-medium uppercase tracking-widest text-brand-dark/30 hover:text-brand-error transition-colors'>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className='p-8 border-t border-brand-dark/5'>
                <div className='flex items-center justify-between mb-6'>
                  <span className='text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/40'>
                    Subtotal
                  </span>
                  <span className='text-xl font-display text-brand-dark'>
                    {formattedSubtotal}
                  </span>
                </div>
                <p className='text-[10px] text-brand-dark/30 font-light mb-6 text-center'>
                  Shipping calculated at checkout
                </p>
                <button className='w-full py-4 bg-brand-dark text-white rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-brand-primary hover:text-brand-dark transition-all text-[11px] uppercase tracking-[0.15em]'>
                  Proceed to Checkout <ArrowRight size={16} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
