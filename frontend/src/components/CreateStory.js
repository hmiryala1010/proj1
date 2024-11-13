import React, { useState } from 'react';

const CreateStory = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError('Title and content are required.');
      return;
    }
    // Logic to save story (e.g., API call)
    console.log({ title, content });
    // Redirect to dashboard or clear form
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-500 min-h-screen p-6">
      <div className="container mx-auto bg-white rounded-lg shadow-lg max-w-4xl mt-8 p-6">
        <h1 className="text-2xl font-bold mb-4">Create a New Story</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Story Title"
            className="border p-2 w-full mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Write your story here..."
            className="border p-2 w-full mt-2 h-48 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Save Story
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateStory;
