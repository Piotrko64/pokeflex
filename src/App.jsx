import "atropos/css";
import React, { useState } from "react";
import styled from "styled-components";
import { BsQuestionCircleFill } from "react-icons/bs";
import MainRouting from "./components/MainRouting";
import MainComponentGuide from "./components/Quide/MainComponentGuide";

const Guide = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    font-size: 3rem;
    z-index: 9;
    cursor: pointer;
`;

function App() {
    const [openGuide, setOpenGuide] = useState(false);
    return (
        <React.Fragment>
            <MainRouting />
            <Guide onClick={() => setOpenGuide(!openGuide)}>
                <BsQuestionCircleFill />
            </Guide>

            {openGuide && <MainComponentGuide />}
        </React.Fragment>
    );
}

export default App;
