import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import NotFound from './pages/NotFound';
import AssignmentForm from './components/Assignments/AssignmentForm';
import AnalyticsChart from './components/Analytics/AnalyticsChart';
import AssignmentList from './components/Assignments/AssignmentList';
import Students from './components/Users/Students';
import BooksList from './components/Books/BooksList';
import Books from './pages/books';
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

