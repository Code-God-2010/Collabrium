import mongoose from "mongoose";

const milestoneSchema = new mongoose.Schema(
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
        asignedTo:[ 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        tasks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Task"
            }
        ],
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        }
    },
    { timestamps: true }
);

export default mongoose.model("Milestone", milestoneSchema);