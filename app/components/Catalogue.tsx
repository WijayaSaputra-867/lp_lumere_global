"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye, Heart, Star, Sparkles, Filter } from 'lucide-react';
import Image from 'next/image';
import ProductModal from './ProductModal';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  tag?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ethereal Silk Dress",
    price: "Rp 1.250.000",
    category: "GIRLS",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Luminous Linen Set",
    price: "Rp 950.000",
    category: "BOYS",
    image: "https://images.unsplash.com/photo-1519234164450-2975d7d7189b?q=80&w=1000&auto=format&fit=crop",
    tag: "New"
  },
  {
    id: 3,
    name: "Celestial Cotton Gown",
    price: "Rp 1.850.000",
    category: "INFANTS",
    image: "https://images.unsplash.com/photo-1522771935876-2487333675c0?q=80&w=1000&auto=format&fit=crop",
    tag: "Exclusive"
  },
  {
    id: 4,
    name: "Aura Velvet Blazer",
    price: "Rp 2.100.000",
    category: "BOYS",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1000&auto=format&fit=crop",
    tag: "Winter"
  },
  {
    id: 5,
    name: "Seraphic Lace Blouse",
    price: "Rp 850.000",
    category: "GIRLS",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecee?q=80&w=1000&auto=format&fit=crop",
    tag: "Sale"
  },
  {
    id: 6,
    name: "Nova Knitted Romper",
    price: "Rp 750.000",
    category: "INFANTS",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop"
  }
];

const categoryTabs = ["ALL", "BOYS", "GIRLS", "INFANTS"];

const Catalogue = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = activeCategory === "ALL" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="catalogue" className="py-40 bg-brand-light relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={16} className="text-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/40">The Collection</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display text-brand-dark leading-[0.9] tracking-tighter">
              Boutique <br />
              <span className="text-gradient italic font-normal">Essentials.</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap items-center gap-4">
             <div className="p-1 px-4 bg-white rounded-full border border-brand-dark/5 flex gap-2 items-center">
                <Filter size={14} className="text-brand-dark/40" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-dark/40">Filter</span>
             </div>
             <div className="flex bg-white p-1 rounded-full border border-brand-dark/5 shadow-sm">
                {categoryTabs.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                      activeCategory === cat 
                      ? "bg-brand-dark text-white shadow-xl" 
                      : "text-brand-dark/40 hover:text-brand-dark"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white rounded-[60px] p-4 border border-brand-dark/5 shadow-lg hover:shadow-3xl transition-all duration-700"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden bg-brand-light">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {product.tag && (
                    <div className="product-badge badge-new">{product.tag}</div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-brand-dark/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <button 
                       onClick={() => openQuickView(product)}
                       className="w-14 h-14 rounded-full bg-white text-brand-dark flex items-center justify-center hover:bg-brand-primary transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-2xl"
                    >
                      <Eye size={20} />
                    </button>
                    <button className="w-14 h-14 rounded-full bg-white text-brand-dark flex items-center justify-center hover:bg-brand-primary transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75 shadow-2xl">
                      <Heart size={20} />
                    </button>
                    <button className="w-14 h-14 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-150 shadow-2xl">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] mb-2">{product.category}</p>
                      <h3 className="text-2xl font-display text-brand-dark group-hover:text-brand-primary transition-colors cursor-pointer" onClick={() => openQuickView(product)}>
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-brand-primary">
                      <Star size={12} fill="currentColor" />
                      <span className="text-[10px] font-bold text-brand-dark">4.9</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-xl font-display text-brand-secondary">{product.price}</span>
                    <button 
                      onClick={() => openQuickView(product)}
                      className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 hover:text-brand-dark flex items-center gap-2 group/btn"
                    >
                       Details <div className="w-6 h-[1px] bg-brand-dark/10 group-hover/btn:w-10 group-hover/btn:bg-brand-primary transition-all duration-500" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={selectedProduct} 
      />
    </section>
  );
};

export default Catalogue;
