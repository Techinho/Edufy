import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/appContext';

const TeacherDashboard = () => {
  const {courses}=useContext(AppContext)
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Courses Taught</h3>
            <p className="mt-1 text-3xl font-semibold text-gray-700">{courses.length}</p>
            <Link to="/courses" className="mt-3 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Manage courses
              <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Total Students</h3>
            <p className="mt-1 text-3xl font-semibold text-gray-700">50</p>
            <Link to="/students" className="mt-3 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
              View students
              <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Pending Assignments</h3>
            <p className="mt-1 text-3xl font-semibold text-gray-700">15</p>
            <Link to="/assignments" className="mt-3 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Grade assignments
              <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;

