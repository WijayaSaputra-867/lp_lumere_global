"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const offices = [
    { city: "London", region: "UK & Europe", email: "uk.sales@lumera.global" },
    { city: "Jakarta", region: "SE Asia Production", email: "asia.hq@lumera.global" },
    { city: "New York", region: "North America", email: "us.ops@lumera.global" }
  ];

  return (
    <section id="contact" className="py-32 bg-white relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-brand-dark/20" />
              <span className='text-[10px] font-bold tracking-[0.3em] uppercase text-brand-dark/50'>Get In Touch</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-display text-brand-dark leading-[1.1] mb-8">
              Become a <br/>
              <span className="italic font-normal opacity-60">Strategic Partner.</span>
            </h2>
            
            <p className="text-brand-dark/60 text-lg mb-12 font-light leading-relaxed">
              Whether you&apos;re looking for sustainable manufacturing at scale or exclusive wholesale access, our team is ready to discuss your requirements.
            </p>

            <div className="space-y-10">
              {offices.map((office, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                   className="group cursor-pointer"
                >
                   <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <h5 className="text-xl font-display text-brand-dark mb-1">{office.city}</h5>
                        <p className="text-[10px] text-brand-dark/40 font-bold uppercase tracking-[0.2em] mb-2">{office.region}</p>
                        <p className="text-sm text-brand-primary font-medium">{office.email}</p>
                      </div>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-2/3 bg-brand-light/50 p-12 md:p-20 rounded-[64px] border border-brand-dark/5 shadow-sm"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-[0.2em] px-4">First Name</label>
                  <input type="text" className="w-full px-8 py-5 bg-white border border-brand-dark/5 focus:border-brand-primary/30 outline-none rounded-[28px] transition-all font-light" placeholder="John" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-[0.2em] px-4">Last Name</label>
                  <input type="text" className="w-full px-8 py-5 bg-white border border-brand-dark/5 focus:border-brand-primary/30 outline-none rounded-[28px] transition-all font-light" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-[0.2em] px-4">Corporate Email</label>
                <input type="email" className="w-full px-8 py-5 bg-white border border-brand-dark/5 focus:border-brand-primary/30 outline-none rounded-[28px] transition-all font-light" placeholder="j.doe@company.com" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-[0.2em] px-4">Inquiry Type</label>
                <div className="relative">
                   <select className="w-full px-8 py-5 bg-white border border-brand-dark/5 focus:border-brand-primary/30 outline-none rounded-[28px] transition-all appearance-none font-light cursor-pointer">
                     <option>Manufacturing Partnership</option>
                     <option>Wholesale Inquiry</option>
                     <option>Media & PR</option>
                     <option>Other</option>
                   </select>
                   <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ArrowUpRight size={18} className="rotate-90" />
                   </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-[0.2em] px-4">Message</label>
                <textarea rows={4} className="w-full px-8 py-6 bg-white border border-brand-dark/5 focus:border-brand-primary/30 outline-none rounded-[32px] transition-all font-light resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              
              <button className="group w-full py-6 bg-brand-dark text-white rounded-[32px] font-bold flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-brand-dark transition-all shadow-xl active:scale-[0.98]">
                Submit Inquiry <ArrowUpRight size={22} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
