import { arrayPokemonInterface } from "./../../../types/pokemonTokenData/pokemonInterface";
import { v4 } from "uuid";
import { stateFightInterface } from "../../../types/_Reducer/stateFight";

const Magikarp = {
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    name: "Magikarp",
    type: "Water",
    hp: 5,
    attack: 3,
    specialAttack: 6,
    speed: 3,
    defense: 1,
    revenge: 2,
};

export default function fishingRod(state: stateFightInterface, AI: boolean): stateFightInterface {
    let newState:
        | { enemyTeam: arrayPokemonInterface }
        | { myTeam: arrayPokemonInterface }
        | arrayPokemonInterface = AI
        ? [{ ...Magikarp, id: v4() }, ...state.enemyTeam, { ...Magikarp, id: v4() }]
        : [{ ...Magikarp, id: v4() }, ...state.myTeam, { ...Magikarp, id: v4() }];

    newState = AI ? { enemyTeam: newState } : { myTeam: newState };

    return { ...state, ...newState };
}
