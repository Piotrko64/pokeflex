import styled from "styled-components";

import Confetti from "react-confetti";

import { useSelector, useDispatch } from "react-redux";

import { animation, computerMove, noWhoAttack, tokenPowerAi } from "../../_Actions/mainAction";

import GroundForCards from "./groundFriends";
import YourTurn from "./YourTurn";
import { useEffect, useState } from "react";
import { chooseRandomEnemy } from "../../functions/computerAI/chooseRandomEnemy";
import WinLose from "./WinLoseComponents/WinLose";

const WholeField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1800px;
    margin: auto;
    flex-direction: column-reverse;
    min-height: 100vh;
`;

function CompletePlayground() {
    const [endGame, setEndGame] = useState(null);
    const dispatch = useDispatch();

    const All = useSelector((state) => state.FriendsTeam);

    const yourTurn = useSelector((state) => state.FriendsTeam.yourTurn);

    const FriendsTeam = useSelector((state) => state.FriendsTeam.myTeam);
    const FriendsTokens = useSelector((state) => state.FriendsTeam.myTokens);

    const EnemyTeam = useSelector((state) => state.FriendsTeam.enemyTeam);
    const EnemyTokens = useSelector((state) => state.FriendsTeam.enemyTokens);

    const allCoordinates = useSelector((state) => state.FriendsTeam.allCoordinates);

    function handleComputerChoose(x) {
        dispatch(computerMove(x));
        dispatch(animation([]));
    }

    function handleMoveComputer(x) {
        handleComputerChoose(x);
        setTimeout(() => {
            const randomEnemy = chooseRandomEnemy(FriendsTeam, EnemyTeam)[0];
            if (allCoordinates.find((e) => e.id === randomEnemy)) {
                dispatch(animation(allCoordinates.find((e) => e.id === randomEnemy).coordinate));
                dispatch(computerMove(randomEnemy));
            } else {
                dispatch(animation(allCoordinates[0].coordinate));
                dispatch(computerMove(allCoordinates[0].id));
            }

            setTimeout(() => dispatch(noWhoAttack()), 400);
        }, 500);
    }
    useEffect(() => {
        if (!yourTurn) {
            setTimeout(() => {
                if (EnemyTokens.length > 0 && Math.round(Math.random() * 5) + 1 > 3) {
                    const randomNumberTokens = Math.round(Math.random() * (EnemyTokens.length - 1));
                    const randomToken = EnemyTokens[randomNumberTokens];

                    dispatch(tokenPowerAi(randomToken.functionToken(All, true), randomToken.id));
                } else if (chooseRandomEnemy(FriendsTeam, EnemyTeam)[1]) {
                    setTimeout(() => handleMoveComputer(chooseRandomEnemy(FriendsTeam, EnemyTeam)[1]), 400);
                } else {
                    handleMoveComputer(FriendsTeam[0].id, EnemyTeam[0].id);
                }
            }, 1000);
        }
    }, [yourTurn]);

    useEffect(() => {
        if (FriendsTeam.length === 0 && EnemyTeam.length === 0) {
            setEndGame("remis");
        } else if (FriendsTeam.length === 0) {
            setEndGame("lose");
        } else if (EnemyTeam.length === 0) {
            setEndGame("win");
        }
    }, [FriendsTeam.length, EnemyTeam.length]);

    return (
        <>
            <WholeField>
                <GroundForCards pokemons={FriendsTeam} tokens={FriendsTokens} />
                <YourTurn turn={yourTurn} />
                <GroundForCards pokemons={EnemyTeam} tokens={EnemyTokens} AI={true} />
            </WholeField>
            {endGame && <WinLose value={endGame} />}
        </>
    );
}

export default CompletePlayground;
