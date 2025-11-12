import { FileX } from "lucide-react";
import SentJoinRequest from "./sentJoinRequests";
import ReceivedJoinRequests from "./receivedJoinRequests";

export default function Inbox() {
    return(
        <div>
            <div className={"flex flex-row"}>
                <SentJoinRequest />
                <ReceivedJoinRequests />
            </div>
        </div>
    );
}