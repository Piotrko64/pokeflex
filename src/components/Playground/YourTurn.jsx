import styled from "styled-components";

const CircleTurn = styled.div`
    text-align: center;
    border-radius: 10px;
    padding: 10px;
    min-height: 25px;
    color: black;
    background: white;
    font-size: 1.2rem;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 2s ease;
`;

function YourTurn({ turn }) {
    return <CircleTurn>{turn ? "Your turn" : "Enemy turn"}</CircleTurn>;
}
export default YourTurn;
