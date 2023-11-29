const mongoose = require("mongoose");

const mongo_uri = 'mongodb://localhost:27017/logu_db';

exports.connect = () => {
  mongoose
    .connect(mongo_uri)
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((error) => {
      console.error("Database connection failed: " + error);
    });
};