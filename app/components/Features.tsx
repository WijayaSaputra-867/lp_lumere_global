/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, Heart, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Eco-Conscious Manufacturing",
    desc: "Our production facilities adhere to the highest GOTS standards, ensuring sustainable growth for your brand.",
    color: "bg-brand-accent/20",
  },
  {
    icon: Award,
    title: "Premium Wholesale Quality",
    desc: "We provide high-margin, expertly crafted garments designed to elevate your retail offering.",
    color: "bg-brand-primary/20",
  },
  {
    icon: Heart,
    title: "Ethical Supply Chain",
    desc: "Transparency and fair labor practices are at the heart of our global operations.",
    color: "bg-brand-secondary/20",
  },
  {
    icon: ShieldCheck,
    title: "Retail Partner Support",
    desc: "Dedicated account management and flexible logistics tailored to your business needs.",
    color: "bg-zinc-100",
  },
];

const Features = () => {
  return (
    <section className='py-24 bg-zinc-50 overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-24 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-4xl md:text-5xl font-bold mb-8 leading-tight text-zinc-950'>
              Partnering for <br />
              <span className='text-gradient'>Sustainable Growth.</span>
            </h2>
            <p className='text-zinc-700 text-lg mb-12 font-medium leading-relaxed'>
              LUMERA GLOBAL provides end-to-end fashion solutions, from ethical
              sourcing to seamless global distribution. We are the backbone of
              modern children&apos;s retail.
            </p>

            <div className='grid sm:grid-cols-2 gap-8'>
              {features.map((f, i) => (
                <div key={i} className='group'>
                  <div
                    className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <f.icon className='text-brand-dark' size={28} />
                  </div>
                  <h4 className='text-xl font-bold mb-3'>{f.title}</h4>
                  <p className='text-zinc-700 text-sm leading-relaxed'>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='relative'>
            <div className='aspect-square rounded-[60px] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl'>
              <img
                src='https://dummyimage.com/600x600/000/fff&text=LUMERA+GLOBAL+Partnership'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -bottom-12 -left-12 glass p-8 rounded-3xl max-w-70 shadow-2xl -rotate-6'>
              <p className='italic text-zinc-800 mb-4 font-bold'>
                &quot;LUMERA GLOBAL has been a game-changer for our
                boutique&apos;s supply chain. Their quality is unmatched.&quot;
              </p>
              <p className='font-bold text-zinc-950'>
                - Michael R., Retail Partner
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
