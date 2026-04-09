import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioDetailsModal from '../components/PortfolioDetailsModal';
import AppointmentForm from '../components/AppointmentForm';
import ContactSection from '../components/ContactSection';
import { CATEGORIES, PRODUCTS } from '../constants';
import { PortfolioItem } from '../types';
import { motion } from 'motion/react';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewingItem, setViewingItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return PRODUCTS as unknown as PortfolioItem[];
    return (PRODUCTS as unknown as PortfolioItem[]).filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Gallery Section */}
        <section id="collections" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-4 block font-medium">
                Browse Collections
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                GALLERY
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-4">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all border-b-2 ${
                    selectedCategory === category
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-400 hover:text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onViewDetails={(p) => setViewingItem(p)}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-gray-400 uppercase tracking-widest text-sm">No items found in this category.</p>
            </div>
          )}
        </section>

        {/* Brand Story / Inspiration Section */}
        <section id="about" className="py-24 bg-black text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gray-900 overflow-hidden">
                <img
                  src="https://picsum.photos/seed/tailor-process/800/1000"
                  alt="Tailoring Process"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white p-8 hidden md:block">
                <p className="text-black text-[10px] uppercase tracking-widest font-bold leading-relaxed">
                  "Fashion is the armor to survive the reality of everyday life."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.5em] text-white/40 mb-6 block font-medium">
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">
                WHERE HERITAGE <br />
                MEETS MODERNITY
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
                Inspired by BeSpoke Suits and the kasi energy of Welkom, 
                BeStylish is a tribute to African craftsmanship. We believe every stitch 
                should tell a story of excellence and identity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-white/20" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Hand-Stitched Details</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-white/20" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Premium Fabric Sourcing</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-white/20" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Bespoke Fit Guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div id="appointment">
          <AppointmentForm />
        </div>
        
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <a href="/" className="text-xl font-bold tracking-tight text-black mb-6 block">
              BeStylish.
            </a>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Redefining African luxury through bespoke tailoring and contemporary design.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-6">Collections</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-medium tracking-widest">
              <li><a href="#collections" className="hover:text-black transition-colors">NEW ARRIVALS</a></li>
              <li><a href="#collections" className="hover:text-black transition-colors">BESPOKE SUITS</a></li>
              <li><a href="#collections" className="hover:text-black transition-colors">TRADITIONAL WEAR</a></li>
              <li><a href="#collections" className="hover:text-black transition-colors">STREETWEAR</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-6">Support</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-medium tracking-widest">
              <li><a href="#" className="hover:text-black transition-colors">SHIPPING</a></li>
              <li><a href="#" className="hover:text-black transition-colors">RETURNS</a></li>
              <li><a href="#" className="hover:text-black transition-colors">SIZE GUIDE</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">CONTACT</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-6">Newsletter</h4>
            <p className="text-xs text-gray-400 mb-6 font-light">Join our list for exclusive previews and tailoring tips.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 border-b border-gray-200 py-2 text-[10px] uppercase tracking-widest focus:border-black outline-none transition-colors"
              />
              <button className="ml-4 text-[10px] uppercase tracking-widest font-bold hover:text-gray-400 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] text-gray-400 uppercase tracking-widest">
            © 2026 BESTYLISH. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[9px] text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PortfolioDetailsModal
        item={viewingItem}
        onClose={() => setViewingItem(null)}
      />
    </div>
  );
}
