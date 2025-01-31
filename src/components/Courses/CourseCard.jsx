import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CourseCard = ({ course }) => {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="relative"
    >
      <Link to={`/courses/${course.id}`} className="block">
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
          <div className="aspect-video relative overflow-hidden">
            <img
              src={course.thumbnail || "/placeholder.svg"}
              alt={course.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <span className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium">
              ⭐ {course.rating || '4.8'}
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {course.title}
            </h3>
            <div className="flex items-center mb-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium">
                {course.instructor[0]}
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-700">
                  {course.instructor}
                </p>
                <p className="text-xs text-gray-500">
                  {course.experience || 'Industry Expert'}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-blue-600">
                {course.level}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">
                  👥 {course.enrolled}+
                </span>
                <span className="text-xs text-gray-500">
                  ⏲️ {course.Hours||"10"}h
                </span>
                <span className="text-sm font-medium text-green-600">
                  Free
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;