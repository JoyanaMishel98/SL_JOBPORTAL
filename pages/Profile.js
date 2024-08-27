import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../image/profileIcon.svg'; // Ensure the path is correct

function Profile() {
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
      <div className="pt-16 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Profile</h1>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Edit Profile</button>
          </div>
          
          <div className="flex space-x-8">
            <div className="w-1/4">
              <div className="bg-gray-300 h-48 w-full rounded mb-4"></div>
              <p className="text-xl font-bold">Name</p>
              <br></br>
              <p>Email Address :</p>
              <br></br>
              <p>User Details :</p>
              <br></br>
              <p>Company :</p>
              <br></br>
            </div>
            <div className="w-3/4">
              <h2 className="text-2xl font-bold mb-4">My Jobs</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-200 h-32 rounded text-center flex items-center justify-center">
                  Software Engineer
                </div>
                <div className="bg-gray-200 h-32 rounded text-center flex items-center justify-center">
                  QA Assurance Engineer
                </div>
                <div className="bg-gray-200 h-32 rounded text-center flex items-center justify-center">
                  Functional Specialist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;