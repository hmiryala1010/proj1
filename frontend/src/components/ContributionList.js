import React from 'react';

const ContributionList = ({ contributions, onVote, onEdit }) => {
  return (
    <div className="mt-6 space-y-4">
      {contributions.map((contribution) => (
        <div key={contribution.id} className="bg-gray-50 p-4 rounded-lg shadow">
          <p className="text-gray-700">{contribution.content}</p>
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={() => onVote(contribution.id)}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Upvote ({contribution.upvotes})
            </button>
            <button
              onClick={() => onEdit(contribution)}
              className="text-gray-600 hover:text-gray-800"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContributionList;
