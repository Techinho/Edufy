import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CourseList from '../components/Courses/CourseList';
import CourseDetails from '../components/Courses/CourseDetails';
import Navbar from '../components/Navbar';
import CoursesByCategorie from '../components/Courses/CoursesByCategorie';

const Courses = () => {
  return (
    <Routes>
      <Route path="/" element={<CourseList />} />
      <Route path=":title" element={<CourseDetails />} />
      <Route path="/category/:category" element={<CoursesByCategorie />} />
    </Routes>
  );
};

export default Courses;
