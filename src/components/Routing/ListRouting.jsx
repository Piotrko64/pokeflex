import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimateList } from "./ListRoutingData";

export default function ListRouting() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                {AnimateList.map((el) => (
                    <Route key={el.path} path={el.path} element={el.element} />
                ))}
            </Routes>
        </AnimatePresence>
    );
}
