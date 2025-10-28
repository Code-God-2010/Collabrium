import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
    .then(() => {
        console.log("MongoDB connection successful");
        mongoose.connection.close();
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });