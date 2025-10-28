import express from "express";
import { addMilestone, editMilestone, deleteMilestone, getassignedTo, addassignedTo, removeassignedTo, getMilestone } from "../controllers/milestoneController.js";
const router = new express.Router();

// add milestone with project id
router.post("/milestone", addMilestone);

// remove milestone with id
router.delete("/milestone/:milestoneId", deleteMilestone);

// update milestone with id
router.patch("/milestone/:milestoneId", editMilestone);

// get milestone with id
router.get("/milestone/:milestoneId", getMilestone);

// assign user to milestone with milestone id and user id
router.patch("/milestone/:milestoneId/user/:userId", addassignedTo);

// remove assigned user with milestone id and user id
router.delete("/milestone/:milestoneId/user/:userId", removeassignedTo);

// get assigned users with project id
router.get("/milestone/:milestoneId", getassignedTo);

export default router;