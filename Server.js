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
  const page = parseInt(req.query.page) || 1; // Get the page number from the query parameters
  const limit = 10; // Number of items per page

  try {
    const categories = await Category.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const totalCategories = await Category.countDocuments();
    
    res.status(200).json({
      categories,
      totalPages: Math.ceil(totalCategories / limit),
      currentPage: page,
    });
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

// Add a new route for updating categories
app.get("/insert/categories/:categoryId", async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/insert/categories/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { category, subcategory } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { category, subcategory },
      { new: true } 
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




app.listen(2233, () => {
  console.log("Server running on port 2233");
});