import { useState, useEffect } from "react";
import { deleteJoinRequest, getJoinRequests } from "../services/joinRequestsService";
import { useSelector } from "react-redux";
import { getUserById } from "../services/userService";
import { Trash2 } from "lucide-react";
import MessageInfo from "./messageInfo";
import { MessageStatus } from "../../../shared";

export default function SentJoinRequests() {
    const user = useSelector((state) => state.user);
    const [joinRequests, setJoinRequests] = useState([]);
    const [usernames, setUsernames] = useState({});

    useEffect(() => {
        async function fetchRequests() {
            const data = await getJoinRequests(user._id);
            const requests = data.sentJoinRequests || [];
            setJoinRequests(requests);

            const names = {};
            for (const req of requests) {
                const receiverUser = await getUserById(req.receiver);
                names[req.receiver] = receiverUser.name;
            }
            setUsernames(names);
        }

        fetchRequests();
    }, [user._id]);
    
    function deleteRequest(id) {
        console.log(id);
        deleteJoinRequest(id);
    }

    function getMessageState(request) {
        if (request.read) {
            return MessageStatus.READ;
        } else if (request.sent) {
            return MessageStatus.DELIVERED;
        } else {
            return MessageStatus.PENDING;
        }
    }

    return (
        <div className="container-component">
            <h1 className={"font-semibold border-b mb-2"}>Gesendete Anfragen</h1>
            {joinRequests.length > 0 ? (
                <ul className={""}>
                    {joinRequests.map((request) => (
                        <li key={request._id} className={"flex flex-row gap-3 items-center border-b py-2"}>
                            <MessageInfo state={getMessageState(request)} />
                            <p className={"border-r pr-3"}>{usernames[request.receiver] || "Lade Benutzer..."} </p>
                            <p className={"border-r pr-3"}>{request.projectTitle}</p>
                            <button onClick={() => deleteRequest(request._id)}><Trash2 color="red" size={15} /></button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Keine Anfragen</p>
            )}
        </div>
    );
}
