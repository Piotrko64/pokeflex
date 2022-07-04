import { PokemonInterface } from "../../../@types/pokemonTokenData/PokemonInterface";
import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

export const level11 = {
    id: "level11Normal",
    name: "level 11",
    color: `background: rgb(172,60,6);
background: linear-gradient(137deg, rgba(172,60,6,1) 0%, rgba(207,114,69,1) 44%, rgba(218,157,75,1) 100%);`,
    enemyTeam: [findPokemonByName("Snorlax"), findPokemonByName("Eevee"), findPokemonByName("Flareon")],
    enemyTokens: [
        findTokenByName("Lighter"),
        findTokenByName("Conflagration"),
        findTokenByName("Punch"),
        findTokenByName("Punch"),
    ],
    award: {
        pokemons: findPokemonByName("Flareon") as PokemonInterface,
    },
};
