import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PasswordResetPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = () => {
    // Handle password reset logic (mockup example)
    console.log(`Resetting password for email: ${email}`);
    navigate('/login');
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="text-center mb-4">Reset Password</Typography>
      <Paper className="p-4 max-w-md mx-auto">
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          className="mb-4"
        />
        <Button variant="contained" color="primary" onClick={handleReset}>
          Reset Password
        </Button>
      </Paper>
    </div>
  );
};

export default PasswordResetPage;