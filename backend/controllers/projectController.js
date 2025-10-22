import Project from '../models/ProjectModel';

export async function addProject(req, res) {
    try {
        const { title, description, userId } = req.body;
        const newProject = new Project({title, description, userId})
        await newProject.save();
        res.status(200).json(newProject);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function editProject(req, res) {
    try {
    const project = await Project.findById(req.params.id);
    const { title, description } = req.body;
    project.title = title || project.title;
    project.description = description || project.description;
    await project.save()
    res.status(200).json(project);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function deleteProject(req, res) {
    try {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.status(200).json(project);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function getCollaborators(req, res) {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Projekt nicht gefunden" });
        res.status(200).json({ collaboratorsIds: project.assignedTo });
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function addCollaborator(req, res) {
    try {
        const newProject = await Project.findByIdAndUpdate(
            req.params.projectId,
            {$addToSet: {assignedTo: req.params.userId}},
            {new: true}
        );
        res.status(200).json(newProject);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function removeCollaborator(req, res) {
    try {
        const { projectId, userId } = req.body;

        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            { $pull: { assignedTo: userId } },
            { new: true }
        );

        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}