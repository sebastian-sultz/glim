// models/EraDetail.js
const mongoose = require("mongoose");

const eraDetailSchema = new mongoose.Schema({
  title: String,
  type: { type: String, enum: ["movie", "music"], required: true },
  name: String,
  year: String,
  singer: String,
  director: String,
  producer: String,
  runningTime: String,
  image: String,
  mediaUrl: String // You can store the URL for media (e.g., YouTube or music)
});

const EraDetail = mongoose.model("EraDetail", eraDetailSchema);
module.exports = EraDetail;
