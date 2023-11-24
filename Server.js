//Server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("./Database").connect();
const Category = require('./Category');

const app = express();
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb", extended: false }));
app.use(cors());
// Handle POST request to insert data
app.post('/insert', async (req, res) => {
  try {
    const { category, subcategory } = req.body;

    const newCategory = new Category({
      category,
      subcategory,
    });

    const savedCategory = await newCategory.save();

    res.json(savedCategory);
  } catch (error) {
    console.error('Error inserting category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


app.listen(2233, () => {
  console.log("Server running on port 2233");
});