import React, { useState } from 'react';
import { login } from '../services/api';
import { TextField, Button, Typography } from '@mui/material';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await login(credentials);
      localStorage.setItem('token', token);
      alert('Login successful!');
      window.location.href = '/contacts';
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div className="container">
      <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
      </form>
    </div>
  );
};

export default Login;