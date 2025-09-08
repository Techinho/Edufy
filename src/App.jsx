import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Quizzes from './pages/Quizzes';
import NotFound from './pages/NotFound';
import AnalyticsChart from './components/Analytics/AnalyticsChart';
import Students from './components/Users/Students';
import Books from './pages/Books';
import ContactUs from './pages/Contact';
import Assignment from './pages/Assignment';




function App() {
  return (
      
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/courses/*" element={<Courses/>} />
          <Route path="/quizzes/*" element={<Quizzes/>} />
          <Route path='/books/*' element={<Books/>} />
          <Route path="/assignments/*" element={<Assignment/>} />
          <Route path="/analytics" element={<AnalyticsChart/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      

 
  );
}


export default App;

