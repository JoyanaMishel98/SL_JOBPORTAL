import React, { useState } from 'react';
import { Typography, Button, Card, CardContent, CardActions } from '@mui/material';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]); // This will be fetched from an API

  const handleAddJob = () => {
    // Navigate to job posting page or open a form to add a job
    console.log('Add new job');
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="text-center mb-4">Employer Dashboard</Typography>
      <Button variant="contained" color="primary" onClick={handleAddJob} className="mb-4">
        Post New Job
      </Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <Card key={job.id} className="p-4">
            <CardContent>
              <Typography variant="h6">{job.title}</Typography>
              <Typography color="textSecondary">{job.company}</Typography>
              <Typography variant="body2">{job.location}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmployerDashboard;