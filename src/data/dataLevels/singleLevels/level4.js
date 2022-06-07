import { v4 } from "uuid";

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
const swinub1 = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
    name: "Swinub",
    type: "Ice",
    hp: 19,
    attack: 6,
    specialAttack: 8,
    speed: 18,
    defense: 3,
    revenge: 3,
};

export const level4 = {
    id: "level4normal1",
    name: "level 4",
    color: "green",
    enemyTeam: [Turtwig, Grotle, swinub1],
    enemyTokens: [],
    award: {
        pokemons: examplePokemons.find((e) => e.name === "Turtwig"),
    },
};
