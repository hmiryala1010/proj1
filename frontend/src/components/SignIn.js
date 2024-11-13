import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    if (email === 'hasini.miryala123@gmail.com' && password === 'mani') {
      setIsLoggedIn(true); // Update login state
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-500 flex items-center justify-center px-4">
      <div className="max-w-md w-full p-8 bg-white shadow-xl rounded-lg animate-fadeIn transition duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Sign In</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
