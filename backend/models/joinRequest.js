import mongoose from "mongoose";

const joinRequestSchema = new mongoose.Schema(
    {
        projectTitle: {
            type: String,
            required: [true, "Please add a project Title"],
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Please add a sender"]
        },
        receiver: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Please add a receiver"],
        },
        read: {
            type: Boolean,
            default: false,
        },
        sent: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("JoinRequest", joinRequestSchema);