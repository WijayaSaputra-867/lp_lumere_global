"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Eye, Heart, Star, Filter } from "lucide-react";
import Image from "next/image";
import ProductModal from "./ProductModal";

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
    name: "Gaun Linen Akar",
    price: "Rp 1.250.000",
    category: "GAUN",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    tag: "Terlaris",
  },
  {
    id: 2,
    name: "Tunik Nila Langit",
    price: "Rp 950.000",
    category: "ATASAN",
    image:
      "https://images.unsplash.com/photo-1519234164450-2975d7d7189b?q=80&w=800&auto=format&fit=crop",
    tag: "Baru",
  },
  {
    id: 3,
    name: "Sarung Kapas Bumi",
    price: "Rp 1.850.000",
    category: "PAKAIAN LUAR",
    image:
      "https://images.unsplash.com/photo-1522771935876-2487333675c0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Blus Sutra Senja",
    price: "Rp 2.100.000",
    category: "ATASAN",
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop",
    tag: "Terbatas",
  },
  {
    id: 5,
    name: "Rok Renda Pagi",
    price: "Rp 850.000",
    category: "BAWAHAN",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecee?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Playsuit Rajut Kapas",
    price: "Rp 750.000",
    category: "GAUN",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
    tag: "Diskon",
  },
];

const categoryTabs = ["SEMUA", "GAUN", "ATASAN", "BAWAHAN", "PAKAIAN LUAR"];

const Catalogue = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id='catalogue' className='py-28 bg-brand-cream scroll-mt-24'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <p className='text-[11px] font-medium uppercase tracking-[0.4em] text-brand-dark/40 mb-4'>
              Toko
            </p>
            <h2 className='text-5xl md:text-7xl font-display text-brand-dark leading-[0.95]'>
              Potongan Yang{" "}
              <em className='font-light text-brand-primary'>
                Dibuat dengan Tangan
              </em>
            </h2>
          </motion.div>

          {/* Category Filters */}
          <div className='flex flex-wrap items-center gap-2'>
            <Filter size={14} className='text-brand-dark/30 mr-2' />
            {categoryTabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-medium uppercase tracking-[0.15em] transition-all border ${
                  activeCategory === cat
                    ? "bg-brand-dark text-white border-brand-dark"
                    : "text-brand-dark/40 border-brand-dark/10 hover:border-brand-dark/30 hover:text-brand-dark"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className='group cursor-pointer'>
                {/* Image */}
                <div className='relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-light mb-5'>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className='object-cover transition-transform duration-[1.2s] group-hover:scale-105'
                  />

                  {product.tag && (
                    <div className='absolute top-4 left-4 px-3 py-1 bg-brand-secondary text-white text-[9px] font-medium uppercase tracking-widest rounded-full'>
                      {product.tag}
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className='absolute inset-0 bg-brand-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 gap-3'>
                    <button
                      onClick={() => openQuickView(product)}
                      className='w-11 h-11 rounded-full bg-white text-brand-dark flex items-center justify-center hover:bg-brand-primary transition-all shadow-lg translate-y-3 group-hover:translate-y-0 duration-500'>
                      <Eye size={16} />
                    </button>
                    <button className='w-11 h-11 rounded-full bg-white text-brand-dark flex items-center justify-center hover:bg-brand-primary transition-all shadow-lg translate-y-3 group-hover:translate-y-0 duration-500 delay-75'>
                      <Heart size={16} />
                    </button>
                    <button className='w-11 h-11 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-brand-secondary transition-all shadow-lg translate-y-3 group-hover:translate-y-0 duration-500 delay-150'>
                      <ShoppingBag size={16} />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className='flex justify-between items-start'>
                  <div>
                    <p className='text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/30 mb-1'>
                      {product.category}
                    </p>
                    <h3
                      className='text-lg font-display text-brand-dark group-hover:text-brand-primary transition-colors'
                      onClick={() => openQuickView(product)}>
                      {product.name}
                    </h3>
                  </div>
                  <div className='text-right'>
                    <p className='text-sm font-display text-brand-accent'>
                      {product.price}
                    </p>
                    <div className='flex items-center gap-1 mt-1 justify-end'>
                      <Star
                        size={10}
                        fill='currentColor'
                        className='text-brand-accent'
                      />
                      <span className='text-[10px] text-brand-dark/30'>
                        4.9
                      </span>
                    </div>
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
