import { allTokens } from "../../../data/dataTokens/allTokens";
import { examplePokemons } from "../../../data/examplePokemons";

export function addFromLocalStorageFn(state) {
    const localPokemons = JSON.parse(localStorage.getItem("pokemonsAward"));

    const arrayAllYourPokemons = [...state.pokemons];
    const localTokens = JSON.parse(localStorage.getItem("tokensAward"));
    const arrayAllYourTokens = [...state.tokens];

    localPokemons?.forEach((local) =>
        examplePokemons.forEach((ex) => {
            if (ex.idAward === local && !arrayAllYourPokemons.find((el) => el.idAward === ex.idAward)) {
                arrayAllYourPokemons.push(ex);
            }
        })
    );
    localTokens?.forEach((local) =>
        allTokens.forEach((ex) => {
            if (ex.idAward === local && !arrayAllYourTokens.find((el) => el.idAward === ex.idAward)) {
                arrayAllYourTokens.push(ex);
            }
        })
    );

    return { ...state, pokemons: arrayAllYourPokemons, tokens: arrayAllYourTokens };
}
