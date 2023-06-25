const express = require("express");
const TwitterApi = require("twitter-api-v2").TwitterApi;
require("dotenv").config();
const app = express();

const client = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_KEY,
  appSecret: process.env.TWITTER_SECRET_KEY,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

app.get("/tweets", async (req, res) => {
  try {
    const roClient = client.readOnly; // Get a client to read data
    const user = await roClient.v2.userByUsername("elonmusk"); // Get user's details
    const { data: tweets } = await roClient.v2.userTimeline(user.data.id); // Fetch user's tweets

    res.status(200).json(tweets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching tweets" });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
