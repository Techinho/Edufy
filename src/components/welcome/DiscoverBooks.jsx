import React from 'react'
import { Link } from 'react-router-dom'

const DiscoverBooks = () => {
  return (
    <section id="expand-knowledge" className="text-gray-900 bg-white py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-down">
        Expand Your Knowledge
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Curated Tech Books</h3>
          <p className="text-lg mb-6">
            Dive deep into cutting-edge technologies with our carefully selected collection of tech books. From
            beginner guides to advanced topics, we've got you covered.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
            <li>Handpicked selections by industry experts</li>
            <li>Covers a wide range of tech domains</li>
            <li>Updated regularly with the latest publications</li>
          </ul>
          <Link
          to={"/books"}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            data-aos="zoom-in"
          >
            Explore Tech Books
          </Link>
        </div>
        <div className="relative" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop"
            alt="Tech Books"
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-xl"></div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default DiscoverBooks