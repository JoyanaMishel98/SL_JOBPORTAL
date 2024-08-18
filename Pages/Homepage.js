import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to JOBPORTAL.lk</h1>
      <nav className="text-center">
        <ul className="space-y-2">
          <li><Link to="/job-search" className="text-blue-500 hover:underline">Job Search</Link></li>
          <li><Link to="/login" className="text-blue-500 hover:underline">Login</Link></li>
          <li><Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></li>
          <li><Link to="/profile" className="text-blue-500 hover:underline">Profile</Link></li>
          <li><Link to="/employer/dashboard" className="text-blue-500 hover:underline">Employer Dashboard</Link></li>
          <li><Link to="/password-reset" className="text-blue-500 hover:underline">Password Reset</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;