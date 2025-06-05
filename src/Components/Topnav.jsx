import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Auth/ThemeContext';
import logo from '../assets/logo.png';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

function TopNav() {
  const { theme, toggleTheme, styles } = useTheme();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  // Determine icon color based on theme
  const iconColor = theme === 'light' ? 'text-gray-600' : 'text-gray-300';

  // Categories for the dropdowns
  const categories = [
    { name: 'Medicines', path: '/medicines' },
    { name: 'Health Products', path: '/health-products' },
    { name: 'Health Library', path: '/health-library' },
    { name: 'Lab Tests', path: '/lab-tests' },
    { name: 'Consult Doctors', path: '/consult-doctors' },
    { name: 'Offers', path: '/offers' },
  ];

  return (
    <>
      <nav className={`py-3 shadow-md sticky top-0 w-full z-50 ${styles.background} ${styles.text}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo and Delivery Address */}
            <div className="flex items-center space-x-6">
              <Link to="/" className={`text-2xl font-bold ${styles.primary}`}>
                <img
                  src={logo}
                  alt="Swiftly Meds Logo"
                  className="h-10"
                  style={{ filter: theme === 'dark' ? 'brightness(1.5)' : 'none' }}
                />
              </Link>

              {/* Delivery Address */}
              <div className="hidden md:flex items-center cursor-pointer group">
                <svg
                  className={`w-5 h-5 ${iconColor} group-hover:${styles.primary} mr-2`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <div>
                  <p className={`text-xs ${iconColor} group-hover:${styles.primary}`}>Deliver to</p>
                  <p className={`text-sm font-medium ${iconColor} group-hover:${styles.primary}`}>
                    Select Address
                  </p>
                </div>
              </div>
            </div>

            {/* Search Bar with Dropdown and Category Dropdown Button */}
            <div className="flex-grow mx-4 max-w-2xl flex items-center space-x-2">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search for Medicines, Health Products and more"
                  className={`w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${styles.text} ${styles.container}`}
                  onFocus={() => setIsSearchDropdownOpen(true)}
                  onBlur={() => setTimeout(() => setIsSearchDropdownOpen(false), 200)}
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className={`w-5 h-5 ${iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
                {/* Search Category Dropdown */}
                {isSearchDropdownOpen && (
                  <div className={`absolute top-full left-0 w-full ${styles.container} rounded-md shadow-lg z-10 mt-1`}>
                    <ul className="py-2">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <Link
                            to={category.path}
                            className={`block px-4 py-2 text-sm ${iconColor} hover:${styles.primary} hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150`}
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* Category Dropdown Button */}
              <div className="relative">
                <button
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                  className={`py-2 px-4 rounded-full border border-gray-300 ${styles.text} ${styles.container} flex items-center text-sm ${iconColor} hover:${styles.primary}`}
                >
                  Categories
                  <svg
                    className={`w-4 h-4 ml-2 ${iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {/* Category Dropdown Menu */}
                {isCategoryDropdownOpen && (
                  <div className={`absolute top-full left-0 w-48 ${styles.container} rounded-md shadow-lg z-10 mt-1`}>
                    <ul className="py-2">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <Link
                            to={category.path}
                            className={`block px-4 py-2 text-sm ${iconColor} hover:${styles.primary} hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150`}
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className={`flex items-center ${iconColor} hover:${styles.primary}`}
              >
                <svg
                  className="w-6 h-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7 h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                <span className="hidden md:inline">Sign-In</span>
              </button>
              <button
                onClick={() => setIsSignUpModalOpen(true)}
                className={`flex items-center ${iconColor} hover:${styles.primary}`}
              >
                <span className="hidden md:inline">Sign-Up</span>
              </button>
              <Link to="/add-to-cart" className={`flex items-center ${iconColor} hover:${styles.primary}`}>
                <svg
                  className="w-6 h-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span className="hidden md:inline">Cart</span>
              </Link>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full bg-blue-500 hover:bg-blue-600 ${styles.text}`}
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {theme === 'light' ? (
                  <svg
                    className={`w-5 h-5 ${styles.text}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className={`w-5 h-5 ${styles.text}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-3 flex justify-center space-x-6 text-sm font-medium">
            <Link to="/medicines" className={`${iconColor} hover:${styles.primary}`}>
              Medicines
            </Link>
            <Link to="/health-products" className={`${iconColor} hover:${styles.primary}`}>
              Health Products
            </Link>
            <Link to="/health-library" className={`${iconColor} hover:${styles.primary}`}>
              Health Library
            </Link>
            <Link to="/lab-tests" className={`${iconColor} hover:${styles.primary}`}>
              Lab Tests
            </Link>
            <Link to="/consult-doctors" className={`${iconColor} hover:${styles.primary}`}>
              Consult Doctors
            </Link>
            <Link to="/offers" className={`${iconColor} hover:${styles.primary}`}>
              Offers
            </Link>
          </div>
        </div>
      </nav>

      {/* SignIn Modal */}
      {isLoginModalOpen && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 backdrop-brightness-50 ${styles.background}`}>
          <div className={`relative ${styles.container} rounded-lg p-6`}>
            <SignIn onClose={() => setIsLoginModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpModalOpen && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 backdrop-brightness-50 ${styles.background}`}>
          <div className={`relative ${styles.container} rounded-lg p-6`}>
            <SignUp onClose={() => setIsSignUpModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default TopNav;