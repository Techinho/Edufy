
import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Globe, Lock, Server, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function DiscoverCourses() {
  const categories = [
    {
      title: "Artificial Intelligence",
      description: "Master AI, Machine Learning, and Deep Learning.",
      icon: Sparkles,
      color: "bg-blue-600",
      trending: true,
    },
    {
      title: "Cybersecurity",
      description: "Protect systems and networks from cyber threats.",
      icon: Lock,
      color: "bg-blue-700",
      trending: true,
    },
    {
      title: "Cloud Computing",
      description: "Learn cloud platforms and scalable architectures.",
      icon: Server,
      color: "bg-blue-800",
      trending: false,
    },
    {
      title: "Web Development",
      description: "Become a full-stack web developer.",
      icon: Globe,
      color: "bg-blue-900",
      trending: true,
    },
    {
      title: "Mobile Development",
      description: "Create cross-platform mobile apps.",
      icon: Code,
      color: "bg-blue-800",
      trending: false,
    },
    {
      title: "Data Science",
      description: "Analyze and visualize data effectively.",
      icon: Database,
      color: "bg-blue-700",
      trending: true,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid z-0" />
      <div className="absolute inset-0 noise-bg z-0" />

      {/* Animated gradient circles */}
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
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
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Explore <span className="text-gradient">Cutting-edge</span> Course Categories
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Dive into our professionally curated curriculum designed to propel your tech career forward
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={item} className="group">
              <div className="relative h-full overflow-hidden rounded-xl bg-blue-950/30 backdrop-blur-sm border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-950/40">
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-lg ${category.color} flex items-center justify-center mb-6`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">{category.title}</h3>
                  <p className="text-white/70 mb-6">{category.description}</p>

                  <Link to={`/courses/category/${category.title}`}className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors cursor-pointer">
                    <span>Explore courses</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {category.trending && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-blue-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                      <Sparkles className="h-3 w-3" />
                      <span>Trending</span>
                    </div>
                  </div>
                )}

                {/* Decorative corner */}
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-500/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="rounded-md h-12 sm:h-14 px-6 sm:px-8 bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/courses" className="flex items-center gap-2">
                Browse All Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

