const path = require('path');
const router = require('express').Router();

// Serve the note editor page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/noteEditor.html'));
});

// Serve the home page for all other routes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;