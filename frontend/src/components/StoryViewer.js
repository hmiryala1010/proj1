import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContributionForm from "./ContributionForm";
import ContributionList from "./ContributionList";

const StoryViewer = ({ userId }) => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [contributions, setContributions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch story and contributions from API
    const fetchStoryData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/stories/${id}`);
        const data = await response.json();
        setStory(data.story);
        setContributions(data.contributions);
      } catch (err) {
        setError("Failed to load story data.");
      }
    };
    fetchStoryData();
  }, [id]);

  const handleContributionSubmit = async (content) => {
    try {
      const response = await fetch(`http://localhost:5000/api/stories/${id}/contributions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, userId }),
      });
      const newContribution = await response.json();
      setContributions((prev) => [...prev, newContribution]);
    } catch {
      setError("Failed to submit contribution.");
    }
  };

  const handleVote = async (contributionId) => {
    try {
      await fetch(`http://localhost:5000/api/contributions/${contributionId}/upvote`, { method: "POST" });
      setContributions((prev) =>
        prev.map((c) => (c.id === contributionId ? { ...c, upvotes: c.upvotes + 1 } : c))
      );
    } catch {
      setError("Failed to upvote contribution.");
    }
  };

  if (error) return <div>{error}</div>;
  if (!story) return <div>Loading...</div>;

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-500 min-h-screen p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
        <p>{story.content}</p>
        <h2 className="text-2xl font-semibold mt-6">Contributions</h2>
        <ContributionList
          contributions={contributions}
          onVote={handleVote}
          onEdit={(contribution) => console.log("Edit contribution:", contribution)}
        />
        <ContributionForm storyId={id} onSubmit={handleContributionSubmit} />
      </div>
    </div>
  );
};

export default StoryViewer;
