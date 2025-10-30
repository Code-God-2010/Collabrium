import Sidebar from "../components/Sidebar";

export default function mainLayout({ children }) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main>
                {children}
            </main>
        </div>
    );
}
