import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ReadStory = () => {
  const { id } = useParams(); // Get the story ID from the URL
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/stories/${id}`);
        if (!response.ok) {
          throw new Error('Story not found');
        }
        const data = await response.json();
        setStory(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchStory();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/stories/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Error deleting story');
        }
        console.log('Story deleted');
        navigate('/dashboard'); // Redirect to the dashboard after deletion
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{story.title}</h2>
      <p>by {story.author} | {new Date(story.updatedAt).toLocaleDateString()}</p>
      <div>
        {story.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <Link to="/dashboard">← Back to Dashboard</Link>
      <button onClick={handleDelete}>Delete Story</button>
    </div>
  );
};

export default ReadStory;