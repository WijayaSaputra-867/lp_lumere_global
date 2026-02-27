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
    <section id="contact" className="py-24 bg-white relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h4 className="text-brand-primary font-bold tracking-widest uppercase mb-4">Get In Touch</h4>
            <h2 className="text-4xl font-bold mb-8 text-brand-dark">Become a <br/><span className="text-gradient">Strategic Partner</span></h2>
            <p className="text-zinc-600 mb-10 leading-relaxed">
              Whether you're looking for sustainable manufacturing at scale or exclusive wholesale access, our team is ready to discuss your requirements.
            </p>

            <div className="space-y-8">
              {offices.map((office, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark">{office.city}</h5>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">{office.region}</p>
                    <p className="text-sm text-brand-primary font-medium">{office.email}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 glass p-10 md:p-14 rounded-[40px] border-brand-primary/10 shadow-2xl bg-white"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark uppercase tracking-wider px-2">First Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-brand-light border-transparent focus:bg-white focus:border-brand-primary/30 outline-none rounded-2xl transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark uppercase tracking-wider px-2">Last Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-brand-light border-transparent focus:bg-white focus:border-brand-primary/30 outline-none rounded-2xl transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark uppercase tracking-wider px-2">Corporate Email</label>
                <input type="email" className="w-full px-6 py-4 bg-brand-light border-transparent focus:bg-white focus:border-brand-primary/30 outline-none rounded-2xl transition-all" placeholder="j.doe@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark uppercase tracking-wider px-2">Inquiry Type</label>
                <select className="w-full px-6 py-4 bg-brand-light border-transparent focus:bg-white focus:border-brand-primary/30 outline-none rounded-2xl transition-all appearance-none">
                  <option>Manufacturing Partnership</option>
                  <option>Wholesale Inquiry</option>
                  <option>Media & PR</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark uppercase tracking-wider px-2">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-brand-light border-transparent focus:bg-white focus:border-brand-primary/30 outline-none rounded-2xl transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              
              <button className="w-full py-5 bg-brand-dark text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-xl active:scale-95">
                SUBMIT INQUIRY <ArrowUpRight size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
