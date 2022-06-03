import { v4 } from "uuid";
import { allTokens } from "../../dataTokens/allTokens";

import Tribe from "../../../Audio/mainSoundtracks/Tribe.wav";

// const Turtwig = {
//     id: v4(),

//     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
//     name: "Turtwig",
//     type: "Grass",
//     hp: 28,
//     attack: 4,
//     specialAttack: 7,
//     speed: 27,
//     defense: 4,
//     revenge: 2,
// };

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
    color: "green",
    enemyTeam: [Torterra],
    enemyTokens: [allTokens.find((el) => el.name === "High Grass")],
    award: {
        tokens: allTokens.find((e) => e.name === "High Grass"),
    },
    music: Tribe,
};
