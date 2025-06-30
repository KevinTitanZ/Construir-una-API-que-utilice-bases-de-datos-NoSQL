const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// Registro y login
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

// CRUD protegido (ejemplo: puedes agregar el middleware de auth si quieres protegerlos)
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);



module.exports = router;
