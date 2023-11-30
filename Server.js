//Server.js
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require("./Database").connect(); 

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({  extended: false }));
app.use(cors());

const Category = require('./userModel');

app.get("/", async (req, res) => {
  console.log("connected");
  res.status(201).json({ message: "connected" });
});

app.get("/insert/categories", async (req, res) => {
  try {
    const categories = await Category.find(); 
    res.status(200).json({ categories }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while fetching data" });
  }
});


app.post("/insert/categories", async (req, res) => {
  console.log("hit");
  const newUser = new Category({
    category: req.body.category,
    subcategory: req.body.subcategory
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({ message: "Data inserted successfully", user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while inserting data" });
  }
});

app.delete("/delete/categories", async (req, res) => {
  const categoryIds = req.body.ids;

  try {
    const deletedCategories = await Category.deleteMany({ _id: { $in: categoryIds } });

    if (!deletedCategories) {
      return res.status(404).json({ message: "Categories not found" });
    }

    res.status(200).json({ message: "Categories deleted successfully", deletedCategories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while deleting categories" });
  }
});



app.listen(2233, () => {
  console.log("Server running on port 2233");
});