import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/appContext';


const CourseList = () => {

  const {courses}=useContext(AppContext)
  return (
    <div className="max-w-5xl sm:mx-auto mx-3  py-4 sm:px-4 lg:px-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Course List</h1>
      <div className="course  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className=" bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 hover:translate-y-1 transition-transform duration-300 ease-out group"
          >
            <Link to={`/courses/${course.id}`} className="block">
              <div className="relative overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={`${course.title} thumbnail`}
                  className="w-full h-32 object-cover group-hover:brightness-90 transition duration-300"
                />
              </div>
              <div className="p-3">
                <h2 className="text-md font-bold text-indigo-600  group-hover:text-indigo-800 transition-colors duration-300">
                  {course.title}
                </h2>
                <p className="text-xs text-gray-500 mt-1 truncate">{course.instructor}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full">
                    {course.enrolled} enrolled
                  </span>
                  <span className="text-xs text-gray-500">{course.videoCount} videos</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs bg-blue-100 text-blue-800 py-0.5 px-2 rounded-full">
                    {course.category}
                  </span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                    {course.language}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
