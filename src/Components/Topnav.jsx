import React, { useState } from 'react';
import logo from '../assets/logo.png';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

function TopNav() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-green-100 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Delivery Address */}
            <div className="flex items-center space-x-6">
              {/* <a href="/" className="text-2xl font-bold text-secondary">
                <img src={logo} alt="Swiftly Meds Logo" className="h-10" />
              </a> */}

              {/* Delivery Address */}
              <div className="hidden md:flex items-center cursor-pointer group">
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-primary mr-2"
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
                  <p className="text-xs text-gray-500 group-hover:text-primary">Deliver to</p>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-primary">Select Address</p>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-grow mx-4 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Medicines, Health Products and more"
                  className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-500"
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
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center text-gray-700 hover:text-primary"
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                <span className="hidden md:inline">Sign-In</span>
              </button>
              <button
                onClick={() => setIsSignUpModalOpen(true)}
                className="flex items-center text-gray-700 hover:text-primary"
              >
                <span className="hidden md:inline">Sign-Up</span>
              </button>
              <a href="/cart" className="flex items-center text-gray-700 hover:text-primary">
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
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-3 flex justify-center space-x-6 text-sm font-medium text-gray-700">
            <a href="/medicines" className="hover:text-primary">Medicines</a>
            <a href="/health-products" className="hover:text-primary">Health Products</a>
            <a href="/health-library" className="hover:text-primary">Health Library</a>
            <a href="/lab-tests" className="hover:text-primary">Lab Tests</a>
            <a href="/consult-doctors" className="hover:text-primary">Consult Doctors</a>
            <a href="/offers" className="hover:text-primary">Offers</a>
          </div>
        </div>
      </nav>

      {/* SignIn Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50  backdrop-brightness-50">
          <div className="relative">
            <SignIn onClose={() => setIsLoginModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50  backdrop-brightness-50">
          <div className="relative">
            <SignUp onClose={() => setIsSignUpModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default TopNav;