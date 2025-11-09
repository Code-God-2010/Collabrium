import { FileX } from "lucide-react";

export default function Inbox() {
    return(
        <div>
            <div className={"flex flex-row"}>
                <div className={"container-component"}>
                    <h1>Beitrits Anfragen</h1>
                </div>
                <div className={"container-component"}>
                    <h1>Gesendete Anfragen</h1>
                </div>
            </div>
        </div>
    );
}