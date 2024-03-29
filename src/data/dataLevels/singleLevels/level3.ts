import { v4 } from "uuid";
import { findTokenByName } from "../../dataTokens/allTokens";
import Tribe from "../../../Audio/mainSoundtracks/Tribe.mp3";

const Charizard = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    name: "Charizard",
    type: "Turbo Fire",
    hp: 80,
    attack: 10,
    specialAttack: 25,
    speed: 20,
    defense: 1,
    revenge: 3,
};

export const level3 = {
    id: "level3normal",
    name: "level 3",
    color: "red",
    enemyTeam: [Charizard],
    enemyTokens: [findTokenByName("Conflagration")],
    award: {
        tokens: findTokenByName("Lighter"),
    },
    music: Tribe,
};
