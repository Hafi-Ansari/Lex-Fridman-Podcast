require('dotenv').config();
const express = require('express');
const getVideos = require('./routes/getVideos');
const app = express();

app.use('/getVideos', getVideos);

app.listen(3000, () => console.log('Listening on port 3000'));
