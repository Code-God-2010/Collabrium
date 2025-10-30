import { useState, useEffect } from "react";
import { getTeam } from "../services/userService";

export default function Team() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        getTeam().then((res) => setTeam(res));
    }, []);

    return(
        <ul>
            {team.map((user) => {
                <li>{user.name}</li>
            })}
        </ul>
    );
}