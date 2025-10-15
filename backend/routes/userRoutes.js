import { addUser, getUser, updateUser, getUsers } from '@controllers/userController.js';
import express from 'express';
const router = express.Router();

// create a new user
router.post('/', addUser);

// get a user by id
router.get('/:id', getUser);

// update a user by id
router.put('/:id', updateUser);

// get all users
router.get('/', getUsers);

export default router;