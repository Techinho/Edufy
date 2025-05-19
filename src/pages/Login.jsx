import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Mail, LockKeyhole, ArrowLeft, User, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === "checkbox" ? checked : value 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-black overflow-hidden">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-blue-400 mb-8 hover:text-blue-300 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Welcome back</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Log in to your <span className="text-gradient">account</span>
          </h1>
          
          <p className="text-base text-white/70 mb-8">
            Continue your learning journey with EDUFY
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              variant="outline"
              className="w-full flex items-center justify-center gap-2 py-6 rounded-md border-blue-500/30 text-blue-400 hover:bg-blue-950/50  hover:text-blue-400"
            >
              <User className="h-5 w-5" />
              <span>Sign in with GitHub</span>
            </Button>
          </div>

          <div className="relative flex items-center gap-4 my-8">
            <div className="flex-grow h-px bg-blue-500/20"></div>
            <span className="text-white/50 text-sm">or continue with</span>
            <div className="flex-grow h-px bg-blue-500/20"></div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white/70">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                  <Mail className="h-5 w-5" />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/30 rounded-md py-3 pl-10 pr-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-white/70">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                  <LockKeyhole className="h-5 w-5" />
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/30 rounded-md py-3 pl-10 pr-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border-blue-500/30 bg-blue-950/30 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="ml-3 block text-sm text-white/50">
                Remember me
              </label>
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-6 flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-8 text-center text-sm text-white/50">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:text-blue-300">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right side - Visual elements */}
      <div className="hidden md:block w-1/2 bg-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-90 z-10" />
          <div className="absolute inset-0 bg-grid z-0" />
          <div className="absolute inset-0 noise-bg z-0" />

          {/* Animated gradient circles */}
          <motion.div
            className="absolute -top-10 -right-10 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] rounded-full bg-blue-800/20 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center max-w-md"
          >
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Secure Login to
              <span className="text-gradient block mt-2">EDUFY Platform</span>
            </h2>
            
            <p className="text-white/70 mb-8">
              Access your personalized learning dashboard, track your progress, and continue your tech education journey.
            </p>

            <div className="space-y-6">
              {/* Testimonial */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 text-left"
              >
                <p className="text-white/80 italic mb-4">
                  "EDUFY completely transformed my career path. The courses were comprehensive and engaging, and the projects helped me build a portfolio that impressed employers."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/100?img=12"
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">Sarah Johnson</p>
                    <p className="text-white/50 text-sm">Full Stack Developer</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4">
                  <p className="text-white/50 text-sm">Students</p>
                  <p className="text-white text-2xl font-bold">25,000+</p>
                </div>
                <div className="bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4">
                  <p className="text-white/50 text-sm">Courses</p>
                  <p className="text-white text-2xl font-bold">50+</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}