import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helper';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Add some products to continue shopping.
        </p>
        <Link
          to="/shop"
          className="bg-brand-secondary text-brand-primary font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

      {/* Cart Items */}
      <div className="flex-1 space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            {/* Product Image */}
            <div className="w-20 h-20 bg-gray-50 dark:bg-gray-700 rounded-lg p-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">
                {item.title}
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Qty: {item.qty}
              </div>
            </div>

            {/* Price */}
            <div className="font-bold text-brand-primary dark:text-brand-secondary">
              {formatPrice(item.price * item.qty)}
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-gray-400 hover:text-red-500 transition"
              title="Remove item"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-96">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 sticky top-24">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (18%)</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t dark:border-gray-700 pt-4 mb-6">
            <span className="font-bold text-lg text-gray-900 dark:text-white">
              Total
            </span>
            <span className="font-bold text-xl text-brand-primary dark:text-brand-secondary">
              {formatPrice(total)}
            </span>
          </div>

          {/* Checkout Button */}
          <Link
            to="/checkout"
            className="block w-full text-center bg-brand-secondary text-brand-primary font-bold py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Proceed to Checkout
          </Link>

          <p className="text-xs text-center text-gray-400 mt-4">
            Secure checkout
          </p>
        </div>
      </div>

    </div>
  );
};

export default Cart;
