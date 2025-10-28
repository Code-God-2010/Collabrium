import User from "../models/userModel.js";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

export async function testAddUser() {
    try {
        const testUser = {
            name: "Test User 2",
            email: "test2@gmail.com",
            password: "test2123",
            role: "user"
        };
        const newUser = new User(testUser);
        await newUser.save();
        console.log("Test user added:", newUser);
        mongoose.connection.close();
    } catch (error) {
        console.error("Error adding test user:", error.message);
        mongoose.connection.close();
    }
};

export async function getUsers() {
    try {
        const users = await User.find().select("-password");
        console.log("Users retrieved:", users);
        mongoose.connection.close();
    } catch(error) {
        console.error("Error retrieving users:", error.message);
        mongoose.connection.close();
    }
};

getUsers();