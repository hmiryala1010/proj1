import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Sample stories for demonstration
  const stories = [
    { id: 1, title: 'Story One' },
    { id: 2, title: 'Story Two' },
    { id: 3, title: 'Story Three' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-500 min-h-screen p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-black">Your Stories</h1>
        
        {/* Link to User Profile */}
        <Link 
          to="/profile"
          className="bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:scale-105 transform transition duration-300"
        >
          View Profile
        </Link>
      </div>

      {/* Button to create a new story */}
      <Link 
        to="/create"
        className="inline-block mb-6 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
      >
        Create New Story
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {stories.map((story) => (
          <div key={story.id} className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="font-bold text-lg">{story.title}</h2>
            
            <div className="flex mt-2 space-x-4">
              <Link to={`/story/${story.id}`} className="text-blue-500 hover:text-blue-700">
                Read Story
              </Link>
              <Link to={`/edit/${story.id}`} className="text-green-500 hover:text-green-700">
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
