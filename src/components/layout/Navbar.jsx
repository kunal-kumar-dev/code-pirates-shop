import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Moon, Sun, Menu, X, Home, Info, Phone as PhoneIcon } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';

// 1. IMPORT THE LOGO HERE
import logo from '../../assets/vite.png'; 

const Navbar = () => {
  const { totalItems } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-brand-primary dark:bg-gray-950 text-white sticky top-0 z-50 shadow-xl transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* --- Logo Section --- */}
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-1 rounded-md hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* 2. USE THE IMAGE TAG HERE INSTEAD OF TEXT */}
          <Link to="/" onClick={closeMenu} className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Code Pirates Logo" 
              className="h-12 w-auto object-contain hover:opacity-90 transition" 
            />
          </Link>
        </div>

        {/* ... (Search Bar and Right Actions remain the same) ... */}
        
        {/* Search Bar (Hidden on Mobile) */}
        <div className="hidden md:flex flex-1 max-w-xl relative">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full py-2 px-4 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
          />
          <button className="bg-brand-secondary px-4 rounded-r-lg text-brand-primary hover:bg-yellow-400 transition">
            <Search size={20} />
          </button>
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/10 transition text-brand-secondary">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/login" className="flex items-center gap-2 hover:text-brand-secondary transition">
            <User size={20} />
            <span className="font-medium">Login</span>
          </Link>

          <Link to="/cart" className="relative hover:text-brand-secondary transition">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border border-brand-primary">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-4">
           <button onClick={toggleTheme} className="text-brand-secondary">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link to="/cart" className="relative" onClick={closeMenu}>
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border border-brand-primary">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-brand-primary dark:bg-gray-950 border-t border-gray-700 shadow-2xl animate-slideDown">
          <div className="flex flex-col p-4 space-y-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full py-2 px-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
            </div>

            <Link to="/" onClick={closeMenu} className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg transition">
              <Home size={20} className="text-brand-secondary" /> Home
            </Link>
            <Link to="/about" onClick={closeMenu} className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg transition">
              <Info size={20} className="text-brand-secondary" /> About Us
            </Link>
            <Link to="/contact" onClick={closeMenu} className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg transition">
              <PhoneIcon size={20} className="text-brand-secondary" /> Contact
            </Link>
            <Link to="/login" onClick={closeMenu} className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg transition">
              <User size={20} className="text-brand-secondary" /> Login / Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;