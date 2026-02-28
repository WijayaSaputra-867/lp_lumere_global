"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Star } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Autumn-Winter", "Spring-Summer", "Essentials"];

const products = [
  {
    id: 1,
    name: "Classic Quilted Jacket",
    category: "Autumn-Winter",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1519234110450-149021d4c98e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Linen Summer Dress",
    category: "Spring-Summer",
    price: "$85.00",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Premium Cotton Tee",
    category: "Essentials",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Woolen Knit Sweater",
    category: "Autumn-Winter",
    price: "$110.00",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Organic Denim Set",
    category: "Essentials",
    price: "$150.00",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Floral Silk Blouse",
    category: "Spring-Summer",
    price: "$95.00",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Urban Cargo Pants",
    category: "Essentials",
    price: "$75.00",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Boho Spring Skirt",
    category: "Spring-Summer",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Puffer Vest Arctic",
    category: "Autumn-Winter",
    price: "$135.00",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
  },
];

const Catalogue = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section id="catalogue" className="py-40 bg-brand-light relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                 <Star size={20} fill="currentColor" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-dark/40">Curated Excellence</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display text-brand-dark leading-[0.9] mb-10 tracking-tighter">
              Seasonal <br />
              <span className="text-gradient italic font-normal">Anticipations.</span>
            </h2>
            <p className="text-brand-dark/50 text-xl font-light leading-relaxed max-w-xl">
              Discover our latest drops where visionary aesthetics meet everyday comfort. Crafted for the bold, designed for the future.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 bg-white p-2 rounded-[32px] shadow-xl border border-brand-dark/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-8 py-4 rounded-[24px] text-[11px] font-bold uppercase tracking-widest transition-all duration-500 ${
                  activeCategory === cat
                    ? "bg-brand-dark text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                    : "text-brand-dark/40 hover:text-brand-dark hover:bg-brand-dark/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden mb-10 shadow-lg border border-brand-dark/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Floating Action Badge */}
                  <div className="absolute top-8 left-8 glass px-5 py-2 rounded-full border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                     <span className="text-[9px] font-bold uppercase tracking-widest text-brand-dark">Quick View</span>
                  </div>
                  
                  {/* Hover Overlay Icon */}
                  <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-brand-primary text-brand-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 shadow-2xl">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
                
                <div className="flex justify-between items-end px-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-secondary mb-3">
                      {product.category}
                    </p>
                    <h3 className="text-3xl font-display text-brand-dark group-hover:text-brand-primary transition-colors leading-none">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-2xl font-display text-brand-dark italic opacity-40 font-medium pb-1">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-40 flex flex-col items-center gap-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLoadMore}
              className="group flex items-center gap-5 px-14 py-7 bg-brand-dark text-white rounded-full text-xs font-bold uppercase tracking-[0.3em] shadow-3xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all glow-on-hover"
            >
              Reveal All Creations
              <BookOpen size={22} className="group-hover:rotate-12 transition-transform" />
            </motion.button>
            <p className="text-[11px] text-brand-dark/20 font-bold uppercase tracking-[0.2em] text-center max-w-xl leading-relaxed">
              Curated access for elite partners. Every collection represents a new standard in ethical luxury.
            </p>
          </div>
        )}
        
        {!hasMore && (
          <div className="mt-40 flex justify-center">
             <button className="group flex items-center gap-5 px-14 py-7 border-2 border-brand-dark/10 rounded-full text-xs font-bold uppercase tracking-[0.3em] transition-all hover:bg-brand-dark hover:text-white hover:border-brand-dark active:scale-95">
                Download Global Catalog
                <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:border-white/20 transition-all group-hover:bg-brand-primary group-hover:text-brand-dark">
                   <ArrowUpRight size={20} />
                </div>
             </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalogue;
