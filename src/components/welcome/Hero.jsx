import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate=useNavigate()
  return (
    <section className="relative  text-white min-h-screen w-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://www.computersciencedegreehub.com/wp-content/uploads/2023/01/shutterstock_1062915392-1024x576.jpg"
        alt="Tech background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
    <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl" data-aos="fade-up">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Welcome to TechEdu
      </h1>
      <p className="text-xl sm:text-2xl mb-4" data-aos="fade-up" data-aos-delay="400">
        Empowering Tech Enthusiasts with Free World-Class Education
      </p>
      <p className="text-2xl sm:text-3xl text-blue-400 font-bold mb-8" data-aos="fade-up" data-aos-delay="600">
        All Courses Now 100% Free!
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
        to={"/signup"}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          Start Learning Now
        </Link>
        <Link 
         to={"/courses"}
          className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          Explore Free Courses
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Hero