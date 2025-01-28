const mongoose = require('mongoose');

const futureNoteSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const FutureNote = mongoose.model('FutureNote', futureNoteSchema);

module.exports = FutureNote;
