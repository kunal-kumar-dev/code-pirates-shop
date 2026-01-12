/** @type {import('tailwindcss').Config} */
export default {
  // 1. Content: Tells Tailwind where to look for class names to generate CSS
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // 2. Dark Mode Strategy: 'class' is REQUIRED for manual toggle buttons to work
  darkMode: 'class', 

  theme: {
    extend: {
      colors: {
        // "Code Pirates" Custom Brand Palette
        brand: {
          primary: '#0F172A',   // Deep Navy Blue (Used in Header & Dark Mode BG)
          secondary: '#FBBF24', // Gold (Used for Buttons & Highlights)
          accent: '#3B82F6',    // Bright Blue (Links & Focus rings)
          surface: '#F8FAFC',   // Very Light Gray (Light Mode BG)
        }
      },
      fontFamily: {
        // Professional sans-serif font stack
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}