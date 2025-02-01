import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
import CourseCard from './CourseCard';
import { motion } from 'framer-motion';

const CourseList = () => {
  const { courses,getCategoryIcon } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Unique features
  const categories = [...new Set(courses.map(course => course.category))];
  const timeBasedGreeting = () => {
    const hour = new Date().getHours();
    return hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const coursesByCategory = categories.reduce((acc, category) => {
    const categoryCourses = filteredCourses.filter(course => course.category === category);
    if (categoryCourses.length > 0) {
      acc[category] = {
        courses: categoryCourses.slice(0, 4),
        total: categoryCourses.length
      };
    }
    return acc;
  }, {});

  const hasResults = filteredCourses.length > 0;

  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 h-1 bg-gray-200 w-full z-30">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Search Bar - Adjusted for navbar */}
      <div className="sticky top-16 bg-white border-b border-gray-200 z-20">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-md sm:text-lg md:text-3xl font-semibold text-gray-900">
              {timeBasedGreeting()}
            </h1>
            <div className="relative w-[55%]">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="absolute right-3 top-2.5 text-gray-500">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Adjusted for navbar height */}
      <main className="mx-auto max-w-7xl px-4 pt-12 py-8 sm:px-6 lg:px-8" >
        {hasResults ? (
          categories.map((category) => (
            coursesByCategory[category] && (
              <motion.section 
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-12"
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {category} Courses
                    </h2>
                    <span className="text-gray-500">{getCategoryIcon(category)}</span>
                  </div>
                  <Link
                    to={`/courses/category/${category}`}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span className="mr-2">Explore All</span>
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {coursesByCategory[category].courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
                {/* Explore More Footer */}
                <div className="mt-4 text-right">
                  <Link
                    to={`/courses/category/${category}`}
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Showing {coursesByCategory[category].courses.length} of {coursesByCategory[category].total} courses
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.section>
            )
          ))
        ) : (
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="py-12 text-center"
          >
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                No courses found
              </h2>
              <p className="mb-8 text-gray-600">
                Try searching for another term or browse our categories:
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {categories.map((category) => (
                  <motion.div 
                    whileHover={{ y: -2 }}
                    key={category}
                    className="p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                  >
                    <Link
                      to={`/courses/category/${category}`}
                      className="block text-gray-700"
                    >
                      <div className="mb-1 text-lg">
                        {getCategoryIcon(category)}
                      </div>
                      <span className="text-sm font-medium">{category}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Scroll to Top Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg 
            className="h-5 w-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button>
      </main>
    </div>
  );
};

export default CourseList;