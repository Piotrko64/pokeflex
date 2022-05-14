import styled from "styled-components";

const CircleTurn = styled.div`
    text-align: center;
    border-radius: 50%;
    padding: 10px;
    min-height: 95px;
    aspect-ratio: 1;
    font-size: 1.2rem;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function YourTurn({ turn }) {
    return <CircleTurn>{turn ? "Your turn" : "Enemy turn"}</CircleTurn>;
}
export default YourTurn;
