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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/courses/*" element={<Courses/>} />
          <Route path="/assignments" element={<AssignmentList/>} />
          <Route path="/assignments/new" element={<AssignmentForm/>} />
          <Route path="/analytics" element={<AnalyticsChart/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

