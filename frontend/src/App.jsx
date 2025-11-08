import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TeamPage from "./pages/Team";
import Auth from "./pages/Auth";
import ProjectPage from "./pages/Project";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<HomePage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/project" element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
