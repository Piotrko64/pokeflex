import { pokemonInterface } from "./../../../types/pokemonTokenData/pokemonInterface";
import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

export const level10 = {
    id: "level10HARD",
    name: "level 10",
    color: `background: rgb(74,39,207);
background: linear-gradient(137deg, rgba(74,39,207,1) 0%, rgba(23,120,173,1) 44%, rgba(12,114,145,1) 100%);`,
    enemyTeam: [
        findPokemonByName("Lapras"),
        findPokemonByName("Squirtle"),
        findPokemonByName("Onix"),
        findPokemonByName("Mr mime"),
    ],
    enemyTokens: [findTokenByName("Univinted Guest"), findTokenByName("Slow")],
    award: {
        pokemons: findPokemonByName("Lapras") as pokemonInterface,
    },
};
