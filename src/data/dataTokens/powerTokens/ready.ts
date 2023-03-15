import clone from "lodash.clone";
import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

const VALUE_SPEED = 5;

export function ready(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = clone(state);
    const thisTeam = AI ? newState.enemyTeam : newState.myTeam;

    const newStateTeam = {
        [AI ? "enemyTeam" : "myTeam"]: thisTeam
            .filter((pok) => pok.hp > 0)
            .map((el) => ({
                ...el,
                hp: el.hp + 1,
                revenge: el.revenge + 1,
                defense: el.defense + 1,
                speed: el.speed + VALUE_SPEED,
            })),
    };

    return { ...state, ...newStateTeam };
}
