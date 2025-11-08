import { useState } from "react";
import CreateProject from "./createProject";
import { useSelector } from "react-redux";

export default function ChooseProject() {
    const user = useSelector((state) => state.user);
    console.log("even more important log");
    console.log(user);
    const [createProject, setCreateProject] = useState(false);
    const [joinProject, setJoinProject] = useState(false);

    if (!createProject && !joinProject){
        return(
            <div>
                <h1>Keinem Project Beigetreten</h1>
                <button onClick={() => setCreateProject(true)}>Projekt Erstellen</button>
                <button onClick={() => setJoinProject(true)}>Projekt Beitreten</button>
            </div>
        );
    }
    
    return(
        <div>
            {createProject && <CreateProject user={user} />}
        </div>
    );
}