import React, { useEffect, useState } from "react";
import axios from "axios";

const StoryList = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/stories")
      .then((res) => {
        setStories(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to load stories. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-3xl bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Stories</h2>

      {isLoading && (
        <div className="flex justify-center items-center">
          <div className="border-4 border-t-4 border-blue-500 rounded-full w-10 h-10 animate-spin"></div>
        </div>
      )}

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div>
        {stories.length === 0 && !isLoading ? (
          <p className="text-gray-500">No stories available. Please create some!</p>
        ) : (
          stories.map((story) => (
            <div
              key={story._id}
              className="border-b p-4 hover:bg-gray-100 transition-all duration-300"
            >
              <h3 className="font-semibold text-xl text-gray-800">{story.title}</h3>
              <p className="text-gray-600 mt-2">{story.content || "No content available."}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


export default StoryList;
