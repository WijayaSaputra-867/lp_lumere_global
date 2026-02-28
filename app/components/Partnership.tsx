/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  Star,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const categories = [
  { id: "testing", name: "Market Testing", range: "$145 - $270" },
  { id: "growth", name: "Growth & Variety", range: "$370 - $505" },
  { id: "serious", name: "Serious Selling", range: "$800 - $1,235" },
  { id: "strategic", name: "Strategic Partner", range: "$2,810 - $5,620" },
];

const packages = [
  {
    id: 1,
    categoryId: "testing",
    name: "Starter Sample Pack",
    tag: "MOST AFFORDABLE MARKET TEST",
    price: "$145",
    qty: "25 pcs mixed sizes",
    desc: "Test market interest without worrying about excess inventory.",
    benefits: [
      "Light stock, safe to start",
      "Mix of bestseller models for display & photos",
      "Easy to sell to neighbors/coworkers",
    ],
    image: "/img/kajetan-sumila-uPhQXmwPVXc-unsplash.jpg",
    accent: "bg-brand-primary",
  },
  {
    id: 2,
    categoryId: "testing",
    name: "Mixed Sample Pack",
    tag: "IMPORT & LOCAL MIX SAMPLE",
    price: "$190",
    qty: "30 pcs (import & local mix)",
    desc: "More variety to gauge market preference.",
    benefits: [
      "Curated import & local combination",
      "Perfect for initial catalog photos",
      "Ready for light online & offline sales",
    ],
    image: "/img/kim-tayona-CgBrItB1mGk-unsplash.jpg",
    accent: "bg-brand-primary",
  },
  {
    id: 3,
    categoryId: "testing",
    name: "Mixed Fashion Business Pack",
    tag: "START SERIOUS BUSINESS",
    price: "$225",
    qty: "36 pcs (import & local mix)",
    desc: "Perfect for those ready to sell regularly.",
    benefits: [
      "Daily & semi-event composition",
      "Can be sold individually or in packages",
      "Easy to start entering marketplace",
    ],
    image: "/img/moses-janga-1eLxmJvZrr4-unsplash.jpg",
    accent: "bg-brand-secondary",
  },
  {
    id: 4,
    categoryId: "testing",
    name: "Super Trial Pack",
    tag: "ONLINE MARKET TESTING",
    price: "$270",
    qty: "30 pcs",
    desc: "Ideal for market testing on IG, TikTok & WhatsApp.",
    benefits: [
      "Photogenic models for content",
      "Photo & caption support",
      "Safe for testing pricing & market response",
    ],
    image: "/img/moses-janga-WZaPKRy4zYQ-unsplash.jpg",
    accent: "bg-brand-accent",
  },
  {
    id: 5,
    categoryId: "growth",
    name: "Combination Pack",
    tag: "FLEXIBLE COMBINATION PACK",
    price: "$370",
    qty: "45 pcs (import & local mix)",
    desc: "For those who want more variety in sizes & models.",
    benefits: [
      "Comfortable for family & online",
      "Great for bundling packages",
      "Still light stock but looks 'moving'",
    ],
    image: "/img/kajetan-sumila-uPhQXmwPVXc-unsplash.jpg",
    accent: "bg-brand-primary",
  },
  {
    id: 6,
    categoryId: "growth",
    name: "Bestseller Boom Pack",
    tag: "BEST SELLER BEGINNER LEVEL UP",
    price: "$405",
    qty: "50 pcs",
    desc: "Perfect for those already getting regular orders.",
    benefits: [
      "Composition of most popular models",
      "Suitable for live & flash sales",
      "Ready to partner with nearby resellers",
    ],
    image: "/img/kim-tayona-CgBrItB1mGk-unsplash.jpg",
    accent: "bg-brand-primary",
  },
  {
    id: 7,
    categoryId: "growth",
    name: "New Exclusive Pack",
    tag: "NEW EXCLUSIVE PACK",
    price: "$505",
    qty: "65 pcs",
    desc: "For segments seeking premium looks.",
    benefits: [
      "Focus on premium models & photo-ready",
      "Suitable for mid-to-high pricing",
      "Helps elevate 'serious store' image",
    ],
    image: "/img/moses-janga-1eLxmJvZrr4-unsplash.jpg",
    accent: "bg-brand-secondary",
  },
  {
    id: 8,
    categoryId: "serious",
    name: "Mini Value Pack",
    tag: "PREPARE DAILY STOCK",
    price: "$800",
    qty: "100 pcs",
    desc: "Comfortable stock for frequent uploads & closings.",
    benefits: [
      "Perfect for full online sales",
      "Ready for multiple promo moments",
      "Can start partnering with small resellers",
    ],
    image: "/img/moses-janga-WZaPKRy4zYQ-unsplash.jpg",
    accent: "bg-brand-primary",
  },
  {
    id: 9,
    categoryId: "serious",
    name: "Business Launch Value Pack",
    tag: "READY TO BE SERIOUS STORE",
    price: "$1,235",
    qty: "125 pcs",
    desc: "Value pack to start more serious business.",
    benefits: [
      "Enough for small home display",
      "Easy to start recruiting active resellers",
      "Daily & event combination",
    ],
    image: "/img/kajetan-sumila-uPhQXmwPVXc-unsplash.jpg",
    accent: "bg-brand-secondary",
  },
  {
    id: 10,
    categoryId: "strategic",
    name: "Store Opening Pack",
    tag: "OFFLINE STORE OPENING PACK",
    price: "$2,810",
    qty: "300–350 pcs (free banner)",
    desc: "Ready to have physical store with professional display.",
    benefits: [
      "Stock 300–350 pcs mixed models & sizes",
      "Free store banner ready to install",
      "Suitable for small kiosk or home store",
    ],
    image: "/img/kim-tayona-CgBrItB1mGk-unsplash.jpg",
    accent: "bg-brand-primary",
  },
  {
    id: 11,
    categoryId: "strategic",
    name: "Mega Premium Ball Pack",
    tag: "MEGA PREMIUM BALL LEVEL",
    price: "$5,620",
    qty: "550 pcs",
    desc: "For those ready to dominate area and build reseller network.",
    benefits: [
      "Large stock covers 1 city/district",
      "Ideal for building reseller team under you",
      "Assisted with distribution strategy setup",
    ],
    image: "/img/moses-janga-1eLxmJvZrr4-unsplash.jpg",
    accent: "bg-brand-secondary",
  },
];

const Partnership = () => {
  const [activeTab, setActiveTab] = useState("testing");

  const filteredPackages = packages.filter(
    (pkg) => pkg.categoryId === activeTab,
  );

  return (
    <section
      id='partnership'
      className='py-40 bg-white relative overflow-hidden scroll-mt-24'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mb-32'>
          <div className='flex items-center gap-4 mb-8'>
            <div className='w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary'>
              <Sparkles size={24} />
            </div>
            <span className='text-[11px] font-bold tracking-[0.4em] uppercase text-brand-dark/40'>
              Scale Your Vision
            </span>
          </div>
          <h2 className='text-6xl md:text-8xl font-display text-brand-dark leading-[0.9] mb-10 tracking-tighter'>
            Elevate Your <br />
            <span className='text-gradient italic font-normal'>
              Business Legacy.
            </span>
          </h2>
          <p className='text-brand-dark/50 text-xl font-light leading-relaxed max-w-2xl'>
            From emerging startups to established enterprises, we offer a
            spectrum of partnership tiers designed to catalyze your market
            dominance.
          </p>
        </div>

        {/* Category Tabs */}
        <div className='flex flex-wrap gap-3 mb-24 bg-brand-light p-3 rounded-[40px] w-fit shadow-lg border border-brand-dark/5'>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-12 py-6 rounded-4xl transition-all duration-700 overflow-hidden group ${
                activeTab === cat.id
                  ? "text-white"
                  : "text-brand-dark/40 hover:text-brand-dark"
              }`}>
              <div className='relative z-10 flex flex-col items-start gap-1'>
                <span className='text-[11px] font-bold uppercase tracking-[0.2em]'>
                  {cat.name}
                </span>
                <span
                  className={`text-[9px] font-medium opacity-60 ${activeTab === cat.id ? "text-white/60" : ""}`}>
                  {cat.range}
                </span>
              </div>
              {activeTab === cat.id && (
                <motion.div
                  layoutId='activeTab'
                  className='absolute inset-0 bg-brand-dark shadow-2xl'
                  transition={{ type: "spring", bounce: 0.1, duration: 0.8 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          <AnimatePresence mode='popLayout'>
            {filteredPackages.map((pkg, i) => (
              <motion.div
                layout
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className='group relative bg-white rounded-[60px] overflow-hidden border border-brand-dark/10 hover:border-brand-primary/30 transition-all duration-700 hover:shadow-2xl flex flex-col'>
                {/* Image Section */}
                <div className='relative aspect-4/3 overflow-hidden'>
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className='object-cover transition-transform duration-1000 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-brand-dark/40 via-transparent to-transparent' />

                  {/* Price Tag Overlay */}
                  <div className='absolute top-8 right-8 glass px-8 py-3 rounded-full shadow-2xl border-white/30 backdrop-blur-3xl'>
                    <span className='text-brand-dark font-bold text-sm tracking-tight'>
                      {pkg.price}
                    </span>
                  </div>

                  {/* Tag Overlay */}
                  <div
                    className={`absolute bottom-8 left-8 px-6 py-2.5 rounded-full ${pkg.accent === "bg-brand-secondary" ? "bg-brand-secondary text-white" : "bg-brand-primary text-brand-dark"} text-[10px] font-bold uppercase tracking-widest shadow-xl border border-white/20`}>
                    {pkg.tag}
                  </div>
                </div>

                {/* Content Section */}
                <div className='p-12 flex flex-col flex-1'>
                  <div className='mb-10'>
                    <h3 className='text-4xl font-display text-brand-dark mb-4 group-hover:text-brand-primary transition-colors leading-none'>
                      {pkg.name}
                    </h3>
                    <p className='text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-6'>
                      {pkg.qty}
                    </p>
                    <p className='text-brand-dark/50 text-base font-light leading-relaxed'>
                      {pkg.desc}
                    </p>
                  </div>

                  <div className='space-y-5 mb-14 flex-1'>
                    {pkg.benefits.map((benefit, idx) => (
                      <div key={idx} className='flex items-start gap-5'>
                        <div className='w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-primary/20'>
                          <Check size={14} className='text-brand-primary' />
                        </div>
                        <span className='text-sm text-brand-dark/60 font-light leading-relaxed'>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className='group/btn w-full py-6 bg-brand-dark text-white rounded-4xl font-bold flex items-center justify-center gap-3 hover:bg-brand-primary hover:text-brand-dark transition-all duration-500 shadow-2xl active:scale-[0.98] glow-on-hover uppercase tracking-widest text-xs'>
                    Secure Tier{" "}
                    <ArrowRight
                      size={20}
                      className='transition-transform group-hover/btn:translate-x-2'
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global CTA Banner */}
        <div className='mt-40 bg-brand-dark rounded-[80px] p-16 md:p-32 relative overflow-hidden group mesh-gradient border border-white/5'>
          <div className='absolute top-0 right-0 w-2/3 h-full bg-linear-to-l from-brand-primary/10 via-transparent to-transparent pointer-events-none' />
          <div className='relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16'>
            <div className='max-w-2xl text-center lg:text-left'>
              <h4 className='text-5xl md:text-7xl font-display text-white leading-tight mb-8 tracking-tighter'>
                Start Your <br />
                <span className='text-gradient italic font-normal'>
                  Global Empire.
                </span>
              </h4>
              <p className='text-white/40 text-xl font-light leading-relaxed'>
                Consult with our curators to tailor a distribution strategy that
                aligns with your brand&apos;s ambition.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-8'>
              <button className='px-14 py-7 bg-white text-brand-dark rounded-full font-bold shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:bg-brand-primary transition-all active:scale-95 uppercase tracking-widest text-[11px] glow-on-hover'>
                WhatsApp Inquiry
              </button>
              <button className='px-14 py-7 border-2 border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-all active:scale-95 uppercase tracking-widest text-[11px]'>
                Download Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
