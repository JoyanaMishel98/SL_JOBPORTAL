import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const JobSearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]); // This will be fetched from an API
  const navigate = useNavigate();

  const handleSearch = () => {
    // Fetch jobs based on keyword and location (mockup example)
    // Example: fetch(`api/jobs?keyword=${keyword}&location=${location}`)
    //   .then(response => response.json())
    //   .then(data => setJobs(data));
    console.log(`Searching for jobs with keyword: ${keyword} and location: ${location}`);
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="text-center mb-4">Job Search</Typography>
      <div className="flex flex-col items-center space-y-4 mb-4">
        <TextField
          label="Keyword"
          variant="outlined"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          fullWidth
        />
        <TextField
          label="Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <Card key={job.id} className="p-4">
            <CardContent>
              <Typography variant="h6">{job.title}</Typography>
              <Typography color="textSecondary">{job.company}</Typography>
              <Typography variant="body2">{job.location}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate(`/job/${job.id}`)}>View Details</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobSearchPage;