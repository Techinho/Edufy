import { motion } from "framer-motion"
import { BookOpen, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function DiscoverBooks() {
  const benefits = [
    "Handpicked selections by industry experts",
    "Covers a wide range of tech domains",
    "Updated regularly with the latest publications",
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-black w-full">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid z-0" />
      <div className="absolute inset-0 noise-bg z-0" />

      {/* Animated gradient circles */}
      <motion.div
        className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Expand Your <span className="text-gradient">Knowledge</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Curated Tech Books</h3>
            <p className="text-white/70 mb-6">
              Dive deep into cutting-edge technologies with our carefully selected collection of tech books. From
              beginner guides to advanced topics, we've got you covered.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button asChild size="lg" className="rounded-md h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/books" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Explore Tech Books
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent mix-blend-overlay" />

              {/* 3D book stack effect */}
              <div className="relative aspect-[4/3] bg-blue-950/50 backdrop-blur-sm p-8">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 perspective-1000">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    animate={{ rotateY: [0, 10, 0], rotateX: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <div className="absolute top-0 left-0 w-48 h-64 bg-blue-800 rounded shadow-xl transform rotate-6 translate-x-6 -translate-y-2">
                      <div className="absolute inset-1 bg-blue-700 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-lg">AI & ML</span>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-48 h-64 bg-blue-600 rounded shadow-xl transform -rotate-6 -translate-x-6 translate-y-2">
                      <div className="absolute inset-1 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Web Dev</span>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-48 h-64 bg-white rounded shadow-2xl">
                      <div className="absolute inset-1 bg-gray-100 rounded flex items-center justify-center p-4">
                        <div className="text-center">
                          <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <span className="text-gray-900 font-bold text-lg">EDUFY</span>
                          <p className="text-xs text-gray-600 mt-1">Tech Library</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-10 right-10 w-12 h-12 rounded-full bg-blue-400/20 backdrop-blur-sm flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <BookOpen className="h-6 w-6 text-blue-400" />
                </motion.div>

                <motion.div
                  className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-blue-600/20 backdrop-blur-sm flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                >
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
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

