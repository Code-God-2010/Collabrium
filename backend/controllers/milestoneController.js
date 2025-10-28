import Milestone from "../models/milestoneModel.js";

export async function getMilestone(req, res) {
    try {
        const milestone = await Milestone.findById(req.params.milestoneId);
        res.status(200).json(milestone);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function addMilestone(req, res) {
    try {
        const { title, description } = req.body;
        const projectId = req.params.projectId;
        const newMilestone = new Milestone({
            title: title,
            description: description,
            project: projectId
        });
        const savedMilestone = await newMilestone.save();
        res.status(201).json(savedMilestone);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function editMilestone(req, res) {
    try {
        const milestone = await Milestone.findById(req.params.projectId);
        const { title, description, status, newUsers, newTasks } = req.body;
        milestone.title = title || milestone.title;
        milestone.description = description || milestone.description;
        milestone.status = status || milestone.status;
        if (newUsers) {
            newUsers.forEach(user => {
                if (! milestone.assignedTo.includes(user)) {
                    milestone.assignedTo.push(user);
                }
            });
        }
        if (newTasks) {
            newTasks.forEach(task => {
                if (! milestone.tasks.includes(task)) {
                    milestone.tasks.push(task);
                }
            });
        }
        await milestone.save();
        res.status(200).json(milestone);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function deleteMilestone(req, res) {
    try {
        const milestone = await Milestone.findByIdAndDelete(req.params.projectId);
        res.status(200).json(milestone);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function getassignedTo(req, res) {
    try {
        const milestone = await Milestone.findById(req.params.projectId);
        if (!milestone) return res.status(404).json({ message: "Projekt nicht gefunden" });
        res.status(200).json({ assignedTo: milestone.assignedTo });
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function addassignedTo(req, res) {
    try {
        const updatedMilestone = await Milestone.findByIdAndUpdate(
            req.params.projectId,
            {$addToSet: {assignedTo: req.params.userId}},
            {new: true}
        );
        res.status(200).json(updatedMilestone);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function removeassignedTo(req, res) {
    try {
        const { milestoneId, userId } = req.params;

        const updatedMilestone = await Milestone.findByIdAndUpdate(
            milestoneId,
            { $pull: { assignedTo: userId } },
            { new: true }
        );

        res.status(200).json(updatedMilestone);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}