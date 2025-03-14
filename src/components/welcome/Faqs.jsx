"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

export default function Faqs() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  const faqs = [
    {
      question: "Are the courses really 100% free?",
      answer:
        "Yes, all courses on EDUFY are completely free. We believe in making quality education accessible to everyone, regardless of their financial situation. Our platform is supported by partnerships with tech companies and educational institutions.",
    },
    {
      question: "How do I get started with a course?",
      answer:
        "Getting started is easy! Simply create a free account, browse our course catalog, and enroll in any course that interests you. Once enrolled, you'll have immediate access to all course materials, including video lectures, assignments, and resources.",
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer:
        "Yes, upon successful completion of a course, you'll receive a digital certificate that you can add to your resume or LinkedIn profile. Our certificates are recognized by many employers in the tech industry and can help boost your career prospects.",
    },
    {
      question: "Can I access the course materials offline?",
      answer:
        "While most of our content requires an internet connection, we do offer downloadable resources for many courses. This includes lecture notes, code samples, and practice exercises that you can work on offline at your own pace.",
    },
    {
      question: "How long do I have access to a course after enrolling?",
      answer:
        "Once you enroll in a course, you have lifetime access to all its materials. There are no time limits or expiration dates, allowing you to learn at your own pace and revisit the content whenever you need a refresher.",
    },
    {
      question: "Can I get help if I'm stuck on a concept or assignment?",
      answer:
        "We have a vibrant community forum where you can ask questions and get help from fellow learners and instructors. For more personalized assistance, you can also join our weekly live Q&A sessions with course instructors.",
    },
  ]

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm mb-4">
              <HelpCircle className="h-4 w-4" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our platform, courses, and learning experience
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                    openFaq === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-blue-50 rounded-b-xl border-t-0 border border-gray-100">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}