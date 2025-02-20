import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DiscoverCourses = () => {
  const categories = [
    {
      title: "Artificial Intelligence",
      description: "Master AI, Machine Learning, and Deep Learning.",
      image: "https://source.unsplash.com/featured/400x300/?ai,neuralnetwork",
    },
    {
      title: "Cybersecurity",
      description: "Protect systems and networks from cyber threats.",
      image: "https://source.unsplash.com/featured/400x300/?security,encryption",
    },
    {
      title: "Cloud Computing",
      description: "Learn cloud platforms and scalable architectures.",
      image: "https://source.unsplash.com/featured/400x300/?cloud,datacenter",
    },
    {
      title: "Web Development",
      description: "Become a full-stack web developer.",
      image: "https://source.unsplash.com/featured/400x300/?webdevelopment,coding",
    },
    {
      title: "Mobile Development",
      description: "Create cross-platform mobile apps.",
      image: "https://source.unsplash.com/featured/400x300/?mobileapp,programming",
    },
    {
      title: "Data Science",
      description: "Analyze and visualize data effectively.",
      image: "https://source.unsplash.com/featured/400x300/?datascience,analytics",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl w-full text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-6 text-gray-900"
        >
          Explore Cutting-edge Course Categories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Dive into our professionally curated curriculum designed to propel your tech career forward
        </motion.p>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden"
          >
            <div className="relative h-52 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 leading-relaxed">{category.description}</p>
            </div>

            <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                Trending
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          to="/courses"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="mr-3">Browse All Courses</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default DiscoverCourses;