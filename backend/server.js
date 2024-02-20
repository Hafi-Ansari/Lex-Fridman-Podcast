require('dotenv').config()
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose'); 

const getVideos = require("./routes/getVideos");
const fuzzySearchRouter = require("./routes/fuzzySearch");
const phraseSearchRouter = require("./routes/phraseSearch");
const proximitySearchRouter = require("./routes/proximitySearch");
const fullTextSearchRouter = require("./routes/fullTextSearch");
const searchRouter = require("./routes/search");

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB:", err));

app.use("/fullTextSearch", fullTextSearchRouter );
app.use("/fuzzySearch", fuzzySearchRouter);
app.use("/phraseSearch", phraseSearchRouter);
app.use("/proximitySearch", proximitySearchRouter);
app.use("/search", searchRouter);

// Listener
app.listen(3000, () => console.log("Listening on port 3000"));
