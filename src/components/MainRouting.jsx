import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseLevel from "../pages/ChooseLevel";
import MainPage from "../pages/Main";
import QuickGame from "../pages/QuickGame";
import SingleLevel from "../pages/SingleLevel";
export default function MainRouting() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/QuickGame" element={<QuickGame />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/ChooseLevel" element={<ChooseLevel />} />
                <Route path="/levels/:id" element={<SingleLevel />} />
            </Routes>
        </BrowserRouter>
    );
}
