const express = require("express");
const { google } = require("googleapis");
const router = express.Router();

const googleKey = process.env.YOUTUBE_KEY;

const youtube = google.youtube({
  version: "v3",
  auth: googleKey, // Replace with your Google API key
});

router.get("/", async (req, res) => {
  try {
    const response = await youtube.search.list({
      part: "snippet",
      channelId: "UCJIfeSCssxSC_Dhc5s7woww", // replace with the target channel ID
      maxResults: 10,
      order: "date", // to get the videos based on the upload date
      type: "video", // only return videos (exclude playlists etc.)
    });

    const videos = response.data.items.map((item) => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        publishedAt: item.snippet.publishedAt
      };
    });

    res.json(videos);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

module.exports = router;
