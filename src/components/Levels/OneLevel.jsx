import { Fragment } from "react";
import styled from "styled-components";

const OneLevelDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.color};
    width: 300px;
    padding: 5px;
    border-radius: 15px;
    font-family: "Koulen", cursive;
    font-size: 22px;
    cursor: pointer;
    color: white;
`;

function OneLevel({ value }) {
    return <OneLevelDiv color={value.color}>{value.name}</OneLevelDiv>;
}

export default OneLevel;
