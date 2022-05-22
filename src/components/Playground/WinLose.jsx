import styled from "styled-components";
import Confetti from "react-confetti";
import { useEffect } from "react";
import WinSound from "../../Audio/winLose/Win.wav";

const winPlay = new Audio(WinSound);

const Blur = styled.div`
    position: fixed;
    top: 0;
    backdrop-filter: blur(2px);
    background: "RGBA(255,255,255,0.06)";
    height: 100vh;
    width: 100vw;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const TableScore = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    min-width: 600px;
    background-color: white;
    font-size: 32px;
    z-index: 10000;
    border-radius: 20px;
    font-family: "Koulen", cursive;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.7);
`;
const Score = styled.div`
    letter-spacing: 5px;
    font-size: 112px;
`;
const Win = styled.div`
    background: linear-gradient(180deg, rgba(209, 37, 37, 1) 0%, rgba(255, 219, 60, 1) 89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Lose = styled.div`
    background: linear-gradient(180deg, rgba(209, 37, 37, 1) 0%, rgba(255, 219, 60, 1) 89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Remis = styled.div`
    background: linear-gradient(180deg, rgba(209, 37, 37, 1) 0%, rgba(255, 219, 60, 1) 89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

function WinLose({ value }) {
    useEffect(() => {
        (() => {
            switch (value) {
                case "win":
                    winPlay.play();
                    break;
                case "lose":
                    break;
                case "remis":
                    break;
                default:
                    break;
            }
        })();

        console.log(value);
    }, []);
    return (
        <Blur>
            {value === "win" && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={1200}
                    gravity={0.1}
                    recycle={false}
                />
            )}
            <TableScore>
                <Score>
                    {(() => {
                        switch (value) {
                            case "win":
                                return <Win>YOU WIN!!!</Win>;
                            case "lose":
                                return <Lose>You lose</Lose>;
                            case "remis":
                                return <Remis>REMIS!!!</Remis>;
                            default:
                                break;
                        }
                    })()}
                </Score>
            </TableScore>
        </Blur>
    );
}
export default WinLose;
