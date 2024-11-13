import React from 'react';

const UserProfile = () => {
  // Sample user data
  const user = { name: 'John Doe', email: 'john@example.com', profilePicture: 'https://via.placeholder.com/150' };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-500 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full p-8 bg-white shadow-xl rounded-lg animate-fadeIn transition duration-500 ease-in-out transform hover:scale-105">
        
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={user.profilePicture}
            alt="User Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800">{user.name}</h1>
            <p className="text-lg text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* User Information */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <p><strong>Full Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
            {/* More information can go here */}
          </div>
        </div>

        {/* User Stories Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Stories</h2>
          <div className="space-y-4">
            {/* Placeholder Story Cards */}
            {[1, 2, 3].map((story, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="font-semibold text-lg text-gray-800">Story Title #{story}</h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula euismod libero.
                </p>
                <button className="mt-4 text-blue-500 hover:text-blue-700 font-bold text-sm">View Story</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
