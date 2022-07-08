import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

export const level17 = {
    id: "level17Normal",
    name: "level 17",
    color: `background: rgb(201,128,29);
background: linear-gradient(209deg, rgba(201,128,29,1) 10%, rgba(127,17,131,1) 100%);`,
    enemyTeam: [findPokemonByName("Mr mime"), findPokemonByName("Spearow"), findPokemonByName("Onix")],
    enemyTokens: [findTokenByName("Ready"), findTokenByName("Punch"), findTokenByName("Univinted Guest")],
    award: {
        tokens: findTokenByName("Ready"),
    },
};
