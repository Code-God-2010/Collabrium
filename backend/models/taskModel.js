import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add a title"]
        },
        description: {
            type: String
        },
        status: {
            type: String,
            enum: ["to do", "in progress", "done"],
            default: "to do"
        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        subTasks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTask"
            }
        ],
        milestone: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Milestone"
        }
    },
    { timestamps: true }
);

export default mongoose.model("Task", taskSchema);