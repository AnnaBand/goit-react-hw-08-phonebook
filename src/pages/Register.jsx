import React, { useState } from 'react';
import { register } from '../services/api';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importujemy useNavigate

const Register = () => {
  const navigate = useNavigate(); // Inicjalizujemy navigate
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      alert('Registration successful!');
      navigate('/login'); // Po udanej rejestracji przekierowujemy użytkownika do strony logowania
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="container">
      <Typography variant="h4" component="h1" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
      </form>
    </div>
  );
};

export default Register;