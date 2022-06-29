import { v4 } from "uuid";
import { allTokens, findTokenByName } from "../../dataTokens/allTokens";

import Tribe from "../../../Audio/mainSoundtracks/Tribe.mp3";

const Torterra = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png",
    name: "Torterra",
    type: "Grass",
    hp: 80,
    attack: 12,
    specialAttack: 7,
    speed: 50,
    defense: 20,
    revenge: 4,
};
export const level5 = {
    id: "level5normal1",
    name: "level 5",
    color: "#2B951B",
    enemyTeam: [Torterra],
    enemyTokens: [findTokenByName("High Grass")],
    award: {
        tokens: findTokenByName("High Grass"),
    },
    music: Tribe,
};
