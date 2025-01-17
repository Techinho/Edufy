import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
import VideoPlaylist from './VideoPlaylist';
import NotFound from '../../pages/NotFound';

const CourseDetails = () => {
  const { courses, fetchVideosFromPlaylist, videos } = useContext(AppContext);
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  useEffect(() => {
    if (course?.playlistId) {
      fetchVideosFromPlaylist(course.playlistId);
    }
  }, [course, fetchVideosFromPlaylist]);

  if (!course) {
    return <NotFound />;
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className=" bg-white overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{course.title}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{course.instructor}</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{course.description}</dd>
            </div>
          </dl>
        </div>
      </div>
      {videos.length > 0 && <VideoPlaylist videos={videos} />}
    </div>
  );
};

export default CourseDetails;
