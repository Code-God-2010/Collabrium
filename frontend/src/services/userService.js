import api from "./api.js";

export async function getUsers() {
    const res = await api.get("user/api/");
    return res;
}

export async function addUser(data) {
    const res = await api.post("user/api/", data);
    return res;
}

export async function getTeam(projectId) {
    const users = await getUsers();
    const team = users.filter((user) => {
        return user.project == projectId;
    });
    return team;
}

export async function getUserByName(name) {
    const res = await getUsers();
    const user = res.data.filter(u => u.name == name)[0];
    return user; 
}

export async function getUserById(userId) {
    const res = await api.get(`user/api/${userId}`);
    return res.data || res;
}