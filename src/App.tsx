import "atropos/css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MainRouting } from "./components/Routing/MainRouting";
import { MainComponentGuide } from "./components/Quide/MainComponentGuide";
import { useDispatch } from "react-redux";
import { MainComponentVolume } from "./components/SettingsComponents/SoundVolume/MainComponentVolume";
import { useKeyboardGuide } from "./hooks/keyboardUsing/useKeyboardGuide";
import { addItemsFromLocalStorage } from "./_Reducer/YourItems";
import Tippy from "@tippyjs/react";
import { useDevicesInformation } from "./hooks/useDevicesInformation";

const Guide = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    font-size: 3rem;
    z-index: 100;
    cursor: pointer;
    z-index: 10001;
    visibility: ${(props: { show: boolean }) => (props.show ? "hidden" : "")};
`;

function App() {
    const [openGuide, setOpenGuide] = useState<boolean>(false);
    const dispatch = useDispatch();

    useKeyboardGuide(setOpenGuide);
    useDevicesInformation();

    useEffect(() => {
        dispatch(addItemsFromLocalStorage());
    }, []);

    return (
        <>
            <MainRouting />
            <Tippy content={'Press "Q" to open guide'}>
                <Guide onClick={() => setOpenGuide(!openGuide)} show={openGuide}>
                    <BsQuestionCircleFill />
                </Guide>
            </Tippy>
            <MainComponentVolume />
            {openGuide && <MainComponentGuide setOpen={() => setOpenGuide(false)} />}
        </>
    );
}

export default App;
