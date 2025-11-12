import Sidebar from "../components/Sidebar";
import Title from "../components/title";

export default function mainLayout({ children, title }) {
    return (
        <div className="flex h-screen bg-blue-200">
            <Sidebar />
            <div className={"flex flex-col gap-2 overflow-y-scroll w-full"}>
                <div className={"m-3 text-2xl font-medium"}>
                    <Title title={title} />
                </div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}
