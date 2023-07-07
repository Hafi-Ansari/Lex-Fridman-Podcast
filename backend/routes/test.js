require("dotenv").config({ path: "../.env" });
const { Client } = require("@elastic/elasticsearch");

const client = new Client({
  cloud: {
    id: process.env.ELASTIC_CLOUD_ID,
  },
  auth: {
    username: "elastic",
    password: process.env.ELASTIC_PASSWORD,
  },
});

async function fullTextSearch(query) {
    let { body } = await client.search({
      index: "search-podcast-all",
      body: {
        query: {
            match_phrase: { transcript: query },
        },
        size: 10
      },
    });
  
    return body.hits.hits;
  }

data = "business";
fullTextSearch(data)
  .then((results) => console.log(results))
  .catch((err) => console.error(err));
