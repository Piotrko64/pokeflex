import "atropos/css";
import Atropos from "atropos/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import QuickGame from "./pages/QuickGame";
function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/QuickGame" element={<QuickGame />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
