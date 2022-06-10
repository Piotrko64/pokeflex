import styled from "styled-components";
import Confetti from "react-confetti";
import { useState } from "react";

import Awards from "./AwardsComponents/Awards";

import { AnimatePresence, motion } from "framer-motion";

import ButtonsNavigate from "./AwardsComponents/ButtonsNavigate";

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
    flex-direction: column;
    min-height: 400px;
    min-width: 600px;
    background-color: white;
    font-size: 32px;
    z-index: 10000;
    border-radius: 20px;
    padding: 20px;
    font-family: "Koulen", cursive;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.7);
`;
const Score = styled.div`
    letter-spacing: 5px;
    font-size: 112px;
`;
const WinComponent = styled.div`
    background: linear-gradient(180deg, rgba(209, 37, 37, 1) 0%, rgba(255, 219, 60, 1) 89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Lose = styled.div`
    background: linear-gradient(180deg, rgba(4, 52, 94, 1) 0%, rgba(255, 60, 60, 1) 89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Remis = styled.div`
    background: linear-gradient(180deg, rgba(13, 120, 26, 1) 0%, rgba(0, 195, 152, 1) 89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

function WinLose({ value }) {
    const [endgame] = useState(value);

    return (
        <Blur>
            {endgame === "win" && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={1000}
                    gravity={0.3}
                    recycle={false}
                />
            )}
            <AnimatePresence>
                <motion.div
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                        scale: 0,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.45,
                        type: "spring",
                        damping: 3,
                        mass: 0.75,
                        stiffness: 50,
                        delay: 0.2,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                >
                    <TableScore>
                        <Score>
                            {(() => {
                                switch (endgame) {
                                    case "win":
                                        return <WinComponent>YOU WIN!!!</WinComponent>;
                                    case "lose":
                                        return <Lose>You lose</Lose>;
                                    case "remis":
                                        return <Remis>REMIS!!!</Remis>;
                                    default:
                                        break;
                                }
                            })()}
                        </Score>

                        {endgame === "win" && <Awards />}
                        <ButtonsNavigate />
                    </TableScore>
                </motion.div>
            </AnimatePresence>
        </Blur>
    );
}
export default WinLose;
