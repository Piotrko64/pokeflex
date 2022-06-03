import { v4 } from "uuid";
import { allTokens } from "../../dataTokens/allTokens";

import { examplePokemons } from "../../examplePokemons";

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
    enemyTokens: [allTokens.find((e) => e.name === "Conflagration")],
    award: {
        pokemons: examplePokemons.find((e) => e.name === "Cyndaquil"),
        tokens: allTokens.find((e) => e.name === "Lighter"),
    },
};
