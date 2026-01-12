# 🏴‍☠️ Code Pirates Shop

> **Innovate. Code. Conquer.**

A premium, fully responsive **E-commerce Single Page Application (SPA)** built using **React.js** and **Tailwind CSS**.  
This project is designed to closely simulate a **real-world shopping platform**, focusing on clean UI, smooth UX, scalable architecture, and persistent state management.
---

## 🚀 Live Demo
🔗 **Live URL:**  
_Add your Netlify or Vercel deployment link here_

---

## ✨ Key Features

### 🎨 UI / UX & Design
- Premium **Gold & Navy Blue** theme inspired by modern e-commerce platforms
- Fully responsive design (mobile, tablet, desktop)
- **Dark Mode** with toggle switch and saved user preference
- Smooth animated hamburger menu for mobile navigation

---

### 🛍️ Shopping Experience
- **Smart Cart System**
  - Add and remove products
  - Quantity management
  - Real-time price calculation (Subtotal + 18% GST)
  - Persistent cart using **LocalStorage**
- **Shop Page**
  - Sidebar category filters
  - Price sorting (Low → High, High → Low)
- **Checkout Flow**
  - Professional checkout form
  - Input validation
  - Order success confirmation

---

### ⚡ Technology & Performance
- Dynamic product data fetched from **FakeStore API**
- Fast build and loading performance using **Vite**
- React Suspense with loading indicators
- Toast notifications for user actions (Add to Cart, Remove, etc.)

---

## 🛠️ Tech Stack

| Category | Technology |
|--------|-----------|
| Frontend Framework | React.js (Vite) |
| Styling | Tailwind CSS (v3.4) |
| State Management | React Context API |
| Routing | React Router DOM (v6) |
| Icons | Lucide React |
| Notifications | React Hot Toast |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/code-pirates-shop.git
cd code-pirates-shop
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start Development Server
```bash
npm run dev
```

### 4️⃣ Open in Browser
```text
http://localhost:5173
```

---

## 📂 Project Structure

```text
src/
├── assets/            # Images, logos
├── components/        # Reusable UI components
│   ├── layout/        # Navbar, Footer
│   └── product/       # ProductCard, Filters
├── context/           # CartContext, ThemeContext
├── pages/             # Application Pages
│   ├── Home.jsx       # Hero banner & featured products
│   ├── Shop.jsx       # Product listing with filters
│   ├── Cart.jsx       # Cart management & billing
│   ├── Checkout.jsx   # Checkout & shipping form
│   ├── About.jsx      # Team & project story
│   ├── Contact.jsx    # Contact form
│   └── Login.jsx      # Authentication UI
├── services/          # API handling logic
├── utils/             # Helper utilities (currency formatter)
├── App.jsx            # Main routing setup
└── main.jsx           # Application entry point
```

---

## 👥 The Crew – Code Pirates 🏴‍☠️

| Name | Registration No. | Role |
|-----|------------------|------|
| Kunal Kumar | 25105108901 | Team Lead |
| Piyush Kumar | 25105108902 | Developer |
| Sushil Kumar | 25105108908 | Developer |
| Niranjan Kumar | 25105108909 | UI / UX Designer |
| Bittu Kumar | 25105165908 | Tester |

---

## 🤝 Contributing

This is an **academic project**, but contributions are welcome.

1. Fork the repository  
2. Create a feature branch  
3. Commit your changes  
4. Push to the branch  
5. Open a Pull Request  

---


© 2026 **Code Pirates Shop**. All Rights Reserved.
