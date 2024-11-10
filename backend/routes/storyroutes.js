const express = require("express");
const router = express.Router();
const Story = require("./models/story");

router.post("/", async (req, res) => {
  const newStory = new Story(req.body);
  await newStory.save();
  res.status(201).json(newStory);
});

router.get("/", async (req, res) => {
  const stories = await Story.find();
  res.json(stories);
});

module.exports = router;
