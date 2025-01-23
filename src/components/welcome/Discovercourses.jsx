import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Discovercourses = () => {

  return (
    <section id="courses" className="bg-white text-gray-900 py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-down">
        Discover Our Tech Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 

          className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop"
            alt="Web Development"
            className="w-full h-48 object-cover"
          />
          <div className="p-6  ">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600 mb-4">Master HTML, CSS, JavaScript, and modern frameworks.</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Frontend & Backend Technologies</li>
              <li>Responsive Design Principles</li>
              <li>API Integration & Development</li>
            </ul>
          </div>
        </div>
        <div
          className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop"
            alt="Mobile App Development"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
            <p className="text-gray-600 mb-4">Create iOS and Android apps with React Native.</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Cross-platform Development</li>
              <li>Native Features Integration</li>
              <li>App Store Deployment</li>
            </ul>
          </div>
        </div>
        <div
          className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=500&auto=format&fit=crop"
            alt="Data Science"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Data Science</h3>
            <p className="text-gray-600 mb-4">Analyze data and build machine learning models.</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Statistical Analysis</li>
              <li>Machine Learning Algorithms</li>
              <li>Big Data Processing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-xl mb-4" data-aos="fade-up">
          Explore more courses in AI, Cybersecurity, Cloud Computing, and other cutting-edge tech fields.
        </p>
        <Link to={"/courses"}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          data-aos="zoom-in"
        >
          Explore All Courses
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Discovercourses