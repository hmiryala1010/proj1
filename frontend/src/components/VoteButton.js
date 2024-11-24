import React from 'react';

const VoteButton = ({ onVote, upvotes }) => (
  <button
    onClick={onVote}
    className="py-1 px-3 bg-yellow-300 hover:bg-yellow-400 rounded-full text-gray-800 font-bold shadow-md transition duration-200"
  >
    Upvote ({upvotes})
  </button>
);

export default VoteButton;
