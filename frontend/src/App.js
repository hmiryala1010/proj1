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
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const handleSignOut = () => {
    setIsLoggedIn(false); // Update state to logged out
    // Logic to clear authentication (e.g., remove token)
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between">
            <div className="text-white font-bold text-lg">Story Platform</div>
            <div>
              <Link to="/" className="text-gray-300 hover:text-white mx-2">Home</Link>
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" className="text-gray-300 hover:text-white mx-2">Dashboard</Link>
                  <button onClick={handleSignOut} className="text-gray-300 hover:text-white mx-2">Sign Out</button>
                </>
              ) : (
                <>
                  <Link to="/signin" className="text-gray-300 hover:text-white mx-2">Sign In</Link>
                  <Link to="/signup" className="text-gray-300 hover:text-white mx-2">Sign Up</Link>
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
