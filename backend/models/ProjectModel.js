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
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Please add a creator"],
            unique: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model("Project", projectSchema);