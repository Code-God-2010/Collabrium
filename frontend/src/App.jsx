import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
