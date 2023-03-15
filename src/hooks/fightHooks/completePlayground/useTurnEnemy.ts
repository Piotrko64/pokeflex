import { OneCoordinate } from "../../../@types/_Reducer/StateFight";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { chooseRandomEnemy } from "../../../functions/computerAI/chooseRandomEnemy";
import { useSelectorStateFight } from "../../../_Reducer/selectors/useSelectorStateFight";
import { animation, computerMove, noWhoAttack, tokenPowerAi } from "../../../_Reducer/StateFight";
import { PokemonInterface } from "../../../@types/pokemonTokenData/PokemonInterface";

export const useTurnEnemy = () => {
    const { all, myTeam, enemyTeam, allCoordinates, enemyTokens, yourTurn } = useSelectorStateFight();

    const dispatch = useDispatch();

    function handleComputerChoose(x: string) {
        dispatch(computerMove(x));
        dispatch(animation([]));
    }
    async function findRandom() {
        const randomEnemy = chooseRandomEnemy(myTeam, enemyTeam)[0];

        if (allCoordinates.some((e: OneCoordinate) => e.id === randomEnemy)) {
            dispatch(animation(allCoordinates.find((e: OneCoordinate) => e.id === randomEnemy)!.coordinate));
            dispatch(computerMove(randomEnemy));
        } else {
            findRandom();
        }
    }
    function handleMoveComputer(x: string) {
        handleComputerChoose(x);
        setTimeout(async () => {
            await findRandom();

            dispatch(noWhoAttack());
        }, 500);
    }
    useEffect(() => {
        if (!yourTurn) {
            setTimeout(() => {
                if (!enemyTeam.some((e: PokemonInterface) => e.hp > 0)) {
                    return;
                }
                if (enemyTokens.length > 0 && Math.round(Math.random() * 5) + 1 > 3) {
                    const randomNumberTokens = Math.round(Math.random() * (enemyTokens.length - 1));
                    const randomToken = enemyTokens[randomNumberTokens];

                    dispatch(tokenPowerAi([randomToken.functionToken(all, true), randomToken.id]));
                } else if (chooseRandomEnemy(myTeam, enemyTeam)[1]) {
                    setTimeout(() => handleMoveComputer(chooseRandomEnemy(myTeam, enemyTeam)[1]), 400);
                } else {
                    handleMoveComputer(myTeam[0].id!);
                }
            }, 1000);
        }
    }, [yourTurn]);
};
