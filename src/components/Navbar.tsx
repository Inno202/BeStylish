import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Collections', href: '#' },
    { name: 'Bespoke', href: '#' },
    { name: 'Appointments', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button (Mobile Only) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Left - Logo & Desktop Links */}
          <div className="flex items-center space-x-12">
            <a href="/" className="text-xl font-light tracking-[0.4em] uppercase text-black">
              BeStylish
            </a>
            
            <div className="hidden sm:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 hover:text-black transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-500 hover:text-black transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="text-gray-500 hover:text-black transition-colors">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button className="text-gray-500 hover:text-black transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm uppercase tracking-widest font-medium text-gray-900 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
