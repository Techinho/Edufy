import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizList from '../components/Quizzes/QuizList';
import QuizDetails from '../components/Quizzes/QuizDetails';

const Quizzes = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizList />} />
      <Route path=":id" element={<QuizDetails />} />
    </Routes>
  );
};

export default Quizzes;
