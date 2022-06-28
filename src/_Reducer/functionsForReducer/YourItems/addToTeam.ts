import { yourItemsInterface } from "./../../../types/_Reducer/yourItems";

import { pokemonInterface } from "./../../../types/pokemonTokenData/pokemonInterface";
import clone from "lodash.clone";
export function addToTeamFn(state: yourItemsInterface, pokemon: pokemonInterface) {
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
