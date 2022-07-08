import { v4 } from "uuid";
import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

const swinub = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
    name: "Swinub",
    type: "Ice",
    hp: 21,
    attack: 4,
    specialAttack: 8,
    speed: 30,
    defense: 2,
    revenge: 3,
};

export const level15 = {
    id: "level15HARD",
    name: "level 15",
    color: `background: rgb(158,103,29);
background: linear-gradient(209deg, rgba(158,103,29,1) 10%, rgba(17,103,131,1) 100%);`,
    enemyTeam: [
        findPokemonByName("Wobbuffet"),
        swinub,
        findPokemonByName("Spearow"),
        findPokemonByName("Raichu"),
    ],
    enemyTokens: [
        findTokenByName("Slow"),
        findTokenByName("Ready"),
        findTokenByName("Unvinited Guest"),
        findTokenByName("Robber"),
    ],
    award: {
        pokemons: findPokemonByName("Wobbuffet"),
    },
};
