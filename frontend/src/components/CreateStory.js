import React, { useState } from 'react';
import { createStory } from '../api'; // Import the API function

const CreateStory = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !content.trim()) {
      setError('Title, description, and content are required.');
      return;
    }

    const storyData = {
      title,
      description,
      content,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      status: status || 'draft',
    };

    try {
      // Retrieve token from localStorage
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError('You need to log in first.');
        return;
      }

      // Pass the token to the createStory function
      const response = await createStory(storyData, token);

      if (response.status === 201) {
        console.log('Story created successfully:', response.data);
        setSuccess(true);
        setTitle('');
        setDescription('');
        setContent('');
        setTags('');
        setStatus('');
      } else {
        setError(response.data.message || 'Error creating story.');
      }
    } catch (err) {
      setError('There was an error creating your story.');
      console.error('Error:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create a New Story</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && (
          <div className="text-green-500 mb-4">
            Story created successfully!
            <button
              onClick={() => setSuccess(false)}
              className="ml-2 text-blue-500 underline"
            >
              Create another
            </button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="border p-2 w-full mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="border p-2 w-full mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea
            placeholder="Write your story here..."
            className="border p-2 w-full mt-2 h-48 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            className="border p-2 w-full mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <input
            type="text"
            placeholder="Status (optional, e.g., 'draft')"
            className="border p-2 w-full mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mt-4"
          >
            Save Story
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateStory;
