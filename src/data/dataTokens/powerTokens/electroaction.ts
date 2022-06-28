import { pokemonInterface } from "./../../../types/pokemonTokenData/pokemonInterface";
import { stateFightInterface } from "../../../types/_Reducer/stateFight";

const SMALL_ATTACK = 7;
const STRONGER_ATTACK = 16;

export default function electroAction(state: stateFightInterface, AI: boolean): stateFightInterface {
    const newState: stateFightInterface = JSON.parse(JSON.stringify(state));

    // AI move
    if (AI) {
        const newStateFriendsTeam = [...newState.myTeam];
        let thisEnemy: pokemonInterface;
        let thisAttack: number;
        if (newState.enemyTeam.some(({ type }) => type === "Electro" || type === "Turbo Electro")) {
            thisEnemy = newStateFriendsTeam.sort((a, b) => {
                return b.hp - a.hp;
            })[0];
            thisAttack = STRONGER_ATTACK;
        } else {
            thisEnemy = newStateFriendsTeam.sort((a, b) => {
                return b.hp - a.hp;
            })[newStateFriendsTeam.length - 1];
            thisAttack = SMALL_ATTACK;
        }

        const powerfulEnemyIndex = newState.myTeam.findIndex((el) => el.id === thisEnemy.id);
        let myTeam = newState.myTeam;
        myTeam[powerfulEnemyIndex] = { ...thisEnemy, hp: thisEnemy.hp - thisAttack };

        return { ...state, myTeam };
    } else {
        // your move

        const newStateEnemyTeam = [...newState.enemyTeam];
        let thisEnemy: pokemonInterface;
        let thisAttack: number;
        if (newState.myTeam.find(({ type }) => type === "Electro" || type === "Turbo Electro")) {
            thisEnemy = newStateEnemyTeam.sort((a, b) => {
                return b.hp - a.hp;
            })[0];
            thisAttack = STRONGER_ATTACK;
        } else {
            thisEnemy = newStateEnemyTeam.sort((a, b) => {
                return b.hp - a.hp;
            })[newStateEnemyTeam.length - 1];
            thisAttack = SMALL_ATTACK;
        }

        const powerfulEnemyIndex = newState.enemyTeam.findIndex((el) => el.id === thisEnemy.id);
        let enemyTeam = newState.enemyTeam;
        enemyTeam[powerfulEnemyIndex] = { ...thisEnemy, hp: thisEnemy.hp - thisAttack };

        return { ...state, enemyTeam };
    }
}