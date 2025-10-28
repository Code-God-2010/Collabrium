import User from "../models/userModel.js";

export async function addUser(req, res) {
    try {
        const { name, email, password, role } = req.body;
        const newUser = new User({ name, email, password, role });
        await newUser.save();
        res.status(201).json(newUser);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
};

export async function getUsers(req, res) {
    try {
        const users = await User.find().select("-password");
        res.status(200).json(users);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
};

export async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};

export async function getUserByEmail(req, res) {
    try {
        const user = await User.findOne({ email: req.params.email }).select("-password");
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};

export async function checkUserPassword(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = (password === user.password); // Replace with bcrypt comparison in production
        if(!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Password is correct" });
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};

export async function updateUser(req, res) {
    try {
        const { name, email, role } = req.body;
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.name = name || user.name;
        user.email = email || user.email;
        user.role = role || user.role;
        await user.save();
        res.status(200).json(user);
    }
    catch(error) {
        res.status(400).json({ message: error.message });
    }
};

export async function deleteUser(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await user.remove();
        res.status(200).json({ message: "User removed" });
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};

export async function getUserIdByEmail(req, res) {
    try {
        const user = await User.findOne({ email: req.params.email });
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ id: user._id });
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};