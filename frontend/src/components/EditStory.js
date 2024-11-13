import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditStory = () => {
  const { id } = useParams(); // Get the story ID from the URL
  const navigate = useNavigate();

  // State for story data, loading, and error
  const [story, setStory] = useState({ title: '', content: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch story data (simulated here for now)
  useEffect(() => {
    // Simulate an API call delay using setTimeout
    setTimeout(() => {
      try {
        // Sample logic to fetch story data by ID
        const initialStoryData = { id, title: `Story Title ${id}`, content: `Content for story ID ${id}.` };
        setStory(initialStoryData); // Set the story based on the ID
      } catch (err) {
        setError('Failed to fetch story data.');
      } finally {
        setIsLoading(false);
      }
    }, 1000); // Delay for 1 second to simulate the fetching time
  }, [id]); // Dependency array includes only `id`, since it's the dynamic value

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStory((prevStory) => ({ ...prevStory, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Here, you would typically send an API request to update the story in the backend
    console.log('Updated story data:', story);

    // Navigate back to the dashboard or display a success message
    navigate('/dashboard');
  };

  if (isLoading) return <div>Loading story data...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-500 min-h-screen p-6">
      <div className="container mx-auto bg-white rounded-lg shadow-lg max-w-4xl mt-8 p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Story</h1>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={story.title}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">Content</label>
            <textarea
              name="content"
              value={story.content}
              onChange={handleInputChange}
              rows="8"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStory;
