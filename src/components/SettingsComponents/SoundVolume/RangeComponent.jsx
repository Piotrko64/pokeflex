import React from "react";
import styled from "styled-components";
const Range = styled.input`
    transition: all 0.2s linear;
    background: transparent;
    & {
        height: 23px;
        -webkit-appearance: none;
        margin: 10px 0;
        width: 100%;
    }
    input[type="range"]:focus {
        outline: none;
    }
    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #dedede;
        border-radius: 4px;
        border: 0px solid #000000;
    }
    &::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #ffeded;
        border: 0px solid #828282;
        height: 17px;
        width: 10px;
        border-radius: 5px;
        background: #000000;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -6.5px;
    }
    &:focus::-webkit-slider-runnable-track {
        background: #dedede;
    }
    &::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #dedede;
        border-radius: 4px;
        border: 0px solid #000000;
    }
    &::-moz-range-thumb {
        box-shadow: 0px 0px 0px #ffeded;
        border: 0px solid #828282;
        height: 17px;
        width: 10px;
        border-radius: 5px;
        background: #000000;
        cursor: pointer;
    }
    &::-ms-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }
    &::-ms-fill-lower {
        background: #dedede;
        border: 0px solid #000000;
        border-radius: 8px;
        box-shadow: 0px 0px 0px #000000;
    }
    &::-ms-fill-upper {
        background: #dedede;
        border: 0px solid #000000;
        border-radius: 8px;
        box-shadow: 0px 0px 0px #000000;
    }
    &::-ms-thumb {
        margin-top: 1px;
        box-shadow: 0px 0px 0px #ffeded;
        border: 0px solid #828282;
        height: 17px;
        width: 10px;
        border-radius: 5px;
        background: #000000;
        cursor: pointer;
    }
    &:focus::-ms-fill-lower {
        background: #dedede;
    }
    &:focus::-ms-fill-upper {
        background: #dedede;
    }
`;
const RangeComponent = ({ volume, changeFn }) => {
    return (
        <>
            <Range type="range" value={volume * 100} onChange={changeFn} min="0" max="100" step={1} />
        </>
    );
};

export default RangeComponent;
