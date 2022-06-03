import styled from "styled-components";

const CircleTurn = styled.div`
    text-align: center;
    border-radius: 10px;
    padding: 10px;
    min-height: 25px;

    background-color: transparent;
    font-size: 1.2rem;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 2s ease;
`;
const FlipInner = styled.div`
    transform: rotateY(180deg);
`;
const Front = styled.div``;
const Back = styled.div`
    transform: rotateY(180deg);
`;
function YourTurn({ turn }) {
    return (
        <CircleTurn>
            <FlipInner>{turn ? <Front>Your turn</Front> : <Back>Enemy turn</Back>}</FlipInner>
        </CircleTurn>
    );
}
export default YourTurn;
