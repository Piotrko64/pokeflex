import "atropos/css";
import React, { useState } from "react";
import styled from "styled-components";
import { BsQuestionCircleFill } from "react-icons/bs";
import MainRouting from "./components/Routing/MainRouting";
import MainComponentGuide from "./components/Quide/MainComponentGuide";
import { useDispatch } from "react-redux";
import { addItemsFromLocalStorage } from "./_Actions/yourItemsActions";
import MainComponentVolume from "./components/SettingsComponents/SoundVolume/MainComponentVolume";
import useKeyboardGuide from "./hooks/keyboardUsing/useKeyboardGuide";

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

    useKeyboardGuide(setOpenGuide);

    const dispatch = useDispatch();

    dispatch(addItemsFromLocalStorage());

    return (
        <div>
            <MainRouting />
            <Guide onClick={() => setOpenGuide(!openGuide)}>
                <BsQuestionCircleFill />
            </Guide>
            <MainComponentVolume />
            {openGuide && <MainComponentGuide />}
        </div>
    );
}

export default App;
