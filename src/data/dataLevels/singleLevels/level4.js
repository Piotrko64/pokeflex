import { GiCirclingFish } from "react-icons/gi";
import { v4 } from "uuid";
import { allTokens } from "../../allTokens";
import { examplePokemons } from "../../../data/examplePokemons";
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
const Grotle = {
    id: v4(),

    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png",
    name: "Grotle",
    type: "Grass",
    hp: 57,
    attack: 7,
    specialAttack: 9,
    speed: 26,
    defense: 8,
    revenge: 2,
};
const Turtwig2 = {
    id: v4(),

    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
    name: "Turtwig",
    type: "Grass",
    hp: 34,
    attack: 4,
    specialAttack: 7,
    speed: 24,
    defense: 4,
    revenge: 2,
};

// const Torterra = {
//     id: v4(),

//     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png",
//     name: "Torterra",
//     type: "Grass",
//     hp: 75,
//     attack: 9,
//     specialAttack: 12,
//     speed: 51,
//     defense: 8,
//     revenge: 4,
// };
export const level4 = {
    id: "level4normal1",
    name: "level 4",
    color: "green",
    enemyTeam: [Turtwig, Grotle, Turtwig2],
    enemyTokens: [],
    award: {
        pokemons: examplePokemons.find((e) => e.name === "Turtwig"),
    },
};
