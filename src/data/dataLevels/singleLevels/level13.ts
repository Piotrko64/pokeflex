import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

import Tribe from "../../../Audio/mainSoundtracks/Tribe.mp3";
import { OneTokenInterface } from "../../../types/pokemonTokenData/TokenInterface";

export const level13 = {
    id: "level13Normal",
    name: "level 13",
    color: `background: rgb(105,123,159);
background: linear-gradient(209deg, rgba(105,123,159,1) 47%, rgba(81,193,57,1) 100%);`,
    enemyTeam: [findPokemonByName("Chikorita"), findPokemonByName("Machamp"), findPokemonByName("Snorlax")],
    enemyTokens: [findTokenByName("Robber"), findTokenByName("Punch Machamp")],
    award: {
        tokens: findTokenByName("Robber") as OneTokenInterface,
    },
    music: Tribe,
};
