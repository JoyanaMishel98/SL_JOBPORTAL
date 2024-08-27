import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../image/profileIcon.svg'; // Ensure the path is correct

function SignUp() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">JobPortal.lk</div>
        <div className="space-x-4 flex items-center">
          
          <div className="space-x-4 flex items-center">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/post-job" className="hover:underline">Post Job</Link>
            <Link to="/login" className="hover:underline">Log in</Link>
            <Link to="/saved-jobs" className="hover:underline">Saved Jobs</Link>
            <Link to="/resume-builder">
              <button className="hover:underline">Resume Builder</button>
            </Link>
            <Link to="/profile">
              <img src={profileIcon} alt="Profile Icon" className="h-8 w-8 rounded-full" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;