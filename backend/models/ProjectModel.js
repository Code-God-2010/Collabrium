import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add a title"]
        },
        description: {
            type: String
        },
        assignedTo: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
    },
    { timestamps: true }
);

export default mongoose.model("Project", projectSchema);