import Project from '../models/ProjectModel';

export async function addProject(req, res) {
    try {
        const { title, description, userId } = req.body;
        const newProject = new Project(title, description, userId)
        await newProject.save();
        res.json(newProject).status(201);
    } catch(error) {
        res.json({ message: error.message }).status(400);
    }
}

export async function editProject(req, res) {
    try {
    const project = await Project.findById(req.params.id);
    const { title, description } = req.body;
    project.title = title || project.title;
    project.description = description || project.description;
    await project.save()
    res.json(project).status(200);
    } catch(error) {
        res.json({ message: error.message }).status(400);
    }
}

export async function deleteProject(req, res) {

}

export async function getCollaborators(req, res) {

}

export async function addCollaborator(req, res) {
    
}

export async function removeCollaborator(req, res) {
    
}