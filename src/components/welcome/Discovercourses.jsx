import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DiscoverCourses = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 }
    }
  };

  const courses = [
    {
      title: "Web Development",
      description: "Master modern full-stack development technologies",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      features: ["React & Node.js", "REST APIs", "Database Integration"]
    },
    {
      title: "Mobile Development",
      description: "Build cross-platform mobile applications",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      features: ["React Native", "iOS & Android", "Native Features"]
    },
    {
      title: "Data Science",
      description: "Transform data into actionable insights",
      image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2",
      features: ["Python & R", "Machine Learning", "Big Data Analytics"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Tech Courses
          </h2>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 w-24 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <ul className="space-y-2.5">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
            Explore our comprehensive curriculum covering AI, Cybersecurity, Cloud Computing, 
            and other transformative technologies.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-lg font-medium hover:shadow-xl transition-all duration-300"
          >
            View All Courses
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverCourses;