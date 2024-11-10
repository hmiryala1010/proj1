import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ReadStory = () => {
  const { id } = useParams(); // Get the story ID from the URL
  // Sample story content
  const story = { title: `Story Title ${id}`, content: 'This is the content of the story.' };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{story.title}</h1>
      <p className="mt-2">{story.content}</p>
      <div className="mt-4">
        <Link to={`/edit/${id}`} className="text-green-500">
          Edit Story
        </Link>
        <button className="text-red-500 ml-4" onClick={() => console.log('Delete Story')}>
          Delete Story
        </button>
      </div>
    </div>
  );
};

export default ReadStory;
