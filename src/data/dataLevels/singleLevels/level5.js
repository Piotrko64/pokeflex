import { v4 } from "uuid";
import { examplePokemons } from "../../../data/examplePokemons";
import { allTokens } from "../../allTokens";
const Turtwig = {
    id: v4(),

    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
    name: "Turtwig",
    type: "Grass",
    hp: 28,
    attack: 4,
    specialAttack: 7,
    speed: 27,
    defense: 4,
    revenge: 2,
};

const Torterra = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png",
    name: "Torterra",
    type: "Grass",
    hp: 60,
    attack: 9,
    specialAttack: 11,
    speed: 51,
    defense: 8,
    revenge: 4,
};
export const level5 = {
    id: "level5normal1",
    name: "level 5",
    color: "green",
    enemyTeam: [Turtwig, Torterra],
    enemyTokens: [allTokens.find((el) => el.name === "High Grass")],
    award: {
        tokens: allTokens.find((e) => e.name === "High Grass"),
    },
};
