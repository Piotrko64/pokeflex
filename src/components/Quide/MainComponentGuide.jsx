import styled from "styled-components";
import RoutingGuide from "./Routing";
import ListObjectsToRender from "./DataToRender";
import useSwitch from "../../hooks/useSwitch";
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
    const [render, setRender] = useSwitch(ListObjectsToRender, "All Tokens", "All Pokemons");
    return (
        <Blur>
            <RoutingGuide />
            {render}
            <button onClick={() => setRender("Alls")}>{render}</button>
            <button onClick={() => setRender("All Tokens")}>{render}</button>
        </Blur>
    );
}
