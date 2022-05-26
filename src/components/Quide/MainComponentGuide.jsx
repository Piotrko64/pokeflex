import styled from "styled-components";
import RoutingGuide from "./Routing";
import ListObjectsToRender from "./DataToRender";
import useSwitch from "../../hooks/useSwitch";
const Blur = styled.div`
    backdrop-filter: blur(2px);
    background-color: #52525273;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
`;

export default function MainComponentGuide() {
    const [render, setRender] = useSwitch(ListObjectsToRender, "All Pokemons", "All Tokens");
    return (
        <Blur>
            <RoutingGuide />
        </Blur>
    );
}
