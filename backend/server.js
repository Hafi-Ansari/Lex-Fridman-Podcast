const express = require('express');
require('dotenv').config();
const app = express();

const Twit = require('twit');

const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_SECRET_KEY,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Make Twitter API calls using T object

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
