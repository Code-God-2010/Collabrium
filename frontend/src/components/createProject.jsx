import { useState } from "react";
import { createProject } from "../services/projectServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProject } from "../features/project/projectSlice";

export default function CreateProject({ user }) {
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log("important log");
    console.log(user);
    console.log(user._id);
    async function addProject() {
        const project = await createProject(projectTitle, projectDescription, user._id);
        dispatch(setProject(project));
        navigate("/dashboard");
    }

    return(
        <div>
            <input id="title" name="title" value={projectTitle} onChange={e => setProjectTitle(e.target.value)} />
            <input id="description" name="description" value={projectDescription} onChange={e => setProjectDescription(e.target.value)} />
            <button onClick={addProject}>Erstellen</button>
        </div>
    );
}