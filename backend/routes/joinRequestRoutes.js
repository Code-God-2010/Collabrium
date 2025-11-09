import express from "express";
import { getReceivedJoinRequest, addJoinRequest, getSentJoinRequests, markAsReceived, markAsRead, deleteJoinRequest } from "../controllers/joinRequestController";
const router = new express.Router();

router.get("/received/:userId", getReceivedJoinRequest);

router.get("/sent/:userId", getSentJoinRequests);

router.post("/sender/:senderId/recceiver/:receiverId", addJoinRequest);

router.put("/read/request/:requestId", markAsRead);

router.put("/received/request/:requestId", markAsReceived);

router.delete("/request/:requestId", deleteJoinRequest);

export default router;