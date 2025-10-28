// available methods getUserByEmail, checkUserPassword, getUserIdByEmail
import { addUser, getUsers, updateUser, getUserById, deleteUser } from "../controllers/userController.js";
import express from "express";
const router = express.Router();

// create a new user
router.post("/", addUser);

// get a user by id
router.get("/:id", getUserById);

// update a user by id
router.patch("/:id", updateUser);

// get all users
router.get("/", getUsers);

// delete a user by id
router.delete("/:id", deleteUser);

export default router;