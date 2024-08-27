import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../image/profileIcon.svg'; 

import position1Image from '../image/IT.svg';
import position2Image from '../image/Finance.svg';
import position3Image from '../image/Mark.svg';
import position4Image from '../image/Med.svg';

const jobListings = [
  {
    id: 1,
    position: "Position1",
    company: "Company1",
    salaryRange: "$50,000 - $60,000",
    location: "Colombo",
    category: "IT",
    jobType: "Full-Time",
    image: position1Image
  },
  {
    id: 2,
    position: "Position2",
    company: "Company2",
    salaryRange: "$40,000 - $50,000",
    location: "Kandy",
    category: "Finance",
    jobType: "Part-Time",
    image: position2Image
  },
  {
    id: 3,
    position: "Position3",
    company: "Company3",
    salaryRange: "$55,000 - $65,000",
    location: "Galle",
    category: "Marketing",
    jobType: "Contract",
    image: position3Image
  },
  {
    id: 4,
    position: "Position4",
    company: "Company4",
    salaryRange: "$60,000 - $70,000",
    location: "Colombo",
    category: "Healthcare",
    jobType: "Freelance",
    image: position4Image
  },
  // Add more job listings as needed
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">JobPortal.lk</div>
        <div className="space-x-4 flex items-center">
          
          <button className="hover:underline">Home</button>
          <button className="hover:underline">Post Job</button>
          <Link to="/login" className="hover:underline">Log in</Link>
          <Link to="/saved-jobs" className="hover:underline">Saved Jobs</Link>  
          <Link to="/resume-builder">
  <button className="hover:underline">Resume Builder</button>
</Link>
          
          
          <Link to="/profile">
            <img src={profileIcon} alt="Profile Icon" className="h-8 w-8 rounded-full ml-70" />
          </Link>
        
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-700 text-white py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">The Fastest Way to Find Your Destination</h1>
        <div className="flex justify-center space-x-2">
          <input type="text" placeholder="Search" className="p-2 rounded-l-lg border-2 border-gray-400" />
          <select className="p-2 border-2 border-gray-400">
            <option>Category</option>
            <option>IT</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>
          <select className="p-2 border-2 border-gray-400">
            <option>Location</option>
            <option>Colombo</option>
            <option>Kandy</option>
            <option>Galle</option>
          </select>
          <select className="p-2 border-2 border-gray-400">
            <option>Industry</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Education</option>
          </select>
          <button className="p-2 rounded-r-lg bg-red-500 hover:bg-red-600 text-white">Search</button>
        </div>
      </div>

      {/* Job Listing */}
      <div className="text-center py-6 bg-gray-200">
        <p className="text-2xl font-bold">{jobListings.length} Jobs Found for your preferred Combination</p>
      </div>

      <div className="p-6">
        {jobListings.map(job => (
          <div key={job.id} className="bg-white shadow-lg rounded-lg mb-4 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src={job.image} alt={`${job.position} logo`} className="h-17 w-20" />
              <div>
                <h2 className="text-lg font-bold">{job.position}</h2>
                <p>{job.company}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p>Salary Range: {job.salaryRange}</p>
              <p>Location: {job.location}</p>
              <p>Category: {job.category}</p>
              <p>Job Type: {job.jobType}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Full Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;