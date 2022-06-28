import clone from "lodash.clone";
import { stateFightInterface } from "../../../types/_Reducer/stateFight";

const VALUE_HP = 7;
const VALUE_SPEED = 7;
const VALUE_REVENGE = 1;

export default function slow(state: stateFightInterface, AI: boolean): stateFightInterface {
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
