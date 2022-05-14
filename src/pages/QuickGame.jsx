import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import {
    animation,
    choose,
    noEnemy,
    computerMove,
    tokenPowerUse,
    tokenPowerAi,
} from "../_Actions/mainAction";

import GroundForCards from "../components/Playground/groundFriends";
import YourTurn from "../components/Playground/YourTurn";
import { useEffect } from "react";
import { chooseRandomEnemy } from "../functions/computerAI/chooseRandomEnemy";
import lighter from "../functions/powerTokens/lighter";

const WholeField = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1800px;
    margin: auto;
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

    console.log(chooseRandomEnemy(FriendsTeam, EnemyTeam));

    function handleComputerChoose(x) {
        dispatch(computerMove(x));
        dispatch(animation([]));
    }
    function handleMoveComputer(x) {
        handleComputerChoose(x);
        setTimeout(() => {
            dispatch(computerMove(chooseRandomEnemy(FriendsTeam, EnemyTeam)[0]));
            dispatch(
                animation(
                    allCoordinates.find((e) => e.id === chooseRandomEnemy(FriendsTeam, EnemyTeam)[0])
                        .coordinate
                )
            );
        }, 1000);
    }
    useEffect(() => {
        if (!yourTurn) {
            setTimeout(() => {
                dispatch(tokenPowerAi(lighter(All, true), All.enemyTokens[1].id));
                // handleMoveComputer(chooseRandomEnemy(FriendsTeam, EnemyTeam)[1]);
            }, 2000);
        }
    }, [yourTurn]);
    return (
        <>
            <WholeField>
                <GroundForCards pokemons={FriendsTeam} tokens={FriendsTokens} />
                <YourTurn turn={yourTurn} />
                <GroundForCards pokemons={EnemyTeam} tokens={EnemyTokens} AI />
            </WholeField>
        </>
    );
}

export default QuickGame;
