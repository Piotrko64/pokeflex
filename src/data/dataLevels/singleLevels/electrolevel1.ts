import { v4 } from "uuid";
import { levelInterface } from "../../../types/levels/levelInterface";
import { findTokenByName } from "../../dataTokens/allTokens";

const Pikachu = {
    id: v4(),
    idAward: "Pika34535345",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    name: "Pikachu",
    type: "Electro",
    hp: 32,
    attack: 4,
    specialAttack: 8,
    speed: 22,
    defense: 1,
    revenge: 4,
};
const Raichu = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    name: "Raichu",
    type: "Electro",
    hp: 52,
    attack: 7,
    specialAttack: 9,
    speed: 12,
    defense: 0,
    revenge: 2,
};

export const electrolevel1: levelInterface = {
    id: "electrolevel1normal",
    name: "electro level 1",
    color: `linear-gradient(
        141deg,
        rgba(255, 224, 143, 1) 0%,
        rgba(175, 133, 68, 1) 20%,
        rgba(179, 112, 44, 1) 77%,
        rgba(255, 224, 180, 1) 100%
    )`,
    enemyTeam: [Pikachu, Raichu],
    enemyTokens: [
        findTokenByName("Electro Action"),
        findTokenByName("Electro Action"),
        findTokenByName("Electro Action"),

        findTokenByName("Electro Action"),
    ],
    award: {
        tokens: findTokenByName("Electro Action"),
    },
};
