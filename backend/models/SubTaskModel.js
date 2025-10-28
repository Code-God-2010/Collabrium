import mongoose from "mongoose";

const subTaskSchema = new mongoose.Schema(
    {
        tile: {
            type: String,
            required: [true, "Please add a title"]
        },
        completed: {
            type: Boolean,
            default: false,
            required: [true, "Please specify if the subtask is completed"]
        }
    },
    { timestamps: true }
);

export default mongoose.model("SubTask", subTaskSchema);