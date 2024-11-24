import React, { useState } from 'react';

const ContributionForm = ({ storyId, onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content, storyId); // Pass contribution content and story ID to the parent function
      setContent('');
    }
  };

  return (
    <form className="mt-6 bg-white p-4 rounded-lg shadow" onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add your contribution..."
        className="w-full h-24 p-2 border rounded resize-none"
      />
      <button
        type="submit"
        className="mt-2 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Add Contribution
      </button>
    </form>
  );
};

export default ContributionForm;
