import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onCustomize: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onCustomize }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Quick Add/Customize Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          {product.customizable && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCustomize(product);
              }}
              className="w-full py-3 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Plus size={14} />
              Customize
            </button>
          )}
        </div>

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[9px] uppercase tracking-widest font-bold text-black">
            {product.category}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-1 tracking-tight">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 font-light">
            {product.description.split(',')[0]}
          </p>
        </div>
        <span className="text-sm font-semibold text-black">
          R {product.price.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
