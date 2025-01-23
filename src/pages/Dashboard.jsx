import React from 'react';
import StudentDashboard from '../components/Dashboard/StudentDashboard';
import TeacherDashboard from '../components/Dashboard/TeacherDashboard';
import AdminDashboard from '../components/Dashboard/AdminDashboard';

const Dashboard = () => {
  const userRole = 'teacher'; // This could be 'student', 'teacher', or 'admin'

  return (
    <div className='h-[100vh]'>
      {userRole === 'student' && <StudentDashboard />}
      {userRole === 'teacher' && <TeacherDashboard />}
      {userRole === 'admin' && <AdminDashboard />}
    </div>
  );
};

export default Dashboard;

