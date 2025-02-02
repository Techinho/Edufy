import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
import VideoPlaylist from './VideoPlaylist';
import NotFound from '../../pages/NotFound';
import Loader from '../Loader';
import CourseCard from './CourseCard';

const CourseDetails = () => {
  const { courses, fetchVideosFromPlaylist, videos, isLoading } = useContext(AppContext);
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));
  const [isEnrolled, setIsEnrolled] = useState(false);
  // const [progress] = useState(Math.floor(Math.random() * 100));

  const similarCourses = courses.filter(
    (similarCourse) => 
      similarCourse.category === course?.category && 
      similarCourse.id !== course?.id
  );
   
 useEffect(()=>{
  setIsEnrolled(false)
 },[id])

  useEffect(() => {

    if (course?.playlistId) {
      fetchVideosFromPlaylist(course.playlistId);
    }
  }, [id,course, fetchVideosFromPlaylist]);

  if (!course) return <NotFound />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full md:w-64 h-48 object-cover rounded-xl shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
                <button 
                  onClick={() => setIsEnrolled(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
                >
                  {isEnrolled ?  "watch course" : "Enroll Now"}
                </button>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{course.enrolled}+</span> students enrolled
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {course.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {course.language}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {course.level}
                </span>
              </div>
              <p className="text-gray-700 mb-6">{course.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isEnrolled ? (
          <>
            {/* Progress Bar */}
            {/* <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Course Progress</span>
                <span className="text-sm text-gray-600">{progress}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div> */}

            {/* Video Content */}
            <div className="bg-gray-100 rounded-xl shadow-sm p-2">
              <h2 className="text-center text-xl md:text-3xl  font-bold m-4">Course Content</h2>
              {isLoading ? (
                <Loader />
              ) : videos.length > 0 ? (
                <VideoPlaylist videos={videos} />
              ) : (
                <div className="text-center py-12 text-gray-500">
                  Video content coming soon!
                </div>
              )}
            </div>
          </>
        ) : (
          /* Course Overview for Unenrolled Users */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Highlights */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Build real-world applications',
                  'Master core concepts',
                  'Best practices & patterns',
                  'Debugging techniques'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-blue-500">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Stats */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Course Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Hours:</span>
                  <span className="font-medium">{course.Hours}h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-medium">{course.level}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Instructor Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">About the Instructor</h2>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
              {course.instructor[0]}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{course.instructor}</h3>
              <p className="text-gray-600 mt-2">
                {course.experience || 'Industry expert with 10+ years of experience'}
              </p>
            </div>
          </div>
        </div>

        {/* Similar Courses */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {similarCourses.slice(0, 4).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;