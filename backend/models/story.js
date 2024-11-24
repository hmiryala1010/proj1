const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  contributor: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const storySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: [String], default: [] },
  status: { type: String, default: 'draft', enum: ['draft', 'published', 'archived'] },
  contributions: [ContributionSchema],
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now },
});

// Middleware to update `updatedAt` on every save
storySchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Story', storySchema);