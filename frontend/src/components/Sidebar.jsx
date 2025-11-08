import { Link, useLocation } from "react-router-dom";
import { Home, Users, LayoutDashboard, FolderKanban, Target, Settings, BrainCircuit, PanelsTopLeft, CloudLightning } from "lucide-react";
import { useState } from "react";
import "../styles/index.css";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const collabriumLink = { path: "/dashboard", label: "Collabrium", icon: <BrainCircuit size={20} /> };
    const settingsLink = { path: "/settings", label: "Einstellungen", icon: <Settings size={20} /> };
    const links = [
        { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
        { path: "/project", label: "Projekt", icon: <FolderKanban size={20} /> },
        { path: "/goals", label: "Ziele", icon: <Target size={20} /> },
        { path: "/team", label: "Team", icon: <Users size={20} /> },
    ];
    return(
        <aside
            className={`bg-blue-600 transition-[width] duration-1000 ease-in-out ${
                collapsed ? "w-16" : "w-47"
            }`}
        >
            <div className="flex flex-col h-screen">
                <div className={`flex min-h-4 ${
                    collapsed ? "justify-center" : "justify-end"
                }`}>
                    <button onClick={() => (
                        setCollapsed(!collapsed)
                    )}>
                        <PanelsTopLeft size={20} className="mx-3 mt-3"/>
                    </button>
                </div>
                <nav className="flex flex-col justify-between py-5 text-lg h-full">
                    <Link to={collabriumLink.path} className="flex flex-row gap-3 items-center transition-all py-2 hover:bg-blue-800 pl-5"><div className="w-5 shrink-0">{collabriumLink.icon}</div><span className={"overflow-hidden"}>{!collapsed && collabriumLink.label}</span></Link>
                    <div className="flex flex-col">
                        {links.map(link => {
                            const isActive = location.pathname === link.path;
                            return(
                                <Link 
                                    key={link.path} 
                                    to={link.path}
                                    className={`flex flex-row gap-3 items-center transition-colors py-2 pl-5 overflow-hidden ${
                                        isActive ? "bg-blue-800" : "hover:bg-blue-800 text-black" 
                                    }`}
                                ><div className="w-5 shrink-0">{link.icon}</div>{!collapsed && link.label}</Link>
                            );
                        })}
                    </div>
                    <Link to={settingsLink.path} className="flex flex-row gap-3 items-center transition-colors mb-1 hover:bg-blue-800 pl-5 overflow-hidden"><div className="w-5 shrink-0">{settingsLink.icon}</div>{!collapsed && settingsLink.label}</Link>
                </nav>
            </div>
        </aside>
    );
}