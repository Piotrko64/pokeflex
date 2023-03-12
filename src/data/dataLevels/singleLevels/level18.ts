import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

export const level18 = {
    id: "level18HARD",
    name: "level 18",
    color: `background: rgb(80,145,163);
background: linear-gradient(209deg, rgba(50,195,183,1) 27%, rgba(44,88,99,1) 100%);`,
    enemyTeam: [
        findPokemonByName("Chikorita"),
        findPokemonByName("Swinub"),
        findPokemonByName("Gyarados"),
        findPokemonByName("Raichu"),
    ],
    enemyTokens: [findTokenByName("Slow"), findTokenByName("Fountain"), findTokenByName("Robber")],
    award: {
        pokemons: findPokemonByName("Torterra"),
    },
};
