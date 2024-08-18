import React from 'react';

const JobList = () => {
  const jobs = [
    { title: 'Assistant Manager - Talent Acquisition', company: 'Lalan Printing and Packaging (Pvt) Ltd' },
    { title: 'Sales Supervisor', company: 'Lanka Ice Group of Companies' },
    { title: 'Optometrists / Trainee Optometrists', company: 'D.S. Jayasinghe Opticians' },
    { title: 'Management Trainee', company: 'Cargills Retail (Pvt) Ltd' },
    { title: 'Tax Manager / Tax Executive / Tax Assistant', company: 'B. R. De Silva & Co.' },
    { title: 'Project Manager (Mechanical)', company: 'Company Name Withheld' },
    { title: 'Assistant Manager - Talent Acquisition', company: 'Lalan Printing and Packaging (Pvt) Ltd' },
    { title: 'Sales Supervisor', company: 'Lanka Ice Group of Companies' },
    { title: 'Optometrists / Trainee Optometrists', company: 'D.S. Jayasinghe Opticians' },
    { title: 'Management Trainee', company: 'Cargills Retail (Pvt) Ltd' },
    { title: 'Tax Manager / Tax Executive / Tax Assistant', company: 'B. R. De Silva & Co.' },
    { title: 'Project Manager (Mechanical)', company: 'Company Name Withheld' },
    { title: 'Assistant Manager - Talent Acquisition', company: 'Lalan Printing and Packaging (Pvt) Ltd' },
    { title: 'Sales Supervisor', company: 'Lanka Ice Group of Companies' },
    { title: 'Optometrists / Trainee Optometrists', company: 'D.S. Jayasinghe Opticians' },
    { title: 'Management Trainee', company: 'Cargills Retail (Pvt) Ltd' },
    { title: 'Tax Manager / Tax Executive / Tax Assistant', company: 'B. R. De Silva & Co.' },
    { title: 'Project Manager (Mechanical)', company: 'Company Name Withheld' },
    
  ];

  return (
    <div className="p-4">
      <h2 className="text-red-600 font-bold mb-4">Hot Jobs: 3234 new hot jobs and 1000+ more jobs</h2>
      <div className="grid grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white p-4 shadow-sm border-b hover:bg-red-200 cursor-pointer">
            <h3 className="text-red-600 font-bold">{job.title}</h3>
            <p className="text-gray-700">{job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;