import AuthLayout from "../layouts/authLayout.jsx";
import { Link } from "react-router-dom";
import { getUserByName } from "../services/userService.js";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/user/userSlice.js";
import { useState } from "react";

export default function Auth() {
    const [input, setInput] = useState("");
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const fetchedUser = await getUserByName(input);
        console.log(fetchedUser);
        dispatch(login(fetchedUser));
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
