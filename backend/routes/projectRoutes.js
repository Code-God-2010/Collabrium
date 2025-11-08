import { addProject, editProject, deleteProject, getCollaborators, addCollaborator, removeCollaborator } from "../controllers/projectController.js";
import express from "express";
const router = express.Router();

// add a new project
router.post("/collaborator/:userId", addProject);

// edit description and title of a project
router.put("/project/:projectId", editProject);

// delete Project by id
router.delete("/project/:projectId", deleteProject);

// get collaborrators by project id
router.get("/collaborator/:projectId", getCollaborators);

// add a collaborator to project by id
router.post("/project/:projectId/collaborator/:userId", addCollaborator);

// remove a collaborator from a project
router.delete("/project/:projectId/collaborator/:userId", removeCollaborator);

export default router;

