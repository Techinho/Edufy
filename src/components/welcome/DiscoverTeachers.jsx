
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { LinkedinIcon, TwitterIcon } from "lucide-react"

export default function DiscoverTeachers() {
  const experts = [
    {
      name: "Sarah Johnson",
      role: "Web Development Expert",
      experience: "10+ years in Web Development",
      company: "Former lead developer at Tech Giant",
      quote:
        "I'm passionate about creating intuitive and performant web applications. Join me to learn the latest web technologies and best practices.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Mobile Development Expert",
      experience: "8+ years in Mobile Development",
      company: "Creator of award-winning mobile apps",
      quote:
        "Mobile apps are changing the world. I'll teach you how to build robust, scalable apps that users will love.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop",
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Data Science Expert",
      experience: "12+ years in Data Science",
      company: "AI researcher and consultant",
      quote:
        "Data is the new oil. I'll show you how to extract insights and build predictive models that drive business decisions.",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop",
      initials: "ER",
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
    <section className="py-20 relative overflow-hidden bg-white w-full">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid z-0" />

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
              Learn from Industry Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our instructors bring years of real-world experience to help you master the skills that matter
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experts.map((expert, index) => (
            <motion.div key={index} variants={item}>
              <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={expert.image || "/placeholder.svg"}
                    alt={expert.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="mb-2 bg-blue-600 hover:bg-blue-700">{expert.role}</Badge>
                    <h3 className="text-xl font-bold text-white">{expert.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-col gap-2 mb-4">
                    <p className="text-sm font-medium text-gray-900">{expert.experience}</p>
                    <p className="text-xs text-gray-600">{expert.company}</p>
                  </div>
                  <p className="text-sm text-gray-600 italic mb-6">"{expert.quote}"</p>

                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <TwitterIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

