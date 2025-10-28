import Task from "../models/taskModel.js";

export async function getTasks(req, res) {
    try {
        const tasks = Task.find({ milestone: req.params.milestoneId });
        res.status(200).json(tasks);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function addTask(req, res) {
    try {
        const { title, description } = req.body;
        const newTask = new Task(
            {
                title: title,
                description: description,
                milestone: req.params.milestoneId
            }
        );
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}


export async function deleteTask(req, res) {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.taskId);
        res.status(200).json(deletedTask);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function assignTo(req, res) {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.taskId,
            {$addToSet: {assignedTo: req.params.userId}},
            {new: true}
        );
        res.status(200).json(updatedTask);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function removeAssignedUser(req, res) {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.taskId,
            {$pull: {assignedTo: req.params.userId}},
            {new: true}
        );
        res.status(200).json(updatedTask);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}