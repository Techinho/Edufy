import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden w-full ">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid z-0" />

      <div className="container relative z-10 px-3 md:px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4 text-white">
                Ready to Boost Your Tech Career?
              </h2>
              <p className="text-white/80 mb-6 text-sm md:text-base">
                Join EDUFY today and access all our courses for free. Start learning and build the skills that will
                shape the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white hover:bg-gray-100 text-blue-600 text-sm md:text-base font-medium transition-colors"
                >
                  Get Started Now
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-white/30 bg-blue-900/50 text-gray-200 hover:bg-white/10 text-sm md:text-base font-medium transition-colors"
                >
                  View Course Catalog
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-full min-h-[240px] lg:min-h-[320px]"
            >
              {/* Abstract tech pattern */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                      </pattern>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <circle cx="400" cy="400" r="180" fill="url(#gradient)" />
                  </svg>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 8, 0],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -8, 0],
                  }}
                  transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                />

                <motion.div
                  className="absolute top-1/2 right-1/3 w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm rotate-45"
                  animate={{
                    rotate: [45, 90, 45],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}