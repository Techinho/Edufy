"use client"

import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../context/appContext"
import QuizCard from "./QuizCard"
import { motion } from "framer-motion"

const QuizList = () => {
  const { quizzes, courses, getCategoryIcon } = useContext(AppContext)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [scrollProgress, setScrollProgress] = useState(0)

  // Get unique topics and difficulties
  const topics = ["All", ...new Set(quizzes.map((quiz) => quiz.topic))]
  const difficulties = ["All", "Easy", "Medium", "Hard"]

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

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch = 
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesTopic = selectedTopic === "All" || quiz.topic === selectedTopic
    const matchesDifficulty = selectedDifficulty === "All" || quiz.difficulty === selectedDifficulty

    return matchesSearch && matchesTopic && matchesDifficulty
  })

  const quizzesByTopic = topics.slice(1).reduce((acc, topic) => {
    const topicQuizzes = filteredQuizzes.filter((quiz) => quiz.topic === topic)
    if (topicQuizzes.length > 0) {
      acc[topic] = {
        quizzes: topicQuizzes.slice(0, 6), // Show max 6 per topic
        total: topicQuizzes.length,
      }
    }
    return acc
  }, {})

  const hasResults = filteredQuizzes.length > 0

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
    <div className="min-h-screen bg-black">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 h-1 bg-blue-900/30 w-full z-30">
        <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Sticky Header */}
      <div className="sticky top-16 bg-black/80 backdrop-blur-md border-b border-blue-900/30 z-20">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Title and Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h1 className="text-xl sm:text-2xl font-semibold text-white">
                {timeBasedGreeting()}, <span className="text-blue-400">Test Your Knowledge</span>
              </h1>
              <div className="relative w-full sm:w-[60%] max-w-md">
                <input
                  type="text"
                  placeholder="Search quizzes..."
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

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Topic Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-2">Topic</label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full rounded-lg bg-blue-950/50 border-blue-900/50 py-2 px-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic} className="bg-blue-950">
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full rounded-lg bg-blue-950/50 border-blue-900/50 py-2 px-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty} className="bg-blue-950">
                      {difficulty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quick Stats */}
              <div className="flex items-end">
                <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-lg px-4 py-2">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-400">{filteredQuizzes.length}</div>
                    <div className="text-xs text-white/60">Quizzes Found</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
        {hasResults ? (
          selectedTopic === "All" ? (
            // Show by topics when "All" is selected
            Object.keys(quizzesByTopic).map((topic) => (
              <motion.section
                key={topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                {/* Topic Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-xl">
                      {getTopicIcon(topic)}
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                      {topic} <span className="text-blue-400">Quizzes</span>
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedTopic(topic)}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="mr-2">View All</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Quiz Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quizzesByTopic[topic].quizzes.map((quiz) => (
                    <QuizCard key={quiz.id} quiz={quiz} />
                  ))}
                </div>

                {/* Show more indicator */}
                {quizzesByTopic[topic].total > 6 && (
                  <div className="mt-4 text-right">
                    <button
                      onClick={() => setSelectedTopic(topic)}
                      className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors"
                    >
                      Showing 6 of {quizzesByTopic[topic].total} quizzes
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </motion.section>
            ))
          ) : (
            // Show filtered results
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {selectedTopic !== "All" && (
                    <span className="inline-flex items-center gap-2 mb-2">
                      <span className="text-xl">{getTopicIcon(selectedTopic)}</span>
                      {selectedTopic}
                    </span>
                  )}
                  <span className="text-blue-400"> Quiz Results</span>
                </h2>
                <p className="text-white/60">
                  Found {filteredQuizzes.length} quiz{filteredQuizzes.length !== 1 ? 'es' : ''} 
                  {selectedDifficulty !== "All" && ` with ${selectedDifficulty.toLowerCase()} difficulty`}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
              </div>
            </motion.section>
          )
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-20 text-center"
          >
            <div className="mx-auto max-w-2xl">
              <div className="text-6xl mb-4">🧠</div>
              <h2 className="mb-4 text-2xl font-semibold text-white">No quizzes found</h2>
              <p className="mb-8 text-white/70">Try adjusting your filters or search terms.</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {topics.slice(1, 9).map((topic) => (
                  <motion.button
                    whileHover={{ y: -5, backgroundColor: "rgba(37, 99, 235, 0.2)" }}
                    key={topic}
                    onClick={() => {
                      setSelectedTopic(topic)
                      setSearchTerm("")
                      setSelectedDifficulty("All")
                    }}
                    className="p-4 rounded-xl border border-blue-900/50 bg-blue-950/30 backdrop-blur-sm transition-all duration-300"
                  >
                    <div className="mb-3 text-blue-400 text-xl">{getTopicIcon(topic)}</div>
                    <span className="font-medium text-white text-sm">{topic}</span>
                  </motion.button>
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

export default QuizList
