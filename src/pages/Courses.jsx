import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CourseList from '../components/Courses/CourseList';
import CourseDetails from '../components/Courses/CourseDetails';

const Courses = () => {
  return (
    <Routes>
      <Route path="/" element={<CourseList />} />
      <Route path=":id" element={<CourseDetails />} />
    </Routes>
  );
};

export default Courses;
