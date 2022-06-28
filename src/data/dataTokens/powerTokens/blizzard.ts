import { stateFightInterface } from "./../../../types/_Reducer/stateFight";

import { pokemonInterface } from "./../../../types/pokemonTokenData/pokemonInterface";
import clone from "lodash.clone";

const VALUE_SPEED = 6;
const VALUE_HP = 2;

export default function blizzard(state: stateFightInterface, AI: boolean): stateFightInterface {
    const newState: stateFightInterface = clone(state);

    let thisTeam = !AI ? newState.enemyTeam : newState.myTeam;
    thisTeam = thisTeam.filter((el: pokemonInterface) => el.hp > 0);
    const newStateTeam = {
        [!AI ? "enemyTeam" : "myTeam"]: thisTeam.map((el) => ({
            ...el,
            speed: Math.max(0, el.speed - VALUE_SPEED),
            hp: el.hp - VALUE_HP,
        })),
    };

    return { ...state, ...newStateTeam };
}
