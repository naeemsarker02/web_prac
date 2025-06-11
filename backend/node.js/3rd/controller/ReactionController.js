const db = require('../models');
const Reaction = db.Reaction;
const User = db.User;
const Post = db.Post;

// Get all Reactions
const index = async (req, res) => {
    try {
        const data = await Reaction.findAll(
            {
                include: [
                    { model: User, as: 'user', },
                    { model: Post, as: 'post', }
                ]
            }
        );
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get Reaction by ID
const getById = async (req, res) => {
    try {
        const data = await Reaction.findByPk(req.params.id,
            {
                include: [
                    { model: User, as: 'user', },
                    { model: Post, as: 'post', }
                ]
            }
        );
        if (!data) {
            return res.status(404).json({ message: 'Reaction not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create new Reaction
const store = async (req, res) => {
    try {
        const data = await Reaction.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update Reaction by ID
const updateById = async (req, res) => {
    try {
        const data = await Reaction.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Reaction not found' });
        }
        const updatedData = await data.update(req.body);
        res.status(200).json(updatedData);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete Reaction by ID
const deleteById = async (req, res) => {
    try {
        const data = await Reaction.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Reaction not found' });
        }
        await data.destroy();
        res.status(200).json({ message: 'Reaction deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { index, getById, store, updateById, deleteById };
