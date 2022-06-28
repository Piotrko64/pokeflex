import styled from "styled-components";
import RoutingGuide from "./Routing";
import ListObjectsToRender from "./DataToRender";
import { useSwitch } from "../../hooks/useSwitch";
import ReactDom from "react-dom";
import { AnimatePresence } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import { objectRender } from "../../types/hooks/switch";

const Blur = styled.div`
    background-color: #000000b5;
    @supports (backdrop-filter: blur(6px)) {
        & {
            backdrop-filter: blur(6px);
            background-color: #0000004f;
        }
    }

    overflow: auto;
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 9999;
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

export default function MainComponentGuide({ setOpen }: { setOpen: () => void }) {
    const [renderView, setRenderView, nameView] = useSwitch(ListObjectsToRender, "General", "General");

    return ReactDom.createPortal(
        <Blur>
            <Tippy content="Press Esc">
                <Close onClick={setOpen}>
                    <AiOutlineClose />
                </Close>
            </Tippy>
            <RoutingGuide changeViewGuide={setRenderView} nameView={nameView} />
            <AnimatePresence exitBeforeEnter>{renderView}</AnimatePresence>
        </Blur>,
        document.getElementById("guide")!
    );
}
