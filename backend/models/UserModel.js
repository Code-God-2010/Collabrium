// /models/userModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name"],
            unique: true
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
        email: {
            type: String,
            required: [true, "Please add an email"],
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid email"],
        },
        password: {
            type: String,
            required: [true, "Please add a password"],
            minlength: 6,
            select: false,
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Projekt",
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
