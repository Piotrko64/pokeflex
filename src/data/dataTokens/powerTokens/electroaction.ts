import { PokemonInterface } from "../../../@types/pokemonTokenData/PokemonInterface";
import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

const SMALL_ATTACK = 7;
const STRONGER_ATTACK = 16;

export default function electroAction(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState: StateFightInterface = JSON.parse(JSON.stringify(state));

    // AI move
    if (AI) {
        const newStateFriendsTeam = [...newState.myTeam];
        let thisEnemy: PokemonInterface;
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
        const myTeam = newState.myTeam;
        myTeam[powerfulEnemyIndex] = { ...thisEnemy, hp: thisEnemy.hp - thisAttack };

        return { ...state, myTeam };
    }
    const newStateEnemyTeam = [...newState.enemyTeam];
    let thisEnemy: PokemonInterface;
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
    const enemyTeam = newState.enemyTeam;
    enemyTeam[powerfulEnemyIndex] = { ...thisEnemy, hp: thisEnemy.hp - thisAttack };

    return { ...state, enemyTeam };
}
