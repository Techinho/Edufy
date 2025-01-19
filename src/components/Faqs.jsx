import React, { useContext, useState } from 'react'
import { AppContext } from '../context/appContext';

const Faqs = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const {faqs}=useContext(AppContext)

    const toggleFaq = (index) => {
      if (openFaq === index) {
        setOpenFaq(null);
      } else {
        setOpenFaq(index);
      }
    };
  
  return (
    <section className="text-gray-900 w-full bg-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="flex justify-between items-center w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pt-4 pb-2 text-gray-700">
                      {faq.answer}

                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Faqs