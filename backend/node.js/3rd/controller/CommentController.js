const db = require('../models');
const Comment = db.Comment;
const User = db.User;
const Post = db.Post;


// Get all Comments
const index = async (req, res) => {
    try {
        const data = await Comment.findAll(
            {
                include: [{ model: User, as: 'user' },
                { model: Post, as: 'post' }]
            }
        );
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get Comment by ID
const getById = async (req, res) => {
    try {
        const data = await Comment.findByPk(req.params.id,
            {
                include: [{ model: User, as: 'user' },
                { model: Post, as: 'post' }]
            });
        if (!data) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create new Comment
const store = async (req, res) => {
    try {
        const data = await Comment.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update Comment by ID
const updateById = async (req, res) => {
    try {
        const data = await Comment.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        const updatedData = await data.update(req.body);
        res.status(200).json(updatedData);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete Comment by ID
const deleteById = async (req, res) => {
    try {
        const data = await Comment.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        await data.destroy();
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { index, getById, store, updateById, deleteById };
