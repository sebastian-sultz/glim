const express = require('express');
const FutureNote = require('../Models/FutureNote'); // Assuming your FutureNote model
const ensureAuthenticated = require('../Middlewares/Auth'); // Import your existing auth file
const router = express.Router();

// POST route to save a future note
router.post('/', ensureAuthenticated, async (req, res) => {
    const { message, date } = req.body;
    const userId = req.user._id; // User ID from decoded JWT

    // Validate that the date is a future date
    const currentDate = new Date();
    if (new Date(date) <= currentDate) {
        return res.status(400).json({ message: 'The selected date must be in the future' });
    }

    try {
        const newNote = new FutureNote({
            message,
            date: new Date(date),
            user: userId, // Attach user ID to the note
        });

        await newNote.save();

        return res.status(201).json({
            message: 'Future note saved successfully!',
            data: newNote,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error while saving the note' });
    }
});

// GET route to fetch saved notes for the logged-in user
router.get('/', ensureAuthenticated, async (req, res) => {
    const userId = req.user._id; // Get user ID from JWT

    try {
        const notes = await FutureNote.find({ user: userId }).sort({ date: 1 }); // Sort by date ascending
        return res.json({ notes });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error while fetching the notes' });
    }
});

module.exports = router;
