import MainLayout from "../layouts/mainLayout";
import { useSelector } from "react-redux";
import { MessageStatus } from "../../../shared";

export default function SettingsPage() {
    const user = useSelector((state) => state.user);
    
    return(
        <MainLayout>
            {JSON.stringify(user)}
            {MessageStatus.READ}
        </MainLayout>
    )
}