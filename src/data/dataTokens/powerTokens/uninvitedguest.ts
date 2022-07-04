import { v4 } from "uuid";
import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

export default function uninvitedGuest(state: StateFightInterface, AI: boolean): StateFightInterface {
    const Meowth = {
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
        name: "Meowth",
        type: "Normal",
        hp: 15,
        attack: 3,
        specialAttack: 5,
        speed: 7,
        defense: 1,
        revenge: 4,
    };
    if (AI) {
        return { ...state, enemyTeam: [...state.enemyTeam, { ...Meowth, id: v4() }] };
    }
    return { ...state, myTeam: [...state.myTeam, { ...Meowth }] };
}
