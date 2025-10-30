import AuthLayout from "../layouts/authLayout.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getUserByName } from "../services/userService.js";

export default function Auth() {
    const [input, setInput] = useState("");
    const [user, setUser] = useState(null);

    const handleSubmit = async () => {
        const fetchedUser = await getUserByName(input); // input enthält den eingegebenen Namen
        localStorage.setItem("user", JSON.stringify(fetchedUser)); // als JSON speichern
        setUser(fetchedUser);
    };

    return (
        <AuthLayout>
            <Link to={"/dashboard"}>Dashboard</Link>
            <input
                name="user"
                id="user"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <p>{user ? JSON.stringify(user) : "Kein User gespeichert"}</p>
        </AuthLayout>
    );
}
