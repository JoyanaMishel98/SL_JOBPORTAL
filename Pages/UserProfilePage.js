import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';

const UserProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    location: '',
  });

  const handleSave = () => {
    // Save profile information (mockup example)
    console.log('Profile saved:', profile);
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="text-center mb-4">User Profile</Typography>
      <Paper className="p-4 max-w-md mx-auto">
        <TextField
          label="Name"
          variant="outlined"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Email"
          variant="outlined"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Location"
          variant="outlined"
          value={profile.location}
          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
          fullWidth
          className="mb-4"
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Paper>
    </div>
  );
};

export default UserProfilePage;