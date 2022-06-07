import styled from "styled-components";
import RoutingGuide from "./Routing";
import ListObjectsToRender from "./DataToRender";
import useSwitch from "../../hooks/useSwitch";
import ReactDom from "react-dom";
import { AnimatePresence } from "framer-motion";

const Blur = styled.div`
    backdrop-filter: blur(4px);
    background-color: #52525273;
    overflow: auto;
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10000;
    overflow-y: scroll;
`;

export default function MainComponentGuide() {
    const [renderView, setRenderView, nameView] = useSwitch(ListObjectsToRender, "General", "General");

    function changeViewGuide(renderView) {
        setRenderView(renderView);
    }
    return ReactDom.createPortal(
        <Blur>
            <RoutingGuide changeViewGuide={changeViewGuide} nameView={nameView} />
            <AnimatePresence exitBeforeEnter>{renderView}</AnimatePresence>
        </Blur>,
        document.getElementById("guide")
    );
}
