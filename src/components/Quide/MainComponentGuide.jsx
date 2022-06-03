import styled from "styled-components";
import RoutingGuide from "./Routing";
import ListObjectsToRender from "./DataToRender";
import useSwitch from "../../hooks/useSwitch";
import ReactDom from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const Blur = styled.div`
    backdrop-filter: blur(4px);
    background-color: #52525273;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 99;
`;

export default function MainComponentGuide() {
    const [renderView, setRenderView, nameView] = useSwitch(ListObjectsToRender, "General", "General");

    function changeViewGuide(renderView) {
        setRenderView(renderView);
    }
    return ReactDom.createPortal(
        <Blur tabIndex={-1}>
            <RoutingGuide changeViewGuide={changeViewGuide} nameView={nameView} />
            <AnimatePresence exitBeforeEnter>{renderView}</AnimatePresence>
        </Blur>,
        document.getElementById("guide")
    );
}
