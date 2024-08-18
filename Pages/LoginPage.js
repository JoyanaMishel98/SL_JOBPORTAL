import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic (mockup example)
    console.log(`Logging in with email: ${email}`);
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="text-center mb-4">Login</Typography>
      <Paper className="p-4 max-w-md mx-auto">
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
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Log In
        </Button>
      </Paper>
    </div>
  );
};

export default LoginPage;