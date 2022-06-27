import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

export const level14 = {
    id: "level43HARD",
    name: "level 14",
    color: `background: rgb(80,145,163);
background: linear-gradient(209deg, rgba(80,145,163,1) 47%, rgba(62,66,99,1) 100%);`,
    enemyTeam: [
        findPokemonByName("Magikarp"),
        findPokemonByName("Onix"),
        findPokemonByName("Gyarados"),
        findPokemonByName("Raichu"),
    ],
    enemyTokens: [findTokenByName("Slow"), findTokenByName("Fountain")],
    award: {
        pokemons: findPokemonByName("Onix"),
    },
};
