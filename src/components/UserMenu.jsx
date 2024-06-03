import React from 'react';

const UserMenu = () => {
  const email = "mango@mail.com"; // This should be fetched from the user's info

  return (
    <div className="user-menu">
      <p>{email}</p>
      <button onClick={() => { localStorage.removeItem('token'); window.location.href = '/login'; }}>Logout</button>
    </div>
  );
};

export default UserMenu;