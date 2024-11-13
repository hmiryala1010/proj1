import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ReadStory = () => {
  const { id } = useParams(); // Get the story ID from the URL
  const navigate = useNavigate();

  // Sample story data with additional information
  const story = {
    title: `Story Title ${id}`,
    content: 'This is the detailed content of the story. Here you can add more text to make it realistic and engaging.',
    author: 'John Doe',
    date: 'November 12, 2024'
  };

  const handleDelete = () => {
    // Confirmation prompt before delete
    if (window.confirm('Are you sure you want to delete this story?')) {
      console.log('Story deleted');
      navigate('/dashboard'); // Redirect to the dashboard after deletion
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-500 min-h-screen p-6 md:p-10">
      <div className="container mx-auto bg-white rounded-lg shadow-lg max-w-4xl mt-8 p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-blue-500">{story.title}</h1>
          <p className="text-sm text-gray-600 mt-2">
            by <span className="font-semibold text-gray-800">{story.author}</span> | {story.date}
          </p>
        </div>

        <div className="text-gray-800 leading-relaxed text-base md:text-lg mt-4 space-y-4">
          {story.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <Link to="/dashboard" className="text-blue-500 font-semibold hover:underline">
            &larr; Back to Dashboard
          </Link>

          <div>
            <Link
              to={`/edit/${id}`}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4 transition duration-300"
            >
              Edit Story
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Delete Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadStory;
