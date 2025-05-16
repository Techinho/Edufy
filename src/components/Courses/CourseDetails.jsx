"use client"

import { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { AppContext } from "../../context/appContext"
import VideoPlaylist from "./VideoPlaylist"
import NotFound from "../../pages/NotFound"
import Loader from "../Loader"
import CourseCard from "./CourseCard"
import { motion } from "framer-motion"

const CourseDetails = () => {
  const { courses, fetchVideosFromPlaylist, videos, isLoading } = useContext(AppContext)
  const { id } = useParams()
  const course = courses.find((course) => course.id === Number.parseInt(id, 10))
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [progress] = useState(Math.floor(Math.random() * 100))

  const similarCourses = courses.filter(
    (similarCourse) => similarCourse.category === course?.category && similarCourse.id !== course?.id,
  )

  useEffect(() => {
    setIsEnrolled(false)
  }, [id])

  useEffect(() => {
    if (course?.playlistId) {
      fetchVideosFromPlaylist(course.playlistId)
    }
  }, [id, course, fetchVideosFromPlaylist])

  if (!course) return <NotFound />

  return (
    <div className="min-h-screen bg-black">
      {/* Course Header */}
      <div className="relative bg-blue-950/30 backdrop-blur-sm border-b border-blue-900/30">
        <div className="absolute inset-0 bg-grid opacity-10 z-0" />
        <div className="absolute inset-0 noise-bg z-0" />

        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-64 h-48 rounded-xl overflow-hidden shadow-2xl border border-blue-900/50"
            >
              <img
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{course.title}</h1>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
                <button
                  onClick={() => setIsEnrolled(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition whitespace-nowrap"
                >
                  {isEnrolled ? "Continue Learning" : "Enroll Now - It's Free"}
                </button>

                <div className="flex items-center text-white/70">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="font-medium text-white">{course.enrolled}+</span> students enrolled
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-500/30">
                  {course.category}
                </span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-500/30">
                  {course.language}
                </span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-500/30">
                  {course.level}
                </span>
              </div>

              <p className="text-white/70 mb-6">{course.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isEnrolled ? (
          <>
            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-950/30 backdrop-blur-sm rounded-xl p-6 border border-blue-900/30 shadow-xl mb-8"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">Course Progress</span>
                <span className="text-sm text-white/70">{progress}% Complete</span>
              </div>
              <div className="w-full bg-blue-900/50 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }} />
              </div>
            </motion.div>

            {/* Video Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-center text-xl md:text-3xl font-bold m-4 text-white">Course Content</h2>
              {isLoading ? (
                <Loader />
              ) : videos.length > 0 ? (
                <VideoPlaylist videos={videos} />
              ) : (
                <div className="text-center py-12 text-white/50 bg-blue-950/30 backdrop-blur-sm rounded-xl border border-blue-900/30">
                  Video content coming soon!
                </div>
              )}
            </motion.div>
          </>
        ) : (
          /* Course Overview for Unenrolled Users */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Course Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-blue-950/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-white mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Build real-world applications",
                  "Master core concepts",
                  "Best practices & patterns",
                  "Debugging techniques",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <svg
                      className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Course Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-950/30 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-6">Course Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-blue-900/30">
                  <span className="text-white/70 flex items-center">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Duration:
                  </span>
                  <span className="font-medium text-white">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-900/30">
                  <span className="text-white/70 flex items-center">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Total Hours:
                  </span>
                  <span className="font-medium text-white">{course.Hours}h</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-900/30">
                  <span className="text-white/70 flex items-center">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Language:
                  </span>
                  <span className="font-medium text-white">{course.language}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 flex items-center">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Level:
                  </span>
                  <span className="font-medium text-white">{course.level}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Instructor Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-950/30 backdrop-blur-sm rounded-xl p-6 border border-blue-900/30 shadow-xl mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">About the Instructor</h2>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center text-2xl text-blue-400 font-bold">
              {course.instructor[0]}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{course.instructor}</h3>
              <p className="text-white/70 mt-2">
                {course.experience || "Industry expert with 10+ years of experience"}
              </p>
              <p className="text-white/70 mt-4">
                Passionate educator dedicated to helping students master complex technical concepts through practical,
                hands-on learning. Combines real-world industry experience with effective teaching methodologies to
                ensure student success.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Similar Courses */}
        {similarCourses.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {similarCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Back to Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Link to="/courses" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Courses
        </Link>
      </div>
    </div>
  )
}

export default CourseDetails
