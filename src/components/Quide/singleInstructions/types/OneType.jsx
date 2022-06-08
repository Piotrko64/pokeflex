import React from "react";
import styled from "styled-components";

const Title = styled.div`
    text-align: center;
    color: white;
    background: ${(props) => props.color};
    padding: 5px;
    font-family: "Koulen", cursive;
    font-size: 1.5rem;
`;
const Describe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    text-align: center;
    color: black;
    background: white;
    font-family: "Lato";
    font-weight: 500;
    font-size: 1.25rem;
    min-height: 50px;
`;

const OneType = ({ value }) => {
    const { color, name, description } = value;
    return (
        <>
            <Title color={color}>{name}</Title>
            <Describe>{description}</Describe>
        </>
    );
};

export default OneType;
