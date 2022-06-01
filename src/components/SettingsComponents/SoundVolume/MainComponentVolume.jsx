import React from "react";
import { ImVolumeMedium } from "react-icons/im";
import styled from "styled-components";

const EntireComponent = styled.div`
    font-size: 3rem;
    position: fixed;
    left: 10px;
    bottom: 10px;
    display: flex;
`;
const Range = styled.input``;

const MainComponentVolume = () => {
    return (
        <EntireComponent>
            <ImVolumeMedium />
            <Range type="range" />
        </EntireComponent>
    );
};

export default MainComponentVolume;
