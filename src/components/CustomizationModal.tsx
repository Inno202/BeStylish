import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { Product } from '../types';
import { useState } from 'react';

interface CustomizationModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function CustomizationModal({ product, onClose }: CustomizationModalProps) {
  const [selectedFabric, setSelectedFabric] = useState('Wool Blend');
  const [selectedLining, setSelectedLining] = useState('Silk Print');
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    shoulders: '',
    length: '',
  });

  if (!product) return null;

  const fabrics = ['Wool Blend', 'Premium Cotton', 'Linen', 'Velvet'];
  const linings = ['Silk Print', 'Solid Satin', 'Patterned Viscose'];

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
              <h2 className="text-xl font-bold uppercase tracking-[0.2em]">Customize</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="mb-10">
              <div className="aspect-[3/4] w-32 bg-gray-100 mb-6">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500 font-light">Bespoke Tailoring Service</p>
            </div>

            {/* Fabric Selection */}
            <div className="mb-10">
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">
                Select Fabric
              </label>
              <div className="grid grid-cols-2 gap-3">
                {fabrics.map((fabric) => (
                  <button
                    key={fabric}
                    onClick={() => setSelectedFabric(fabric)}
                    className={`px-4 py-3 text-xs border transition-all ${
                      selectedFabric === fabric
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 text-gray-600 hover:border-black'
                    }`}
                  >
                    {fabric}
                  </button>
                ))}
              </div>
            </div>

            {/* Lining Selection */}
            <div className="mb-10">
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">
                Interior Lining
              </label>
              <div className="space-y-3">
                {linings.map((lining) => (
                  <button
                    key={lining}
                    onClick={() => setSelectedLining(lining)}
                    className={`w-full px-4 py-4 text-xs border flex justify-between items-center transition-all ${
                      selectedLining === lining
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200 text-gray-600 hover:border-black'
                    }`}
                  >
                    {lining}
                    {selectedLining === lining && <Check size={14} className="text-black" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Measurements */}
            <div className="mb-12">
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">
                Initial Measurements (cm)
              </label>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(measurements).map((key) => (
                  <div key={key}>
                    <label className="block text-[9px] uppercase text-gray-400 mb-1">{key}</label>
                    <input
                      type="number"
                      placeholder="0.0"
                      className="w-full border-b border-gray-200 py-2 text-sm focus:border-black outline-none transition-colors"
                      value={measurements[key as keyof typeof measurements]}
                      onChange={(e) => setMeasurements({ ...measurements, [key]: e.target.value })}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] text-gray-400 italic">
                * Final measurements will be taken during your first fitting.
              </p>
            </div>

            <button className="w-full py-5 bg-black text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-gray-900 transition-all shadow-xl">
              Add to Bespoke Order
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
