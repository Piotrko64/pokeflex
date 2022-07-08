import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

export const level16 = {
    id: "level16Normal",
    name: "level 16",
    color: `background: rgb(112,60,6);
background: linear-gradient(117deg, rgba(122,60,6,1) 0%, rgba(227,14,69,1) 44%, rgba(98,157,75,1) 100%);`,
    enemyTeam: [
        findPokemonByName("Flareon"),
        findPokemonByName("Eevee"),
        findPokemonByName("Spearow"),
        findPokemonByName("Turtwig"),
    ],
    enemyTokens: [findTokenByName("Ready"), findTokenByName("Punch"), findTokenByName("Lighter")],
    award: {
        pokemons: findPokemonByName("Spearow"),
    },
};
