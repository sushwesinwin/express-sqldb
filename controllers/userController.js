const User = require('../models/usersModel');

// views (ejs)
const index = async (_req, res) => {
    try {
        const users = await User.findAll();
        res.render('users/list', { users });
    } catch (error) {
        console.error('Error from fetching users', error);
        res.status(500).send('Error from fetching users');
    }
};

const showCreateForm = (req, res) => {
    res.render('users/create');
}

const create = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create(name, email, password);
        res.redirect('/users'); 
    } catch (error) {
        console.error('Error from creating user', error);
        res.status(500).send('Error from creating user', error);
    }
}

const showEditForm = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/edit', { user });
}

const update = async (req, res) => {
    try {
        const { name, email } = req.body;
        await User.update(req.params.id, name, email);
        res.redirect('/users')
    } catch (error) {
        console.error('Error from updating user', error);
        res.status(500).send('Error from updating user');
    }
}

const deleteUser = async (req, res) => {
    try {
        console.log(req.params.id);
        await User.delete(req.params.id);
        res.redirect('/users');
    } catch (error) {
       console.error('Error from deleting user', error);
       res.status(500).send('Error from deleting user');
    }
}

// API (JSON response)
const getUsers = async (_req, res) => {
    try {
        const user = await User.findAll();
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error from fetching users' });
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found'});
        res.json({ success: true, data: user})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching single user' });
    }
}

const createUserAPI = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required'});
        } 
        const user = await User.create(name, email, password);
        res.status(201).json({success: true, data: user})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error from creating user'});
    }
}

const updateUserAPI = async (req, res) => {
    try {
        const { name, email } = req.body;
        await User.update(req.params.id, name, email);
        res.status(200).json({ success: true, message: 'User updated successfully'})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error from updating user'});
    }
}

const deleteUserAPI = async (req, res) => {
    try {
        await User.delete(req.params.id);
        res.json({ success: true, message: 'User deleted successfully'})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error from deleting user'})
    }
}

module.exports = {
    index,
    showCreateForm,
    create,
    showEditForm,
    update,
    deleteUser,
    getUsers,
    getUser,
    createUserAPI,
    updateUserAPI,
    deleteUserAPI
}
