import React, { useEffect, useState } from "react";
import axios from "axios";

const StoryList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get("/api/stories")
      .then((res) => setStories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {stories.map((story) => (
        <div key={story._id} className="border-b p-2">
          <h2 className="font-bold">{story.title}</h2>
          <p>{story.content}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
