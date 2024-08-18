import React, { useState, useEffect } from 'react';
import { Typography, Button, Card, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch job details from an API (mockup example)
    // Example: fetch(`api/jobs/${id}`)
    //   .then(response => response.json())
    //   .then(data => setJob(data));
    console.log(`Fetching details for job ID: ${id}`);
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {job ? (
        <Card className="p-4">
          <CardContent>
            <Typography variant="h4" className="mb-2">{job.title}</Typography>
            <Typography variant="h6" color="textSecondary">{job.company}</Typography>
            <Typography variant="body1" className="mt-2">{job.description}</Typography>
            <Typography variant="body2" className="mt-2">Location: {job.location}</Typography>
            <Typography variant="body2" className="mt-2">Salary: {job.salary}</Typography>
            <Button variant="contained" color="primary" className="mt-4">Apply Now</Button>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6" className="text-center">Loading...</Typography>
      )}
    </div>
  );
};

export default JobDetailsPage;