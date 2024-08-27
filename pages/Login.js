import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../image/profileIcon.svg'; 


function Login() {
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
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6">Log In</h1>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 leading-tight" />
              <span className="text-sm">Remember Me</span>
            </label>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg">
            Log In
          </button>

          <div className="text-center mt-4">
            <p className="text-gray-600">Don’t Have an Account?</p>
            <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;