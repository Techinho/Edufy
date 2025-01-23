import React from 'react'

const DiscoverArticles = () => {
  return (
    <section id="tech-articles" className="text-gray-900 bg-gray-100 py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-down">
        Latest Tech Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1" data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop"
            alt="Tech Articles"
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-20 rounded-xl"></div>
        </div>
        <div className="order-1 md:order-2" data-aos="fade-left">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Stay Informed</h3>
          <p className="text-lg mb-6">
            Stay up-to-date with the rapidly evolving tech world. Our articles cover the latest trends,
            breakthroughs, and insights from industry leaders.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
            <li>Daily updates on emerging technologies</li>
            <li>In-depth analysis of industry trends</li>
            <li>Expert opinions and guest contributions</li>
          </ul>
          <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            data-aos="zoom-in"
          >
            Read Tech Articles
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DiscoverArticles