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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Create a New Story</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Story Title"
          className="border p-2 w-full mt-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your story here..."
          className="border p-2 w-full mt-2 h-48"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 mt-2"
        >
          Save Story
        </button>
      </form>
    </div>
  );
};

export default CreateStory;
