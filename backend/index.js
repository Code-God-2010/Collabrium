import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import subTaskRoutes from "./routes/subTaskRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import milestoneRoutes from "./routes/milestoneRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/user/api", userRoutes);
app.use("/task/api", taskRoutes);
app.use("/project/api", projectRoutes);
app.use("/subtask/api", subTaskRoutes);
app.use("/milestone/api", milestoneRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.get("/health", (req, res) => {
    res.json({ 
        status: "OK",
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
