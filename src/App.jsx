import "atropos/css";
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { BsQuestionCircleFill } from "react-icons/bs";
import MainRouting from "./components/Routing/MainRouting";
import MainComponentGuide from "./components/Quide/MainComponentGuide";
import { useDispatch } from "react-redux";

import MainComponentVolume from "./components/SettingsComponents/SoundVolume/MainComponentVolume";
import useKeyboardGuide from "./hooks/keyboardUsing/useKeyboardGuide";
import { addItemsFromLocalStorage } from "./_Reducer/YourItems";
import Tooltip from "./components/Tooltip/tooltip";
import Tippy from "@tippyjs/react";

const Guide = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    font-size: 3rem;
    z-index: 100;
    cursor: pointer;
    z-index: 10001;
`;

function App() {
    const [openGuide, setOpenGuide] = useState(false);

    useKeyboardGuide(setOpenGuide);

    const dispatch = useDispatch();

    dispatch(addItemsFromLocalStorage());

    return (
        <Fragment>
            <MainRouting />
            <Tippy content={'Press "Q" to open'}>
                <Guide onClick={() => setOpenGuide(!openGuide)}>
                    <BsQuestionCircleFill />
                </Guide>
            </Tippy>
            <MainComponentVolume />
            {openGuide && <MainComponentGuide setOpen={() => setOpenGuide(false)} />}
        </Fragment>
    );
}

export default App;
