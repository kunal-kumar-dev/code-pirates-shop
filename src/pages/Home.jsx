import React, { useEffect, useState } from 'react';
import ProductCard from '../components/product/ProductCard';
import { api } from '../services/api';
import { Filter, ArrowUpDown, ChevronDown } from 'lucide-react';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await api.getAllProducts();
      setAllProducts(data);
      setDisplayedProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    let result = [...allProducts];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (sortOrder === 'lowToHigh') {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === 'highToLow') {
      result.sort((a, b) => b.price - a.price);
    }

    setDisplayedProducts(result);
  }, [selectedCategory, sortOrder, allProducts]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-secondary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

      {/* Hero Section */}
      <div className="relative bg-brand-primary h-[400px] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Upgrade Your <span className="text-brand-secondary">Style & Tech</span>
          </h1>
          <p className="max-w-lg text-gray-200">
            Discover premium electronics and fashion products.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            All Products
            <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              ({displayedProducts.length})
            </span>
          </h2>

          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
              <Filter size={16} />
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="bg-transparent outline-none dark:text-white"
              >
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's</option>
                <option value="women's clothing">Women's</option>
              </select>
              <ChevronDown size={14} />
            </div>

            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
              <ArrowUpDown size={16} />
              <select
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
                className="bg-transparent outline-none dark:text-white"
              >
                <option value="default">Recommended</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {displayedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-20">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
