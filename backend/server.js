require("dotenv").config();
const express = require("express");
const cors = require('cors');
const getVideos = require("./routes/getVideos");
const fullTextSearchRouter = require("./routes/fullTextSearch");
const app = express();
app.use(cors());


app.use("/fullTextSearch", fullTextSearchRouter );

app.listen(3000, () => console.log("Listening on port 3000"));
