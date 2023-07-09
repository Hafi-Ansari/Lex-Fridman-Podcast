require("dotenv").config();
const express = require("express");
const cors = require('cors');
const getVideos = require("./routes/getVideos");
const fuzzySearchRouter = require("./routes/fuzzySearch");
const phraseSearchRouter = require("./routes/phraseSearch")
const proximitySearchRouter = require("./routes/proximitySearch")
const fullTextSearchRouter = require("./routes/fullTextSearch");
const app = express();
app.use(cors());


app.use("/fullTextSearch", fullTextSearchRouter );
app.use("/fuzzySearch", fuzzySearchRouter)
app.use("/phraseSearch", phraseSearchRouter)
app.use("/proximitySearch", proximitySearchRouter)

app.listen(3000, () => console.log("Listening on port 3000"));
