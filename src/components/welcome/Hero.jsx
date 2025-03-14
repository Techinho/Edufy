import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Code, Sparkles, Play, X } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [videoModal, setVideoModal] = useState(false)

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-12 sm:py-16 ">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90 z-10" />
        <div className="absolute inset-0 bg-grid z-0" />
        <div className="absolute inset-0 noise-bg z-0" />

        {/* Animated gradient circles - adjusted for better small screen display */}
        <motion.div
          className="absolute -top-10 -right-10 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 rounded-full bg-blue-600/20 blur-3xl"
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
          className="absolute -bottom-20 -left-20 w-80 sm:w-96 md:w-[30rem] lg:w-[40rem] h-80 sm:h-96 md:h-[30rem] lg:h-[40rem] rounded-full bg-blue-800/20 blur-3xl"
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
      <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4 sm:mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Revolutionizing Tech Education</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6">
              Learn <span className="text-gradient">Tech Skills</span> for the Future
            </h1>

            <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Master cutting-edge technologies with our comprehensive courses, expert instructors, and hands-on projects
              -<span className="text-blue-400 font-medium"> completely free</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
  <Button asChild size="lg" className="rounded-md  py-3 sm:py-4 px-6 sm:px-8 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
    <Link to="/signup" className="flex items-center gap-2 justify-center w-full h-full">
      Start Learning
      <ArrowRight className="h-4 w-4" />
    </Link>
  </Button>

  <Button
    asChild
    variant="outline"
    size="lg"
    className="rounded-md py-3 sm:py-4  px-6 sm:px-8 border-blue-500/30 text-blue-400 hover:bg-blue-950/50 w-full sm:w-auto"
  >
    <Link to="/courses" className="flex items-center gap-2 justify-center w-full h-full hover:text-gray-400">
      <Code className="h-4 w-4" />
      Explore Courses
    </Link>
  </Button>
</div>

            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8 flex-wrap sm:flex-nowrap">
              <button onClick={() => setVideoModal(true)} className="flex items-center gap-2 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Play className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm sm:text-base text-white/70 group-hover:text-white transition-colors">Watch intro video</span>
              </button>

              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black bg-gray-300 overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center text-xs text-white font-medium">
                  +2k
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* 3D-like floating elements - made more responsive */}
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full aspect-square">
              {/* Main circular element */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-4 rounded-full bg-blue-950/30 backdrop-blur-sm border border-blue-500/30 overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-30" />

                  {/* Code editor mockup */}
                  <div className="absolute inset-8 sm:inset-20 rounded-2xl bg-gray-900 shadow-lg overflow-hidden border border-gray-800">
                    <div className="h-5 sm:h-6 bg-gray-800 flex items-center px-3 gap-1.5">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500" />
                    </div>
                    <div className="p-2 sm:p-4 text-[0.6rem] sm:text-xs font-mono">
                      <div className="text-blue-400">
                        function <span className="text-yellow-300">learnToCode</span>() {`{`}
                      </div>
                      <div className="pl-2 sm:pl-4 text-white/70">const skills = [];</div>
                      <div className="pl-2 sm:pl-4 text-green-400">// Start your journey with EDUFY</div>
                      <div className="pl-2 sm:pl-4 text-white/70">
                        return <span className="text-yellow-300">success</span>;
                      </div>
                      <div className="text-blue-400">{`}`}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements - adjusted for smaller screens */}
              <motion.div
                className="absolute top-4 -right-4 sm:top-5 sm:-right-8 lg:-right-10 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg bg-blue-600 shadow-lg flex items-center justify-center text-white"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 lg:h-10 lg:w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-8 lg:-left-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg bg-blue-800 shadow-lg flex items-center justify-center text-white"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -left-8 sm:-left-12 lg:-left-16 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white shadow-lg flex items-center justify-center"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </motion.div>

              {/* Stats cards - repositioned for better small screen display */}
              <div className="absolute -bottom-16 sm:-bottom-20 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-4">
                <motion.div
                  className="bg-white rounded-lg p-2 sm:p-3 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="text-[0.6rem] sm:text-xs text-gray-600">Students</div>
                  <div className="text-sm sm:text-lg font-bold text-gray-900">25,000+</div>
                </motion.div>

                <motion.div
                  className="bg-blue-600 rounded-lg p-2 sm:p-3 shadow-lg text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="text-[0.6rem] sm:text-xs text-blue-100">Courses</div>
                  <div className="text-sm sm:text-lg font-bold">50+</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video modal - improved for mobile */}
      {videoModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setVideoModal(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 z-10"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="EDUFY Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}