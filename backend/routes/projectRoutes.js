import { addProject, editProject, deleteProject, getCollaborators, addCollaborator, removeCollaborator } from "../controllers/projectController.js";
import express from "express";
const router = express.Router();

// add a new project
router.post("/project/", addProject);

// edit description and title of a project
router.put("/project/:id", editProject);

// delete Project by id
router.delete("/project/:id", deleteProject);

// get collaborrators by project id
router.get("/project/collaborator/:id", getCollaborators);

// add a collaborator to project by id
router.post("/project/collaborator/:id", addCollaborator);

// remove a collaborator from a project
router.delete("project/collaborator/", removeCollaborator);

export default router;

