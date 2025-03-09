import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <img src="/logo.svg" alt="Logo" className="w-20 h-20 mx-auto" />
        <h2 className="mt-6 text-3xl font-extrabold text-white">Sign in to your account</h2>
        <p className="mt-2 text-gray-200">Welcome back! Please enter your details.</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">
          <LoginForm />
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? 
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500"> Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;