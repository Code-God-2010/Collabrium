import MainLayout from "../layouts/mainLayout";
import Inbox from "../components/inbox";

export default function InboxPage() {
    return(
        <MainLayout title={"Inbox"}>
            <Inbox />
        </MainLayout>
    );
}