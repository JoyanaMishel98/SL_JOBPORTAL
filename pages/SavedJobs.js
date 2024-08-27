import React from 'react';
import { Link } from 'react-router-dom';

function SavedJobs() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">JobPortal.lk</div>
        <div className="space-x-4">
          <button className="hover:underline">Home</button>
          <button className="hover:underline">Post Job</button>
          <Link to="/login" className="hover:underline">Log in</Link>
          <button className="hover:underline">Saved Jobs</button>
          <button className="hover:underline">Resume Builder</button>
        </div>
      </nav>

      {/* Saved Jobs Section */}
      <div className="text-center py-6 bg-gray-200">
        <p className="text-2xl font-bold">Your Saved Jobs</p>
      </div>

      <div className="p-6">
        {/* Example of a saved job */}
        <div className="bg-white shadow-lg rounded-lg mb-4 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={require('../image/Finance.svg').default} alt="Position" className="h-16 w-16 rounded" />
            <div>
              <h2 className="text-lg font-bold">Position1</h2>
              <p>Company1</p>
            </div>
          </div>
          <div className="space-y-2">
            <p>Salary Range: Rs. 60,000 - 80,000</p>
            <p>Location: Colombo</p>
            <p>Category: IT</p>
            <p>Job Type: Full-time</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Full Details</button>
        </div>
        <div className="bg-white shadow-lg rounded-lg mb-4 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={require('../image/Finance.svg').default} alt="Position" className="h-16 w-16 rounded" />
            <div>
              <h2 className="text-lg font-bold">Position2</h2>
              <p>Company1</p>
            </div>
          </div>
          <div className="space-y-2">
            <p>Salary Range: Rs. 60,000 - 80,000</p>
            <p>Location: Batticaloa</p>
            <p>Category: IT</p>
            <p>Job Type: Full-time</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Full Details</button>
        </div>
        
        

        {/* More jobs can be listed in a similar way */}
        
        {/* Related Jobs Section */}
        <div className="text-center py-6 bg-gray-200">
          <p className="text-2xl font-bold">Related Jobs</p>
        </div>

        <div className="p-6">
          {/* Example of a related job */}
          <div className="bg-white shadow-lg rounded-lg mb-4 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src={require('../image/IT.svg').default} alt="Position" className="h-16 w-16 rounded" />
              <div>
                <h2 className="text-lg font-bold">Position</h2>
                <p>Company</p>
              </div>
            </div>
            <div className="space-y-2">
              <p>Salary Range: Rs. 50,000 - 70,000</p>
              <p>Location: Kandy</p>
              <p>Category: Finance</p>
              <p>Job Type: Part-time</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Full Details</button>
          </div>

          {/* More related jobs can be listed in a similar way */}
        </div>
      </div>
    </div>
  );
}

export default SavedJobs;