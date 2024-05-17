import React from 'react';
import Login from './Login';
import Register from './Register';

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Login />
      <Register />
    </div>
  );
};

export default HomePage;
