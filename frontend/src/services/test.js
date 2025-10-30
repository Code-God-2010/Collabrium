import { getUsers, addUser, getUserByName } from "./userService.js";

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

getUserByNameReal("Linus2").then(value => console.log(value));