import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseRandomEnemy } from "../../../functions/computerAI/chooseRandomEnemy";
import { animation, computerMove, noWhoAttack, tokenPowerAi } from "../../../_Reducer/StateFight";

const UseTurnEnemy = () => {
    const all = useSelector((state) => state.StateFightsReducer);

    const friendsTeam = useSelector((state) => state.StateFightsReducer.myTeam);
    const enemyTeam = useSelector((state) => state.StateFightsReducer.enemyTeam);

    const enemyTokens = useSelector((state) => state.StateFightsReducer.enemyTokens);

    const yourTurn = useSelector((state) => state.StateFightsReducer.yourTurn);
    const allCoordinates = useSelector((state) => state.StateFightsReducer.allCoordinates);

    const dispatch = useDispatch();

    function handleComputerChoose(x) {
        dispatch(computerMove(x));
        dispatch(animation([]));
    }
    async function findRandom() {
        const randomEnemy = chooseRandomEnemy(friendsTeam, enemyTeam)[0];
        console.log(allCoordinates, randomEnemy);
        if (allCoordinates.some((e) => e.id === randomEnemy)) {
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
                if (!enemyTeam.some((e) => e.hp > 0)) {
                    return;
                }
                if (enemyTokens.length > 0 && Math.round(Math.random() * 5) + 1 > 3) {
                    const randomNumberTokens = Math.round(Math.random() * (enemyTokens.length - 1));
                    const randomToken = enemyTokens[randomNumberTokens];

                    dispatch(tokenPowerAi([randomToken.functionToken(all, true), randomToken.id]));
                } else if (chooseRandomEnemy(friendsTeam, enemyTeam)[1]) {
                    setTimeout(() => handleMoveComputer(chooseRandomEnemy(friendsTeam, enemyTeam)[1]), 400);
                } else {
                    console.log("else");
                    handleMoveComputer(friendsTeam[0].id);
                }
            }, 1000);
        }
    }, [yourTurn]);
};

export default UseTurnEnemy;
