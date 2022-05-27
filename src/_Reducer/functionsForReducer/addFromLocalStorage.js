import { allTokens } from "../../data/allTokens";
import { examplePokemons } from "../../data/examplePokemons";

export function addFromLocalStorage(state) {
    const localPokemons = JSON.parse(localStorage.getItem("pokemons"));

    const arrayAllYourPokemons = [...state.Pokemons];
    const localTokens = JSON.parse(localStorage.getItem("tokens"));
    const arrayAllYourTokens = [...state.Tokens];

    localPokemons.forEach((local) =>
        examplePokemons.forEach((ex) => {
            if (ex.idAward === local && !arrayAllYourPokemons.find((el) => el.idAward === ex.idAward)) {
                arrayAllYourPokemons.push(ex);
            }
        })
    );
    localTokens.forEach((local) =>
        allTokens.forEach((ex) => {
            if (ex.idAward === local && !arrayAllYourTokens.find((el) => el.idAward === ex.idAward)) {
                arrayAllYourTokens.push(ex);
            }
        })
    );
    console.log({ ...state, Pokemons: arrayAllYourPokemons, Tokens: arrayAllYourTokens });
    return { ...state, Pokemons: arrayAllYourPokemons, Tokens: arrayAllYourTokens };
}
