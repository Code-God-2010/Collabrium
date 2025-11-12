import { Check, CheckCheck } from "lucide-react";
import { MessageStatus } from "../../../shared";

export default function MessageInfo({ state }) {
    if (state === MessageStatus.READ) {
        return(
            <CheckCheck color="blue" className={"pr-3"} />
        );
    } else if (state == MessageStatus.DELIVERED) {
        return(
            <CheckCheck color="gray" className={"pr-3"} />
        );
    } else {
        return(
            <Check color="gray" className={"pr-3"} />
        );
    }
}