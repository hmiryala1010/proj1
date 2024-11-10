import React from 'react';

import { Link } from 'react-router-dom'; // Import Link
const Dashboard = () => {
  // Sample stories for demonstration
  const stories = [
    { id: 1, title: 'Story One' },
    { id: 2, title: 'Story Two' },
    { id: 3, title: 'Story Three' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Your Stories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {stories.map((story) => (
          <div key={story.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold">{story.title}</h2>
            <Link to={`/story/${story.id}`} className="text-blue-500 mt-2 inline-block">
              Read Story
            </Link>
            <Link to={`/edit/${story.id}`} className="text-green-500 mt-2 inline-block ml-4">
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
