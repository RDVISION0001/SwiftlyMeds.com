import React, { useState } from 'react'
import { useTheme } from '../Auth/ThemeContext'

function FAQs() {
  const { styles } = useTheme()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide a wide range of services including web development, mobile app development, and cloud solutions tailored to your business needs."
    },
    {
      question: "How can I contact your support team?",
      answer: "You can reach our support team via email at support@example.com, by phone at +1 (555) 123-4567, or through our contact form."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with our services. Please contact our support team for details."
    },
    {
      question: "Do you provide custom solutions?",
      answer: "Yes, we specialize in creating custom solutions to meet your unique requirements. Get in touch to discuss your project!"
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={`min-h-screen py-16 relative overflow-hidden ${styles.theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-indigo-900' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'}`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-stripes.png')] ${styles.theme === 'dark' ? 'opacity-20' : 'opacity-10'}`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with Hero Image */}
        <div className="relative mb-16">
          <img
            src="https://via.placeholder.com/1200x400?text=FAQs+Hero"
            alt="FAQs Hero"
            className="w-full h-80 object-cover rounded-2xl shadow-xl"
          />
          <div className={`absolute inset-0 rounded-2xl flex items-center justify-center ${styles.theme === 'dark' ? 'bg-gradient-to-r from-gray-800/70 to-indigo-900/70' : 'bg-gradient-to-r from-indigo-600/70 to-purple-600/70'}`}>
            <div className="text-center">
              <h1 className={`text-5xl font-extrabold tracking-tight ${styles.theme === 'dark' ? 'text-white' : 'text-white'}`}>Frequently Asked Questions</h1>
              <p className={`text-lg max-w-2xl mx-auto mt-4 ${styles.theme === 'dark' ? 'text-gray-200' : 'text-indigo-100'}`}>
                Find answers to common questions about our services and processes.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`shadow-2xl rounded-2xl p-10 ${styles.theme === 'dark' ? 'bg-gray-800/80 text-gray-200' : 'bg-white/80 text-gray-700'} backdrop-blur-sm`}>
          <h2 className={`text-3xl font-bold mb-8 text-center ${styles.theme === 'dark' ? 'text-indigo-300' : 'text-indigo-900'}`}>Your Questions, Answered</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b transform transition-all duration-300 hover:scale-[1.01] ${styles.theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <button
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`text-lg font-semibold ${styles.theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>{faq.question}</span>
                  <span className={`text-xl ${styles.theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    {openIndex === index ? '-' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-base py-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs