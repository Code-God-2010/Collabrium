import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add a title"]
        }
        
    },
    { timestamps: true }
);

export default mongoose.model("Project", projectSchema);