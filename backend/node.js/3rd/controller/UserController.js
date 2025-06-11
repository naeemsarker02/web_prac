const db = require('../models');
const User = db.User;

// Get all users
const index = async (req, res) => {
    try {
        const data = await User.findAll();
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get user by ID
const getById = async (req, res) => {
    try {
        const data = await User.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create new user
const store = async (req, res) => {
    try {
        const data = await User.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update user by ID
const updateById = async (req, res) => {
    try {
        const data = await User.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'User not found' });
        }
        const updatedData = await data.update(req.body);
        res.status(200).json(updatedData);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete user by ID
const deleteById = async (req, res) => {
    try {
        const data = await User.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'User not found' });
        }
        await data.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { index, getById, store, updateById, deleteById };
