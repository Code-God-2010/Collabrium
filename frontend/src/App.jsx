import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsPage from "./pages/Settings";
import ProjectPage from "./pages/Project";
import InboxPage from "./pages/Inbox";
import HomePage from "./pages/Home";
import TeamPage from "./pages/Team";
import Auth from "./pages/Auth";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<HomePage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/inbox" element={<InboxPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
