// routes/eraRoutes.js
const express = require("express");
const router = express.Router();
const Era = require("../Models/Era");
const EraDetail = require("../Models/EraDetail");

// Get all eras with details
router.get("/", async (req, res) => {
  try {
    const eras = await Era.find().populate("details"); // Populate details from EraDetail collection
    res.json(eras);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get details for a specific era
router.get("/:id", async (req, res) => {
  try {
    const era = await Era.findById(req.params.id).populate("details");
    if (!era) {
      return res.status(404).json({ message: "Era not found" });
    }
    res.json(era);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
