import MainLayout from "../layouts/mainLayout";
import { useSelector } from "react-redux";
import ChooseProject from "../components/chooseProject";

export default function ProjectPage() {
    const project = useSelector((state) => state.project);

    return(
        <MainLayout>
            {project.title != "" ? <p>Projekt ausgewält</p> : <ChooseProject />}
        </MainLayout>
    );
}