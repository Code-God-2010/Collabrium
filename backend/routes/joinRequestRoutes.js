import express from "express";
import { getJoinRequests, addJoinRequest, markAsReceived, markAsRead, deleteJoinRequest } from "../controllers/joinRequestController.js";
const router = new express.Router();

router.get("/user/:userId", getJoinRequests);

router.post("/sender/:senderId/receiver/:receiverId", addJoinRequest);

router.put("/read/request/:requestId", markAsRead);

router.put("/received/request/:requestId", markAsReceived);

router.delete("/request/:requestId", deleteJoinRequest);

export default router;