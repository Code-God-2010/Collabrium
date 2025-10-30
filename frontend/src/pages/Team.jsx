import MainLayout from "../layouts/mainLayout";
import UserSearch from "../components/UserSearch";
import Team from "../components/Team";

export default function HomePage() {

    return(
        <MainLayout>
            <UserSearch />
            <Team />
        </MainLayout>
    );
}