import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { animation, computerMove, tokenPowerAi } from "../_Actions/mainAction";

import GroundForCards from "../components/Playground/groundFriends";
import YourTurn from "../components/Playground/YourTurn";
import { useEffect } from "react";
import { chooseRandomEnemy } from "../functions/computerAI/chooseRandomEnemy";

const WholeField = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1800px;
    margin: auto;
    flex-direction: column-reverse;
`;

function QuickGame() {
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
            }, 2000);
        }
    }, [yourTurn]);
    return (
        <>
            <WholeField>
                <GroundForCards pokemons={FriendsTeam} tokens={FriendsTokens} />
                <YourTurn turn={yourTurn} />
                <GroundForCards pokemons={EnemyTeam} tokens={EnemyTokens} AI={true} />
            </WholeField>
        </>
    );
}

export default QuickGame;
