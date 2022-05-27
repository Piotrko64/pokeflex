import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseLevel from "../pages/ChooseLevel";
import MainPage from "../pages/Main";
import QuickGame from "../pages/QuickGame";
import SingleLevel from "../pages/SingleLevel";
import MainComponentSelectTeam from "./SelectTeam/MainComponentSelectTeam";
export default function MainRouting() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/QuickGame" element={<QuickGame />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/ChooseLevel" element={<ChooseLevel />} />
                <Route path="/SelectTeam" element={<MainComponentSelectTeam />} />
                <Route path="/levels/:id" element={<SingleLevel />} />
            </Routes>
        </BrowserRouter>
    );
}
