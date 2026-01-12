import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helper';
import { useNavigate, Navigate } from 'react-router-dom';
import { CheckCircle, MapPin, Phone, User, CreditCard, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    mobile: '',
    zip: ''
  });

  // Calculate Totals
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API Call (2 seconds delay)
    setTimeout(() => {
      setLoading(false);
      setIsOrderPlaced(true);
      clearCart(); // Empty the cart
      toast.success("Order Placed Successfully!");
    }, 2000);
  };

  // 1. Security Check: If cart is empty, redirect to Home (unless order is placed)
  if (cart.length === 0 && !isOrderPlaced) {
    return <Navigate to="/" />;
  }

  // 2. SUCCESS VIEW: Show this after order is placed
  if (isOrderPlaced) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4">
        <div className="bg-green-100 dark:bg-green-900 p-6 rounded-full mb-6 animate-bounce">
          <CheckCircle size={64} className="text-green-600 dark:text-green-400" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
          Thank you for shopping with Code Pirates. Your order <strong>#CP-{Math.floor(Math.random() * 99999)}</strong> has been placed successfully.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-secondary hover:text-brand-primary transition shadow-lg"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  // 3. CHECKOUT FORM VIEW
  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Back Button */}
      <button onClick={() => navigate('/cart')} className="flex items-center gap-2 text-gray-500 hover:text-brand-secondary mb-6 transition">
        <ArrowLeft size={20} /> Back to Cart
      </button>

      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
        <CreditCard className="text-brand-secondary" /> Checkout
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* LEFT SIDE: Shipping Details Form */}
        <div className="lg:w-2/3">
          <form onSubmit={handlePlaceOrder} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-bold mb-6 text-gray-800 dark:text-white border-b pb-2 dark:border-gray-700">Shipping Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input 
                    type="text" name="name" required
                    placeholder="John Doe"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-secondary outline-none"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mobile Number</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input 
                    type="tel" name="mobile" required
                    placeholder="+91 98765 43210"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-secondary outline-none"
                  />
                </div>
              </div>

              {/* Zip Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pincode</label>
                <input 
                  type="text" name="zip" required
                  placeholder="110001"
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-secondary outline-none"
                />
              </div>

              {/* Address */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-3 text-gray-400" />
                  <textarea 
                    name="address" rows="3" required
                    placeholder="Flat No, Street, Area..."
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-secondary outline-none"
                  ></textarea>
                </div>
              </div>

            </div>

            {/* Submit Button (Mobile view: shown at bottom) */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full mt-6 md:hidden bg-brand-secondary text-brand-primary font-bold py-3 rounded-lg hover:bg-yellow-400 transition"
            >
              {loading ? "Processing..." : `Pay ${formatPrice(total)}`}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 sticky top-24">
            <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Order Summary</h2>
            
            {/* Scrollable Item List */}
            <div className="max-h-60 overflow-y-auto mb-4 pr-2 space-y-3 custom-scrollbar">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs text-gray-600 dark:text-gray-300">x{item.qty}</span>
                    <span className="text-gray-800 dark:text-gray-200 truncate w-32">{item.title}</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{formatPrice(item.price * item.qty)}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t dark:border-gray-700 pt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span>GST (18%)</span><span>{formatPrice(tax)}</span></div>
              <div className="flex justify-between text-green-600 font-medium"><span>Shipping</span><span>Free</span></div>
            </div>

            <div className="flex justify-between items-center border-t dark:border-gray-700 pt-4 mt-4 mb-6">
              <span className="font-bold text-lg text-gray-900 dark:text-white">Total Amount</span>
              <span className="font-bold text-xl text-brand-primary dark:text-brand-secondary">{formatPrice(total)}</span>
            </div>

            {/* Place Order Button (Desktop) */}
            <button 
              onClick={handlePlaceOrder}
              disabled={loading}
              className="hidden md:block w-full bg-brand-secondary text-brand-primary font-bold py-3 rounded-lg hover:bg-yellow-400 transition active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </span>
              ) : "Place Order"}
            </button>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;