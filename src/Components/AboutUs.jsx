import React from 'react'
import { useTheme } from '../Auth/ThemeContext'

function AboutUs() {
  const { styles } = useTheme()

  return (
    <div className={`min-h-screen py-16 relative overflow-hidden ${styles.theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-indigo-950' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'}`}>
      <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-stripes.png')] ${styles.theme === 'dark' ? 'opacity-20' : 'opacity-10'}`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-16">
          <img
            src="https://via.placeholder.com/1200x400?text=About+Us+Hero"
            alt="About Us Hero"
            className="w-full h-80 object-cover rounded-2xl shadow-xl"
          />
          <div className={`absolute inset-0 rounded-2xl flex items-center justify-center ${styles.theme === 'dark' ? 'bg-gradient-to-r from-gray-800/70 to-indigo-900/70' : 'bg-gradient-to-r from-indigo-600/70 to-purple-600/70'}`}>
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-white">About Our Journey</h1>
              <p className={`text-lg max-w-2xl mx-auto mt-4 ${styles.theme === 'dark' ? 'text-gray-200' : 'text-indigo-100'}`}>
                Discover the story behind our passion for innovation and excellence.
              </p>
            </div>
          </div>
        </div>

        <div className={`shadow-2xl rounded-2xl p-10 mb-16 transform hover:scale-[1.02] transition-transform duration-300 ${styles.theme === 'dark' ? 'bg-gray-800/80 text-gray-100' : 'bg-white/80 text-gray-700'} backdrop-blur-sm`}>
          <h2 className={`text-3xl font-bold mb-6 ${styles.theme === 'dark' ? 'text-indigo-200' : 'text-indigo-900'}`}>Our Mission</h2>
          <p className="leading-relaxed text-lg">
            We strive to empower individuals and businesses with transformative technology, fostering creativity, collaboration, and sustainable growth in an ever-evolving world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "John Doe", role: "Founder & CEO", img: "https://via.placeholder.com/150?text=John" },
            { name: "Jane Smith", role: "CTO", img: "https://via.placeholder.com/150?text=Jane" },
            { name: "Alex Johnson", role: "Lead Designer", img: "https://via.placeholder.com/150?text=Alex" }
          ].map((member, index) => (
            <div
              key={index}
              className={`shadow-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${styles.theme === 'dark' ? 'bg-gray-800/90 text-gray-100' : 'bg-white/90 text-gray-600'} backdrop-blur-sm`}
            >
              <img
                src={member.img}
                alt={member.name}
                className={`w-32 h-32 rounded-full mx-auto mb-4 object-cover ${styles.theme === 'dark' ? 'border-4 border-indigo-700' : 'border-4 border-indigo-100'}`}
              />
              <h3 className={`text-xl font-semibold ${styles.theme === 'dark' ? 'text-indigo-200' : 'text-indigo-900'}`}>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs