const router = require('express').Router();
const noteStorage = require('../database/dataHandler');
// Fetch all notes
router.get('/notes', async (req, res) => {
    try {
        const notes = await noteStorage.getAllNotes();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve notes' });
    }
});

// Create a new note
router.post('/notes', async (req, res) => {
    try {
        const newNote = await noteStorage.addNote(req.body);
        res.json(newNote);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create note' });
    }
});

// Delete a note
router.delete('/notes/:id', async (req, res) => {
    try {
        await noteStorage.deleteNote(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete note' });
    }
});

module.exports = router;