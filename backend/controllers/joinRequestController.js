import JoinRequest from "../models/joinRequest";

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

export async function getReceivedJoinRequest(req, res) {
    try {
        const receivedJoinRequests = JoinRequest.find({receiver: req.params.userId});
        res.status(200).json(receivedJoinRequests);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

export async function getSentJoinRequests(req, res) {
    try {
        const sentJoinRequests = JoinRequest.find({sender: req.params.userId});
        res.status(200).json(sentJoinRequests);
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
        const deletedJoinRequest = JoinRequest.findByIdAndDelete(req.params.requestId);
        res.status(200).json(deletedJoinRequest);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}
