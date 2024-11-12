import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import CreateStory from './components/CreateStory';
import ReadStory from './components/ReadStory';
import UserProfile from './components/UserProfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="font-sans min-h-screen bg-gray-100">
        <nav className="bg-[#2e003e] p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-blue-300 font-extrabold text-2xl tracking-wide">
              Story Platform
            </div>
            <div className="flex space-x-4">
              <Link to="/" className="text-blue-300 hover:text-blue-500 transition duration-200">
                Home
              </Link>
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" className="text-blue-300 hover:text-blue-500 transition duration-200">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-blue-300 hover:text-blue-500 transition duration-200"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signin" className="text-blue-300 hover:text-blue-500 transition duration-200">
                    Sign In
                  </Link>
                  <Link to="/signup" className="text-blue-300 hover:text-blue-500 transition duration-200">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateStory />} />
          <Route path="/story/:id" element={<ReadStory />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
