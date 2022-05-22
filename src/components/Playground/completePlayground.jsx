import styled from "styled-components";

import Confetti from "react-confetti";

import { useSelector, useDispatch } from "react-redux";

import { animation, computerMove, noWhoAttack, tokenPowerAi } from "../../_Actions/mainAction";

import GroundForCards from "./groundFriends";
import YourTurn from "./YourTurn";
import { useEffect } from "react";
import { chooseRandomEnemy } from "../../functions/computerAI/chooseRandomEnemy";

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
            dispatch(computerMove(randomEnemy));
            dispatch(animation(allCoordinates.find((e) => e.id === randomEnemy).coordinate));
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
                } else {
                    handleMoveComputer(chooseRandomEnemy(FriendsTeam, EnemyTeam)[1]);
                }
            }, 1000);
        }
    }, [yourTurn]);
    return (
        <>
            <WholeField>
                {/* <Confetti width={2000} height={1000} numberOfPieces={800} gravity={0.05} recycle={false} /> */}
                <GroundForCards pokemons={FriendsTeam} tokens={FriendsTokens} />
                <YourTurn turn={yourTurn} />
                <GroundForCards pokemons={EnemyTeam} tokens={EnemyTokens} AI={true} />
            </WholeField>
        </>
    );
}

export default CompletePlayground;
