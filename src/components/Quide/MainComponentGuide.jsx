import styled from "styled-components";
import RoutingGuide from "./Routing";
import ListObjectsToRender from "./DataToRender";
import useSwitch from "../../hooks/useSwitch";
import ReactDom from "react-dom";
import { AnimatePresence } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";

const Blur = styled.div`
    backdrop-filter: blur(6px);
    background-color: #0000004f;
    overflow: auto;
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10000;
    overflow-y: scroll;
`;

const Close = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 3rem;
    cursor: pointer;
    z-index: 99;
`;

export default function MainComponentGuide({ setOpen }) {
    const [renderView, setRenderView, nameView] = useSwitch(ListObjectsToRender, "General", "General");

    function changeViewGuide(renderView) {
        setRenderView(renderView);
    }
    return ReactDom.createPortal(
        <Blur>
            <Close onClick={setOpen}>
                <AiOutlineClose />
            </Close>

            <RoutingGuide changeViewGuide={changeViewGuide} nameView={nameView} />
            <AnimatePresence exitBeforeEnter>{renderView}</AnimatePresence>
        </Blur>,
        document.getElementById("guide")
    );
}
