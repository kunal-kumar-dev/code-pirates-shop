import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
// Logo Import 
import logo from '../../assets/vite.png';

const Footer = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-primary text-white pt-16 pb-8 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* --- Brand Info Section with Logo --- */}
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block mb-4">
              {/* Logo Image Implementation */}
              <img
                src={logo}
                alt="Code Pirates Shop"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premium destination for tech, fashion, and lifestyle.
              We ship pirate-grade quality products across the seven seas.
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-secondary">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-white transition cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop">Shop All</Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-white transition cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-white transition cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* --- Support Links --- */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-secondary">Support</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">FAQ</li>
              <li className="hover:text-white transition cursor-pointer">Shipping Policy</li>
              <li className="hover:text-white transition cursor-pointer">Returns & Refunds</li>
            </ul>
          </div>

          {/* --- Contact Info --- */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-secondary">Get in Touch</h3>
            <div className="space-y-3 text-gray-400 text-sm mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-secondary" />
                <span>Bhagalpur College of Engineering (BCE), Bhagalpur</span>
              </div>
              <div className="flex items-center gap-2">
                <a href="tel:+910000000000" className="flex items-center gap-2">
                  <Phone size={16} /> +91 0000000000
                </a>

                <a href="mailto:support@codepirates.com" className="flex items-center gap-2">
                  <Mail size={16} /> support@codepirates.com
                </a>

              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Facebook className="text-gray-400 hover:text-blue-500 cursor-pointer transition" size={20} />
              <Twitter className="text-gray-400 hover:text-blue-400 cursor-pointer transition" size={20} />
              <Instagram className="text-gray-400 hover:text-pink-500 cursor-pointer transition" size={20} />
              <Youtube className="text-gray-400 hover:text-red-500 cursor-pointer transition" size={20} />
            </div>
          </div>

        </div>

        {/* --- Bottom Copyright --- */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 Code Pirates Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;