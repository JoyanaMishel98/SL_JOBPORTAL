import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import profileIcon from '../image/profileIcon.svg'; 

const ResumeBuilder = () => {
    const [personalDetails, setPersonalDetails] = useState({
      name: '',
      email: '',
      phone: '',
      summary: ''
    });
  
    const [education, setEducation] = useState([{ degree: '', institution: '', duration: '', details: '' }]);
    const [skills, setSkills] = useState([]);
    const [certifications, setCertifications] = useState([{ name: '', organization: '', date: '', details: '' }]);
    const [projects, setProjects] = useState([{ title: '', description: '', technologies: '', link: '' }]);
  
    const downloadResume = () => {
      const resumeContent = `
        Name: ${personalDetails.name}
        Email: ${personalDetails.email}
        Phone: ${personalDetails.phone}
        Summary: ${personalDetails.summary}
  
        Education:
        ${education.map(edu => `
          Degree: ${edu.degree}
          Institution: ${edu.institution}
          Duration: ${edu.duration}
          Details: ${edu.details}
        `).join('\n')}
  
        Skills:
        ${skills.join(', ')}
  
        Certifications:
        ${certifications.map(cert => `
          Name: ${cert.name}
          Organization: ${cert.organization}
          Date: ${cert.date}
          Details: ${cert.details}
        `).join('\n')}
  
        Projects:
        ${projects.map(project => `
          Title: ${project.title}
          Description: ${project.description}
          Technologies: ${project.technologies}
          Link: ${project.link}
        `).join('\n')}
      `;
  
      const blob = new Blob([resumeContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.txt';
      a.click();
      URL.revokeObjectURL(url);
    };
  
    return (
      <>
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
        <div className="pt-16 flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-3xl h-[90vh] p-8 bg-white shadow-lg rounded-lg overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Resume Builder</h1>
  
            {/* Personal Details Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
              <input
                type="text"
                placeholder="Name"
                value={personalDetails.name}
                onChange={(e) => setPersonalDetails({ ...personalDetails, name: e.target.value })}
                className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                value={personalDetails.email}
                onChange={(e) => setPersonalDetails({ ...personalDetails, email: e.target.value })}
                className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={personalDetails.phone}
                onChange={(e) => setPersonalDetails({ ...personalDetails, phone: e.target.value })}
                className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
              />
              <textarea
                placeholder="Summary"
                value={personalDetails.summary}
                onChange={(e) => setPersonalDetails({ ...personalDetails, summary: e.target.value })}
                className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
              />
            </section>
  
            {/* Education Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) => {
                      const newEdu = [...education];
                      newEdu[index].degree = e.target.value;
                      setEducation(newEdu);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Institution"
                    value={edu.institution}
                    onChange={(e) => {
                      const newEdu = [...education];
                      newEdu[index].institution = e.target.value;
                      setEducation(newEdu);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Duration"
                    value={edu.duration}
                    onChange={(e) => {
                      const newEdu = [...education];
                      newEdu[index].duration = e.target.value;
                      setEducation(newEdu);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                  <textarea
                    placeholder="Details"
                    value={edu.details}
                    onChange={(e) => {
                      const newEdu = [...education];
                      newEdu[index].details = e.target.value;
                      setEducation(newEdu);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                </div>
              ))}
              <button
                onClick={() =>
                  setEducation([...education, { degree: '', institution: '', duration: '', details: '' }])
                }
                className="p-2 bg-blue-500 text-white rounded w-full"
              >
                Add Education
              </button>
            </section>
  
            {/* Skills Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <input
                type="text"
                placeholder="Add a skill"
                value={skills.join(',')}
                onChange={(e) => setSkills(e.target.value.split(','))}
                className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
              />
              <div>
                {skills.map((skill, index) => (
                  <span key={index} className="p-2 bg-gray-200 rounded inline-block mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
  
            {/* Certifications Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Certifications</h2>
              {certifications.map((cert, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    placeholder="Certification Name"
                    value={cert.name}
                    onChange={(e) => {
                      const newCerts = [...certifications];
                      newCerts[index].name = e.target.value;
                      setCertifications(newCerts);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Organization"
                    value={cert.organization}
                    onChange={(e) => {
                      const newCerts = [...certifications];
                      newCerts[index].organization = e.target.value;
                      setCertifications(newCerts);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Date"
                    value={cert.date}
                    onChange={(e) => {
                      const newCerts = [...certifications];
                      newCerts[index].date = e.target.value;
                      setCertifications(newCerts);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                  <textarea
                    placeholder="Details"
                    value={cert.details}
                    onChange={(e) => {
                      const newCerts = [...certifications];
                      newCerts[index].details = e.target.value;
                      setCertifications(newCerts);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                </div>
              ))}
              <button
                onClick={() =>
                  setCertifications([...certifications, { name: '', organization: '', date: '', details: '' }])
                }
                className="p-2 bg-blue-500 text-white rounded w-full"
              >
                Add Certification
              </button>
            </section>
  
            {/* Projects Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    placeholder="Project Title"
                    value={project.title}
                    onChange={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].title = e.target.value;
                      setProjects(newProjects);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                  <textarea
                    placeholder="Description"
                    value={project.description}
                    onChange={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].description = e.target.value;
                      setProjects(newProjects);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Technologies"
                    value={project.technologies}
                    onChange={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].technologies = e.target.value;
                      setProjects(newProjects);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Link"
                    value={project.link}
                    onChange={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].link = e.target.value;
                      setProjects(newProjects);
                    }}
                    className="p-2 border-2 border-gray-300 rounded mb-2 w-full"
                  />
                </div>
              ))}
              <button
                onClick={() =>
                  setProjects([...projects, { title: '', description: '', technologies: '', link: '' }])
                }
                className="p-2 bg-blue-500 text-white rounded w-full"
              >
                Add Project
              </button>
            </section>
  
            {/* Download Resume Button */}
            <button
              onClick={downloadResume}
              className="p-2 bg-green-500 text-white rounded w-full mt-6"
            >
              Download Resume
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default ResumeBuilder;