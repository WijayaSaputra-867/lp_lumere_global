"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Star, Heart, Share2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

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

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  if (!product) return null;

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
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-md z-[110]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[111] flex items-center justify-center p-6 pointer-events-none"
          >
            <div className="bg-white w-full max-w-5xl rounded-[60px] overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto relative">
              <button
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all z-20"
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="md:w-1/2 relative aspect-[4/5] md:aspect-auto h-[400px] md:h-auto">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-8 left-8">
                   <div className="product-badge badge-new">New Arrival</div>
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40">{product.category}</span>
                  <div className="flex items-center gap-1 text-brand-primary">
                    <Star size={12} fill="currentColor" />
                    <span className="text-[10px] font-bold text-brand-dark">4.9</span>
                  </div>
                </div>

                <h2 className="text-5xl font-display text-brand-dark mb-6 leading-tight">
                  {product.name}
                </h2>
                
                <p className="text-3xl font-display text-brand-secondary mb-10">
                  {product.price}
                </p>
                
                <p className="text-brand-dark/50 text-lg font-light leading-relaxed mb-12">
                  An ethereal masterpiece crafted from 100% organic sustainable silk. Designed for timeless elegance and absolute comfort for the next generation.
                </p>

                <div className="space-y-8 mb-12">
                   <div className="flex items-center gap-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Size</span>
                      <div className="flex gap-3">
                         {['2Y', '4Y', '6Y', '8Y'].map(size => (
                           <button key={size} className="w-12 h-12 rounded-2xl border border-brand-dark/5 flex items-center justify-center text-[11px] font-bold hover:border-brand-primary hover:text-brand-primary transition-all">
                             {size}
                           </button>
                         ))}
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-4 text-brand-success">
                      <ShieldCheck size={18} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">In Stock - Ready for Global Export</span>
                   </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 py-6 bg-brand-dark text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand-primary hover:text-brand-dark transition-all shadow-xl uppercase tracking-widest text-[11px] glow-on-hover">
                    Add to Bag <ShoppingBag size={18} />
                  </button>
                  <button className="w-16 h-16 rounded-full border border-brand-dark/5 flex items-center justify-center text-brand-dark hover:bg-brand-light transition-all">
                    <Heart size={20} />
                  </button>
                  <button className="w-16 h-16 rounded-full border border-brand-dark/5 flex items-center justify-center text-brand-dark hover:bg-brand-light transition-all">
                    <Share2 size={20} />
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
