const db = require('../models');
const Post = db.Post;
const User = db.User;

// Get all Posts
const index = async (req, res) => {
    try {
        const data = await Post.findAll(
            {
                include: [{ model: User, as: 'post' }]
            }
        );
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get Post by ID
const getById = async (req, res) => {
    try {
        const data = await Post.findByPk(req.params.id, { include: [{ model: User, as: 'user' }] });
        if (!data) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create new Post
const store = async (req, res) => {
    try {
        const data = await Post.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update Post by ID
const updateById = async (req, res) => {
    try {
        const data = await Post.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Post not found' });
        }
        const updatedData = await data.update(req.body);
        res.status(200).json(updatedData);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete Post by ID
const deleteById = async (req, res) => {
    try {
        const data = await Post.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Post not found' });
        }
        await data.destroy();
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { index, getById, store, updateById, deleteById };
