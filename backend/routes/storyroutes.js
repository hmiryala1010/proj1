const express = require('express');
const router = express.Router();
const Story = require('../models/Story');
const { authenticateUser } = require('../middlewares/authMiddleware');


// Middleware to verify the author of a story
const verifyAuthor = async (req, res, next) => {
  console.log('Verifying author for story ID:', req.params.id);
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      console.log('Story not found');
      return res.status(404).json({ message: 'Story not found.' });
    }
    console.log('Story author:', story.author, 'User ID:', req.user.id);
    if (story.author !== req.user.id) {
      console.log('Unauthorized access: User is not the author');
      return res.status(403).json({ message: 'Unauthorized access.' });
    }
    next();
  } catch (err) {
    console.error('Error verifying author:', err);
    res.status(500).json({ message: 'Error verifying author.' });
  }
};

// Get all stories (public access)
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find();
    console.log('Fetched stories:', stories);
    res.json(stories); // Ensure this always returns an array
  } catch (err) {
    console.error('Error fetching stories:', err);
    res.status(500).json({ message: 'Error fetching stories', stories: [] });
  }
});

// Get a single story by ID (public access)
router.get('/:id', async (req, res) => {
  console.log('Fetching story with ID:', req.params.id);
  try {
    const story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ message: 'Story not found.' });
    res.json(story);
  } catch (err) {
    console.error('Error fetching story:', err);
    res.status(500).json({ message: 'Error fetching story.' });
  }
});

// Create a new story (requires authentication)
// Routes/storyRoutes.js
router.post('/', authenticateUser, async (req, res) => {
  const { title, description, content, tags, status } = req.body;

  if (!(title?.trim()) || !(description?.trim()) || !(content?.trim())) {
    return res.status(400).json({ 
      message: 'Title, description, and content are required.', 
      missingFields: {
        title: !!title,
        description: !!description,
        content: !!content
      }
    });
  }

  try {
    const formattedTags = Array.isArray(tags) ? tags : (tags || '').split(',').map(tag => tag.trim());

    const story = new Story({
      title,
      description,
      content,
      author: req.user.id, // Ensure req.user.id is populated
      tags: formattedTags,
      status: status || 'draft',
    });

    const newStory = await story.save();
    res.status(201).json(newStory);
  } catch (err) {
    console.error('Error creating story:', err.message);
    res.status(500).json({ message: 'Server error creating story.', error: err.message });
  }
});



// Update a story (author only, requires authentication)
router.patch('/:id', authenticateUser, verifyAuthor, async (req, res) => {
  const { title, description, content, tags, status, views, likes, contributions } = req.body;

  try {
    const updatedStory = await Story.findByIdAndUpdate(
      req.params.id,
      { title, description, content, tags, status, views, likes, contributions, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedStory) return res.status(404).json({ message: 'Story not found.' });
    res.json(updatedStory);
  } catch (err) {
    res.status(400).json({ message: 'Error updating story.' });
  }
});

// Add a contribution to a story (requires authentication)
router.post('/:id/contribute', authenticateUser, async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: 'Content is required.' });
  }

  try {
    const story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ message: 'Story not found.' });

    story.contributions.push({ content, contributor: req.user.id });
    await story.save();
    res.status(201).json(story);
  } catch (err) {
    res.status(400).json({ message: 'Error adding contribution.' });
  }
});

// Upvote a contribution (requires authentication)
router.patch('/:id/contribution/:contributionId/upvote', authenticateUser, async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ message: 'Story not found.' });

    const contribution = story.contributions.id(req.params.contributionId);
    if (!contribution) return res.status(404).json({ message: 'Contribution not found.' });

    contribution.upvotes += 1;
    await story.save();
    res.json(contribution);
  } catch (err) {
    res.status(500).json({ message: 'Error upvoting contribution.' });
  }
});

// Delete a story (author only, requires authentication)
router.delete('/:id', authenticateUser, verifyAuthor, async (req, res) => {
  try {
    const deletedStory = await Story.findByIdAndDelete(req.params.id);
    if (!deletedStory) {
      return res.status(404).json({ message: 'Story not found.' });
    }
    res.json({ message: 'Story deleted successfully.' });
  } catch (err) {
    console.error('Error deleting story:', err);
    res.status(500).json({ message: 'Error deleting story.' });
  }
});

module.exports=router;
