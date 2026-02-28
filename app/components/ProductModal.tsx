"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Star, Heart, Share2, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  rating?: number;
  description?: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-110'
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className='fixed inset-0 z-111 flex items-center justify-center p-6 pointer-events-none'>
            <div className='bg-brand-light w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto relative'>
              <button
                onClick={onClose}
                className='absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-brand-dark/5 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all z-20'>
                <X size={18} />
              </button>

              {/* Image */}
              <div className='md:w-1/2 relative aspect-4/5 md:aspect-auto h-87.5 md:h-auto'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Content */}
              <div className='md:w-1/2 p-10 md:p-14 flex flex-col justify-center'>
                <div className='flex items-center gap-3 mb-4'>
                  <span className='text-[10px] font-medium uppercase tracking-[0.3em] text-brand-dark/40'>
                    {product.category}
                  </span>
                  <div className='flex items-center gap-1 text-brand-accent'>
                    <Star size={10} fill='currentColor' />
                    <span className='text-[10px] text-brand-dark/40'>4.9</span>
                  </div>
                </div>

                <h2 className='text-4xl font-display text-brand-dark mb-4 leading-tight'>
                  {product.name}
                </h2>

                <p className='text-2xl font-display text-brand-accent mb-8'>
                  {product.price}
                </p>

                <p className='text-brand-dark/40 text-sm font-light leading-relaxed mb-10'>
                  Handcrafted by artisan makers in Central Java using 100%
                  organic cotton and plant-based natural dyes. Each piece is
                  unique, carrying the warmth of the hands that made it.
                </p>

                <div className='space-y-6 mb-10'>
                  <div className='flex items-center gap-4'>
                    <span className='text-[10px] font-medium uppercase tracking-[0.15em] text-brand-dark/40'>
                      Size
                    </span>
                    <div className='flex gap-2'>
                      {["XS", "S", "M", "L"].map((size) => (
                        <button
                          key={size}
                          className='w-10 h-10 rounded-lg border border-brand-dark/10 flex items-center justify-center text-[11px] font-medium hover:border-brand-primary hover:text-brand-primary transition-all'>
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className='flex items-center gap-3 text-brand-secondary'>
                    <ShieldCheck size={16} />
                    <span className='text-[10px] font-medium uppercase tracking-[0.15em]'>
                      In Stock — Ships within 3 days
                    </span>
                  </div>
                </div>

                <div className='flex gap-3'>
                  <button className='flex-1 py-4 bg-brand-dark text-white rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-brand-primary hover:text-brand-dark transition-all text-[11px] uppercase tracking-[0.15em]'>
                    Add to Bag <ShoppingBag size={16} />
                  </button>
                  <button className='w-12 h-12 rounded-xl border border-brand-dark/10 flex items-center justify-center text-brand-dark/40 hover:text-brand-rose hover:border-brand-rose/30 transition-all'>
                    <Heart size={18} />
                  </button>
                  <button className='w-12 h-12 rounded-xl border border-brand-dark/10 flex items-center justify-center text-brand-dark/40 hover:text-brand-dark hover:border-brand-dark/30 transition-all'>
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
