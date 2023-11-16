/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const KEY = process.env.KEY;
app.use(express.json());
app.use(cors());

const url = `https://generativelanguage.googleapis.com/v1beta3/models/chat-bison-001:generateMessage?key=${KEY}`;

app.listen(PORT, () => {
  app.get("/", (req, res) => {
    res.send('Server is up and running');
  });

  app.post("/query", async (req, res) => {
    const query = req.body;

    const payload = { 
      prompt: { "messages": [{ "content": query.query }]},
      temperature: 0.1,
      candidate_count: 1
    };

    const sendQuery = async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      return response.json();
    };

    const data = await sendQuery();
    res.send(data);
  });
});
