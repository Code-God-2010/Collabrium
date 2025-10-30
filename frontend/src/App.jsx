import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { Home } from "lucide-react";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
