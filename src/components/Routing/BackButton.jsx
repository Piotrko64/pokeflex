import React from "react";
import styled from "styled-components";
import { TiArrowBack } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";
const Back = styled.div`
    border-radius: 10px;
    background: white;
    color: black;
    padding: 2px 15px;
    max-width: 75px;
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10000;
`;

const BackButton = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const path = location.pathname;

    function navigateFn() {
        if (path.includes("levels")) {
            navigation("/ChooseLevel");
        } else navigation("/");
    }

    return (
        path !== "/" && (
            <Back onClick={navigateFn}>
                <TiArrowBack />
            </Back>
        )
    );
};

export default BackButton;
