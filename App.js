import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import JobList from './Components/JobList';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-grow bg-gray-50">
            <Routes>
              <Route path="/" element={<JobList />} />
              {/* Add other routes here for different pages */}
            </Routes>
            </div>
        </div>
        { <Footer /> } {}
      </div>
    </Router>
  );
}

export default App;