import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/helper';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    
    //  Sets card background to dark gray in dark mode
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      
      {/* Image Section */}
      <div className="
  h-48 
  p-4 
  flex 
  items-center 
  justify-center 
  relative 
  overflow-hidden 
  bg-white 
  dark:bg-gray-900
">

        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        
        {/* Category Label (Light Gray in both modes) */}
        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
          {product.category}
        </div>
        
        {/* Product Title  */}
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 line-clamp-2 mb-2 min-h-[48px]" title={product.title}>
          {product.title}
        </h3>

        {/* Rating & Price Section */}
        <div className="flex items-center justify-between mt-auto mb-4">
          
          {/* Rating Badge */}
          <div className="flex items-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-bold px-2 py-1 rounded">
            {product.rating?.rate} <Star size={10} className="ml-1 fill-current" />
          </div>
        
          <div className="text-lg font-bold text-brand-primary dark:text-brand-secondary">
            {formatPrice(product.price)}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-brand-secondary hover:bg-yellow-400 text-brand-primary font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition active:scale-95"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;