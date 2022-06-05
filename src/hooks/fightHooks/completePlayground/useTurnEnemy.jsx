import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseRandomEnemy } from "../../../functions/computerAI/chooseRandomEnemy";
import { animation, computerMove, noWhoAttack, tokenPowerAi } from "../../../_Actions/stateFightActions";

const UseTurnEnemy = () => {
    const All = useSelector((state) => state.FriendsTeam);

    const FriendsTeam = useSelector((state) => state.FriendsTeam.myTeam);
    const EnemyTeam = useSelector((state) => state.FriendsTeam.enemyTeam);

    const EnemyTokens = useSelector((state) => state.FriendsTeam.enemyTokens);

    const yourTurn = useSelector((state) => state.FriendsTeam.yourTurn);
    const allCoordinates = useSelector((state) => state.FriendsTeam.allCoordinates);

    const dispatch = useDispatch();

    function handleComputerChoose(x) {
        dispatch(computerMove(x));
        dispatch(animation([]));
    }
    async function findRandom() {
        const randomEnemy = chooseRandomEnemy(FriendsTeam, EnemyTeam)[0];
        if (allCoordinates.find((e) => e.id === randomEnemy)) {
            dispatch(animation(allCoordinates.find((e) => e.id === randomEnemy).coordinate));
            dispatch(computerMove(randomEnemy));
        } else {
            findRandom();
        }
    }
    function handleMoveComputer(x) {
        handleComputerChoose(x);
        setTimeout(async () => {
            await findRandom();

            dispatch(noWhoAttack());
        }, 500);
    }
    return useEffect(() => {
        if (!yourTurn) {
            setTimeout(() => {
                if (!EnemyTeam.filter((e) => e.hp > 1).length) {
                    return;
                }
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
};

export default UseTurnEnemy;