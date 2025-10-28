import express from "express";
import { getTasks, addTask, deleteTask, assignTo, removeAssignedUser } from "../controllers/taskController.js";
const router = new express.Router();

// get all tasks from a milestone with milestone id
router.get("/milestone/:milestoneId", getTasks);


// add task with milestone id
router.post("/milestone/:milestoneId", addTask);

// delete task with task ID
router.delete("/task/:taskId", deleteTask);

// asign a user to a task with user and task ID
router.put("/task/:taskId/user/:userId", assignTo);

// remove a user from a task with task and user ID#
router.delete("/task/:taskId/user/:userId", removeAssignedUser);

export default router;