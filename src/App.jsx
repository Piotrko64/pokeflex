import "atropos/css";
import React, { useState } from "react";
import styled from "styled-components";
import { BsQuestionCircleFill } from "react-icons/bs";
import MainRouting from "./components/MainRouting";
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

    function handleEscape() {
        setOpenGuide(false);
    }
    const dispatch = useDispatch();
    dispatch(addItemsFromLocalStorage());
    return (
        <React.Fragment>
            <MainRouting />
            <Guide onClick={() => setOpenGuide(!openGuide)}>
                <BsQuestionCircleFill />
            </Guide>

            {openGuide && <MainComponentGuide handleEscape={handleEscape} />}
        </React.Fragment>
    );
}

export default App;
