import { v4 } from "uuid";
import { allTokens } from "../../allTokens";

const Gyarados = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    name: "Gyarados",
    type: "Water",
    hp: 62,
    attack: 8,
    specialAttack: 12,
    speed: 16,
    defense: 1,
    revenge: 4,
};

const Greninja = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png",
    name: "Greninja",
    type: "Water",
    hp: 32,
    attack: 5,
    specialAttack: 12,
    speed: 20,
    defense: 0,
    revenge: 3,
};

export const level1 = {
    id: "level1normal",
    name: "level 1",
    color: "#0031ff",
    enemyTeam: [Gyarados, Greninja],
    enemyTokens: [
        allTokens.find((e) => e.name === "Fishing Road"),
        allTokens.find((e) => e.name === "Fountain"),
    ],
};
