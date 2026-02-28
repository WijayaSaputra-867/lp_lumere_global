"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id='contact' className='py-28 bg-white scroll-mt-24'>
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-20'>
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <p className='text-[11px] font-medium uppercase tracking-[0.4em] text-brand-dark/40 mb-6'>
              Hubungi Kami
            </p>

            <h2 className='text-5xl md:text-7xl font-display text-brand-dark leading-[0.95] mb-8'>
              Kami Ingin <br />
              <em className='font-light text-brand-primary'>
                Mendengar dari Anda
              </em>
            </h2>

            <p className='text-brand-dark/50 text-lg font-light leading-relaxed mb-12 max-w-md'>
              Apakah Anda penasaran dengan proses kami, ingin mengunjungi
              atelier kami, atau memiliki pertanyaan — kami di sini.
            </p>

            {/* Contact Details */}
            <div className='space-y-8'>
              <div className='flex items-start gap-5'>
                <div className='w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-primary shrink-0'>
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className='text-lg font-display text-brand-dark mb-1'>
                    Atelier Lumera
                  </h5>
                  <p className='text-brand-dark/40 text-sm font-light'>
                    Jl. Kebon Jeruk No. 12, Menteng
                    <br />
                    Jakarta Pusat, 10310
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-5'>
                <div className='w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-primary shrink-0'>
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className='text-lg font-display text-brand-dark mb-1'>
                    Email
                  </h5>
                  <p className='text-brand-primary text-sm font-light'>
                    hello@lumera.id
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-5'>
                <div className='w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-primary shrink-0'>
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className='text-lg font-display text-brand-dark mb-1'>
                    WhatsApp
                  </h5>
                  <p className='text-brand-primary text-sm font-light'>
                    +62 812 3456 7890
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='bg-brand-cream p-10 md:p-14 rounded-3xl'>
            <form className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label className='text-[10px] font-medium text-brand-dark/40 uppercase tracking-[0.2em] px-4'>
                    Nama
                  </label>
                  <input
                    type='text'
                    className='w-full px-6 py-4 bg-white border border-brand-dark/5 focus:border-brand-primary outline-none rounded-xl transition-all font-light text-brand-dark placeholder:text-brand-dark/20 text-sm'
                    placeholder='Nama Anda'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-[10px] font-medium text-brand-dark/40 uppercase tracking-[0.2em] px-4'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='w-full px-6 py-4 bg-white border border-brand-dark/5 focus:border-brand-primary outline-none rounded-xl transition-all font-light text-brand-dark placeholder:text-brand-dark/20 text-sm'
                    placeholder='email@anda.com'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='text-[10px] font-medium text-brand-dark/40 uppercase tracking-[0.2em] px-4'>
                  Subjek
                </label>
                <select className='w-full px-6 py-4 bg-white border border-brand-dark/5 focus:border-brand-primary outline-none rounded-xl transition-all font-light text-brand-dark text-sm appearance-none cursor-pointer'>
                  <option>Pertanyaan Umum</option>
                  <option>Pesanan Khusus</option>
                  <option>Grosir</option>
                  <option>Kunjungi Atelier</option>
                  <option>Pers & Media</option>
                </select>
              </div>

              <div className='space-y-2'>
                <label className='text-[10px] font-medium text-brand-dark/40 uppercase tracking-[0.2em] px-4'>
                  Pesan
                </label>
                <textarea
                  rows={4}
                  className='w-full px-6 py-4 bg-white border border-brand-dark/5 focus:border-brand-primary outline-none rounded-xl transition-all font-light resize-none text-brand-dark placeholder:text-brand-dark/20 text-sm'
                  placeholder='Katakan apa yang ada di pikiran Anda...'></textarea>
              </div>

              <button className='w-full py-4 bg-brand-dark text-white rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-brand-primary hover:text-brand-dark transition-all duration-500 text-[11px] uppercase tracking-[0.15em]'>
                Kirim Pesan <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
