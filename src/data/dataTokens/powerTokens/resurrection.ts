import { v4 } from "uuid";
import { stateFightInterface } from "../../../types/_Reducer/stateFight";

const NEW_HP = 13;

export default function resurrection(state: stateFightInterface, AI: boolean): stateFightInterface {
    const newState = JSON.parse(JSON.stringify(state));
    const { grave } = state;
    console.log(grave);
    setTimeout(() => {
        console.log(grave);
    }, 500);
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
