import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';

const Navigation = () => {
  const isAuth = Boolean(localStorage.getItem('token'));

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      {isAuth && (
        <>
          <Link to="/contacts">Contacts</Link>
          <UserMenu />
        </>
      )}
    </nav>
  );
};

export default Navigation;