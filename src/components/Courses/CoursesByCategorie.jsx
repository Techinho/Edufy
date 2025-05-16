"use client"

import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import CourseCard from "./CourseCard"
import { AppContext } from "../../context/appContext"

const CoursesByCategory = () => {
  const { category } = useParams()
  const navigate = useNavigate()
  const { courses } = React.useContext(AppContext)
  const [searchTerm, setSearchTerm] = useState("")

  const categoryCourses = courses.filter((course) => course.category.toLowerCase() === category.toLowerCase())

  const filteredCourses = categoryCourses.filter((course) =>
    [course.title, course.instructor, course.category].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  )

  return (
    <div className="min-h-screen bg-black">
      {/* Sticky Header */}
      <div className="sticky top-16 z-20 backdrop-blur-md bg-black/80 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-3xl font-bold"
            >
              <span className="text-gradient">{category}</span> <span className="text-white">Courses</span>
            </motion.h1>

            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-blue-950/50 border-blue-900/50 text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <svg
                className="absolute left-3 top-3.5 text-blue-400"
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredCourses.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🧐</div>
            <h2 className="text-2xl font-bold text-white mb-2">No Courses Found</h2>
            <p className="text-white/70">Try adjusting your search or explore other categories</p>
          </motion.div>
        )}
      </main>

      {/* Back to Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <button
          onClick={() => navigate("/courses")}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Categories
        </button>
      </div>
    </div>
  )
}

export default CoursesByCategory

