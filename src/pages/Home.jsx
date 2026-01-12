import React, { useEffect, useState } from 'react';
import ProductCard from '../components/product/ProductCard';
import { api } from '../services/api';
import { Filter, ArrowUpDown, ChevronDown } from 'lucide-react';

const Home = () => {
  // --- State Management ---
  const [allProducts, setAllProducts] = useState([]); // सारा डेटा यहाँ रहेगा
  const [displayedProducts, setDisplayedProducts] = useState([]); // जो स्क्रीन पर दिखेगा
  const [loading, setLoading] = useState(true);
  
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default'); 

  // --- 1. Fetch Data on Load ---
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await api.getAllProducts();
      setAllProducts(data);
      setDisplayedProducts(data); 
      setLoading(false);
    };
    loadData();
  }, []);

  // --- 2. Filter & Sort Logic ---
  useEffect(() => {
    let result = [...allProducts];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Sort by Price
    if (sortOrder === 'lowToHigh') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      result.sort((a, b) => b.price - a.price);
    }

    setDisplayedProducts(result);
  }, [selectedCategory, sortOrder, allProducts]);


  // --- Loading Spinner ---
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-brand-secondary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      
      {/* --- HERO SECTION (Banner) --- */}
      <div className="relative bg-brand-primary h-[400px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
             alt="Shopping Banner" 
             className="w-full h-full object-cover"
           />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-xl text-white">
            <span className="bg-brand-secondary text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              New Season
            </span>
            
            {/*  Mobile pe Text chota (3xl), Desktop pe bada (5xl) */}
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Upgrade Your <br/> <span className="text-brand-secondary">Style & Tech</span>
            </h1>
            
            {/*  Paragraph Size Responsive */}
            <p className="text-gray-200 mb-8 text-sm md:text-lg">
              Get the best deals on electronics, fashion, and accessories. 
              Limited time offers available now!
            </p>
            
            <button className="bg-white text-brand-primary px-6 md:px-8 py-3 rounded-lg font-bold hover:bg-brand-secondary transition transform hover:-translate-y-1 shadow-lg text-sm md:text-base">
              Shop Now
            </button>
          </div>
        </div>
      </div>


      {/* --- CATEGORY CARDS SECTION --- */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['electronics', 'jewelery', "men's clothing", "women's clothing"].map((cat) => (
            <div 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all border-b-4
                ${selectedCategory === cat ? 'border-brand-secondary ring-2 ring-brand-secondary' : 'border-transparent'}
              `}
            >
              <h3 className="font-bold text-gray-800 dark:text-white capitalize text-center text-sm md:text-base">{cat}</h3>
            </div>
          ))}
        </div>
      </div>


      {/* --- MAIN SHOP AREA --- */}
      <div className="container mx-auto px-4 pb-16">
        
        {/* Filter & Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
            All Products <span className="text-sm font-normal text-gray-500">({displayedProducts.length} items)</span>
          </h2>

          <div className="flex gap-4">
            
            {/* Category Filter Dropdown */}
            <div className="relative group">
               <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg cursor-pointer">
                  <Filter size={18} className="text-gray-600 dark:text-gray-300"/>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-transparent outline-none cursor-pointer text-gray-700 dark:text-white capitalize appearance-none pr-4 text-sm md:text-base"
                  >
                    <option value="all">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                  </select>
                  <ChevronDown size={14} className="text-gray-500" />
               </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
               <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg cursor-pointer">
                  <ArrowUpDown size={18} className="text-gray-600 dark:text-gray-300"/>
                  <select 
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="bg-transparent outline-none cursor-pointer text-gray-700 dark:text-white appearance-none pr-4 text-sm md:text-base"
                  >
                    <option value="default">Sort by: Recommended</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                  </select>
                  <ChevronDown size={14} className="text-gray-500" />
               </div>
            </div>

          </div>
        </div>

        {/* --- PRODUCT GRID --- */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No products found.</p>
            <button 
              onClick={() => setSelectedCategory('all')} 
              className="mt-4 text-brand-accent hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;