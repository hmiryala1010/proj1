import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-200 to-pink-500">
    <div className="text-center p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800">Oops! Page not found.</h1>
      <p className="text-gray-700 mt-4">
        It looks like the page you're trying to access doesn't exist.
      </p>
      <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold mt-4 inline-block">
        Go Back to Home
      </Link>
    </div>
  </div>
);

export default ErrorPage;
