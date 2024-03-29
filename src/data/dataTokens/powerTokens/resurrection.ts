import { v4 } from "uuid";
import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

const NEW_HP = 13;

export default function resurrection(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = JSON.parse(JSON.stringify(state));
    const { grave } = state;

    const pokemonFromGrave = { ...grave[0], hp: NEW_HP, id: v4() };
    if (AI) {
        const newStateMyTeam = [...newState.enemyTeam];

        if (grave.length) {
            return { ...state, enemyTeam: [...newStateMyTeam, pokemonFromGrave] };
        }

        return { ...state };
    } else {
        const newStateMyTeam = [...newState.myTeam];

        if (grave.length) {
            return { ...state, myTeam: [...newStateMyTeam, pokemonFromGrave] };
        }

        return { ...state };
    }
}
