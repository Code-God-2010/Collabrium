import JoinRequest from "../models/joinRequest.js";

export async function addJoinRequest(req, res) {
    try {
        const { senderId, receiverId } = req.params;
        const { projectTitle } = req.body;
        const newJoinRequest = new JoinRequest({
            projectTitle: projectTitle,
            sender: senderId,
            receiver: receiverId,
        });
        const savedJoinRequest = await newJoinRequest.save();
        res.status(200).json(savedJoinRequest);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function getJoinRequests(req, res) {
    try {
        const receivedJoinRequests = await JoinRequest.find({receiver: req.params.userId});
        const sentJoinRequests = await JoinRequest.find({sender: req.params.userId});
        res.status(200).json({
            receivedJoinRequests: receivedJoinRequests,
            sentJoinRequests: sentJoinRequests,
        });
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function markAsReceived(req, res) {
    try {
        const updatedJoinRequest = JoinRequest.findByIdAndUpdate(
            req.params.requestId,
            {sent: true},
            {new: true},
        );
        res.status(200).json(updatedJoinRequest);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function markAsRead(req, res) {
    try {
        const updatedJoinRequest = JoinRequest.findByIdAndUpdate(
            req.params.requestId,
            {read: true},
            {new: true},
        );
        res.status(200).json(updatedJoinRequest);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function deleteJoinRequest(req, res) {
    try {
        const deletedJoinRequest = await JoinRequest.findByIdAndDelete(req.params.requestId);
        res.status(200).json(deletedJoinRequest);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}
