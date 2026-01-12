
# 🏴‍☠️ Code Pirates Shop  
### Modern E-Commerce Web Application (Frontend)

**Code Pirates Shop** is a modern, responsive e-commerce web application built using **React, Tailwind CSS, and Context API**.  
This project simulates a real-world online shopping experience and was developed as a **final project for a paid internship**, with a strong focus on clean architecture, UI/UX, and state management.

---

## 🚀 Live Demo
**Live URL:** https://code-pirates-shop.netlify.app/

---

## 📌 Key Features# 🏴‍☠️ Code Pirates Shop

A modern, responsive **E-commerce web application** built with **React + Vite**, showcasing real-world shopping features such as product listing, filtering, cart management, checkout flow, and dark mode support.

This project was developed as a **group project and internship final submission**, focusing on clean UI, proper state management, and practical frontend architecture.

---

## 🚀 Live Features

- Product listing from a real API
- Category filtering and price sorting
- Add to cart / remove from cart
- Cart persistence using localStorage
- Checkout flow with order summary
- Dark mode toggle
- Fully responsive (mobile, tablet, desktop)
- Clean UI using Tailwind CSS

---

## 🧠 Tech Stack

- React.js (Hooks)
- Vite
- Tailwind CSS
- React Router DOM
- Context API
- FakeStore API
- Lucide Icons
- React Hot Toast

---

## 📂 Project Structure

src/
components/
layout/
Navbar.jsx
Footer.jsx
product/
ProductCard.jsx
context/
CartContext.jsx
ThemeContext.jsx
pages/
Home.jsx
Shop.jsx
Cart.jsx
Checkout.jsx
Login.jsx
About.jsx
Contact.jsx
services/
api.js
utils/
helper.js

---

## 🛒 Cart System

- Managed using React Context API
- Persistent via localStorage
- Dynamic subtotal, GST (18%), and total calculation
- Auto clear after checkout

---

## 🌙 Dark Mode

- Tailwind CSS dark class strategy
- Global ThemeContext
- Instant toggle without reload

---

## ⚙️ Setup Instructions

git clone https://github.com/kunal-kumar-dev/code-pirates-shop.git

npm install

npm run dev

http://localhost:5173

---

## 👥 Team – Code Pirates

Kunal Kumar – Team Lead  
Piyush Kumar – Developer  
Sushil Kumar – Developer  
Niranjan Kumar – UI/UX Designer  
Bittu Kumar – Tester  

---

## 📄 License

Educational and internship use only.


- 🛒 **Dynamic Cart System**
  - Add, remove, and update product quantities
  - Persistent cart using `localStorage`

- 🌙 **Dark / Light Mode**
  - Manual theme toggle using Context API
  - Tailwind class-based dark mode

- 🔍 **Product Filtering & Sorting**
  - Filter by category
  - Sort by price (Low → High, High → Low)

- 📦 **Checkout Flow**
  - Cart validation before checkout
  - Order summary with GST calculation
  - Order success confirmation screen

- 🎨 **Modern UI**
  - Fully responsive (mobile-first)
  - Clean, professional design system
  - Smooth animations and transitions

- ⚙️ **Reusable Architecture**
  - Centralized API service
  - Global state management via Context
  - Utility functions for formatting

---

## 🧠 Tech Stack

| Category | Technology |
|------|-----------|
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| State Management | React Context API |
| Routing | React Router DOM |
| Icons | Lucide React |
| Notifications | React Hot Toast |
| API | FakeStore API |
| Tooling | Vite, ES6 |

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   └── product/       # ProductCard
├── pages/             # Home, Shop, Cart, Checkout, Login, About, Contact
├── context/           # CartContext, ThemeContext
├── services/          # API service (api.js)
├── utils/             # Helper utilities (formatPrice)
├── assets/            # Images & logos
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔄 State Management Overview

- **CartContext**
  - Manages cart state globally
  - Handles add, remove, clear operations
  - Syncs cart with `localStorage`
  - Provides derived data like total item count

- **ThemeContext**
  - Controls dark/light theme
  - Uses Tailwind `dark` class strategy

---

## 🌐 API Integration

- Product data fetched from **FakeStore API**
- Centralized API layer for scalability
- Graceful error handling for failed requests

> ⚠️ Authentication and payment are **frontend simulations only**, implemented for UI and flow demonstration.

---

## 🧪 Demo Credentials (UI Only)

```
Email: admin@codepirates.com  
Password: admin123
```

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/kunal-kumar-dev/code-pirates-shop.git

# Navigate to project folder
cd code-pirates-shop

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📈 Learning Outcomes

This project demonstrates:
- Component-based architecture
- Real-world React patterns
- Context API for global state
- Tailwind CSS best practices
- Clean code organization
- Internship-level frontend engineering

---

## 🚧 Future Improvements

- Product detail pages
- Backend-based authentication
- Real payment gateway integration
- Stock & inventory handling
- Improved accessibility (ARIA)

---

## 👨‍💻 Team – Code Pirates

- **Kunal Kumar** – Team Lead & Frontend Developer  
- Piyush Kumar – Developer  
- Sushil Kumar – Developer  
- Niranjan Kumar – UI/UX Designer  
- Bittu Kumar – Tester  

---

## 📄 License
This project is for **educational and internship demonstration purposes only**.

---

### ⭐ If you found this project useful, feel free to star the repository!
