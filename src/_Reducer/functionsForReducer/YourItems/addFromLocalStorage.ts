import { YourItemsInterface } from "../../../@types/_Reducer/YourItems";
import { ArrayTokenInterface } from "../../../@types/pokemonTokenData/TokenInterface";
import { ArrayPokemonInterface } from "../../../@types/pokemonTokenData/PokemonInterface";

import { allTokens } from "../../../data/dataTokens/allTokens";
import { examplePokemons } from "../../../data/examplePokemons";

export function addFromLocalStorageFn(state: YourItemsInterface) {
    const localPokemons = JSON.parse(localStorage.getItem("pokemonsAward")!);

    const arrayAllYourPokemons: ArrayPokemonInterface = [...state.pokemons];
    const localTokens = JSON.parse(localStorage.getItem("tokensAward")!);
    const arrayAllYourTokens: ArrayTokenInterface = [...state.tokens];

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
