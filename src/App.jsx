import "atropos/css";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { BsQuestionCircleFill } from "react-icons/bs";
import MainRouting from "./components/Routing/MainRouting";
import MainComponentGuide from "./components/Quide/MainComponentGuide";
import { useDispatch } from "react-redux";
import { addItemsFromLocalStorage } from "./_Actions/mainAction";

const Guide = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    font-size: 3rem;
    z-index: 100;
    cursor: pointer;
`;

function App() {
    const [openGuide, setOpenGuide] = useState(false);

    function handleEscape(e) {
        if (e.key === "Escape") {
            setOpenGuide(false);
        } else if (e.key === "p") {
            setOpenGuide(true);
        }
    }
    const dispatch = useDispatch();
    dispatch(addItemsFromLocalStorage());
    return (
        <div onKeyDown={handleEscape} tabIndex="-1">
            <MainRouting />
            <Guide onClick={() => setOpenGuide(!openGuide)}>
                <BsQuestionCircleFill />
            </Guide>

            {openGuide && <MainComponentGuide />}
        </div>
    );
}

export default App;
