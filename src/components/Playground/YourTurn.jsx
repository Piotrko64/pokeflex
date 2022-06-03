import styled from "styled-components";

const Flip = styled.div`
    box-sizing: border-box;
    box-shadow: 0px 0px 5px 0px #000000;
    height: 70px;
    width: 170px;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    transform: ${(props) => (!props.turn ? "rotateX(180deg)" : "rotateX(0deg)")};
`;

const Front = styled.div`
    text-align: center;
    position: absolute;
    font-family: "Koulen", cursive;
    color: black;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.75rem;
`;
const Back = styled(Front)`
    transform: rotateX(180deg);
`;
function YourTurn({ turn }) {
    return (
        <Flip turn={turn}>
            <Front>Your turn</Front> <Back>Enemy turn</Back>
        </Flip>
    );
}
export default YourTurn;
