"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../context/appContext"
import QuizCard from "../Quizzes/QuizCard"
import { motion } from "framer-motion"

const DiscoverQuizzes = () => {
  const { quizzes } = useContext(AppContext)
  
  // Get featured quizzes (show 6 diverse quizzes)
  const featuredQuizzes = quizzes.slice(0, 6)

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/30 backdrop-blur-sm border border-blue-500/30 rounded-full mb-4">
            <span className="text-2xl">🧠</span>
            <span className="text-blue-400 text-sm font-medium">Test Your Knowledge</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Challenge Yourself with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Interactive Quizzes</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Reinforce your learning with our comprehensive quiz collection. Test your skills across various topics and track your progress.
          </p>
        </motion.div>

        {/* Quiz Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{quizzes.length}+</div>
            <div className="text-white/70">Interactive Quizzes</div>
          </div>
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {[...new Set(quizzes.map(q => q.topic))].length}+
            </div>
            <div className="text-white/70">Different Topics</div>
          </div>
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {quizzes.reduce((total, quiz) => total + quiz.questions.length, 0)}+
            </div>
            <div className="text-white/70">Practice Questions</div>
          </div>
        </motion.div>

        {/* Featured Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredQuizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <QuizCard quiz={quiz} />
            </motion.div>
          ))}
        </div>

        {/* Quiz Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-950/20 backdrop-blur-sm border border-blue-900/30 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Take Our Quizzes?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Instant Feedback</h4>
              <p className="text-white/70 text-sm">Get immediate results and explanations to learn from your mistakes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Adaptive Learning</h4>
              <p className="text-white/70 text-sm">Quizzes adjust to your skill level for optimal learning experience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Progress Tracking</h4>
              <p className="text-white/70 text-sm">Monitor your improvement across different topics and difficulty levels.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Timed Challenges</h4>
              <p className="text-white/70 text-sm">Practice under time pressure to improve your problem-solving speed.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/quizzes"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Explore All Quizzes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default DiscoverQuizzes
