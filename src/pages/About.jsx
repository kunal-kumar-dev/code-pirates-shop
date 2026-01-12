import { Code, Database, Github, Layout, Moon, Users } from 'lucide-react';

// --- 1. IMPORT LOCAL IMAGES HERE ---
import bittuPic from '../assets/bittu.jpg';
import kunalPic from '../assets/kunal.jpg';
import niranjanPic from '../assets/niranjan.jpg';
import piyushPic from '../assets/piyush.jpg';
import sushilPic from '../assets/sushil.jpg';

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-brand-primary py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

        <div className="relative container mx-auto text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-brand-secondary text-sm font-mono mb-4">
            v1.0.0 | React Project
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Behind the Code: <span className="text-brand-secondary">Code Pirates</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            This isn't just an E-commerce website; it's a showcase of modern web development. 
            Built from scratch to simulate a real-world shopping experience.
          </p>
        </div>
      </div>

      {/* --- PROJECT EXPLANATION SECTION --- */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: The Story */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why We Built This?
            </h2>
            <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                As computer science students, we wanted to bridge the gap between theory and reality. 
                We didn't just want to print <code>Hello World</code>; we wanted to build something that feels <strong>alive</strong>.
              </p>
              <p>
                <strong>Code Pirates Shop</strong> is a fully functional Single Page Application (SPA). 
                We integrated real-world features like a dynamic cart system, live API data fetching, 
                and a professional Dark Mode to prove that we are ready for the industry.
              </p>
              <p className="border-l-4 border-brand-secondary pl-4 italic">
                "Our goal was simple: Create a platform that looks like Amazon but feels like us."
              </p>
            </div>
          </div>

          {/* Right: Tech Stack Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <Code className="text-blue-500 mb-2" size={24} />
              <h3 className="font-bold text-gray-900 dark:text-white">React.js (Vite)</h3>
              <p className="text-xs text-gray-500 mt-1">Component-based UI architecture.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <Layout className="text-teal-500 mb-2" size={24} />
              <h3 className="font-bold text-gray-900 dark:text-white">Tailwind CSS</h3>
              <p className="text-xs text-gray-500 mt-1">Utility-first styling for responsive design.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <Database className="text-purple-500 mb-2" size={24} />
              <h3 className="font-bold text-gray-900 dark:text-white">FakeStore API</h3>
              <p className="text-xs text-gray-500 mt-1">Dynamic product data fetching.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <Moon className="text-brand-secondary mb-2" size={24} />
              <h3 className="font-bold text-gray-900 dark:text-white">Dark Mode</h3>
              <p className="text-xs text-gray-500 mt-1">Built-in theme switcher.</p>
            </div>
          </div>

        </div>
      </div>

      {/* --- THE TEAM SECTION --- */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
              <Users className="text-brand-secondary" /> Meet The Crew
            </h2>
            <p className="text-gray-500 dark:text-gray-400">The minds behind Project Code Pirates</p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            
            {/* 2. PASS THE IMAGE VARIABLES HERE */}
            
            <TeamCard 
              name="Kunal Kumar" 
              reg="25105108901" 
              role="Team Lead" 
              image={kunalPic}
            />
            
            <TeamCard 
              name="Piyush Kumar" 
              reg="25105108902" 
              role="Developer" 
              image={piyushPic}
            />
            
            <TeamCard 
              name="Sushil Kumar" 
              reg="25105108908" 
              role="Developer" 
              image={sushilPic}
            />
            
            <TeamCard 
              name="Niranjan Kumar" 
              reg="25105108909" 
              role="UI/UX Designer" 
              image={niranjanPic}
            />
            
            <TeamCard 
              name="Bittu Kumar" 
              reg="25105165908" 
              role="Tester" 
              image={bittuPic}
            />

          </div>
        </div>
      </div>

      {/* --- BOTTOM CTA --- */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Want to see the code?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          This project represents our dedication to learning and building.
        </p>
        <button className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-secondary hover:text-brand-primary transition inline-flex items-center gap-2">
          <Github size={20} /> <a href="https://github.com/kunal-kumar-dev/code-pirates-shop.git"> View on GitHub </a>
        </button>
      </div>

    </div>
  );
};

// --- Team Card Component ---
const TeamCard = ({ name, reg, role, image }) => (
  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700 hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group">
    
    <div className="relative w-24 h-24 mx-auto mb-4">
      {/* 3. Image is rendered here */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover rounded-full border-4 border-brand-secondary shadow-sm group-hover:scale-105 transition"
      />
    </div>

    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{name}</h3>
    <p className="text-xs text-brand-secondary font-mono mb-3">{reg}</p>
    <span className="inline-block bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm border border-gray-100 dark:border-gray-600">
      {role}
    </span>
  </div>
);

export default About;