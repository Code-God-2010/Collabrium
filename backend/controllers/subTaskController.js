import SubTask from "../models/subTaskModel.js";

export async function getSubTasks(req, res) {
    try {
        const subTasks = SubTask.find({ subTask: req.params.subTaskId });
        res.status(200).json(subTasks);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function addSubTask(req, res) {
    try {
        const { title } = req.body;
        const newSubTask = new SubTask(
            {
                title: title,
                subTask: req.params.subTaskId
            }
        );
        const savedSubTask = await newSubTask.save();
        res.status(200).json(savedSubTask);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}


export async function deleteSubTask(req, res) {
    try {
        const deletedSubTask = await SubTask.findByIdAndDelete(req.params.subTaskId);
        res.status(200).json(deletedSubTask);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}