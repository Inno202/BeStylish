import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-4 block font-medium">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            BeStylish.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center p-8 bg-white shadow-sm"
          >
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-6">
              <MapPin size={20} />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Location</h3>
            <p className="text-gray-500 text-sm font-light">Welkom, South Africa</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 bg-white shadow-sm"
          >
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-6">
              <Phone size={20} />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Phone</h3>
            <p className="text-gray-500 text-sm font-light">+27 79 109 7281</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center text-center p-8 bg-white shadow-sm"
          >
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-6">
              <Mail size={20} />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Email</h3>
            <p className="text-gray-500 text-sm font-light">info@bestylish.co.za</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center text-center p-8 bg-white shadow-sm"
          >
            <div className="w-12 h-12 bg-[#25D366] text-white flex items-center justify-center rounded-full mb-6">
              <MessageCircle size={20} />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-2">WhatsApp</h3>
            <a href="https://wa.me/27791097281" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm font-light hover:text-black transition-colors">
              Message Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
