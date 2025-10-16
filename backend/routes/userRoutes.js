import { addUser, getUsers, updateUser, getUserById, getUserByEmail, checkUserPassword, deleteUser, getUserIdByEmail } from '../controllers/userController.js';
import express from 'express';
const router = express.Router();

// create a new user
router.post('/', addUser);

// get a user by id
router.get('/:id', getUserById);

// update a user by id
router.put('/:id', updateUser);

// get all users
router.get('/', getUsers);

export default router;