import React from "react";
import styled from "styled-components";
import dataTypes from "./dataTypes";
import OneType from "./OneType";

const Describe = styled.h3`
    text-align: center;
`;

export const TypesMainComponent = () => {
    return (
        <>
            <Describe> Type abilities activate only when the attacked opponent has 0 defense </Describe>
            {dataTypes.map((el) => (
                <OneType value={el} />
            ))}
        </>
    );
};
