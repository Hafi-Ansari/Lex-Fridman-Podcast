const express = require("express");
const router = express.Router();

const esClient = require("../helpers/esClient");

router.get("/", async (req, res) => {
  try {
    const query = req.query.q;
    let { body } = await esClient.search({
      index: "search-podcast-all",
      body: {
        query: {
          match_phrase: { transcript: query },
        },
        size: 99,
      },
    });
    res.json(body.hits.hits);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while searching" });
  }
});

module.exports = router;
