import styled from "styled-components";
import RoutingGuide from "./Routing";

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
    return (
        <Blur>
            <RoutingGuide />
        </Blur>
    );
}
