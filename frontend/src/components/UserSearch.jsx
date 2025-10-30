import { useEffect, useState } from "react";
import { getUsers } from "../services/userService.js";
import "../styles/index.css";

export default function UserSearch() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            const res = await getUsers();
            setUsers(res.data || res);
        }
        fetchUsers();
    }, []);

    useEffect(() => {
        setFilteredUsers(users.filter((user) => {
            return user.name.startsWith(search);
        }));
    }, [search, users]);

    return (
        <div className={"border-2 border-blue-600 rounded-lg"}>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} className={"border-b focus:outline-0"} />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user._id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
