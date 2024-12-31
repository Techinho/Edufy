import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlaylist from './VideoPlaylist';

// Mock data for courses
const courses = {
  1: {
    id: 1,
    title: 'Introduction to React',
    instructor: 'John Doe',
    description: 'Learn the basics of React, including components, state, and props.',
    duration: '4 weeks',
    level: 'Beginner',
    videos: [
      {
        title: 'React Fundamentals',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'An introduction to React and its core concepts.',
        duration: '10:30'
      },
      {
        title: 'Components and Props',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Learn how to create and use React components.',
        duration: '15:45'
      },
      {
        title: 'State and Lifecycle',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Understand state management and component lifecycle.',
        duration: '12:20'
      }
    ]
  },
  2: {
    id: 2,
    title: 'Advanced JavaScript',
    instructor: 'Jane Smith',
    description: 'Dive deep into JavaScript concepts like closures, prototypes, and async programming.',
    duration: '6 weeks',
    level: 'Advanced',
    videos: [
      {
        title: 'Closures and Prototypes',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Understanding closures and prototypes in JavaScript.',
        duration: '18:00'
      },
      {
        title: 'Asynchronous Programming',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Learn about async/await and promises.',
        duration: '20:30'
      }
    ]
  },
  3: {
    id: 3,
    title: 'Python for Beginners',
    instructor: 'Bob Johnson',
    description: 'Start your journey with Python, covering basic syntax, data structures, and functions.',
    duration: '5 weeks',
    level: 'Beginner',
    videos: [
      {
        title: 'Introduction to Python',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Getting started with Python basics.',
        duration: '15:00'
      },
      {
        title: 'Data Structures in Python',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Lists, tuples, dictionaries, and sets.',
        duration: '12:45'
      }
    ]
  },
  4: {
    id: 4,
    title: 'Data Structures and Algorithms',
    instructor: 'Alice Brown',
    description: 'Learn essential data structures and algorithms for efficient problem-solving.',
    duration: '8 weeks',
    level: 'Intermediate',
    videos: [
      {
        title: 'Arrays and Linked Lists',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Introduction to arrays and linked lists.',
        duration: '18:00'
      },
      {
        title: 'Sorting Algorithms',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Bubble sort, merge sort, and quick sort.',
        duration: '25:00'
      }
    ]
  },
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses[id];

  if (!course) {
    return <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">Course not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
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
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Duration</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{course.duration}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Level</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{course.level}</dd>
            </div>
          </dl>
        </div>
      </div>
      {course.videos && course.videos.length > 0 && <VideoPlaylist videos={course.videos} />}
    </div>
  );
};

export default CourseDetails;

