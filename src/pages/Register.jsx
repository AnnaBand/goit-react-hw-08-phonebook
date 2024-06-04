import React, { useState } from 'react';
import { register } from '../services/api';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'password' && e.target.value.length < 7) {
      setPasswordError('Password must be at least 7 characters long');
    } else {
      setPasswordError('');
    }
    if (e.target.name === 'email') {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message === 'Email address is already in use') {
        setEmailError('Email address is already in use');
      } else {
        setEmailError('Email address is already in use');
      }
    }
  };

  return (
    <div className="container">
      <Typography variant="h4" component="h1" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} required error={Boolean(emailError)} helperText={emailError} />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} required error={Boolean(passwordError)} helperText={passwordError} />
        <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
      </form>
    </div>
  );
};

export default Register;