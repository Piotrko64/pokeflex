import React from "react";
import styled from "styled-components";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
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
`;

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <Back onClick={() => navigate(-1)}>
            <TiArrowBack />
        </Back>
    );
};

export default BackButton;
