import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useTheme } from '../Auth/ThemeContext'

function ContactUs() {
  const { styles } = useTheme()

  return (
    <div className={`min-h-screen py-16 relative overflow-hidden ${styles.theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-indigo-900' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'}`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-stripes.png')] ${styles.theme === 'dark' ? 'opacity-20' : 'opacity-10'}`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with Hero Image */}
        <div className="relative mb-16">
          <img
            src="https://via.placeholder.com/1200x400?text=Contact+Us+Hero"
            alt="Contact Us Hero"
            className="w-full h-80 object-cover rounded-2xl shadow-xl"
          />
          <div className={`absolute inset-0 rounded-2xl flex items-center justify-center ${styles.theme === 'dark' ? 'bg-gradient-to-r from-gray-800/70 to-indigo-900/70' : 'bg-gradient-to-r from-indigo-600/70 to-purple-600/70'}`}>
            <div className="text-center">
              <h1 className={`text-5xl font-extrabold tracking-tight ${styles.theme === 'dark' ? 'text-white' : 'text-white'}`}>Get in Touch</h1>
              <p className={`text-lg max-w-2xl mx-auto mt-4 ${styles.theme === 'dark' ? 'text-gray-200' : 'text-indigo-100'}`}>
                We're here to answer your questions and connect with you!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className={`shadow-2xl rounded-2xl p-10 transform hover:scale-[1.02] transition-transform duration-300 ${styles.theme === 'dark' ? 'bg-gray-800/80 text-gray-200' : 'bg-white/80 text-gray-700'} backdrop-blur-sm`}>
            <h2 className={`text-3xl font-bold mb-6 ${styles.theme === 'dark' ? 'text-indigo-300' : 'text-indigo-900'}`}>Send Us a Message</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 transition-all duration-200 ${styles.theme === 'dark' ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-white text-gray-900'}`}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 transition-all duration-200 ${styles.theme === 'dark' ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-white text-gray-900'}`}
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 transition-all duration-200 ${styles.theme === 'dark' ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-white text-gray-900'}`}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full rounded-md px-4 py-3 text-sm font-medium text-white transition-all duration-200 ${styles.theme === 'dark' ? 'bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'} focus:outline-none focus:ring-2 focus:ring-offset-2`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`shadow-2xl rounded-2xl p-10 transform hover:scale-[1.02] transition-transform duration-300 ${styles.theme === 'dark' ? 'bg-gray-800/80 text-gray-200' : 'bg-white/80 text-gray-700'} backdrop-blur-sm`}>
            <h2 className={`text-3xl font-bold mb-6 ${styles.theme === 'dark' ? 'text-indigo-300' : 'text-indigo-900'}`}>Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaEnvelope className={`h-8 w-8 mr-4 ${styles.theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <p className="text-lg">support@example.com</p>
              </div>
              <div className="flex items-center">
                <FaPhone className={`h-8 w-8 mr-4 ${styles.theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className={`h-8 w-8 mr-4 ${styles.theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <p className="text-lg">1234 Innovation Drive, Tech City, TC 56789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs