import "atropos/css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseLevel from "./pages/ChooseLevel";
import MainPage from "./pages/Main";
import QuickGame from "./pages/QuickGame";
import SingleLevel from "./pages/SingleLevel";
function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/QuickGame" element={<QuickGame />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/ChooseLevel" element={<ChooseLevel />} />
                    <Route path="/levels/:id" element={<SingleLevel />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
