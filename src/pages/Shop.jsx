import React, { useEffect, useState } from 'react';
import ProductCard from '../components/product/ProductCard';
import { api } from '../services/api';
import { Filter, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filters State
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  const categories = ["All", "electronics", "jewelery", "men's clothing", "women's clothing"];

  // 1. Fetch Data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await api.getAllProducts();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };
    loadData();
  }, []);

  // 2. Filter & Sort Logic
  useEffect(() => {
    let result = [...products];

    // Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // Sort Logic
    if (sortOrder === 'lowToHigh') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [selectedCategory, sortOrder, products]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Shop All Products
          </h1>
          <span className="text-gray-500 dark:text-gray-400">
            Showing {filteredProducts.length} results
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- SIDEBAR FILTERS (Left Side) --- */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 sticky top-24">
              
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                <SlidersHorizontal className="text-brand-secondary" size={20} />
                <h2 className="font-bold text-lg text-gray-900 dark:text-white">Filters</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition ${selectedCategory === cat ? 'bg-brand-secondary border-brand-secondary' : 'border-gray-300 dark:border-gray-600'}`}>
                        {selectedCategory === cat && <div className="w-2.5 h-2.5 bg-brand-primary rounded-full"></div>}
                      </div>
                      <input 
                        type="radio" 
                        name="category" 
                        className="hidden"
                        checked={selectedCategory === cat} 
                        onChange={() => setSelectedCategory(cat)} 
                      />
                      <span className={`capitalize ${selectedCategory === cat ? 'text-brand-secondary font-bold' : 'text-gray-600 dark:text-gray-400 group-hover:text-brand-secondary'}`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort Filter */}
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Sort By Price</h3>
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-brand-secondary"
                >
                  <option value="default">Recommended</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>

            </div>
          </div>

          {/* --- PRODUCT GRID (Right Side) --- */}
          <div className="w-full lg:w-3/4">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-brand-secondary border-t-transparent"></div>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                <Filter size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-500">No products found</h3>
                <p className="text-gray-400">Try changing the filters.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;