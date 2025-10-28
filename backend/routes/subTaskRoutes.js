import express from "express";
import { getSubTasks, addSubTask, deleteSubTask } from "../controllers/subTaskController.js";
const router = new express.Router();

// get all sub tasks from a task with task id
router.get("/task/:taskId", getSubTasks);


// add sub task with task id
router.post("/task/:taskId", addSubTask);

// delete sub task with sub task ID
router.delete("/subTask/:subTaskId", deleteSubTask);

export default router;