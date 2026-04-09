import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioDetailsModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioDetailsModal({ item, onClose }: PortfolioDetailsModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-white h-full shadow-2xl overflow-y-auto"
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-xl font-bold uppercase tracking-[0.2em]">Details</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="mb-10">
              <div className="aspect-[3/4] w-full bg-gray-100 mb-6">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-500 font-light mb-4">{item.label}</p>
              <p className="text-base text-gray-700 leading-relaxed">{item.description}</p>
            </div>

            <button 
              onClick={() => {
                onClose();
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-5 bg-black text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-gray-900 transition-all shadow-xl"
            >
              Request Similar Design
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
