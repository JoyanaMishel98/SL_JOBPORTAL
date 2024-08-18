import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-100 p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-red-600 text-2xl font-bold">
          <Link to="/">Job Portal.LK</Link> {/* Logo */}
        </div>
        <div className="space-x-6">
          <Link to="/post-vacancy" className="text-blue-800 hover:underline">Post Your Vacancy</Link>
          <Link to="/happy-customers" className="text-blue-800 hover:underline">Happy Customers</Link>
          <Link to="/top-employers" className="text-blue-800 hover:underline">Top Employers</Link>
          <Link to="/contact-us" className="text-blue-800 hover:underline">Contact Us</Link>
        </div>
        <div className="space-x-4">
          <button className="text-yellow-600 hover:underline">Profile</button>
          <button className="text-yellow-600 hover:underline">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;