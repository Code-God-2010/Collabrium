import api from "./api.js";

export async function createProject(title, description, userId) {
    const res = await api.post(`project/api/collaborator/${userId}`, 
        {
            title: title,
            description: description,
        }
    );
    return res;
}