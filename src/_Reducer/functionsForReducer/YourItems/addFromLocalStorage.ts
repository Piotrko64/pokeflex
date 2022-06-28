import { yourItemsInterface } from "./../../../types/_Reducer/yourItems";
import { arrayTokenInterface } from "./../../../types/pokemonTokenData/tokenInterface";
import { arrayPokemonInterface } from "./../../../types/pokemonTokenData/pokemonInterface";

import { allTokens } from "../../../data/dataTokens/allTokens";
import { examplePokemons } from "../../../data/examplePokemons";

export function addFromLocalStorageFn(state: yourItemsInterface) {
    const localPokemons = JSON.parse(localStorage.getItem("pokemonsAward")!);

    const arrayAllYourPokemons: arrayPokemonInterface = [...state.pokemons];
    const localTokens = JSON.parse(localStorage.getItem("tokensAward")!);
    const arrayAllYourTokens: arrayTokenInterface = [...state.tokens];

    localPokemons?.forEach((local: string) =>
        examplePokemons.forEach((ex) => {
            if (ex.idAward === local && !arrayAllYourPokemons.find((el) => el.idAward === ex.idAward)) {
                arrayAllYourPokemons.push(ex);
            }
        })
    );
    localTokens?.forEach((local: String) =>
        allTokens.forEach((ex) => {
            if (ex.idAward === local && !arrayAllYourTokens.find((el) => el.idAward === ex.idAward)) {
                arrayAllYourTokens.push(ex);
            }
        })
    );

    return { ...state, pokemons: arrayAllYourPokemons, tokens: arrayAllYourTokens };
}
