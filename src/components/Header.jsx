import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Real Estate Marketplace</h1>
        <nav>
          <Link to="/" className="px-3">Home</Link>
          <Link to="/login" className="px-3">Login</Link>
          <Link to="/register" className="px-3">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
