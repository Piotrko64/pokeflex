import clone from "lodash.clone";
import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

const VALUE_HP = 7;
const VALUE_SPEED = 7;
const VALUE_REVENGE = 1;

export default function slow(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = clone(state);

    const yourTeam = AI ? newState.enemyTeam : newState.myTeam;
    const enemyTeam = AI ? newState.myTeam : newState.enemyTeam;

    const newStateYourTeam = {
        [AI ? "enemyTeam" : "myTeam"]: yourTeam.map((el) => ({
            ...el,
            speed: el.speed + VALUE_SPEED,
            hp: el.hp > 0 ? el.hp + VALUE_HP : 0,
            revenge: el.revenge + VALUE_REVENGE,
        })),
    };
    const newStateEnemyTeam = {
        [AI ? "myTeam" : "enemyTeam"]: enemyTeam.map((el) => ({
            ...el,
            hp: el.hp > 0 ? el.hp + VALUE_HP : 0,
        })),
    };

    return { ...state, ...newStateYourTeam, ...newStateEnemyTeam };
}
