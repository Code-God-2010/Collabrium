import { getUsers, addUser, getUserByName } from "./userService.js";
import { createProject } from "./projectServices.js";
import { addJoinRequest, getJoinRequests } from "./joinRequestsService.js";

async function addUserReal() {
    const res = addUser({name: "Franziska", password:"test2345678", email:"dfg@gmail.com"});
    return res;
}
async function getUsersReal() {
    const res = await getUsers();
    return res;
}

async function getUserByNameReal(name) {
    const res = await getUserByName(name);
    return res;
}

async function createProjectReal(title, description, userId) {
    const res = await createProject(title, description, userId);
    return res.data;
}

async function getJoinRequestsReal(userId) {
    return await getJoinRequests(userId);
}

async function addJoinRequestReal(senderId, receiverId, projectTitle) {
    const res = await addJoinRequest(senderId, receiverId, projectTitle);
    return res.data;
}

addJoinRequestReal("6903577986414577ba35ec71", "69034dd586414577ba35e8b5", "TESTTESTTESt");
getJoinRequestsReal("69034dd586414577ba35e8b5").then(data => console.log(data));
