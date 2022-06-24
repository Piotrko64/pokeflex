import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

export const level12 = {
    id: "level12Normal",
    name: "level 12",
    color: `background: rgb(102,131,189);
background: linear-gradient(180deg, rgba(102,131,189,1) 0%, rgba(81,193,57,1) 100%);`,
    enemyTeam: [
        findPokemonByName("Chikorita"),
        findPokemonByName("Swinub"),
        findPokemonByName("Squirtle"),
        findPokemonByName("Mr mime"),
    ],
    enemyTokens: [findTokenByName("Robber")],
    award: {
        pokemons: findPokemonByName("Chikorita"),
    },
};
