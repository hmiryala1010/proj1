import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

// Initialize socket connection
const socket = io("http://localhost:5000");

const StoryEditor = () => {
  const [content, setContent] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);
  const [charCount, setCharCount] = useState(0);

  // Emit typing event when content is being updated
  const handleChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    setCharCount(newContent.length);
    setIsTyping(true);
    socket.emit("updateStory", newContent);

    // Reset typing status after 1 second
    setTimeout(() => setIsTyping(false), 1000);
  };

  // Listen for updates from other users
  useEffect(() => {
    socket.on("storyUpdated", (data) => {
      setIsUpdating(true);
      setContent(data);
      setIsUpdating(false);
    });

    // Handle socket connection errors
    socket.on("connect_error", () => {
      setError("Connection failed. Please try again later.");
    });

    return () => {
      socket.off("storyUpdated");
      socket.off("connect_error");
    };
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg max-w-4xl mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Collaborative Story Editor</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="relative">
        <textarea
          className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          rows="10"
          value={content}
          onChange={handleChange}
          placeholder="Write your story here..."
        />
        {isUpdating && (
          <div className="absolute top-0 right-0 text-sm text-yellow-500 mt-2 mr-2">
            <span className="animate-pulse">Content is being updated...</span>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600 text-sm">
          {charCount} / 500 characters
        </p>
        {isTyping && (
          <p className="text-blue-500 text-sm">
            Other users are typing...
          </p>
        )}
      </div>
    </div>
  );
};

export default StoryEditor;
