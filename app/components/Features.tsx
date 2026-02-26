"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Heart, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    desc: "We use only the finest GOTS certified organic cotton, ensuring comfort for your little icons and the planet.",
    color: "bg-brand-accent/20"
  },
  {
    icon: Award,
    title: "Timeless Design",
    desc: "Our pieces are designed to last, transcending seasons and trends with an effortless, modern aesthetic.",
    color: "bg-brand-primary/20"
  },
  {
    icon: Heart,
    title: "Ethically Made",
    desc: "Fair wages and safe working environments are non-negotiable in our supply chain. Made with love.",
    color: "bg-brand-secondary/20"
  },
  {
    icon: ShieldCheck,
    title: "Child Safe",
    desc: "OEKO-TEX certified fabrics and rigorous safety testing for every button, zipper, and seam.",
    color: "bg-zinc-100"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-zinc-950">
              Crafted for <br />
              <span className="text-gradient">Unlimited Play.</span>
            </h2>
            <p className="text-zinc-700 text-lg mb-12 font-medium leading-relaxed">
              At LUMERA GLOBAL, we believe kids should be free to explore. Our garments are engineered to withstand the adventures of childhood while maintaining a premium look.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="group">
                  <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <f.icon className="text-brand-dark" size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                  <p className="text-zinc-700 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
               <img 
                src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy Child Playing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 glass p-8 rounded-3xl max-w-[280px] shadow-2xl -rotate-6">
              <p className="italic text-zinc-800 mb-4 font-bold">"Finally, clothes that my son loves to wear and actually last through the wash!"</p>
              <p className="font-bold text-zinc-950">- Sarah J., Happy Parent</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
