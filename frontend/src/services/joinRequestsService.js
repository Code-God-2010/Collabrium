import api from "./api.js";

export async function getJoinRequests(userId) {
    const res = await api.get(`/joinrequest/api/user/${userId}`);
    return res.data;
}

export async function addJoinRequest(senderId, receiverId, projectTitle) {
    const res = await api.post(`/joinrequest/api/sender/${senderId}/receiver/${receiverId}`, 
        {
            projectTitle: projectTitle,
        }
    );
    return res.data;
}

export async function deleteJoinRequest(id) {
    const res = await api.delete(`/joinrequest/api/request/${id}`);
    return res.data || res;
}