import React, { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

const StoryEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
    socket.emit("updateStory", e.target.value);
  };

  socket.on("storyUpdated", (data) => {
    setContent(data);
  });

  return (
    <textarea
      className="border p-2 w-full"
      value={content}
      onChange={handleChange}
      placeholder="Write your story here..."
    />
  );
};

export default StoryEditor;
