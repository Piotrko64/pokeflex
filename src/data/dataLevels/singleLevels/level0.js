import { GiCirclingFish } from "react-icons/gi";
import { v4 } from "uuid";
import { allTokens } from "../../allTokens";
import { examplePokemons } from "../../examplePokemons";

const Raichu = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    name: "Raichu",
    type: "Electro",
    hp: 2,
    attack: 9,
    specialAttack: 13,
    speed: 36,
    defense: 1,
    revenge: 4,
};

export const level0 = {
    id: "level0normal",
    name: "level 0",
    color: `linear-gradient(
        141deg,
        rgba(255, 224, 143, 1) 0%,
        rgba(175, 133, 68, 1) 20%,
        rgba(179, 112, 44, 1) 77%,
        rgba(255, 224, 180, 1) 100%
    )`,
    enemyTeam: [Raichu],
    enemyTokens: [
        allTokens.find((e) => e.name === "Electro Action"),
        allTokens.find((e) => e.name === "Punch"),
    ],
    award: {
        pokemons: examplePokemons.find((e) => e.name === "Pikachu"),
        tokens: allTokens.find((e) => e.name === "Electro Action"),
    },
};
