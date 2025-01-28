// models/Era.js
const mongoose = require("mongoose");

const eraSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  details: [{ type: mongoose.Schema.Types.ObjectId, ref: "EraDetail" }] // Reference to EraDetail
});

const Era = mongoose.model("Era", eraSchema);
module.exports = Era;
