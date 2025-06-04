// src/ThemeContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Update the HTML element's class for global theme styles
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Define theme styles (compatible with Tailwind or custom CSS)
  const themeStyles = {
    light: {
      background: 'bg-white', // Tailwind class
      text: 'text-gray-900', // Tailwind class
      primary: 'text-blue-600', // Tailwind class for text-primary
      container: 'bg-white', // Background for container
    },
    dark: {
      background: 'bg-gray-900',
      text: 'text-gray-100',
      primary: 'text-blue-400',
      container: 'bg-gray-800',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, styles: themeStyles[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);