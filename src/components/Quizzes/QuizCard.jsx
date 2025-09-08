"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const QuizCard = ({ quiz }) => {
  const [isHovered, setIsHovered] = useState(false)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'text-green-400 bg-green-900/30 border-green-500/30'
      case 'medium':
        return 'text-yellow-400 bg-yellow-900/30 border-yellow-500/30'
      case 'hard':
        return 'text-red-400 bg-red-900/30 border-red-500/30'
      default:
        return 'text-blue-400 bg-blue-900/30 border-blue-500/30'
    }
  }

  const getTopicIcon = (topic) => {
    const icons = {
      'React': '⚛️',
      'JavaScript': '🟨',
      'HTML': '🌐',
      'CSS': '🎨',
      'Node.js': '🟢',
      'Python': '🐍',
      'Data Science': '📊',
      'Machine Learning': '🤖',
      'Cybersecurity': '🛡️',
      'Cloud Computing': '☁️',
      'Database': '🗄️',
      'Algorithms': '🔢'
    }
    return icons[topic] || '❓'
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
        {/* Glow effect on hover - Fixed z-index */}
        <div 
          className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-blue-600/0 transition-opacity duration-300 pointer-events-none -z-10 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-xl">
              {getTopicIcon(quiz.topic)}
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg line-clamp-2 group-hover:text-blue-300 transition-colors">
                {quiz.title}
              </h3>
              <p className="text-sm text-white/60">{quiz.topic}</p>
            </div>
          </div>
          
          {/* Quiz Stats */}
          <div className="text-right">
            <div className="text-sm text-white/60">
              {quiz.questions.length} Questions
            </div>
            <div className="text-sm text-white/60">
              ~{quiz.estimatedTime} min
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {quiz.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(quiz.difficulty)}`}>
            {quiz.difficulty}
          </span>
          {quiz.courseId && (
            <span className="px-2 py-1 bg-purple-900/30 text-purple-400 rounded-full text-xs border border-purple-500/30">
              Course Related
            </span>
          )}
        </div>

        {/* Progress Bar (if attempted) */}
        {quiz.userProgress && quiz.userProgress.completed && (
          <div className="mb-4">
            <div className="flex justify-between text-xs text-white/60 mb-1">
              <span>Your Progress</span>
              <span>{quiz.userProgress.score}%</span>
            </div>
            <div className="w-full bg-blue-950/50 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${quiz.userProgress.score}%` }}
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-blue-900/30">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{quiz.estimatedTime} min</span>
          </div>

          <Link
            to={`/quizzes/${quiz.id}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black relative z-10"
          >
            {quiz.userProgress?.completed ? 'Retake Quiz' : 'Start Quiz'}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default QuizCard