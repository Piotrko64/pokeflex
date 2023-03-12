import { Link } from "react-router-dom";
import styled from "styled-components";

const AllLeft = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
`;

const Welcome = styled.div`
    font-size: 122px;
    font-family: "Koulen", cursive;
    position: relative;
    width: fit-content;
    font-weight: 400;
`;
const Demo = styled.div`
    background: black;
    color: white;
    text-align: center;
    font-size: 32px;
    position: absolute;
    padding: 0 20px;
    bottom: 30px;
    right: -45px;
    transform: rotate(-35deg);
`;
const Describe = styled.div`
    font-size: 26px;
    font-weight: 400;
    font-family: "Lato", sans-serif;
    max-width: 600px;
    text-align: center;
`;
const Play = styled.button`
    font-size: 32px;
    margin-top: 20px;

    font-family: "Koulen", cursive;
    background: ${(props) => (props.color ? props.color : "#a703ab")};
    color: white;
    border: none;
    cursor: pointer;
    padding: 0px;
    border-radius: 15px;
    transition: all 0.2s ease;
    width: 100%;
    &:hover {
        transform: scale(1.1);
    }
`;

export function LeftSide() {
    return (
        <AllLeft>
            <Welcome>
                PokeFLEX <Demo>DEMO</Demo>
            </Welcome>
            <Describe>Card Game by Piotr Kołodziejczyk</Describe>
            <Link to="/QuickGame">
                <Play>Quick Game</Play>
            </Link>
            <Link to="/ChooseLevel">
                <Play color="#03942a">Select Level</Play>
            </Link>
            <Link to="/SelectTeam">
                <Play color="#020de5">Select Team</Play>
            </Link>
            <p> If you have any question use our guide (press Q)</p>
        </AllLeft>
    );
}
