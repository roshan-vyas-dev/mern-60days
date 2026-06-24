const express = require("express");
const router = express.Router();
const Note = require("../model/Note");
const authMiddleware = require("../middleware/auth");

// GET all notes for logged in user
router.get("/", authMiddleware, async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST create note
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { title, content, tags } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: "Title and content required!" });
        }

        const note = new Note({
            title,
            content,
            tags: tags || [],
            userId: req.user.id
        });

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE note
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!note) {
            return res.status(404).json({ message: "Note not found!" });
        }

        res.json({ message: "Note deleted!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;