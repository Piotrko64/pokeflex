import { v4 } from "uuid";
import { GiWaterFountain, GiBlackHandShield, GiCirclingFish } from "react-icons/gi";

import fountain from "./dataTokens/powerTokens/fountain";
import resurrection from "./dataTokens/powerTokens/resurrection";
import fishingRod from "./dataTokens/powerTokens/fishingRod";
export const startPokemons = [
    {
        id: v4(),
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        name: "Squirtle",
        type: "Water",
        hp: 42,
        attack: 6,
        specialAttack: 7,
        speed: 12,
        defense: 4,
        revenge: 0,
    },
    {
        id: v4(),
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        name: "Charmander",
        type: "Fire",
        hp: 39,
        attack: 5,
        specialAttack: 7,
        speed: 18,
        defense: 3,
        revenge: 0,
    },
    {
        id: v4(),
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        name: "Bulbasaur",
        type: "Grass",
        hp: 37,
        attack: 6,
        specialAttack: 7,
        speed: 16,
        defense: 3,
        revenge: 2,
    },
];

export const startTokens = [
    {
        id: v4(),
        name: "Fountain",
        icon: <GiWaterFountain />,
        functionToken: fountain,
        desc: "Give your strongest pokemon **+16** hp and change its type to **Water**",
    },
    {
        id: v4(),
        name: "Resurrection",
        icon: <GiBlackHandShield />,
        functionToken: resurrection,
        desc: "A copy of the Pokemon that first appeared in the ***grave*** in this fight will appear in your field with **13hp**",
    },
];
