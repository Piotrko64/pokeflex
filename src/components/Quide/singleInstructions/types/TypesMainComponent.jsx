import React from "react";
import dataTypes from "./dataTypes";
import OneType from "./OneType";

const TypesMainComponent = () => {
    return (
        <>
            {dataTypes.map((el) => (
                <OneType value={el} />
            ))}
        </>
    );
};

export default TypesMainComponent;
