import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Register from './pages/Register';
import Login from './pages/Login';
import Contacts from './pages/Contacts';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<PrivateRoute component={Contacts} />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to the Contacts App</h2>
      <p>Please <a href="/register">Register</a> or <a href="/login">Login</a> to continue.</p>
    </div>
  );
};

const PrivateRoute = ({ component: Component }) => {
  const isAuth = Boolean(localStorage.getItem('token'));
  return isAuth ? <Component /> : <Navigate to="/login" />;
};

export default App;