"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const CourseCard = ({ course, onClick }) => {
  return (
    <motion.div whileHover={{ y: -5 }} className="group h-full">
      <Link to={`/courses/${course.id}`} className="block h-full" onClick={onClick}>
        <div className="relative h-full bg-blue-950/30 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-900/30 hover:border-blue-600/50 transition-all duration-300 shadow-lg">
          <div className="aspect-video relative overflow-hidden">
            <img
              src={course.thumbnail || "/placeholder.svg?height=200&width=400"}
              alt={course.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute top-3 right-3">
              <div className="bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                <svg className="w-3 h-3 mr-1 fill-white" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                {course.rating || "4.8"}
              </div>
            </div>

            <div className="absolute bottom-3 left-3">
              <div className="bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full border border-blue-500/30">
                {course.level}
              </div>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
              {course.title}
            </h3>

            <div className="flex items-center mb-3">
              <div className="h-8 w-8 rounded-full bg-blue-600/20 flex items-center justify-center text-sm font-medium text-blue-400">
                {course.instructor[0]}
              </div>
              <div className="ml-3">
                <p className="text-sm text-white/90">{course.instructor}</p>
                <p className="text-xs text-white/60">{course.experience || "Industry Expert"}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-blue-900/30">
              <div className="flex items-center gap-3">
                <div className="flex items-center text-white/70 text-xs">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {course.enrolled}+
                </div>
                <div className="flex items-center text-white/70 text-xs">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {course.Hours || course.hours || "10"}h
                </div>
              </div>
              <span className="text-xs font-medium text-blue-400">Free</span>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </motion.div>
  )
}

export default CourseCard
