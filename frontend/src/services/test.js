import { getUsers, addUser, getUserByName } from "./userService.js";
import { createProject } from "./projectServices.js";

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

const user = await getUserByNameReal("Linus2");
console.log(typeof(user._id));
const project = await createProjectReal("adfgsgstgetgstgethetheeh", "Nehethethethethethettethethttheteththeur ein zweites test Projekt", user._id);
console.log(project);