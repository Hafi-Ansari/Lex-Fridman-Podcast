const mongoose = require('mongoose');

const podcastEpisodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  transcript: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

podcastEpisodeSchema.index({ transcript: 'text' }, { name: 'transcript_text' });

const PodcastEpisode = mongoose.model('PodcastEpisode', podcastEpisodeSchema, 'Podcasts');

module.exports = PodcastEpisode;
