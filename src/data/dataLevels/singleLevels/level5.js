import { v4 } from "uuid";
import { examplePokemons } from "../../../data/examplePokemons";
import { allTokens } from "../../allTokens";
const Turtwig = {
    id: v4(),

    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
    name: "Turtwig",
    type: "Grass",
    hp: 32,
    attack: 4,
    specialAttack: 7,
    speed: 28,
    defense: 4,
    revenge: 2,
};
// const Grotle = {
//     id: v4(),

//     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png",
//     name: "Grotle",
//     type: "Grass",
//     hp: 57,
//     attack: 7,
//     specialAttack: 9,
//     speed: 26,
//     defense: 8,
//     revenge: 2,
// };

const Torterra = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png",
    name: "Torterra",
    type: "Grass",
    hp: 65,
    attack: 9,
    specialAttack: 12,
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
        pokemons: examplePokemons.find((e) => e.name === "Turtwig"),
    },
};
