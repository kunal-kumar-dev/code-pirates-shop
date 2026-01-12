import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check LocalStorage or System Preference for initial theme
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("codePiratesTheme");
    return savedTheme === "dark" || 
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  // Toggle Function
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply the class to the HTML tag
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("codePiratesTheme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("codePiratesTheme", "light");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);