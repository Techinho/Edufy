import React from 'react';
import StudentDashboard from '../components/Dashboard/StudentDashboard';
import TeacherDashboard from '../components/Dashboard/TeacherDashboard';
import AdminDashboard from '../components/Dashboard/AdminDashboard';

const Dashboard = () => {
  // In a real application, you would determine the user role from authentication
  const userRole = 'student'; // This could be 'student', 'teacher', or 'admin'

  return (
    <div>
      {userRole === 'student' && <StudentDashboard />}
      {userRole === 'teacher' && <TeacherDashboard />}
      {userRole === 'admin' && <AdminDashboard />}
    </div>
  );
};

export default Dashboard;

