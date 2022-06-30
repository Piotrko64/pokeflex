import clone from "lodash.clone";
import { StateFightInterface } from "../../../types/_Reducer/StateFight";

const VALUE_HP = 7;
const VALUE_SPEED = 7;
const VALUE_REVENGE = 1;

export default function slow(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = clone(state);

    let yourTeam = AI ? newState.enemyTeam : newState.myTeam;
    let enemyTeam = !AI ? newState.enemyTeam : newState.myTeam;

    const newStateYourTeam = {
        [AI ? "enemyTeam" : "myTeam"]: yourTeam.map((el) => ({
            ...el,
            speed: el.speed + VALUE_SPEED,
            hp: el.hp + VALUE_HP,
            revenge: el.revenge + VALUE_REVENGE,
        })),
    };
    const newStateEnemyTeam = {
        [!AI ? "enemyTeam" : "myTeam"]: enemyTeam.map((el) => ({ ...el, hp: el.hp + VALUE_HP })),
    };

    return { ...state, ...newStateYourTeam, ...newStateEnemyTeam };
}
