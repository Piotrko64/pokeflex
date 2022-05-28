import styled from "styled-components";
import RoutingGuide from "./Routing";
import ListObjectsToRender from "./DataToRender";
import useSwitch from "../../hooks/useSwitch";
import { useCallback, useEffect } from "react";

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

export default function MainComponentGuide({ handleEscape }) {
    const [renderView, setRenderView, nameView] = useSwitch(ListObjectsToRender, "General", "General");

    function changeViewGuide(renderView) {
        setRenderView(renderView);
    }
    return (
        <Blur onKeyDown={handleEscape} tabindex={-1}>
            <RoutingGuide changeViewGuide={changeViewGuide} nameView={nameView} />
            {renderView}
        </Blur>
    );
}
