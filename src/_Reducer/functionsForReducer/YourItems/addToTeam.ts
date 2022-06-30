import { YourItemsInterface } from "../../../types/_Reducer/YourItems";

import { PokemonInterface } from "../../../types/pokemonTokenData/PokemonInterface";
import clone from "lodash.clone";
export function addToTeamFn(state: YourItemsInterface, pokemon: PokemonInterface) {
    let newStateTeamFight = clone(state.teamFight);
    if (newStateTeamFight.find((el) => el.name === pokemon.name)) {
        return state;
    }
    if (newStateTeamFight.length === 3) {
        newStateTeamFight[2] = pokemon;
    } else {
        newStateTeamFight.push(pokemon);
    }

    return { ...state, teamFight: newStateTeamFight };
}
