import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard' // Ensure you have this component
import { motion } from 'framer-motion'

const CoursesByCategory = () => {
  const { category } = useParams()
  const navigate = useNavigate()
  const { courses } = useContext(AppContext)
  const [searchTerm, setSearchTerm] = useState('')

  const categoryCourses = courses.filter(course => 
    course.category.toLowerCase() === category.toLowerCase()
  )

  const filteredCourses = categoryCourses.filter(course =>
    [course.title, course.instructor, course.category].some(field =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Sticky Header */}
      <div className="sticky top-16 bg-white border-b border-gray-200 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-3xl font-bold text-gray-900"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {category}
              </span> Courses
            </motion.h1>
            
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <svg
                className="absolute left-3 top-3.5 text-gray-400"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredCourses.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {filteredCourses.map((course) => (
              <CourseCard 
                key={course.id}
                course={course}
                onClick={() => navigate(`/courses/${course.title}`)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-20"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div className="text-6xl mb-4">🧐</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              No Courses Found
            </h2>
            <p className="text-gray-600">
              Try adjusting your search or explore other categories
            </p>
          </motion.div>
        )}
      </main>

      {/* Back to Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <button
          onClick={() => navigate('/courses')}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Categories
        </button>
      </div>
    </div>
  )
}

export default CoursesByCategory