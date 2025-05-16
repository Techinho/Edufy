"use client"

import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../context/appContext"
import CourseCard from "./CourseCard"
import { motion } from "framer-motion"

const CourseList = () => {
  const { courses, getCategoryIcon } = useContext(AppContext)
  const [searchTerm, setSearchTerm] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)

  // Unique features
  const categories = [...new Set(courses.map((course) => course.category))]
  const timeBasedGreeting = () => {
    const hour = new Date().getHours()
    return hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening"
  }

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const coursesByCategory = categories.reduce((acc, category) => {
    const categoryCourses = filteredCourses.filter((course) => course.category === category)
    if (categoryCourses.length > 0) {
      acc[category] = {
        courses: categoryCourses.slice(0, 4),
        total: categoryCourses.length,
      }
    }
    return acc
  }, {})

  const hasResults = filteredCourses.length > 0

  return (
    <div className="min-h-screen bg-black">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 h-1 bg-blue-900/30 w-full z-30">
        <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Sticky Search Bar - Adjusted for navbar */}
      <div className="sticky top-16 bg-black/80 backdrop-blur-md border-b border-blue-900/30 z-20">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              {timeBasedGreeting()}, <span className="text-blue-400">Explorer</span>
            </h1>
            <div className="relative w-full sm:w-[60%] max-w-md">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg bg-blue-950/50 border-blue-900/50 py-2 pl-10 pr-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Adjusted for navbar height */}
      <main className="mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
        {hasResults ? (
          categories.map(
            (category) =>
              coursesByCategory[category] && (
                <motion.section
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  {/* Category Header */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                        {getCategoryIcon(category)}
                      </div>
                      <h2 className="text-xl font-bold text-white">
                        {category} <span className="text-blue-400">Courses</span>
                      </h2>
                    </div>
                    <Link
                      to={`/courses/category/${category}`}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="mr-2">Explore All</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Course Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {coursesByCategory[category].courses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>

                  {/* Explore More Footer */}
                  <div className="mt-4 text-right">
                    <Link
                      to={`/courses/category/${category}`}
                      className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors"
                    >
                      Showing {coursesByCategory[category].courses.length} of {coursesByCategory[category].total}{" "}
                      courses
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.section>
              ),
          )
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-20 text-center"
          >
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-2xl font-bold text-white">No courses found</h2>
              <p className="mb-8 text-white/70">Try searching for another term or browse our categories:</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {categories.map((category) => (
                  <motion.div
                    whileHover={{ y: -5, backgroundColor: "rgba(37, 99, 235, 0.2)" }}
                    key={category}
                    className="p-4 rounded-xl border border-blue-900/50 bg-blue-950/30 backdrop-blur-sm transition-all duration-300"
                  >
                    <Link to={`/courses/category/${category}`} className="block text-white">
                      <div className="mb-3 text-blue-400">{getCategoryIcon(category)}</div>
                      <span className="font-medium">{category}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Scroll to Top Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-20"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      </main>
    </div>
  )
}

export default CourseList
