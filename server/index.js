/* eslint-disable no-undef */
const express = require('express'); 
const cors = require('cors'); 
require('dotenv').config(); 
  
const app = express(); 
const PORT = process.env.PORT; 
const KEY = process.env.KEY; 
app.use(express.json()); 
app.use(cors()); 

const url = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${KEY}`;
console.log(url);

app.listen(PORT, () =>{
 app.get("/", async (req, res) => {
    res.send('Server is up and running')
 })
});


