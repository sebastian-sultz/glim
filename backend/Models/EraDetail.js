// models/EraDetail.js
const mongoose = require("mongoose");

const eraDetailSchema = new mongoose.Schema({
  title: String,
  type: { 
    type: String, 
    enum: ["movie", "music", "book"], // Added "fashion"
    required: true 
  },
  name: String,
  year: String,
  singer: String, // For music
  director: String, // For movies
  producer: String, // For movies
  runningTime: String, // For movies
  author: String, // For fashion
  style: String, // For fashion
  image: String, // URL to an image for all types
  mediaUrl: String,
  era: Number
});

const EraDetail = mongoose.model("EraDetail", eraDetailSchema);
module.exports = EraDetail;
