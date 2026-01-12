import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helper';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    // 1. Calculate Totals (Subtotal + GST)
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const tax = subtotal * 0.18; // 18% GST Logic
    const total = subtotal + tax;

    // 2. Empty Cart State
    if (cart.length === 0) {
        return (
            <div className="text-center py-20 bg-white rounded-lg shadow-sm m-4">
                <h2 className="text-2xl font-bold text-gray-600 mb-2">Your Cart is Empty 🛒</h2>
                <p className="text-gray-400 mb-6">Looks like you haven't added anything yet.</p>
                <Link to="/" className="inline-block bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-brand-secondary hover:text-brand-primary transition font-semibold">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

            {/* Left Section: Cart Items List */}
            <div className="flex-grow space-y-4">
                {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 items-center">

                        {/* Product Image */}
                        <div className="w-20 h-20 flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                            <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                        </div>

                        {/* Product Details */}
                        <div className="flex-grow">
                            <h3 className="font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                            <div className="flex items-center gap-4 mt-1">
                                <span className="text-sm text-gray-500">Qty: {item.qty}</span>
                                <span className="font-bold text-brand-primary">{formatPrice(item.price)}</span>
                            </div>
                        </div>

                        {/* Remove Button */}
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 p-2 transition-colors"
                            title="Remove Item"
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Right Section: Billing Summary */}
            <div className="lg:w-96">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
                    <h2 className="text-lg font-bold mb-4 border-b pb-4">Order Summary</h2>

                    <div className="space-y-3 mb-6 text-sm text-gray-600">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>{formatPrice(subtotal)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>GST (18%)</span>
                            <span>{formatPrice(tax)}</span>
                        </div>
                        <div className="flex justify-between text-green-600 font-medium">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-gray-900 text-xl border-t pt-4 mt-4">
                            <span>Total</span>
                            <span>{formatPrice(total)}</span>
                        </div>
                    </div>

                    <button className="w-full bg-brand-secondary text-brand-primary font-bold py-3 rounded-lg hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/20">
            {/* // Change the button at the bottom of Cart.jsx to this: */}

                        <Link to="/checkout" className="block text-center w-full bg-brand-secondary text-brand-primary font-bold py-3 rounded-lg hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/20">
                            Proceed to Checkout
                        </Link>
                    </button>

                    <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
                        🔒 Secure Transaction
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Cart;