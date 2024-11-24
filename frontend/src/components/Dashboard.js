import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ userId }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/stories");
        if (!response.ok) throw new Error("Failed to fetch stories");

        const data = await response.json();

        // Ensure the response is an array
        setStories(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-500 min-h-screen p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-black">Your Stories</h1>
        <Link
          to="/profile"
          className="bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:scale-105 transform transition duration-300"
        >
          View Profile
        </Link>
      </div>

      {Array.isArray(stories) && stories.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-lg font-semibold mb-4">You have no stories yet.</p>
          <Link
            to="/create"
            className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
          >
            Create Your First Story
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {stories?.map((story) => (
            <div
              key={story._id}
              className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h2 className="font-bold text-lg">{story.title}</h2>
              <div className="flex mt-2 space-x-4">
                <Link
                  to={`/story/${story._id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Story
                </Link>
                {story.author === userId && (
                  <Link
                    to={`/edit/${story._id}`}
                    className="text-green-500 hover:text-green-700"
                  >
                    Edit
                  </Link>
                )}
                <Link
                  to={`/contributions/${story._id}`}
                  className="text-purple-500 hover:text-purple-700"
                >
                  View Contributions
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
