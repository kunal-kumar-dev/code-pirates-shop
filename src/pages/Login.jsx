import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, ArrowRight, Github, Chrome } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();

    // State for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Handle Login Submission
    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API Call with Timeout
        setTimeout(() => {
            // Basic Validation Logic
            if (email === "admin@codepirates.com" && password === "admin123") {
                toast.success("Welcome back, Captain! 🏴‍☠️");
                localStorage.setItem("userToken", "fake-jwt-token"); // Store fake token
                navigate("/"); // Redirect to Home
            } else if (email && password) {
                // Allow any user for demo purposes
                toast.success("Login Successful!");
                navigate("/");
            } else {
                toast.error("Please fill in all fields");
            }
            setIsLoading(false);
        }, 1500); // 1.5 seconds delay for realism
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

            {/* LEFT SIDE: Visual Branding (Hidden on mobile) */}
            {/* Left Side Content Area */}
            <div className="hidden lg:flex lg:w-1/2 bg-brand-primary relative items-center justify-center overflow-hidden">

                {/* Background Gradient & Decorational Circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-blue-900 opacity-90"></div>
                <div className="absolute top-10 left-10 w-32 h-32 bg-brand-secondary rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-accent rounded-full blur-3xl opacity-20"></div>

                <div className="relative z-10 text-center px-10">

                    {/* Updated Heading & Subtext */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                        Innovate. Code. <br /> <span className="text-brand-secondary">Conquer.</span>
                    </h1>

                    <p className="text-gray-200 text-lg mb-8 max-w-md mx-auto">
                        Welcome to <span className="font-bold text-white">Project Code Pirates</span>.
                        A premium E-commerce platform built to showcase modern web development skills.
                    </p>

                    {/* Code Pirates Team Card - FIXED STRUCTURE */}
                    <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-left w-full max-w-sm shadow-2xl">

                        {/* Group Name Header */}
                        <h3 className="text-xl font-bold text-brand-secondary mb-4 border-b border-white/20 pb-2 flex items-center gap-2">
                            Group: Code Pirates 🏴‍☠️
                        </h3>

                        {/* Members List */}
                        <ul className="space-y-3 font-mono text-sm text-gray-200">
                            <li className="flex flex-col hover:bg-white/5 p-2 rounded transition">
                                <span className="font-bold text-white text-base">1. Kunal Kumar</span>
                                <span className="text-xs opacity-70 tracking-wider">Reg no. 25105108901</span>
                            </li>
                            <li className="flex flex-col hover:bg-white/5 p-2 rounded transition">
                                <span className="font-bold text-white text-base">2. Piyush Kumar</span>
                                <span className="text-xs opacity-70 tracking-wider">Reg no. 25105108902</span>
                            </li>
                            <li className="flex flex-col hover:bg-white/5 p-2 rounded transition">
                                <span className="font-bold text-white text-base">3. Sushil Kumar</span>
                                <span className="text-xs opacity-70 tracking-wider">Reg no. 25105108908</span>
                            </li>
                            <li className="flex flex-col hover:bg-white/5 p-2 rounded transition">
                                <span className="font-bold text-white text-base">4. Niranjan Kumar</span>
                                <span className="text-xs opacity-70 tracking-wider">Reg no. 25105108909</span>
                            </li>
                            <li className="flex flex-col hover:bg-white/5 p-2 rounded transition">
                                <span className="font-bold text-white text-base">5. Bittu Kumar</span>
                                <span className="text-xs opacity-70 tracking-wider">Reg no. 25105165908</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* RIGHT SIDE: Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 transition-colors">

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sign In</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Access your account to manage orders</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                                <a href="#" className="text-sm text-brand-accent hover:underline">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all"
                                    required
                                />
                                {/* Toggle Password Visibility */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Login Button with Loader */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-brand-primary hover:bg-gray-900 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70"
                        >
                            {isLoading ? (
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>Sign In <ArrowRight size={20} /></>
                            )}
                        </button>
                    </form>

                    {/* Social Login Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 dark:text-white py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                            <Chrome size={20} className="text-red-500" /> Google
                        </button>
                        <button className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 dark:text-white py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                            <Github size={20} /> GitHub
                        </button>
                    </div>

                    <p className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-bold text-brand-primary dark:text-brand-secondary hover:underline">
                            Create Account
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;