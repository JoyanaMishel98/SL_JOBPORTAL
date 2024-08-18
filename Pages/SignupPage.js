import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Handle signup logic (mockup example)
    console.log(`Signing up with email: ${email}`);
    navigate('/login');
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="text-center mb-4">Sign Up</Typography>
      <Paper className="p-4 max-w-md mx-auto">
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          className="mb-4"
        />
        <Button variant="contained" color="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </Paper>
    </div>
  );
};

export default SignupPage;