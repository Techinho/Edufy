import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section id="cta" className="text-gray-900 bg-white py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-down">
        Ready to Boost Your Tech Career?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div data-aos="fade-right">
          <p className="text-xl mb-8">
            Join TechEdu today and access all our courses for free. Start learning and build the skills that will
            shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
            to={"/signup"}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Get Started Now
            </Link>
            <Link to={"/courses"}
              className="px-6 py-3 bg-white hover:bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-md border border-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              View Course Catalog
            </Link>
          </div>
        </div>
        <div className="grid place-content-center" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop"
            alt="Students learning"
            className="w-full max-w-md h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default CallToAction