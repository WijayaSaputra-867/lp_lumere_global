"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowUpRight, Sparkles } from 'lucide-react';

const Contact = () => {
  const offices = [
    { city: "London", region: "GLOBAL HQ", email: "london@lumera.global", color: "text-brand-primary" },
    { city: "Jakarta", region: "PRODUCTION HUB", email: "asia@lumera.global", color: "text-brand-secondary" },
    { city: "New York", region: "NORTH AMERICA", email: "ny@lumera.global", color: "text-brand-accent" }
  ];

  return (
    <section id="contact" className="py-40 bg-white relative scroll-mt-24 overflow-hidden">
       {/* Background accents */}
       <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 -translate-x-1/2 pointer-events-none" />
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-32">
          <div className="lg:w-2/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                 <Sparkles size={24} />
              </div>
              <span className='text-[11px] font-bold tracking-[0.4em] uppercase text-brand-dark/40'>Global Connection</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-display text-brand-dark leading-[0.9] mb-12 tracking-tighter">
              Forming <br/>
              <span className="text-gradient italic font-normal">Strategic Bonds.</span>
            </h2>
            
            <p className="text-brand-dark/50 text-xl mb-16 font-light leading-relaxed max-w-md">
              Your business legacy begins with a conversation. Reach out to our global curators to discuss manufacturing excellence and partnership opportunities.
            </p>

            <div className="space-y-12">
              {offices.map((office, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                   className="group cursor-pointer"
                >
                   <div className="flex items-start gap-8">
                      <div className="w-16 h-16 bg-brand-light rounded-3xl flex items-center justify-center shrink-0 border border-brand-dark/5 group-hover:bg-brand-dark group-hover:text-white transition-all duration-700 group-hover:scale-110">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <h5 className="text-3xl font-display text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{office.city}</h5>
                        <p className="text-[10px] text-brand-dark/40 font-bold uppercase tracking-[0.3em] mb-3">{office.region}</p>
                        <p className={`text-sm ${office.color} font-bold tracking-tight`}>{office.email}</p>
                      </div>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-3/5 bg-white p-12 md:p-24 rounded-[80px] border border-brand-dark/10 shadow-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl" />
            
            <form className="space-y-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[11px] font-bold text-brand-dark/40 uppercase tracking-[0.3em] px-6">First Name</label>
                  <input type="text" className="w-full px-8 py-6 bg-brand-light/50 border border-brand-dark/5 focus:border-brand-primary focus:bg-white outline-none rounded-[32px] transition-all font-light text-brand-dark placeholder:text-brand-dark/20" placeholder="John" />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-bold text-brand-dark/40 uppercase tracking-[0.3em] px-6">Last Name</label>
                  <input type="text" className="w-full px-8 py-6 bg-brand-light/50 border border-brand-dark/5 focus:border-brand-primary focus:bg-white outline-none rounded-[32px] transition-all font-light text-brand-dark placeholder:text-brand-dark/20" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-brand-dark/40 uppercase tracking-[0.3em] px-6">Corporate Email</label>
                <input type="email" className="w-full px-8 py-6 bg-brand-light/50 border border-brand-dark/5 focus:border-brand-primary focus:bg-white outline-none rounded-[32px] transition-all font-light text-brand-dark placeholder:text-brand-dark/20" placeholder="j.doe@company.com" />
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-brand-dark/40 uppercase tracking-[0.3em] px-6">Inquiry Type</label>
                <div className="relative">
                   <select className="w-full px-8 py-6 bg-brand-light/50 border border-brand-dark/5 focus:border-brand-primary focus:bg-white outline-none rounded-[32px] transition-all appearance-none font-light cursor-pointer text-brand-dark">
                     <option>Manufacturing Partnership</option>
                     <option>Wholesale Inquiry</option>
                     <option>Media & PR</option>
                     <option>Other</option>
                   </select>
                   <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ArrowUpRight size={22} className="rotate-90 text-brand-dark" />
                   </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-brand-dark/40 uppercase tracking-[0.3em] px-6">Message</label>
                <textarea rows={5} className="w-full px-8 py-8 bg-brand-light/50 border border-brand-dark/5 focus:border-brand-primary focus:bg-white outline-none rounded-[40px] transition-all font-light resize-none text-brand-dark placeholder:text-brand-dark/20" placeholder="Describe your vision..."></textarea>
              </div>
              
              <button className="group w-full py-8 bg-brand-dark text-white rounded-[40px] font-bold flex items-center justify-center gap-4 hover:bg-brand-primary hover:text-brand-dark transition-all duration-500 shadow-2xl active:scale-[0.98] glow-on-hover uppercase tracking-[0.2em] text-xs">
                Transmit Message <ArrowUpRight size={26} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
