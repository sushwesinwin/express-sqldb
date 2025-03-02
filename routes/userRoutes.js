const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

console.log('User controller: ', userController); //debug


// view routes
router.get('/', userController.index);
router.get('/create', userController.showCreateForm);
router.post('/create', userController.create);
router.get('/edit/:id', userController.showEditForm);
router.post('/edit/:id', userController.update);
router.post('/delete/:id', userController.deleteUser);

// api routes
router.get('/api', userController.getUsers);
router.get('/api/:id', userController.getUser);
router.post('/api', userController.createUserAPI);
router.put('/api/:id', userController.updateUserAPI);
router.delete('/api/:id', userController.deleteUserAPI);

module.exports = router;