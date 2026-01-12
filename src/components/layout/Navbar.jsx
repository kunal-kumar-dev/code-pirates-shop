import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Search,
  User,
  Moon,
  Sun,
  Menu,
  X,
  Home,
  Info,
  Phone,
  Store
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/vite.png';

const Navbar = () => {
  const { totalItems } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-brand-primary dark:bg-gray-950 text-white sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Code Pirates" className="h-10" />
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <button onClick={toggleTheme}>
            {isDarkMode ? <Sun /> : <Moon />}
          </button>

          <Link to="/shop">Shop</Link>

          <Link to="/login" className="flex items-center gap-1">
            <User size={18} /> Login
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-gray-700 p-4 space-y-3">
          <Link to="/" onClick={closeMenu} className="flex gap-2">
            <Home /> Home
          </Link>
          <Link to="/shop" onClick={closeMenu} className="flex gap-2">
            <Store /> Shop
          </Link>
          <Link to="/about" onClick={closeMenu} className="flex gap-2">
            <Info /> About
          </Link>
          <Link to="/contact" onClick={closeMenu} className="flex gap-2">
            <Phone /> Contact
          </Link>
          <Link to="/login" onClick={closeMenu} className="flex gap-2">
            <User /> Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
