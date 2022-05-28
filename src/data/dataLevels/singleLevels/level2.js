import { v4 } from "uuid";
import { allTokens } from "../../allTokens";
import { examplePokemons } from "../../examplePokemons";

const Mime1 = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    name: "Mr mime",
    type: "Psychic",
    hp: 42,
    attack: 6,
    specialAttack: 8,
    speed: 24,
    defense: 4,
    revenge: 4,
};
const Mime2 = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    name: "Mr mime",
    type: "Psychic",
    hp: 48,
    attack: 6,
    specialAttack: 8,
    speed: 24,
    defense: 1,
    revenge: 5,
};

export const level2 = {
    id: "level2normal",
    name: "level 2",
    color: "linear-gradient(180deg, rgba(254,33,206,1) 0%, rgba(47,0,195,1) 89%)",
    enemyTeam: [Mime1, Mime2],
    enemyTokens: [
        allTokens.find((e) => e.name === "Fishing Road"),
        allTokens.find((e) => e.name === "Fountain"),
        allTokens.find((e) => e.name === "Univinted Guest"),
        allTokens.find((e) => e.name === "Lighter"),
    ],
    award: {
        pokemons: examplePokemons.find((e) => e.name === "Mr mime"),
    },
};
