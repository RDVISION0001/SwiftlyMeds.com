import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Santosh (Pharmacist)</p>
            <p className="text-sm">Swiftly Meds Private Limited</p>
            <p className="text-sm">Sa20/205-H-6-K, Chandra Chaurah, Ashapur,</p>
            <p className="text-sm">Balua Road Railway Station, Sarnath</p>
            <p className="text-sm">Varanasi - 221007, Uttar Pradesh, India</p>
            <p className="text-sm mt-2">
              <a href="tel:+917943438588" className="text-blue-300 hover:text-blue-100">
                088580 43370
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:contact@swiftlymeds.com" className="text-blue-300 hover:text-blue-100">
                Send Email
              </a>
            </p>
            <p className="text-sm">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
                Get Directions
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/faqs" className="hover:text-blue-300">FAQs</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="/terms-conditions" className="hover:text-blue-300">Terms & Conditions</a></li>
              <li><a href="returns-policy" className="hover:text-blue-300">Return Policy</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact Us</a></li>
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>

            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm"
              />
              <button className="bg-blue-600 text-white px-4 rounded-r-full hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm border-t border-gray-600 pt-4">
          © {new Date().getFullYear()} Swiftly Meds Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;