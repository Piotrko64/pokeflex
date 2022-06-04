import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import MainRouting from "../Routing/MainRouting";
import BackButton from "./BackButton";
import styled from "styled-components";
import useKeyboardGuide from "../../hooks/keyboardUsing/useKeyboardGuide";
import { useDispatch } from "react-redux";
import { addItemsFromLocalStorage } from "../../_Actions/yourItemsActions";
import { BsQuestionCircleFill } from "react-icons/bs";
import MainComponentVolume from "../SettingsComponents/SoundVolume/MainComponentVolume";
import MainComponentGuide from "../Quide/MainComponentGuide";
const Guide = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    font-size: 3rem;
    z-index: 100;
    cursor: pointer;
`;

const MainComponentLayout = ({ children }) => {
    const location = useLocation();
    const [openGuide, setOpenGuide] = useState(false);

    useKeyboardGuide(setOpenGuide);

    const dispatch = useDispatch();

    dispatch(addItemsFromLocalStorage());
    return (
        <Fragment>
            {location.pathname !== "/" && <BackButton />}
            <MainRouting />
            <Guide onClick={() => setOpenGuide(!openGuide)}>
                <BsQuestionCircleFill />
            </Guide>
            <MainComponentVolume />
            {openGuide && <MainComponentGuide />}
            {children}
        </Fragment>
    );
};

export default MainComponentLayout;
