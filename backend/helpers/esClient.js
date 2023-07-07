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

module.exports = client;
