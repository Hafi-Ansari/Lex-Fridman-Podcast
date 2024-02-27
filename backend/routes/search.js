const express = require('express');
const router = express.Router();
const PodcastEpisode = require('../models/PodcastEpisode'); // Adjust the path and model name as necessary

// New search route
router.get('/', async (req, res) => {
  try {
    const { q: searchText, page = 1, limit = 10 } = req.query; // Default to page 1, limit 10
    if (!searchText) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const searchResult = await PodcastEpisode.find({
      $text: { $search: searchText }
    }, {
      score: { $meta: 'textScore' }
    }).sort({
      score: { $meta: 'textScore' }
    }).skip((page - 1) * limit).limit(limit);

    res.json(searchResult);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'An error occurred while searching' });
  }
});

module.exports = router;
