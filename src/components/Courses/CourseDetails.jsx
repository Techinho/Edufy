import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
import VideoPlaylist from './VideoPlaylist';
import NotFound from '../../pages/NotFound';
import Loader from '../Loader';

const CourseDetails = () => {
  const { courses, fetchVideosFromPlaylist, videos,isLoading } = useContext(AppContext);
  const { title } = useParams();
  const course = courses.find((course) => course.title === title);

  useEffect(() => {
    if (course?.playlistId) {
      fetchVideosFromPlaylist(course.playlistId);
    }
  }, [course, fetchVideosFromPlaylist]);

  if (!course) {
    return <NotFound />;
  }

  // Filter similar courses based on category (excluding the current course)
  const similarCourses = courses.filter(
    (similarCourse) => similarCourse.category === course.category && similarCourse.id !== course.id
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      {/* Course Header */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
            <p className="text-sm text-gray-600 mt-2">Instructor: {course.instructor}</p>
            <p className="text-gray-700 mt-4">{course.description}</p>
          </div>
        </div>
      </div>

      {/* Video Playlist */}
      {isLoading ?<Loader/>:videos.length > 0 && (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Videos</h2>
          <VideoPlaylist videos={videos} />
        </div>
      )}

      {/* Similar Courses */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarCourses.map((similarCourse) => (
            <div
              key={similarCourse.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={similarCourse.thumbnail || '/placeholder.svg'}
                  alt={similarCourse.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{similarCourse.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Instructor: {similarCourse.instructor}</p>
                <p className="text-sm text-gray-600 mt-1">{similarCourse.category}</p>
                <button
                  className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-600 transition"
                  onClick={() => window.location.href = `/courses/${similarCourse.title}`}
                >
                  View Details
                </button>
              </div>
            </div>
          )).slice(0,4)}
        </div>
        {similarCourses.length === 0 && (
          <p className="text-gray-600 text-center mt-6">No similar courses found.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
