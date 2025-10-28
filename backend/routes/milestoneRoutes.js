import express from "express";
import { addMilestone, editMilestone, deleteMilestone, getAsignedTo, addAsignedTo, removeAsignedTo, getMilestone } from "../controllers/milestoneController.js";
const router = new express.Router();

// add milestone with project id
router.post("/milestone", addMilestone);

// remove milestone with id
router.delete("/milestone/:milestoneId", deleteMilestone);

// update milestone with id
router.patch("/milestone/:milestoneId", editMilestone);

// get milestone with id
router.get("/milestone/:milestoneId", getMilestone);

// asign user to milestone with milestone id and user id
router.patch("/milestone/:milestoneId/user/:userId", addAsignedTo);

// remove asigned user with milestone id and user id
router.delete("/milestone/:milestoneId/user/:userId", removeAsignedTo);

// get asigned users with project id
router.get("/milestone/:milestoneId", getAsignedTo);

export default router;