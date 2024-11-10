import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold">Welcome to the Collaborative Story Writing Platform</h1>
      <p className="mt-4 text-lg">Create, share, and collaborate on stories with others!</p>
      <div className="mt-6">
        <Link to="/create" className="bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2 text-sm md:text-base lg:text-lg">
          Create a Story
        </Link>
        <Link to="/dashboard" className="bg-green-500 text-white font-bold py-2 px-4 rounded mx-2 text-sm md:text-base lg:text-lg">
          View Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
