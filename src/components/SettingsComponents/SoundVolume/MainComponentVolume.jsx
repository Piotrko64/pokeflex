import React from "react";
import { ImVolumeMedium } from "react-icons/im";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeVolume } from "../../../_Actions/mainAction";
const Range = styled.input`
    transition: all 0.2s linear;
    opacity: 0;

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
const IconVolume = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;
const EntireComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    position: fixed;
    left: 10px;
    bottom: 10px;
    display: flex;
    border-radius: 5px;
    transition: all 0.2s linear;
    padding-right: 10px;
    &:hover ${Range} {
        opacity: 1;
    }
    &:hover ${IconVolume} {
        color: black;
    }
    &:hover {
        background-color: white;
    }
`;

const MainComponentVolume = () => {
    const dispatch = useDispatch();
    const volume = useSelector((state) => state.SettingsReducer.Volume);
    function handleChangeVolume(e) {
        const { value } = e.target;
        dispatch(changeVolume(value));
    }
    return (
        <EntireComponent>
            <IconVolume>
                <ImVolumeMedium />
            </IconVolume>

            <Range type="range" value={volume} onChange={handleChangeVolume} min="0" max="100" />
        </EntireComponent>
    );
};

export default MainComponentVolume;
