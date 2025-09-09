"use client"

import { useContext, useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { AppContext } from "../../context/appContext"
import NotFound from "../../pages/NotFound"
import { motion } from "framer-motion"

const QuizDetails = () => {
  const { quizzes, courses } = useContext(AppContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const quiz = quizzes.find((quiz) => quiz.id === Number.parseInt(id, 10))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [isQuizCompleted, setIsQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [showResults, setShowResults] = useState(false)

  // Get related course if quiz is course-related
  const relatedCourse = quiz?.courseId ? courses.find(course => course.id === quiz.courseId) : null

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

  // Timer effect
  useEffect(() => {
    if (isQuizStarted && !isQuizCompleted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && isQuizStarted && !isQuizCompleted) {
      handleQuizComplete()
    }
  }, [timeLeft, isQuizStarted, isQuizCompleted])

  const startQuiz = () => {
    setIsQuizStarted(true)
    setTimeLeft(quiz.estimatedTime * 60) // Convert minutes to seconds
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setIsQuizCompleted(false)
    setShowResults(false)
  }

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleQuizComplete()
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleQuizComplete = () => {
    setIsQuizCompleted(true)
    calculateScore()
    setShowResults(true)
  }

  const calculateScore = () => {
    let correctAnswers = 0
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++
      }
    })
    const finalScore = Math.round((correctAnswers / quiz.questions.length) * 100)
    setScore(finalScore)
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  if (!quiz) return <NotFound />

  return (
    <div className="min-h-screen bg-black">
      {!isQuizStarted ? (
        // Quiz Introduction Page
        <div className="max-w-4xl mx-auto px-2 py-8 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-xl p-8"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center text-2xl">
                {getTopicIcon(quiz.topic)}
              </div>
              <div>
                <h1 className="text-3xl font-semibold text-white mb-2">{quiz.title}</h1>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm border ${getDifficultyColor(quiz.difficulty)}`}>
                    {quiz.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-500/30">
                    {quiz.topic}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 text-lg mb-5">{quiz.description}</p>

            {/* Quiz Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
              <div className="bg-black/30 rounded-lg p-2 text-center">
                <div className="text-2xl font-bold text-blue-400">{quiz.questions.length}</div>
                <div className="text-white/60">Questions</div>
              </div>
              <div className="bg-black/30 rounded-lg p-2 text-center">
                <div className="text-2xl font-bold text-blue-400">{quiz.estimatedTime}</div>
                <div className="text-white/60">Minutes</div>
              </div>
              <div className="bg-black/30 rounded-lg p-2 text-center">
                <div className="text-2xl font-bold text-blue-400">{Math.round(100 / quiz.questions.length)}</div>
                <div className="text-white/60">Points per Question</div>
              </div>
            </div>

            {/* Related Course */}
            {relatedCourse && (
              <div className="bg-purple-950/20 border border-purple-500/30 rounded-lg p-3 mb-5">
                <h3 className="text-lg font-semibold text-white mb-2">Related Course</h3>
                <Link 
                  to={`/courses/${relatedCourse.id}`}
                  className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <img 
                    src={relatedCourse.thumbnail} 
                    alt={relatedCourse.title}
                    className="w-12 h-8 rounded object-cover"
                  />
                  <span>{relatedCourse.title}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            )}

            {/* Instructions */}
            <div className="bg-yellow-950/20 border border-yellow-500/30 rounded-lg p-3 mb-5">
              <h3 className="text-lg font-semibold text-white mb-3">Instructions</h3>
              <ul className="text-white/70 space-y-2">
                <li>• Choose the best answer for each question</li>
                <li>• You can navigate between questions using the Previous/Next buttons</li>
                <li>• Your progress is saved automatically</li>
                <li>• You have {quiz.estimatedTime} minutes to complete the quiz</li>
                <li>• Click "Submit Quiz" when you're ready to see your results</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={startQuiz}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Start Quiz
              </button>
              <Link
                to="/quizzes"
                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all duration-200 text-center"
              >
                Back to Quizzes
              </Link>
            </div>
          </motion.div>
        </div>
      ) : showResults ? (
        // Quiz Results Page
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-xl p-8 text-center"
          >
            {/* Results Header */}
            <div className="mb-8">
              <div className="text-6xl mb-4">
                {score >= 80 ? '🎉' : score >= 60 ? '👍' : '📚'}
              </div>
              <h2 className="text-3xl font-semibold text-white mb-2">Quiz Completed!</h2>
              <p className="text-white/70">Here are your results for "{quiz.title}"</p>
            </div>

            {/* Score Display */}
            <div className="bg-black/30 rounded-xl p-8 mb-8">
              <div className={`text-6xl font-semibold mb-4 ${getScoreColor(score)}`}>
                {score}%
              </div>
              <div className="text-white/70 text-lg">
                You answered {Object.values(selectedAnswers).filter((answer, index) => 
                  answer === quiz.questions[index]?.correctAnswer
                ).length} out of {quiz.questions.length} questions correctly
              </div>
            </div>

            {/* Performance Message */}
            <div className="mb-8">
              {score >= 80 ? (
                <div className="text-green-400 text-lg">
                  🌟 Excellent work! You have a strong understanding of {quiz.topic}.
                </div>
              ) : score >= 60 ? (
                <div className="text-yellow-400 text-lg">
                  👏 Good job! You have a solid foundation, but there's room for improvement.
                </div>
              ) : (
                <div className="text-red-400 text-lg">
                  📖 Keep studying! Review the course materials and try again.
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setIsQuizStarted(false)
                  setShowResults(false)
                  setIsQuizCompleted(false)
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
              >
                Retake Quiz
              </button>
              {relatedCourse && (
                <Link
                  to={`/courses/${relatedCourse.id}`}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-200"
                >
                  View Course
                </Link>
              )}
              <Link
                to="/quizzes"
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all duration-200"
              >
                More Quizzes
              </Link>
            </div>
          </motion.div>
        </div>
      ) : (
        // Quiz Taking Interface
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Quiz Header */}
          <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-xl font-semibold text-white">{quiz.title}</h1>
                <p className="text-white/60">
                  Question {currentQuestion + 1} of {quiz.questions.length}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-lg font-semibold text-blue-400">{formatTime(timeLeft)}</div>
                  <div className="text-xs text-white/60">Time Left</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <div className="text-sm font-bold text-blue-400">
                    {Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-blue-950/50 rounded-full h-2 mt-4">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-xl p-8 mb-8"
          >
            <h2 className="text-xl font-semibold text-white mb-6">
              {quiz.questions[currentQuestion]?.question}
            </h2>

            <div className="space-y-4">
              {quiz.questions[currentQuestion]?.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleAnswerSelect(currentQuestion, index)}
                  className={`w-full p-4 rounded-lg border text-left transition-all duration-200 ${
                    selectedAnswers[currentQuestion] === index
                      ? 'bg-blue-600/30 border-blue-500 text-white'
                      : 'bg-black/30 border-blue-900/50 text-white/70 hover:bg-blue-950/40 hover:border-blue-700/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-blue-400 bg-blue-400'
                        : 'border-white/30'
                    }`}>
                      {selectedAnswers[currentQuestion] === index && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:opacity-50 text-white rounded-lg font-semibold transition-all duration-200"
            >
              Previous
            </button>

            <div className="flex gap-2">
              {quiz.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-8 h-8 rounded-full text-sm font-semibold transition-all duration-200 ${
                    index === currentQuestion
                      ? 'bg-blue-600 text-white'
                      : selectedAnswers[index] !== undefined
                      ? 'bg-green-600/30 border border-green-500/50 text-green-400'
                      : 'bg-gray-600/30 border border-gray-500/50 text-white/60'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {currentQuestion === quiz.questions.length - 1 ? (
              <button
                onClick={handleQuizComplete}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-200"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default QuizDetails
