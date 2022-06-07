import React from "react";
import { ImVolumeMedium, ImVolumeMute2 } from "react-icons/im";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import RangeComponent from "./RangeComponent";
import { changeVolume } from "../../../_Reducer/Settings";
const RangeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease-in;

    opacity: 0;
`;
const IconVolume = styled.div`
    cursor: pointer;
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
    transition: all 0.2s ease-in;
    padding-right: 10px;
    z-index: 10000;
    &:hover ${RangeDiv} {
        opacity: 1;
        transform: translateX(0px);
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

        dispatch(changeVolume(value / 100));
    }
    function silentVolume() {
        if (volume !== 0) {
            return dispatch(changeVolume(0));
        }
        dispatch(changeVolume(0.75));
    }

    return (
        <EntireComponent>
            <IconVolume onClick={silentVolume}>
                {+volume !== 0 ? <ImVolumeMedium /> : <ImVolumeMute2 />}
            </IconVolume>
            <RangeDiv>
                <RangeComponent volume={volume} changeFn={handleChangeVolume} />
            </RangeDiv>
        </EntireComponent>
    );
};

export default MainComponentVolume;
